import { defineComponent as c, resolveComponent as r, openBlock as n, createElementBlock as f, Fragment as k, createBlock as u, withCtx as a, createVNode as o, createCommentVNode as m, createTextVNode as s } from "vue";
const y = /* @__PURE__ */ c({
  __name: "number",
  props: ["data"],
  setup(_) {
    const e = _;
    return (g, l) => {
      const p = r("el-input-number"), d = r("el-form-item"), V = r("el-switch"), i = r("el-radio-button"), b = r("el-radio-group");
      return n(), f(k, null, [
        e.data.min !== void 0 ? (n(), u(d, {
          key: 0,
          label: "最小值"
        }, {
          default: a(() => [
            o(p, {
              modelValue: e.data.min,
              "onUpdate:modelValue": l[0] || (l[0] = (t) => e.data.min = t),
              placeholder: "最小值"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : m("", !0),
        e.data.max !== void 0 ? (n(), u(d, {
          key: 1,
          label: "最大值"
        }, {
          default: a(() => [
            o(p, {
              modelValue: e.data.max,
              "onUpdate:modelValue": l[1] || (l[1] = (t) => e.data.max = t),
              placeholder: "最大值"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : m("", !0),
        e.data.step !== void 0 ? (n(), u(d, {
          key: 2,
          label: "步长"
        }, {
          default: a(() => [
            o(p, {
              modelValue: e.data.step,
              "onUpdate:modelValue": l[2] || (l[2] = (t) => e.data.step = t),
              placeholder: "步数"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : m("", !0),
        ["el-input-number", "ai-amount"].includes(e.data.tag) ? (n(), u(d, {
          key: 3,
          label: "精度"
        }, {
          default: a(() => [
            o(p, {
              modelValue: e.data.precision,
              "onUpdate:modelValue": l[3] || (l[3] = (t) => e.data.precision = t),
              min: 0,
              placeholder: "精度"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : m("", !0),
        ["el-input-number", "ai-amount"].includes(e.data.tag) ? (n(), u(d, {
          key: 4,
          label: "是否显示按钮"
        }, {
          default: a(() => [
            o(V, {
              modelValue: e.data.controls,
              "onUpdate:modelValue": l[4] || (l[4] = (t) => e.data.controls = t),
              placeholder: "是否显示按钮"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : m("", !0),
        ["el-input-number", "ai-amount"].includes(e.data.tag) ? (n(), u(d, {
          key: 5,
          label: "按钮位置"
        }, {
          default: a(() => [
            o(b, {
              modelValue: e.data["controls-position"],
              "onUpdate:modelValue": l[5] || (l[5] = (t) => e.data["controls-position"] = t)
            }, {
              default: a(() => [
                o(i, { label: "" }, {
                  default: a(() => [
                    s("默认")
                  ]),
                  _: 1
                }),
                o(i, { label: "right" }, {
                  default: a(() => [
                    s("右侧")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : m("", !0)
      ], 64);
    };
  }
});
export {
  y as default
};
