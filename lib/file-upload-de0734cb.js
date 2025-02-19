import { defineComponent as _, inject as I, ref as N, reactive as R, computed as p, resolveComponent as i, openBlock as S, createElementBlock as U, createVNode as o, withCtx as t, createElementVNode as s, createTextVNode as n, pushScopeId as b, popScopeId as z } from "vue";
import { e as L } from "./RenderComponent-a3ada1f1.js";
import { a as T } from "./index-89545fe5.js";
import "./RenderItem-9150195a.js";
import "element-plus";
const A = (a) => (b("data-v-690fe373"), a = a(), z(), a), B = /* @__PURE__ */ A(() => /* @__PURE__ */ s("div", { class: "el-upload__text" }, [
  /* @__PURE__ */ n("拖拽上传或"),
  /* @__PURE__ */ s("em", null, "点击上传")
], -1)), E = { class: "dialog-footer" }, j = _({
  name: "admin/file/upload"
}), H = /* @__PURE__ */ _({
  ...j,
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  setup(a, { expose: f }) {
    const m = I("getToken"), d = N(), e = R({
      showDialog: !1,
      sureLoading: !1,
      fileDirectory: "bpm",
      fileReName: !0,
      fileList: []
    }), g = p(() => ({}).VITE_API_URL + "/api/admin/file/upload-file"), h = p(() => ({ Authorization: "Bearer " + m() })), v = async (l = {}) => {
      e.showDialog = !0;
    }, y = (l, c, r) => {
      l != null && l.success && L.emit("refreshFile", l.data);
    }, w = async () => {
      d.value.clearFiles(["success", "fail"]);
    }, x = () => {
      e.showDialog = !1;
    }, D = async () => {
      d.value.submit(), e.showDialog = !1;
    };
    return f({
      open: v
    }), (l, c) => {
      const r = i("UploadFilled"), k = i("el-icon"), C = i("el-upload"), u = i("el-button"), V = i("el-dialog");
      return S(), U("div", null, [
        o(V, {
          modelValue: e.showDialog,
          "onUpdate:modelValue": c[0] || (c[0] = (F) => e.showDialog = F),
          title: a.title,
          draggable: "",
          width: "600px"
        }, {
          footer: t(() => [
            s("span", E, [
              o(u, {
                onClick: w,
                size: "default"
              }, {
                default: t(() => [
                  n("清空已上传")
                ]),
                _: 1
              }),
              o(u, {
                onClick: x,
                size: "default"
              }, {
                default: t(() => [
                  n("取 消")
                ]),
                _: 1
              }),
              o(u, {
                type: "primary",
                onClick: D,
                size: "default",
                loading: e.sureLoading
              }, {
                default: t(() => [
                  n("确 定")
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          default: t(() => [
            s("div", null, [
              o(C, {
                ref_key: "uploadRef",
                ref: d,
                action: g.value,
                headers: h.value,
                data: { fileDirectory: e.fileDirectory, fileReName: e.fileReName },
                drag: "",
                multiple: "",
                "auto-upload": !1,
                "on-success": y
              }, {
                default: t(() => [
                  o(k, { class: "el-icon--upload" }, {
                    default: t(() => [
                      o(r)
                    ]),
                    _: 1
                  }),
                  B
                ]),
                _: 1
              }, 8, ["action", "headers", "data"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const M = /* @__PURE__ */ T(H, [["__scopeId", "data-v-690fe373"]]);
export {
  M as default
};
