(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [877],
  {
    9008: function (t, e, i) {
      t.exports = i(3121);
    },
    6521: function (t, e, i) {
      "use strict";
      let s, n;
      i.d(e, {
        E: function () {
          return n1;
        },
      });
      var r,
        o,
        a = i(7294),
        l = i(6014);
      let h = (0, a.createContext)({});
      var u = i(240),
        d = i(8868);
      let c = (0, a.createContext)({ strict: !1 }),
        p = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        m = "data-" + p("framerAppearId");
      var f = i(9727);
      let { schedule: v, cancel: g } = (0, f.Z)(queueMicrotask, !1);
      function y(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function x(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function P(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      let w = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        T = ["initial", ...w];
      function b(t) {
        return P(t.animate) || T.some((e) => x(t[e]));
      }
      function S(t) {
        return Boolean(b(t) || t.variants);
      }
      function A(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let V = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        E = {};
      for (let C in V) E[C] = { isEnabled: (t) => V[C].some((e) => !!t[e]) };
      var M = i(1741),
        k = i(5364);
      let R = (0, a.createContext)({}),
        D = Symbol.for("motionComponentSymbol"),
        B = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function L(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (B.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let F = {},
        j = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        O = new Set(j);
      function I(t, { layout: e, layoutId: i }) {
        return (
          O.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!F[t] || "opacity" === t))
        );
      }
      let U = (t) => Boolean(t && t.getVelocity),
        W = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        $ = j.length,
        N = (t) => (e) => "string" == typeof e && e.startsWith(t),
        H = N("--"),
        Y = N("var(--"),
        z = (t) => {
          let e = Y(t);
          return !!e && K.test(t.split("/*")[0].trim());
        },
        K =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        X = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        Z = (t, e, i) => (i > e ? e : i < t ? t : i),
        G = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        q = { ...G, transform: (t) => Z(0, 1, t) },
        _ = { ...G, default: 1 },
        J = (t) => Math.round(1e5 * t) / 1e5,
        Q = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tt =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        te =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function ti(t) {
        return "string" == typeof t;
      }
      let ts = (t) => ({
          test: (e) => ti(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tn = ts("deg"),
        tr = ts("%"),
        to = ts("px"),
        ta = ts("vh"),
        tl = ts("vw"),
        th = {
          ...tr,
          parse: (t) => tr.parse(t) / 100,
          transform: (t) => tr.transform(100 * t),
        },
        tu = { ...G, transform: Math.round },
        td = {
          borderWidth: to,
          borderTopWidth: to,
          borderRightWidth: to,
          borderBottomWidth: to,
          borderLeftWidth: to,
          borderRadius: to,
          radius: to,
          borderTopLeftRadius: to,
          borderTopRightRadius: to,
          borderBottomRightRadius: to,
          borderBottomLeftRadius: to,
          width: to,
          maxWidth: to,
          height: to,
          maxHeight: to,
          size: to,
          top: to,
          right: to,
          bottom: to,
          left: to,
          padding: to,
          paddingTop: to,
          paddingRight: to,
          paddingBottom: to,
          paddingLeft: to,
          margin: to,
          marginTop: to,
          marginRight: to,
          marginBottom: to,
          marginLeft: to,
          rotate: tn,
          rotateX: tn,
          rotateY: tn,
          rotateZ: tn,
          scale: _,
          scaleX: _,
          scaleY: _,
          scaleZ: _,
          skew: tn,
          skewX: tn,
          skewY: tn,
          distance: to,
          translateX: to,
          translateY: to,
          translateZ: to,
          x: to,
          y: to,
          z: to,
          perspective: to,
          transformPerspective: to,
          opacity: q,
          originX: th,
          originY: th,
          originZ: to,
          zIndex: tu,
          backgroundPositionX: to,
          backgroundPositionY: to,
          fillOpacity: q,
          strokeOpacity: q,
          numOctaves: tu,
        };
      function tc(t, e, i, s) {
        let { style: n, vars: r, transform: o, transformOrigin: a } = t,
          l = !1,
          h = !1,
          u = !0;
        for (let d in e) {
          let c = e[d];
          if (H(d)) {
            r[d] = c;
            continue;
          }
          let p = td[d],
            m = X(c, p);
          if (O.has(d)) {
            if (((l = !0), (o[d] = m), !u)) continue;
            c !== (p.default || 0) && (u = !1);
          } else d.startsWith("origin") ? ((h = !0), (a[d] = m)) : (n[d] = m);
        }
        if (
          (!e.transform &&
            (l || s
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  s,
                  n
                ) {
                  let r = "";
                  for (let o = 0; o < $; o++) {
                    let a = j[o];
                    if (void 0 !== t[a]) {
                      let l = W[a] || a;
                      r += `${l}(${t[a]}) `;
                    }
                  }
                  return (
                    e && !t.z && (r += "translateZ(0)"),
                    (r = r.trim()),
                    n ? (r = n(t, s ? "" : r)) : i && s && (r = "none"),
                    r
                  );
                })(t.transform, i, u, s))
              : n.transform && (n.transform = "none")),
          h)
        ) {
          let { originX: f = "50%", originY: v = "50%", originZ: g = 0 } = a;
          n.transformOrigin = `${f} ${v} ${g}`;
        }
      }
      let tp = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function tm(t, e, i) {
        for (let s in e) U(e[s]) || I(s, i) || (t[s] = e[s]);
      }
      function tf(t, e, i) {
        let s = {},
          n = (function (t, e, i) {
            let s = t.style || {},
              n = {};
            return (
              tm(n, s, t),
              Object.assign(
                n,
                (function ({ transformTemplate: t }, e, i) {
                  return (0, a.useMemo)(() => {
                    let s = tp();
                    return (
                      tc(s, e, { enableHardwareAcceleration: !i }, t),
                      Object.assign({}, s.vars, s.style)
                    );
                  }, [e]);
                })(t, e, i)
              ),
              n
            );
          })(t, e, i);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((s.draggable = !1),
            (n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none"),
            (n.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (s.tabIndex = 0),
          (s.style = n),
          s
        );
      }
      let tv = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function tg(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          tv.has(t)
        );
      }
      let ty = (t) => !tg(t);
      try {
        (r = require("@emotion/is-prop-valid").default) &&
          (ty = (t) => (t.startsWith("on") ? !tg(t) : r(t)));
      } catch (tx) {}
      function tP(t, e, i) {
        return "string" == typeof t ? t : to.transform(e + i * t);
      }
      let tw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tT = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function tb(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          originX: n,
          originY: r,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...h
        },
        u,
        d,
        c
      ) {
        if ((tc(t, h, u, c), d)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: p, style: m, dimensions: f } = t;
        p.transform && (f && (m.transform = p.transform), delete p.transform),
          f &&
            (void 0 !== n || void 0 !== r || m.transform) &&
            (m.transformOrigin = (function (t, e, i) {
              let s = tP(e, t.x, t.width),
                n = tP(i, t.y, t.height);
              return `${s} ${n}`;
            })(f, void 0 !== n ? n : 0.5, void 0 !== r ? r : 0.5)),
          void 0 !== e && (p.x = e),
          void 0 !== i && (p.y = i),
          void 0 !== s && (p.scale = s),
          void 0 !== o &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? tw : tT;
              t[r.offset] = to.transform(-s);
              let o = to.transform(e),
                a = to.transform(i);
              t[r.array] = `${o} ${a}`;
            })(p, o, a, l, !1);
      }
      let tS = () => ({ ...tp(), attrs: {} }),
        tA = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tV(t, e, i, s) {
        let n = (0, a.useMemo)(() => {
          let i = tS();
          return (
            tb(
              i,
              e,
              { enableHardwareAcceleration: !1 },
              tA(s),
              t.transformTemplate
            ),
            { ...i.attrs, style: { ...i.style } }
          );
        }, [e]);
        if (t.style) {
          let r = {};
          tm(r, t.style, t), (n.style = { ...r, ...n.style });
        }
        return n;
      }
      function tE(t, { style: e, vars: i }, s, n) {
        for (let r in (Object.assign(t.style, e, n && n.getProjectionStyles(s)),
        i))
          t.style.setProperty(r, i[r]);
      }
      let tC = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tM(t, e, i, s) {
        for (let n in (tE(t, e, void 0, s), e.attrs))
          t.setAttribute(tC.has(n) ? n : p(n), e.attrs[n]);
      }
      function tk(t, e) {
        let { style: i } = t,
          s = {};
        for (let n in i)
          (U(i[n]) || (e.style && U(e.style[n])) || I(n, t)) && (s[n] = i[n]);
        return s;
      }
      function tR(t, e) {
        let i = tk(t, e);
        for (let s in t)
          if (U(t[s]) || U(e[s])) {
            let n =
              -1 !== j.indexOf(s)
                ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
                : s;
            i[n] = t[s];
          }
        return i;
      }
      function tD(t, e, i, s = {}, n = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, s, n)),
          e
        );
      }
      var tB = i(6681);
      let tL = (t) => Array.isArray(t),
        tF = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        tj = (t) => (tL(t) ? t[t.length - 1] || 0 : t);
      function tO(t) {
        let e = U(t) ? t.get() : t;
        return tF(e) ? e.toValue() : e;
      }
      let tI = (t) => (e, i) => {
        let s = (0, a.useContext)(h),
          n = (0, a.useContext)(u.O),
          r = () =>
            (function (
              {
                scrapeMotionValuesFromProps: t,
                createRenderState: e,
                onMount: i,
              },
              s,
              n,
              r
            ) {
              let o = {
                latestValues: (function (t, e, i, s) {
                  let n = {},
                    r = s(t, {});
                  for (let o in r) n[o] = tO(r[o]);
                  let { initial: a, animate: l } = t,
                    h = b(t),
                    u = S(t);
                  e &&
                    u &&
                    !h &&
                    !1 !== t.inherit &&
                    (void 0 === a && (a = e.initial),
                    void 0 === l && (l = e.animate));
                  let d = !!i && !1 === i.initial;
                  d = d || !1 === a;
                  let c = d ? l : a;
                  if (c && "boolean" != typeof c && !P(c)) {
                    let p = Array.isArray(c) ? c : [c];
                    p.forEach((e) => {
                      let i = tD(t, e);
                      if (!i) return;
                      let { transitionEnd: s, transition: r, ...o } = i;
                      for (let a in o) {
                        let l = o[a];
                        if (Array.isArray(l)) {
                          let h = d ? l.length - 1 : 0;
                          l = l[h];
                        }
                        null !== l && (n[a] = l);
                      }
                      for (let u in s) n[u] = s[u];
                    });
                  }
                  return n;
                })(s, n, r, t),
                renderState: e(),
              };
              return i && (o.mount = (t) => i(s, t, o)), o;
            })(t, e, s, n);
        return i ? r() : (0, tB.h)(r);
      };
      var tU = i(6166);
      let tW = {
          useVisualState: tI({
            scrapeMotionValuesFromProps: tR,
            createRenderState: tS,
            onMount: (t, e, { renderState: i, latestValues: s }) => {
              tU.Wi.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                tU.Wi.render(() => {
                  tb(
                    i,
                    s,
                    { enableHardwareAcceleration: !1 },
                    tA(e.tagName),
                    t.transformTemplate
                  ),
                    tM(e, i);
                });
            },
          }),
        },
        t$ = {
          useVisualState: tI({
            scrapeMotionValuesFromProps: tk,
            createRenderState: tp,
          }),
        };
      function tN(t, e, i, s = { passive: !0 }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i);
      }
      let tH = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tY(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let tz = (t) => (e) => tH(e) && t(e, tY(e));
      function tK(t, e, i, s) {
        return tN(t, e, tz(i), s);
      }
      let tX = (t, e) => (i) => e(t(i)),
        tZ = (...t) => t.reduce(tX);
      function tG(t) {
        let e = null;
        return () => {
          let i = () => {
            e = null;
          };
          return null === e && ((e = t), i);
        };
      }
      let tq = tG("dragHorizontal"),
        t_ = tG("dragVertical");
      function tJ(t) {
        let e = !1;
        if ("y" === t) e = t_();
        else if ("x" === t) e = tq();
        else {
          let i = tq(),
            s = t_();
          i && s
            ? (e = () => {
                i(), s();
              })
            : (i && i(), s && s());
        }
        return e;
      }
      function tQ() {
        let t = tJ(!0);
        return !t || (t(), !1);
      }
      class t0 {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function t1(t, e) {
        let i = "onHover" + (e ? "Start" : "End"),
          s = (s, n) => {
            if ("touch" === s.pointerType || tQ()) return;
            let r = t.getProps();
            t.animationState &&
              r.whileHover &&
              t.animationState.setActive("whileHover", e),
              r[i] && r[i](s, n);
          };
        return tK(t.current, "pointer" + (e ? "enter" : "leave"), s, {
          passive: !t.getProps()[i],
        });
      }
      let t5 = (t, e) => !!e && (t === e || t5(t, e.parentElement));
      var t2 = i(1662);
      function t3(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tY(i));
      }
      let t6 = new WeakMap(),
        t9 = new WeakMap(),
        t4 = (t) => {
          let e = t6.get(t.target);
          e && e(t);
        },
        t8 = (t) => {
          t.forEach(t4);
        },
        t7 = { some: 0, all: 1 };
      function et(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      function ee(t, e, i) {
        let s = t.getProps();
        return tD(
          s,
          e,
          void 0 !== i ? i : s.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let ei = (t) => 1e3 * t,
        es = (t) => t / 1e3,
        en = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        er = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        eo = { type: "keyframes", duration: 0.8 },
        ea = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        el = (t, { keyframes: e }) =>
          e.length > 2
            ? eo
            : O.has(t)
            ? t.startsWith("scale")
              ? er(e[1])
              : en
            : ea;
      function eh(t, e) {
        return t[e] || t.default || t;
      }
      var eu = i(2081);
      let ed = { current: !1 },
        ec = (t) => null !== t;
      function ep(t, { repeat: e, repeatType: i = "loop" }, s) {
        let n = t.filter(ec),
          r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return r && void 0 !== s ? s : n[r];
      }
      function em() {
        s = void 0;
      }
      let ef = {
          now: () => (
            void 0 === s &&
              ef.set(
                tU.w0.isProcessing || eu.c.useManualTiming
                  ? tU.w0.timestamp
                  : performance.now()
              ),
            s
          ),
          set: (t) => {
            (s = t), queueMicrotask(em);
          },
        },
        ev = (t) => /^0[^.\s]+$/u.test(t);
      var eg = i(5487);
      let ey = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        ex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        eP = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        ew = (t) => t === G || t === to,
        eT = (t, e) => parseFloat(t.split(", ")[e]),
        eb =
          (t, e) =>
          (i, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let n = s.match(/^matrix3d\((.+)\)$/u);
            if (n) return eT(n[1], e);
            {
              let r = s.match(/^matrix\((.+)\)$/u);
              return r ? eT(r[1], t) : 0;
            }
          },
        eS = new Set(["x", "y", "z"]),
        eA = j.filter((t) => !eS.has(t));
      function eV(t) {
        let e = [];
        return (
          eA.forEach((i) => {
            let s = t.getValue(i);
            void 0 !== s &&
              (e.push([i, s.get()]), s.set(i.startsWith("scale") ? 1 : 0));
          }),
          e
        );
      }
      let eE = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: eb(4, 13),
        y: eb(5, 14),
      };
      (eE.translateX = eE.x), (eE.translateY = eE.y);
      let eC = (t) => (e) => e.test(t),
        eM = [
          G,
          to,
          tr,
          tn,
          tl,
          ta,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        ek = (t) => eM.find(eC(t)),
        eR = new Set(),
        eD = !1,
        eB = !1;
      function eL() {
        if (eB) {
          let t = Array.from(eR).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = eV(t);
            e.length && (i.set(t, eV(t)), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (eB = !1), (eD = !1), eR.forEach((t) => t.complete()), eR.clear();
      }
      function eF() {
        eR.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (eB = !0);
        });
      }
      class ej {
        constructor(t, e, i, s, n, r = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (eR.add(this),
                eD || ((eD = !0), tU.Wi.read(eF), tU.Wi.resolveKeyframes(eL)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let r = null == s ? void 0 : s.get(),
                  o = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let a = i.readValue(e, o);
                  null != a && (t[0] = a);
                }
                void 0 === t[0] && (t[0] = o), s && void 0 === r && s.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            eR.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), eR.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let eO = (t, e) => (i) =>
          Boolean(
            (ti(i) && te.test(i) && i.startsWith(t)) ||
              (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        eI = (t, e, i) => (s) => {
          if (!ti(s)) return s;
          let [n, r, o, a] = s.match(Q);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        eU = (t) => Z(0, 255, t),
        eW = { ...G, transform: (t) => Math.round(eU(t)) },
        e$ = {
          test: eO("rgb", "red"),
          parse: eI("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            eW.transform(t) +
            ", " +
            eW.transform(e) +
            ", " +
            eW.transform(i) +
            ", " +
            J(q.transform(s)) +
            ")",
        },
        eN = {
          test: eO("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: e$.transform,
        },
        eH = {
          test: eO("hsl", "hue"),
          parse: eI("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tr.transform(J(e)) +
            ", " +
            tr.transform(J(i)) +
            ", " +
            J(q.transform(s)) +
            ")",
        },
        eY = {
          test: (t) => e$.test(t) || eN.test(t) || eH.test(t),
          parse: (t) =>
            e$.test(t) ? e$.parse(t) : eH.test(t) ? eH.parse(t) : eN.parse(t),
          transform: (t) =>
            ti(t)
              ? t
              : t.hasOwnProperty("red")
              ? e$.transform(t)
              : eH.transform(t),
        },
        ez = "number",
        eK = "color",
        eX =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function eZ(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e.replace(
            eX,
            (t) => (
              eY.test(t)
                ? (s.color.push(r), n.push(eK), i.push(eY.parse(t)))
                : t.startsWith("var(")
                ? (s.var.push(r), n.push("var"), i.push(t))
                : (s.number.push(r), n.push(ez), i.push(parseFloat(t))),
              ++r,
              "${}"
            )
          ),
          a = o.split("${}");
        return { values: i, split: a, indexes: s, types: n };
      }
      function eG(t) {
        return eZ(t).values;
      }
      function eq(t) {
        let { split: e, types: i } = eZ(t),
          s = e.length;
        return (t) => {
          let n = "";
          for (let r = 0; r < s; r++)
            if (((n += e[r]), void 0 !== t[r])) {
              let o = i[r];
              o === ez
                ? (n += J(t[r]))
                : o === eK
                ? (n += eY.transform(t[r]))
                : (n += t[r]);
            }
          return n;
        };
      }
      let e_ = (t) => ("number" == typeof t ? 0 : t),
        eJ = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              ti(t) &&
              ((null === (e = t.match(Q)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tt)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: eG,
          createTransformer: eq,
          getAnimatableNone: function (t) {
            let e = eG(t),
              i = eq(t);
            return i(e.map(e_));
          },
        },
        eQ = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function e0(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(Q) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = eQ.has(e) ? 1 : 0;
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let e1 = /\b([a-z-]*)\(.*?\)/gu,
        e5 = {
          ...eJ,
          getAnimatableNone: (t) => {
            let e = t.match(e1);
            return e ? e.map(e0).join(" ") : t;
          },
        },
        e2 = {
          ...td,
          color: eY,
          backgroundColor: eY,
          outlineColor: eY,
          fill: eY,
          stroke: eY,
          borderColor: eY,
          borderTopColor: eY,
          borderRightColor: eY,
          borderBottomColor: eY,
          borderLeftColor: eY,
          filter: e5,
          WebkitFilter: e5,
        },
        e3 = (t) => e2[t];
      function e6(t, e) {
        let i = e3(t);
        return (
          i !== e5 && (i = eJ),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      class e9 extends ej {
        constructor(t, e, i, s) {
          super(t, e, i, s, null == s ? void 0 : s.owner, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e.current) return;
          super.readKeyframes();
          for (let s = 0; s < t.length; s++) {
            let n = t[s];
            if ("string" == typeof n && z(n)) {
              let r = (function t(e, i, s = 1) {
                (0, eg.k)(
                  s <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = ex.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${null != i ? i : s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let a = o.trim();
                  return ey(a) ? parseFloat(a) : a;
                }
                return z(r) ? t(r, i, s + 1) : r;
              })(n, e.current);
              void 0 !== r && (t[s] = r);
            }
          }
          if (!eP.has(i) || 2 !== t.length) return this.resolveNoneKeyframes();
          let [o, a] = t,
            l = ek(o),
            h = ek(a);
          if (l !== h) {
            if (ew(l) && ew(h))
              for (let u = 0; u < t.length; u++) {
                let d = t[u];
                "string" == typeof d && (t[u] = parseFloat(d));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let s = 0; s < t.length; s++) {
            var n;
            ("number" == typeof (n = t[s])
              ? 0 === n
              : null === n || "none" === n || "0" === n || ev(n)) && i.push(s);
          }
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; )
                "string" == typeof t[n] &&
                  "none" !== t[n] &&
                  "0" !== t[n] &&
                  (s = t[n]),
                  n++;
              if (s && i) for (let r of e) t[r] = e6(i, s);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eE[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && t.getValue(i, s).jump(s, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: s } = this;
          if (!e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let r = s.length - 1,
            o = s[r];
          (s[r] = eE[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o && (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let e4 = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (eJ.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class e8 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: s = 0,
          repeatDelay: n = 0,
          repeatType: r = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: s,
              repeatDelay: n,
              repeatType: r,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        get resolved() {
          return this._resolved || (eF(), eL()), this._resolved;
        }
        onKeyframesResolved(t, e) {
          let {
            name: i,
            type: s,
            velocity: n,
            delay: r,
            onComplete: o,
            onUpdate: a,
          } = this.options;
          if (
            !(function (t, e, i, s) {
              let n = t[0];
              if (null === n) return !1;
              let r = t[t.length - 1],
                o = e4(n, e),
                a = e4(r, e);
              return (
                (0, eg.K)(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && s))
              );
            })(t, i, s, n)
          ) {
            if (ed.current || !r) {
              null == a || a(ep(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let l = this.initPlayback(t, e);
          !1 !== l &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...l }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      function e7(t, e, i) {
        var s, n;
        let r = Math.max(e - 5, 0);
        return (s = i - t(r)), (n = e - r) ? s * (1e3 / n) : 0;
      }
      function it(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let ie = ["duration", "bounce"],
        ii = ["stiffness", "damping", "mass"];
      function is(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ir({ keyframes: t, restDelta: e, restSpeed: i, ...s }) {
        let n;
        let r = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: r },
          {
            stiffness: l,
            damping: h,
            mass: u,
            duration: d,
            velocity: c,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!is(t, ii) && is(t, ie)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: s = 1,
              }) {
                let n, r;
                (0, eg.K)(
                  t <= ei(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = Z(0.05, 1, o)),
                  (t = Z(0.01, 10, es(t))),
                  o < 1
                    ? ((n = (e) => {
                        let s = e * o,
                          n = s * t,
                          r = it(e, o);
                        return 0.001 - ((s - i) / r) * Math.exp(-n);
                      }),
                      (r = (e) => {
                        let s = e * o,
                          r = s * t,
                          a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          l = it(Math.pow(e, 2), o),
                          h = -n(e) + 0.001 > 0 ? -1 : 1;
                        return (h * ((r * i + i - a) * Math.exp(-r))) / l;
                      }))
                    : ((n = (e) => {
                        let s = Math.exp(-e * t),
                          n = (e - i) * t + 1;
                        return -0.001 + s * n;
                      }),
                      (r = (e) => {
                        let s = Math.exp(-e * t),
                          n = (i - e) * (t * t);
                        return s * n;
                      }));
                let a = 5 / t,
                  l = (function (t, e, i) {
                    let s = i;
                    for (let n = 1; n < 12; n++) s -= t(s) / e(s);
                    return s;
                  })(n, r, a);
                if (((t = ei(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let h = Math.pow(l, 2) * s;
                  return {
                    stiffness: h,
                    damping: 2 * o * Math.sqrt(s * h),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...s, velocity: -es(s.velocity || 0) }),
          m = c || 0,
          f = h / (2 * Math.sqrt(l * u)),
          v = o - r,
          g = es(Math.sqrt(l / u)),
          y = 5 > Math.abs(v);
        if ((i || (i = y ? 0.01 : 2), e || (e = y ? 0.005 : 0.5), f < 1)) {
          let x = it(g, f);
          n = (t) =>
            o -
            Math.exp(-f * g * t) *
              (((m + f * g * v) / x) * Math.sin(x * t) + v * Math.cos(x * t));
        } else if (1 === f)
          n = (t) => o - Math.exp(-g * t) * (v + (m + g * v) * t);
        else {
          let P = g * Math.sqrt(f * f - 1);
          n = (t) => {
            let e = Math.min(P * t, 300);
            return (
              o -
              (Math.exp(-f * g * t) *
                ((m + f * g * v) * Math.sinh(e) + P * v * Math.cosh(e))) /
                P
            );
          };
        }
        return {
          calculatedDuration: (p && d) || null,
          next: (t) => {
            let s = n(t);
            if (p) a.done = t >= d;
            else {
              let r = m;
              0 !== t && (r = f < 1 ? e7(n, t, s) : 0);
              let l = Math.abs(r) <= i,
                h = Math.abs(o - s) <= e;
              a.done = l && h;
            }
            return (a.value = a.done ? o : s), a;
          },
        };
      }
      function io({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let P = (t) => -g * Math.exp(-t / s),
          w = (t) => x + P(t),
          T = (t) => {
            let e = P(t),
              i = w(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? x : i);
          },
          b = (t) => {
            f(m.value) &&
              ((d = t),
              (c = ir({
                keyframes: [m.value, v(m.value)],
                velocity: e7(w, t, m.value),
                damping: n,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), T(t), b(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || T(t), m);
            },
          }
        );
      }
      let ia = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function il(t, e, i, s) {
        if (t === e && i === s) return t2.Z;
        let n = (e) =>
          (function (t, e, i, s, n) {
            let r, o;
            let a = 0;
            do
              (r = ia((o = e + (i - e) / 2), s, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : ia(n(t), e, s));
      }
      let ih = il(0.42, 0, 1, 1),
        iu = il(0, 0, 0.58, 1),
        id = il(0.42, 0, 0.58, 1),
        ic = (t) => Array.isArray(t) && "number" != typeof t[0],
        ip = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        im = (t) => (e) => 1 - t(1 - e),
        iv = (t) => 1 - Math.sin(Math.acos(t)),
        ig = im(iv),
        iy = ip(iv),
        ix = il(0.33, 1.53, 0.69, 0.99),
        iP = im(ix),
        iw = ip(iP),
        iT = (t) =>
          (t *= 2) < 1 ? 0.5 * iP(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        ib = {
          linear: t2.Z,
          easeIn: ih,
          easeInOut: id,
          easeOut: iu,
          circIn: iv,
          circInOut: iy,
          circOut: ig,
          backIn: iP,
          backInOut: iw,
          backOut: ix,
          anticipate: iT,
        },
        iS = (t) => {
          if (Array.isArray(t)) {
            (0, eg.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, s, n] = t;
            return il(e, i, s, n);
          }
          return "string" == typeof t
            ? ((0, eg.k)(void 0 !== ib[t], `Invalid easing type '${t}'`), ib[t])
            : t;
        },
        iA = (t, e, i) => {
          let s = e - t;
          return 0 === s ? 1 : (i - t) / s;
        },
        iV = (t, e, i) => t + (e - t) * i;
      function iE(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      let iC = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        iM = [eN, e$, eH],
        ik = (t) => iM.find((e) => e.test(t));
      function iR(t) {
        let e = ik(t);
        (0, eg.k)(
          Boolean(e),
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === eH &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let a = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - a;
                (n = iE(l, a, t + 1 / 3)),
                  (r = iE(l, a, t)),
                  (o = iE(l, a, t - 1 / 3));
              } else n = r = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let iD = (t, e) => {
        let i = iR(t),
          s = iR(e),
          n = { ...i };
        return (t) => (
          (n.red = iC(i.red, s.red, t)),
          (n.green = iC(i.green, s.green, t)),
          (n.blue = iC(i.blue, s.blue, t)),
          (n.alpha = iV(i.alpha, s.alpha, t)),
          e$.transform(n)
        );
      };
      function iB(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      function iL(t, e) {
        return (i) => iV(t, e, i);
      }
      function iF(t) {
        return "number" == typeof t
          ? iL
          : "string" == typeof t
          ? z(t)
            ? iB
            : eY.test(t)
            ? iD
            : iI
          : Array.isArray(t)
          ? ij
          : "object" == typeof t
          ? eY.test(t)
            ? iD
            : iO
          : iB;
      }
      function ij(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => iF(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function iO(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = iF(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let iI = (t, e) => {
        let i = eJ.createTransformer(e),
          s = eZ(t),
          n = eZ(e),
          r =
            s.indexes.var.length === n.indexes.var.length &&
            s.indexes.color.length === n.indexes.color.length &&
            s.indexes.number.length >= n.indexes.number.length;
        return r
          ? tZ(
              ij(
                (function (t, e) {
                  var i;
                  let s = [],
                    n = { color: 0, var: 0, number: 0 };
                  for (let r = 0; r < e.values.length; r++) {
                    let o = e.types[r],
                      a = t.indexes[o][n[o]],
                      l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                    (s[r] = l), n[o]++;
                  }
                  return s;
                })(s, n),
                n.values
              ),
              i
            )
          : ((0, eg.K)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            iB(t, e));
      };
      function iU(t, e, i) {
        if (
          "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
        )
          return iV(t, e, i);
        let s = iF(t);
        return s(t, e);
      }
      function iW({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        let n = ic(s) ? s.map(iS) : iS(s),
          r = { done: !1, value: e[0] },
          o = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let s = 1; s <= e; s++) {
                        let n = iA(0, e, s);
                        t.push(iV(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          a = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
            let r = t.length;
            if (
              ((0, eg.k)(
                r === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && t[0] === t[1]) return () => e[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let s = [],
                  n = i || iU,
                  r = t.length - 1;
                for (let o = 0; o < r; o++) {
                  let a = n(t[o], t[o + 1]);
                  if (e) {
                    let l = Array.isArray(e) ? e[o] || t2.Z : e;
                    a = tZ(l, a);
                  }
                  s.push(a);
                }
                return s;
              })(e, s, n),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = iA(t[i], t[i + 1], e);
                return o[i](s);
              };
            return i ? (e) => l(Z(t[0], t[r - 1], e)) : l;
          })(o, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || id).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = a(e)), (r.done = e >= t), r),
        };
      }
      let i$ = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => tU.Wi.update(e, !0),
            stop: () => (0, tU.Pn)(e),
            now: () => (tU.w0.isProcessing ? tU.w0.timestamp : ef.now()),
          };
        },
        iN = { decay: io, inertia: io, tween: iW, keyframes: iW, spring: ir },
        iH = (t) => t / 100;
      class iY extends e8 {
        constructor({ KeyframeResolver: t = ej, ...e }) {
          super(e),
            (this.holdTime = null),
            (this.startTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.state = "idle");
          let { name: i, motionValue: s, keyframes: n } = this.options,
            r = (t, e) => this.onKeyframesResolved(t, e);
          i && s && s.owner
            ? (this.resolver = s.owner.resolveKeyframes(n, r, i, s))
            : (this.resolver = new t(n, r, i, s)),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: s = "keyframes",
              repeat: n = 0,
              repeatDelay: r = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = iN[s] || iW;
          l !== iW &&
            "number" != typeof t[0] &&
            ((e = tZ(iH, iU(t[0], t[1]))), (t = [0, 100]));
          let h = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(h));
          let { calculatedDuration: u } = h,
            d = u + r;
          return {
            generator: h,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: u,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - r,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: s } = this.options;
            return { done: !0, value: s[s.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: o,
            mapPercentToKeyframes: a,
            keyframes: l,
            calculatedDuration: h,
            totalDuration: u,
            resolvedDuration: d,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: c,
            repeat: p,
            repeatType: m,
            repeatDelay: f,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - c * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let x = this.currentTime,
            P = r;
          if (p) {
            let w = Math.min(this.currentTime, u) / d,
              T = Math.floor(w),
              b = w % 1;
            !b && w >= 1 && (b = 1), 1 === b && T--, (T = Math.min(T, p + 1));
            let S = Boolean(T % 2);
            S &&
              ("reverse" === m
                ? ((b = 1 - b), f && (b -= f / d))
                : "mirror" === m && (P = o)),
              (x = Z(0, 1, b) * d);
          }
          let A = y ? { done: !1, value: l[0] } : P.next(x);
          a && (A.value = a(A.value));
          let { done: V } = A;
          y ||
            null === h ||
            (V =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let E =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && V));
          return (
            E && void 0 !== n && (A.value = ep(l, this.options, n)),
            v && v(A.value),
            E && this.finish(),
            A
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? es(t.calculatedDuration) : 0;
        }
        get time() {
          return es(this.currentTime);
        }
        set time(t) {
          (t = ei(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = es(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = i$, onPlay: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let i = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : (this.startTime && "finished" !== this.state) ||
              (this.startTime = i),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.teardown();
          let { onStop: t } = this.options;
          t && t();
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let iz = (t) => Array.isArray(t) && "number" == typeof t[0],
        iK = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        iX = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: iK([0, 0.65, 0.55, 1]),
          circOut: iK([0.55, 0, 1, 0.45]),
          backIn: iK([0.31, 0.01, 0.66, -0.59]),
          backOut: iK([0.33, 1.53, 0.69, 0.99]),
        },
        iZ =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        iG = new Set(["opacity", "clipPath", "filter", "transform"]);
      class iq extends e8 {
        constructor(t) {
          super(t);
          let { name: e, motionValue: i, keyframes: s } = this.options;
          (this.resolver = new e9(
            s,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, s;
          let { duration: n = 300, motionValue: r, name: o } = this.options;
          if (!(null === (i = r.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (s = this.options).type ||
            "backgroundColor" === s.name ||
            !(function t(e) {
              return Boolean(
                !e ||
                  ("string" == typeof e && iX[e]) ||
                  iz(e) ||
                  (Array.isArray(e) && e.every(t))
              );
            })(s.ease)
          ) {
            let {
                onComplete: a,
                onUpdate: l,
                motionValue: h,
                ...u
              } = this.options,
              d = (function (t, e) {
                let i = new iY({ ...e, keyframes: t, repeat: 0, delay: 0 }),
                  s = { done: !1, value: t[0] },
                  n = [],
                  r = 0;
                for (; !s.done && r < 2e4; )
                  n.push((s = i.sample(r)).value), (r += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: r - 10,
                  ease: "linear",
                };
              })(t, u);
            (t = d.keyframes),
              (n = d.duration),
              (this.options.times = d.times),
              (this.options.ease = d.ease);
          }
          let c = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a,
              times: l,
            } = {}
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let u = (function t(e) {
              if (e) return iz(e) ? iK(e) : Array.isArray(e) ? e.map(t) : iX[e];
            })(a);
            return (
              Array.isArray(u) && (h.easing = u),
              t.animate(h, {
                delay: s,
                duration: n,
                easing: Array.isArray(u) ? "linear" : u,
                fill: "both",
                iterations: r + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(r.owner.current, o, t, { ...this.options, duration: n });
          return (
            (c.startTime = ef.now()),
            this.pendingTimeline
              ? ((c.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (c.onfinish = () => {
                  let { onComplete: i } = this.options;
                  r.set(ep(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            { animation: c, duration: n, keyframes: t }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return es(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return es(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = ei(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return t2.Z;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return t2.Z;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e, keyframes: i } = t;
          if ("idle" !== e.playState && "finished" !== e.playState) {
            if (this.time) {
              let {
                  motionValue: s,
                  onUpdate: n,
                  onComplete: r,
                  ...o
                } = this.options,
                a = new iY({ ...o, keyframes: i }),
                l = ei(this.time);
              s.setWithVelocity(a.sample(l - 10).value, a.sample(l).value, 10);
            }
            this.cancel();
          }
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: s,
            repeatType: n,
            damping: r,
            type: o,
          } = t;
          return (
            iZ() &&
            i &&
            iG.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !s &&
            "mirror" !== n &&
            0 !== r &&
            "inertia" !== o
          );
        }
      }
      let i_ =
        (t, e, i, s = {}, n, r) =>
        (o) => {
          let a = eh(s, t) || {},
            l = a.delay || s.delay || 0,
            { elapsed: h = 0 } = s;
          h -= ei(l);
          let u = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...a,
            delay: -h,
            onUpdate: (t) => {
              e.set(t), a.onUpdate && a.onUpdate(t);
            },
            onComplete: () => {
              o(), a.onComplete && a.onComplete();
            },
            name: t,
            motionValue: e,
            element: r ? void 0 : n,
          };
          !(function ({
            when: t,
            delay: e,
            delayChildren: i,
            staggerChildren: s,
            staggerDirection: n,
            repeat: r,
            repeatType: o,
            repeatDelay: a,
            from: l,
            elapsed: h,
            ...u
          }) {
            return !!Object.keys(u).length;
          })(a) && (u = { ...u, ...el(t, u) }),
            u.duration && (u.duration = ei(u.duration)),
            u.repeatDelay && (u.repeatDelay = ei(u.repeatDelay)),
            void 0 !== u.from && (u.keyframes[0] = u.from);
          let d = !1;
          if (
            (!1 === u.type && ((u.duration = 0), 0 === u.delay && (d = !0)),
            (ed.current || eu.c.skipAnimations) &&
              ((d = !0), (u.duration = 0), (u.delay = 0)),
            d && !r && void 0 !== e.get())
          ) {
            let c = ep(u.keyframes, a);
            if (void 0 !== c) {
              tU.Wi.update(() => {
                u.onUpdate(c), u.onComplete();
              });
              return;
            }
          }
          return !r && iq.supports(u) ? new iq(u) : new iY(u);
        };
      function iJ(t) {
        return Boolean(U(t) && t.add);
      }
      function iQ(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i0(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class i1 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return iQ(this.subscriptions, t), () => i0(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let i5 = (t) => !isNaN(parseFloat(t)),
        i2 = { current: void 0 };
      class i3 {
        constructor(t, e = {}) {
          (this.version = "11.0.20"),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = ef.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.canTrackVelocity = i5(this.current)),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t), (this.updatedAt = ef.now());
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new i1());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  tU.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return i2.current && i2.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = ef.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? t * (1e3 / i) : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function i6(t, e) {
        return new i3(t, e);
      }
      function i9(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        var r;
        let {
            transition: o = t.getDefaultTransition(),
            transitionEnd: a,
            ...l
          } = e,
          h = t.getValue("willChange");
        s && (o = s);
        let u = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let c in l) {
          let p = t.getValue(
              c,
              null !== (r = t.latestValues[c]) && void 0 !== r ? r : null
            ),
            f = l[c];
          if (
            void 0 === f ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
              })(d, c))
          )
            continue;
          let v = { delay: i, elapsed: 0, ...eh(o || {}, c) },
            g = !1;
          if (window.HandoffAppearAnimations) {
            let y = t.getProps()[m];
            if (y) {
              let x = window.HandoffAppearAnimations(y, c);
              null !== x && ((v.elapsed = x), (g = !0));
            }
          }
          p.start(
            i_(
              c,
              p,
              f,
              t.shouldReduceMotion && O.has(c) ? { type: !1 } : v,
              t,
              g
            )
          );
          let P = p.animation;
          P && (iJ(h) && (h.add(c), P.then(() => h.remove(c))), u.push(P));
        }
        return (
          a &&
            Promise.all(u).then(() => {
              tU.Wi.update(() => {
                a &&
                  (function (t, e) {
                    let i = ee(t, e),
                      {
                        transitionEnd: s = {},
                        transition: n = {},
                        ...r
                      } = i || {};
                    for (let o in (r = { ...r, ...s })) {
                      var a;
                      let l = tj(r[o]);
                      (a = o),
                        t.hasValue(a)
                          ? t.getValue(a).set(l)
                          : t.addValue(a, i6(l));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function i4(t, e, i = {}) {
        var s;
        let n = ee(
            t,
            e,
            "exit" === i.type
              ? null === (s = t.presenceContext) || void 0 === s
                ? void 0
                : s.custom
              : void 0
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let o = n ? () => Promise.all(i9(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = r;
                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * s,
                      l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                    return (
                      Array.from(t.variantChildren)
                        .sort(i8)
                        .forEach((t, s) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              i4(t, e, { ...r, delay: i + l(s) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, n + s, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = r;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [h, u] = "beforeChildren" === l ? [o, a] : [a, o];
          return h().then(() => u());
        }
      }
      function i8(t, e) {
        return t.sortNodePosition(e);
      }
      let i7 = [...w].reverse(),
        st = w.length;
      function se(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let si = 0,
        ss = (t, e) => Math.abs(t - e);
      class sn {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s,
            dragSnapToOrigin: n = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = sa(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    let i = ss(t.x, e.x),
                      s = ss(t.y, e.y);
                    return Math.sqrt(i ** 2 + s ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: s } = t,
                { timestamp: n } = tU.w0;
              this.history.push({ ...s, timestamp: n });
              let { onStart: r, onMove: o } = this.handlers;
              e ||
                (r && r(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = sr(e, this.transformPagePoint)),
                tU.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = sa(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : sr(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !tH(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = s || window);
          let r = tY(t),
            o = sr(r, this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = tU.w0;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: h } = e;
          h && h(t, sa(o, this.history)),
            (this.removeListeners = tZ(
              tK(this.contextWindow, "pointermove", this.handlePointerMove),
              tK(this.contextWindow, "pointerup", this.handlePointerUp),
              tK(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tU.Pn)(this.updatePoint);
        }
      }
      function sr(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function so(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function sa({ point: t }, e) {
        return {
          point: t,
          delta: so(t, sl(e)),
          offset: so(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              s = null,
              n = sl(t);
            for (
              ;
              i >= 0 && ((s = t[i]), !(n.timestamp - s.timestamp > ei(0.1)));

            )
              i--;
            if (!s) return { x: 0, y: 0 };
            let r = es(n.timestamp - s.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (n.x - s.x) / r, y: (n.y - s.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function sl(t) {
        return t[t.length - 1];
      }
      function sh(t) {
        return t.max - t.min;
      }
      function su(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function sd(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = iV(e.min, e.max, t.origin)),
          (t.scale = sh(i) / sh(e)),
          (su(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = iV(i.min, i.max, t.origin) - t.originPoint),
          (su(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function sc(t, e, i, s) {
        sd(t.x, e.x, i.x, s ? s.originX : void 0),
          sd(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function sp(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + sh(e));
      }
      function sm(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + sh(e));
      }
      function sf(t, e, i) {
        sm(t.x, e.x, i.x), sm(t.y, e.y, i.y);
      }
      function sv(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function sg(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function sy(t, e, i) {
        return { min: sx(t, e), max: sx(t, i) };
      }
      function sx(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let sP = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        sw = () => ({ x: sP(), y: sP() }),
        sT = () => ({ min: 0, max: 0 }),
        sb = () => ({ x: sT(), y: sT() });
      function sS(t) {
        return [t("x"), t("y")];
      }
      function sA({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      function sV(t) {
        return void 0 === t || 1 === t;
      }
      function sE({ scale: t, scaleX: e, scaleY: i }) {
        return !sV(t) || !sV(e) || !sV(i);
      }
      function sC(t) {
        return (
          sE(t) ||
          sM(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function sM(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function sk(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function sR(t, e = 0, i = 1, s, n) {
        (t.min = sk(t.min, e, i, s, n)), (t.max = sk(t.max, e, i, s, n));
      }
      function sD(t, { x: e, y: i }) {
        sR(t.x, e.translate, e.scale, e.originPoint),
          sR(t.y, i.translate, i.scale, i.originPoint);
      }
      function sB(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function sL(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function sF(t, e, [i, s, n]) {
        let r = void 0 !== e[n] ? e[n] : 0.5,
          o = iV(t.min, t.max, r);
        sR(t, e[i], e[s], o, e.scale);
      }
      let sj = ["x", "scaleX", "originX"],
        sO = ["y", "scaleY", "originY"];
      function sI(t, e) {
        sF(t.x, e, sj), sF(t.y, e, sO);
      }
      function sU(t, e) {
        return sA(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let sW = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        s$ = new WeakMap();
      class sN {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = sb()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let s = (t) => {
              let { dragSnapToOrigin: i } = this.getProps();
              i ? this.pauseAnimation() : this.stopAnimation(),
                e && this.snapToCursor(tY(t, "page").point);
            },
            n = (t, e) => {
              let {
                drag: i,
                dragPropagation: s,
                onDragStart: n,
              } = this.getProps();
              if (
                i &&
                !s &&
                (this.openGlobalLock && this.openGlobalLock(),
                (this.openGlobalLock = tJ(i)),
                !this.openGlobalLock)
              )
                return;
              (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                sS((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (tr.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let s = i.layout.layoutBox[t];
                      if (s) {
                        let n = sh(s);
                        e = n * (parseFloat(e) / 100);
                      }
                    }
                  }
                  this.originPoint[t] = e;
                }),
                n && n(t, e);
              let { animationState: r } = this.visualElement;
              r && r.setActive("whileDrag", !0);
            },
            r = (t, e) => {
              let {
                dragPropagation: i,
                dragDirectionLock: s,
                onDirectionLock: n,
                onDrag: r,
              } = this.getProps();
              if (!i && !this.openGlobalLock) return;
              let { offset: o } = e;
              if (s && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    n &&
                    n(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                r && r(t, e);
            },
            o = (t, e) => this.stop(t, e),
            a = () =>
              sS((t) => {
                var e;
                return (
                  "paused" === this.getAnimationState(t) &&
                  (null === (e = this.getAxisMotionValue(t).animation) ||
                  void 0 === e
                    ? void 0
                    : e.play())
                );
              }),
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new sn(
            t,
            {
              onSessionStart: s,
              onStart: n,
              onMove: r,
              onSessionEnd: o,
              resumeAnimation: a,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              contextWindow: sW(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: s } = e;
          this.startAnimation(s);
          let { onDragEnd: n } = this.getProps();
          n && n(t, e);
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !sH(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? iV(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? iV(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            n = this.constraints;
          e && y(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && s
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: sv(t.x, i, n), y: sv(t.y, e, s) };
              })(s.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: sy(t, "left", "right"), y: sy(t, "top", "bottom") }
              );
            })(i)),
            n !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              sS((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(s.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !y(e)) return !1;
          let s = e.current;
          (0, eg.k)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let r = (function (t, e, i) {
              let s = sU(t, i),
                { scroll: n } = e;
              return n && (sL(s.x, n.offset.x), sL(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: sg((t = n.layout.layoutBox).x, r.x), y: sg(t.y, r.y) };
          if (i) {
            let a = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!a), a && (o = sA(a));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = sS((o) => {
              if (!sH(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(i_(t, i, 0, e, this.visualElement));
        }
        stopAnimation() {
          sS((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          sS((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps(),
            s = i[e];
          return (
            s ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          sS((e) => {
            let { drag: i } = this.getProps();
            if (!sH(e, i, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (s && s.layout) {
              let { min: r, max: o } = s.layout.layoutBox[e];
              n.set(t[e] - iV(r, o, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!y(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          sS((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              s[t] = (function (t, e) {
                let i = 0.5,
                  s = sh(t),
                  n = sh(e);
                return (
                  n > s
                    ? (i = iA(e.min, e.max - s, t.min))
                    : s > n && (i = iA(t.min, t.max - n, e.min)),
                  Z(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            sS((e) => {
              if (!sH(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: r } = this.constraints[e];
              i.set(iV(n, r, s[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          s$.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = tK(t, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              y(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: s } = this.visualElement,
            n = s.addEventListener("measure", i);
          s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
            i();
          let r = tN(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = s.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (sS((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), e(), n(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function sH(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let sY = (t) => (e, i) => {
          t && t(e, i);
        },
        sz = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function sK(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let sX = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!to.test(t)) return t;
            t = parseFloat(t);
          }
          let i = sK(t, e.target.x),
            s = sK(t, e.target.y);
          return `${i}% ${s}%`;
        },
      };
      class sZ extends a.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          Object.assign(F, sq),
            n &&
              (e.group && e.group.add(n),
              i && i.register && s && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (sz.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            r = i.projection;
          return (
            r &&
              ((r.isPresent = n),
              s || t.layoutDependency !== e || void 0 === e
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? r.promote()
                  : r.relegate() ||
                    tU.Wi.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            v.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          s &&
            (s.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(s),
            i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function sG(t) {
        let [e, i] = (function () {
            let t = (0, a.useContext)(u.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: s } = t,
              n = (0, a.useId)();
            (0, a.useEffect)(() => s(n), []);
            let r = () => i && i(n);
            return !e && i ? [!1, r] : [!0];
          })(),
          s = (0, a.useContext)(k.p);
        return a.createElement(sZ, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, a.useContext)(R),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let sq = {
          borderRadius: {
            ...sX,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: sX,
          borderTopRightRadius: sX,
          borderBottomLeftRadius: sX,
          borderBottomRightRadius: sX,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let s = eJ.parse(t);
              if (s.length > 5) return t;
              let n = eJ.createTransformer(t),
                r = "number" != typeof s[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (s[0 + r] /= o), (s[1 + r] /= a);
              let l = iV(o, a, 0.5);
              return (
                "number" == typeof s[2 + r] && (s[2 + r] /= l),
                "number" == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
              );
            },
          },
        },
        s_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        sJ = s_.length,
        sQ = (t) => ("string" == typeof t ? parseFloat(t) : t),
        s0 = (t) => "number" == typeof t || to.test(t);
      function s1(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let s5 = s3(0, 0.5, ig),
        s2 = s3(0.5, 0.95, t2.Z);
      function s3(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(iA(t, e, s)));
      }
      function s6(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function s9(t, e) {
        s6(t.x, e.x), s6(t.y, e.y);
      }
      function s4(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function s8(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (tr.test(e)) {
            e = parseFloat(e);
            let a = iV(o.min, o.max, e / 100);
            e = a - o.min;
          }
          if ("number" != typeof e) return;
          let l = iV(r.min, r.max, s);
          t === r && (l -= e),
            (t.min = s4(t.min, e, i, l, n)),
            (t.max = s4(t.max, e, i, l, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let s7 = ["x", "scaleX", "originX"],
        nt = ["y", "scaleY", "originY"];
      function ne(t, e, i, s) {
        s8(t.x, e, s7, i ? i.x : void 0, s ? s.x : void 0),
          s8(t.y, e, nt, i ? i.y : void 0, s ? s.y : void 0);
      }
      function ni(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function ns(t) {
        return ni(t.x) && ni(t.y);
      }
      function nn(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function nr(t) {
        return sh(t.x) / sh(t.y);
      }
      class no {
        constructor() {
          this.members = [];
        }
        add(t) {
          iQ(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (i0(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let s = i; s >= 0; s--) {
            let n = this.members[s];
            if (!1 !== n.isPresent) {
              e = n;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function na(t, e, i) {
        let s = "",
          n = t.x.translate / e.x,
          r = t.y.translate / e.y;
        if (
          ((n || r) && (s = `translate3d(${n}px, ${r}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (s += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: o, rotateX: a, rotateY: l, skewX: h, skewY: u } = i;
          o && (s += `rotate(${o}deg) `),
            a && (s += `rotateX(${a}deg) `),
            l && (s += `rotateY(${l}deg) `),
            h && (s += `skewX(${h}deg) `),
            u && (s += `skewY(${u}deg) `);
        }
        let d = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return (1 !== d || 1 !== c) && (s += `scale(${d}, ${c})`), s || "none";
      }
      let nl = (t, e) => t.depth - e.depth;
      class nh {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          iQ(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          i0(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nl),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let nu = ["", "X", "Y", "Z"],
        nd = { visibility: "hidden" },
        nc = 0,
        np = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function nm(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      function nf({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nc++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (np.totalNodes =
                    np.resolvedTargetDeltas =
                    np.recalculatedProjection =
                      0),
                  this.nodes.forEach(ny),
                  this.nodes.forEach(nA),
                  this.nodes.forEach(nV),
                  this.nodes.forEach(nx),
                  window.MotionDebug && window.MotionDebug.record(np);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let s = 0; s < this.path.length; s++)
              this.path[s].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nh());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new i1()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: s, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || s) && (this.isLayoutDirty = !0),
              t)
            ) {
              let o;
              let a = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  o && o(),
                  (o = (function (t, e) {
                    let i = ef.now(),
                      s = ({ timestamp: n }) => {
                        let r = n - i;
                        r >= e && ((0, tU.Pn)(s), t(r - e));
                      };
                    return tU.Wi.read(s, !0), () => (0, tU.Pn)(s);
                  })(a, 250)),
                  sz.hasAnimatedSinceResize &&
                    ((sz.hasAnimatedSinceResize = !1), this.nodes.forEach(nS));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                r &&
                (s || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        nD,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = r.getProps(),
                      l = !this.targetLayout || !nn(this.targetLayout, s) || i,
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h);
                      let u = { ...eh(n, "layout"), onPlay: o, onComplete: a };
                      (r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((u.delay = 0), (u.type = !1)),
                        this.startAnimation(u);
                    } else
                      e || nS(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tU.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nE),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let i = this.path[e];
              (i.shouldResetTransform = !0),
                i.updateScroll("snapshot"),
                i.options.layoutRoot && i.willUpdate(!1);
            }
            let { layoutId: s, layout: n } = this.options;
            if (void 0 === s && !n) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nw);
              return;
            }
            this.isUpdating || this.nodes.forEach(nT),
              (this.isUpdating = !1),
              window.HandoffCancelAllAnimations &&
                window.HandoffCancelAllAnimations(),
              this.nodes.forEach(nb),
              this.nodes.forEach(nv),
              this.nodes.forEach(ng),
              this.clearAllSnapshots();
            let e = ef.now();
            (tU.w0.delta = Z(0, 1e3 / 60, e - tU.w0.timestamp)),
              (tU.w0.timestamp = e),
              (tU.w0.isProcessing = !0),
              tU.S6.update.process(tU.w0),
              tU.S6.preRender.process(tU.w0),
              tU.S6.render.process(tU.w0),
              (tU.w0.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), v.read(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nP), this.sharedNodes.forEach(nC);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tU.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tU.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let i = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = sb()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: s } = this.options;
            s &&
              s.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                i ? i.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: s(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!n) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !ns(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              (e || sC(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              nF((e = s).x),
              nF(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return sb();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (sL(e.x, i.offset.x), sL(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = sb();
            s9(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: n, options: r } = s;
              if (s !== this.root && n && r.layoutScroll) {
                if (n.isRoot) {
                  s9(e, t);
                  let { scroll: o } = this.root;
                  o && (sL(e.x, -o.offset.x), sL(e.y, -o.offset.y));
                }
                sL(e.x, n.offset.x), sL(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = sb();
            s9(i, t);
            for (let s = 0; s < this.path.length; s++) {
              let n = this.path[s];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                sI(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                sC(n.latestValues) && sI(i, n.latestValues);
            }
            return sC(this.latestValues) && sI(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = sb();
            s9(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i];
              if (!s.instance || !sC(s.latestValues)) continue;
              sE(s.latestValues) && s.updateSnapshot();
              let n = sb(),
                r = s.measurePageBox();
              s9(n, r),
                ne(
                  e,
                  s.latestValues,
                  s.snapshot ? s.snapshot.layoutBox : void 0,
                  n
                );
            }
            return sC(this.latestValues) && ne(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tU.w0.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, s, n;
            let r = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = r.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = r.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = r.isSharedProjectionDirty);
            let o = Boolean(this.resumingFrom) || this !== r,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: h } = this.options;
            if (this.layout && (l || h)) {
              if (
                ((this.resolvedRelativeTargetAt = tU.w0.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let u = this.getClosestProjectingParent();
                u && u.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = u),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = sb()),
                    (this.relativeTargetOrigin = sb()),
                    sf(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      u.layout.layoutBox
                    ),
                    s9(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = sb()), (this.targetWithTransforms = sb())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (s = this.relativeTarget),
                      (n = this.relativeParent.target),
                      sp(i.x, s.x, n.x),
                      sp(i.y, s.y, n.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom)
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : s9(this.target, this.layout.layoutBox),
                      sD(this.target, this.targetDelta))
                    : s9(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let d = this.getClosestProjectingParent();
                  d &&
                  Boolean(d.resumingFrom) === Boolean(this.resumingFrom) &&
                  !d.options.layoutScroll &&
                  d.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = d),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = sb()),
                      (this.relativeTargetOrigin = sb()),
                      sf(this.relativeTargetOrigin, this.target, d.target),
                      s9(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                np.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              sE(this.parent.latestValues) ||
              sM(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return Boolean(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
                this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== e,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (s = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === tU.w0.timestamp && (s = !1),
              s)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = Boolean(
                (this.parent && this.parent.isTreeAnimating) ||
                  this.currentAnimation ||
                  this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            s9(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let l = n.instance;
                  (!l || !l.style || "contents" !== l.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      sI(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), sD(t, r)),
                    s && sC(n.latestValues) && sI(t, n.latestValues));
                }
                (e.x = sB(e.x)), (e.y = sB(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = sb()));
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = sw()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = sw()),
              (this.projectionDeltaWithTransform = sw()));
            let h = this.projectionTransform;
            sc(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = na(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== h ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              np.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let s = this.snapshot,
              n = s ? s.latestValues : {},
              r = { ...this.latestValues },
              o = sw();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = sb(),
              l = s ? s.source : void 0,
              h = this.layout ? this.layout.source : void 0,
              u = l !== h,
              d = this.getStack(),
              c = !d || d.members.length <= 1,
              p = Boolean(
                u && !c && !0 === this.options.crossfade && !this.path.some(nR)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let s = e / 1e3;
                if (
                  (nM(o.x, t.x, s),
                  nM(o.y, t.y, s),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, h, d, m;
                  sf(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (d = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    nk(d.x, m.x, a.x, s),
                    nk(d.y, m.y, a.y, s),
                    i &&
                      ((l = this.relativeTarget),
                      (h = i),
                      l.x.min === h.x.min &&
                        l.x.max === h.x.max &&
                        l.y.min === h.y.min &&
                        l.y.max === h.y.max) &&
                      (this.isProjectionDirty = !1),
                    i || (i = sb()),
                    s9(i, this.relativeTarget);
                }
                u &&
                  ((this.animationValues = r),
                  (function (t, e, i, s, n, r) {
                    n
                      ? ((t.opacity = iV(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s5(s)
                        )),
                        (t.opacityExit = iV(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          s2(s)
                        )))
                      : r &&
                        (t.opacity = iV(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          s
                        ));
                    for (let o = 0; o < sJ; o++) {
                      let a = `border${s_[o]}Radius`,
                        l = s1(e, a),
                        h = s1(i, a);
                      if (void 0 === l && void 0 === h) continue;
                      l || (l = 0), h || (h = 0);
                      let u = 0 === l || 0 === h || s0(l) === s0(h);
                      u
                        ? ((t[a] = Math.max(iV(sQ(l), sQ(h), s), 0)),
                          (tr.test(h) || tr.test(l)) && (t[a] += "%"))
                        : (t[a] = h);
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = iV(e.rotate || 0, i.rotate || 0, s));
                  })(r, n, this.latestValues, s, p, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tU.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tU.Wi.update(() => {
                (sz.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let s = U(t) ? t : i6(t);
                    return s.start(i_("", s, 1e3, i)), s.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: s,
                latestValues: n,
              } = t;
            if (e && i && s) {
              if (
                this !== t &&
                this.layout &&
                s &&
                nj(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                i = this.target || sb();
                let r = sh(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + r);
                let o = sh(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + o);
              }
              s9(e, i),
                sI(e, n),
                sc(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new no());
            let i = this.sharedNodes.get(t);
            i.add(e);
            let s = e.options.initialPromotionConfig;
            e.promote({
              transition: s ? s.transition : void 0,
              preserveFollowOpacity:
                s && s.shouldPreserveFollowOpacity
                  ? s.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            for (let n = 0; n < nu.length; n++)
              nm(`rotate${nu[n]}`, t, s, this.animationValues),
                nm(`skew${nu[n]}`, t, s, this.animationValues);
            for (let r in (t.render(), s))
              t.setStaticValue(r, s[r]),
                this.animationValues && (this.animationValues[r] = s[r]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nd;
            let s = { visibility: "" },
              n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  tO(null == t ? void 0 : t.pointerEvents) || ""),
                (s.transform = n ? n(this.latestValues, "") : "none"),
                s
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let o = {};
              return (
                this.options.layoutId &&
                  ((o.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (o.pointerEvents =
                    tO(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !sC(this.latestValues) &&
                  ((o.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                o
              );
            }
            let a = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = na(
                this.projectionDeltaWithTransform,
                this.treeScale,
                a
              )),
              n && (s.transform = n(a, s.transform));
            let { x: l, y: h } = this.projectionDelta;
            for (let u in ((s.transformOrigin = `${100 * l.origin}% ${
              100 * h.origin
            }% 0`),
            r.animationValues
              ? (s.opacity =
                  r === this
                    ? null !==
                        (i =
                          null !== (e = a.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : a.opacityExit)
              : (s.opacity =
                  r === this
                    ? void 0 !== a.opacity
                      ? a.opacity
                      : ""
                    : void 0 !== a.opacityExit
                    ? a.opacityExit
                    : 0),
            F)) {
              if (void 0 === a[u]) continue;
              let { correct: d, applyTo: c } = F[u],
                p = "none" === s.transform ? a[u] : d(a[u], r);
              if (c) {
                let m = c.length;
                for (let f = 0; f < m; f++) s[c[f]] = p;
              } else s[u] = p;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  r === this
                    ? tO(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nw),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nv(t) {
        t.updateLayout();
      }
      function ng(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: s, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            o = i.source !== t.layout.source;
          "size" === r
            ? sS((t) => {
                let e = o ? i.measuredBox[t] : i.layoutBox[t],
                  n = sh(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : nj(r, i.layoutBox, s) &&
              sS((e) => {
                let n = o ? i.measuredBox[e] : i.layoutBox[e],
                  r = sh(s[e]);
                (n.max = n.min + r),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[e].max = t.relativeTarget[e].min + r));
              });
          let a = sw();
          sc(a, s, i.layoutBox);
          let l = sw();
          o
            ? sc(l, t.applyTransform(n, !0), i.measuredBox)
            : sc(l, s, i.layoutBox);
          let h = !ns(a),
            u = !1;
          if (!t.resumeFrom) {
            let d = t.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
              let { snapshot: c, layout: p } = d;
              if (c && p) {
                let m = sb();
                sf(m, i.layoutBox, c.layoutBox);
                let f = sb();
                sf(f, s, p.layoutBox),
                  nn(m, f) || (u = !0),
                  d.options.layoutRoot &&
                    ((t.relativeTarget = f),
                    (t.relativeTargetOrigin = m),
                    (t.relativeParent = d));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: s,
            snapshot: i,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: h,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: v } = t.options;
          v && v();
        }
        t.options.transition = void 0;
      }
      function ny(t) {
        np.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = Boolean(
                t.isProjectionDirty ||
                  t.parent.isProjectionDirty ||
                  t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nx(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nP(t) {
        t.clearSnapshot();
      }
      function nw(t) {
        t.clearMeasurements();
      }
      function nT(t) {
        t.isLayoutDirty = !1;
      }
      function nb(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nS(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function nA(t) {
        t.resolveTargetDelta();
      }
      function nV(t) {
        t.calcProjection();
      }
      function nE(t) {
        t.resetSkewAndRotation();
      }
      function nC(t) {
        t.removeLeadSnapshot();
      }
      function nM(t, e, i) {
        (t.translate = iV(e.translate, 0, i)),
          (t.scale = iV(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function nk(t, e, i, s) {
        (t.min = iV(e.min, i.min, s)), (t.max = iV(e.max, i.max, s));
      }
      function nR(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let nD = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nB = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nL = nB("applewebkit/") && !nB("chrome/") ? Math.round : t2.Z;
      function nF(t) {
        (t.min = nL(t.min)), (t.max = nL(t.max));
      }
      function nj(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !su(nr(e), nr(i), 0.2))
        );
      }
      let nO = nf({
          attachResizeListener: (t, e) => tN(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nI = { current: void 0 },
        nU = nf({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nI.current) {
              let t = new nO({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nI.current = t);
            }
            return nI.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            Boolean("fixed" === window.getComputedStyle(t).position),
        }),
        nW = { current: null },
        n$ = { current: !1 },
        nN = new WeakMap(),
        nH = [...eM, eY, eJ],
        nY = (t) => nH.find(eC(t)),
        nz = Object.keys(E),
        nK = nz.length,
        nX = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        nZ = T.length;
      class nG {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: r,
          },
          o = {}
        ) {
          (this.resolveKeyframes = (t, e, i, s) =>
            new this.KeyframeResolver(t, e, i, s, this)),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = ej),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tU.Wi.render(this.render, !1, !0));
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = o),
            (this.blockInitialAnimation = Boolean(n)),
            (this.isControllingVariants = b(e)),
            (this.isVariantNode = S(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = Boolean(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let d in u) {
            let c = u[d];
            void 0 !== a[d] && U(c) && (c.set(a[d], !1), iJ(h) && h.add(d));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            nN.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            n$.current ||
              (function () {
                if (((n$.current = !0), M.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (nW.current = t.matches);
                    t.addListener(e), e();
                  } else nW.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || nW.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (nN.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tU.Pn)(this.notifyUpdate),
          (0, tU.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = O.has(t),
            s = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tU.Wi.preRender(this.notifyUpdate),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            s(), n(), e.owner && e.stop();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, s, n) {
          let r, o;
          for (let a = 0; a < nK; a++) {
            let l = nz[a],
              {
                isEnabled: h,
                Feature: u,
                ProjectionNode: d,
                MeasureLayout: c,
              } = E[l];
            d && (r = d),
              h(e) &&
                (!this.features[l] && u && (this.features[l] = new u(this)),
                c && (o = c));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            r
          ) {
            this.projection = new r(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: p,
              layout: m,
              drag: f,
              dragConstraints: v,
              layoutScroll: g,
              layoutRoot: x,
            } = e;
            this.projection.setOptions({
              layoutId: p,
              layout: m,
              alwaysMeasureLayout: Boolean(f) || (v && y(v)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof m ? m : "both",
              initialPromotionConfig: n,
              layoutScroll: g,
              layoutRoot: x,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : sb();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let i = 0; i < nX.length; i++) {
            let s = nX[i];
            this.propEventSubscriptions[s] &&
              (this.propEventSubscriptions[s](),
              delete this.propEventSubscriptions[s]);
            let n = t["on" + s];
            n && (this.propEventSubscriptions[s] = this.on(s, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: s } = e;
            for (let n in e) {
              let r = e[n],
                o = i[n];
              if (U(r)) t.addValue(n, r), iJ(s) && s.add(n);
              else if (U(o))
                t.addValue(n, i6(r, { owner: t })), iJ(s) && s.remove(n);
              else if (o !== r) {
                if (t.hasValue(n)) {
                  let a = t.getValue(n);
                  a.hasAnimated || a.set(r);
                } else {
                  let l = t.getStaticValue(n);
                  t.addValue(n, i6(void 0 !== l ? l : r, { owner: t }));
                }
              }
            }
            for (let h in i) void 0 === e[h] && t.removeValue(h);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let i = {};
          for (let s = 0; s < nZ; s++) {
            let n = T[s],
              r = this.props[n];
            (x(r) || !1 === r) && (i[n] = r);
          }
          return i;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = i6(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let s =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != s &&
              ("string" == typeof s && (ey(s) || ev(s))
                ? (s = parseFloat(s))
                : !nY(s) && eJ.test(e) && (s = e6(t, e)),
              this.setBaseTarget(t, U(s) ? s.get() : s)),
            U(s) ? s.get() : s
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e, i;
          let { initial: s } = this.props,
            n =
              "string" == typeof s || "object" == typeof s
                ? null ===
                    (i = tD(
                      this.props,
                      s,
                      null === (e = this.presenceContext) || void 0 === e
                        ? void 0
                        : e.custom
                    )) || void 0 === i
                  ? void 0
                  : i[t]
                : void 0;
          if (s && void 0 !== n) return n;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || U(r)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new i1()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class nq extends nG {
        constructor() {
          super(...arguments), (this.KeyframeResolver = e9);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class n_ extends nq {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(t, e) {
          if (O.has(e)) {
            let i = e3(e);
            return (i && i.default) || 0;
          }
          {
            let s = window.getComputedStyle(t),
              n = (H(e) ? s.getPropertyValue(e) : s[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return sU(t, e);
        }
        build(t, e, i, s) {
          tc(t, e, i, s.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tk(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          U(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, s) {
          tE(t, e, i, s);
        }
      }
      class nJ extends nq {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (O.has(e)) {
            let i = e3(e);
            return (i && i.default) || 0;
          }
          return (e = tC.has(e) ? e : p(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return sb();
        }
        scrapeMotionValuesFromProps(t, e) {
          return tR(t, e);
        }
        build(t, e, i, s) {
          tb(t, e, i, this.isSVGTag, s.transformTemplate);
        }
        renderInstance(t, e, i, s) {
          tM(t, e, i, s);
        }
        mount(t) {
          (this.isSVGTag = tA(t.tagName)), super.mount(t);
        }
      }
      let nQ = (t, e) =>
          L(t)
            ? new nJ(e, { enableHardwareAcceleration: !1 })
            : new n_(e, { enableHardwareAcceleration: !0 }),
        n0 = {
          animation: {
            Feature: class extends t0 {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: i }) =>
                              (function (t, e, i = {}) {
                                let s;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let n = e.map((e) => i4(t, e, i));
                                  s = Promise.all(n);
                                } else if ("string" == typeof e)
                                  s = i4(t, e, i);
                                else {
                                  let r =
                                    "function" == typeof e
                                      ? ee(t, e, i.custom)
                                      : e;
                                  s = Promise.all(i9(t, r, i));
                                }
                                return s.then(() => {
                                  tU.Wi.postRender(() => {
                                    t.notify("AnimationComplete", e);
                                  });
                                });
                              })(t, e, i)
                            )
                          ),
                        i = {
                          animate: se(!0),
                          whileInView: se(),
                          whileHover: se(),
                          whileTap: se(),
                          whileDrag: se(),
                          whileFocus: se(),
                          exit: se(),
                        },
                        s = !0,
                        n = (e) => (i, s) => {
                          var n;
                          let r = ee(
                            t,
                            s,
                            "exit" === e
                              ? null === (n = t.presenceContext) || void 0 === n
                                ? void 0
                                : n.custom
                              : void 0
                          );
                          if (r) {
                            let { transition: o, transitionEnd: a, ...l } = r;
                            i = { ...i, ...l, ...a };
                          }
                          return i;
                        };
                      function r(r) {
                        let o = t.getProps(),
                          a = t.getVariantContext(!0) || {},
                          l = [],
                          h = new Set(),
                          u = {},
                          d = 1 / 0;
                        for (let c = 0; c < st; c++) {
                          var p;
                          let m = i7[c],
                            f = i[m],
                            v = void 0 !== o[m] ? o[m] : a[m],
                            g = x(v),
                            y = m === r ? f.isActive : null;
                          !1 === y && (d = c);
                          let w = v === a[m] && v !== o[m] && g;
                          if (
                            (w && s && t.manuallyAnimateOnMount && (w = !1),
                            (f.protectedKeys = { ...u }),
                            (!f.isActive && null === y) ||
                              (!v && !f.prevProp) ||
                              P(v) ||
                              "boolean" == typeof v)
                          )
                            continue;
                          let T =
                              ((p = f.prevProp),
                              "string" == typeof v
                                ? v !== p
                                : !!Array.isArray(v) && !et(v, p)),
                            b =
                              T ||
                              (m === r && f.isActive && !w && g) ||
                              (c > d && g),
                            S = !1,
                            A = Array.isArray(v) ? v : [v],
                            V = A.reduce(n(m), {});
                          !1 === y && (V = {});
                          let { prevResolvedValues: E = {} } = f,
                            C = { ...E, ...V },
                            M = (t) => {
                              (b = !0),
                                h.has(t) && ((S = !0), h.delete(t)),
                                (f.needsAnimating[t] = !0);
                            };
                          for (let k in C) {
                            let R = V[k],
                              D = E[k];
                            if (!u.hasOwnProperty(k))
                              (tL(R) && tL(D) ? et(R, D) : R === D)
                                ? void 0 !== R && h.has(k)
                                  ? M(k)
                                  : (f.protectedKeys[k] = !0)
                                : null != R
                                ? M(k)
                                : h.add(k);
                          }
                          (f.prevProp = v),
                            (f.prevResolvedValues = V),
                            f.isActive && (u = { ...u, ...V }),
                            s && t.blockInitialAnimation && (b = !1),
                            b &&
                              (!w || S) &&
                              l.push(
                                ...A.map((t) => ({
                                  animation: t,
                                  options: { type: m },
                                }))
                              );
                        }
                        if (h.size) {
                          let B = {};
                          h.forEach((e) => {
                            let i = t.getBaseTarget(e);
                            B[e] = void 0 === i ? null : i;
                          }),
                            l.push({ animation: B });
                        }
                        let L = Boolean(l.length);
                        return (
                          s &&
                            (!1 === o.initial || o.initial === o.animate) &&
                            !t.manuallyAnimateOnMount &&
                            (L = !1),
                          (s = !1),
                          L ? e(l) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: r,
                        setActive: function (e, s) {
                          var n;
                          if (i[e].isActive === s) return Promise.resolve();
                          null === (n = t.variantChildren) ||
                            void 0 === n ||
                            n.forEach((t) => {
                              var i;
                              return null === (i = t.animationState) ||
                                void 0 === i
                                ? void 0
                                : i.setActive(e, s);
                            }),
                            (i[e].isActive = s);
                          let o = r(e);
                          for (let a in i) i[a].protectedKeys = {};
                          return o;
                        },
                        setAnimateFunction: function (i) {
                          e = i(t);
                        },
                        getState: () => i,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(), P(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends t0 {
              constructor() {
                super(...arguments), (this.id = si++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let { isPresent: t, onExitComplete: e } =
                    this.node.presenceContext,
                  { isPresent: i } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === i) return;
                let s = this.node.animationState.setActive("exit", !t);
                e && !t && s.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends t0 {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: i, amount: s = "some", once: n } = t,
                  r = {
                    root: e ? e.current : void 0,
                    rootMargin: i,
                    threshold: "number" == typeof s ? s : t7[s],
                  },
                  o = (t) => {
                    let { isIntersecting: e } = t;
                    if (
                      this.isInView === e ||
                      ((this.isInView = e), n && !e && this.hasEnteredView)
                    )
                      return;
                    e && (this.hasEnteredView = !0),
                      this.node.animationState &&
                        this.node.animationState.setActive("whileInView", e);
                    let { onViewportEnter: i, onViewportLeave: s } =
                        this.node.getProps(),
                      r = e ? i : s;
                    r && r(t);
                  };
                return (function (t, e, i) {
                  let s = (function ({ root: t, ...e }) {
                    let i = t || document;
                    t9.has(i) || t9.set(i, {});
                    let s = t9.get(i),
                      n = JSON.stringify(e);
                    return (
                      s[n] ||
                        (s[n] = new IntersectionObserver(t8, {
                          root: t,
                          ...e,
                        })),
                      s[n]
                    );
                  })(e);
                  return (
                    t6.set(t, i),
                    s.observe(t),
                    () => {
                      t6.delete(t), s.unobserve(t);
                    }
                  );
                })(this.node.current, r, o);
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  i = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  );
                i && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends t0 {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = t2.Z),
                  (this.removeEndListeners = t2.Z),
                  (this.removeAccessibleListeners = t2.Z),
                  (this.startPointerPress = (t, e) => {
                    if (this.isPressing) return;
                    this.removeEndListeners();
                    let i = this.node.getProps(),
                      s = (t, e) => {
                        if (!this.checkPressEnd()) return;
                        let {
                          onTap: i,
                          onTapCancel: s,
                          globalTapTarget: n,
                        } = this.node.getProps();
                        n || t5(this.node.current, t.target)
                          ? i && i(t, e)
                          : s && s(t, e);
                      },
                      n = tK(window, "pointerup", s, {
                        passive: !(i.onTap || i.onPointerUp),
                      }),
                      r = tK(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(i.onTapCancel || i.onPointerCancel) }
                      );
                    (this.removeEndListeners = tZ(n, r)), this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = (t) => {
                        if ("Enter" !== t.key || this.isPressing) return;
                        let e = (t) => {
                          "Enter" === t.key &&
                            this.checkPressEnd() &&
                            t3("up", (t, e) => {
                              let { onTap: i } = this.node.getProps();
                              i && i(t, e);
                            });
                        };
                        this.removeEndListeners(),
                          (this.removeEndListeners = tN(
                            this.node.current,
                            "keyup",
                            e
                          )),
                          t3("down", (t, e) => {
                            this.startPress(t, e);
                          });
                      },
                      e = tN(this.node.current, "keydown", t),
                      i = () => {
                        this.isPressing &&
                          t3("cancel", (t, e) => this.cancelPress(t, e));
                      },
                      s = tN(this.node.current, "blur", i);
                    this.removeAccessibleListeners = tZ(e, s);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: i, whileTap: s } = this.node.getProps();
                s &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  i && i(t, e);
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !tQ()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: i } = this.node.getProps();
                i && i(t, e);
              }
              mount() {
                let t = this.node.getProps(),
                  e = tK(
                    t.globalTapTarget ? window : this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  i = tN(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = tZ(e, i);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends t0 {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = tZ(
                  tN(this.node.current, "focus", () => this.onFocus()),
                  tN(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends t0 {
              mount() {
                this.unmount = tZ(t1(this.node, !0), t1(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends t0 {
              constructor() {
                super(...arguments), (this.removePointerDownListener = t2.Z);
              }
              onPointerDown(t) {
                this.session = new sn(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                  contextWindow: sW(this.node),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: i,
                  onPanEnd: s,
                } = this.node.getProps();
                return {
                  onSessionStart: sY(t),
                  onStart: sY(e),
                  onMove: i,
                  onEnd: (t, e) => {
                    delete this.session, s && s(t, e);
                  },
                };
              }
              mount() {
                this.removePointerDownListener = tK(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends t0 {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = t2.Z),
                  (this.removeListeners = t2.Z),
                  (this.controls = new sN(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || t2.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: nU,
            MeasureLayout: sG,
          },
          layout: { ProjectionNode: nU, MeasureLayout: sG },
        },
        n1 = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: s,
              Component: n,
            }) {
              t &&
                (function (t) {
                  for (let e in t) E[e] = { ...E[e], ...t[e] };
                })(t);
              let r = (0, a.forwardRef)(function (r, o) {
                var p, f;
                let g;
                let P = {
                    ...(0, a.useContext)(l._),
                    ...r,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, a.useContext)(k.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(r),
                  },
                  { isStatic: w } = P,
                  T = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (b(t)) {
                        let { initial: i, animate: s } = t;
                        return {
                          initial: !1 === i || x(i) ? i : void 0,
                          animate: x(s) ? s : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, a.useContext)(h));
                    return (0, a.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [A(e), A(i)]
                    );
                  })(r),
                  S = s(r, w);
                if (!w && M.j) {
                  T.visualElement = (function (t, e, i, s) {
                    let { visualElement: n } = (0, a.useContext)(h),
                      r = (0, a.useContext)(c),
                      o = (0, a.useContext)(u.O),
                      p = (0, a.useContext)(l._).reducedMotion,
                      f = (0, a.useRef)();
                    (s = s || r.renderer),
                      !f.current &&
                        s &&
                        (f.current = s(t, {
                          visualState: e,
                          parent: n,
                          props: i,
                          presenceContext: o,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: p,
                        }));
                    let g = f.current;
                    (0, a.useInsertionEffect)(() => {
                      g && g.update(i, o);
                    });
                    let y = (0, a.useRef)(
                      Boolean(i[m] && !window.HandoffComplete)
                    );
                    return (
                      (0, d.L)(() => {
                        g &&
                          (v.postRender(g.render),
                          y.current &&
                            g.animationState &&
                            g.animationState.animateChanges());
                      }),
                      (0, a.useEffect)(() => {
                        g &&
                          (g.updateFeatures(),
                          !y.current &&
                            g.animationState &&
                            g.animationState.animateChanges(),
                          y.current &&
                            ((y.current = !1), (window.HandoffComplete = !0)));
                      }),
                      g
                    );
                  })(n, S, P, e);
                  let V = (0, a.useContext)(R),
                    E = (0, a.useContext)(c).strict;
                  T.visualElement &&
                    (g = T.visualElement.loadFeatures(P, E, t, V));
                }
                return a.createElement(
                  h.Provider,
                  { value: T },
                  g && T.visualElement
                    ? a.createElement(g, {
                        visualElement: T.visualElement,
                        ...P,
                      })
                    : null,
                  i(
                    n,
                    r,
                    ((p = T.visualElement),
                    (f = o),
                    (0, a.useCallback)(
                      (t) => {
                        t && S.mount && S.mount(t),
                          p && (t ? p.mount(t) : p.unmount()),
                          f &&
                            ("function" == typeof f
                              ? f(t)
                              : y(f) && (f.current = t));
                      },
                      [p]
                    )),
                    S,
                    w,
                    T.visualElement
                  )
                );
              });
              return (r[D] = n), r;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, s) => (i.has(s) || i.set(s, e(s)), i.get(s)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, s) {
            let n = L(t) ? tW : t$;
            return {
              ...n,
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                let e = (e, i, s, { latestValues: n }, r) => {
                  let o = L(e) ? tV : tf,
                    l = o(i, n, r, e),
                    h = (function (t, e, i) {
                      let s = {};
                      for (let n in t)
                        ("values" !== n || "object" != typeof t.values) &&
                          (ty(n) ||
                            (!0 === i && tg(n)) ||
                            (!e && !tg(n)) ||
                            (t.draggable && n.startsWith("onDrag"))) &&
                          (s[n] = t[n]);
                      return s;
                    })(i, "string" == typeof e, t),
                    u = e !== a.Fragment ? { ...h, ...l, ref: s } : {},
                    { children: d } = i,
                    c = (0, a.useMemo)(() => (U(d) ? d.get() : d), [d]);
                  return (0, a.createElement)(e, { ...u, children: c });
                };
                return e;
              })(e),
              createVisualElement: s,
              Component: t,
            };
          })(t, e, n0, nQ)
        );
    },
  },
]);
