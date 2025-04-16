"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [581],
  {
    9762: function (e, t, n) {
      var r = n(5893);
      n(7294);
      var s = n(5697),
        i = n.n(s);
      let l = (e) => {
        let { children: t, secondaryText: n, className: s } = e;
        return (0, r.jsxs)("div", {
          className:
            "anchor-animation relative inline-flex overflow-hidden ".concat(s),
          children: [
            (0, r.jsx)("div", { children: t }),
            (0, r.jsx)("div", { children: n || t }),
          ],
        });
      };
      (l.propTypes = {
        children: i().oneOfType([i().node, i().array]),
        secondaryText: i().oneOfType([i().node, i().array]),
      }),
        (t.Z = l);
    },
    1915: function (e, t, n) {
      var r = n(5893),
        s = n(7294),
        i = n(5697),
        l = n.n(i),
        a = n(1664),
        c = n.n(a);
      let o = s.forwardRef((e, t) => {
        let {
          type: n,
          secondary: s,
          whiteButton: i,
          blackButton: l,
          href: a,
          children: o,
          onClick: d,
          disabled: h,
          target: u,
          small: x,
          arrow: v,
          greenButton: m,
          boxButton: p,
          arrowColor: f,
          arrowClass: j,
          ...b
        } = e;
        return a
          ? (0, r.jsxs)(c(), {
              ref: t,
              href: a,
              onClick: d,
              target: u,
              className: [
                "button",
                s ? "button-secondary" : "",
                i ? "!text-white" : "",
                l ? "button-black" : "",
                x ? "button-small" : "",
                p ? "py-[12px] px-2" : "uppercase",
                m ? "bg-green hover:bg-black" : "",
                { ...b }.className,
              ].join(" "),
              children: [
                (0, r.jsxs)("div", {
                  className: "pointer-events-none relative overflow-hidden",
                  children: [
                    (0, r.jsx)("span", {
                      className: "button-content ".concat(
                        m ? "text-white" : ""
                      ),
                      children: o,
                    }),
                    (0, r.jsx)("span", {
                      className: "button-content-hover ".concat(
                        m ? "text-white" : ""
                      ),
                      children: o,
                    }),
                  ],
                }),
                v
                  ? (0, r.jsx)("span", {
                      className: j,
                      children: (0, r.jsx)("svg", {
                        width: "77",
                        height: "4",
                        fill: "none",
                        viewBox: "0 0 77 4",
                        children: (0, r.jsx)("path", {
                          fill: f || "#111",
                          d: "M77 2 74.5.557v2.886L77 2ZM0 2.25h74.75v-.5H0v.5Z",
                        }),
                      }),
                    })
                  : "",
              ],
            })
          : (0, r.jsxs)("button", {
              ref: t,
              type: n,
              disabled: h,
              onClick: d,
              className: [
                "button",
                s ? "button-secondary" : "",
                i ? "!text-white" : "",
                l ? "button-black" : "",
                x ? "button-small" : "",
                p ? "py-[12px] px-2" : "uppercase",
                m ? "bg-green hover:bg-black" : "",
                { ...b }.className,
              ].join(" "),
              children: [
                (0, r.jsxs)("div", {
                  className: "pointer-events-none relative overflow-hidden",
                  children: [
                    (0, r.jsx)("span", {
                      className: "button-content ".concat(
                        m ? "text-white" : ""
                      ),
                      children: o,
                    }),
                    (0, r.jsx)("span", {
                      className: "button-content-hover ".concat(
                        m ? "text-white" : ""
                      ),
                      children: o,
                    }),
                  ],
                }),
                v
                  ? (0, r.jsx)("span", {
                      className: j,
                      children: (0, r.jsx)("svg", {
                        width: "77",
                        height: "4",
                        fill: "none",
                        viewBox: "0 0 77 4",
                        children: (0, r.jsx)("path", {
                          fill: f || "#111",
                          d: "M77 2 74.5.557v2.886L77 2ZM0 2.25h74.75v-.5H0v.5Z",
                        }),
                      }),
                    })
                  : "",
              ],
            });
      });
      (o.propTypes = {
        type: l().string,
        secondary: l().bool,
        whiteButton: l().bool,
        blackButton: l().bool,
        label: l().string,
        href: l().string,
        onClick: l().func,
        children: l().oneOfType([l().node, l().array]),
        disabled: l().bool,
        target: l().string,
        chevron: l().bool,
        active: l().bool,
        small: l().bool,
        arrow: l().bool,
        greenButton: l().bool,
        boxButton: l().bool,
        arrowColor: l().string,
        arrowClass: l().string,
      }),
        (o.defaultProps = {
          type: "button",
          secondary: !1,
          whiteButton: !1,
          blackButton: !1,
          onClick: void 0,
          disabled: !1,
          target: null,
          chevron: !1,
          small: !1,
          active: !1,
          arrow: !1,
          greenButton: !1,
          boxButton: !1,
          arrowColor: "#111",
          arrowClass: "",
        }),
        (o.displayName = "Button"),
        (t.Z = o);
    },
    966: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return f;
        },
      });
      var r = n(5893),
        s = n(9008),
        i = n.n(s),
        l = n(7294),
        a = n(1664),
        c = n.n(a),
        o = n(9762),
        d = n(92);
      let h = () => {
          let [e, t] = (0, l.useState)(0),
            n = () => {
              t((e) => !e);
            };
          return (
            (0, l.useEffect)(() => {
              window.innerWidth < 1200 &&
                document.querySelectorAll(".mobile-link").forEach((e) => {
                  e.addEventListener("click", function (e) {
                    e.preventDefault(),
                      t(!1),
                      document
                        .querySelector(this.getAttribute("href"))
                        .scrollIntoView({ behavior: "smooth" });
                  });
                });
            }, []),
            (0, r.jsx)("div", {
              className:
                "header-main sticky top-0 left-0 right-0 z-[998] bg-white py-2 opacity-0 duration-300 ease-out xl:fixed xl:bg-transparent xl:mix-blend-exclusion",
              children: (0, r.jsx)("div", {
                className: "container",
                children: (0, r.jsxs)("div", {
                  className: "flex items-center",
                  children: [
                    (0, r.jsx)("div", {
                      className: "relative z-[999] w-3/5 md:w-1/4 xl:hidden",
                      children: (0, r.jsxs)(c(), {
                        href: "/",
                        className: "text-16 font-medium uppercase",
                        children: [
                          (0, r.jsx)(o.Z, { children: "Har" }),
                          (0, r.jsx)("sup", { children: "\xa9" }),
                        ],
                      }),
                    }),
                    (0, r.jsx)("div", {
                      className: "w-2/5 md:w-full",
                      children: (0, r.jsxs)("div", {
                        className: "nav-main ".concat(e ? "nav-active" : ""),
                        children: [
                          (0, r.jsx)("div", {
                            className: "flex justify-end",
                            children: (0, r.jsx)("button", {
                              onClick: n,
                              className:
                                "hamburger relative z-[9999]  text-18 uppercase xl:hidden ".concat(
                                  e ? "active" : ""
                                ),
                              type: "button",
                              children: (0, r.jsxs)("div", {
                                className:
                                  "hamburger-text relative overflow-hidden ",
                                children: [
                                  (0, r.jsxs)("span", {
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "flex-1",
                                        children: "MENU",
                                      }),
                                      (0, r.jsxs)("svg", {
                                        width: "11",
                                        height: "18",
                                        fill: "none",
                                        viewBox: "0 0 11 18",
                                        children: [
                                          (0, r.jsx)("path", {
                                            fill: "#000",
                                            d: "M10.235 5.118A5.118 5.118 0 1 1 0 5.118a5.118 5.118 0 0 1 10.235 0Z",
                                          }),
                                          (0, r.jsx)("path", {
                                            fill: "#04B200",
                                            d: "M10.235 11.941a5.118 5.118 0 1 1-10.235 0 5.118 5.118 0 0 1 10.235 0Z",
                                          }),
                                          (0, r.jsx)("path", {
                                            fill: "#fff",
                                            d: "M1.303 8.53a5.105 5.105 0 0 1 3.815-1.706c1.515 0 2.877.658 3.814 1.705a5.105 5.105 0 0 1-3.814 1.706A5.105 5.105 0 0 1 1.303 8.53Z",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("span", {
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: " text-white",
                                        children: "CLOSE",
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "inline-flex h-3 w-3 items-center justify-center rounded-full bg-white",
                                        children: (0, r.jsx)("svg", {
                                          width: "8",
                                          height: "8",
                                          fill: "none",
                                          viewBox: "0 0 8 8",
                                          children: (0, r.jsx)("path", {
                                            stroke: "#000",
                                            d: "m1 1 6.01 6.01m0-6.01L1 7.01",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "nav-menu-wrapper ",
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "nav-links flex xl:items-center xl:justify-between",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "hidden xl:block",
                                    children: (0, r.jsxs)(c(), {
                                      href: "/",
                                      className:
                                        "text-16 font-medium uppercase",
                                      children: [
                                        (0, r.jsx)(o.Z, { children: "Harini Rajeshwara Rao" }),///hover
                                        (0, r.jsx)("sup", { children: "\xa9" }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    children: (0, r.jsx)("a", {
                                      className:
                                        "scroll-click mobile-link font-medium uppercase",
                                      href: "#about",
                                      children: (0, r.jsx)(o.Z, {
                                        children: "About",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    children: (0, r.jsx)("a", {
                                      className:
                                        "scroll-click mobile-link font-medium uppercase",
                                      href: "#projects",
                                      children: (0, r.jsx)(o.Z, {
                                        children: "Project",
                                      }),
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    children: (0, r.jsx)("a", {
                                      className:
                                        "scroll-click mobile-link font-medium uppercase",
                                      href: "#contact",
                                      children: (0, r.jsx)(o.Z, {
                                        children: "Contact",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className:
                                  "block overflow-hidden pb-6 xl:hidden",
                                children: (0, r.jsx)(d.y, {
                                  duration: 10,
                                  children: [
                                    void 0,
                                    void 0,
                                    void 0,
                                    void 0,
                                    void 0,
                                  ].map((e, t) =>
                                    (0, r.jsx)(
                                      "div",
                                      {
                                        children: (0, r.jsx)("img", {
                                          className: "w-6",
                                          src: "/img/smiley.svg",
                                          alt: "",
                                        }),
                                      },
                                      t
                                    )
                                  ),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        u = () => (0, r.jsx)("div", {});
      var x = n(6521);
      let v = (e) => {
        let { children: t } = e,
          n = (e) => ({
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants: e,
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(x.E.div, {
              ...n({
                initial: { top: "100vh" },
                enter: { top: "100vh" },
                exit: {
                  top: "0",
                  transition: { duration: "1.2", ease: [0.76, 0, 0.24, 1] },
                },
              }),
              className: "fixed inset-0 z-[9999] h-screen w-full bg-white",
            }),
            (0, r.jsx)(x.E.div, {
              ...n({
                initial: { y: 0, scale: 1, opacity: 1 },
                enter: { y: 0, scale: 1, opacity: 1 },
                exit: {
                  y: -100,
                  scale: 0.9,
                  opacity: 0.7,
                  transition: { duration: "1", ease: [0.76, 0, 0.24, 1] },
                },
              }),
              className: "main origin-top bg-black",
              children: (0, r.jsx)(x.E.div, {
                ...n({
                  initial: { opacity: 1 },
                  enter: { opacity: 1 },
                  exit: { opacity: 0, transition: { duration: "1" } },
                }),
                className: "bg-white",
                children: t,
              }),
            }),
          ],
        });
      };
      var m = n(1758);
      let p = (e) => {
        let { children: t, headerProps: n, noHeader: s, className: l = "" } = e;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i(), {
              children: (0, r.jsx)("title", { children: "HARINI RAO" }),//title
            }),
            (0, r.jsx)(m.Z, {}),
            (0, r.jsx)(v, {
              // children: (0, r.jsxs)("main", {
              //   className: "main-wrapper duration-300 ease-out",
              //   children: [
              //     (0, r.jsx)("div", {
              //       id: "awwwards",
              //       className:
              //         "fixed top-1/2 right-0 z-50 -translate-y-1/2 p-0",
              //       children: (0, r.jsx)("a", {
              //         href: "https://www.awwwards.com/sites/sanni-sahil-portfolio",
              //         target: "_blank",
              //         rel: "noopener noreferrer",
              //         children: (0, r.jsxs)("svg", {
              //           width: "53.08",
              //           height: "171.358",
              //           children: [
              //             (0, r.jsx)("path", {
              //               className: "js-color-bg",
              //               fill: "black",
              //               d: "M0 0h53.08v171.358H0z",
              //             }),
              //             (0, r.jsx)("g", {
              //               className: "js-color-text",
              //               fill: "white",
              //               children: (0, r.jsx)("path", {
              //                 d: "M20.047 153.665v-1.9h3.888v-4.093h-3.888v-1.9h10.231v1.9h-4.59v4.093h4.59v1.9zM29.898 142.236c-.331.565-.784.997-1.359 1.294s-1.222.446-1.944.446c-.721 0-1.369-.149-1.943-.446a3.316 3.316 0 0 1-1.36-1.294c-.331-.564-.497-1.232-.497-2.002s.166-1.438.497-2.002a3.316 3.316 0 0 1 1.36-1.294c.574-.297 1.223-.445 1.943-.445.723 0 1.369.148 1.944.445a3.307 3.307 0 0 1 1.359 1.294c.331.564.497 1.232.497 2.002s-.166 1.438-.497 2.002m-1.703-3.347c-.435-.33-.967-.496-1.601-.496-.633 0-1.166.166-1.601.496-.433.332-.649.78-.649 1.346 0 .564.217 1.013.649 1.345.435.331.968.497 1.601.497.634 0 1.166-.166 1.601-.497.435-.332.649-.78.649-1.345.001-.566-.214-1.014-.649-1.346M22.911 134.852v-1.813h1.186a3.335 3.335 0 0 1-.951-1.009 2.423 2.423 0 0 1-.352-1.271c0-.682.19-1.229.57-1.645.381-.413.932-.621 1.652-.621h5.262v1.812h-4.721c-.419 0-.727.096-.921.285-.195.19-.292.447-.292.769 0 .302.115.58.35.833.234.254.577.458 1.03.613.454.156.993.234 1.616.234h2.938v1.813h-7.367zM29.898 125.136a3.314 3.314 0 0 1-1.359 1.294c-.575.297-1.222.445-1.944.445-.721 0-1.369-.148-1.943-.445a3.322 3.322 0 0 1-1.36-1.294c-.331-.565-.497-1.232-.497-2.002 0-.771.166-1.438.497-2.003a3.313 3.313 0 0 1 1.36-1.293c.574-.297 1.223-.446 1.943-.446.723 0 1.369.149 1.944.446s1.028.728 1.359 1.293.497 1.232.497 2.003c.001.769-.166 1.436-.497 2.002m-1.703-3.347c-.435-.331-.967-.497-1.601-.497-.633 0-1.166.166-1.601.497-.433.331-.649.778-.649 1.345 0 .564.217 1.013.649 1.344.435.332.968.498 1.601.498.634 0 1.166-.166 1.601-.498.435-.331.649-.779.649-1.344.001-.567-.214-1.014-.649-1.345M22.911 117.75v-1.812h1.199c-.419-.265-.742-.586-.972-.966s-.345-.784-.345-1.213c0-.272.05-.569.146-.892l1.682.336a1.429 1.429 0 0 0-.205.76c0 .576.261 1.048.783 1.418.521.37 1.342.557 2.461.557h2.617v1.812h-7.366zM29.812 111.252c-.391.511-.857.851-1.403 1.016l-.776-1.446c.381-.138.68-.329.893-.577.215-.249.321-.544.321-.885a1.2 1.2 0 0 0-.168-.658c-.112-.175-.294-.263-.548-.263-.225 0-.406.105-.548.313-.142.21-.291.534-.446.973-.019.068-.058.17-.117.307-.224.565-.506 1.004-.848 1.315-.34.313-.779.467-1.314.467-.381 0-.727-.102-1.039-.306a2.185 2.185 0 0 1-.744-.84 2.554 2.554 0 0 1-.279-1.207c0-.497.105-.949.314-1.359.211-.408.506-.725.886-.949l.993 1.082c-.43.292-.644.686-.644 1.184a.84.84 0 0 0 .154.504.471.471 0 0 0 .401.212c.176 0 .338-.103.49-.307.15-.205.334-.604.547-1.199.205-.564.474-1.001.805-1.308.332-.308.756-.46 1.271-.46.721 0 1.299.229 1.732.687s.65 1.057.65 1.797c.001.759-.194 1.396-.583 1.907M35.481 17.006l-4.782 14.969h-3.266l-2.584-9.682-2.584 9.682h-3.268l-4.782-14.969h3.713l2.673 10.276 2.525-10.276h3.445l2.524 10.276 2.674-10.276zM37.978 27.163c1.426 0 2.496 1.068 2.496 2.495 0 1.425-1.07 2.495-2.496 2.495-1.425 0-2.494-1.07-2.494-2.495-.001-1.427 1.069-2.495 2.494-2.495",
              //               }),
              //             }),
              //           ],
              //         }),
              //       }),
              //     }),
              //     s ? "" : (0, r.jsx)(h, { ...n, className: l }),
              //     t,
              //     (0, r.jsx)(u, {}),
              //   ],
              // }),
              children: (
                0, 
                r.jsxs)("main", {
                  className: "main-wrapper duration-300 ease-out",
                  children: [
                    (0, r.jsx)("div", {
                      id: "awwwards",
                      className:
                        "fixed top-1/2 right-0 z-50 -translate-y-1/2 p-0",
                      children: (0, r.jsx)("a", {
                        href: "https://untye.beehiiv.com/subscribe",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, r.jsx)("img", {
                          src: "/img/banner.jpg",  // URL of Medium logo
                          alt: "Medium Logo",
                          width: "53.08",
                          height: "171.358",
                          className: "medium-logo",
                        }),
                      }),
                    }),
                    s ? "" : (0, r.jsx)(h, { ...n, className: l }),
                    t,
                    (0, r.jsx)(u, {}),
                  ],
                })
            }),
          ],
        });
      };
      var f = p;
    },
    92: function (e, t, n) {
      n.d(t, {
        y: function () {
          return a;
        },
      });
      var r = n(5893),
        s = n(7294),
        i = n(6038),
        l = n(6546);
      i.p8.registerPlugin(l.ScrollTrigger);
      let a = (e) => {
        let {
            children: t,
            duration: n,
            direction: a,
            scrollSpeedBased: c,
            elementSpacing: o,
          } = e,
          d = (0, s.useRef)(),
          h = (0, s.useRef)(),
          u = (0, s.useMemo)(
            () => ({
              scrollSpeedBased: !!c,
              direction: null != a ? a : 1,
              duration: null != n ? n : 10,
            }),
            [n, a, c]
          );
        return (
          (0, s.useEffect)(() => {
            let e = d.current.querySelectorAll(".marquee__part");
            return (
              (h.current = i.p8
                .to(e, {
                  xPercent: -100,
                  repeat: -1,
                  duration: u.duration,
                  ease: "linear",
                })
                .totalProgress(0.5)),
              i.p8.set(e, { xPercent: -50 }),
              i.p8.to(h.current, { timeScale: u.direction }),
              () => {
                var e;
                null === (e = h.current) || void 0 === e || e.kill();
              }
            );
          }, [u.direction, u.duration]),
          (0, s.useEffect)(() => {
            let e = () => {
              if (!u.scrollSpeedBased) return;
              let e = i.p8.utils.clamp(1, 6);
              l.ScrollTrigger.create({
                start: 0,
                end: "max",
                onUpdate: (t) => {
                  var n;
                  null === (n = h.current) ||
                    void 0 === n ||
                    n.timeScale(
                      u.direction * e(Math.abs(t.getVelocity() / 200))
                    );
                },
              });
            };
            return (
              window.addEventListener("scroll", e),
              () => {
                window.removeEventListener("scroll", e);
              }
            );
          }, [u.scrollSpeedBased, u.direction]),
          (0, r.jsx)("div", {
            className: "flex origin-left overflow-hidden",
            children: (0, r.jsxs)("div", {
              className: "marquee__inner flex ".concat(o),
              ref: d,
              children: [
                (0, r.jsxs)("div", {
                  className:
                    "marquee__part relative flex flex-shrink-0 items-center whitespace-nowrap ".concat(
                      o
                    ),
                  children: [t, t],
                }),
                (0, r.jsxs)("div", {
                  className:
                    "marquee__part relative flex flex-shrink-0 items-center whitespace-nowrap ".concat(
                      o
                    ),
                  children: [t, t],
                }),
              ],
            }),
          })
        );
      };
    },
    1758: function (e, t, n) {
      var r = n(5893),
        s = n(7294),
        i = n(6038);
      t.Z = function () {
        let e = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let t = "ontouchstart" in window,
              n = e.current;
            !t &&
              n &&
              (window.addEventListener("mousemove", (e) => {
                let { x: t, y: r } = e;
                i.ZP.to(n, {
                  x: t + 3,
                  y: r + 3,
                  opacity: 1,
                  duration: 0.7,
                  ease: "power4",
                });
              }),
              document.addEventListener("mouseleave", () => {
                i.ZP.to(n, { duration: 0.7, opacity: 0 });
              }));
          }, []),
          (0, s.useEffect)(() => {
            let t = document.querySelectorAll("a"),
              n = document.querySelectorAll("button"),
              r = document.querySelectorAll(".hide-cursor"),
              s = document.querySelectorAll(".cursor-text"),
              i = document.querySelector(".cursor-inner span");
            [t, n].forEach((t) => {
              t.forEach((t) => {
                t.addEventListener("mouseenter", () => {
                  e.current && e.current.classList.add("expand");
                }),
                  t.addEventListener("mouseleave", () => {
                    e.current && e.current.classList.remove("expand");
                  });
              });
            }),
              r.forEach((t) => {
                t.addEventListener("mouseenter", () => {
                  e.current && e.current.classList.add("!opacity-0");
                }),
                  t.addEventListener("mouseleave", () => {
                    e.current && e.current.classList.remove("!opacity-0");
                  });
              }),
              s.forEach((t) => {
                t.addEventListener("mouseenter", () => {
                  if (!e.current) return;
                  let n = t.dataset.cursor;
                  (i.style.opacity = 1), (i.innerText = n);
                }),
                  t.addEventListener("mouseleave", () => {
                    e.current && ((i.style.opacity = 0), (i.innerText = ""));
                  });
              });
          }, []),
          (0, r.jsx)("div", {
            className:
              "cursor absolute z-[99999] rounded-full mix-blend-exclusion",
            ref: e,
            children: (0, r.jsx)("span", {
              className: "cursor-inner text-center text-12",
              children: (0, r.jsx)("span", {
                className: "duration-300 ease-out",
              }),
            }),
          })
        );
      };
    },
  },
]);
