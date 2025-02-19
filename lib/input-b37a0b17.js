import { defineComponent as c, resolveComponent as m, openBlock as p, createElementBlock as s, Fragment as V, createBlock as i, withCtx as t, createVNode as a, createTextVNode as r, createCommentVNode as u } from "vue";
const k = /* @__PURE__ */ c({
  __name: "input",
  props: ["data"],
  setup(x) {
    const e = x;
    return (_, l) => {
      const n = m("el-input"), d = m("el-form-item"), f = m("el-button");
      return p(), s(V, null, [
        e.data.maxlength !== void 0 ? (p(), i(d, {
          key: 0,
          label: "最多输入"
        }, {
          default: t(() => [
            a(n, {
              modelValue: e.data.maxlength,
              "onUpdate:modelValue": l[0] || (l[0] = (o) => e.data.maxlength = o),
              placeholder: "请输入字符长度"
            }, {
              append: t(() => [
                r("个字符")
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : u("", !0),
        e.data.__slot__ ? (p(), s(V, { key: 1 }, [
          a(d, { label: "前缀" }, {
            default: t(() => [
              a(n, {
                modelValue: e.data.__slot__.prepend,
                "onUpdate:modelValue": l[1] || (l[1] = (o) => e.data.__slot__.prepend = o),
                placeholder: "请输入前缀"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          a(d, { label: "后缀" }, {
            default: t(() => [
              a(n, {
                modelValue: e.data.__slot__.append,
                "onUpdate:modelValue": l[2] || (l[2] = (o) => e.data.__slot__.append = o),
                placeholder: "请输入后缀"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ], 64)) : u("", !0),
        e.data["prefix-icon"] !== void 0 ? (p(), i(d, {
          key: 2,
          label: "前图标"
        }, {
          default: t(() => [
            a(n, {
              modelValue: e.data["prefix-icon"],
              "onUpdate:modelValue": l[4] || (l[4] = (o) => e.data["prefix-icon"] = o),
              placeholder: "请输入前图标名称"
            }, {
              default: t(() => [
                a(f, {
                  icon: "el-icon-thumb",
                  onClick: l[3] || (l[3] = (o) => _.openIconsDialog("prefix-icon"))
                }, {
                  append: t(() => [
                    r(" 选择 ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : u("", !0),
        e.data["suffix-icon"] !== void 0 ? (p(), i(d, {
          key: 3,
          label: "后图标"
        }, {
          default: t(() => [
            a(n, {
              modelValue: e.data["suffix-icon"],
              "onUpdate:modelValue": l[6] || (l[6] = (o) => e.data["suffix-icon"] = o),
              placeholder: "请输入后图标名称"
            }, {
              default: t(() => [
                a(f, {
                  icon: "el-icon-thumb",
                  onClick: l[5] || (l[5] = (o) => _.openIconsDialog("suffix-icon"))
                }, {
                  append: t(() => [
                    r(" 选择 ")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : u("", !0)
      ], 64);
    };
  }
});
export {
  k as default
};
