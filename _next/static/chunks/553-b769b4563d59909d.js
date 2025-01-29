(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [553],
  {
    1513: function (r) {
      function n(r, n, e, t) {
        var u = n[0] - r[0],
          f = n[1] - r[1],
          o = t[0] - e[0],
          i = t[1] - e[1];
        if (o * f - i * u == 0) return !1;
        var h = (u * (e[1] - r[1]) + f * (r[0] - e[0])) / (o * f - i * u),
          a = (o * (r[1] - e[1]) + i * (e[0] - r[0])) / (i * u - o * f);
        return h >= 0 && h <= 1 && a >= 0 && a <= 1;
      }
      function e(r, n, e) {
        return (n[0] - r[0]) * (e[1] - r[1]) - (e[0] - r[0]) * (n[1] - r[1]);
      }
      function t(r, n, t) {
        return 0 >= e(r, n, t);
      }
      r.exports = {
        decomp: function (r) {
          var n = (function r(n) {
            for (
              var u = [], f = [], h = [], g = [], p = Number.MAX_VALUE, m = 0;
              m < n.length;
              ++m
            )
              if (a(n, m)) {
                for (var b = 0; b < n.length; ++b)
                  if (
                    (function (r, n, u) {
                      var f,
                        h,
                        a = l,
                        v = c;
                      if (
                        e(i(r, n + 1), i(r, n), i(r, u)) >= 0 &&
                        t(i(r, n - 1), i(r, n), i(r, u))
                      )
                        return !1;
                      h = o(i(r, n), i(r, u));
                      for (var g = 0; g !== r.length; ++g)
                        if (
                          (g + 1) % r.length !== n &&
                          g !== n &&
                          e(i(r, n), i(r, u), i(r, g + 1)) >= 0 &&
                          t(i(r, n), i(r, u), i(r, g)) &&
                          ((a[0] = i(r, n)),
                          (a[1] = i(r, u)),
                          (v[0] = i(r, g)),
                          (v[1] = i(r, g + 1)),
                          (f = (function (r, n, e) {
                            e = e || 0;
                            var t,
                              u,
                              f,
                              o,
                              i,
                              h,
                              a,
                              l = [0, 0];
                            return (
                              (t = r[1][1] - r[0][1]),
                              (u = r[0][0] - r[1][0]),
                              (f = t * r[0][0] + u * r[0][1]),
                              (o = n[1][1] - n[0][1]),
                              (i = n[0][0] - n[1][0]),
                              (h = o * n[0][0] + i * n[0][1]),
                              s((a = t * i - o * u), 0, e) ||
                                ((l[0] = (i * f - u * h) / a),
                                (l[1] = (t * h - o * f) / a)),
                              l
                            );
                          })(a, v)),
                          o(i(r, n), f) < h)
                        )
                          return !1;
                      return !0;
                    })(n, m, b)
                  ) {
                    (f = r(v(n, m, b, g))), (h = r(v(n, b, m, g)));
                    for (var A = 0; A < h.length; A++) f.push(h[A]);
                    f.length < p &&
                      ((u = f), (p = f.length), u.push([i(n, m), i(n, b)]));
                  }
              }
            return u;
          })(r);
          return n.length > 0
            ? (function r(n, e) {
                if (0 === e.length) return [n];
                if (
                  e instanceof Array &&
                  e.length &&
                  e[0] instanceof Array &&
                  2 === e[0].length &&
                  e[0][0] instanceof Array
                ) {
                  for (var t = [n], u = 0; u < e.length; u++)
                    for (var f = e[u], o = 0; o < t.length; o++) {
                      var i = r(t[o], f);
                      if (i) {
                        t.splice(o, 1), t.push(i[0], i[1]);
                        break;
                      }
                    }
                  return t;
                }
                var f = e,
                  u = n.indexOf(f[0]),
                  o = n.indexOf(f[1]);
                return -1 !== u && -1 !== o && [v(n, u, o), v(n, o, u)];
              })(r, n)
            : [r];
        },
        quickDecomp: function r(u, f, l, c, v, s, p) {
          (s = s || 100),
            (p = p || 0),
            (v = v || 25),
            (f = void 0 !== f ? f : []),
            (l = l || []),
            (c = c || []);
          var m = [0, 0],
            b = [0, 0],
            A = [0, 0],
            k = 0,
            d = 0,
            M = 0,
            _ = 0,
            C = 0,
            E = 0,
            N = 0,
            q = [],
            w = [];
          if (u.length < 3) return f;
          if (++p > s)
            return (
              console.warn("quickDecomp: max level (" + s + ") reached."), f
            );
          for (var x = 0; x < u.length; ++x)
            if (a(u, x)) {
              l.push(u[x]), (k = d = Number.MAX_VALUE);
              for (var y = 0; y < u.length; ++y)
                e(i(u, x - 1), i(u, x), i(u, y)) > 0 &&
                  t(i(u, x - 1), i(u, x), i(u, y - 1)) &&
                  ((A = g(i(u, x - 1), i(u, x), i(u, y), i(u, y - 1))),
                  0 > e(i(u, x + 1), i(u, x), A) &&
                    (M = o(u[x], A)) < d &&
                    ((d = M), (b = A), (E = y))),
                  e(i(u, x + 1), i(u, x), i(u, y + 1)) > 0 &&
                    t(i(u, x + 1), i(u, x), i(u, y)) &&
                    ((A = g(i(u, x + 1), i(u, x), i(u, y), i(u, y + 1))),
                    e(i(u, x - 1), i(u, x), A) > 0 &&
                      (M = o(u[x], A)) < k &&
                      ((k = M), (m = A), (C = y)));
              if (E === (C + 1) % u.length)
                (A[0] = (b[0] + m[0]) / 2),
                  (A[1] = (b[1] + m[1]) / 2),
                  c.push(A),
                  x < C
                    ? (h(q, u, x, C + 1),
                      q.push(A),
                      w.push(A),
                      0 !== E && h(w, u, E, u.length),
                      h(w, u, 0, x + 1))
                    : (0 !== x && h(q, u, x, u.length),
                      h(q, u, 0, C + 1),
                      q.push(A),
                      w.push(A),
                      h(w, u, E, x + 1));
              else {
                if ((E > C && (C += u.length), (_ = Number.MAX_VALUE), C < E))
                  return f;
                for (var y = E; y <= C; ++y)
                  e(i(u, x - 1), i(u, x), i(u, y)) >= 0 &&
                    t(i(u, x + 1), i(u, x), i(u, y)) &&
                    (M = o(i(u, x), i(u, y))) < _ &&
                    (function (r, e, t) {
                      for (var u = 0; u !== r.length; ++u)
                        if (
                          u !== e &&
                          u !== t &&
                          (u + 1) % r.length !== e &&
                          (u + 1) % r.length !== t &&
                          n(i(r, e), i(r, t), i(r, u), i(r, u + 1))
                        )
                          return !1;
                      return !0;
                    })(u, x, y) &&
                    ((_ = M), (N = y % u.length));
                x < N
                  ? (h(q, u, x, N + 1),
                    0 !== N && h(w, u, N, u.length),
                    h(w, u, 0, x + 1))
                  : (0 !== x && h(q, u, x, u.length),
                    h(q, u, 0, N + 1),
                    h(w, u, N, x + 1));
              }
              return (
                q.length < w.length
                  ? (r(q, f, l, c, v, s, p), r(w, f, l, c, v, s, p))
                  : (r(w, f, l, c, v, s, p), r(q, f, l, c, v, s, p)),
                f
              );
            }
          return f.push(u), f;
        },
        isSimple: function (r) {
          var e;
          for (e = 0; e < r.length - 1; e++)
            for (var t = 0; t < e - 1; t++)
              if (n(r[e], r[e + 1], r[t], r[t + 1])) return !1;
          for (e = 1; e < r.length - 2; e++)
            if (n(r[0], r[r.length - 1], r[e], r[e + 1])) return !1;
          return !0;
        },
        removeCollinearPoints: function (r, n) {
          for (var t = 0, o = r.length - 1; r.length > 3 && o >= 0; --o)
            (function (r, n, t, o) {
              if (!o) return 0 === e(r, n, t);
              var i = u,
                h = f;
              return (
                (i[0] = n[0] - r[0]),
                (i[1] = n[1] - r[1]),
                (h[0] = t[0] - n[0]),
                (h[1] = t[1] - n[1]),
                Math.acos(
                  (i[0] * h[0] + i[1] * h[1]) /
                    (Math.sqrt(i[0] * i[0] + i[1] * i[1]) *
                      Math.sqrt(h[0] * h[0] + h[1] * h[1]))
                ) < o
              );
            })(i(r, o - 1), i(r, o), i(r, o + 1), n) &&
              (r.splice(o % r.length, 1), t++);
          return t;
        },
        removeDuplicatePoints: function (r, n) {
          for (var e, t = r.length - 1; t >= 1; --t)
            for (var u = r[t], f = t - 1; f >= 0; --f)
              if (((e = r[f]), s(u[0], e[0], n) && s(u[1], e[1], n))) {
                r.splice(t, 1);
                continue;
              }
        },
        makeCCW: function (r) {
          for (var n = 0, t = 1; t < r.length; ++t)
            (r[t][1] < r[n][1] || (r[t][1] === r[n][1] && r[t][0] > r[n][0])) &&
              (n = t);
          return (
            !(e(i(r, n - 1), i(r, n), i(r, n + 1)) > 0) &&
            ((function (r) {
              for (var n = [], e = r.length, t = 0; t !== e; t++)
                n.push(r.pop());
              for (var t = 0; t !== e; t++) r[t] = n[t];
            })(r),
            !0)
          );
        },
      };
      var u = [],
        f = [];
      function o(r, n) {
        var e = n[0] - r[0],
          t = n[1] - r[1];
        return e * e + t * t;
      }
      function i(r, n) {
        var e = r.length;
        return r[n < 0 ? (n % e) + e : n % e];
      }
      function h(r, n, e, t) {
        for (var u = e; u < t; u++) r.push(n[u]);
      }
      function a(r, n) {
        return 0 > e(i(r, n - 1), i(r, n), i(r, n + 1));
      }
      var l = [],
        c = [];
      function v(r, n, e, t) {
        var u = t || [];
        if (((u.length = 0), n < e)) for (var f = n; f <= e; f++) u.push(r[f]);
        else {
          for (var f = 0; f <= e; f++) u.push(r[f]);
          for (var f = n; f < r.length; f++) u.push(r[f]);
        }
        return u;
      }
      function g(r, n, e, t, u) {
        u = u || 0;
        var f = n[1] - r[1],
          o = r[0] - n[0],
          i = f * r[0] + o * r[1],
          h = t[1] - e[1],
          a = e[0] - t[0],
          l = h * e[0] + a * e[1],
          c = f * a - h * o;
        return s(c, 0, u) ? [0, 0] : [(a * i - o * l) / c, (f * l - h * i) / c];
      }
      function s(r, n, e) {
        return Math.abs(r - n) <= (e = e || 0);
      }
    },
    4924: function (r, n, e) {
      "use strict";
      function t(r, n, e) {
        return (
          n in r
            ? Object.defineProperty(r, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (r[n] = e),
          r
        );
      }
      e.d(n, {
        Z: function () {
          return t;
        },
      });
    },
  },
]);
