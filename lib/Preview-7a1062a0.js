import { defineComponent as _, defineAsyncComponent as b, ref as N, getCurrentInstance as z, reactive as V, provide as O, onMounted as $, resolveComponent as s, openBlock as h, createElementBlock as F, createVNode as t, withCtx as n, createElementVNode as m, normalizeClass as J, toDisplayString as P, createTextVNode as u, unref as R, createCommentVNode as B } from "vue";
const E = { key: 0 }, M = ["id"], A = _({
  name: "preview"
}), U = /* @__PURE__ */ _({
  ...A,
  props: {},
  setup(D, { expose: v }) {
    const y = b(() => import("./index-89545fe5.js").then((i) => i.b)), a = N(), { proxy: w } = z(), d = {
      id: void 0,
      data: [],
      model: {
        //    "field2": "选项二", "field1": [ "2023-01-03", "2023-01-17" ], "field1673928917578": 49, "field1673928939297": 4, "field1673928918984": true, "field1673928936079": 16, "field1673928921016": 1, "field1673928930234": "gdfg郭德纲"
      },
      activity: {}
    }, e = V({
      drawerSize: "390px",
      title: "表单标题",
      isShow: !1,
      loading: !1,
      optional: [],
      conf: JSON.parse(JSON.stringify(d))
    }), f = (i) => {
      a.value.submitForm((o) => {
        e.conf.workItemId, e.conf.instanceId, e.conf.templateId, e.conf.type, e.conf.activity.id, console.log(o), w.$modal.msgSuccess("模拟提交成功");
      });
    };
    O("submitForm", f);
    const S = async (i, o) => {
      e.loading = !0, e.conf = JSON.parse(JSON.stringify(d)), e.conf.data = i, e.conf.formConf = o, e.isShow = !0, e.loading = !1;
    };
    return $(() => {
    }), v({
      open: S
    }), (i, o) => {
      const r = s("el-button"), C = s("el-button-group"), g = s("el-drawer");
      return e.isShow ? (h(), F("section", E, [
        t(g, {
          modelValue: e.isShow,
          "onUpdate:modelValue": o[4] || (o[4] = (l) => e.isShow = l),
          direction: "rtl",
          size: e.drawerSize
        }, {
          header: n(({ close: l, titleId: k, titleClass: x }) => {
            var c, p;
            return [
              m("h4", {
                id: k,
                class: J(x)
              }, P((p = (c = e.conf) == null ? void 0 : c.formConf) == null ? void 0 : p.title), 11, M),
              t(C, null, {
                default: n(() => [
                  t(r, {
                    onClick: o[0] || (o[0] = (I) => e.drawerSize = "390px"),
                    icon: "Cellphone",
                    title: "手机"
                  }),
                  t(r, {
                    onClick: o[1] || (o[1] = (I) => e.drawerSize = "100%"),
                    icon: "Monitor",
                    title: "电脑"
                  })
                ]),
                _: 1
              })
            ];
          }),
          footer: n(() => [
            m("div", null, [
              t(r, {
                type: "primary",
                plain: "",
                onClick: o[2] || (o[2] = (l) => f())
              }, {
                default: n(() => [
                  u("提交")
                ]),
                _: 1
              }),
              t(r, {
                type: "info",
                plain: "",
                onClick: o[3] || (o[3] = (l) => e.isShow = !1)
              }, {
                default: n(() => [
                  u("取消")
                ]),
                _: 1
              })
            ])
          ]),
          default: n(() => [
            t(R(y), {
              conf: e.conf,
              ref_key: "formRef",
              ref: a
            }, null, 8, ["conf"])
          ]),
          _: 1
        }, 8, ["modelValue", "size"])
      ])) : B("", !0);
    };
  }
});
export {
  U as default
};
