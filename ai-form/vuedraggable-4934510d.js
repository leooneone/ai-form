import { resolveComponent as $e, TransitionGroup as ze, defineComponent as Ue, h as ce, nextTick as De } from "vue";
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function de(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? de(Object(n), !0).forEach(function(o) {
      qe(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Ft(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ft = function(t) {
    return typeof t;
  } : Ft = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ft(e);
}
function qe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function U() {
  return U = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, U.apply(this, arguments);
}
function Ke(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), r, i;
  for (i = 0; i < o.length; i++)
    r = o[i], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function Ze(e, t) {
  if (e == null)
    return {};
  var n = Ke(e, t), o, r;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++)
      o = i[r], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
var Qe = "1.14.0";
function z(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var q = z(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Tt = z(/Edge/i), fe = z(/firefox/i), wt = z(/safari/i) && !z(/chrome/i) && !z(/android/i), Se = z(/iP(ad|od|hone)/i), Je = z(/chrome/i) && z(/android/i), Ce = {
  capture: !1,
  passive: !1
};
function y(e, t, n) {
  e.addEventListener(t, n, !q && Ce);
}
function b(e, t, n) {
  e.removeEventListener(t, n, !q && Ce);
}
function Xt(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function tn(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function W(e, t, n, o) {
  if (e) {
    n = n || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === n && Xt(e, t) : Xt(e, t)) || o && e === n)
        return e;
      if (e === n)
        break;
    } while (e = tn(e));
  }
  return null;
}
var he = /\s+/g;
function F(e, t, n) {
  if (e && t)
    if (e.classList)
      e.classList[n ? "add" : "remove"](t);
    else {
      var o = (" " + e.className + " ").replace(he, " ").replace(" " + t + " ", " ");
      e.className = (o + (n ? " " + t : "")).replace(he, " ");
    }
}
function h(e, t, n) {
  var o = e && e.style;
  if (o) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), t === void 0 ? n : n[t];
    !(t in o) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), o[t] = n + (typeof n == "string" ? "" : "px");
  }
}
function dt(e, t) {
  var n = "";
  if (typeof e == "string")
    n = e;
  else
    do {
      var o = h(e, "transform");
      o && o !== "none" && (n = o + " " + n);
    } while (!t && (e = e.parentNode));
  var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return r && new r(n);
}
function Te(e, t, n) {
  if (e) {
    var o = e.getElementsByTagName(t), r = 0, i = o.length;
    if (n)
      for (; r < i; r++)
        n(o[r], r);
    return o;
  }
  return [];
}
function V() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function T(e, t, n, o, r) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var i, a, l, s, u, d, f;
    if (e !== window && e.parentNode && e !== V() ? (i = e.getBoundingClientRect(), a = i.top, l = i.left, s = i.bottom, u = i.right, d = i.height, f = i.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, f = window.innerWidth), (t || n) && e !== window && (r = r || e.parentNode, !q))
      do
        if (r && r.getBoundingClientRect && (h(r, "transform") !== "none" || n && h(r, "position") !== "static")) {
          var g = r.getBoundingClientRect();
          a -= g.top + parseInt(h(r, "border-top-width")), l -= g.left + parseInt(h(r, "border-left-width")), s = a + i.height, u = l + i.width;
          break;
        }
      while (r = r.parentNode);
    if (o && e !== window) {
      var w = dt(r || e), v = w && w.a, E = w && w.d;
      w && (a /= E, l /= v, f /= v, d /= E, s = a + d, u = l + f);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: f,
      height: d
    };
  }
}
function pe(e, t, n) {
  for (var o = tt(e, !0), r = T(e)[t]; o; ) {
    var i = T(o)[n], a = void 0;
    if (n === "top" || n === "left" ? a = r >= i : a = r <= i, !a)
      return o;
    if (o === V())
      break;
    o = tt(o, !1);
  }
  return !1;
}
function ft(e, t, n, o) {
  for (var r = 0, i = 0, a = e.children; i < a.length; ) {
    if (a[i].style.display !== "none" && a[i] !== p.ghost && (o || a[i] !== p.dragged) && W(a[i], n.draggable, e, !1)) {
      if (r === t)
        return a[i];
      r++;
    }
    i++;
  }
  return null;
}
function ae(e, t) {
  for (var n = e.lastElementChild; n && (n === p.ghost || h(n, "display") === "none" || t && !Xt(n, t)); )
    n = n.previousElementSibling;
  return n || null;
}
function k(e, t) {
  var n = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== p.clone && (!t || Xt(e, t)) && n++;
  return n;
}
function me(e) {
  var t = 0, n = 0, o = V();
  if (e)
    do {
      var r = dt(e), i = r.a, a = r.d;
      t += e.scrollLeft * i, n += e.scrollTop * a;
    } while (e !== o && (e = e.parentNode));
  return [t, n];
}
function en(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o] === e[n][o])
          return Number(n);
    }
  return -1;
}
function tt(e, t) {
  if (!e || !e.getBoundingClientRect)
    return V();
  var n = e, o = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var r = h(n);
      if (n.clientWidth < n.scrollWidth && (r.overflowX == "auto" || r.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (r.overflowY == "auto" || r.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return V();
        if (o || t)
          return n;
        o = !0;
      }
    }
  while (n = n.parentNode);
  return V();
}
function nn(e, t) {
  if (e && t)
    for (var n in t)
      t.hasOwnProperty(n) && (e[n] = t[n]);
  return e;
}
function jt(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var _t;
function xe(e, t) {
  return function() {
    if (!_t) {
      var n = arguments, o = this;
      n.length === 1 ? e.call(o, n[0]) : e.apply(o, n), _t = setTimeout(function() {
        _t = void 0;
      }, t);
    }
  };
}
function on() {
  clearTimeout(_t), _t = void 0;
}
function Ie(e, t, n) {
  e.scrollLeft += t, e.scrollTop += n;
}
function Oe(e) {
  var t = window.Polymer, n = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0);
}
var L = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function rn() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var o = [].slice.call(this.el.children);
        o.forEach(function(r) {
          if (!(h(r, "display") === "none" || r === p.ghost)) {
            e.push({
              target: r,
              rect: T(r)
            });
            var i = j({}, e[e.length - 1].rect);
            if (r.thisAnimationDuration) {
              var a = dt(r, !0);
              a && (i.top -= a.f, i.left -= a.e);
            }
            r.fromRect = i;
          }
        });
      }
    },
    addAnimationState: function(o) {
      e.push(o);
    },
    removeAnimationState: function(o) {
      e.splice(en(e, {
        target: o
      }), 1);
    },
    animateAll: function(o) {
      var r = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof o == "function" && o();
        return;
      }
      var i = !1, a = 0;
      e.forEach(function(l) {
        var s = 0, u = l.target, d = u.fromRect, f = T(u), g = u.prevFromRect, w = u.prevToRect, v = l.rect, E = dt(u, !0);
        E && (f.top -= E.f, f.left -= E.e), u.toRect = f, u.thisAnimationDuration && jt(g, f) && !jt(d, f) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - f.top) / (v.left - f.left) === (d.top - f.top) / (d.left - f.left) && (s = ln(v, g, w, r.options)), jt(f, d) || (u.prevFromRect = d, u.prevToRect = f, s || (s = r.options.animation), r.animate(u, v, f, s)), s && (i = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), i ? t = setTimeout(function() {
        typeof o == "function" && o();
      }, a) : typeof o == "function" && o(), e = [];
    },
    animate: function(o, r, i, a) {
      if (a) {
        h(o, "transition", ""), h(o, "transform", "");
        var l = dt(this.el), s = l && l.a, u = l && l.d, d = (r.left - i.left) / (s || 1), f = (r.top - i.top) / (u || 1);
        o.animatingX = !!d, o.animatingY = !!f, h(o, "transform", "translate3d(" + d + "px," + f + "px,0)"), this.forRepaintDummy = an(o), h(o, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(o, "transform", "translate3d(0,0,0)"), typeof o.animated == "number" && clearTimeout(o.animated), o.animated = setTimeout(function() {
          h(o, "transition", ""), h(o, "transform", ""), o.animated = !1, o.animatingX = !1, o.animatingY = !1;
        }, a);
      }
    }
  };
}
function an(e) {
  return e.offsetWidth;
}
function ln(e, t, n, o) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * o.animation;
}
var lt = [], Gt = {
  initializeByDefault: !0
}, xt = {
  mount: function(t) {
    for (var n in Gt)
      Gt.hasOwnProperty(n) && !(n in t) && (t[n] = Gt[n]);
    lt.forEach(function(o) {
      if (o.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), lt.push(t);
  },
  pluginEvent: function(t, n, o) {
    var r = this;
    this.eventCanceled = !1, o.cancel = function() {
      r.eventCanceled = !0;
    };
    var i = t + "Global";
    lt.forEach(function(a) {
      n[a.pluginName] && (n[a.pluginName][i] && n[a.pluginName][i](j({
        sortable: n
      }, o)), n.options[a.pluginName] && n[a.pluginName][t] && n[a.pluginName][t](j({
        sortable: n
      }, o)));
    });
  },
  initializePlugins: function(t, n, o, r) {
    lt.forEach(function(l) {
      var s = l.pluginName;
      if (!(!t.options[s] && !l.initializeByDefault)) {
        var u = new l(t, n, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, U(o, u.defaults);
      }
    });
    for (var i in t.options)
      if (t.options.hasOwnProperty(i)) {
        var a = this.modifyOption(t, i, t.options[i]);
        typeof a < "u" && (t.options[i] = a);
      }
  },
  getEventProperties: function(t, n) {
    var o = {};
    return lt.forEach(function(r) {
      typeof r.eventProperties == "function" && U(o, r.eventProperties.call(n[r.pluginName], t));
    }), o;
  },
  modifyOption: function(t, n, o) {
    var r;
    return lt.forEach(function(i) {
      t[i.pluginName] && i.optionListeners && typeof i.optionListeners[n] == "function" && (r = i.optionListeners[n].call(t[i.pluginName], o));
    }), r;
  }
};
function sn(e) {
  var t = e.sortable, n = e.rootEl, o = e.name, r = e.targetEl, i = e.cloneEl, a = e.toEl, l = e.fromEl, s = e.oldIndex, u = e.newIndex, d = e.oldDraggableIndex, f = e.newDraggableIndex, g = e.originalEvent, w = e.putSortable, v = e.extraEventProperties;
  if (t = t || n && n[L], !!t) {
    var E, R = t.options, G = "on" + o.charAt(0).toUpperCase() + o.substr(1);
    window.CustomEvent && !q && !Tt ? E = new CustomEvent(o, {
      bubbles: !0,
      cancelable: !0
    }) : (E = document.createEvent("Event"), E.initEvent(o, !0, !0)), E.to = a || n, E.from = l || n, E.item = r || n, E.clone = i, E.oldIndex = s, E.newIndex = u, E.oldDraggableIndex = d, E.newDraggableIndex = f, E.originalEvent = g, E.pullMode = w ? w.lastPutMode : void 0;
    var O = j(j({}, v), xt.getEventProperties(o, t));
    for (var X in O)
      E[X] = O[X];
    n && n.dispatchEvent(E), R[G] && R[G].call(t, E);
  }
}
var un = ["evt"], P = function(t, n) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = o.evt, i = Ze(o, un);
  xt.pluginEvent.bind(p)(t, n, j({
    dragEl: c,
    parentEl: D,
    ghostEl: m,
    rootEl: _,
    nextEl: at,
    lastDownEl: Mt,
    cloneEl: S,
    cloneHidden: J,
    dragStarted: bt,
    putSortable: x,
    activeSortable: p.active,
    originalEvent: r,
    oldIndex: ct,
    oldDraggableIndex: Dt,
    newIndex: M,
    newDraggableIndex: Q,
    hideGhostForTarget: Fe,
    unhideGhostForTarget: Me,
    cloneNowHidden: function() {
      J = !0;
    },
    cloneNowShown: function() {
      J = !1;
    },
    dispatchSortableEvent: function(l) {
      A({
        sortable: n,
        name: l,
        originalEvent: r
      });
    }
  }, i));
};
function A(e) {
  sn(j({
    putSortable: x,
    cloneEl: S,
    targetEl: c,
    rootEl: _,
    oldIndex: ct,
    oldDraggableIndex: Dt,
    newIndex: M,
    newDraggableIndex: Q
  }, e));
}
var c, D, m, _, at, Mt, S, J, ct, M, Dt, Q, Ot, x, ut = !1, Yt = !1, Bt = [], rt, Y, $t, zt, ge, ve, bt, st, St, Ct = !1, At = !1, Lt, I, Ut = [], ee = !1, Ht = [], Vt = typeof document < "u", Pt = Se, be = Tt || q ? "cssFloat" : "float", cn = Vt && !Je && !Se && "draggable" in document.createElement("div"), Ae = function() {
  if (Vt) {
    if (q)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Pe = function(t, n) {
  var o = h(t), r = parseInt(o.width) - parseInt(o.paddingLeft) - parseInt(o.paddingRight) - parseInt(o.borderLeftWidth) - parseInt(o.borderRightWidth), i = ft(t, 0, n), a = ft(t, 1, n), l = i && h(i), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + T(i).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + T(a).width;
  if (o.display === "flex")
    return o.flexDirection === "column" || o.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (o.display === "grid")
    return o.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (i && l.float && l.float !== "none") {
    var f = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === f) ? "vertical" : "horizontal";
  }
  return i && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= r && o[be] === "none" || a && o[be] === "none" && u + d > r) ? "vertical" : "horizontal";
}, dn = function(t, n, o) {
  var r = o ? t.left : t.top, i = o ? t.right : t.bottom, a = o ? t.width : t.height, l = o ? n.left : n.top, s = o ? n.right : n.bottom, u = o ? n.width : n.height;
  return r === l || i === s || r + a / 2 === l + u / 2;
}, fn = function(t, n) {
  var o;
  return Bt.some(function(r) {
    var i = r[L].options.emptyInsertThreshold;
    if (!(!i || ae(r))) {
      var a = T(r), l = t >= a.left - i && t <= a.right + i, s = n >= a.top - i && n <= a.bottom + i;
      if (l && s)
        return o = r;
    }
  }), o;
}, Ne = function(t) {
  function n(i, a) {
    return function(l, s, u, d) {
      var f = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (i == null && (a || f))
        return !0;
      if (i == null || i === !1)
        return !1;
      if (a && i === "clone")
        return i;
      if (typeof i == "function")
        return n(i(l, s, u, d), a)(l, s, u, d);
      var g = (a ? l : s).options.group.name;
      return i === !0 || typeof i == "string" && i === g || i.join && i.indexOf(g) > -1;
    };
  }
  var o = {}, r = t.group;
  (!r || Ft(r) != "object") && (r = {
    name: r
  }), o.name = r.name, o.checkPull = n(r.pull, !0), o.checkPut = n(r.put), o.revertClone = r.revertClone, t.group = o;
}, Fe = function() {
  !Ae && m && h(m, "display", "none");
}, Me = function() {
  !Ae && m && h(m, "display", "");
};
Vt && document.addEventListener("click", function(e) {
  if (Yt)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Yt = !1, !1;
}, !0);
var it = function(t) {
  if (c) {
    t = t.touches ? t.touches[0] : t;
    var n = fn(t.clientX, t.clientY);
    if (n) {
      var o = {};
      for (var r in t)
        t.hasOwnProperty(r) && (o[r] = t[r]);
      o.target = o.rootEl = n, o.preventDefault = void 0, o.stopPropagation = void 0, n[L]._onDragOver(o);
    }
  }
}, hn = function(t) {
  c && c.parentNode[L]._isOutsideThisEl(t.target);
};
function p(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = U({}, t), e[L] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Pe(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !wt,
    emptyInsertThreshold: 5
  };
  xt.initializePlugins(this, e, n);
  for (var o in n)
    !(o in t) && (t[o] = n[o]);
  Ne(t);
  for (var r in this)
    r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : cn, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? y(e, "pointerdown", this._onTapStart) : (y(e, "mousedown", this._onTapStart), y(e, "touchstart", this._onTapStart)), this.nativeDraggable && (y(e, "dragover", this), y(e, "dragenter", this)), Bt.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), U(this, rn());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (st = null);
  },
  _getDirection: function(t, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, n, c) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var n = this, o = this.el, r = this.options, i = r.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (l || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, d = r.filter;
      if (wn(o), !c && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || r.disabled) && !u.isContentEditable && !(!this.nativeDraggable && wt && s && s.tagName.toUpperCase() === "SELECT") && (s = W(s, r.draggable, o, !1), !(s && s.animated) && Mt !== s)) {
        if (ct = k(s), Dt = k(s, r.draggable), typeof d == "function") {
          if (d.call(this, t, s, this)) {
            A({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: o,
              fromEl: o
            }), P("filter", n, {
              evt: t
            }), i && t.cancelable && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(f) {
          if (f = W(u, f.trim(), o, !1), f)
            return A({
              sortable: n,
              rootEl: f,
              name: "filter",
              targetEl: s,
              fromEl: o,
              toEl: o
            }), P("filter", n, {
              evt: t
            }), !0;
        }), d)) {
          i && t.cancelable && t.preventDefault();
          return;
        }
        r.handle && !W(u, r.handle, o, !1) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function(t, n, o) {
    var r = this, i = r.el, a = r.options, l = i.ownerDocument, s;
    if (o && !c && o.parentNode === i) {
      var u = T(o);
      if (_ = i, c = o, D = c.parentNode, at = c.nextSibling, Mt = o, Ot = a.group, p.dragged = c, rt = {
        target: c,
        clientX: (n || t).clientX,
        clientY: (n || t).clientY
      }, ge = rt.clientX - u.left, ve = rt.clientY - u.top, this._lastX = (n || t).clientX, this._lastY = (n || t).clientY, c.style["will-change"] = "all", s = function() {
        if (P("delayEnded", r, {
          evt: t
        }), p.eventCanceled) {
          r._onDrop();
          return;
        }
        r._disableDelayedDragEvents(), !fe && r.nativeDraggable && (c.draggable = !0), r._triggerDragStart(t, n), A({
          sortable: r,
          name: "choose",
          originalEvent: t
        }), F(c, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        Te(c, d.trim(), qt);
      }), y(l, "dragover", it), y(l, "mousemove", it), y(l, "touchmove", it), y(l, "mouseup", r._onDrop), y(l, "touchend", r._onDrop), y(l, "touchcancel", r._onDrop), fe && this.nativeDraggable && (this.options.touchStartThreshold = 4, c.draggable = !0), P("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Tt || q))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        y(l, "mouseup", r._disableDelayedDrag), y(l, "touchend", r._disableDelayedDrag), y(l, "touchcancel", r._disableDelayedDrag), y(l, "mousemove", r._delayedDragTouchMoveHandler), y(l, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && y(l, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var n = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    c && qt(c), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._disableDelayedDrag), b(t, "touchend", this._disableDelayedDrag), b(t, "touchcancel", this._disableDelayedDrag), b(t, "mousemove", this._delayedDragTouchMoveHandler), b(t, "touchmove", this._delayedDragTouchMoveHandler), b(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, n) {
    n = n || t.pointerType == "touch" && t, !this.nativeDraggable || n ? this.options.supportPointer ? y(document, "pointermove", this._onTouchMove) : n ? y(document, "touchmove", this._onTouchMove) : y(document, "mousemove", this._onTouchMove) : (y(c, "dragend", this), y(_, "dragstart", this._onDragStart));
    try {
      document.selection ? kt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, n) {
    if (ut = !1, _ && c) {
      P("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && y(document, "dragover", hn);
      var o = this.options;
      !t && F(c, o.dragClass, !1), F(c, o.ghostClass, !0), p.active = this, t && this._appendGhost(), A({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Y) {
      this._lastX = Y.clientX, this._lastY = Y.clientY, Fe();
      for (var t = document.elementFromPoint(Y.clientX, Y.clientY), n = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(Y.clientX, Y.clientY), t !== n); )
        n = t;
      if (c.parentNode[L]._isOutsideThisEl(t), n)
        do {
          if (n[L]) {
            var o = void 0;
            if (o = n[L]._onDragOver({
              clientX: Y.clientX,
              clientY: Y.clientY,
              target: t,
              rootEl: n
            }), o && !this.options.dragoverBubble)
              break;
          }
          t = n;
        } while (n = n.parentNode);
      Me();
    }
  },
  _onTouchMove: function(t) {
    if (rt) {
      var n = this.options, o = n.fallbackTolerance, r = n.fallbackOffset, i = t.touches ? t.touches[0] : t, a = m && dt(m, !0), l = m && a && a.a, s = m && a && a.d, u = Pt && I && me(I), d = (i.clientX - rt.clientX + r.x) / (l || 1) + (u ? u[0] - Ut[0] : 0) / (l || 1), f = (i.clientY - rt.clientY + r.y) / (s || 1) + (u ? u[1] - Ut[1] : 0) / (s || 1);
      if (!p.active && !ut) {
        if (o && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < o)
          return;
        this._onDragStart(t, !0);
      }
      if (m) {
        a ? (a.e += d - ($t || 0), a.f += f - (zt || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f
        };
        var g = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(m, "webkitTransform", g), h(m, "mozTransform", g), h(m, "msTransform", g), h(m, "transform", g), $t = d, zt = f, Y = i;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!m) {
      var t = this.options.fallbackOnBody ? document.body : _, n = T(c, !0, Pt, !0, t), o = this.options;
      if (Pt) {
        for (I = t; h(I, "position") === "static" && h(I, "transform") === "none" && I !== document; )
          I = I.parentNode;
        I !== document.body && I !== document.documentElement ? (I === document && (I = V()), n.top += I.scrollTop, n.left += I.scrollLeft) : I = V(), Ut = me(I);
      }
      m = c.cloneNode(!0), F(m, o.ghostClass, !1), F(m, o.fallbackClass, !0), F(m, o.dragClass, !0), h(m, "transition", ""), h(m, "transform", ""), h(m, "box-sizing", "border-box"), h(m, "margin", 0), h(m, "top", n.top), h(m, "left", n.left), h(m, "width", n.width), h(m, "height", n.height), h(m, "opacity", "0.8"), h(m, "position", Pt ? "absolute" : "fixed"), h(m, "zIndex", "100000"), h(m, "pointerEvents", "none"), p.ghost = m, t.appendChild(m), h(m, "transform-origin", ge / parseInt(m.style.width) * 100 + "% " + ve / parseInt(m.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, n) {
    var o = this, r = t.dataTransfer, i = o.options;
    if (P("dragStart", this, {
      evt: t
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    P("setupClone", this), p.eventCanceled || (S = Oe(c), S.draggable = !1, S.style["will-change"] = "", this._hideClone(), F(S, this.options.chosenClass, !1), p.clone = S), o.cloneId = kt(function() {
      P("clone", o), !p.eventCanceled && (o.options.removeCloneOnHide || _.insertBefore(S, c), o._hideClone(), A({
        sortable: o,
        name: "clone"
      }));
    }), !n && F(c, i.dragClass, !0), n ? (Yt = !0, o._loopId = setInterval(o._emulateDragOver, 50)) : (b(document, "mouseup", o._onDrop), b(document, "touchend", o._onDrop), b(document, "touchcancel", o._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(o, r, c)), y(document, "drop", o), h(c, "transform", "translateZ(0)")), ut = !0, o._dragStartId = kt(o._dragStarted.bind(o, n, t)), y(document, "selectstart", o), bt = !0, wt && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var n = this.el, o = t.target, r, i, a, l = this.options, s = l.group, u = p.active, d = Ot === s, f = l.sort, g = x || u, w, v = this, E = !1;
    if (ee)
      return;
    function R(vt, je) {
      P(vt, v, j({
        evt: t,
        isOwner: d,
        axis: w ? "vertical" : "horizontal",
        revert: a,
        dragRect: r,
        targetRect: i,
        canSort: f,
        fromSortable: g,
        target: o,
        completed: O,
        onMove: function(ue, Ge) {
          return Nt(_, n, c, r, ue, T(ue), t, Ge);
        },
        changed: X
      }, je));
    }
    function G() {
      R("dragOverAnimationCapture"), v.captureAnimationState(), v !== g && g.captureAnimationState();
    }
    function O(vt) {
      return R("dragOverCompleted", {
        insertion: vt
      }), vt && (d ? u._hideClone() : u._showClone(v), v !== g && (F(c, x ? x.options.ghostClass : u.options.ghostClass, !1), F(c, l.ghostClass, !0)), x !== v && v !== p.active ? x = v : v === p.active && x && (x = null), g === v && (v._ignoreWhileAnimating = o), v.animateAll(function() {
        R("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (o === c && !c.animated || o === n && !o.animated) && (st = null), !l.dragoverBubble && !t.rootEl && o !== document && (c.parentNode[L]._isOutsideThisEl(t.target), !vt && it(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), E = !0;
    }
    function X() {
      M = k(c), Q = k(c, l.draggable), A({
        sortable: v,
        name: "change",
        toEl: n,
        newIndex: M,
        newDraggableIndex: Q,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), o = W(o, l.draggable, n, !0), R("dragOver"), p.eventCanceled)
      return E;
    if (c.contains(t.target) || o.animated && o.animatingX && o.animatingY || v._ignoreWhileAnimating === o)
      return O(!1);
    if (Yt = !1, u && !l.disabled && (d ? f || (a = D !== _) : x === this || (this.lastPutMode = Ot.checkPull(this, u, c, t)) && s.checkPut(this, u, c, t))) {
      if (w = this._getDirection(t, o) === "vertical", r = T(c), R("dragOverValid"), p.eventCanceled)
        return E;
      if (a)
        return D = _, G(), this._hideClone(), R("revert"), p.eventCanceled || (at ? _.insertBefore(c, at) : _.appendChild(c)), O(!0);
      var B = ae(n, l.draggable);
      if (!B || vn(t, w, this) && !B.animated) {
        if (B === c)
          return O(!1);
        if (B && n === t.target && (o = B), o && (i = T(o)), Nt(_, n, c, r, o, i, t, !!o) !== !1)
          return G(), n.appendChild(c), D = n, X(), O(!0);
      } else if (B && gn(t, w, this)) {
        var et = ft(n, 0, l, !0);
        if (et === c)
          return O(!1);
        if (o = et, i = T(o), Nt(_, n, c, r, o, i, t, !1) !== !1)
          return G(), n.insertBefore(c, et), D = n, X(), O(!0);
      } else if (o.parentNode === n) {
        i = T(o);
        var H = 0, nt, ht = c.parentNode !== n, N = !dn(c.animated && c.toRect || r, o.animated && o.toRect || i, w), pt = w ? "top" : "left", K = pe(o, "top", "top") || pe(c, "top", "top"), mt = K ? K.scrollTop : void 0;
        st !== o && (nt = i[pt], Ct = !1, At = !N && l.invertSwap || ht), H = bn(t, o, i, w, N ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, At, st === o);
        var $;
        if (H !== 0) {
          var ot = k(c);
          do
            ot -= H, $ = D.children[ot];
          while ($ && (h($, "display") === "none" || $ === m));
        }
        if (H === 0 || $ === o)
          return O(!1);
        st = o, St = H;
        var gt = o.nextElementSibling, Z = !1;
        Z = H === 1;
        var It = Nt(_, n, c, r, o, i, t, Z);
        if (It !== !1)
          return (It === 1 || It === -1) && (Z = It === 1), ee = !0, setTimeout(mn, 30), G(), Z && !gt ? n.appendChild(c) : o.parentNode.insertBefore(c, Z ? gt : o), K && Ie(K, 0, mt - K.scrollTop), D = c.parentNode, nt !== void 0 && !At && (Lt = Math.abs(nt - T(o)[pt])), X(), O(!0);
      }
      if (n.contains(c))
        return O(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    b(document, "mousemove", this._onTouchMove), b(document, "touchmove", this._onTouchMove), b(document, "pointermove", this._onTouchMove), b(document, "dragover", it), b(document, "mousemove", it), b(document, "touchmove", it);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._onDrop), b(t, "touchend", this._onDrop), b(t, "pointerup", this._onDrop), b(t, "touchcancel", this._onDrop), b(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var n = this.el, o = this.options;
    if (M = k(c), Q = k(c, o.draggable), P("drop", this, {
      evt: t
    }), D = c && c.parentNode, M = k(c), Q = k(c, o.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    ut = !1, At = !1, Ct = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), ne(this.cloneId), ne(this._dragStartId), this.nativeDraggable && (b(document, "drop", this), b(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), wt && h(document.body, "user-select", ""), h(c, "transform", ""), t && (bt && (t.cancelable && t.preventDefault(), !o.dropBubble && t.stopPropagation()), m && m.parentNode && m.parentNode.removeChild(m), (_ === D || x && x.lastPutMode !== "clone") && S && S.parentNode && S.parentNode.removeChild(S), c && (this.nativeDraggable && b(c, "dragend", this), qt(c), c.style["will-change"] = "", bt && !ut && F(c, x ? x.options.ghostClass : this.options.ghostClass, !1), F(c, this.options.chosenClass, !1), A({
      sortable: this,
      name: "unchoose",
      toEl: D,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), _ !== D ? (M >= 0 && (A({
      rootEl: D,
      name: "add",
      toEl: D,
      fromEl: _,
      originalEvent: t
    }), A({
      sortable: this,
      name: "remove",
      toEl: D,
      originalEvent: t
    }), A({
      rootEl: D,
      name: "sort",
      toEl: D,
      fromEl: _,
      originalEvent: t
    }), A({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: t
    })), x && x.save()) : M !== ct && M >= 0 && (A({
      sortable: this,
      name: "update",
      toEl: D,
      originalEvent: t
    }), A({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: t
    })), p.active && ((M == null || M === -1) && (M = ct, Q = Dt), A({
      sortable: this,
      name: "end",
      toEl: D,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    P("nulling", this), _ = c = D = m = at = S = Mt = J = rt = Y = bt = M = Q = ct = Dt = st = St = x = Ot = p.dragged = p.ghost = p.clone = p.active = null, Ht.forEach(function(t) {
      t.checked = !0;
    }), Ht.length = $t = zt = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        c && (this._onDragOver(t), pn(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], n, o = this.el.children, r = 0, i = o.length, a = this.options; r < i; r++)
      n = o[r], W(n, a.draggable, this.el, !1) && t.push(n.getAttribute(a.dataIdAttr) || En(n));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, n) {
    var o = {}, r = this.el;
    this.toArray().forEach(function(i, a) {
      var l = r.children[a];
      W(l, this.options.draggable, r, !1) && (o[i] = l);
    }, this), n && this.captureAnimationState(), t.forEach(function(i) {
      o[i] && (r.removeChild(o[i]), r.appendChild(o[i]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, n) {
    return W(t, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, n) {
    var o = this.options;
    if (n === void 0)
      return o[t];
    var r = xt.modifyOption(this, t, n);
    typeof r < "u" ? o[t] = r : o[t] = n, t === "group" && Ne(o);
  },
  /**
   * Destroy
   */
  destroy: function() {
    P("destroy", this);
    var t = this.el;
    t[L] = null, b(t, "mousedown", this._onTapStart), b(t, "touchstart", this._onTapStart), b(t, "pointerdown", this._onTapStart), this.nativeDraggable && (b(t, "dragover", this), b(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Bt.splice(Bt.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!J) {
      if (P("hideClone", this), p.eventCanceled)
        return;
      h(S, "display", "none"), this.options.removeCloneOnHide && S.parentNode && S.parentNode.removeChild(S), J = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (J) {
      if (P("showClone", this), p.eventCanceled)
        return;
      c.parentNode == _ && !this.options.group.revertClone ? _.insertBefore(S, c) : at ? _.insertBefore(S, at) : _.appendChild(S), this.options.group.revertClone && this.animate(c, S), h(S, "display", ""), J = !1;
    }
  }
};
function pn(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Nt(e, t, n, o, r, i, a, l) {
  var s, u = e[L], d = u.options.onMove, f;
  return window.CustomEvent && !q && !Tt ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = e, s.dragged = n, s.draggedRect = o, s.related = r || t, s.relatedRect = i || T(t), s.willInsertAfter = l, s.originalEvent = a, e.dispatchEvent(s), d && (f = d.call(u, s, a)), f;
}
function qt(e) {
  e.draggable = !1;
}
function mn() {
  ee = !1;
}
function gn(e, t, n) {
  var o = T(ft(n.el, 0, n.options, !0)), r = 10;
  return t ? e.clientX < o.left - r || e.clientY < o.top && e.clientX < o.right : e.clientY < o.top - r || e.clientY < o.bottom && e.clientX < o.left;
}
function vn(e, t, n) {
  var o = T(ae(n.el, n.options.draggable)), r = 10;
  return t ? e.clientX > o.right + r || e.clientX <= o.right && e.clientY > o.bottom && e.clientX >= o.left : e.clientX > o.right && e.clientY > o.top || e.clientX <= o.right && e.clientY > o.bottom + r;
}
function bn(e, t, n, o, r, i, a, l) {
  var s = o ? e.clientY : e.clientX, u = o ? n.height : n.width, d = o ? n.top : n.left, f = o ? n.bottom : n.right, g = !1;
  if (!a) {
    if (l && Lt < u * r) {
      if (!Ct && (St === 1 ? s > d + u * i / 2 : s < f - u * i / 2) && (Ct = !0), Ct)
        g = !0;
      else if (St === 1 ? s < d + Lt : s > f - Lt)
        return -St;
    } else if (s > d + u * (1 - r) / 2 && s < f - u * (1 - r) / 2)
      return yn(t);
  }
  return g = g || a, g && (s < d + u * i / 2 || s > f - u * i / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function yn(e) {
  return k(c) < k(e) ? 1 : -1;
}
function En(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0; n--; )
    o += t.charCodeAt(n);
  return o.toString(36);
}
function wn(e) {
  Ht.length = 0;
  for (var t = e.getElementsByTagName("input"), n = t.length; n--; ) {
    var o = t[n];
    o.checked && Ht.push(o);
  }
}
function kt(e) {
  return setTimeout(e, 0);
}
function ne(e) {
  return clearTimeout(e);
}
Vt && y(document, "touchmove", function(e) {
  (p.active || ut) && e.cancelable && e.preventDefault();
});
p.utils = {
  on: y,
  off: b,
  css: h,
  find: Te,
  is: function(t, n) {
    return !!W(t, n, t, !1);
  },
  extend: nn,
  throttle: xe,
  closest: W,
  toggleClass: F,
  clone: Oe,
  index: k,
  nextTick: kt,
  cancelNextTick: ne,
  detectDirection: Pe,
  getChild: ft
};
p.get = function(e) {
  return e[L];
};
p.mount = function() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(o) {
    if (!o.prototype || !o.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(o));
    o.utils && (p.utils = j(j({}, p.utils), o.utils)), xt.mount(o);
  });
};
p.create = function(e, t) {
  return new p(e, t);
};
p.version = Qe;
var C = [], yt, oe, re = !1, Kt, Zt, Wt, Et;
function _n() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(n) {
      var o = n.originalEvent;
      this.sortable.nativeDraggable ? y(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? y(document, "pointermove", this._handleFallbackAutoScroll) : o.touches ? y(document, "touchmove", this._handleFallbackAutoScroll) : y(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var o = n.originalEvent;
      !this.options.dragOverBubble && !o.rootEl && this._handleAutoScroll(o);
    },
    drop: function() {
      this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : (b(document, "pointermove", this._handleFallbackAutoScroll), b(document, "touchmove", this._handleFallbackAutoScroll), b(document, "mousemove", this._handleFallbackAutoScroll)), ye(), Rt(), on();
    },
    nulling: function() {
      Wt = oe = yt = re = Et = Kt = Zt = null, C.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, o) {
      var r = this, i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY, l = document.elementFromPoint(i, a);
      if (Wt = n, o || this.options.forceAutoScrollFallback || Tt || q || wt) {
        Qt(n, this.options, l, o);
        var s = tt(l, !0);
        re && (!Et || i !== Kt || a !== Zt) && (Et && ye(), Et = setInterval(function() {
          var u = tt(document.elementFromPoint(i, a), !0);
          u !== s && (s = u, Rt()), Qt(n, r.options, u, o);
        }, 10), Kt = i, Zt = a);
      } else {
        if (!this.options.bubbleScroll || tt(l, !0) === V()) {
          Rt();
          return;
        }
        Qt(n, this.options, tt(l, !1), !1);
      }
    }
  }, U(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Rt() {
  C.forEach(function(e) {
    clearInterval(e.pid);
  }), C = [];
}
function ye() {
  clearInterval(Et);
}
var Qt = xe(function(e, t, n, o) {
  if (t.scroll) {
    var r = (e.touches ? e.touches[0] : e).clientX, i = (e.touches ? e.touches[0] : e).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, s = V(), u = !1, d;
    oe !== n && (oe = n, Rt(), yt = t.scroll, d = t.scrollFn, yt === !0 && (yt = tt(n, !0)));
    var f = 0, g = yt;
    do {
      var w = g, v = T(w), E = v.top, R = v.bottom, G = v.left, O = v.right, X = v.width, B = v.height, et = void 0, H = void 0, nt = w.scrollWidth, ht = w.scrollHeight, N = h(w), pt = w.scrollLeft, K = w.scrollTop;
      w === s ? (et = X < nt && (N.overflowX === "auto" || N.overflowX === "scroll" || N.overflowX === "visible"), H = B < ht && (N.overflowY === "auto" || N.overflowY === "scroll" || N.overflowY === "visible")) : (et = X < nt && (N.overflowX === "auto" || N.overflowX === "scroll"), H = B < ht && (N.overflowY === "auto" || N.overflowY === "scroll"));
      var mt = et && (Math.abs(O - r) <= a && pt + X < nt) - (Math.abs(G - r) <= a && !!pt), $ = H && (Math.abs(R - i) <= a && K + B < ht) - (Math.abs(E - i) <= a && !!K);
      if (!C[f])
        for (var ot = 0; ot <= f; ot++)
          C[ot] || (C[ot] = {});
      (C[f].vx != mt || C[f].vy != $ || C[f].el !== w) && (C[f].el = w, C[f].vx = mt, C[f].vy = $, clearInterval(C[f].pid), (mt != 0 || $ != 0) && (u = !0, C[f].pid = setInterval((function() {
        o && this.layer === 0 && p.active._onTouchMove(Wt);
        var gt = C[this.layer].vy ? C[this.layer].vy * l : 0, Z = C[this.layer].vx ? C[this.layer].vx * l : 0;
        typeof d == "function" && d.call(p.dragged.parentNode[L], Z, gt, e, Wt, C[this.layer].el) !== "continue" || Ie(C[this.layer].el, Z, gt);
      }).bind({
        layer: f
      }), 24))), f++;
    } while (t.bubbleScroll && g !== s && (g = tt(g, !1)));
    re = u;
  }
}, 30), Le = function(t) {
  var n = t.originalEvent, o = t.putSortable, r = t.dragEl, i = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (n) {
    var u = o || i;
    l();
    var d = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, f = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(f) && (a("spill"), this.onSpill({
      dragEl: r,
      putSortable: o
    }));
  }
};
function le() {
}
le.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var n = t.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable;
    this.sortable.captureAnimationState(), o && o.captureAnimationState();
    var r = ft(this.sortable.el, this.startIndex, this.options);
    r ? this.sortable.el.insertBefore(n, r) : this.sortable.el.appendChild(n), this.sortable.animateAll(), o && o.animateAll();
  },
  drop: Le
};
U(le, {
  pluginName: "revertOnSpill"
});
function se() {
}
se.prototype = {
  onSpill: function(t) {
    var n = t.dragEl, o = t.putSortable, r = o || this.sortable;
    r.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), r.animateAll();
  },
  drop: Le
};
U(se, {
  pluginName: "removeOnSpill"
});
p.mount(new _n());
p.mount(se, le);
function Jt(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function Ee(e, t, n) {
  const o = n === 0 ? e.children[0] : e.children[n - 1].nextSibling;
  e.insertBefore(t, o);
}
function Dn() {
  return typeof window < "u" ? window.console : global.console;
}
const Sn = Dn();
function Cn(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] || (t[o] = e(o));
  };
}
const Tn = /-(\w)/g, xn = Cn((e) => e.replace(Tn, (t, n) => n.toUpperCase())), ke = ["Start", "Add", "Remove", "Update", "End"], Re = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Xe = ["Move"], In = [Xe, ke, Re].flatMap((e) => e).map((e) => `on${e}`), ie = {
  manage: Xe,
  manageAndEmit: ke,
  emit: Re
};
function On(e) {
  return In.indexOf(e) !== -1;
}
const An = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function Pn(e) {
  return An.includes(e);
}
function Nn(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function Ye(e) {
  return ["id", "class", "role", "style"].includes(e) || e.startsWith("data-") || e.startsWith("aria-") || e.startsWith("on");
}
function Be(e) {
  return e.reduce((t, [n, o]) => (t[n] = o, t), {});
}
function Fn({ $attrs: e, componentData: t = {} }) {
  return {
    ...Be(
      Object.entries(e).filter(([o, r]) => Ye(o))
    ),
    ...t
  };
}
function Mn({ $attrs: e, callBackBuilder: t }) {
  const n = Be(He(e));
  Object.entries(t).forEach(([r, i]) => {
    ie[r].forEach((a) => {
      n[`on${a}`] = i(a);
    });
  });
  const o = `[data-draggable]${n.draggable || ""}`;
  return {
    ...n,
    draggable: o
  };
}
function He(e) {
  return Object.entries(e).filter(([t, n]) => !Ye(t)).map(([t, n]) => [xn(t), n]).filter(([t, n]) => !On(t));
}
const we = ({ el: e }) => e, Ln = (e, t) => e.__draggable_context = t, _e = (e) => e.__draggable_context;
class kn {
  constructor({
    nodes: { header: t, default: n, footer: o },
    root: r,
    realList: i
  }) {
    this.defaultNodes = n, this.children = [...t, ...n, ...o], this.externalComponent = r.externalComponent, this.rootTransition = r.transition, this.tag = r.tag, this.realList = i;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(t, n) {
    const { tag: o, children: r, _isRootComponent: i } = this;
    return t(o, n, i ? { default: () => r } : r);
  }
  updated() {
    const { defaultNodes: t, realList: n } = this;
    t.forEach((o, r) => {
      Ln(we(o), {
        element: n[r],
        index: r
      });
    });
  }
  getUnderlyingVm(t) {
    return _e(t);
  }
  getVmIndexFromDomIndex(t, n) {
    const { defaultNodes: o } = this, { length: r } = o, i = n.children, a = i.item(t);
    if (a === null)
      return r;
    const l = _e(a);
    if (l)
      return l.index;
    if (r === 0)
      return 0;
    const s = we(o[0]), u = [...i].findIndex(
      (d) => d === s
    );
    return t < u ? 0 : r;
  }
}
function Rn(e, t) {
  const n = e[t];
  return n ? n() : [];
}
function Xn({ $slots: e, realList: t, getKey: n }) {
  const o = t || [], [r, i] = ["header", "footer"].map(
    (s) => Rn(e, s)
  ), { item: a } = e;
  if (!a)
    throw new Error("draggable element must have an item slot");
  const l = o.flatMap(
    (s, u) => a({ element: s, index: u }).map((d) => (d.key = n(s), d.props = { ...d.props || {}, "data-draggable": !0 }, d))
  );
  if (l.length !== o.length)
    throw new Error("Item slot must have only one child");
  return {
    header: r,
    footer: i,
    default: l
  };
}
function Yn(e) {
  const t = Nn(e), n = !Pn(e) && !t;
  return {
    transition: t,
    externalComponent: n,
    tag: n ? $e(e) : t ? ze : e
  };
}
function Bn({ $slots: e, tag: t, realList: n, getKey: o }) {
  const r = Xn({ $slots: e, realList: n, getKey: o }), i = Yn(t);
  return new kn({ nodes: r, root: i, realList: n });
}
function We(e, t) {
  De(() => this.$emit(e.toLowerCase(), t));
}
function Ve(e) {
  return (t, n) => {
    if (this.realList !== null)
      return this[`onDrag${e}`](t, n);
  };
}
function Hn(e) {
  const t = Ve.call(this, e);
  return (n, o) => {
    t.call(this, n, o), We.call(this, e, n);
  };
}
let te = null;
const Wn = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (e) => e
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, Vn = [
  "update:modelValue",
  "change",
  ...[...ie.manageAndEmit, ...ie.emit].map((e) => e.toLowerCase())
], $n = Ue({
  name: "draggable",
  inheritAttrs: !1,
  props: Wn,
  emits: Vn,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: e, $attrs: t, tag: n, componentData: o, realList: r, getKey: i } = this, a = Bn({
        $slots: e,
        tag: n,
        realList: r,
        getKey: i
      });
      this.componentStructure = a;
      const l = Fn({ $attrs: t, componentData: o });
      return a.render(ce, l);
    } catch (e) {
      return this.error = !0, ce("pre", { style: { color: "red" } }, e.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Sn.error(
      "modelValue and list props are mutually exclusive! Please set one or another."
    );
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: e, $el: t, componentStructure: n } = this;
    n.updated();
    const o = Mn({
      $attrs: e,
      callBackBuilder: {
        manageAndEmit: (i) => Hn.call(this, i),
        emit: (i) => We.bind(this, i),
        manage: (i) => Ve.call(this, i)
      }
    }), r = t.nodeType === 1 ? t : t.parentElement;
    this._sortable = new p(r, o), this.targetDomElement = r, r.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: e } = this;
      return e || this.modelValue;
    },
    getKey() {
      const { itemKey: e } = this;
      return typeof e == "function" ? e : (t) => t[e];
    }
  },
  watch: {
    $attrs: {
      handler(e) {
        const { _sortable: t } = this;
        t && He(e).forEach(([n, o]) => {
          t.option(n, o);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(e) {
      return this.componentStructure.getUnderlyingVm(e) || null;
    },
    getUnderlyingPotencialDraggableComponent(e) {
      return e.__draggable_component__;
    },
    emitChanges(e) {
      De(() => this.$emit("change", e));
    },
    alterList(e) {
      if (this.list) {
        e(this.list);
        return;
      }
      const t = [...this.modelValue];
      e(t), this.$emit("update:modelValue", t);
    },
    spliceList() {
      const e = (t) => t.splice(...arguments);
      this.alterList(e);
    },
    updatePosition(e, t) {
      const n = (o) => o.splice(t, 0, o.splice(e, 1)[0]);
      this.alterList(n);
    },
    getRelatedContextFromMoveEvent({ to: e, related: t }) {
      const n = this.getUnderlyingPotencialDraggableComponent(e);
      if (!n)
        return { component: n };
      const o = n.realList, r = { list: o, component: n };
      return e !== t && o ? { ...n.getUnderlyingVm(t) || {}, ...r } : r;
    },
    getVmIndexFromDomIndex(e) {
      return this.componentStructure.getVmIndexFromDomIndex(
        e,
        this.targetDomElement
      );
    },
    onDragStart(e) {
      this.context = this.getUnderlyingVm(e.item), e.item._underlying_vm_ = this.clone(this.context.element), te = e.item;
    },
    onDragAdd(e) {
      const t = e.item._underlying_vm_;
      if (t === void 0)
        return;
      Jt(e.item);
      const n = this.getVmIndexFromDomIndex(e.newIndex);
      this.spliceList(n, 0, t);
      const o = { element: t, newIndex: n };
      this.emitChanges({ added: o });
    },
    onDragRemove(e) {
      if (Ee(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        Jt(e.clone);
        return;
      }
      const { index: t, element: n } = this.context;
      this.spliceList(t, 1);
      const o = { element: n, oldIndex: t };
      this.emitChanges({ removed: o });
    },
    onDragUpdate(e) {
      Jt(e.item), Ee(e.from, e.item, e.oldIndex);
      const t = this.context.index, n = this.getVmIndexFromDomIndex(e.newIndex);
      this.updatePosition(t, n);
      const o = { element: this.context.element, oldIndex: t, newIndex: n };
      this.emitChanges({ moved: o });
    },
    computeFutureIndex(e, t) {
      if (!e.element)
        return 0;
      const n = [...t.to.children].filter(
        (a) => a.style.display !== "none"
      ), o = n.indexOf(t.related), r = e.component.getVmIndexFromDomIndex(
        o
      );
      return n.indexOf(te) !== -1 || !t.willInsertAfter ? r : r + 1;
    },
    onDragMove(e, t) {
      const { move: n, realList: o } = this;
      if (!n || !o)
        return !0;
      const r = this.getRelatedContextFromMoveEvent(e), i = this.computeFutureIndex(r, e), a = {
        ...this.context,
        futureIndex: i
      }, l = {
        ...e,
        relatedContext: r,
        draggedContext: a
      };
      return n(l, t);
    },
    onDragEnd() {
      te = null;
    }
  }
});
export {
  $n as default
};
