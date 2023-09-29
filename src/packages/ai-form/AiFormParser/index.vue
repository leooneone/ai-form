/**
 *Copyright: Copyright (c) 2023
 *Author:Leo
 *Version 1.0
 *Title: 表单解析器
 *GitHub: https://github.com/leooneone/ai-form
 */

<template>  
  <el-form class="myForm"
    :model="state.formConf.model"
    ref="myFormRef"
    :size="state.formConf.size"
    :label-position="state.formConf.labelPosition"
    :disabled="state.loading||state.formConf.disabled"
    :label-width="state.formConf.labelWidth + 'px'"
    :gutter="state.formConf.gutter"
    :rules="state.formRules"
  >
    <render-panel
      :list="props.conf.data"
      :animation="200"
      group="componentsGroup"
      tag="el-row"
      :conf="state.formConf"
      :style="{ marginLeft: 0, alignContent: 'start', height: '100%' }"
      :gutter="props.conf.gutter"
    ></render-panel>
  </el-form>
</template>

<script lang="ts" setup name="AiFormParser" > 
// import CodeTypeDialog from './CodeTypeDialog'
import RenderPanel from '../Render/RenderPanel.vue'
import { 
  // getIdGlobal,
  // saveIdGlobal,
  getFormConf,
} from '../AiFormDesigner/utils/db'

import { trigger } from '../AiFormDesigner/configs/trigger.js'
import { onBeforeMount, reactive, ref,nextTick,getCurrentInstance } from 'vue'
const formConfInDB = getFormConf()
const { proxy } = getCurrentInstance() as any;
const myFormRef =ref()
 const props=defineProps( ['conf','loading'])
  
 const state=reactive({
      // idGlobal, 
      formConf: Object.assign({  tableRefs: {},model:JSON.parse(JSON.stringify(props.conf.model))},props.conf.formConf||{})
      //{  tableRefs: {},model:JSON.parse(JSON.stringify(this.conf.model)),
    
    //}
    ,
      formRules: {},
     
      labelWidth: 100, 
      drawerVisible: false,  
    })
 
 
  onBeforeMount(()=> {
    if (typeof props.conf === 'object' && props.conf !== null) {
 
      Object.assign(state.formConf, props.conf)
    } else { 
      

      formConfInDB && (state.formConf = formConfInDB)
    }
 
    state.formConf.mode = 'parser'

    getFields(state.formConf.data)
    nextTick((_) => {
      //干点什么呢
    })
  })

 
 
  const  getFields=(el)=> {
      // if (flag) return // flag === true 代表找到了一个了 不需要再找下一个
      if (Array.isArray(el)) {
        el.forEach((e) => {
          if (e.children)  getFields(e.children)

          if (e.vModel) {
           // e.rules =  buildRules(e)
            state.formRules[e.vModel] =  buildRules(e) 
          }

          return e
        }) // && (flag = true)
      }
    }

    ///检查表格数据
   const checkTableData=()=> {
      let valid = true
      Object.keys(state.formConf.tableRefs).forEach((vModel) => {
        const ref=state.formConf.tableRefs[vModel]
        
        const res = ref.submit() // 返回false或表单数据
        res ? (state.formConf.model[vModel] = res) : (valid = false)
      })
      return valid
    }
   const submitForm=(callback)=> {
      let formEl =  myFormRef.value
      if (!formEl) return

      const isTableValid = checkTableData()

      formEl.validate((valid) => {
        if (valid) {
           if (!isTableValid) return false 
            if(callback){
              callback(state.formConf.model)
            }
         //proxy.$modal.msgErrorSuccess('提交到后台')
        } else { 
          proxy.$modal.msgError('验证失败')
          
          return false
        }
      }) 
    }
 
 /**
 * 组织单元必填规则 
 */
 const setOUSelectRule = ( conf )=> {
  return { 
    validator: (rule, value, callback) => {
      var val =value// ctx.formModel[rule.field]
      if (Object.keys(val || {}).length === 0) {
        callback()
        return
      }
      var count = 0
      conf.tabs.forEach(key => {
        val && Array.isArray(val[key]) && (count += val[key].length)
      })
      callback(count ? undefined : new Error(`${conf.title}不能为空`))
    }, 
    trigger: trigger[conf.tag],
    type: 'object',
    required: true, 
  }
}
    /**
     * 收集表单必填项并组装成ElementUI表单校验得rules选项
     * 表格除外 表格自带校验
     */
  const  buildRules=(item:any) =>{
      if (item.vModel === undefined || !trigger[item.tag]) return
      const rules = [] 
      //如果禁用了设置为非必填
      if(item.disabled)
      item.required=false
      if (item.required) {
        const type = Array.isArray(item.defaultValue) ? 'array' : undefined
        let message = Array.isArray(item.defaultValue) ? `请至少选择一个` : item.placeholder //'请输入'+item.label//
        if (message === undefined) message = `${item.label}不能为空` 
        if(item.tag==='ai-ou-select')
        {
          rules.push( setOUSelectRule( item ) )

        }else 
        {  
           let rule={ required: true, message, trigger: trigger[item.tag] }
          if(type)
            rule['type']=type
          rules.push(rule)
        }
       
      }
      // 自定义正则匹配
      if (item.regList && Array.isArray(item.regList)) {
        item.regList.forEach((item:any) => {
          if (item.pattern) {
            rules.push({ pattern: eval(item.pattern), message: item.message, trigger: trigger[item.tag] })
          }
        })
      }
      return rules
      /// ctx.ruleList[item.vModel] = rules
    } 

    defineExpose({

      submitForm
    })
</script>

<style lang="scss"  scoped    >
///修复错误提示被遮挡问题
.myForm{
  
  :deep( 
  .el-form-item__content) {
     
    .el-form-item__error{
      position: relative !important;
      text-align: left;
      top:0px;
      margin-top:2px;
      margin-bottom:5px;
    }
  }

}
</style>
