import { defineComponent as k, defineAsyncComponent as z, openBlock as u, createBlock as c, unref as j, computed as R, reactive as $, watch as K, resolveComponent as a, createElementBlock as h, Fragment as T, withCtx as t, createElementVNode as C, renderList as P, normalizeClass as I, toDisplayString as D, createCommentVNode as f, createVNode as l, createTextVNode as S, withDirectives as M, vShow as E, mergeProps as q, toHandlers as A, withModifiers as N, getCurrentInstance as J, inject as G, renderSlot as L, resolveDynamicComponent as H } from "vue";
import { m as Q, v as W, g as X, a as Y, i as B, s as Z, E as F } from "./index-5c589461.js";
import ee from "./vuedraggable-4934510d.js";
const le = /* @__PURE__ */ k({
  __name: "ai-amount",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./number-1f56745e.js"));
    return (i, o) => (u(), c(j(p), {
      data: e.data
    }, null, 8, ["data"]));
  }
}), te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" })), oe = { class: "calc-box" }, ae = { class: "preview-actions" }, ne = /* @__PURE__ */ C("div", { class: "calc-tip" }, " 编辑计算公式可用来完成审批单内数据的自动结算，例如：采购单内设置计算公式“合计=单价×数量”，发起人填写单价、数量后，组件将自动计算出合计金额，免手动计算 ", -1), de = /* @__PURE__ */ C("span", null, "计算对象：", -1), ue = ["onClick"], re = { style: { margin: "10px 0" } }, se = /* @__PURE__ */ C("span", null, "计算符号：", -1), ie = ["onClick"], _e = { style: { margin: "10px 0" } }, me = /* @__PURE__ */ C("span", { style: { float: "left" } }, "数字键盘：", -1), pe = { style: { width: "110px", "line-height": "2.5", overflow: "hidden" } }, ce = ["onClick"], fe = { class: "dialog-footer" }, be = /* @__PURE__ */ k({
  __name: "ai-calculate",
  props: ["data", "list"],
  setup(m) {
    const e = m, p = R(() => {
      const n = [], r = (s, g) => {
        if (s && (Array.isArray(s.children) && r(s.children, s), Array.isArray(s) && s.forEach((v) => r(v, g)), ["el-input-number", "ai-amount"].includes(s.tag))) {
          const v = g && g.rowType === "table";
          n.push({
            vModel: v ? g.vModel + "." + s.vModel : s.vModel,
            label: v ? g.label + "." + s.label : s.label
          });
        }
      };
      return r(e.list), n;
    }), i = () => {
      d.expDialogVisible = !1, d.expressionTemp = [];
    }, o = () => {
      const r = Q(d.expressionTemp).map((s) => typeof s == "object" ? 1 : s);
      d.expValid = W(r, !1), d.expValid && (e.data.expression = d.expressionTemp, d.expDialogVisible = !1);
    }, d = $({
      expressionTemp: [],
      expValid: !0,
      expDialogVisible: !1
    }), _ = () => {
      const n = (r) => !!p.value.find(
        (g) => g.vModel === r.vModel && g.label === r.label
      );
      d.expressionTemp = e.data.expression.map((r) => typeof r == "string" || n(r) ? r : { vModel: r.vModel, label: "无效的值" }), e.data.expression = d.expressionTemp;
    };
    return K(
      () => e.data,
      (n) => {
        console.log("+++++++++++++++++++++++++++"), _();
      },
      { immediate: !0 }
    ), (n, r) => {
      const s = a("el-form-item"), g = a("el-alert"), v = a("PriceTag"), V = a("el-icon"), x = a("Delete"), O = a("el-button"), U = a("el-dialog");
      return u(), h(T, null, [
        e.data.expression !== void 0 ? (u(), c(s, {
          key: 0,
          label: "计算公式"
        }, {
          default: t(() => [
            C("div", {
              onClick: r[0] || (r[0] = (y) => d.expDialogVisible = !0),
              class: "pane-calc-preview",
              style: { width: "100%" }
            }, [
              (u(!0), h(T, null, P(e.data.expression, (y, b) => (u(), h("span", {
                key: b,
                class: I({
                  "calc-btn": typeof y != "string",
                  error: typeof y != "string" && y.label === "无效的值"
                })
              }, D(typeof y != "string" ? y.label : y), 3))), 128))
            ])
          ]),
          _: 1
        })) : f("", !0),
        l(U, {
          title: "编辑计算公式",
          "custom-class": "calc-dialog",
          modelValue: d.expDialogVisible,
          "onUpdate:modelValue": r[3] || (r[3] = (y) => d.expDialogVisible = y),
          width: "600px"
        }, {
          footer: t(() => [
            C("span", fe, [
              l(O, {
                onClick: i,
                size: "small"
              }, {
                default: t(() => [
                  S("取 消")
                ]),
                _: 1
              }),
              l(O, {
                type: "primary",
                onClick: o,
                size: "small"
              }, {
                default: t(() => [
                  S("确 定")
                ]),
                _: 1
              })
            ])
          ]),
          default: t(() => [
            C("div", oe, [
              M(l(g, {
                title: "编辑的公式不符合计算法则，无法计算",
                type: "error",
                "show-icon": ""
              }, null, 512), [
                [E, !d.expValid]
              ]),
              C("div", {
                class: I(["calc-preview", { error: !d.expValid }])
              }, [
                S(" 计算公式 = "),
                (u(!0), h(T, null, P(d.expressionTemp, (y, b) => (u(), h("span", {
                  key: b,
                  class: I({
                    "calc-btn": typeof y != "string",
                    error: typeof y != "string" && y.label === "无效的值"
                  })
                }, D(typeof y != "string" ? y.label : y), 3))), 128)),
                C("div", ae, [
                  l(V, {
                    style: { transform: "rotate(-90deg)" },
                    onClick: r[1] || (r[1] = (y) => d.expressionTemp.pop())
                  }, {
                    default: t(() => [
                      l(v)
                    ]),
                    _: 1
                  }),
                  l(V, {
                    onClick: r[2] || (r[2] = (y) => d.expressionTemp = [])
                  }, {
                    default: t(() => [
                      l(x)
                    ]),
                    _: 1
                  })
                ])
              ], 2),
              ne,
              C("div", null, [
                de,
                (u(!0), h(T, null, P(p.value, (y) => (u(), h("span", {
                  key: y.vModel,
                  onClick: (b) => d.expressionTemp.push(y),
                  class: "calc-btn"
                }, D(y.label), 9, ue))), 128))
              ]),
              C("div", re, [
                se,
                (u(), h(T, null, P(["+", "-", "×", "÷", "(", ")"], (y) => C("span", {
                  class: "calc-btn",
                  key: y,
                  onClick: (b) => d.expressionTemp.push(y)
                }, D(y), 9, ie)), 64))
              ]),
              C("div", _e, [
                me,
                C("div", pe, [
                  (u(!0), h(T, null, P([
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "0",
                    "."
                  ], (y) => (u(), h("span", {
                    key: y,
                    class: "calc-btn",
                    onClick: (b) => d.expressionTemp.push(y)
                  }, D(y), 9, ce))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
const ve = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: be
}, Symbol.toStringTag, { value: "Module" })), ye = /* @__PURE__ */ k({
  __name: "ai-date-duration",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./date-0eae5c82.js"));
    return (i, o) => (u(), c(j(p), {
      data: e.data
    }, null, 8, ["data"]));
  }
}), ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ye
}, Symbol.toStringTag, { value: "Module" })), Ve = /* @__PURE__ */ k({
  __name: "ai-ou-select",
  props: ["data"],
  setup(m) {
    const e = m;
    return (p, i) => {
      const o = a("el-input"), d = a("el-form-item"), _ = a("el-input-number"), n = a("el-option"), r = a("el-select");
      return u(), h(T, null, [
        e.data.title !== void 0 ? (u(), c(d, {
          key: 0,
          label: "弹框名称"
        }, {
          default: t(() => [
            l(o, {
              modelValue: e.data.title,
              "onUpdate:modelValue": i[0] || (i[0] = (s) => e.data.title = s),
              placeholder: "请输入弹框名称"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.maxNum !== void 0 ? (u(), c(d, {
          key: 1,
          label: "可选数量"
        }, {
          default: t(() => [
            l(_, {
              modelValue: e.data.maxNum,
              "onUpdate:modelValue": i[1] || (i[1] = (s) => e.data.maxNum = s),
              placeholder: "请输入"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        l(d, { label: "按钮类型" }, {
          default: t(() => [
            l(r, {
              modelValue: e.data.buttonType,
              "onUpdate:modelValue": i[2] || (i[2] = (s) => e.data.buttonType = s),
              size: "small"
            }, {
              default: t(() => [
                l(n, {
                  label: "Button",
                  value: "button"
                }),
                l(n, {
                  label: "Input",
                  value: "input"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(d, { label: "类型" }, {
          default: t(() => [
            l(r, {
              modelValue: e.data.tabs,
              "onUpdate:modelValue": i[3] || (i[3] = (s) => e.data.tabs = s),
              size: "small",
              multiple: ""
            }, {
              default: t(() => [
                l(n, {
                  label: "组织(org)",
                  value: "org"
                }),
                l(n, {
                  label: "用户(user)",
                  value: "user"
                }),
                l(n, {
                  label: "角色(role)",
                  value: "role"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), we = /* @__PURE__ */ k({
  __name: "ai-time-duration",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./date-0eae5c82.js"));
    return (i, o) => (u(), c(j(p), {
      data: e.data
    }, null, 8, ["data"]));
  }
}), he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: we
}, Symbol.toStringTag, { value: "Module" })), ke = /* @__PURE__ */ k({
  __name: "el-button",
  props: ["data"],
  setup(m) {
    const e = m;
    return (p, i) => {
      const o = a("el-button", !0), d = a("el-input"), _ = a("el-form-item"), n = a("el-option"), r = a("el-select");
      return u(), h(T, null, [
        e.data.icon !== void 0 && e.data.tag === "el-button" ? (u(), c(_, {
          key: 0,
          label: "按钮图标"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.icon,
              "onUpdate:modelValue": i[1] || (i[1] = (s) => e.data.icon = s),
              placeholder: "请输入按钮图标名称"
            }, {
              default: t(() => [
                l(o, {
                  icon: "el-icon-thumb",
                  onClick: i[0] || (i[0] = (s) => p.openIconsDialog("icon"))
                }, {
                  append: t(() => [
                    S(" 选择 ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.type !== void 0 && e.data.tag === "el-button" ? (u(), c(_, {
          key: 1,
          label: "按钮类型"
        }, {
          default: t(() => [
            l(r, {
              modelValue: e.data.type,
              "onUpdate:modelValue": i[2] || (i[2] = (s) => e.data.type = s),
              style: { width: "100%" }
            }, {
              default: t(() => [
                l(n, {
                  label: "primary",
                  value: "primary"
                }),
                l(n, {
                  label: "success",
                  value: "success"
                }),
                l(n, {
                  label: "warning",
                  value: "warning"
                }),
                l(n, {
                  label: "danger",
                  value: "danger"
                }),
                l(n, {
                  label: "info",
                  value: "info"
                }),
                l(n, {
                  label: "text",
                  value: "text"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.buttonText !== void 0 ? M((u(), c(_, {
          key: 2,
          label: "按钮文字"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.buttonText,
              "onUpdate:modelValue": i[3] || (i[3] = (s) => e.data.buttonText = s),
              placeholder: "请输入按钮文字"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 512)), [
          [E, e.data["list-type"] !== "picture-card"]
        ]) : f("", !0),
        e.data.tag === "el-button" ? (u(), c(_, {
          key: 3,
          label: "按钮文字"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.__slot__.default,
              "onUpdate:modelValue": i[4] || (i[4] = (s) => e.data.__slot__.default = s),
              placeholder: "请输入按钮文字"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0)
      ], 64);
    };
  }
}), Te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" })), Se = X(), Ue = {
  components: {},
  inheritAttrs: !1,
  props: [],
  data() {
    return {
      id: Se,
      formData: {
        label: void 0,
        value: void 0
      },
      rules: {
        label: [
          {
            required: !0,
            message: "请输入选项名",
            trigger: "blur"
          }
        ],
        value: [
          {
            required: !0,
            message: "请输入选项值",
            trigger: "blur"
          }
        ]
      },
      dataType: "string",
      dataTypeOptions: [
        {
          label: "字符串",
          value: "string"
        },
        {
          label: "数字",
          value: "number"
        }
      ]
    };
  },
  computed: {},
  watch: {
    // eslint-disable-next-line func-names
    "formData.value": function(m) {
      this.dataType = B(m) ? "number" : "string";
    },
    id(m) {
      Z(m);
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    onOpen() {
      this.formData = {
        label: void 0,
        value: void 0
      };
    },
    onClose() {
    },
    close() {
      this.$emit("update:modelValue", !1);
    },
    handelConfirm() {
      this.$refs.elForm.validate((m) => {
        m && (this.dataType === "number" && (this.formData.value = parseFloat(this.formData.value)), this.formData.id = this.id++, this.$emit("commit", this.formData), this.close());
      });
    }
  }
}, Oe = { slot: "footer" };
function Ce(m, e, p, i, o, d) {
  const _ = a("el-input"), n = a("el-form-item"), r = a("el-col"), s = a("el-option"), g = a("el-select"), v = a("el-form"), V = a("el-row"), x = a("el-button"), O = a("el-dialog");
  return u(), h("div", null, [
    l(O, q(m.$attrs, {
      "close-on-click-modal": !1,
      "modal-append-to-body": !1
    }, A(m.$listeners), {
      onOpen: d.onOpen,
      onClose: d.onClose
    }), {
      default: t(() => [
        l(V, { gutter: 0 }, {
          default: t(() => [
            l(v, {
              ref: "elForm",
              model: o.formData,
              rules: o.rules,
              size: "small",
              "label-width": "100px"
            }, {
              default: t(() => [
                l(r, { span: 24 }, {
                  default: t(() => [
                    l(n, {
                      label: "选项名",
                      prop: "label"
                    }, {
                      default: t(() => [
                        l(_, {
                          modelValue: o.formData.label,
                          "onUpdate:modelValue": e[0] || (e[0] = (U) => o.formData.label = U),
                          placeholder: "请输入选项名",
                          clearable: ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                l(r, { span: 24 }, {
                  default: t(() => [
                    l(n, {
                      label: "选项值",
                      prop: "value"
                    }, {
                      default: t(() => [
                        l(_, {
                          modelValue: o.formData.value,
                          "onUpdate:modelValue": e[2] || (e[2] = (U) => o.formData.value = U),
                          placeholder: "请输入选项值",
                          clearable: ""
                        }, {
                          default: t(() => [
                            l(g, {
                              slot: "append",
                              modelValue: o.dataType,
                              "onUpdate:modelValue": e[1] || (e[1] = (U) => o.dataType = U),
                              style: { width: "100px" }
                            }, {
                              default: t(() => [
                                (u(!0), h(T, null, P(o.dataTypeOptions, (U, y) => (u(), c(s, {
                                  key: y,
                                  label: U.label,
                                  value: U.value,
                                  disabled: U.disabled
                                }, null, 8, ["label", "value", "disabled"]))), 128))
                              ]),
                              _: 1
                            }, 8, ["modelValue"])
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }),
        C("div", Oe, [
          l(x, {
            type: "primary",
            onClick: d.handelConfirm
          }, {
            default: t(() => [
              S(" 确定 ")
            ]),
            _: 1
          }, 8, ["onClick"]),
          l(x, { onClick: d.close }, {
            default: t(() => [
              S(" 取消 ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]),
      _: 1
    }, 16, ["onOpen", "onClose"])
  ]);
}
const je = /* @__PURE__ */ Y(Ue, [["render", Ce]]), ze = {
  key: 2,
  style: { "margin-left": "20px" }
}, Pe = /* @__PURE__ */ k({
  __name: "el-cascader",
  props: ["data"],
  setup(m) {
    const e = m, p = $({
      currentNode: null,
      dialogVisible: !1
    }), i = (r) => {
      r.children || (r.children = []), p.dialogVisible = !0, p.currentNode = r.children;
    }, o = (r, s) => {
      const { parent: g } = r, v = g.data.children || g.data, V = v.findIndex((x) => !!x.id && x.id === s.id || x.value === s.value);
      v.splice(V, 1);
    }, d = (r) => {
      p.currentNode.push(r);
    }, _ = () => {
      p.dialogVisible = !0, p.currentNode = e.data.options;
    }, n = (r, { node: s, data: g, store: v }) => r(
      "div",
      { class: "custom-tree-node" },
      [
        r("span", null, s.label),
        r(
          "span",
          { class: "node-operation" },
          [
            r(
              F,
              { onClick: () => i(g) },
              [r(a("Plus"))]
            ),
            r(F, { onClick: () => o(s, g) }, [r(a("Delete"))])
          ]
        )
      ]
    );
    return (r, s) => {
      const g = a("el-switch"), v = a("el-form-item"), V = a("el-divider"), x = a("el-radio-button"), O = a("el-radio-group"), U = a("el-input"), y = a("el-tree"), b = a("el-button");
      return u(), h(T, null, [
        l(v, { label: "是否多选" }, {
          default: t(() => [
            l(g, {
              modelValue: e.data.multiple,
              "onUpdate:modelValue": s[0] || (s[0] = (w) => e.data.multiple = w)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(v, { label: "可否筛选" }, {
          default: t(() => [
            l(g, {
              modelValue: e.data.filterable,
              "onUpdate:modelValue": s[1] || (s[1] = (w) => e.data.filterable = w)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        l(V, null, {
          default: t(() => [
            S("选项")
          ]),
          _: 1
        }),
        l(v, { label: "数据类型" }, {
          default: t(() => [
            l(O, {
              modelValue: e.data.dataType,
              "onUpdate:modelValue": s[2] || (s[2] = (w) => e.data.dataType = w),
              size: "small"
            }, {
              default: t(() => [
                l(x, { label: "dynamic" }, {
                  default: t(() => [
                    S("动态数据")
                  ]),
                  _: 1
                }),
                l(x, { label: "static" }, {
                  default: t(() => [
                    S("静态数据")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        }),
        e.data.dataType === "dynamic" ? (u(), h(T, { key: 0 }, [
          l(v, { label: "标签键名" }, {
            default: t(() => [
              l(U, {
                modelValue: e.data.labelKey,
                "onUpdate:modelValue": s[3] || (s[3] = (w) => e.data.labelKey = w),
                placeholder: "请输入标签键名"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          l(v, { label: "值键名" }, {
            default: t(() => [
              l(U, {
                modelValue: e.data.valueKey,
                "onUpdate:modelValue": s[4] || (s[4] = (w) => e.data.valueKey = w),
                placeholder: "请输入值键名"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          l(v, { label: "子级键名" }, {
            default: t(() => [
              l(U, {
                modelValue: e.data.childrenKey,
                "onUpdate:modelValue": s[5] || (s[5] = (w) => e.data.childrenKey = w),
                placeholder: "请输入子级键名"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ], 64)) : f("", !0),
        e.data.dataType === "static" ? (u(), c(y, {
          key: 1,
          draggable: "",
          data: e.data.options,
          "node-key": "value",
          "expand-on-click-node": !1,
          "render-content": n
        }, null, 8, ["data"])) : f("", !0),
        e.data.dataType === "static" ? (u(), h("div", ze, [
          l(b, {
            style: { "padding-bottom": "0" },
            icon: "CirclePlus",
            type: "text",
            onClick: _
          }, {
            default: t(() => [
              S("添加父级")
            ]),
            _: 1
          })
        ])) : f("", !0),
        l(V),
        l(je, {
          modelValue: p.dialogVisible,
          "onUpdate:modelValue": s[6] || (s[6] = (w) => p.dialogVisible = w),
          title: "添加选项",
          onCommit: d
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
}), De = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), $e = /* @__PURE__ */ k({
  __name: "el-color-picker",
  props: ["data"],
  setup(m) {
    const e = m, p = [
      {
        label: "hex",
        value: "hex"
      },
      {
        label: "rgb",
        value: "rgb"
      },
      {
        label: "rgba",
        value: "rgba"
      },
      {
        label: "hsv",
        value: "hsv"
      },
      {
        label: "hsl",
        value: "hsl"
      }
    ], i = (o) => {
      e.data.defaultValue = null, e.data["show-alpha"] = o.indexOf("a") > -1, e.data.renderKey = e.data.formId + (/* @__PURE__ */ new Date()).getTime();
    };
    return (o, d) => {
      const _ = a("el-option"), n = a("el-select"), r = a("el-form-item");
      return e.data.tag === "el-color-picker" ? (u(), c(r, {
        key: 0,
        label: "颜色格式"
      }, {
        default: t(() => [
          l(n, {
            modelValue: e.data["color-format"],
            "onUpdate:modelValue": d[0] || (d[0] = (s) => e.data["color-format"] = s),
            placeholder: "请选择颜色格式",
            style: { width: "100%" },
            onChange: i
          }, {
            default: t(() => [
              (u(), h(T, null, P(p, (s, g) => l(_, {
                key: g,
                label: s.label,
                value: s.value
              }, null, 8, ["label", "value"])), 64))
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })) : f("", !0);
    };
  }
}), Me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), Ee = /* @__PURE__ */ k({
  __name: "el-date-picker",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./date-0eae5c82.js"));
    return (i, o) => (u(), c(j(p), {
      data: e.data
    }, null, 8, ["data"]));
  }
}), Ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ee
}, Symbol.toStringTag, { value: "Module" })), Ne = /* @__PURE__ */ k({
  __name: "el-input-number",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./number-1f56745e.js"));
    return (i, o) => {
      const d = a("el-switch"), _ = a("el-form-item");
      return u(), h(T, null, [
        l(j(p), {
          data: e.data
        }, null, 8, ["data"]),
        l(_, { label: "严格步数" }, {
          default: t(() => [
            l(d, {
              modelValue: e.data["step-strictly"],
              "onUpdate:modelValue": o[0] || (o[0] = (n) => e.data["step-strictly"] = n)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ], 64);
    };
  }
}), Fe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), Be = /* @__PURE__ */ k({
  __name: "el-input",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./input-b37a0b17.js"));
    return (i, o) => {
      const d = a("el-input-number"), _ = a("el-form-item");
      return u(), h(T, null, [
        l(j(p), {
          data: e.data
        }, null, 8, ["data"]),
        e.data.autosize !== void 0 ? (u(), c(_, {
          key: 0,
          label: "最小行数"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.autosize.minRows,
              "onUpdate:modelValue": o[0] || (o[0] = (n) => e.data.autosize.minRows = n),
              min: 1,
              placeholder: "最小行数"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.autosize !== void 0 ? (u(), c(_, {
          key: 1,
          label: "最大行数"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.autosize.maxRows,
              "onUpdate:modelValue": o[1] || (o[1] = (n) => e.data.autosize.maxRows = n),
              min: 1,
              placeholder: "最大行数"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0)
      ], 64);
    };
  }
}), Re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Ke = /* @__PURE__ */ k({
  __name: "el-rate",
  props: ["data"],
  setup(m) {
    const e = m, p = (o) => {
      o && (e.data["show-score"] = !1);
    }, i = (o) => {
      o && (e.data["show-text"] = !1);
    };
    return (o, d) => {
      const _ = a("el-switch"), n = a("el-form-item");
      return u(), h(T, null, [
        e.data["allow-half"] !== void 0 ? (u(), c(n, {
          key: 0,
          label: "允许半选"
        }, {
          default: t(() => [
            l(_, {
              modelValue: e.data["allow-half"],
              "onUpdate:modelValue": d[0] || (d[0] = (r) => e.data["allow-half"] = r)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["show-text"] !== void 0 ? (u(), c(n, {
          key: 1,
          label: "辅助文字"
        }, {
          default: t(() => [
            l(_, {
              modelValue: e.data["show-text"],
              "onUpdate:modelValue": d[1] || (d[1] = (r) => e.data["show-text"] = r),
              onChange: p
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["show-score"] !== void 0 ? (u(), c(n, {
          key: 2,
          label: "显示分数"
        }, {
          default: t(() => [
            l(_, {
              modelValue: e.data["show-score"],
              "onUpdate:modelValue": d[2] || (d[2] = (r) => e.data["show-score"] = r),
              onChange: i
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0)
      ], 64);
    };
  }
}), qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), Ae = /* @__PURE__ */ k({
  __name: "el-slider",
  props: ["data"],
  setup(m) {
    const e = m;
    return (p, i) => {
      const o = a("el-switch"), d = a("el-form-item");
      return e.data["show-stops"] !== void 0 ? (u(), c(d, {
        key: 0,
        label: "显示间断点"
      }, {
        default: t(() => [
          l(o, {
            modelValue: e.data["show-stops"],
            "onUpdate:modelValue": i[0] || (i[0] = (_) => e.data["show-stops"] = _)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      })) : f("", !0);
    };
  }
}), Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ae
}, Symbol.toStringTag, { value: "Module" })), Ge = /* @__PURE__ */ k({
  __name: "el-switch",
  props: ["data"],
  setup(m) {
    const e = m, p = (i, o) => {
      ["true", "false"].indexOf(i) > -1 ? e.data[o] = JSON.parse(i) : e.data[o] = B(i) ? +i : i;
    };
    return (i, o) => {
      const d = a("el-color-picker"), _ = a("el-form-item"), n = a("el-input");
      return u(), h(T, null, [
        e.data["active-color"] !== void 0 ? (u(), c(_, {
          key: 0,
          label: "开启颜色"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data["active-color"],
              "onUpdate:modelValue": o[0] || (o[0] = (r) => e.data["active-color"] = r)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["inactive-color"] !== void 0 ? (u(), c(_, {
          key: 1,
          label: "关闭颜色"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data["inactive-color"],
              "onUpdate:modelValue": o[1] || (o[1] = (r) => e.data["inactive-color"] = r)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["active-text"] !== void 0 ? (u(), c(_, {
          key: 2,
          label: "开启提示"
        }, {
          default: t(() => [
            l(n, {
              modelValue: e.data["active-text"],
              "onUpdate:modelValue": o[2] || (o[2] = (r) => e.data["active-text"] = r),
              placeholder: "请输入开启提示"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["inactive-text"] !== void 0 ? (u(), c(_, {
          key: 3,
          label: "关闭提示"
        }, {
          default: t(() => [
            l(n, {
              modelValue: e.data["inactive-text"],
              "onUpdate:modelValue": o[3] || (o[3] = (r) => e.data["inactive-text"] = r),
              placeholder: "请输入关闭提示"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["active-value"] !== void 0 ? (u(), c(_, {
          key: 4,
          label: "开启值"
        }, {
          default: t(() => [
            l(n, {
              value: e.data["active-value"],
              placeholder: "请输入开启值",
              onInput: o[4] || (o[4] = (r) => p(r, "active-value"))
            }, null, 8, ["value"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["inactive-value"] !== void 0 ? (u(), c(_, {
          key: 5,
          label: "关闭值"
        }, {
          default: t(() => [
            l(n, {
              value: e.data["inactive-value"],
              placeholder: "请输入关闭值",
              onInput: o[5] || (o[5] = (r) => p(r, "inactive-value"))
            }, null, 8, ["value"])
          ]),
          _: 1
        })) : f("", !0)
      ], 64);
    };
  }
}), Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), He = /* @__PURE__ */ k({
  __name: "el-time-picker",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./date-0eae5c82.js"));
    return (i, o) => (u(), c(j(p), {
      data: e.data
    }, null, 8, ["data"]));
  }
}), Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: He
}, Symbol.toStringTag, { value: "Module" })), We = /* @__PURE__ */ k({
  __name: "my-card",
  props: ["data"],
  setup(m) {
    const e = m;
    return (p, i) => {
      const o = a("el-input"), d = a("el-form-item"), _ = a("el-switch"), n = a("el-option"), r = a("el-select");
      return u(), h(T, null, [
        e.data.header !== void 0 ? (u(), c(d, {
          key: 0,
          label: "标题"
        }, {
          default: t(() => [
            l(o, {
              modelValue: e.data.header,
              "onUpdate:modelValue": i[0] || (i[0] = (s) => e.data.header = s),
              placeholder: "请输入标题"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.shadow !== void 0 ? (u(), c(d, {
          key: 1,
          label: "是否显示阴影"
        }, {
          default: t(() => [
            l(_, {
              modelValue: e.data.shadow,
              "onUpdate:modelValue": i[1] || (i[1] = (s) => e.data.shadow = s),
              placeholder: "是否显示阴影"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.shadow !== void 0 ? (u(), c(d, {
          key: 2,
          label: "是否显示阴影"
        }, {
          default: t(() => [
            l(r, {
              modelValue: e.data.shadow,
              "onUpdate:modelValue": i[2] || (i[2] = (s) => e.data.shadow = s),
              style: { width: "100%" }
            }, {
              default: t(() => [
                l(n, {
                  label: "always",
                  value: "always"
                }),
                l(n, {
                  label: "never",
                  value: "never"
                }),
                l(n, {
                  label: "hover",
                  value: "hover"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0)
      ], 64);
    };
  }
}), Xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), Ye = /* @__PURE__ */ k({
  __name: "my-checkbox-group",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./options-bd2cd002.js"));
    return (i, o) => {
      const d = a("el-input-number"), _ = a("el-form-item");
      return u(), h(T, null, [
        e.data.multiple ? (u(), c(_, {
          key: 0,
          label: "至少应选"
        }, {
          default: t(() => [
            l(d, {
              value: e.data.min,
              min: 0,
              placeholder: "至少应选",
              onInput: o[0] || (o[0] = (n) => e.data.min = n || void 0)
            }, null, 8, ["value"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.multiple ? (u(), c(_, {
          key: 1,
          label: "最多可选"
        }, {
          default: t(() => [
            l(d, {
              value: e.data.max,
              min: 0,
              placeholder: "最多可选",
              onInput: o[1] || (o[1] = (n) => e.data.max = n || void 0)
            }, null, 8, ["value"])
          ]),
          _: 1
        })) : f("", !0),
        l(j(p), {
          data: e.data
        }, null, 8, ["data"])
      ], 64);
    };
  }
}), Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), el = /* @__PURE__ */ k({
  __name: "my-data-table",
  props: ["data"],
  setup(m) {
    const e = m, p = $({ showColConfig: !1, code: "" }), i = (d) => {
      e.data.cols.splice(d, 1);
    }, o = (d) => {
      e.data.cols.push({ fixed: !1 });
    };
    return (d, _) => {
      const n = a("el-switch"), r = a("el-form-item"), s = a("el-button"), g = a("el-input"), v = a("el-table-column"), V = a("el-option"), x = a("el-select"), O = a("el-link"), U = a("el-table"), y = a("el-dialog");
      return u(), h(T, null, [
        e.data["show-summary"] !== void 0 ? (u(), c(r, {
          key: 0,
          label: "显示合计"
        }, {
          default: t(() => [
            l(n, {
              modelValue: e.data["show-summary"],
              "onUpdate:modelValue": _[0] || (_[0] = (b) => e.data["show-summary"] = b)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["show-summary"] !== void 0 ? (u(), c(r, {
          key: 1,
          label: "列配置"
        }, {
          default: t(() => [
            l(s, {
              onClick: _[1] || (_[1] = (b) => p.showColConfig = !0),
              icon: "Edit"
            }, {
              default: t(() => [
                S(" 编辑...")
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : f("", !0),
        l(y, {
          title: "列配置",
          modelValue: p.showColConfig,
          "onUpdate:modelValue": _[2] || (_[2] = (b) => p.showColConfig = b),
          fullscreen: ""
        }, {
          default: t(() => [
            l(U, {
              data: e.data.cols
            }, {
              default: t(() => [
                l(v, {
                  prop: "label",
                  label: "显示标题"
                }, {
                  default: t((b) => [
                    l(g, {
                      modelValue: b.row.label,
                      "onUpdate:modelValue": (w) => b.row.label = w
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "prop",
                  label: "字段名称"
                }, {
                  default: t((b) => [
                    l(g, {
                      modelValue: b.row.prop,
                      "onUpdate:modelValue": (w) => b.row.prop = w
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "width",
                  label: "列的宽度"
                }, {
                  default: t((b) => [
                    l(g, {
                      modelValue: b.row.width,
                      "onUpdate:modelValue": (w) => b.row.width = w
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "sortable",
                  label: "前端排序"
                }, {
                  default: t((b) => [
                    l(n, {
                      modelValue: b.row.sortable,
                      "onUpdate:modelValue": (w) => b.row.sortable = w
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "sortByServer",
                  label: "后端排序"
                }, {
                  default: t((b) => [
                    l(n, {
                      modelValue: b.row.sortByServer,
                      "onUpdate:modelValue": (w) => b.row.sortByServer = w
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "isShow",
                  label: "是否显示"
                }, {
                  default: t((b) => [
                    l(n, {
                      modelValue: b.row.isShow,
                      "onUpdate:modelValue": (w) => b.row.isShow = w
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "align",
                  label: "对齐"
                }, {
                  default: t((b) => [
                    l(x, {
                      modelValue: b.row.align,
                      "onUpdate:modelValue": (w) => b.row.align = w
                    }, {
                      default: t(() => [
                        l(V, {
                          label: "左对齐",
                          value: "left"
                        }),
                        l(V, {
                          label: "居中",
                          value: "center"
                        }),
                        l(V, {
                          label: "右对齐",
                          value: "right"
                        })
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "fixed",
                  label: "固定"
                }, {
                  default: t((b) => [
                    l(x, {
                      modelValue: b.row.fixed,
                      "onUpdate:modelValue": (w) => b.row.fixed = w,
                      onChange: (w) => {
                        w || delete b.row.fixed;
                      }
                    }, {
                      default: t(() => [
                        l(V, { label: "不固定" }),
                        l(V, {
                          label: "固定在左侧",
                          value: "left"
                        }),
                        l(V, {
                          label: "固定在右侧",
                          value: "right"
                        })
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "formatType",
                  label: "数据类型"
                }, {
                  default: t((b) => [
                    l(x, {
                      modelValue: b.row.formatType,
                      "onUpdate:modelValue": (w) => b.row.formatType = w
                    }, {
                      default: t(() => [
                        l(V, {
                          label: "字符串",
                          value: "string"
                        }),
                        l(V, {
                          label: "数字",
                          value: "number"
                        }),
                        l(V, {
                          label: "日期时间",
                          value: "date"
                        })
                      ]),
                      _: 2
                    }, 1032, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  prop: "formatString",
                  label: "格式"
                }, {
                  default: t((b) => [
                    l(O, { href: "http://numeraljs.com/" }),
                    l(g, {
                      modelValue: b.row.formatString,
                      "onUpdate:modelValue": (w) => b.row.formatString = w
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                l(v, {
                  fixed: "right",
                  label: "操作",
                  width: "120"
                }, {
                  default: t((b) => [
                    l(s, {
                      circle: "",
                      type: "primary",
                      size: "small",
                      icon: "Plus",
                      onClick: N((w) => o(b.$index), ["prevent"])
                    }, null, 8, ["onClick"]),
                    l(s, {
                      circle: "",
                      type: "danger",
                      size: "small",
                      icon: "Minus",
                      onClick: N((w) => i(b.$index), ["prevent"])
                    }, null, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), ll = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), tl = /* @__PURE__ */ k({
  __name: "my-radio-group",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./options-bd2cd002.js"));
    return (i, o) => (u(), c(j(p), {
      data: e.data
    }, null, 8, ["data"]));
  }
}), ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tl
}, Symbol.toStringTag, { value: "Module" })), al = /* @__PURE__ */ k({
  __name: "my-row",
  props: ["data"],
  setup(m) {
    const e = m, p = [
      {
        label: "start",
        value: "start"
      },
      {
        label: "end",
        value: "end"
      },
      {
        label: "center",
        value: "center"
      },
      {
        label: "space-around",
        value: "space-around"
      },
      {
        label: "space-between",
        value: "space-between"
      }
    ];
    return (i, o) => {
      const d = a("el-input-number"), _ = a("el-slider"), n = a("el-form-item"), r = a("el-option"), s = a("el-select"), g = a("el-radio-button"), v = a("el-radio-group");
      return u(), h(T, null, [
        e.data.tag === "el-row" ? (u(), c(n, {
          key: 0,
          label: "栅格间隔"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.gutter,
              "onUpdate:modelValue": o[0] || (o[0] = (V) => e.data.gutter = V),
              min: 0,
              placeholder: "栅格间隔"
            }, null, 8, ["modelValue"]),
            l(_, {
              modelValue: e.data.gutter,
              "onUpdate:modelValue": o[1] || (o[1] = (V) => e.data.gutter = V),
              max: 500,
              min: 0
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.justify !== void 0 && e.data.type === "flex" ? (u(), c(n, {
          key: 1,
          label: "水平排列"
        }, {
          default: t(() => [
            l(s, {
              modelValue: e.data.justify,
              "onUpdate:modelValue": o[2] || (o[2] = (V) => e.data.justify = V),
              placeholder: "请选择水平排列",
              style: { width: "100%" }
            }, {
              default: t(() => [
                (u(), h(T, null, P(p, (V, x) => l(r, {
                  key: x,
                  label: V.label,
                  value: V.value
                }, null, 8, ["label", "value"])), 64))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.align !== void 0 && e.data.type === "flex" ? (u(), c(n, {
          key: 2,
          label: "垂直排列"
        }, {
          default: t(() => [
            l(v, {
              modelValue: e.data.align,
              "onUpdate:modelValue": o[3] || (o[3] = (V) => e.data.align = V)
            }, {
              default: t(() => [
                l(g, { label: "top" }),
                l(g, { label: "middle" }),
                l(g, { label: "bottom" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0)
      ], 64);
    };
  }
}), nl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: al
}, Symbol.toStringTag, { value: "Module" })), dl = /* @__PURE__ */ k({
  __name: "my-select",
  props: ["data"],
  setup(m) {
    const e = m, p = z(() => import("./options-bd2cd002.js"));
    return (i, o) => {
      const d = a("el-switch"), _ = a("el-form-item");
      return u(), h(T, null, [
        e.data.tag === "el-select" ? (u(), c(_, {
          key: 0,
          label: "能否搜索"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.filterable,
              "onUpdate:modelValue": o[0] || (o[0] = (n) => e.data.filterable = n)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.tag === "el-select" ? (u(), c(_, {
          key: 1,
          label: "是否多选"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.multiple,
              "onUpdate:modelValue": o[1] || (o[1] = (n) => e.data.multiple = n)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        l(j(p), {
          data: e.data
        }, null, 8, ["data"])
      ], 64);
    };
  }
}), ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dl
}, Symbol.toStringTag, { value: "Module" })), rl = /* @__PURE__ */ k({
  __name: "my-sub-form",
  props: ["data"],
  setup(m) {
    const e = m;
    return (p, i) => {
      const o = a("el-input"), d = a("el-form-item");
      return e.data.actionText !== void 0 ? (u(), c(d, {
        key: 0,
        label: "动作文字"
      }, {
        default: t(() => [
          l(o, {
            modelValue: e.data.actionText,
            "onUpdate:modelValue": i[0] || (i[0] = (_) => e.data.actionText = _),
            placeholder: "请输入动作文字"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      })) : f("", !0);
    };
  }
}), sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rl
}, Symbol.toStringTag, { value: "Module" })), il = /* @__PURE__ */ k({
  __name: "my-table",
  props: ["data"],
  setup(m) {
    const e = m;
    $({
      currentTab: "event"
    });
    const p = () => {
      var o = e.data, d = { rowType: "layout", layout: "rowFormItem", colSpan: 1, rowSpan: 1, children: [], state: 0 }, _ = {
        children: []
      };
      if (o.children.length > 0) {
        for (var n = 0; n < o.children[0].children.length; n++)
          _.children.push(JSON.parse(JSON.stringify(d)));
        o.children.splice(o.children.length, 0, _);
      }
    }, i = () => {
      for (var o = e.data, d = { rowType: "layout", layout: "rowFormItem", colSpan: 1, rowSpan: 1, children: [], state: 0 }, _ = 0; _ < o.children.length; _++)
        o.children[_].children.push(JSON.parse(JSON.stringify(d)));
    };
    return (o, d) => {
      const _ = a("Edit"), n = a("el-button"), r = a("el-form-item");
      return u(), c(r, { label: "行列操作" }, {
        default: t(() => [
          l(n, { onClick: p }, {
            default: t(() => [
              l(_),
              S("增加一行")
            ]),
            _: 1
          }),
          l(n, { onClick: i }, {
            default: t(() => [
              S("增加一列")
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
}), _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: il
}, Symbol.toStringTag, { value: "Module" })), ml = /* @__PURE__ */ k({
  __name: "my-table1",
  props: ["data"],
  setup(m) {
    const e = m;
    return (p, i) => {
      const o = a("el-switch"), d = a("el-form-item");
      return e.data["show-summary"] !== void 0 ? (u(), c(d, {
        key: 0,
        label: "显示合计"
      }, {
        default: t(() => [
          l(o, {
            modelValue: e.data["show-summary"],
            "onUpdate:modelValue": i[0] || (i[0] = (_) => e.data["show-summary"] = _)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      })) : f("", !0);
    };
  }
}), pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ml
}, Symbol.toStringTag, { value: "Module" })), cl = { class: "select-line-icon option-drag" }, fl = ["onClick"], bl = { style: { "margin-left": "20px" } }, vl = /* @__PURE__ */ k({
  __name: "my-tabs",
  props: ["data"],
  setup(m) {
    const e = m;
    return (p, i) => {
      const o = a("el-radio-button"), d = a("el-radio-group"), _ = a("el-form-item"), n = a("el-divider"), r = a("Operation"), s = a("el-icon"), g = a("el-input"), v = a("Remove"), V = a("el-radio"), x = a("el-button");
      return u(), h(T, null, [
        e.data.tabPosition !== void 0 ? (u(), c(_, {
          key: 0,
          label: "选项卡位置"
        }, {
          default: t(() => [
            l(d, {
              modelValue: e.data.tabPosition,
              "onUpdate:modelValue": i[0] || (i[0] = (O) => e.data.tabPosition = O)
            }, {
              default: t(() => [
                l(o, { label: "top" }, {
                  default: t(() => [
                    S("顶部")
                  ]),
                  _: 1
                }),
                l(o, { label: "right" }, {
                  default: t(() => [
                    S("右侧")
                  ]),
                  _: 1
                }),
                l(o, { label: "bottom" }, {
                  default: t(() => [
                    S("底部")
                  ]),
                  _: 1
                }),
                l(o, { label: "left" }, {
                  default: t(() => [
                    S("左侧")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        l(n, null, {
          default: t(() => [
            S("标签面版")
          ]),
          _: 1
        }),
        l(d, {
          modelValue: e.data.defaultValue,
          "onUpdate:modelValue": i[1] || (i[1] = (O) => e.data.defaultValue = O),
          style: { "line-height": "30px" }
        }, {
          default: t(() => [
            l(j(ee), {
              list: e.data.children,
              animation: 340,
              group: "selectItem",
              handle: ".option-drag"
            }, {
              item: t(({ element: O, index: U }) => [
                l(V, {
                  label: O.value
                }, {
                  default: t(() => [
                    (u(), h("div", {
                      key: U,
                      class: "select-item"
                    }, [
                      C("div", cl, [
                        l(s, null, {
                          default: t(() => [
                            l(r)
                          ]),
                          _: 1
                        })
                      ]),
                      l(g, {
                        placeholder: "面板标签",
                        size: "small",
                        modelValue: O.label,
                        "onUpdate:modelValue": (y) => O.label = y
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      C("div", {
                        class: "close-btn select-line-icon",
                        onClick: (y) => e.data.children.splice(U, 1)
                      }, [
                        l(s, null, {
                          default: t(() => [
                            l(v)
                          ]),
                          _: 1
                        })
                      ], 8, fl)
                    ]))
                  ]),
                  _: 2
                }, 1032, ["label"])
              ]),
              _: 1
            }, 8, ["list"])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        C("div", bl, [
          l(x, {
            style: { "padding-bottom": "0" },
            icon: "el-icon-circle-plus-outline",
            type: "text",
            onClick: i[2] || (i[2] = (O) => {
              e.data.children.push({ rowType: "layout", layout: "rowFormItem", label: "New Tab", value: (/* @__PURE__ */ new Date()).getTime().toString(), children: [] });
            })
          }, {
            default: t(() => [
              S("添加面板")
            ]),
            _: 1
          })
        ]),
        l(n)
      ], 64);
    };
  }
});
const yl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vl
}, Symbol.toStringTag, { value: "Module" })), gl = /* @__PURE__ */ k({
  __name: "my-upload",
  props: ["data"],
  setup(m) {
    const e = m;
    J();
    const p = G("getToken");
    return (i, o) => {
      const d = a("el-alert"), _ = a("el-form-item"), n = a("el-option"), r = a("el-select"), s = a("el-input"), g = a("el-switch"), v = a("el-radio-button"), V = a("el-radio-group");
      return u(), h(T, null, [
        j(p) ? f("", !0) : (u(), c(_, { key: 0 }, {
          default: t(() => [
            l(d, { type: "warning" }, {
              default: t(() => [
                S("请注意，使用该控件前请根据后台需要使用provide传入getToken函数，否则可能无法上传文件")
              ]),
              _: 1
            })
          ]),
          _: 1
        })),
        e.data.accept !== void 0 ? (u(), c(_, {
          key: 1,
          label: "文件类型"
        }, {
          default: t(() => [
            l(r, {
              modelValue: e.data.accept,
              "onUpdate:modelValue": o[0] || (o[0] = (x) => e.data.accept = x),
              placeholder: "请选择文件类型",
              style: { width: "100%" },
              clearable: ""
            }, {
              default: t(() => [
                l(n, {
                  label: "图片",
                  value: "image/*"
                }),
                l(n, {
                  label: "视频",
                  value: "video/*"
                }),
                l(n, {
                  label: "音频",
                  value: "audio/*"
                }),
                l(n, {
                  label: "excel",
                  value: ".xls,.xlsx"
                }),
                l(n, {
                  label: "word",
                  value: ".doc,.docx"
                }),
                l(n, {
                  label: "pdf",
                  value: ".pdf"
                }),
                l(n, {
                  label: "txt",
                  value: ".txt"
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.fileSize !== void 0 ? (u(), c(_, {
          key: 2,
          label: "文件大小"
        }, {
          default: t(() => [
            l(s, {
              modelValue: e.data.fileSize,
              "onUpdate:modelValue": o[2] || (o[2] = (x) => e.data.fileSize = x),
              modelModifiers: { number: !0 },
              placeholder: "请输入文件大小"
            }, {
              append: t(() => [
                l(r, {
                  modelValue: e.data.sizeUnit,
                  "onUpdate:modelValue": o[1] || (o[1] = (x) => e.data.sizeUnit = x),
                  style: { width: "66px" }
                }, {
                  default: t(() => [
                    l(n, {
                      label: "KB",
                      value: "KB"
                    }),
                    l(n, {
                      label: "MB",
                      value: "MB"
                    }),
                    l(n, {
                      label: "GB",
                      value: "GB"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.action !== void 0 ? (u(), c(_, {
          key: 3,
          label: "上传地址"
        }, {
          default: t(() => [
            l(s, {
              modelValue: e.data.action,
              "onUpdate:modelValue": o[3] || (o[3] = (x) => e.data.action = x),
              placeholder: "请输入上传地址"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.tag === "el-upload" && e.data.multiple !== void 0 ? (u(), c(_, {
          key: 4,
          label: "多选文件"
        }, {
          default: t(() => [
            l(g, {
              modelValue: e.data.multiple,
              "onUpdate:modelValue": o[4] || (o[4] = (x) => e.data.multiple = x)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["auto-upload"] !== void 0 ? (u(), c(_, {
          key: 5,
          label: "自动上传"
        }, {
          default: t(() => [
            l(g, {
              modelValue: e.data["auto-upload"],
              "onUpdate:modelValue": o[5] || (o[5] = (x) => e.data["auto-upload"] = x)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data["list-type"] !== void 0 ? (u(), c(_, {
          key: 6,
          label: "列表类型"
        }, {
          default: t(() => [
            l(V, {
              modelValue: e.data["list-type"],
              "onUpdate:modelValue": o[6] || (o[6] = (x) => e.data["list-type"] = x),
              size: "small"
            }, {
              default: t(() => [
                l(v, { label: "text" }, {
                  default: t(() => [
                    S("text")
                  ]),
                  _: 1
                }),
                l(v, { label: "picture" }, {
                  default: t(() => [
                    S("picture")
                  ]),
                  _: 1
                }),
                l(v, { label: "picture-card" }, {
                  default: t(() => [
                    S("picture-card")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : f("", !0),
        e.data.buttonText !== void 0 ? M((u(), c(_, {
          key: 7,
          label: "按钮文字"
        }, {
          default: t(() => [
            l(s, {
              modelValue: e.data.buttonText,
              "onUpdate:modelValue": o[7] || (o[7] = (x) => e.data.buttonText = x),
              placeholder: "请输入按钮文字"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }, 512)), [
          [E, e.data["list-type"] !== "picture-card"]
        ]) : f("", !0)
      ], 64);
    };
  }
}), Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gl
}, Symbol.toStringTag, { value: "Module" })), xl = { class: "field-box" }, Tl = /* @__PURE__ */ k({
  __name: "index",
  props: ["showField", "activeData", "formConf", "couldChangeRequire", "list"],
  setup(m) {
    const e = m;
    let p = {};
    const i = /* @__PURE__ */ Object.assign({ "./Elements/ai-amount.vue": te, "./Elements/ai-calculate.vue": ve, "./Elements/ai-date-duration.vue": ge, "./Elements/ai-ou-select.vue": xe, "./Elements/ai-time-duration.vue": he, "./Elements/el-button.vue": Te, "./Elements/el-cascader.vue": De, "./Elements/el-color-picker.vue": Me, "./Elements/el-date-picker.vue": Ie, "./Elements/el-input-number.vue": Fe, "./Elements/el-input.vue": Re, "./Elements/el-rate.vue": qe, "./Elements/el-slider.vue": Je, "./Elements/el-switch.vue": Le, "./Elements/el-time-picker.vue": Qe, "./Elements/my-card.vue": Xe, "./Elements/my-checkbox-group.vue": Ze, "./Elements/my-data-table.vue": ll, "./Elements/my-radio-group.vue": ol, "./Elements/my-row.vue": nl, "./Elements/my-select.vue": ul, "./Elements/my-sub-form.vue": sl, "./Elements/my-table.vue": _l, "./Elements/my-table1.vue": pl, "./Elements/my-tabs.vue": yl, "./Elements/my-upload.vue": Vl });
    for (const r in i) {
      let s = i[r].default.__name;
      p[s] = i[r].default;
    }
    const o = z(() => import("./index-6df8a952.js")), d = z(() => import("./form-eca10287.js")), _ = z(() => import("./general-beab9dc6.js")), n = $({
      currentTab: "field",
      data: {},
      name: "el-button"
    });
    return (r, s) => {
      const g = a("el-alert"), v = a("el-form"), V = a("el-tab-pane"), x = a("el-tabs");
      return u(), c(x, {
        modelValue: n.currentTab,
        "onUpdate:modelValue": s[0] || (s[0] = (O) => n.currentTab = O),
        class: "center-tabs"
      }, {
        default: t(() => [
          l(V, {
            label: "组件属性",
            name: "field"
          }, {
            default: t(() => [
              C("div", xl, [
                M(l(v, {
                  size: "small",
                  "label-width": "90px"
                }, {
                  default: t(() => [
                    l(j(_), {
                      data: e.activeData,
                      "could-change-require": e.couldChangeRequire
                    }, null, 8, ["data", "could-change-require"]),
                    L(r.$slots, "default"),
                    m.activeData.tag && j(p)[m.activeData.tag] !== void 0 ? (u(), c(H(j(p)[m.activeData.tag]), {
                      key: 0,
                      data: m.activeData,
                      list: m.list
                    }, null, 8, ["data", "list"])) : f("", !0),
                    (u(!0), h(T, null, P(m.activeData, (O, U, y) => (u(), h("div"))), 256)),
                    m.activeData.description ? (u(), c(g, {
                      key: 1,
                      type: "info"
                    }, {
                      default: t(() => [
                        S(D(m.activeData.description), 1)
                      ]),
                      _: 1
                    })) : f("", !0),
                    l(j(o), {
                      data: e.activeData
                    }, null, 8, ["data"])
                  ]),
                  _: 3
                }, 512), [
                  [E, n.currentTab === "field" && m.showField]
                ])
              ])
            ]),
            _: 3
          }),
          l(V, {
            label: "表单属性",
            name: "form"
          }, {
            default: t(() => [
              l(j(d), {
                "form-conf": e.formConf
              }, null, 8, ["form-conf"])
            ]),
            _: 1
          })
        ]),
        _: 3
      }, 8, ["modelValue"]);
    };
  }
});
export {
  Tl as default
};
