import { defineComponent as s, resolveComponent as m, openBlock as b, createBlock as V, withCtx as l, withDirectives as C, createVNode as e, vShow as g, createTextVNode as d } from "vue";
const c = /* @__PURE__ */ s({
  __name: "form",
  props: ["formConf"],
  setup(i) {
    const o = i;
    return (U, t) => {
      const u = m("el-input"), n = m("el-form-item"), f = m("el-radio-button"), r = m("el-radio-group"), p = m("el-input-number"), _ = m("el-form");
      return b(), V(_, {
        size: "small",
        "label-width": "90px"
      }, {
        default: l(() => [
          C(e(n, { label: "表单名" }, {
            default: l(() => [
              e(u, {
                modelValue: o.formConf.formRef,
                "onUpdate:modelValue": t[0] || (t[0] = (a) => o.formConf.formRef = a),
                placeholder: "请输入表单名（ref）"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 512), [
            [g, !1]
          ]),
          e(n, { label: "表单标题" }, {
            default: l(() => [
              e(u, {
                modelValue: o.formConf.title,
                "onUpdate:modelValue": t[1] || (t[1] = (a) => o.formConf.title = a),
                placeholder: "请输入表单标题"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          e(n, { label: "表单尺寸" }, {
            default: l(() => [
              e(r, {
                modelValue: o.formConf.size,
                "onUpdate:modelValue": t[2] || (t[2] = (a) => o.formConf.size = a)
              }, {
                default: l(() => [
                  e(f, { label: "large" }, {
                    default: l(() => [
                      d("较大")
                    ]),
                    _: 1
                  }),
                  e(f, { label: "default" }, {
                    default: l(() => [
                      d("默认")
                    ]),
                    _: 1
                  }),
                  e(f, { label: "small" }, {
                    default: l(() => [
                      d("较小")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          e(n, { label: "标签对齐" }, {
            default: l(() => [
              e(r, {
                modelValue: o.formConf.labelPosition,
                "onUpdate:modelValue": t[3] || (t[3] = (a) => o.formConf.labelPosition = a)
              }, {
                default: l(() => [
                  e(f, { label: "left" }, {
                    default: l(() => [
                      d("左对齐")
                    ]),
                    _: 1
                  }),
                  e(f, { label: "right" }, {
                    default: l(() => [
                      d("右对齐")
                    ]),
                    _: 1
                  }),
                  e(f, { label: "top" }, {
                    default: l(() => [
                      d("顶部对齐")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          e(n, { label: "标签宽度" }, {
            default: l(() => [
              e(p, {
                modelValue: o.formConf.labelWidth,
                "onUpdate:modelValue": t[4] || (t[4] = (a) => o.formConf.labelWidth = a),
                placeholder: "标签宽度"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          e(n, { label: "栅格间隔" }, {
            default: l(() => [
              e(p, {
                modelValue: o.formConf.gutter,
                "onUpdate:modelValue": t[5] || (t[5] = (a) => o.formConf.gutter = a),
                min: 0,
                placeholder: "栅格间隔"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
export {
  c as default
};
