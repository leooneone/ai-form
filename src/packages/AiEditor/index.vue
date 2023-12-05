<!---
封装 tinymce from form-generator
Modified by Leo 2023.9.24
-->
<template>
  <div
    v-html="props.modelValue"
    v-if="props.disabled"
    style="width: 100%"
  ></div>
  <textarea
    v-else
    :id="state.tinymceId"
    style="visibility: hidden; width: 100%"
  />
</template>

<script   lang="ts"  setup name="AiEditor">
import loadTinymce from "../utils/loadTinymce.js";
import { plugins, toolbar } from "./config";
//import { debounce } from 'throttle-debounce'
import { debounce } from "../utils/index.js";
import { onMounted, onUnmounted, reactive,watch } from "vue";
const emits = defineEmits(["update:modelValue"]);
import { useAttrs } from 'vue'
const attrs = useAttrs()
let num = 1;
const props = defineProps({
 
  modelValue: {
    type: String,
    default: "",
  },
  disabled: { type: Boolean, default: false },
});

const state = reactive({
  tinymceId: `tinymce${+new Date()}${num++}`,
});
onMounted(() => {
  if (props.disabled) return;
  var that = this;     
  
  loadTinymce((tinymce) => { 
  //window.tinymce=tinymce
    // eslint-disable-next-line global-require
    //var res =import.meta.glob("./zh_CN.js");
     
    let conf = {
      selector: `#${state.tinymceId}`,
      language: "zh_CN",
      menubar: "file edit insert view format table",
      plugins,
      toolbar,
      height: 300,
      readonly: props.disabled ? 1 : 0,
      branding: false,
      object_resizing: false,
      end_container_on_empty_block: true,
      powerpaste_word_import: "clean",
      code_dialog_height: 450,
      code_dialog_width: 1000,
      advlist_bullet_styles: "square",
      advlist_number_styles: "default",
      default_link_target: "_blank",
      link_title: false,
      nonbreaking_force_tab: true,
    };
    conf = Object.assign(conf, attrs);
    conf.init_instance_callback = (editor) => {
      if (props.modelValue) editor.setContent(props.modelValue);
      vModel(editor);
    };
    tinymce.init(conf);
  });
});

onUnmounted(() => {
  destroyTinymce();
});

 
const vModel = (editor) => {
  
  // 控制连续写入时setContent的触发频率
  const debounceSetContent = debounce(editor.setContent, 250); //(250, editor.setContent)

  watch(
    () => props.modelValue,
    (val, prevVal) => {
      if (editor && val !== prevVal && val !== editor.getContent()) {
        if (typeof val !== "string") val = val.toString();
        debounceSetContent.call(editor, val);
      }
    }
  );

  editor.on("change keyup undo redo", () => {
    emits("update:modelValue", editor.getContent());
  });
  ///增加黏贴自动上传文件功能
  editor.on("paste", function (e) {
    // 业务逻辑是单张图片的上传，所以取的1
    const file = e.clipboardData.files[0];

    // if (file) {
    //   const reader = new FileReader()

    //   reader.readAsDataURL(file)
    //   // 监听读取完成
    //   reader.onload = async function (e: any) {
    //     const src = e.target.result
    //     const blob = that.base64ToBlob(src)
    //     const data = new FormData()
    //     data.append('file', blob, 'why.png')
    //     // uploadImg 自定义的一个图片上传的方法
    //     const { url } = await uploadImg(data)
    //     editor.execCommand('mceInsertContent', false, `<img src="${url}" />`)
    //   }
    // }
  });
};
const base64ToBlob = (base64Buf) => {
  const arr = base64Buf.split(",");
  const typeItem = arr[0];
  const mime = typeItem.match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
const destroyTinymce = () => {
  if (!window.tinymce) return;
  const tinymce = window.tinymce.get(state.tinymceId);
  if (tinymce) {
    tinymce.destroy();
  }
};
</script>
