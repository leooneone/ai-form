import { defineComponent as k, reactive as x, resolveComponent as s, openBlock as o, createBlock as d, withCtx as t, createVNode as n, createCommentVNode as r, createTextVNode as V, createElementVNode as _ } from "vue";
const C = /* @__PURE__ */ _("br", null, null, -1), v = /* @__PURE__ */ _("br", null, null, -1), U = /* @__PURE__ */ _("br", null, null, -1), N = /* @__PURE__ */ k({
  __name: "index",
  props: ["data"],
  setup(b) {
    const e = b, i = x({
      currentTab: "span"
    });
    return (f, a) => {
      const u = s("el-slider"), m = s("el-form-item"), p = s("el-tab-pane"), c = s("el-tabs");
      return o(), d(c, {
        modelValue: i.currentTab,
        "onUpdate:modelValue": a[4] || (a[4] = (l) => i.currentTab = l),
        class: "center-tabs",
        stretch: !0
      }, {
        default: t(() => [
          n(p, {
            label: "栅格",
            name: "span"
          }, {
            default: t(() => [
              C,
              e.data.span !== void 0 ? (o(), d(m, {
                key: 0,
                label: "表单栅格"
              }, {
                default: t(() => [
                  n(u, {
                    modelValue: e.data.span,
                    "onUpdate:modelValue": a[0] || (a[0] = (l) => e.data.span = l),
                    max: 24,
                    min: 1,
                    marks: { 12: "" },
                    onChange: f.spanChange
                  }, null, 8, ["modelValue", "onChange"])
                ]),
                _: 1
              })) : r("", !0),
              e.data.span !== void 0 ? (o(), d(m, {
                key: 1,
                label: "左侧间隔"
              }, {
                default: t(() => [
                  n(u, {
                    modelValue: e.data.offset,
                    "onUpdate:modelValue": a[1] || (a[1] = (l) => e.data.offset = l),
                    max: 24,
                    min: 0,
                    marks: { 12: "" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })) : r("", !0),
              e.data.span !== void 0 ? (o(), d(m, {
                key: 2,
                label: "右移格数"
              }, {
                default: t(() => [
                  n(u, {
                    modelValue: e.data.push,
                    "onUpdate:modelValue": a[2] || (a[2] = (l) => e.data.push = l),
                    max: 24,
                    min: 0,
                    marks: { 12: "" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })) : r("", !0),
              e.data.span !== void 0 ? (o(), d(m, {
                key: 3,
                label: "左移格数"
              }, {
                default: t(() => [
                  n(u, {
                    modelValue: e.data.pull,
                    "onUpdate:modelValue": a[3] || (a[3] = (l) => e.data.pull = l),
                    max: 24,
                    min: 0,
                    marks: { 12: "" }
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })) : r("", !0)
            ]),
            _: 1
          }),
          n(p, {
            label: "事件",
            name: "event"
          }, {
            default: t(() => [
              v,
              V(" 待开发 ")
            ]),
            _: 1
          }),
          n(p, {
            label: "CSS",
            name: "css"
          }, {
            default: t(() => [
              U,
              V(" 待开发 ")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
export {
  N as default
};
