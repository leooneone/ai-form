<!--
  根据approvalFlow项目中input-table 组件重构
  Develped by Leo on 2023.9.21
-->
<template>
  <div class="ai-table-box-parent">
  
    <div class="ai-table-box" :class="[props.config.type]">
      
      <el-table
        v-if="['table', 'default'].includes(props.config.type)"
        :data="state.tableFormData"
        border
        class="ai-table"
        @cell-click="focusInput"
        v-bind="props.config.tableConf || {}"
        :show-summary="props.config['show-summary']"
        :summary-method="getTableSummaries"
      >
        <el-table-column width="50" align="center">
          <!-- 序号 -->
          <template #default="{ row,$index }">
            <div class="row-action">
              <span class="index">
                {{ $index + 1 }}
              </span>
              <el-popconfirm title="确定删除该行数据吗？" @confirm="removeRow($index)">
                <template #reference>
                  <span>
                    <el-icon class="delete-btn"><ele-Delete /></el-icon>
                  </span>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </el-table-column>
        <!-- 组件列 -->
        <el-table-column v-for="(head, cindex) in state.tableData" :key="head.vModel" :min-width="head['min-width']" :prop="head.vModel">
          <template #header>
            <span style="color: #f56c6c" v-if="head.required">*</span>
            {{ head['label'] }}
          </template>
          <template #default="{$index,row}">
            <!-- 单选框组 多选框组 都替换成下拉 并添加options -->
            <template v-if="['el-select', 'el-checkbox-group', 'el-radio-group'].includes(head.tag)">
              <el-select
                v-model="state.tableFormData[$index][cindex].value"
                placeholder="请选择"
                :multiple="head.tag === 'el-checkbox-group' || getConfById(head.vModel).multiple"
                @change="onFormDataChange($index, cindex, 'el-select')"
              >
                <el-option v-for="(opt, oindex) in head.options" :key="oindex" :label="opt.label" :value="opt.value"> </el-option>
              </el-select>
            </template>
            <!-- 上传 -->
            <template v-else-if="head.tag === 'el-upload'">
              <el-upload
                v-bind="getConfById(head.vModel)"
                :on-success="(res) => onUploadSuccess(res, state.tableFormData[$index][cindex])"
                @mouseleave.native="hideUploadList"
                @mouseenter.native="showUploadList"
              >
                <template #default>
                  <span>
                    已上传
                    {{ state.tableFormData[$index][cindex].value.length }}
                  </span>
                </template>
              </el-upload>
            </template>
            <!-- 其他 -->
            <component
              v-else
              :is="head.tag"
              :rowIndex="$index"
              v-model="state.tableFormData[$index][cindex].value"
              v-bind="getConfById(head.vModel)"
              :formData="formData"
              @change="onFormDataChange($index, cindex, head.tag)"
            >
            </component>
            <div class="error-tip" v-show="!state.tableFormData[$index][cindex].valid">不能为空</div>
          </template>
        </el-table-column>
      </el-table>
      <template v-if="props.config.type === 'list'">{{ modelValue }}
        <div v-for="(row, rindex) in state.tableFormData" :key="rindex" class="list-row">
          <el-tooltip content="删除">
            <el-icon @click="removeRow(rindex)"><ele-Delete></ele-Delete></el-icon>
          </el-tooltip>
          <div v-for="(conf, cindex) in props.config.children" :key="cindex" class="row-item" :class="{ error: !state.tableFormData[rindex][cindex].valid }">
            <div :style="{ width: labelWidth }">
              <span style="color: #f56c6c" v-if="conf.required">*</span>
              {{ conf.label }}
            </div>
            <div :style="{ 'margin-left': labelWidth }">

              <component 
              :is="conf.tag"
              :rowIndex="rindex"
              v-model="state.tableFormData[rindex][cindex].value"
              v-bind="getConfById(conf.vModel)"
              :form-data="formData"
              @change="onFormDataChange(rindex, cindex, conf.tag)"
            >
            </component>
              <RenderPanel v-if="false"
                :formData="formData"
                :conf="Object.assign({ rowIndex: rindex }, conf)"
                :size="formSize"
                :value="state.tableFormData[rindex][cindex]"
                :key="conf.renderKey"
                style="max-width: 350px"
                @input="
                  (payload) => {
                    state.tableFormData[rindex][cindex]['value']= payload
                    onFormDataChange(rindex, cindex, conf.tag)
                  }
                "
              />
            </div>
            <span class="error-tip"> 不能为空 </span>
          </div>
        </div>
      </template>
      <div class="list-summary" v-if="props.config.type === 'list' && props.config['show-summary']">
        <div style="padding: 6px 12px; float: left">合计</div>
        <div style="overflow: hidden; padding-top: 6px">
          <div v-for="(val, name) in state.listSummation" :key="name">{{ val.label }}：{{ val.sum }}</div>
        </div>
      </div>
      <div class="actions">
        <el-button @click="addRow" type="text">
          <el-icon @click="removeRow(rindex)"><ele-Plus /></el-icon>
          {{ props.config.actionText }}
        </el-button>
      </div>
    </div>
  </div>
