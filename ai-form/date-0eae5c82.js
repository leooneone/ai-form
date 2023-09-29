import { defineComponent as T, inject as f, computed as O, reactive as R, resolveComponent as i, openBlock as l, createElementBlock as g, Fragment as _, createBlock as n, withCtx as d, createVNode as m, renderList as U, createCommentVNode as p } from "vue";
const H = /* @__PURE__ */ T({
  __name: "date",
  props: ["data"],
  setup(V) {
    const e = V, b = {
      date: "YYYY-MM-DD",
      week: "yyyy 第 WW 周",
      month: "yyyy-MM",
      year: "yyyy",
      datetime: "YYYY-MM-DD HH:mm:ss",
      daterange: "YYYY-MM-DD",
      monthrange: "yyyy-MM",
      datetimerange: "YYYY-MM-DD HH:mm:ss"
    }, k = f("addPCondition"), y = f("delPCondition"), h = O(() => e.data.type !== void 0 && ["el-date-picker", "ai-date-duration"].includes(e.data.tag) ? e.data["start-placeholder"] === void 0 ? v.dateTypeOptions : v.dateRangeTypeOptions : []), Y = (o) => {
      if (e.data.proCondition)
        if (o && !e.data.multiple) {
          const a = ["ai-date-duration", "ai-time-duration"].includes(e.data.tag), r = e.data.showDuration;
          if (a && !r) {
            y(e.data.formId);
            return;
          }
          k(e.data);
        } else
          y(e.data.formId);
    }, c = () => {
      var o = e.data.format, a = e.data.type;
      const r = a === "week" ? b.date : o;
      e.data.defaultValue = null, e.data["value-format"] = r, e.data.format = o;
    }, C = (o) => {
      c();
    }, v = R({
      dateTypeOptions: [
        {
          label: "日(date)",
          value: "date"
        },
        {
          label: "周(week)",
          value: "week"
        },
        {
          label: "月(month)",
          value: "month"
        },
        {
          label: "年(year)",
          value: "year"
        },
        {
          label: "日期时间(datetime)",
          value: "datetime"
        }
      ],
      dateRangeTypeOptions: [
        {
          label: "日期范围(daterange)",
          value: "daterange"
        },
        {
          label: "月范围(monthrange)",
          value: "monthrange"
        },
        {
          label: "日期时间范围(datetimerange)",
          value: "datetimerange"
        }
      ]
    });
    return (o, a) => {
      const r = i("el-option"), w = i("el-select"), u = i("el-form-item"), s = i("el-input"), D = i("el-switch");
      return l(), g(_, null, [
        e.data.type !== void 0 ? (l(), n(u, {
          key: 0,
          label: "时间类型"
        }, {
          default: d(() => [
            m(w, {
              modelValue: e.data.type,
              "onUpdate:modelValue": a[0] || (a[0] = (t) => e.data.type = t),
              placeholder: "请选择时间类型",
              style: { width: "100%" },
              onChange: C
            }, {
              default: d(() => [
                (l(!0), g(_, null, U(h.value, (t, M) => (l(), n(r, {
                  key: M,
                  label: t.label,
                  value: t.value
                }, null, 8, ["label", "value"]))), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          _: 1
        })) : p("", !0),
        e.data["range-separator"] !== void 0 ? (l(), n(u, {
          key: 1,
          label: "分隔符"
        }, {
          default: d(() => [
            m(s, {
              modelValue: e.data["range-separator"],
              "onUpdate:modelValue": a[1] || (a[1] = (t) => e.data["range-separator"] = t),
              placeholder: "请输入分隔符"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : p("", !0),
        e.data["picker-options"] !== void 0 ? (l(), n(u, {
          key: 2,
          label: "时间段"
        }, {
          default: d(() => [
            m(s, {
              modelValue: e.data["picker-options"].selectableRange,
              "onUpdate:modelValue": a[2] || (a[2] = (t) => e.data["picker-options"].selectableRange = t),
              placeholder: "请输入时间段"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : p("", !0),
        e.data.format !== void 0 ? (l(), n(u, {
          key: 3,
          label: "时间格式"
        }, {
          default: d(() => [
            m(s, {
              modelValue: e.data.format,
              "onUpdate:modelValue": a[3] || (a[3] = (t) => e.data.format = t),
              placeholder: "请输入时间格式",
              onInput: c
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : p("", !0),
        e.data.showDuration !== void 0 ? (l(), n(u, {
          key: 4,
          label: "计算时长"
        }, {
          default: d(() => [
            m(D, {
              modelValue: e.data.showDuration,
              "onUpdate:modelValue": a[4] || (a[4] = (t) => e.data.showDuration = t),
              placeholder: "自动计算时长",
              onChange: Y
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })) : p("", !0)
      ], 64);
    };
  }
});
export {
  H as default
};
