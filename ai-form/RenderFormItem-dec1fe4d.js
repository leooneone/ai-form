import { defineComponent as n, defineAsyncComponent as d, inject as r, provide as f, resolveComponent as u, openBlock as b, createBlock as v, withCtx as h, createVNode as s, unref as x, mergeProps as I } from "vue";
const w = n({
  name: "render-form-item"
}), g = /* @__PURE__ */ n({
  ...w,
  props: {
    activeId: String || Number,
    item: Object,
    conf: Object
  },
  setup(e) {
    const o = d(() => import("./RenderComponent-bcc47531.js").then((t) => t.R)), m = () => {
    }, l = r("activeFormItem");
    return f("activeFormItem", l), (t, i) => {
      const c = u("el-form-item");
      return b(), v(c, {
        "label-width": e.item.showLabel ? `${e.item.labelWidth || 100}px` : "0px",
        label: e.item.showLabel ? e.item.label : "",
        prop: e.conf.mode === "designer" ? void 0 : e.item.vModel,
        required: e.item.required
      }, {
        default: h(() => [
          s(x(o), I({
            onOnInput: i[0] || (i[0] = (a) => e.item.defaultValue = a),
            onUpdate: m,
            "active-id": e.activeId
          }, e.item, {
            item: e.item,
            conf: e.conf,
            class: "item-tool-box"
          }), null, 16, ["active-id", "item", "conf"])
        ]),
        _: 1
      }, 8, ["label-width", "label", "prop", "required"]);
    };
  }
});
export {
  g as default
};