</template>
  <script lang="ts" setup name="AiSubForm" >
  import { reactive ,watch,computed,defineEmits,defineProps,onMounted,nextTick} from 'vue'
import { useableProps } from './config'
import RenderPanel from './render.jsx'
const emits=defineEmits(['update:modelValue'])
// useableProps —— 需要的组件属性 很多属性在表格中没用 需要过滤
  
 const props=defineProps( {
    config: {
      type: Object,
      default: () => {},
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
    formData: Object,
    labelWidth: String,
    formSize: String,
  })

  const state=reactive( {
  
      tableFormData: [],
      tableData: [],
      listSummation: {},
      isAddRow: true, // list类型下 添加行数据 number类型组件会进行校验 产生不需要的结果 在这里进行添加行数据判断 hack
    })

  onMounted(()=> {
    state.tableData = props.config.type === 'table' ? filterProps() :  props.config.children
    if (props.modelValue && props.modelValue.length) {
      props.modelValue.forEach((t) =>  addRow(t))
    } else {
       addRow()
    }
  })

 const clearAddRowFlag=()=> {
      nextTick(() => {
        state.isAddRow = false
      })
    }
    /**
     * @event cell-click Table 单元格点击事件
     * 点击单元格 聚焦单元格中的input
     */
  const  focusInput=(row, column, cell, event) =>{
      const child = cell.querySelector('.cell').firstElementChild
      const input = child && child.querySelector('input')
      input && input.focus()
    }
    /**
     * 过滤不需要的组件配置， 表格中的组件需要统一样式
     */
    const filterProps=() =>{
      const conf = props.config.children
      if (!conf) return []
      const getUseableProp = (item) => useableProps.find((t) => t.tag === item.tag)
      return conf.map((t) => {
        const useable = getUseableProp(t)
        console.log('useable',useable,t)
        const res = useable ? useable.props.reduce((r, key) => ((r[key] = t[key]), r), {}) : t
        return useable.forceProp ? Object.assign({}, res, useable.forceProp) : res
      })
    }
   const onUpdate=()=>{
      const newVal = state.tableFormData.map((row) => row.reduce((p, c) => ((p[c.vModel] = c.value), p), {}))
        //触发数据更新时间，让计算公式捕捉
        emits('update:modelValue', newVal)
        if (props.config.type === 'list') {
          getListSummaries()
        }
    }
    const onFormDataChange=(rowIndex, colIndex, tag) =>{
      if (isAddRow||tag==='ai-calculate') return
      const data = state.tableFormData[rowIndex][colIndex]
      data.required && (data.valid = checkData(data))
       
      if (['ai-amount', 'el-input-number'].includes(tag)) {
        onUpdate()
       
      }
    }
    /**
     * 校验单个表单数据
     * @param {CmpConfig} 组件配置对象
     */
    const checkData=({ tag, value }) =>{
      if ([null, undefined, ''].includes(value)) return false
      if (tag === 'ai-ou-select') return this.checkOrgData(value)
      if (Array.isArray(value)) return value.length > 0
      return true
    }
    /**
     * 对组织机构部门控数据单独校验
     */
   const checkOrgData=(data) =>{
      const isArray = Array.isArray
      if (typeof data !== 'object' || isArray(data)) return false
      let count = 0
      for (let key in data) {
        count += isArray(data[key]) ? data[key].length : 0
      }
      return count > 0
    }
    /**
     * 校验表格数据必填项
     */
   const submit=() =>{
      let res = true
      const checkCol = (col) => col.required && !checkData(col) && (res = col.valid = false)
      state.tableFormData.forEach((row:Array<any>) => row.forEach(checkCol))
      return res ? state.tableFormData.map((row:Array<any>) => row.reduce((p, c) => ((p[c.vModel] = c.value), p), {})) : false
    }
    /**
     * 根据vModel获取完整组件配置
     */
    const getConfById=(vModel) =>{
      return state.tableData.find((t) => t.vModel === vModel)
    }
    /**
     * 获取默认行数据
     */
    const getEmptyRow=(val) =>{ 
      return state.tableData.map((t) => {
        let res = {
          tag: t.tag,
        //  formId: t.formId,
          value: (val && val[t.vModel]) || t.defaultValue,
          options: t.options, // 下拉 单选 多选
          valid: true,
          vModel: t.vModel,
          required: t.required,
        }
        
        if (t.tag === 'el-upload') res['value']= t.defaultValue     
        return res
      })
    }

    const removeRow=(index) =>{
      state.tableFormData.splice(index, 1)//触发数据更新时间，让计算公式捕捉
      onUpdate()
    }

   const addRow=(val) =>{
      state.isAddRow = true
      if (!Array.isArray(state.tableFormData)) {
        state.tableFormData = []
      }
      state.tableFormData.push(getEmptyRow(val))
      clearAddRowFlag()
    }

    const getCmpValOfRow=(row, key) =>{
      // 获取数字相关组件的输入值
      const isNumCmp = (tag) => ['ai-amount', 'ai-calculate','el-input-number', 'el-slider'].includes(tag)
      const target = row.find((t) => t.vModel === key)
      if (!target) return NaN
      if (isNumCmp(target.tag)) return target.value || 0
      return NaN
    }

    const getListSummaries=()=> {
      state.tableData.forEach((row) => {
        const isNumCmp = (tag) => ['ai-amount', 'el-input-number', 'el-slider'].includes(tag)
        if (!isNumCmp(row.tag)) return
        const sum = state.tableFormData.reduce((sum, d) => sum + getCmpValOfRow(d, row.vModel), 0)
        state.listSummation[ row.vModel]= {
          label: row.label,
          sum,
        }
      })
    }
    /**
     * 对表格进行合计 目前只支持数字，金额，滑块
     */
    const getTableSummaries=(param) =>{
      const { columns, data } = param
      const sums = []
      if (state.tableData.length + 1 !== columns.length) return [] // 防止多次加载
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '合计'
          return
        }
        const sumVal = data.reduce((sum, d) => sum + getCmpValOfRow(d, column.property), 0)
        sums[index] = Number.isNaN(sumVal) ? '' : sumVal
      })
      return sums
    } 

   const onUploadSuccess=(response, target) =>{
      !Array.isArray(target.value) && (target.value = [])
      target.value.push(response)
    }

    const showUploadList=(ev) =>{
      const btn = ev.currentTarget
      const { offsetX, clientX, clientY, offsetY } = ev
      const list = btn.querySelector('.el-upload-list--text')
      list && list.classList.add('show')
      const unit = (v) => v + 'px'
      list.style.left = unit(clientX - offsetX)
      list.style.top = unit(clientY - offsetY + btn.clientHeight)
    }

    const hideUploadList=(ev) =>{
      const btn = ev.currentTarget
      const list = btn.querySelector('.el-upload-list--text')
      list && setTimeout(() => list.classList.remove('show'), 500)
    }

    const reset=() =>{
      state.tableData.map((t) => {
        let index = state.tableFormData[0].findIndex((c) => c.vModel === t.vModel)
        if (index === -1) return
        for (let i = 0; i < state.tableFormData.length; i++) {
          state.tableFormData[i][index].value = t.defaultValue
        }
      })
    } 

 
