import { defineComponent as I, resolveComponent as a, openBlock as u, createElementBlock as m, Fragment as E, createBlock as r, withCtx as o, createVNode as e, createTextVNode as _, createCommentVNode as O, unref as g, createElementVNode as c } from "vue";
import y from "./vuedraggable-4934510d.js";
const R = { class: "select-line-icon option-drag" }, $ = ["onClick"], w = { class: "select-line-icon option-drag" }, F = ["onClick"], S = { style: { "margin-left": "20px" } }, A = /* @__PURE__ */ I({
  __name: "options",
  props: ["data"],
  setup(h) {
    const t = h, U = () => {
      t.data.options.push({
        label: "",
        value: ""
      });
    };
    return (j, d) => {
      const V = a("el-radio-button"), f = a("el-radio-group"), C = a("el-form-item"), b = a("el-divider"), v = a("Operation"), p = a("el-icon"), x = a("el-radio"), s = a("el-input"), k = a("Remove"), N = a("el-checkbox"), T = a("el-checkbox-group"), B = a("el-button");
      return u(), m(E, null, [
        t.data.optionType !== void 0 ? (u(), r(C, {
          key: 0,
          label: "选项样式"
        }, {
          default: o(() => [
            e(f, {
              modelValue: t.data.optionType,
              "onUpdate:modelValue": d[0] || (d[0] = (l) => t.data.optionType = l)
            }, {
              default: o(() => [
                e(V, { label: "default" }, {
                  default: o(() => [
                    _("默认")
                  ]),
                  _: 1
                }),
                e(V, { label: "button" }, {
                  default: o(() => [
                    _("按钮")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : O("", !0),
        e(b, null, {
          default: o(() => [
            _("选项")
          ]),
          _: 1
        }),
        t.data.multiple ? (u(), r(T, {
          key: 2,
          modelValue: t.data.defaultValue,
          "onUpdate:modelValue": d[2] || (d[2] = (l) => t.data.defaultValue = l)
        }, {
          default: o(() => [
            e(g(y), {
              list: t.data.options,
              animation: 340,
              group: "selectItem",
              handle: ".option-drag"
            }, {
              item: o(({ element: l, index: i }) => [
                (u(), m("div", {
                  key: i,
                  class: "select-item"
                }, [
                  e(N, {
                    label: l.value
                  }, {
                    default: o(() => [
                      c("div", w, [
                        e(p, null, {
                          default: o(() => [
                            e(v)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["label"]),
                  e(s, {
                    modelValue: l.label,
                    "onUpdate:modelValue": (n) => l.label = n,
                    placeholder: "选项名"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  e(s, {
                    placeholder: "选项值",
                    modelValue: l.value,
                    "onUpdate:modelValue": (n) => l.value = n
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  c("div", {
                    class: "close-btn select-line-icon",
                    onClick: (n) => t.data.options.splice(i, 1)
                  }, [
                    e(p, null, {
                      default: o(() => [
                        e(k)
                      ]),
                      _: 1
                    })
                  ], 8, F)
                ]))
              ]),
              _: 1
            }, 8, ["list"])
          ]),
          _: 1
        }, 8, ["modelValue"])) : (u(), r(f, {
          key: 1,
          modelValue: t.data.defaultValue,
          "onUpdate:modelValue": d[1] || (d[1] = (l) => t.data.defaultValue = l)
        }, {
          default: o(() => [
            e(g(y), {
              list: t.data.options,
              animation: 340,
              group: "selectItem",
              handle: ".option-drag"
            }, {
              item: o(({ element: l, index: i }) => [
                (u(), m("div", {
                  key: i,
                  class: "select-item"
                }, [
                  e(x, {
                    label: l.value
                  }, {
                    default: o(() => [
                      c("div", R, [
                        e(p, null, {
                          default: o(() => [
                            e(v)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 2
                  }, 1032, ["label"]),
                  e(s, {
                    modelValue: l.label,
                    "onUpdate:modelValue": (n) => l.label = n,
                    placeholder: "选项名"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  e(s, {
                    placeholder: "选项值",
                    modelValue: l.value,
                    "onUpdate:modelValue": (n) => l.value = n
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  c("div", {
                    class: "close-btn select-line-icon",
                    onClick: (n) => t.data.options.splice(i, 1)
                  }, [
                    e(p, null, {
                      default: o(() => [
                        e(k)
                      ]),
                      _: 1
                    })
                  ], 8, $)
                ]))
              ]),
              _: 1
            }, 8, ["list"])
          ]),
          _: 1
        }, 8, ["modelValue"])),
        c("div", S, [
          e(B, {
            style: { "padding-bottom": "0" },
            icon: "el-icon-circle-plus-outline",
            type: "text",
            onClick: U
          }, {
            default: o(() => [
              _("添加选项")
            ]),
            _: 1
          })
        ]),
        e(b)
      ], 64);
    };
  }
});
export {
  A as default
};
