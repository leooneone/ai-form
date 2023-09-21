
<template>
  <div class="selected_list">
    <!--<fieldset class="selected_list">
    <legend>
      <span v-if="!state.selected.length">{{ nullTips }}</span>
      <span v-if="state.selected.length">已选择 {{ state.selected.length }} 项</span>
    </legend>-->
    <span v-if="state.selected.length > -1">
      <span v-if="collapseTags === 0 || state.selected.length < collapseTags">
        <el-tag
          :closable="closable"
          v-for="(item, idx) in state.selected"
          :size="collapseTagSize"
          class="mx-1"
          :key="idx"
          hit
          disable-transitions
          @close="deleteTag($event, item)"
          :type="item.tagType || `primary`"
        >
          {{ item.name }}
        </el-tag>
      </span>
      <span v-else>
        <el-tag
          :closable="closable"
          :size="collapseTagSize"
          class="mx-1"
          hit
          disable-transitions
          v-for="index of collapseTags"
          :key="index"
          @close="deleteTag($event, state.selected[index - 1])"
        >
          {{ state.selected[index - 1].name }}
        </el-tag>
        <el-tag
          v-if="state.selected.length > collapseTags"
          :closable="closable"
          size="collapseTagSize"
          class="mx-1"
          hit
          disable-transitions
        >
          <el-tooltip
            :fallback-placements="['bottom', 'top', 'right', 'left']"
            effect="light"
            placement="bottom"
          >
            <template #default>
              <span class="el-select__tags-text"
                >+ {{ state.selected.length - collapseTags }}</span
              >
            </template>
            <template #content>
              <div class="el-select__collapse-tags">
                <div
                  v-for="(item, idx) in state.selected.slice(collapseTags)"
                  :key="idx"
                  class="el-select__collapse-tag"
                >
                  <el-tag
                    :type="item.tagType || `primary`"
                    @close="deleteTag($event, item)"
                    class="in-tooltip"
                    :closable="closable"
                    :size="collapseTagSize"
                    disable-transitions
                    :style="{ margin: '2px' }"
                  >
                    {{ item.name }}
                  </el-tag>
                </div>
              </div>
            </template>
          </el-tooltip>
        </el-tag>
      </span></span
    >
    <div v-else>
      <slot></slot>
    </div>
  </div>
  <!--</fieldset>-->
</template>
<script  lang="ts" setup name="AiTagInput"> 
import { reactive,defineProps,watch } from "vue"
const emits=defineEmits(['update:modelValue', 'remove-tag']);
  const state=reactive( 
    {
      selected: [] as Array<any>,
    })

  const props=defineProps( {
    nullTips: {
      type: String,
      default: '请选择',
    },
    closable: {
      type: Boolean,
      default: false,
    }, //没有选择时的标题

    modelValue: {
      type: [Array],//, String, Number, Boolean, Object],
      default: undefined,
    },
    placeholder: {
      type: String,
    },
    collapseTags: {
      type: Number,
      default: 0,
    },
    collapseTagsTooltip: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Boolean,
      default: true,
    },
    collapseTagSize: { type: String, default: 'mini' },
    // eslint-disable-next-line vue/require-prop-types
    tagType: { type: String, default: 'info' },
  })
  watch(
  () => props.modelValue,
  (val:any) => { 
state.selected = val
  },
  {immediate: true,}
);
  
   const deleteTag=(event, tag) =>{
      const index = state.selected.indexOf(tag)

      if (index > -1) {
        const value = props.modelValue.slice()
        value.splice(index, 1)

        //  this.modelValue.splice(index, 1)
        // this.$emit(UPDATE_MODEL_EVENT, value)

        // this.$emit(CHANGE_EVENT, val)
        emits('update:modelValue', value) // tag.value||tag)

         emits('remove-tag', tag)
      }
      event.stopPropagation()
    } 
</script>
<style scoped lang="scss">
.tag-form-item {
  span {
    margin-right: 10px;
  }
}
legend {
  //   background-color: #ccc;
  color: black;
  padding: 0px;
}

.selected_list {
  width: 100%;

  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 30px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;

  span {
    margin-right: 10px;
    line-height: 12px;
    white-space: nowrap;
    border-radius: 2px;
  }
}
</style>