</script>
<style lang="scss" scoped>
.ai-table-box {
  .el-table {
    font-size: 12px !important;
  }
  margin-bottom: 0px;
 
  .row-action {
    display: flex;
    justify-content: center;
    align-items: center;

    .el-icon.delete-btn {
      position: absolute;
      opacity: 0;
      z-index: -1;
      transform: translate(-50%, -50%);
      cursor: pointer;
    }
  }
  .actions {
    text-align: center;
    border: 1px solid #ebeef5;
    border-top: none;
  }
  .list-summary {
    line-height: 24px;
    overflow: hidden;
    border: 1px solid #e5e5e5;
    border-top: none;
  }

  &.list .error-tip {
    font-size: 12px;
    padding-left: 6px;
    color: #f56c6c;
    position: absolute;
    left: 100px;
    top: 0;
    z-index: -1;
    transition: bottom 0.3s;
    min-height: auto;
  }
  &.list .list-row {
    padding: 18px 0 10px;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
    position: relative;

    &:hover .delete-btn {
      display: block;
    }
    .row-item > div:first-child {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 32px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .delete-btn {
      position: absolute;
      right: 10px;
      top: 20px;
      z-index: 999;
      cursor: pointer;
      display: none;
    }
    .delete-btn:hover {
      color: #000;
    }
    .row-item {
      margin-bottom: 18px;
      position: relative;
    }
    .row-item.error .error-tip {
      top: 74%;
      z-index: 1;
    }
  }
}

 
///
.ai-table-box-parent {
  :deep(.ai-table-box.list .list-row .row-item.error) .el-input__inner {
    border-color: #f56c6c;
  }

  :deep(.ai-table-box.table) {
    .el-table__row:hover .index {
      display: none;
    }
    .el-table__row:hover .el-icon.delete-btn {
      z-index: 9;
      opacity: 1;
    }
 
    .el-select .el-input__wrapper.is-focus,
    .el-select .el-input.is-focus .el-input__wrapper {
      padding: 0 0 0 0!important;
      box-shadow: none!important;
      
    }
    
    .el-input__wrapper {
      padding: 0 0 0 0;
      box-shadow: none;
    }
    .el-input__inner,
    .el-textarea__inner {
      width: 100%;
      border: none;
      text-align: left;
      padding-right: 10px;
      padding-left: 10px;
    }
    //使用原样式
    // .el-input-number .el-input
    // {
    //   .el-input__wrapper {
    //     box-shadow: 0 0 0 1px var(--el-input-border-color,var(--el-border-color)) inset;
 
    //     .el-input__inner{

            
    //   text-align: center;
    //     }
    //   }
    // }
    .el-date-editor .el-input__prefix {
      left: -10px;
      top: 1px;
    }
    .el-date-editor .el-input__suffix {
      top: 1px;
      right: 0;
    }
    .el-input-number {
      width: 100%;
    }
    .el-upload--text {
      width: 100%;
      height: 100%;
      padding-top: 6px;
      white-space: nowrap;
    }
    .input-box {
      border: none !important;
      min-height: 40px !important;
      padding-left: 0 !important;
    }
    .el-table .el-table__body td {
      padding: 0;
      background: #fff !important;
    }
    .el-table .el-table__body td .error-tip {
      font-size: 12px;
      padding-left: 6px;
      color: #f56c6c;
    }
    .el-table .el-table__body td .cell {
      position: relative;
    }
    .el-table .el-table__body td .cell > div {
      width: 100%;
      min-height: 40px;
    }
    .el-table .el-table__body td:not(:first-child) {
      vertical-align: top;
    }
    .el-table .el-table__body td.el-table__cell:not(:first-child)::after,
    .el-table .el-table__body td.el-table__cell:not(:first-child)::before {
      content: '';
      width: 10px;
      height: 10px;
      background: #fff;
      position: absolute;
      border: 2px solid transparent;
      transition: border-color 0.3s;
    }
    .el-table .el-table__body td.el-table__cell:not(:first-child)::after {
      border-top: none;
      border-right: none;
      left: 0;
      bottom: 0;
    }
    .el-table .el-table__body td.el-table__cell:not(:first-child)::before {
      border-bottom: none;
      border-left: none;
      right: 0;
      top: 0;
    }
    .el-table .el-table__body td.el-table__cell:not(:first-child):hover::after,
    .el-table .el-table__body td.el-table__cell:not(:first-child):hover::before {
      border-color: #f00 !important;
    }
    .ai-ou-select {
      position: relative;
    }
    .el-slider {
      padding-left: 10px;
    }
    .el-upload-list--text {
      position: fixed;
      margin-left: -6px;
      background: #fff;
      box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
      max-width: 250px;
      transition: margin-top 0.3s;
      display: none;
      z-index: 9;
    }
    .el-upload-list--text.show {
      display: block;
    }
  }
}
</style>
