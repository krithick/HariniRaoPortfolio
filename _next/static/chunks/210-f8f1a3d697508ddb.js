(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [210],
  {
    227: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, o, n) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1551: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = o(2648).Z,
        r = o(7273).Z,
        l = n(o(7294)),
        a = o(1003),
        u = o(7795),
        f = o(4465),
        c = o(2692),
        i = o(8245),
        s = o(9246),
        p = o(227),
        d = o(3468);
      let y = new Set();
      function h(e, t, o, n) {
        if (a.isLocalURL(t)) {
          if (!n.bypassPrefetchedCheck) {
            let r =
                void 0 !== n.locale
                  ? n.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              l = t + "%" + o + "%" + r;
            if (y.has(l)) return;
            y.add(l);
          }
          Promise.resolve(e.prefetch(t, o, n)).catch((e) => {});
        }
      }
      function v(e) {
        return "string" == typeof e ? e : u.formatUrl(e);
      }
      let b = l.default.forwardRef(function (e, t) {
        let o, n;
        let {
            href: u,
            as: y,
            children: b,
            prefetch: _,
            passHref: g,
            replace: m,
            shallow: C,
            scroll: O,
            locale: E,
            onClick: k,
            onMouseEnter: M,
            onTouchStart: P,
            legacyBehavior: T = !1,
          } = e,
          j = r(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (o = b),
          T &&
            ("string" == typeof o || "number" == typeof o) &&
            (o = l.default.createElement("a", null, o));
        let x = !1 !== _,
          R = l.default.useContext(c.RouterContext),
          S = l.default.useContext(i.AppRouterContext),
          I = null != R ? R : S,
          L = !R,
          { href: w, as: D } = l.default.useMemo(() => {
            if (!R) {
              let e = v(u);
              return { href: e, as: y ? v(y) : e };
            }
            let [t, o] = a.resolveHref(R, u, !0);
            return { href: t, as: y ? a.resolveHref(R, y) : o || t };
          }, [R, u, y]),
          U = l.default.useRef(w),
          N = l.default.useRef(D);
        T && (n = l.default.Children.only(o));
        let H = T ? n && "object" == typeof n && n.ref : t,
          [K, A, B] = s.useIntersection({ rootMargin: "200px" }),
          W = l.default.useCallback(
            (e) => {
              (N.current !== D || U.current !== w) &&
                (B(), (N.current = D), (U.current = w)),
                K(e),
                H &&
                  ("function" == typeof H
                    ? H(e)
                    : "object" == typeof H && (H.current = e));
            },
            [D, H, w, B, K]
          );
        l.default.useEffect(() => {
          I && A && x && h(I, w, D, { locale: E });
        }, [D, w, A, E, x, null == R ? void 0 : R.locale, I]);
        let q = {
          ref: W,
          onClick(e) {
            T || "function" != typeof k || k(e),
              T &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              I &&
                !e.defaultPrevented &&
                (function (e, t, o, n, r, u, f, c, i, s) {
                  let { nodeName: p } = e.currentTarget,
                    d = "A" === p.toUpperCase();
                  if (
                    d &&
                    ((function (e) {
                      let { target: t } = e.currentTarget;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !a.isLocalURL(o))
                  )
                    return;
                  e.preventDefault();
                  let y = () => {
                    "beforePopState" in t
                      ? t[r ? "replace" : "push"](o, n, {
                          shallow: u,
                          locale: c,
                          scroll: f,
                        })
                      : t[r ? "replace" : "push"](n || o, {
                          forceOptimisticNavigation: !s,
                        });
                  };
                  i ? l.default.startTransition(y) : y();
                })(e, I, w, D, m, C, O, E, L, x);
          },
          onMouseEnter(e) {
            T || "function" != typeof M || M(e),
              T &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              I &&
                (x || !L) &&
                h(I, w, D, {
                  locale: E,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(e) {
            T || "function" != typeof P || P(e),
              T &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              I &&
                (x || !L) &&
                h(I, w, D, {
                  locale: E,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!T || g || ("a" === n.type && !("href" in n.props))) {
          let Z = void 0 !== E ? E : null == R ? void 0 : R.locale,
            z =
              (null == R ? void 0 : R.isLocaleDomain) &&
              p.getDomainLocale(
                D,
                Z,
                null == R ? void 0 : R.locales,
                null == R ? void 0 : R.domainLocales
              );
          q.href =
            z ||
            d.addBasePath(
              f.addLocale(D, Z, null == R ? void 0 : R.defaultLocale)
            );
        }
        return T
          ? l.default.cloneElement(n, q)
          : l.default.createElement("a", Object.assign({}, j, q), o);
      });
      (t.default = b),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9246: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: o, disabled: f } = e,
            c = f || !l,
            [i, s] = n.useState(!1),
            [p, d] = n.useState(null);
          n.useEffect(() => {
            if (l) {
              if (!c && !i && p && p.tagName) {
                let e = (function (e, t, o) {
                  let {
                    id: n,
                    observer: r,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let o = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = u.find(
                        (e) => e.root === o.root && e.margin === o.margin
                      );
                    if (n && (t = a.get(n))) return t;
                    let r = new Map(),
                      l = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = r.get(e.target),
                            o = e.isIntersecting || e.intersectionRatio > 0;
                          t && o && t(o);
                        });
                      }, e);
                    return (
                      (t = { id: o, observer: l, elements: r }),
                      u.push(o),
                      a.set(o, t),
                      t
                    );
                  })(o);
                  return (
                    l.set(e, t),
                    r.observe(e),
                    function () {
                      if ((l.delete(e), r.unobserve(e), 0 === l.size)) {
                        r.disconnect(), a.delete(n);
                        let t = u.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        t > -1 && u.splice(t, 1);
                      }
                    }
                  );
                })(p, (e) => e && s(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: o,
                });
                return e;
              }
            } else if (!i) {
              let n = r.requestIdleCallback(() => s(!0));
              return () => r.cancelIdleCallback(n);
            }
          }, [p, c, o, t, i]);
          let y = n.useCallback(() => {
            s(!1);
          }, []);
          return [d, i, y];
        });
      var n = o(7294),
        r = o(4686);
      let l = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1664: function (e, t, o) {
      e.exports = o(1551);
    },
    2703: function (e, t, o) {
      "use strict";
      var n = o(414);
      function r() {}
      function l() {}
      (l.resetWarningCache = r),
        (e.exports = function () {
          function e(e, t, o, r, l, a) {
            if (a !== n) {
              var u = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((u.name = "Invariant Violation"), u);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var o = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: l,
            resetWarningCache: r,
          };
          return (o.PropTypes = o), o;
        });
    },
    5697: function (e, t, o) {
      e.exports = o(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
  },
]);
