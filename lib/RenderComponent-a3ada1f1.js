import { defineComponent as m, resolveComponent as u, openBlock as n, createBlock as d, normalizeProps as V, guardReactiveProps as j, withCtx as s, createElementBlock as p, Fragment as h, renderList as k, createTextVNode as b, toDisplayString as g, reactive as P, normalizeStyle as L, getCurrentInstance as K, defineAsyncComponent as Q, ref as S, computed as X, watch as Y, onMounted as Z, onUnmounted as ee, resolveDirective as U, withDirectives as O, createVNode as $, createElementVNode as w, createCommentVNode as x, unref as M, resolveDynamicComponent as C, mergeProps as F, createSlots as I } from "vue";
import { a as E } from "./index-89545fe5.js";
import "./RenderItem-9150195a.js";
const te = m({
  name: "my-checkbox-group"
}), le = /* @__PURE__ */ m({
  ...te,
  setup(e) {
    return (t, a) => {
      const o = u("el-checkbox-button"), c = u("el-checkbox"), i = u("el-checkbox-group");
      return n(), d(i, V(j(t.$attrs)), {
        default: s(() => [
          (n(!0), p(h, null, k(t.$attrs.options, (l) => (n(), p(h, null, [
            t.$attrs.optionType === "button" ? (n(), d(o, {
              key: 0,
              label: l.value
            }, {
              default: s(() => [
                b(g(l.label), 1)
              ]),
              _: 2
            }, 1032, ["label"])) : (n(), d(c, {
              key: 1,
              border: t.$attrs.border,
              label: l.value
            }, {
              default: s(() => [
                b(g(l.label), 1)
              ]),
              _: 2
            }, 1032, ["border", "label"]))
          ], 64))), 256))
        ]),
        _: 1
      }, 16);
    };
  }
}), oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: le
}, Symbol.toStringTag, { value: "Module" })), ne = m({
  name: "my-radio-group"
}), ae = /* @__PURE__ */ m({
  ...ne,
  setup(e) {
    return (t, a) => {
      const o = u("el-radio-button"), c = u("el-radio"), i = u("el-radio-group");
      return n(), d(i, V(j(t.$attrs)), {
        default: s(() => [
          (n(!0), p(h, null, k(t.$attrs.options, (l) => (n(), p(h, null, [
            t.$attrs.optionType === "button" ? (n(), d(o, {
              key: 0,
              label: l.value
            }, {
              default: s(() => [
                b(g(l.label), 1)
              ]),
              _: 2
            }, 1032, ["label"])) : (n(), d(c, {
              key: 1,
              border: t.$attrs.border,
              label: l.value
            }, {
              default: s(() => [
                b(g(l.label), 1)
              ]),
              _: 2
            }, 1032, ["border", "label"]))
          ], 64))), 256))
        ]),
        _: 1
      }, 16);
    };
  }
}), ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ae
}, Symbol.toStringTag, { value: "Module" })), re = m({
  name: "my-select"
}), se = /* @__PURE__ */ m({
  ...re,
  props: {},
  setup(e) {
    return P({
      options1: [{ label: "A", value: "A" }]
    }), (t, a) => {
      const o = u("el-option"), c = u("el-select");
      return n(), d(c, V(j(t.$attrs)), {
        default: s(() => [
          (n(!0), p(h, null, k(t.$attrs.options, (i) => (n(), d(o, {
            key: i.value,
            label: i.label,
            value: i.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 1
      }, 16);
    };
  }
}), de = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: se
}, Symbol.toStringTag, { value: "Module" })), ce = {}, ue = ["innerHTML"];
function me(e, t) {
  return n(), p("div", {
    style: L(e.$attrs.fontSize ? `font-size: ${e.$attrs.fontSize};` : "")
  }, [
    e.$attrs.isHtml ? (n(), p("div", {
      key: 0,
      innerHTML: e.$attrs.defaultValue
    }, null, 8, ue)) : (n(), p("pre", {
      key: 1,
      style: L({ "white-space": e.$attrs.preWrap ? "pre-wrap" : "pre", "text-align": e.$attrs.textAlign ? e.$attrs.textAlign : "left", "line-height": e.$attrs.fontSize })
    }, g(e.$attrs.defaultValue), 5))
  ], 4);
}
const fe = /* @__PURE__ */ E(ce, [["render", me]]), _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fe
}, Symbol.toStringTag, { value: "Module" }));
function pe(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, a) {
    var o = e.get(t);
    o ? o.push(a) : e.set(t, [a]);
  }, off: function(t, a) {
    var o = e.get(t);
    o && (a ? o.splice(o.indexOf(a) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, a) {
    var o = e.get(t);
    o && o.slice().map(function(c) {
      c(a);
    }), (o = e.get("*")) && o.slice().map(function(c) {
      c(t, a);
    });
  } };
}
const N = pe(), be = { style: { padding: "0px 0px 8px 8px", width: "100%" } }, ge = { class: "my-flex" }, ve = { class: "ml10 my-flex-fill my-flex-y-center" }, ye = m({
  name: "my-upload"
}), he = /* @__PURE__ */ m({
  ...ye,
  props: {
    modelValue: Array,
    disabled: Boolean
  },
  emits: ["sure", "update:modelValue"],
  setup(e, { emit: t }) {
    const a = e, o = (r) => [".png", ".jpg", ".jpeg", ".bmp", ".gif", ".webp", ".psd", ".svg", ".tiff"].indexOf(r == null ? void 0 : r.toLowerCase()) > -1;
    K();
    const c = Q(() => import("./file-upload-de0734cb.js")), i = S(), l = P({
      loading: !1,
      fileFormTitle: "",
      fileListData: JSON.parse(JSON.stringify(a.modelValue)) || [],
      fileLogsTitle: ""
    }), f = (r) => {
      l.fileListData.push(r);
    }, v = X(() => {
      let r = [];
      return l.fileListData.forEach((y) => {
        o(y.extension) && y.linkUrl && r.push(y.linkUrl);
      }), r;
    });
    Y(
      () => l.fileListData,
      (r) => {
        t("update:modelValue", JSON.parse(JSON.stringify(r)));
      },
      {
        deep: !0
      }
    ), Z(() => {
      N.on("refreshFile", async (r) => {
        l.fileListData.push(r);
      });
    });
    const A = (r, y) => {
      l.fileListData.splice(y, 1);
    };
    ee(() => {
      N.off("refreshFile");
    });
    const R = (r) => v.value.indexOf(r), B = () => {
      i.value.open();
    };
    return (r, y) => {
      const J = u("el-image"), H = u("el-link"), z = u("el-table-column"), T = u("el-button"), G = u("el-table"), D = U("auth"), W = U("loading");
      return n(), p("div", be, [
        l.fileListData.length > 0 ? O((n(), d(G, {
          key: 0,
          data: l.fileListData,
          "row-key": "id",
          style: { width: "100%" },
          "show-header": !1
        }, {
          default: s(() => [
            $(z, {
              prop: "fileName",
              label: "文件名"
            }, {
              default: s(({ row: _ }) => [
                w("div", ge, [
                  o(_.extension) ? (n(), d(J, {
                    key: 0,
                    src: _.linkUrl,
                    "preview-src-list": v.value,
                    "initial-index": R(_.linkUrl),
                    lazy: !0,
                    "hide-on-click-modal": !0,
                    fit: "scale-down",
                    "preview-teleported": "",
                    style: { height: "30px" }
                  }, null, 8, ["src", "preview-src-list", "initial-index"])) : x("", !0),
                  w("div", ve, [
                    $(H, {
                      class: "my-el-link mr12 ml12",
                      href: _.linkUrl,
                      type: "primary",
                      size: "small",
                      underline: !1,
                      target: "_blank"
                    }, {
                      default: s(() => [
                        b(g((_.fileName || "") + (_.extension || "")), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"]),
                    b(" " + g(_.sizeFormat), 1)
                  ])
                ])
              ]),
              _: 1
            }),
            a.disabled ? x("", !0) : (n(), d(z, {
              key: 0,
              label: "操作",
              fixed: "right",
              "header-align": "center",
              align: "center",
              width: "35"
            }, {
              default: s(({ row: _, $index: q }) => [
                O($(T, {
                  icon: "Delete",
                  size: "small",
                  text: "",
                  type: "danger",
                  onClick: (Se) => A(_, q)
                }, null, 8, ["onClick"]), [
                  [D, "api:admin:file:delete"]
                ])
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["data"])), [
          [W, l.loading]
        ]) : x("", !0),
        a.disabled ? x("", !0) : O((n(), d(T, {
          key: 1,
          type: "primary",
          icon: "Upload",
          onClick: B
        }, {
          default: s(() => [
            b(" 上传 ")
          ]),
          _: 1
        })), [
          [D, "api:admin:file:upload-file"]
        ]),
        $(M(c), {
          ref_key: "fileUploadRef",
          ref: i,
          title: "上传文件",
          onSuccess: f
        }, null, 512)
      ]);
    };
  }
});
const ke = /* @__PURE__ */ E(he, [["__scopeId", "data-v-73ea7639"]]), $e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ke
}, Symbol.toStringTag, { value: "Module" })), xe = m({
  name: "render-component"
}), Oe = /* @__PURE__ */ m({
  ...xe,
  props: {
    item: Object,
    attrs: Object,
    conf: Object
  },
  setup(e) {
    const t = e;
    let a = {};
    const o = /* @__PURE__ */ Object.assign({ "./Elements/FormItems/MyCheckboxGroup/index.vue": oe, "./Elements/FormItems/MyRadioGroup/index.vue": ie, "./Elements/FormItems/MySelect/index.vue": de, "./Elements/FormItems/MyText/index.vue": _e, "./Elements/FormItems/MyUpload/index.vue": $e });
    for (const i in o) {
      let l = o[i].default.name;
      a[l] = o[i].default;
    }
    let c = S(t.item.defaultValue);
    return t.conf !== void 0 && (console.log("props.item.defaultValue", t.item.defaultValue, t.item.tag), t.conf.model[t.item.vModel] === void 0 && (t.conf.model[t.item.vModel] = S(t.item.defaultValue)), c.value = t.conf.model[t.item.vModel]), (i, l) => M(a)[e.item.tag] && !e.item.disTag ? (n(), d(C(M(a)[e.item.tag]), F({
      key: 0,
      conf: e.conf,
      item: e.item
    }, i.$attrs, {
      "form-data": e.conf.model,
      modelValue: e.conf.model[e.item.vModel],
      "onUpdate:modelValue": l[0] || (l[0] = (f) => e.conf.model[e.item.vModel] = f)
    }), I({ _: 2 }, [
      k(e.item.__slot__, (f, v) => ({
        name: v,
        fn: s(() => [
          b(g(f), 1)
        ])
      }))
    ]), 1040, ["conf", "item", "form-data", "modelValue"])) : (n(), d(C(e.item.disTag ?? e.item.tag), F({ key: 1 }, i.$attrs, {
      "form-data": e.conf.model,
      modelValue: e.conf.model[e.item.vModel],
      "onUpdate:modelValue": l[1] || (l[1] = (f) => e.conf.model[e.item.vModel] = f)
    }), I({ _: 2 }, [
      k(e.item.__slot__, (f, v) => ({
        name: v,
        fn: s(() => [
          b(g(f), 1)
        ])
      }))
    ]), 1040, ["form-data", "modelValue"]));
  }
}), ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" }));
export {
  ze as R,
  N as e
};
