import { defineComponent as Y, defineAsyncComponent as ne, inject as K, provide as q, resolveComponent as V, openBlock as C, createBlock as ee, mergeProps as fe, withCtx as T, createElementBlock as E, toDisplayString as ce, createCommentVNode as te, createVNode as N, unref as J, Fragment as ae, renderList as he, normalizeClass as be, createElementVNode as se, createTextVNode as G, reactive as ge, computed as X, normalizeStyle as Se, withModifiers as Me, resolveDynamicComponent as Oe } from "vue";
import { a as ve } from "./index-5c589461.js";
var pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _e(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var ye = { exports: {} };
(function(l, r) {
  (function(w, D) {
    l.exports = D();
  })(pe, function() {
    var w = 1e3, D = 6e4, O = 36e5, S = "millisecond", M = "second", m = "minute", b = "hour", e = "day", t = "week", a = "month", o = "quarter", n = "year", i = "date", c = "Invalid Date", u = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(v) {
      var f = ["th", "st", "nd", "rd"], s = v % 100;
      return "[" + v + (f[(s - 20) % 10] || f[s] || f[0]) + "]";
    } }, x = function(v, f, s) {
      var h = String(v);
      return !h || h.length >= f ? v : "" + Array(f + 1 - h.length).join(s) + v;
    }, L = { s: x, z: function(v) {
      var f = -v.utcOffset(), s = Math.abs(f), h = Math.floor(s / 60), d = s % 60;
      return (f <= 0 ? "+" : "-") + x(h, 2, "0") + ":" + x(d, 2, "0");
    }, m: function v(f, s) {
      if (f.date() < s.date())
        return -v(s, f);
      var h = 12 * (s.year() - f.year()) + (s.month() - f.month()), d = f.clone().add(h, a), _ = s - d < 0, y = f.clone().add(h + (_ ? -1 : 1), a);
      return +(-(h + (s - d) / (_ ? d - y : y - d)) || 0);
    }, a: function(v) {
      return v < 0 ? Math.ceil(v) || 0 : Math.floor(v);
    }, p: function(v) {
      return { M: a, y: n, w: t, d: e, D: i, h: b, m, s: M, ms: S, Q: o }[v] || String(v || "").toLowerCase().replace(/s$/, "");
    }, u: function(v) {
      return v === void 0;
    } }, I = "en", A = {};
    A[I] = p;
    var R = "$isDayjsObject", z = function(v) {
      return v instanceof re || !(!v || !v[R]);
    }, j = function v(f, s, h) {
      var d;
      if (!f)
        return I;
      if (typeof f == "string") {
        var _ = f.toLowerCase();
        A[_] && (d = _), s && (A[_] = s, d = _);
        var y = f.split("-");
        if (!d && y.length > 1)
          return v(y[0]);
      } else {
        var k = f.name;
        A[k] = f, d = k;
      }
      return !h && d && (I = d), d || !h && I;
    }, F = function(v, f) {
      if (z(v))
        return v.clone();
      var s = typeof f == "object" ? f : {};
      return s.date = v, s.args = arguments, new re(s);
    }, $ = L;
    $.l = j, $.i = z, $.w = function(v, f) {
      return F(v, { locale: f.$L, utc: f.$u, x: f.$x, $offset: f.$offset });
    };
    var re = function() {
      function v(s) {
        this.$L = j(s.locale, null, !0), this.parse(s), this.$x = this.$x || s.x || {}, this[R] = !0;
      }
      var f = v.prototype;
      return f.parse = function(s) {
        this.$d = function(h) {
          var d = h.date, _ = h.utc;
          if (d === null)
            return /* @__PURE__ */ new Date(NaN);
          if ($.u(d))
            return /* @__PURE__ */ new Date();
          if (d instanceof Date)
            return new Date(d);
          if (typeof d == "string" && !/Z$/i.test(d)) {
            var y = d.match(u);
            if (y) {
              var k = y[2] - 1 || 0, B = (y[7] || "0").substring(0, 3);
              return _ ? new Date(Date.UTC(y[1], k, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, B)) : new Date(y[1], k, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, B);
            }
          }
          return new Date(d);
        }(s), this.init();
      }, f.init = function() {
        var s = this.$d;
        this.$y = s.getFullYear(), this.$M = s.getMonth(), this.$D = s.getDate(), this.$W = s.getDay(), this.$H = s.getHours(), this.$m = s.getMinutes(), this.$s = s.getSeconds(), this.$ms = s.getMilliseconds();
      }, f.$utils = function() {
        return $;
      }, f.isValid = function() {
        return this.$d.toString() !== c;
      }, f.isSame = function(s, h) {
        var d = F(s);
        return this.startOf(h) <= d && d <= this.endOf(h);
      }, f.isAfter = function(s, h) {
        return F(s) < this.startOf(h);
      }, f.isBefore = function(s, h) {
        return this.endOf(h) < F(s);
      }, f.$g = function(s, h, d) {
        return $.u(s) ? this[h] : this.set(d, s);
      }, f.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, f.valueOf = function() {
        return this.$d.getTime();
      }, f.startOf = function(s, h) {
        var d = this, _ = !!$.u(h) || h, y = $.p(s), k = function(oe, H) {
          var Q = $.w(d.$u ? Date.UTC(d.$y, H, oe) : new Date(d.$y, H, oe), d);
          return _ ? Q : Q.endOf(e);
        }, B = function(oe, H) {
          return $.w(d.toDate()[oe].apply(d.toDate("s"), (_ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(H)), d);
        }, P = this.$W, W = this.$M, Z = this.$D, le = "set" + (this.$u ? "UTC" : "");
        switch (y) {
          case n:
            return _ ? k(1, 0) : k(31, 11);
          case a:
            return _ ? k(1, W) : k(0, W + 1);
          case t:
            var ie = this.$locale().weekStart || 0, ue = (P < ie ? P + 7 : P) - ie;
            return k(_ ? Z - ue : Z + (6 - ue), W);
          case e:
          case i:
            return B(le + "Hours", 0);
          case b:
            return B(le + "Minutes", 1);
          case m:
            return B(le + "Seconds", 2);
          case M:
            return B(le + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, f.endOf = function(s) {
        return this.startOf(s, !1);
      }, f.$set = function(s, h) {
        var d, _ = $.p(s), y = "set" + (this.$u ? "UTC" : ""), k = (d = {}, d[e] = y + "Date", d[i] = y + "Date", d[a] = y + "Month", d[n] = y + "FullYear", d[b] = y + "Hours", d[m] = y + "Minutes", d[M] = y + "Seconds", d[S] = y + "Milliseconds", d)[_], B = _ === e ? this.$D + (h - this.$W) : h;
        if (_ === a || _ === n) {
          var P = this.clone().set(i, 1);
          P.$d[k](B), P.init(), this.$d = P.set(i, Math.min(this.$D, P.daysInMonth())).$d;
        } else
          k && this.$d[k](B);
        return this.init(), this;
      }, f.set = function(s, h) {
        return this.clone().$set(s, h);
      }, f.get = function(s) {
        return this[$.p(s)]();
      }, f.add = function(s, h) {
        var d, _ = this;
        s = Number(s);
        var y = $.p(h), k = function(W) {
          var Z = F(_);
          return $.w(Z.date(Z.date() + Math.round(W * s)), _);
        };
        if (y === a)
          return this.set(a, this.$M + s);
        if (y === n)
          return this.set(n, this.$y + s);
        if (y === e)
          return k(1);
        if (y === t)
          return k(7);
        var B = (d = {}, d[m] = D, d[b] = O, d[M] = w, d)[y] || 1, P = this.$d.getTime() + s * B;
        return $.w(P, this);
      }, f.subtract = function(s, h) {
        return this.add(-1 * s, h);
      }, f.format = function(s) {
        var h = this, d = this.$locale();
        if (!this.isValid())
          return d.invalidDate || c;
        var _ = s || "YYYY-MM-DDTHH:mm:ssZ", y = $.z(this), k = this.$H, B = this.$m, P = this.$M, W = d.weekdays, Z = d.months, le = d.meridiem, ie = function(H, Q, de, me) {
          return H && (H[Q] || H(h, _)) || de[Q].slice(0, me);
        }, ue = function(H) {
          return $.s(k % 12 || 12, H, "0");
        }, oe = le || function(H, Q, de) {
          var me = H < 12 ? "AM" : "PM";
          return de ? me.toLowerCase() : me;
        };
        return _.replace(g, function(H, Q) {
          return Q || function(de) {
            switch (de) {
              case "YY":
                return String(h.$y).slice(-2);
              case "YYYY":
                return $.s(h.$y, 4, "0");
              case "M":
                return P + 1;
              case "MM":
                return $.s(P + 1, 2, "0");
              case "MMM":
                return ie(d.monthsShort, P, Z, 3);
              case "MMMM":
                return ie(Z, P);
              case "D":
                return h.$D;
              case "DD":
                return $.s(h.$D, 2, "0");
              case "d":
                return String(h.$W);
              case "dd":
                return ie(d.weekdaysMin, h.$W, W, 2);
              case "ddd":
                return ie(d.weekdaysShort, h.$W, W, 3);
              case "dddd":
                return W[h.$W];
              case "H":
                return String(k);
              case "HH":
                return $.s(k, 2, "0");
              case "h":
                return ue(1);
              case "hh":
                return ue(2);
              case "a":
                return oe(k, B, !0);
              case "A":
                return oe(k, B, !1);
              case "m":
                return String(B);
              case "mm":
                return $.s(B, 2, "0");
              case "s":
                return String(h.$s);
              case "ss":
                return $.s(h.$s, 2, "0");
              case "SSS":
                return $.s(h.$ms, 3, "0");
              case "Z":
                return y;
            }
            return null;
          }(H) || y.replace(":", "");
        });
      }, f.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, f.diff = function(s, h, d) {
        var _, y = this, k = $.p(h), B = F(s), P = (B.utcOffset() - this.utcOffset()) * D, W = this - B, Z = function() {
          return $.m(y, B);
        };
        switch (k) {
          case n:
            _ = Z() / 12;
            break;
          case a:
            _ = Z();
            break;
          case o:
            _ = Z() / 3;
            break;
          case t:
            _ = (W - P) / 6048e5;
            break;
          case e:
            _ = (W - P) / 864e5;
            break;
          case b:
            _ = W / O;
            break;
          case m:
            _ = W / D;
            break;
          case M:
            _ = W / w;
            break;
          default:
            _ = W;
        }
        return d ? _ : $.a(_);
      }, f.daysInMonth = function() {
        return this.endOf(a).$D;
      }, f.$locale = function() {
        return A[this.$L];
      }, f.locale = function(s, h) {
        if (!s)
          return this.$L;
        var d = this.clone(), _ = j(s, h, !0);
        return _ && (d.$L = _), d;
      }, f.clone = function() {
        return $.w(this.$d, this);
      }, f.toDate = function() {
        return new Date(this.valueOf());
      }, f.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, f.toISOString = function() {
        return this.$d.toISOString();
      }, f.toString = function() {
        return this.$d.toUTCString();
      }, v;
    }(), U = re.prototype;
    return F.prototype = U, [["$ms", S], ["$s", M], ["$m", m], ["$H", b], ["$W", e], ["$M", a], ["$y", n], ["$D", i]].forEach(function(v) {
      U[v[1]] = function(f) {
        return this.$g(f, v[0], v[1]);
      };
    }), F.extend = function(v, f) {
      return v.$i || (v(f, re, F), v.$i = !0), F;
    }, F.locale = j, F.isDayjs = z, F.unix = function(v) {
      return F(1e3 * v);
    }, F.en = A[I], F.Ls = A, F.p = {}, F;
  });
})(ye);
var Fe = ye.exports;
const xe = /* @__PURE__ */ _e(Fe), Ne = {
  key: 0,
  class: "component-name"
}, ke = Y({
  name: "my-card"
}), Ce = /* @__PURE__ */ Y({
  ...ke,
  props: {
    activeId: String || Number,
    item: Object,
    conf: Object
  },
  setup(l) {
    const r = ne(() => import("./RenderPanel-f9734304.js")), w = K("activeFormItem");
    return q("activeFormItem", w), (D, O) => {
      const S = V("el-card");
      return C(), ee(S, fe(l.item, { class: "drawing-layout-item" }), {
        default: T(() => [
          l.item.showLabel ? (C(), E("span", Ne, ce(l.item.label), 1)) : te("", !0),
          N(J(r), {
            "active-id": l.activeId,
            list: l.item.children,
            tag: "el-row",
            conf: l.conf,
            space: "15",
            justify: "left"
          }, null, 8, ["active-id", "list", "conf"])
        ]),
        _: 1
      }, 16);
    };
  }
});
const De = /* @__PURE__ */ ve(Ce, [["__scopeId", "data-v-fa4a88d4"]]), je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" }));
var we = { exports: {} };
/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
(function(l) {
  (function(r, w) {
    l.exports ? l.exports = w() : r.numeral = w();
  })(pe, function() {
    var r, w, D = "2.0.6", O = {}, S = {}, M = {
      currentLocale: "en",
      zeroFormat: null,
      nullFormat: null,
      defaultFormat: "0,0",
      scalePercentBy100: !0
    }, m = {
      currentLocale: M.currentLocale,
      zeroFormat: M.zeroFormat,
      nullFormat: M.nullFormat,
      defaultFormat: M.defaultFormat,
      scalePercentBy100: M.scalePercentBy100
    };
    function b(e, t) {
      this._input = e, this._value = t;
    }
    return r = function(e) {
      var t, a, o, n;
      if (r.isNumeral(e))
        t = e.value();
      else if (e === 0 || typeof e > "u")
        t = 0;
      else if (e === null || w.isNaN(e))
        t = null;
      else if (typeof e == "string")
        if (m.zeroFormat && e === m.zeroFormat)
          t = 0;
        else if (m.nullFormat && e === m.nullFormat || !e.replace(/[^0-9]+/g, "").length)
          t = null;
        else {
          for (a in O)
            if (n = typeof O[a].regexps.unformat == "function" ? O[a].regexps.unformat() : O[a].regexps.unformat, n && e.match(n)) {
              o = O[a].unformat;
              break;
            }
          o = o || r._.stringToNumber, t = o(e);
        }
      else
        t = Number(e) || null;
      return new b(e, t);
    }, r.version = D, r.isNumeral = function(e) {
      return e instanceof b;
    }, r._ = w = {
      // formats numbers separators, decimals places, signs, abbreviations
      numberToFormat: function(e, t, a) {
        var o = S[r.options.currentLocale], n = !1, i = !1, c = 0, u = "", g = 1e12, p = 1e9, x = 1e6, L = 1e3, I = "", A = !1, R, z, j, F, $, re, U;
        if (e = e || 0, z = Math.abs(e), r._.includes(t, "(") ? (n = !0, t = t.replace(/[\(|\)]/g, "")) : (r._.includes(t, "+") || r._.includes(t, "-")) && ($ = r._.includes(t, "+") ? t.indexOf("+") : e < 0 ? t.indexOf("-") : -1, t = t.replace(/[\+|\-]/g, "")), r._.includes(t, "a") && (R = t.match(/a(k|m|b|t)?/), R = R ? R[1] : !1, r._.includes(t, " a") && (u = " "), t = t.replace(new RegExp(u + "a[kmbt]?"), ""), z >= g && !R || R === "t" ? (u += o.abbreviations.trillion, e = e / g) : z < g && z >= p && !R || R === "b" ? (u += o.abbreviations.billion, e = e / p) : z < p && z >= x && !R || R === "m" ? (u += o.abbreviations.million, e = e / x) : (z < x && z >= L && !R || R === "k") && (u += o.abbreviations.thousand, e = e / L)), r._.includes(t, "[.]") && (i = !0, t = t.replace("[.]", ".")), j = e.toString().split(".")[0], F = t.split(".")[1], re = t.indexOf(","), c = (t.split(".")[0].split(",")[0].match(/0/g) || []).length, F ? (r._.includes(F, "[") ? (F = F.replace("]", ""), F = F.split("["), I = r._.toFixed(e, F[0].length + F[1].length, a, F[1].length)) : I = r._.toFixed(e, F.length, a), j = I.split(".")[0], r._.includes(I, ".") ? I = o.delimiters.decimal + I.split(".")[1] : I = "", i && Number(I.slice(1)) === 0 && (I = "")) : j = r._.toFixed(e, 0, a), u && !R && Number(j) >= 1e3 && u !== o.abbreviations.trillion)
          switch (j = String(Number(j) / 1e3), u) {
            case o.abbreviations.thousand:
              u = o.abbreviations.million;
              break;
            case o.abbreviations.million:
              u = o.abbreviations.billion;
              break;
            case o.abbreviations.billion:
              u = o.abbreviations.trillion;
              break;
          }
        if (r._.includes(j, "-") && (j = j.slice(1), A = !0), j.length < c)
          for (var v = c - j.length; v > 0; v--)
            j = "0" + j;
        return re > -1 && (j = j.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + o.delimiters.thousands)), t.indexOf(".") === 0 && (j = ""), U = j + I + (u || ""), n ? U = (n && A ? "(" : "") + U + (n && A ? ")" : "") : $ >= 0 ? U = $ === 0 ? (A ? "-" : "+") + U : U + (A ? "-" : "+") : A && (U = "-" + U), U;
      },
      // unformats numbers separators, decimals places, signs, abbreviations
      stringToNumber: function(e) {
        var t = S[m.currentLocale], a = e, o = {
          thousand: 3,
          million: 6,
          billion: 9,
          trillion: 12
        }, n, i, c;
        if (m.zeroFormat && e === m.zeroFormat)
          i = 0;
        else if (m.nullFormat && e === m.nullFormat || !e.replace(/[^0-9]+/g, "").length)
          i = null;
        else {
          i = 1, t.delimiters.decimal !== "." && (e = e.replace(/\./g, "").replace(t.delimiters.decimal, "."));
          for (n in o)
            if (c = new RegExp("[^a-zA-Z]" + t.abbreviations[n] + "(?:\\)|(\\" + t.currency.symbol + ")?(?:\\))?)?$"), a.match(c)) {
              i *= Math.pow(10, o[n]);
              break;
            }
          i *= (e.split("-").length + Math.min(e.split("(").length - 1, e.split(")").length - 1)) % 2 ? 1 : -1, e = e.replace(/[^0-9\.]+/g, ""), i *= Number(e);
        }
        return i;
      },
      isNaN: function(e) {
        return typeof e == "number" && isNaN(e);
      },
      includes: function(e, t) {
        return e.indexOf(t) !== -1;
      },
      insert: function(e, t, a) {
        return e.slice(0, a) + t + e.slice(a);
      },
      reduce: function(e, t) {
        if (this === null)
          throw new TypeError("Array.prototype.reduce called on null or undefined");
        if (typeof t != "function")
          throw new TypeError(t + " is not a function");
        var a = Object(e), o = a.length >>> 0, n = 0, i;
        if (arguments.length === 3)
          i = arguments[2];
        else {
          for (; n < o && !(n in a); )
            n++;
          if (n >= o)
            throw new TypeError("Reduce of empty array with no initial value");
          i = a[n++];
        }
        for (; n < o; n++)
          n in a && (i = t(i, a[n], n, a));
        return i;
      },
      /**
       * Computes the multiplier necessary to make x >= 1,
       * effectively eliminating miscalculations caused by
       * finite precision.
       */
      multiplier: function(e) {
        var t = e.toString().split(".");
        return t.length < 2 ? 1 : Math.pow(10, t[1].length);
      },
      /**
       * Given a variable number of arguments, returns the maximum
       * multiplier that must be used to normalize an operation involving
       * all of them.
       */
      correctionFactor: function() {
        var e = Array.prototype.slice.call(arguments);
        return e.reduce(function(t, a) {
          var o = w.multiplier(a);
          return t > o ? t : o;
        }, 1);
      },
      /**
       * Implementation of toFixed() that treats floats more like decimals
       *
       * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
       * problems for accounting- and finance-related software.
       */
      toFixed: function(e, t, a, o) {
        var n = e.toString().split("."), i = t - (o || 0), c, u, g, p;
        return n.length === 2 ? c = Math.min(Math.max(n[1].length, i), t) : c = i, g = Math.pow(10, c), p = (a(e + "e+" + c) / g).toFixed(c), o > t - c && (u = new RegExp("\\.?0{1," + (o - (t - c)) + "}$"), p = p.replace(u, "")), p;
      }
    }, r.options = m, r.formats = O, r.locales = S, r.locale = function(e) {
      return e && (m.currentLocale = e.toLowerCase()), m.currentLocale;
    }, r.localeData = function(e) {
      if (!e)
        return S[m.currentLocale];
      if (e = e.toLowerCase(), !S[e])
        throw new Error("Unknown locale : " + e);
      return S[e];
    }, r.reset = function() {
      for (var e in M)
        m[e] = M[e];
    }, r.zeroFormat = function(e) {
      m.zeroFormat = typeof e == "string" ? e : null;
    }, r.nullFormat = function(e) {
      m.nullFormat = typeof e == "string" ? e : null;
    }, r.defaultFormat = function(e) {
      m.defaultFormat = typeof e == "string" ? e : "0.0";
    }, r.register = function(e, t, a) {
      if (t = t.toLowerCase(), this[e + "s"][t])
        throw new TypeError(t + " " + e + " already registered.");
      return this[e + "s"][t] = a, a;
    }, r.validate = function(e, t) {
      var a, o, n, i, c, u, g, p;
      if (typeof e != "string" && (e += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", e)), e = e.trim(), e.match(/^\d+$/))
        return !0;
      if (e === "")
        return !1;
      try {
        g = r.localeData(t);
      } catch {
        g = r.localeData(r.locale());
      }
      return n = g.currency.symbol, c = g.abbreviations, a = g.delimiters.decimal, g.delimiters.thousands === "." ? o = "\\." : o = g.delimiters.thousands, p = e.match(/^[^\d]+/), p !== null && (e = e.substr(1), p[0] !== n) || (p = e.match(/[^\d]+$/), p !== null && (e = e.slice(0, -1), p[0] !== c.thousand && p[0] !== c.million && p[0] !== c.billion && p[0] !== c.trillion)) ? !1 : (u = new RegExp(o + "{2}"), e.match(/[^\d.,]/g) ? !1 : (i = e.split(a), i.length > 2 ? !1 : i.length < 2 ? !!i[0].match(/^\d+.*\d$/) && !i[0].match(u) : i[0].length === 1 ? !!i[0].match(/^\d+$/) && !i[0].match(u) && !!i[1].match(/^\d+$/) : !!i[0].match(/^\d+.*\d$/) && !i[0].match(u) && !!i[1].match(/^\d+$/)));
    }, r.fn = b.prototype = {
      clone: function() {
        return r(this);
      },
      format: function(e, t) {
        var a = this._value, o = e || m.defaultFormat, n, i, c;
        if (t = t || Math.round, a === 0 && m.zeroFormat !== null)
          i = m.zeroFormat;
        else if (a === null && m.nullFormat !== null)
          i = m.nullFormat;
        else {
          for (n in O)
            if (o.match(O[n].regexps.format)) {
              c = O[n].format;
              break;
            }
          c = c || r._.numberToFormat, i = c(a, o, t);
        }
        return i;
      },
      value: function() {
        return this._value;
      },
      input: function() {
        return this._input;
      },
      set: function(e) {
        return this._value = Number(e), this;
      },
      add: function(e) {
        var t = w.correctionFactor.call(null, this._value, e);
        function a(o, n, i, c) {
          return o + Math.round(t * n);
        }
        return this._value = w.reduce([this._value, e], a, 0) / t, this;
      },
      subtract: function(e) {
        var t = w.correctionFactor.call(null, this._value, e);
        function a(o, n, i, c) {
          return o - Math.round(t * n);
        }
        return this._value = w.reduce([e], a, Math.round(this._value * t)) / t, this;
      },
      multiply: function(e) {
        function t(a, o, n, i) {
          var c = w.correctionFactor(a, o);
          return Math.round(a * c) * Math.round(o * c) / Math.round(c * c);
        }
        return this._value = w.reduce([this._value, e], t, 1), this;
      },
      divide: function(e) {
        function t(a, o, n, i) {
          var c = w.correctionFactor(a, o);
          return Math.round(a * c) / Math.round(o * c);
        }
        return this._value = w.reduce([this._value, e], t), this;
      },
      difference: function(e) {
        return Math.abs(r(this._value).subtract(e).value());
      }
    }, r.register("locale", "en", {
      delimiters: {
        thousands: ",",
        decimal: "."
      },
      abbreviations: {
        thousand: "k",
        million: "m",
        billion: "b",
        trillion: "t"
      },
      ordinal: function(e) {
        var t = e % 10;
        return ~~(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
      },
      currency: {
        symbol: "$"
      }
    }), function() {
      r.register("format", "bps", {
        regexps: {
          format: /(BPS)/,
          unformat: /(BPS)/
        },
        format: function(e, t, a) {
          var o = r._.includes(t, " BPS") ? " " : "", n;
          return e = e * 1e4, t = t.replace(/\s?BPS/, ""), n = r._.numberToFormat(e, t, a), r._.includes(n, ")") ? (n = n.split(""), n.splice(-1, 0, o + "BPS"), n = n.join("")) : n = n + o + "BPS", n;
        },
        unformat: function(e) {
          return +(r._.stringToNumber(e) * 1e-4).toFixed(15);
        }
      });
    }(), function() {
      var e = {
        base: 1e3,
        suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
      }, t = {
        base: 1024,
        suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
      }, a = e.suffixes.concat(t.suffixes.filter(function(n) {
        return e.suffixes.indexOf(n) < 0;
      })), o = a.join("|");
      o = "(" + o.replace("B", "B(?!PS)") + ")", r.register("format", "bytes", {
        regexps: {
          format: /([0\s]i?b)/,
          unformat: new RegExp(o)
        },
        format: function(n, i, c) {
          var u, g = r._.includes(i, "ib") ? t : e, p = r._.includes(i, " b") || r._.includes(i, " ib") ? " " : "", x, L, I;
          for (i = i.replace(/\s?i?b/, ""), x = 0; x <= g.suffixes.length; x++)
            if (L = Math.pow(g.base, x), I = Math.pow(g.base, x + 1), n === null || n === 0 || n >= L && n < I) {
              p += g.suffixes[x], L > 0 && (n = n / L);
              break;
            }
          return u = r._.numberToFormat(n, i, c), u + p;
        },
        unformat: function(n) {
          var i = r._.stringToNumber(n), c, u;
          if (i) {
            for (c = e.suffixes.length - 1; c >= 0; c--) {
              if (r._.includes(n, e.suffixes[c])) {
                u = Math.pow(e.base, c);
                break;
              }
              if (r._.includes(n, t.suffixes[c])) {
                u = Math.pow(t.base, c);
                break;
              }
            }
            i *= u || 1;
          }
          return i;
        }
      });
    }(), function() {
      r.register("format", "currency", {
        regexps: {
          format: /(\$)/
        },
        format: function(e, t, a) {
          var o = r.locales[r.options.currentLocale], n = {
            before: t.match(/^([\+|\-|\(|\s|\$]*)/)[0],
            after: t.match(/([\+|\-|\)|\s|\$]*)$/)[0]
          }, i, c, u;
          for (t = t.replace(/\s?\$\s?/, ""), i = r._.numberToFormat(e, t, a), e >= 0 ? (n.before = n.before.replace(/[\-\(]/, ""), n.after = n.after.replace(/[\-\)]/, "")) : e < 0 && !r._.includes(n.before, "-") && !r._.includes(n.before, "(") && (n.before = "-" + n.before), u = 0; u < n.before.length; u++)
            switch (c = n.before[u], c) {
              case "$":
                i = r._.insert(i, o.currency.symbol, u);
                break;
              case " ":
                i = r._.insert(i, " ", u + o.currency.symbol.length - 1);
                break;
            }
          for (u = n.after.length - 1; u >= 0; u--)
            switch (c = n.after[u], c) {
              case "$":
                i = u === n.after.length - 1 ? i + o.currency.symbol : r._.insert(i, o.currency.symbol, -(n.after.length - (1 + u)));
                break;
              case " ":
                i = u === n.after.length - 1 ? i + " " : r._.insert(i, " ", -(n.after.length - (1 + u) + o.currency.symbol.length - 1));
                break;
            }
          return i;
        }
      });
    }(), function() {
      r.register("format", "exponential", {
        regexps: {
          format: /(e\+|e-)/,
          unformat: /(e\+|e-)/
        },
        format: function(e, t, a) {
          var o, n = typeof e == "number" && !r._.isNaN(e) ? e.toExponential() : "0e+0", i = n.split("e");
          return t = t.replace(/e[\+|\-]{1}0/, ""), o = r._.numberToFormat(Number(i[0]), t, a), o + "e" + i[1];
        },
        unformat: function(e) {
          var t = r._.includes(e, "e+") ? e.split("e+") : e.split("e-"), a = Number(t[0]), o = Number(t[1]);
          o = r._.includes(e, "e-") ? o *= -1 : o;
          function n(i, c, u, g) {
            var p = r._.correctionFactor(i, c), x = i * p * (c * p) / (p * p);
            return x;
          }
          return r._.reduce([a, Math.pow(10, o)], n, 1);
        }
      });
    }(), function() {
      r.register("format", "ordinal", {
        regexps: {
          format: /(o)/
        },
        format: function(e, t, a) {
          var o = r.locales[r.options.currentLocale], n, i = r._.includes(t, " o") ? " " : "";
          return t = t.replace(/\s?o/, ""), i += o.ordinal(e), n = r._.numberToFormat(e, t, a), n + i;
        }
      });
    }(), function() {
      r.register("format", "percentage", {
        regexps: {
          format: /(%)/,
          unformat: /(%)/
        },
        format: function(e, t, a) {
          var o = r._.includes(t, " %") ? " " : "", n;
          return r.options.scalePercentBy100 && (e = e * 100), t = t.replace(/\s?\%/, ""), n = r._.numberToFormat(e, t, a), r._.includes(n, ")") ? (n = n.split(""), n.splice(-1, 0, o + "%"), n = n.join("")) : n = n + o + "%", n;
        },
        unformat: function(e) {
          var t = r._.stringToNumber(e);
          return r.options.scalePercentBy100 ? t * 0.01 : t;
        }
      });
    }(), function() {
      r.register("format", "time", {
        regexps: {
          format: /(:)/,
          unformat: /(:)/
        },
        format: function(e, t, a) {
          var o = Math.floor(e / 60 / 60), n = Math.floor((e - o * 60 * 60) / 60), i = Math.round(e - o * 60 * 60 - n * 60);
          return o + ":" + (n < 10 ? "0" + n : n) + ":" + (i < 10 ? "0" + i : i);
        },
        unformat: function(e) {
          var t = e.split(":"), a = 0;
          return t.length === 3 ? (a = a + Number(t[0]) * 60 * 60, a = a + Number(t[1]) * 60, a = a + Number(t[2])) : t.length === 2 && (a = a + Number(t[0]) * 60, a = a + Number(t[1])), Number(a);
        }
      });
    }(), r;
  });
})(we);
var Te = we.exports;
const Ie = /* @__PURE__ */ _e(Te), Be = { key: 0 }, Re = Y({
  name: "my-data-table"
}), Le = /* @__PURE__ */ Y({
  ...Re,
  props: {
    activeId: String || Number,
    item: Object,
    conf: Object
  },
  setup(l) {
    ne(() => import("./RenderPanel-f9734304.js"));
    const r = (S, M) => xe(S).format(M), w = (S, M) => Ie(S).format(M), D = (S, M, m) => {
      var b = S[M.property];
      return m.formatString !== void 0 ? m.formatType === "number" ? w(b, m.formatString) : m.formatType === "date" ? r(b, m.formatString) : m.formatString : b;
    }, O = K("activeFormItem");
    return q("activeFormItem", O), (S, M) => {
      const m = V("el-table-column"), b = V("el-table");
      return C(), E(ae, null, [
        l.item.showLabel ? (C(), E("div", Be, ce(l.item.label), 1)) : te("", !0),
        N(b, fe({ class: "drawing-layout-item" }, l.item, {
          data: l.item.data
        }), {
          default: T(() => [
            (C(!0), E(ae, null, he(l.item.cols, (e, t) => (C(), E(ae, null, [
              e.isShow ? (C(), ee(m, fe({ key: 0 }, e, {
                prop: e.prop,
                formatter: (a, o) => D(a, o, e)
              }), null, 16, ["prop", "formatter"])) : te("", !0)
            ], 64))), 256))
          ]),
          _: 1
        }, 16, ["data"])
      ], 64);
    };
  }
});
const Pe = /* @__PURE__ */ ve(Le, [["__scopeId", "data-v-27cf9668"]]), Ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), Ae = {
  key: 0,
  class: "component-name"
}, ze = Y({
  name: "my-row"
}), We = /* @__PURE__ */ Y({
  ...ze,
  props: {
    activeId: String || Number,
    item: Object,
    conf: Object
  },
  setup(l) {
    const r = ne(() => import("./RenderPanel-f9734304.js")), w = "drawing-layout-item", D = K("activeFormItem");
    return q("activeFormItem", D), (O, S) => (C(), E("div", {
      class: be(w)
    }, [
      l.item.showLabel ? (C(), E("span", Ae, ce(l.item.label), 1)) : te("", !0),
      N(J(r), {
        "active-id": l.activeId,
        list: l.item.children,
        tag: "el-row",
        conf: l.conf,
        space: "15",
        justify: "left"
      }, null, 8, ["active-id", "list", "conf"])
    ], 2));
  }
});
const Ve = /* @__PURE__ */ ve(We, [["__scopeId", "data-v-87f2c981"]]), Ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), He = { class: "component-name" }, Je = { style: { "text-align": "center", background: "white", color: "#4e79ff", padding: "0.4rem 1rem" } }, Ue = Y({
  name: "my-sub-form"
}), Ze = /* @__PURE__ */ Y({
  ...Ue,
  props: {
    activeId: String || Number,
    item: Object,
    conf: Object,
    index: String || Number
  },
  setup(l) {
    const r = l, w = ne(() => import("./RenderPanel-f9734304.js")), D = (M) => {
      r.conf.tableRefs || (r.conf.tableRefs = {}), r.conf.tableRefs[r.item.vModel] = M;
    }, O = "drawing-layout-item", S = K("activeFormItem");
    return q("activeFormItem", S), (M, m) => {
      const b = V("Plus"), e = V("el-icon"), t = V("ai-sub-form");
      return l.conf.mode === "designer" ? (C(), E("div", {
        key: 0,
        class: be(O),
        style: { "margin-left": "0" }
      }, [
        se("span", He, ce(l.item.label), 1),
        N(J(w), {
          "active-id": l.activeId,
          list: l.item.children,
          tag: "el-row",
          conf: l.conf,
          gutter: l.item.gutter
        }, null, 8, ["active-id", "list", "conf", "gutter"]),
        se("div", Je, [
          N(e, null, {
            default: T(() => [
              N(b)
            ]),
            _: 1
          }),
          G(" " + ce(l.item.actionText), 1)
        ])
      ])) : (C(), ee(t, {
        key: 1,
        ref: D,
        "form-data": l.conf.model,
        config: l.item,
        modelValue: l.conf.model[l.item.vModel],
        "onUpdate:modelValue": m[0] || (m[0] = (a) => l.conf.model[l.item.vModel] = a)
      }, null, 8, ["form-data", "config", "modelValue"]));
    };
  }
}), Ge = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ze
}, Symbol.toStringTag, { value: "Module" })), Ke = ["config", "disabled"], qe = { key: 0 }, Qe = Y({
  name: "my-table"
}), Xe = /* @__PURE__ */ Y({
  ...Qe,
  props: {
    activeId: String || Number,
    item: Object,
    conf: Object,
    index: String || Number
  },
  setup(l) {
    const r = l, w = ne(() => Promise.resolve().then(() => $e)), D = ge({
      activeCell: { row: 0, col: 0 }
    }), O = (b, e) => {
      D.activeCell = { row: b, col: e };
    };
    q("onActiveCell", O), q("IsActiveCell", (b, e) => r.conf.activeId === r.item.formId && D.activeCell.row === b && D.activeCell.col === e), q("onActiveCell", O), q("cellOperate", (b, e, t) => {
      var a = {
        colSpan: 1,
        rowSpan: 1,
        children: [],
        state: 0
        //, isColMerged: false, isRowMerged: false 
      }, o = r.item.children;
      if (t === "insertLeftCol")
        for (var n = 0; n < o.length; n++)
          o[n].children.splice(e, 0, JSON.parse(JSON.stringify(a)));
      else if (t === "insertRightCol")
        for (var n = 0; n < o.length; n++) {
          var i = o[n].children[e];
          o[n].children.splice(e + i.colSpan, 0, JSON.parse(JSON.stringify(a)));
        }
      else if (t === "insertAboveRow") {
        for (var c = {
          children: []
        }, n = 0; n < o[0].children.length; n++)
          c.children.push(JSON.parse(JSON.stringify(a)));
        o.splice(b, 0, c);
      } else if (t === "insertBelowRow") {
        for (var c = {
          children: []
        }, n = 0; n < o[0].children.length; n++)
          c.children.push(JSON.parse(JSON.stringify(a)));
        var i = o[b].children[e];
        o.splice(b + i.rowSpan, 0, c);
      } else if (t === "mergeRightCol") {
        if (e < o[b].children.length - 1) {
          var i = o[b].children[e], u = i.colSpan, g = o[b].children[e + u], p = g.colSpan;
          i.colSpan += p, i.children.push(...g.children), g.children = [], g.colSpan = 1, g.state |= 5, i.state |= 4;
          for (var x = 1; x < i.rowSpan; x++)
            u === 1 && (o[b + x].children[e].state |= 4), p === 1 && (o[b + x].children[e + u].state |= 4);
        }
        console.log(r.item.children);
      } else if (t === "mergeWholeRow") {
        var L = o[b].children.length, i = o[b].children[0];
        if (i.colSpan = L, L > 0) {
          i.state |= 4;
          for (var n = 1; n < L; n++) {
            var g = o[b].children[n];
            g.colSpan = 1, i.children.push(...g.children), g.children = [], g.state |= 5;
          }
        }
        console.log(o);
      } else if (t === "mergeBelowRow") {
        if (b < o.length - 1) {
          var i = o[b].children[e], u = i.rowSpan, g = o[b + u].children[e], p = g.rowSpan;
          i.rowSpan += p, g.rowSpan = 1, i.children.push(...g.children), g.children = [], g.state |= 3, i.state |= 2;
          for (var x = 1; x < i.colspan; x++)
            u === 1 && (o[b].children[e + x].state |= 2), p === 1 && (o[b + u].children[e + x].state |= 2);
        }
      } else if (t === "mergeWholeCol") {
        if (o.length > 0) {
          var i = o[0].children[e], L = o.length;
          i.state |= 2, i.rowSpan = L;
          for (var n = 1; n < L; n++) {
            var g = o[n].children[e];
            g.rowSpan = 1, i.children.push(...g.children), g.children = [], g.state |= 3;
          }
        }
        console.log(o);
      } else if (t === "splitMerged")
        for (var i = o[b].children[e], I = i.rowSpan, A = i.colSpan, n = 0; n < I; n++)
          for (var R = 0; R < A; R++) {
            var z = o[b + n].children[e + R];
            z.state = 0, z.colSpan = 1, z.rowSpan = 1;
          }
      if (t === "deleteWholeRow" && o.splice(b, 1), t === "deleteWholeCol")
        for (var n = 0; n < o.length; n++)
          o[n].children.splice(e, 1);
    });
    const m = K("activeFormItem");
    return q("activeFormItem", m), (b, e) => (C(), E("table", {
      class: "table-layout",
      config: l.item,
      disabled: l.item.disabled
    }, [
      se("caption", null, [
        l.item.showLabel ? (C(), E("span", qe, ce(l.item.label), 1)) : te("", !0)
      ]),
      se("tbody", null, [
        (C(!0), E(ae, null, he(l.item.children, (t, a) => (C(), E("tr", { key: a }, [
          (C(!0), E(ae, null, he(t.children, (o, n) => (C(), ee(J(w), {
            key: n,
            item: o,
            "table-data": l.item,
            "col-index": n,
            "row-index": a,
            conf: l.conf
          }, null, 8, ["item", "table-data", "col-index", "row-index", "conf"]))), 128))
        ]))), 128))
      ])
    ], 8, Ke));
  }
});
const et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe
}, Symbol.toStringTag, { value: "Module" })), tt = ["config", "colspan", "rowspan"], nt = {
  key: 0,
  class: "table-cell-command"
}, rt = Y({
  name: "table-cell"
}), it = /* @__PURE__ */ Y({
  ...rt,
  props: {
    activeId: String || Number,
    item: Object,
    conf: Object,
    rowIndex: Number,
    colIndex: Number,
    tableData: Object,
    index: String || Number
  },
  setup(l) {
    const r = l, w = ne(() => import("./RenderPanel-f9734304.js"));
    ge({
      isShowMenu: !1
    });
    const D = K("onActiveCell"), O = () => {
      D(r.rowIndex, r.colIndex);
    }, S = K("IsActiveCell"), M = X(() => S(r.rowIndex, r.colIndex)), m = X(() => {
      var i = r.tableData.children, c = i[r.rowIndex].children[r.colIndex];
      if (c.colSpan + r.colIndex >= i[r.rowIndex].children.length)
        return !1;
      var u = i[r.rowIndex].children[r.colIndex + c.colSpan];
      return (c.state & 2) === (u.state & 2);
    }), b = X(() => {
      var i = r.tableData.children, c = i[r.rowIndex].children[r.colIndex];
      if (c.rowSpan + r.rowIndex >= i.length)
        return !1;
      var u = i[r.rowIndex + c.rowSpan].children[r.colIndex];
      return u.colSpan === c.colSpan;
    }), e = X(() => {
      var i = r.tableData.children[r.rowIndex].children[r.colIndex];
      return i.colSpan > 1 || i.rowSpan > 1;
    }), t = X(() => {
      var i = r.tableData.children;
      if (i[0].children[r.colIndex].rowSpan === i.length)
        return !1;
      for (var c = 0; c < i.length; c++) {
        var u = i[c].children[r.colIndex];
        if ((u.state & 4) !== (i[0].children[r.colIndex].state & 4))
          return !1;
      }
      return !0;
    }), a = X(() => {
      var i = r.tableData.children, c = i[r.rowIndex];
      if (c.children[0].colSpan === c.children.length)
        return !1;
      for (var u = 1; u < c.children.length; u++)
        if ((c.children[u].state & 2) !== (c.children[0].state & 2))
          return !1;
      return !0;
    }), o = K("cellOperate"), n = (i) => {
      o(r.rowIndex, r.colIndex, i);
    };
    return (i, c) => {
      const u = V("Edit"), g = V("el-icon"), p = V("el-dropdown-item"), x = V("el-dropdown-menu"), L = V("el-dropdown");
      return l.item.state & 1 ? te("", !0) : (C(), E("td", {
        key: 0,
        onClick: O,
        config: l.item,
        class: be(l.conf.mode === "designer" ? "table-cell-designer" : "table-cell"),
        colspan: l.item.colSpan || 1,
        rowspan: l.item.rowSpan || 1,
        style: Se({
          width: l.item.cellWidth + " !important" || "",
          height: l.item.cellHeight + " !important" || "",
          "word-break": l.item.wordBreak ? "break-all" : "normal"
        })
      }, [
        N(J(w), {
          "active-id": l.activeId,
          list: l.item.children,
          tag: "div",
          conf: l.conf,
          gutter: l.item.gutter,
          justify: "left"
        }, null, 8, ["active-id", "list", "conf", "gutter"]),
        l.conf.mode === "designer" && M.value ? (C(), E("div", nt, [
          N(L, {
            trigger: "click",
            onCommand: n,
            size: "small"
          }, {
            dropdown: T(() => [
              N(x, null, {
                default: T(() => [
                  N(p, { command: "insertLeftCol" }, {
                    default: T(() => [
                      G("向左插入1列")
                    ]),
                    _: 1
                  }),
                  N(p, { command: "insertRightCol" }, {
                    default: T(() => [
                      G("向右插入1列")
                    ]),
                    _: 1
                  }),
                  N(p, { command: "insertAboveRow" }, {
                    default: T(() => [
                      G("向上插入1行")
                    ]),
                    _: 1
                  }),
                  N(p, { command: "insertBelowRow" }, {
                    default: T(() => [
                      G("向下插入1行")
                    ]),
                    _: 1
                  }),
                  N(p, {
                    command: "mergeRightCol",
                    disabled: !m.value,
                    divided: ""
                  }, {
                    default: T(() => [
                      G("合并右侧单元格")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  N(p, {
                    command: "mergeBelowRow",
                    disabled: !b.value
                  }, {
                    default: T(() => [
                      G("合并下方单元格")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  N(p, {
                    command: "mergeWholeRow",
                    disabled: !a.value
                  }, {
                    default: T(() => [
                      G("合并整行")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  N(p, {
                    command: "mergeWholeCol",
                    disabled: !t.value
                  }, {
                    default: T(() => [
                      G("合并整列")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  N(p, {
                    command: "splitMerged",
                    disabled: !e.value,
                    divided: ""
                  }, {
                    default: T(() => [
                      G("拆分成单元格")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  N(p, {
                    command: "deleteWholeRow",
                    disabled: !a.value,
                    divided: ""
                  }, {
                    default: T(() => [
                      G("删除整行")
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  N(p, {
                    command: "deleteWholeCol",
                    disabled: !t.value
                  }, {
                    default: T(() => [
                      G("删除整列")
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            default: T(() => [
              N(g, { title: "操作" }, {
                default: T(() => [
                  N(u)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : te("", !0)
      ], 14, tt));
    };
  }
});
const $e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: it
}, Symbol.toStringTag, { value: "Module" })), ot = Y({
  name: "my-tabs"
}), at = /* @__PURE__ */ Y({
  ...ot,
  props: {
    parent: Object,
    activeId: String || Number,
    item: Object,
    conf: Object
  },
  setup(l) {
    const r = l, w = ne(() => import("./RenderPanel-f9734304.js"));
    return X(() => r.item.tabpanes), (D, O) => {
      const S = V("el-tab-pane"), M = V("el-tabs");
      return C(), ee(M, fe(l.item, {
        modelValue: l.item.defaultValue,
        "onUpdate:modelValue": O[0] || (O[0] = (m) => l.item.defaultValue = m),
        class: "drawing-layout-item"
      }), {
        default: T(() => [
          (C(!0), E(ae, null, he(l.item.children, (m) => (C(), ee(S, {
            key: m.value,
            label: m.label,
            name: m.value
          }, {
            default: T(() => [
              N(J(w), {
                "active-id": l.activeId,
                list: m.children,
                tag: "el-row",
                conf: l.conf,
                gutter: m.gutter,
                justify: "left"
              }, null, 8, ["active-id", "list", "conf", "gutter"])
            ]),
            _: 2
          }, 1032, ["label", "name"]))), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: at
}, Symbol.toStringTag, { value: "Module" })), ct = Y({
  name: "drag-item"
}), dt = /* @__PURE__ */ Y({
  ...ct,
  props: {
    parent: Object,
    activeId: String || Number,
    item: Object,
    conf: Object,
    index: String || Number
  },
  setup(l) {
    const r = l, w = ne(() => import("./RenderFormItem-dec1fe4d.js"));
    let D = {};
    const O = /* @__PURE__ */ Object.assign({ "./Elements/Layout/MyCard.vue": je, "./Elements/Layout/MyDataTable.vue": Ee, "./Elements/Layout/MyRow.vue": Ye, "./Elements/Layout/MySubForm.vue": Ge, "./Elements/Layout/MyTable.vue": et, "./Elements/Layout/MyTableCell.vue": $e, "./Elements/Layout/MyTabs.vue": lt });
    for (const e in O) {
      let t = O[e].default.name;
      D[t] = O[e].default;
    }
    const S = K("activeFormItem");
    q("activeFormItem", S);
    const M = K("copyItem"), m = K("deleteItem");
    let b = X(() => r.conf.mode === "designer" ? r.conf.activeId === r.item.formId ? "drawing-item active-form-item" : "drawing-item " : "");
    return (e, t) => {
      const a = V("Delete"), o = V("el-icon"), n = V("CopyDocument");
      return C(), E("div", {
        class: be(J(b)),
        onClick: t[2] || (t[2] = Me((i) => l.conf.mode === "designer" && J(S) && J(S)(l.item), ["stop"]))
      }, [
        l.conf.mode === "designer" ? (C(), E(ae, { key: 0 }, [
          se("span", {
            class: "drawing-item-delete",
            onClick: t[0] || (t[0] = (i) => J(m)(l.index, l.parent)),
            title: "删除"
          }, [
            N(o, null, {
              default: T(() => [
                N(a)
              ]),
              _: 1
            })
          ]),
          se("span", {
            class: "drawing-item-copy",
            onClick: t[1] || (t[1] = (i) => J(M)(l.item, l.parent)),
            title: "复制"
          }, [
            N(o, null, {
              default: T(() => [
                N(n)
              ]),
              _: 1
            })
          ])
        ], 64)) : te("", !0),
        J(D)[l.item.tag] ? (C(), ee(Oe(J(D)[l.item.tag]), fe({ key: 1 }, e.$attrs, {
          item: l.item,
          "active-id": l.activeId,
          conf: l.conf
        }), null, 16, ["item", "active-id", "conf"])) : (C(), ee(J(w), {
          key: 2,
          "active-id": l.activeId,
          item: l.item,
          conf: l.conf
        }, null, 8, ["active-id", "item", "conf"]))
      ], 2);
    };
  }
});
export {
  dt as default
};
