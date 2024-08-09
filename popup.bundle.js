/*! For license information please see popup.bundle.js.LICENSE.txt */
(() => {
    var e, t = {
            89617: (e, t, n) => {
                e.exports = {
                    fr: n(69135),
                    it: n(6479),
                    de: n(82507),
                    es: n(9552),
                    ja: n(17130)
                }
            },
            86449: (e, t, n) => {
                "use strict";
                var i = n(27378),
                    r = n(31542),
                    a = n(23615),
                    o = n.n(a),
                    s = n(42607),
                    l = n(60042),
                    u = n.n(l);
                const c = "popup_d8cee80b",
                    d = "axe__2f045c6",
                    f = "logo__9fb4ae2",
                    p = "coconut__c33d50d",
                    m = "upside_down_b012963c";
                let g;
                g = "AxeChrome";
                const h = "axe Coconut";
                const b = "4.84.3",
                    v = "4.9.1";

                function y(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function w(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function S(e = {}) {
                    const t = new URLSearchParams,
                        n = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? y(Object(n), !0).forEach((function(t) {
                                    w(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            utm_source: "chrome_browser_extension",
                            utm_medium: "referral"
                        }, e);
                    for (const [e, i] of Object.entries(n))(null == i ? void 0 : i.toString().length) > 0 && t.append(e, i);
                    return `?${t.toString()}`
                }

                function T(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function E(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? T(Object(n), !0).forEach((function(t) {
                            x(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function x(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function I(e, t, n = "local") {
                    const r = (0, i.useRef)(!0),
                        [a, o] = (0, i.useState)(t),
                        [s, l] = (0, i.useState)(!0);

                    function u(t) {
                        browser.storage[n].set({
                            [e]: t
                        }), o(t)
                    }
                    const c = (t, i) => {
                        if (i === n && e in t) {
                            const n = t[e];
                            o(n.newValue)
                        }
                    };
                    return (0, i.useLayoutEffect)((() => (async function() {
                        const t = await browser.storage[n].get(e);
                        return Object.keys(t || {}).length > 0 || null === t ? t[e] : void 0
                    }().then((e => {
                        if (r.current) {
                            if (void 0 !== t && void 0 === e) u(t);
                            else if ("object" != typeof t || null === t || "object" != typeof e || null === e || function(e, t) {
                                    const n = Object.keys(e),
                                        i = Object.keys(t),
                                        r = new Set([...n, ...i]);
                                    return r.size === e.length && r.size === t.length
                                }(t, e)) o(e);
                            else {
                                const n = Object.keys(e),
                                    i = E(E({}, t), e);
                                for (const e of n) t.hasOwnProperty(e) || delete i[e];
                                u(i)
                            }
                            l(!1)
                        }
                    })), browser.storage.onChanged.addListener(c), () => {
                        r.current = !1, browser.storage.onChanged.removeListener(c)
                    })), []), [a, u, s]
                }

                function k(e, t) {
                    return I(e, t, "local")
                }

                function A(e, t) {
                    return typeof e === t ? e : void 0
                }

                function N(e = {}) {
                    const [t, n] = k("policySettings"), [r, , a] = k("ignore_policies", !1);
                    return (0, i.useEffect)((() => {
                        a || r || (async () => {
                            let e;
                            try {
                                e = await browser.storage.managed.get()
                            } catch (e) {
                                return void n({})
                            }
                            e && Object.keys(e).length > 0 ? n({
                                AxeURL: A(e.AxeURL, "string"),
                                DataGather: A(e.DataGather, "boolean"),
                                UsageServiceURL: A(e.UsageServiceURL, "string"),
                                UsageServiceOrganization: A(e.UsageServiceOrganization, "string"),
                                UsageServiceDepartment: A(e.UsageServiceDepartment, "string"),
                                UsageServiceApplication: A(e.UsageServiceApplication, "string"),
                                EnableIssueScreenshots: A(e.EnableIssueScreenshots, "boolean"),
                                WCAGLevel: A(e.WCAGLevel, "string"),
                                AccessibilityStandard: A(e.AccessibilityStandard, "string"),
                                AxeVersion: A(e.AxeVersion, "string"),
                                DisableIGT: A(e.DisableIGT, "boolean"),
                                IncludeNeedsReviewInIssueCount: A(e.IncludeNeedsReviewInIssueCount, "boolean"),
                                DisableNeedsReview: A(e.DisableNeedsReview, "boolean"),
                                AutomaticColorContrastReview: A(e.AutomaticColorContrastReview, "string"),
                                EnableMachineLearning: A(e.EnableMachineLearning, "boolean"),
                                EnableAutomaticColorContrast: A(e.EnableAutomaticColorContrast, "boolean"),
                                DisableAllScreenshots: A(e.DisableAllScreenshots, "boolean"),
                                OfflineLicenseKey: A(e.OfflineLicenseKey, "string")
                            }) : n({})
                        })(), !a && r && n({})
                    }), [r, a]), t || e
                }
                n(39619);
                var z = n(96292),
                    C = n.n(z);

                function M(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function P(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? M(Object(n), !0).forEach((function(t) {
                            L(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function L(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const D = C()("bridge"),
                    O = C()("bridge:message"),
                    R = C()("bridge:response"),
                    j = {
                        devtools: "devtools",
                        content: "content-script",
                        background: "background",
                        unknown: "unknown"
                    };
                const U = new class {
                        constructor() {
                            L(this, "listener", ((e, t) => {
                                const {
                                    origin: n,
                                    context: i,
                                    topic: r,
                                    message: a,
                                    options: o
                                } = e, {
                                    tab: s,
                                    frameId: l
                                } = t, u = s && -1 !== s.id ? s.id : null == o ? void 0 : o.tabId;
                                if (!n) return;
                                if (this.context === j.background && i === j.content) return this.send(i, r, a, {
                                    tabId: o.tabId || u,
                                    frameId: o.frameId,
                                    allFrames: o.allFrames
                                });
                                const c = this.context !== j.devtools || browser.devtools.inspectedWindow.tabId === u;
                                if (i !== this.context || !c) return;
                                O(`[${r}] ${n} → ${this.context}: %O`, void 0 !== a ? a : "");
                                const d = this.getListeners(r),
                                    f = e => {
                                        console.error(e)
                                    };
                                try {
                                    for (var p of d) {
                                        const e = p({
                                            context: i,
                                            topic: r,
                                            message: a,
                                            origin: n,
                                            tabId: u,
                                            frameId: l
                                        });
                                        if (!p.isGlobal && void 0 !== e) return Promise.resolve(e).catch(f)
                                    }
                                } catch (e) {
                                    f(e)
                                }
                            }));
                            const {
                                context: e
                            } = this;
                            if (this.messageListeners = new Map, e !== j.unknown) {
                                if (!e) throw new Error(`Unsupported bridge context: ${e}`);
                                this.attachListener()
                            }
                        }
                        attachListener() {
                            const {
                                context: e,
                                listener: t
                            } = this;
                            browser.runtime.onMessage.hasListener(t) || (D("bridge initialized with context %s", e), browser.runtime.onMessage.addListener(t)), window.addEventListener("pageshow", (n => {
                                n.persisted && !browser.runtime.onMessage.hasListener(t) && (D("bridge initialized with context %s (cached page)", e), browser.runtime.onMessage.addListener(t))
                            })), window.addEventListener("beforeunload", (() => {
                                browser.runtime.onMessage.removeListener(t)
                            }))
                        }
                        get context() {
                            return "undefined" == typeof browser ? j.unknown : browser && browser.devtools ? j.devtools : browser && browser.tabs ? j.background : browser && browser.storage ? j.content : void 0
                        }
                        async send(e, t, n, {
                            tabId: i,
                            frameId: r = 0,
                            allFrames: a = !1
                        } = {}) {
                            if ("undefined" == typeof browser) return;
                            i || this.context !== j.devtools || (i = browser.devtools.inspectedWindow.tabId);
                            let o = browser.runtime.sendMessage;
                            if (e === j.content && void 0 !== browser.tabs) {
                                const e = {
                                    frameId: a ? null : r
                                };
                                o = t => browser.tabs.sendMessage(i, P(P({}, t), {}, {
                                    options: P(P({}, t.options), e)
                                }), e)
                            }
                            const s = `${this.context}${this.context===j.devtools?`:${i}`:""}`,
                                l = `${e}${[e,this.context].includes(j.content)&&i?`:${i}`:""}`;
                            O(`[${t}] ${s} → ${l}: %O`, void 0 !== n ? n : "");
                            const u = {
                                origin: s,
                                context: e,
                                topic: t,
                                message: n,
                                options: e === j.content ? {
                                    tabId: i,
                                    frameId: r,
                                    allFrames: a
                                } : {
                                    tabId: i
                                }
                            };
                            let c = null;
                            try {
                                c = await o(u)
                            } catch (e) {
                                if ("Could not establish connection. Receiving end does not exist." !== e.message) throw e
                            }
                            return null !== c && R(`[${t}] ${l} → ${s}: %O`, c), c
                        }
                        getListeners(e) {
                            const {
                                messageListeners: t
                            } = this;
                            return e && "*" !== e ? [...t.get(e) || [], ...t.get("*") || []] : t.get("*") || []
                        }
                        listen(e, t) {
                            const {
                                messageListeners: n
                            } = this, i = n.get(e) || [];
                            "function" == typeof e && (t = e, e = "*"), "*" === e && (t.isGlobal = !0), "function" == typeof t && (i.length ? n.set(e, [...i, t]) : n.set(e, [t]))
                        }
                        unlisten(e, t) {
                            const {
                                messageListeners: n
                            } = this;
                            if ("function" == typeof e && (t = e, e = "*"), "function" != typeof t) return;
                            const i = (n.get(e) || []).filter((e => e !== t));
                            i.length ? n.set(e, i) : n.delete(e)
                        }
                    },
                    _ = j;
                const $ = ({
                    coconut: e
                }) => {
                    const [t, , n] = k("popup_logo_upside_down", !1), r = !n && "true" === t, a = (new Date).getFullYear();
                    return i.createElement("div", {
                        className: c
                    }, i.createElement("div", {
                        className: e ? p : d
                    }, i.createElement("figure", {
                        className: u()({
                            [f]: !0,
                            [m]: r
                        })
                    }, i.createElement("img", {
                        src: e ? "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEzOCAxMDUgMjQ0IDI5MCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIxMDAuNjMiIHkxPSIxMDIuNTkiIHgyPSIxNTAuMTEiIHkyPSIxNzIuNjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9Ii4wMiIgc3RvcC1jb2xvcj0iI2ZjZmNmYyIvPjxzdG9wIG9mZnNldD0iLjM1IiBzdG9wLWNvbG9yPSIjY2FjNWNkIi8+PHN0b3Agb2Zmc2V0PSIuNjQiIHN0b3AtY29sb3I9IiNhNTlkYWEiLz48c3RvcCBvZmZzZXQ9Ii44NiIgc3RvcC1jb2xvcj0iIzhlODQ5NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzg2N2I4ZCIvPjwvbGluZWFyR3JhZGllbnQ+PHN0eWxlPi5jbHMtMntmaWxsOiM4YmE2YzV9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTEwOS42NSAyMTMuMDZjLTQ0LjI1IDAtODAuMjYtMzQuMzItODAuMjYtNzYuNTFhNzUuNjEgNzUuNjEgMCAwMTE1LjI2LTQ1Ljc4TDI5LjY0IDgzYTcuOCA3LjggMCAwMS0zLjM4LTEwLjM2bC4xNy0uMzFhNy44NjcgNy44NjcgMCAwMTIuNDctMi42N2wuMS0uMDZMMTMxLjc1IDMuNzJhNy43NSA3Ljc1IDAgMDExMC42MyAyLjE2IDcuNjI5IDcuNjI5IDAgMDExLjMyIDQuMDVsMi44OCA2MS4yOUE5Ny4zOSA5Ny4zOSAwIDAxMTc2LjM1IDk5YzguNTkgMTIuMzUgMTMuNCAyNS42NSAxMy41NSAzNy40NWE3Mi45MiA3Mi45MiAwIDAxLTIxLjQ5IDUyLjQgODIuOTIxIDgyLjkyMSAwIDAxLTU4Ljc2IDI0LjIxek00NiA3NS41M2wyMS41OSAxMS4xMy02LjY1IDYuODVhNjEuNDMyIDYxLjQzMiAwIDAwLTE3LjM2IDQzYzAgMzQuMzcgMjkuNjQgNjIuMzMgNjYuMDcgNjIuMzNhNjguNjQxIDY4LjY0MSAwIDAwNDguNjctMjAgNTguODQxIDU4Ljg0MSAwIDAwMTcuNDEtNDIuMjZjLS4yNS0xOS4yLTE3LjU0LTQzLjMyLTM5LjM3LTU0LjkxbC0zLjU3LTEuOS0yLjczLTU4LjE4TDg4IDQ4LjU4IDQ2IDc1LjUzem03MiA2NC42Nkw5MC40NyA5OS40NSAxMTggMTEyLjU3djI3LjYyeiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ5Ljg4OSAxNDIuMjMyKSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMzkuNjggNzUuNDdhNjguNzQgNjguNzQgMCAwMC0yOS44NS04LjN2MS43MWwuMzIgMTQuMzMuMDcgMyAuMzMgMTQuMzMuMzggMTYuNTQtMzMuNzQtMTcuNDktMTcuMTItOC44M2E1OC44MSA1OC44MSAwIDAxMTEuNTEtMTAuNCA2NS4xMyA2NS4xMyAwIDAxOS44MS01LjU3bC0xLjYxLTIuM2E3MC4yMSA3MC4yMSAwIDAwLTExLjcgNi4wNyA2OS4yNSA2OS4yNSAwIDAwLTEyLjIzIDEwIDY4LjUxIDY4LjUxIDAgMDAtMTkuMzcgNDhjMCAzOC4zNCAzMi43NiA2OS40MiA3My4xNiA2OS40MnM3My42Ni0zMS4wOCA3My4xNi02OS40MmMtLjI2LTIxLjE3LTE4LjA5LTQ3LjgtNDMuMTItNjEuMDl6IiBmaWxsPSIjODI0MTA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDkuODg5IDE0Mi4yMzIpIi8+PHBhdGggZD0iTTE3OC4wOCAxMjIuMzdjLTUuMzYtMTUuNjItMjAuMDktMzMuNTEtMzguMjgtNDQuMTRhNjQuMTIgNjQuMTIgMCAwMC0yOS45NC05LjM0bC4zMiAxNC4zMy4wNyAzIC4zMyAxNC4zMy4zOCAxNi41NC0zMy43Ny0xNy41YTQ2LjUgNDYuNSAwIDAxMTIuMjktMTBjLjU0LS4zMiAxLjEtLjYxIDEuNjUtLjlsLTkuNzQtMTMuOWE2NS4xMyA2NS4xMyAwIDAwLTkuODEgNS41NyA1OC44MSA1OC44MSAwIDAwLTExLjUxIDEwLjQgNDIuMzEgNDIuMzEgMCAwMC0xMC43MiAyNy4xYzAgMjUuNjMgMjUuMDYgNjcuNyA4NC42OCA2OS42MyAzMS4wOCAxIDUyLjQtNDAuNzkgNDQuMDUtNjUuMTJ6IiBmaWxsPSIjZmRmZGZkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDkuODg5IDE0Mi4yMzIpIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNNjguMDggNzguNTZhNjkuMjUgNjkuMjUgMCAwMC0xMi4yMyAxMGwtMjMtMTEuODZhLjY3LjY3IDAgMDEtLjI5LS44OS43NC43NCAwIDAxLjIzLS4yNkw0NiA2Ny4xNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0OS44ODkgMTQyLjIzMikiIGZpbGw9IiM4YmE2YzUiLz48cGF0aCBkPSJNMTQwLjQyIDkxLjMxQTQ1IDQ1IDAgMDAxMTQuMiA4M2MtMS4zNSAwLTIuNjkuMDYtNCAuMTdsLjA3IDMgLjMzIDE0LjMzLjM4IDE2LjU0LTE3LjcyLTI1LjI5LS4yMS0uMy0xLjkzLTIuNzVjLS41NS4yOS0xLjExLjU5LTEuNjUuOWE0Ni41IDQ2LjUgMCAwMC0xMi4yOSAxMCAzMi43NSAzMi43NSAwIDAwLTguNTYgMjEuMTZjMCAyNS44NSAzOC4zOSA0Ny4yNCA2MS42OSA0NS40NSA3Ljk0LS42MSAxNy44Ny0yLjgyIDI0Ljg1LTEwLjkgMS4yNi0xLjQ2IDcuMTktOS43MyA3LjE5LTI0LjI0IDAtMTIuODgtNy43OC0yOS44My0yMS45My0zOS43NnoiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50KSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQ5Ljg4OSAxNDIuMjMyKSIvPjxwYXRoIGQ9Ik0xNDEuNTkgMTE2LjU0bC0zMS0xNi0xNy41NC05LjA4LTEuOTMtMi43NS05LjczLTEzLjkyLTEuNjEtMi4zYTcwLjIgNzAuMiAwIDAwLTExLjcgNi4wN0w0NiA2Ny4xNGwzOC4yMi0yNC41MyA1MS4zOS0zMi45NGEuNjQuNjQgMCAwMS44OS4xNy42LjYgMCAwMS4xMS4zNGwyLjg2IDYxIC4yIDQuMzEuMTMgMi43NS42MSAxMy4wOXoiIGZpbGw9IiMwMjEwMWEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0OS44ODkgMTQyLjIzMikiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNDIuMzIgMTMyLjE0YS42Ni42NiAwIDAxLS42NC42OS43NS43NSAwIDAxLS4zNC0uMDhMMTExIDExNy4wNWwtMTcuNzQtMjUuMy0uMjEtLjMgMTcuNTQgOS4wNiAzMSAxNnoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0OS44ODkgMTQyLjIzMikiIGZpbGw9IiM4YmE2YzUiLz48L3N2Zz4=" : "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA4MDAgODAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGU+LnN0MHtmaWxsOiMwMDc3Yzh9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjQxLjQgNTU1LjZjLTI3LjItMTIuMS01OS4xLjItNzEuMiAyNy4zLS41IDEtLjggMi4xLTEuMiAzLjJIMTYwbDIyNy42LTM5NC4zIDE3MC4xIDI5Mi44IDMyLjQtMTguOEwzODcuNSAxMTcgOTUgNjIzLjZoNDc0YzQuOSAxMy4xIDE0LjggMjQuNCAyOC42IDMwLjUgNy4xIDMuMiAxNC41IDQuNyAyMS44IDQuNyAyMC43IDAgNDAuNC0xMS45IDQ5LjMtMzIgMTIuMS0yNy4xLS4xLTU5LjEtMjcuMy03MS4yem0xLjYgNTkuOGMtNS44IDEzLTIxLjEgMTguOS0zNCAxMy4xLTEzLTUuOC0xOC45LTIxLjEtMTMuMS0zNCA0LjMtOS42IDEzLjctMTUuMyAyMy42LTE1LjMgMy41IDAgNy4xLjcgMTAuNCAyLjIgMTMuMSA1LjcgMTguOSAyMSAxMy4xIDM0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNzkgNTQ5LjloLTI3LjZ2LTE2LjdjLTcuNCAxMy41LTIyLjggMjAuMi0zOSAyMC4yLTM3LjEgMC01OC45LTI4LjktNTguOS02MS42IDAtMzYuNSAyNi40LTYxLjQgNTguOS02MS40IDIxLjEgMCAzNCAxMS4yIDM5IDIwLjVWNDM0SDM3OXYxMTUuOXptLTk3LjgtNTcuNGMwIDE0LjMgMTAuMyAzNS4yIDM1LjIgMzUuMiAxNS40IDAgMjUuNS04IDMwLjgtMTguNiAyLjctNS4xIDQtMTAuNSA0LjQtMTYuMi4yLTUuNS0uOC0xMS4yLTMuMi0xNi4yLTQuOS0xMS0xNS42LTIwLjUtMzIuMy0yMC41LTIyLjQgMC0zNSAxOC4xLTM1IDM2LjF2LjJ6bTE1NS0zLjZsLTM5LTU0LjhoMzMuM2wyMi42IDM1LjYgMjIuNi0zNS42aDMyLjlsLTM4LjggNTQuOCA0My4yIDYxaC0zNEw0NTMuMSA1MTBsLTI2LjIgMzkuOWgtMzMuNWw0Mi44LTYxeiIvPjwvc3ZnPg==",
                        alt: e ? "axe coconut" : "axe"
                    })), i.createElement("h1", null, e ? h : "axe DevTools", " v", b), i.createElement("a", {
                        href: "https://github.com/dequelabs/axe-core",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "axe-core"), i.createElement("span", null, " ", v), i.createElement("p", null, s.ZP `To start testing for accessibility, open the
          browser’s Developer Tools, navigate to the ${"axe DevTools"}
          tab, and run an analysis on a webpage.`), e && i.createElement("p", null, s.ZP `Provide feedback:`, " ", i.createElement("a", {
                        href: "mailto:axe@deque.com?subject=axe%20Coconut%20Extension%20Feedback",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, "axe@deque.com")), i.createElement("p", null, i.createElement("a", {
                        href: `https://www.deque.com/company${S({utm_campaign:"pin_about_deque"})}`,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, s.ZP `About Deque`), " ", "·", " ", i.createElement("a", {
                        href: `https://www.deque.com/privacy-policy${S({utm_campaign:"pin_privacy_policy"})}`,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, s.ZP `Privacy Policy`), " ", "·", " ", i.createElement("a", {
                        href: `https://www.deque.com/terms-of-use${S({utm_campaign:"pin_terms"})}`,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, s.ZP `Terms of Service`)), i.createElement("p", null, s.ZP `© Copyright ${a.toString()} Deque Systems, Inc`)))
                };
                $.propTypes = {
                    coconut: o().bool.isRequired
                };
                const F = $;

                function q(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function G(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? q(Object(n), !0).forEach((function(t) {
                            V(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function V(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const W = /(<(\d+)>.*?<\/\2>|\${\d+}|[^<{]+)/g,
                    B = /^<(\d+)>(.*?)<\/\d+>$/;

                function H(e, t = {
                    index: 0
                }, n = {
                    index: 0
                }) {
                    if (!e) return "";
                    Array.isArray(e) || (e = [e]);
                    const r = [];
                    for (let a of e) {
                        const e = a.props && a.props.children;
                        if ("string" == typeof a) r.push(a);
                        else if (e && "string" == typeof a.props.children) r.push(`<${t.index}>${a.props.children}</${t.index}>`), t.index++;
                        else if (e) {
                            let e = t.index;
                            t.index++, r.push(`<${e}>${H(a.props.children,t,n)}</${e}>`)
                        } else i.isValidElement(a) && !e ? (r.push(`<${t.index}></${t.index}>`), t.index++) : "object" == typeof a && (r.push(`\${${n.index}}`), n.index++)
                    }
                    return r.join("")
                }

                function Q(e, t = [], n = []) {
                    if (!e) return {
                        nodes: t,
                        values: n
                    };
                    for (var r of (Array.isArray(e) || (e = [e]), e)) {
                        const e = r.props && r.props.children;
                        if (i.isValidElement(r) && t.push(r), "object" != typeof r || i.isValidElement(r)) e && Q(r.props.children, t, n);
                        else {
                            const e = r["value" in r ? "value" : Object.keys(r).find((e => !["format", "formatter"].includes(e)))],
                                {
                                    format: t,
                                    formatter: i
                                } = r;
                            n.push({
                                value: e,
                                format: t,
                                formatter: i
                            })
                        }
                    }
                    return {
                        nodes: t,
                        values: n
                    }
                }
                const Y = ({
                    children: e
                }) => {
                    const {
                        nodes: t,
                        values: n
                    } = Q(e), r = function(e) {
                        const t = [],
                            n = e.match(W);
                        for (let e = 0; e < n.length; e++) {
                            const i = n[e],
                                r = i.match(B);
                            let a;
                            if (r) {
                                let [, e, t] = r;
                                a = {
                                    type: 1,
                                    children: t,
                                    index: parseFloat(e, 10)
                                }
                            } else a = {
                                type: 2,
                                children: i
                            };
                            t.push(a)
                        }
                        return t
                    }(s.ZP.translate(H(e), ...n)), a = function(e, t) {
                        const n = [];
                        for (const i of e) {
                            const {
                                index: e,
                                children: r
                            } = i, a = t[e];
                            let o;
                            switch (i.type) {
                                case 1:
                                    o = G(G({}, a), {}, {
                                        props: G(G({}, a.props), {}, {
                                            children: r
                                        })
                                    });
                                    break;
                                case 2:
                                    o = r
                            }
                            n.push(o)
                        }
                        return n
                    }(r, t);
                    return i.createElement(i.Fragment, null, a)
                };
                Y.propTypes = {
                    children: o().any
                };
                var K = n(89617),
                    Z = n.n(K);
                var X = n(47793),
                    J = n(65981),
                    ee = n(45741),
                    te = n.n(ee);
                const ne = {
                    coconut: "extension-coconut",
                    chrome: "extension-chrome",
                    firefox: "extension-firefox",
                    edge: "extension-edge"
                };
                let ie, re;
                const ae = async (e = !1, t) => {
                    let {
                        usageServerURL: n
                    } = await browser.storage.local.get("usageServerURL");
                    return !e && ie && n === re || (re = n, "default" === n && (n = "https://usage.deque.com"), ie = new(te())("axe-devtools-html", ne[t || "chrome"]), ie.url(n)), ie
                };
                let oe = console;
                const se = () => {
                        const e = {
                            NODE_ENV: "production",
                            COCONUT: "false",
                            EDGE: "false",
                            FIREFOX: "false",
                            IS_AXE_PRO: "true",
                            MANIFEST_VERSION: 3,
                            E2E: !1,
                            DOCS_SITE_URL: "https://docs.deque.com/devtools-html",
                            ISSUES_URL: "https://docs.deque.com/issue-help/1.0.0/en",
                            AXE_CONFIG_URL: "https://docs.deque.com/devtools-server/4.0.0/en/axe-configuration",
                            MANUAL_ISSUE_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-manual-issue",
                            WHATS_LEFT_TO_TEST_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-whatslefttotest",
                            USER_FLOW_URL: "https://docs.deque.com/devtools-html/4.0.0/en/user-flow-analysis",
                            AXE_PRO_TRIAL_PATH: "/axe-devtools-pro/trial",
                            ENV: "production",
                            AXE_PRO_URL: "https://axe.deque.com",
                            USAGE_SERVICE_URL: "https://usage.deque.com",
                            AMPLITUDE_API_KEY: "a1ce09d0b14ddcc12ab7b508b6606a2f",
                            DATADOG_CLIENT_TOKEN: "puba2eb4ed47c6eb69ce20ef237db754ff8"
                        }.LOGGING_ENABLED;
                        return "1" === e || "true" === e
                    },
                    le = (...e) => {
                        se() && oe.warn(...e)
                    };
                var ue = n(28020);
                let ce;
                async function de() {
                    var e;
                    return null === (e = await fe()) || void 0 === e ? void 0 : e.distinct_id
                }
                const fe = async () => {
                    if (ce) return ce;
                    const {
                        axeServerURL: e,
                        session: t
                    } = await browser.storage.local.get(["axeServerURL", "session"]);
                    return ce = await (0, ue.getDistinctIdCookie)({
                        host: "default" === e ? "https://axe.deque.com" : e,
                        origin: globalThis.location.origin,
                        token: t && t.access_token
                    }), ce
                };

                function pe(e, t) {
                    if (null == e) return {};
                    var n, i, r = function(e, t) {
                        if (null == e) return {};
                        var n, i, r = {},
                            a = Object.keys(e);
                        for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                    }
                    return r
                }

                function me(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        t && (i = i.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, i)
                    }
                    return n
                }

                function ge(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? me(Object(n), !0).forEach((function(t) {
                            he(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function he(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                const {
                    AMPLITUDE_API_KEY: be,
                    DATADOG_CLIENT_TOKEN: ve,
                    NODE_ENV: ye
                } = {
                    NODE_ENV: "production",
                    COCONUT: "false",
                    EDGE: "false",
                    FIREFOX: "false",
                    IS_AXE_PRO: "true",
                    MANIFEST_VERSION: 3,
                    E2E: !1,
                    DOCS_SITE_URL: "https://docs.deque.com/devtools-html",
                    ISSUES_URL: "https://docs.deque.com/issue-help/1.0.0/en",
                    AXE_CONFIG_URL: "https://docs.deque.com/devtools-server/4.0.0/en/axe-configuration",
                    MANUAL_ISSUE_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-manual-issue",
                    WHATS_LEFT_TO_TEST_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-whatslefttotest",
                    USER_FLOW_URL: "https://docs.deque.com/devtools-html/4.0.0/en/user-flow-analysis",
                    AXE_PRO_TRIAL_PATH: "/axe-devtools-pro/trial",
                    ENV: "production",
                    AXE_PRO_URL: "https://axe.deque.com",
                    USAGE_SERVICE_URL: "https://usage.deque.com",
                    AMPLITUDE_API_KEY: "a1ce09d0b14ddcc12ab7b508b6606a2f",
                    DATADOG_CLIENT_TOKEN: "puba2eb4ed47c6eb69ce20ef237db754ff8"
                }, we = X.Z.getInstance(), Se = "conversion:install", Te = "conversion:uninstall", Ee = "user:login", xe = "user:open", Ie = "analysis:analyze", ke = "record:delete", Ae = "record:rename", Ne = "analysis:complete", ze = "issues:export", Ce = "issue:inspected", Me = "issue:relatedInspected", Pe = "issue:toggleHighlight", Le = "issue:moreInfo", De = "ml:suggestedInteractiveElement", Oe = "ml:suggestedInteractiveElementRejected", Re = "ml:missedInteractiveElement", je = "ml:suggestedRole", Ue = "ml:suggestedRoleAccepted", _e = "ml:suggestedRoleRejected", $e = "ml:suggestedTableHeader", Fe = "ml:suggestedTableHeaderRejected", qe = "ml:suggestedNotDataCell", Ge = "ml:suggestedNotDataCellAccepted", Ve = "conversion:click:scanPart", We = "conversion:click:saveTest", Be = "conversion:click:export", He = "conversion:click:shareIssue", Qe = "analysis:startUFA", Ye = (e = [], t) => e.filter((({
                    impact: e
                }) => e === t)).reduce(((e, {
                    nodes: t
                }) => e + ((null == t ? void 0 : t.length) || 1)), 0), Ke = e => {
                    try {
                        const t = new URL(e);
                        return "localhost" === t.hostname || !!t.port || "file://" === t.origin
                    } catch (e) {
                        return !1
                    }
                }, Ze = e => {
                    if (void 0 === e) return;
                    const t = Array.from(new Set(e.map((e => e.rule || e.id)))),
                        n = {
                            failedRuleCount: t.length,
                            failedRuleNames: t,
                            criticalIssueCount: Ye(e, "critical"),
                            seriousIssueCount: Ye(e, "serious"),
                            moderateIssueCount: Ye(e, "moderate"),
                            minorIssueCount: Ye(e, "minor")
                        };
                    if (e.length && Array.isArray(e[0].nodes)) {
                        const t = e.reduce(((e, t) => e + t.nodes.length), 0);
                        n.failedItemCount = t
                    }
                    return n
                }, Xe = async e => {
                    const t = await ae(),
                        {
                            productName: n,
                            productComponent: i
                        } = t,
                        r = ge(ge({}, e), {}, {
                            productName: n,
                            productComponent: i
                        });
                    try {
                        let {
                            event: e
                        } = r, t = pe(r, ["event"]);
                        ut(e, t)
                    } catch (e) {
                        le("Analytics Data Error", {
                            error: e.message,
                            stack: e.stack
                        })
                    }
                    try {
                        t.postEvent(r)
                    } catch (e) {
                        le("Usage Data Error", {
                            error: e.message,
                            stack: e.stack
                        })
                    }
                }, Je = e => {
                    let t = "anonymous";
                    switch (null == e ? void 0 : e.status) {
                        case "trialing":
                            t = "trial";
                            break;
                        case "paid":
                        case "paid_payment_failed":
                        case "trial_ended":
                        case "trial_payment_failed":
                        case "free":
                        case "free_payment_failed":
                            t = e.status
                    }
                    return t
                }, et = async (e = []) => {
                    let t, n, i, r;
                    if ("devtools" in browser) try {
                        ({
                            contentType: t,
                            title: n,
                            url: i,
                            scoped: r
                        } = await U.send(_.content, "get-document-metadata"))
                    } catch (e) {
                        J.fy.logger.error("Unable to get document metadata", {
                            error: e.message,
                            stack: e.stack
                        })
                    }
                    const {
                        usageOrganization: a,
                        usageDepartment: o,
                        usageApplication: s,
                        user: l,
                        cachedUserCompany: u,
                        axeSettings: c,
                        userJobRole: d,
                        cachedUserEmail: f
                    } = await browser.storage.local.get(["usageOrganization", "usageDepartment", "usageApplication", "user", "cachedUserCompany", "axeSettings", "userJobRole", "cachedUserEmail"]), p = !(!l || !l.id);
                    return {
                        distinctId: await de(),
                        organization: a || ((null == l ? void 0 : l.company) || u || ""),
                        department: o || "",
                        application: s || "",
                        userStatus: Je(l),
                        loggedIn: p,
                        devInstance: Ke(i),
                        keycloakId: l && l.id,
                        userId: l && l.username || f,
                        userJobRole: d || "Anonymous",
                        productName: "axe-pro",
                        productComponent: "extension",
                        productComponentVersion: b,
                        applicationProperties: ge({
                            engineVersion: v,
                            scoped: r,
                            target: i,
                            targetMedium: t,
                            targetState: n,
                            experimental: !1,
                            rulesetName: (null == c ? void 0 : c.ruleset) || "all",
                            bestPractices: !!c && !!c.enableBestPractices
                        }, Ze(e))
                    }
                }, tt = e => async function(t, n) {
                    const i = await et(t);
                    if (!n) return Xe(ge(ge({}, i), {}, {
                        event: e
                    }));
                    Xe(ge(ge({}, i), {}, {
                        event: e,
                        applicationProperties: ge(ge({}, i.applicationProperties), n)
                    }))
                }, nt = e => t => tt(e)(void 0, t), it = (tt("issue:viewed"), nt(Ce), nt(Me), nt(Pe), nt(Le), tt(ke), tt(Ae), tt(Se), tt(Te), tt(Ee), tt(xe), (e, t = "interactive-elements") => n => tt(e)(void 0, ge({
                    eventTool: t
                }, n)));
                it(De), it(Oe), it(Re), it(je), it(Ue), it(_e), it($e, "table"), it(Fe, "table"), it(qe, "table"), it(Ge, "table"), tt(Ve), tt(We), tt(Be), tt(He), tt(Qe);
                let rt = !1,
                    at = !1;
                const ot = async () => {
                        if (rt) return;
                        const e = await de();
                        we.init(be, void 0, {
                            deviceId: e,
                            includeUtm: !0,
                            saveParamsReferrerOncePerSession: !1,
                            includeGclid: !0,
                            includeReferrer: !0,
                            secureCookie: !0,
                            sameSiteCookie: "Lax"
                        }), rt = !0
                    },
                    st = async () => {
                        if (void 0 !== globalThis.document && void 0 !== globalThis.XMLHttpRequest) {
                            if (at) return !0;
                            J.fy.init({
                                clientToken: ve,
                                site: "datadoghq.com",
                                service: "axe-extension",
                                env: ye,
                                version: b,
                                beforeSend: e => {
                                    var t;
                                    if (0 === (null == e || null === (t = e.http) || void 0 === t ? void 0 : t.status_code)) return !1
                                }
                            }), at = !0
                        }
                    },
                    lt = async () => {
                        await Promise.all([ot(), st()])
                    },
                    ut = async (e, t = {}) => {
                        await lt();
                        let n = {};
                        switch (e) {
                            case Ie:
                                n = {
                                    analyze: 1
                                };
                                break;
                            case Ne:
                                n = {
                                    complete: 1
                                };
                                break;
                            case ze:
                                n = {
                                    export: 1
                                }
                        }
                        await (async (e = {}) => {
                            const {
                                user: t,
                                userJobRole: n = "",
                                usageOrganization: i = "",
                                cachedUserCompany: r,
                                axeSettings: a,
                                highlightTheme: o,
                                theme: s,
                                locale: l,
                                policySettings: u,
                                axeServerURL: c,
                                firstView: d,
                                exportFormat: f
                            } = await browser.storage.local.get(["user", "userJobRole", "usageOrganization", "cachedUserCompany", "axeSettings", "highlightTheme", "theme", "locale", "policySettings", "axeServerURL", "firstView", "exportFormat"]);
                            we.setUserId(t && t.id);
                            const p = t && t.id,
                                m = (new we.Identify).set("role", n).set("userStatus", Je(t)).set("loggedIn", p).set("axeSettings", ge(ge({
                                    highlightTheme: o,
                                    theme: s,
                                    locale: l,
                                    axeServerURL: c
                                }, a), {}, {
                                    ruleset: (null == a ? void 0 : a.ruleset) || "all"
                                })).set("policySettings", u).set("firstView", d).set("exportSchema", f || "devtools");
                            for (const [t, n] of Object.entries(e)) isNaN(n) ? m.set(t, n) : m.add(t, n);
                            we.identify(m), we.setGroup("organization", i || (null == t ? void 0 : t.company) || r)
                        })(n);
                        const {
                            devInstance: i,
                            productName: r,
                            productComponent: a,
                            productComponentVersion: o,
                            engineVersion: s,
                            applicationProperties: l
                        } = t, u = ge({
                            devInstance: i,
                            productName: r,
                            productComponent: a,
                            productComponentVersion: o,
                            engineVersion: s
                        }, l);
                        we.logEvent(e, u)
                    },
                    {
                        ENV: ct
                    } = {
                        NODE_ENV: "production",
                        COCONUT: "false",
                        EDGE: "false",
                        FIREFOX: "false",
                        IS_AXE_PRO: "true",
                        MANIFEST_VERSION: 3,
                        E2E: !1,
                        DOCS_SITE_URL: "https://docs.deque.com/devtools-html",
                        ISSUES_URL: "https://docs.deque.com/issue-help/1.0.0/en",
                        AXE_CONFIG_URL: "https://docs.deque.com/devtools-server/4.0.0/en/axe-configuration",
                        MANUAL_ISSUE_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-manual-issue",
                        WHATS_LEFT_TO_TEST_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-whatslefttotest",
                        USER_FLOW_URL: "https://docs.deque.com/devtools-html/4.0.0/en/user-flow-analysis",
                        AXE_PRO_TRIAL_PATH: "/axe-devtools-pro/trial",
                        ENV: "production",
                        AXE_PRO_URL: "https://axe.deque.com",
                        USAGE_SERVICE_URL: "https://usage.deque.com",
                        AMPLITUDE_API_KEY: "a1ce09d0b14ddcc12ab7b508b6606a2f",
                        DATADOG_CLIENT_TOKEN: "puba2eb4ed47c6eb69ce20ef237db754ff8"
                    },
                    dt = {
                        name: "ECDSA",
                        namedCurve: "P-256"
                    },
                    ft = [],
                    pt = e => Uint8Array.from(e, (e => e.charCodeAt(0)));
                async function mt(e) {
                    const t = pt(atob(e.replace("-----BEGIN PUBLIC KEY-----\n", "").replace("\n-----END PUBLIC KEY-----", "")));
                    ft.push(crypto.subtle.importKey("spki", t, dt, !1, ["verify"]))
                }
                async function gt(e) {
                    const [...t] = await Promise.all(ft), [n, i] = e.split("."), r = function(e) {
                        const [t] = e.split(".");
                        let n;
                        try {
                            n = JSON.parse(atob(t))
                        } catch (e) {
                            return {}
                        }
                        return n
                    }(e), {
                        companyName: a,
                        expires: o
                    } = r;
                    if (!a || !o || Date.parse(o) < Date.now()) return !1;
                    let s;
                    try {
                        for (const e of t)
                            if (s = await crypto.subtle.verify({
                                    name: dt.name,
                                    hash: {
                                        name: "SHA-256"
                                    }
                                }, e, pt(atob(i)), pt(atob(n))), s) return !0
                    } catch (e) {
                        return !1
                    }
                    return !1
                }
                mt("-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE4I6vuqxFuZy/p2E6Uu1XG8+l7NPM\nBNv7hHCGS1PKcXUyhnbKRh6Jz9g5scDiXDLMu4cIXw2DB6a+05XjbAfZ7w==\n-----END PUBLIC KEY-----"), ["qa", "develop", "local"].includes(ct) && mt("-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5ffz2RRIkuyg44EY+waZs8Vjpyk3\noOXf/gwezF/jWleCndcovOkQHUvpjq/VbF29b6J/DUjVn53dF+nNQmFuHw==\n-----END PUBLIC KEY-----"), ["develop", "local"].includes(ct) && mt("-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE5YVRphV0GMLe0EhFWsCJDhLlfsJ+\nQex9hijlr1NaSoy+bYNmJd4vXl1BMXwWtigfYy7V3mbUccpwh1csPOdWOQ==\n-----END PUBLIC KEY-----"), "local" === ct && mt("-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEHToOR/GpP8owwWI8OIOI8RdmXHQ0\nkYiHIdtG6uGpDcjbQUs/pj3HkdZLsr5alePJQYdBAFCZM7Yf0/FU6qpyYw==\n-----END PUBLIC KEY-----\n");
                var ht = n(18412),
                    bt = n.n(ht);
                const vt = {
                    [n(97968).ProductSlugs.axeDevToolsExtension]: {
                        ufaStateLimit: 100
                    }
                };
                var yt = n(87160),
                    wt = n.n(yt);
                const St = (e, t = null) => {
                        const [n, r] = (0, i.useState)(t), [a, o] = (0, i.useState)(!t), [s, l] = (0, i.useState)(null);
                        return (0, i.useEffect)((() => {
                            (async () => {
                                try {
                                    const t = await e();
                                    r(t)
                                } catch (e) {
                                    l(e)
                                } finally {
                                    o(!1)
                                }
                            })()
                        }), [e]), {
                            data: n,
                            loading: a,
                            error: s
                        }
                    },
                    Tt = (0, i.createContext)(),
                    Et = {
                        axeServer: "https://axe.deque.com",
                        enableOffline: !1,
                        offlineLicenseKey: null,
                        loading: !1
                    };

                function xt({
                    children: e,
                    initialAxeServer: t = "default",
                    initialEnableOffline: n = Et.enableOffline,
                    initialOfflineLicenseKey: r = Et.offlineLicenseKey,
                    initialLoading: a = Et.loading,
                    ignoreLicenseValidation: o = !1,
                    initialServerInfo: s = null
                }) {
                    const [l = t, u, c] = k("axeServerURL", t), d = "default" === l ? Et.axeServer : l, [f = r, p, m] = k("offlineLicenseKey", r), [g = n, h, b] = k("enableOffline", n), v = (0, i.useCallback)((() => d ? async function(e) {
                        var t;
                        if ("https://axe.deque.com" === e) return {
                            billingServiceEnabled: !0,
                            isOnPrem: !1,
                            productInfo: vt,
                            isJazzbandEnabled: !0
                        };
                        const n = await fetch(`${e}/api/internal/server-info`);
                        if (n.ok && (null === (t = n.headers.get("Content-Type")) || void 0 === t || !t.includes("application/json"))) return {
                            billingServiceEnabled: !1,
                            isOnPrem: !0,
                            productInfo: vt,
                            isJazzbandEnabled: !1
                        };
                        if (!n.ok) return {
                            billingServiceEnabled: !0,
                            isOnPrem: !1,
                            productInfo: vt,
                            isJazzbandEnabled: !0
                        };
                        const {
                            billingServiceEnabled: i,
                            isOnPrem: r,
                            productInfo: a,
                            isJazzbandEnabled: o
                        } = await n.json();
                        return {
                            billingServiceEnabled: "boolean" == typeof i && i,
                            isJazzbandEnabled: "boolean" == typeof o && o,
                            isOnPrem: "boolean" != typeof r || r,
                            productInfo: bt()(vt, a || {})
                        }
                    }(d) : null), [d]), {
                        data: y,
                        loading: w
                    } = St(v, s), S = y || s, T = N(null), [E, x] = (0, i.useState)(!0), I = a || c || b || m || w || E;
                    (0, i.useEffect)((() => {
                        T && x(!1), null != T && T.AxeURL && u(T.AxeURL), null != T && T.OfflineLicenseKey && p(T.OfflineLicenseKey)
                    }), [!!T, null == T ? void 0 : T.AxeURL, null == T ? void 0 : T.OfflineLicenseKey]), (0, i.useEffect)((() => {
                        o || (async () => {
                            const e = !!f && await gt(f);
                            h(!0 === e)
                        })()
                    }), [f, o]);
                    const A = {
                        axeServer: d,
                        setAxeServer: e => {
                            u(e === Et.axeServer ? "default" : wt()(e))
                        },
                        isOnPrem: !(null == S || !S.isOnPrem),
                        enableOffline: g,
                        offlineLicenseKey: f,
                        setOfflineLicenseKey: p,
                        defaultSettings: Et,
                        serverInfo: S,
                        loading: I
                    };
                    return i.createElement(Tt.Provider, {
                        value: A
                    }, e)
                }
                xt.propTypes = {
                    children: o().node,
                    initialAxeServer: o().string,
                    initialPolicyConfig: o().object,
                    initialEnableOffline: o().bool,
                    initialOfflineLicenseKey: o().string,
                    ignoreLicenseValidation: o().bool,
                    initialLoading: o().bool,
                    initialServerInfo: o().object
                };
                const {
                    COCONUT: It = "false"
                } = {
                    NODE_ENV: "production",
                    COCONUT: "false",
                    EDGE: "false",
                    FIREFOX: "false",
                    IS_AXE_PRO: "true",
                    MANIFEST_VERSION: 3,
                    E2E: !1,
                    DOCS_SITE_URL: "https://docs.deque.com/devtools-html",
                    ISSUES_URL: "https://docs.deque.com/issue-help/1.0.0/en",
                    AXE_CONFIG_URL: "https://docs.deque.com/devtools-server/4.0.0/en/axe-configuration",
                    MANUAL_ISSUE_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-manual-issue",
                    WHATS_LEFT_TO_TEST_URL: "https://docs.deque.com/devtools-html/4.0.0/en/devtools-whatslefttotest",
                    USER_FLOW_URL: "https://docs.deque.com/devtools-html/4.0.0/en/user-flow-analysis",
                    AXE_PRO_TRIAL_PATH: "/axe-devtools-pro/trial",
                    ENV: "production",
                    AXE_PRO_URL: "https://axe.deque.com",
                    USAGE_SERVICE_URL: "https://usage.deque.com",
                    AMPLITUDE_API_KEY: "a1ce09d0b14ddcc12ab7b508b6606a2f",
                    DATADOG_CLIENT_TOKEN: "puba2eb4ed47c6eb69ce20ef237db754ff8"
                }, kt = "true" === It;
                lt();
                const At = document.createElement("div");
                document.body.appendChild(At), browser.storage.local.get("config").then((({
                    config: e
                }) => {
                    const {
                        locale: t = "default"
                    } = e || {};
                    ! function(e) {
                        "default" === e && (e = navigator.language && navigator.language.substr(0, 2), Z()[e] || (e = "en")), "en" !== e ? s.E3(Z()[e] || {}) : s.E3({
                            locales: "en",
                            translations: {}
                        })
                    }(t), r.render(i.createElement(xt, null, i.createElement(F, {
                        coconut: kt
                    })), At)
                }))
            },
            60042: (e, t) => {
                var n;
                ! function() {
                    "use strict";
                    var i = {}.hasOwnProperty;

                    function r() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            if (n) {
                                var a = typeof n;
                                if ("string" === a || "number" === a) e.push(n);
                                else if (Array.isArray(n)) {
                                    if (n.length) {
                                        var o = r.apply(null, n);
                                        o && e.push(o)
                                    }
                                } else if ("object" === a)
                                    if (n.toString === Object.prototype.toString)
                                        for (var s in n) i.call(n, s) && n[s] && e.push(s);
                                    else e.push(n.toString())
                            }
                        }
                        return e.join(" ")
                    }
                    e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function() {
                        return r
                    }.apply(t, [])) || (e.exports = n)
                }()
            },
            43577: (e, t, n) => {
                "use strict";
                var i = n(27378),
                    r = n(62525),
                    a = n(91102);

                function o(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!i) throw Error(o(227));

                function s(e, t, n, i, r, a, o, s, l) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, u)
                    } catch (e) {
                        this.onError(e)
                    }
                }
                var l = !1,
                    u = null,
                    c = !1,
                    d = null,
                    f = {
                        onError: function(e) {
                            l = !0, u = e
                        }
                    };

                function p(e, t, n, i, r, a, o, c, d) {
                    l = !1, u = null, s.apply(f, arguments)
                }
                var m = null,
                    g = null,
                    h = null;

                function b(e, t, n) {
                    var i = e.type || "unknown-event";
                    e.currentTarget = h(n),
                        function(e, t, n, i, r, a, s, f, m) {
                            if (p.apply(this, arguments), l) {
                                if (!l) throw Error(o(198));
                                var g = u;
                                l = !1, u = null, c || (c = !0, d = g)
                            }
                        }(i, t, void 0, e), e.currentTarget = null
                }
                var v = null,
                    y = {};

                function w() {
                    if (v)
                        for (var e in y) {
                            var t = y[e],
                                n = v.indexOf(e);
                            if (!(-1 < n)) throw Error(o(96, e));
                            if (!T[n]) {
                                if (!t.extractEvents) throw Error(o(97, e));
                                for (var i in T[n] = t, n = t.eventTypes) {
                                    var r = void 0,
                                        a = n[i],
                                        s = t,
                                        l = i;
                                    if (E.hasOwnProperty(l)) throw Error(o(99, l));
                                    E[l] = a;
                                    var u = a.phasedRegistrationNames;
                                    if (u) {
                                        for (r in u) u.hasOwnProperty(r) && S(u[r], s, l);
                                        r = !0
                                    } else a.registrationName ? (S(a.registrationName, s, l), r = !0) : r = !1;
                                    if (!r) throw Error(o(98, i, e))
                                }
                            }
                        }
                }

                function S(e, t, n) {
                    if (x[e]) throw Error(o(100, e));
                    x[e] = t, I[e] = t.eventTypes[n].dependencies
                }
                var T = [],
                    E = {},
                    x = {},
                    I = {};

                function k(e) {
                    var t, n = !1;
                    for (t in e)
                        if (e.hasOwnProperty(t)) {
                            var i = e[t];
                            if (!y.hasOwnProperty(t) || y[t] !== i) {
                                if (y[t]) throw Error(o(102, t));
                                y[t] = i, n = !0
                            }
                        }
                    n && w()
                }
                var A = !(void 0 === window.document || void 0 === window.document.createElement),
                    N = null,
                    z = null,
                    C = null;

                function M(e) {
                    if (e = g(e)) {
                        if ("function" != typeof N) throw Error(o(280));
                        var t = e.stateNode;
                        t && (t = m(t), N(e.stateNode, e.type, t))
                    }
                }

                function P(e) {
                    z ? C ? C.push(e) : C = [e] : z = e
                }

                function L() {
                    if (z) {
                        var e = z,
                            t = C;
                        if (C = z = null, M(e), t)
                            for (e = 0; e < t.length; e++) M(t[e])
                    }
                }

                function D(e, t) {
                    return e(t)
                }

                function O(e, t, n, i, r) {
                    return e(t, n, i, r)
                }

                function R() {}
                var j = D,
                    U = !1,
                    _ = !1;

                function $() {
                    null === z && null === C || (R(), L())
                }

                function F(e, t, n) {
                    if (_) return e(t, n);
                    _ = !0;
                    try {
                        return j(e, t, n)
                    } finally {
                        _ = !1, $()
                    }
                }
                var q = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    G = Object.prototype.hasOwnProperty,
                    V = {},
                    W = {};

                function B(e, t, n, i, r, a) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a
                }
                var H = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    H[e] = new B(e, 0, !1, e, null, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    H[t] = new B(t, 1, !1, e[1], null, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    H[e] = new B(e, 2, !1, e.toLowerCase(), null, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    H[e] = new B(e, 2, !1, e, null, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    H[e] = new B(e, 3, !1, e.toLowerCase(), null, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    H[e] = new B(e, 3, !0, e, null, !1)
                })), ["capture", "download"].forEach((function(e) {
                    H[e] = new B(e, 4, !1, e, null, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    H[e] = new B(e, 6, !1, e, null, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    H[e] = new B(e, 5, !1, e.toLowerCase(), null, !1)
                }));
                var Q = /[\-:]([a-z])/g;

                function Y(e) {
                    return e[1].toUpperCase()
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(Q, Y);
                    H[t] = new B(t, 1, !1, e, null, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(Q, Y);
                    H[t] = new B(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(Q, Y);
                    H[t] = new B(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    H[e] = new B(e, 1, !1, e.toLowerCase(), null, !1)
                })), H.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
                    H[e] = new B(e, 1, !1, e.toLowerCase(), null, !0)
                }));
                var K = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

                function Z(e, t, n, i) {
                    var r = H.hasOwnProperty(t) ? H[t] : null;
                    (null !== r ? 0 === r.type : !i && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, i) {
                        if (null == t || function(e, t, n, i) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, i)) return !0;
                        if (i) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, r, i) && (n = null), i || null === r ? function(e) {
                        return !!G.call(W, e) || !G.call(V, e) && (q.test(e) ? W[e] = !0 : (V[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, i = r.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
                }
                K.hasOwnProperty("ReactCurrentDispatcher") || (K.ReactCurrentDispatcher = {
                    current: null
                }), K.hasOwnProperty("ReactCurrentBatchConfig") || (K.ReactCurrentBatchConfig = {
                    suspense: null
                });
                var X = /^(.*)[\\\/]/,
                    J = "function" == typeof Symbol && Symbol.for,
                    ee = J ? Symbol.for("react.element") : 60103,
                    te = J ? Symbol.for("react.portal") : 60106,
                    ne = J ? Symbol.for("react.fragment") : 60107,
                    ie = J ? Symbol.for("react.strict_mode") : 60108,
                    re = J ? Symbol.for("react.profiler") : 60114,
                    ae = J ? Symbol.for("react.provider") : 60109,
                    oe = J ? Symbol.for("react.context") : 60110,
                    se = J ? Symbol.for("react.concurrent_mode") : 60111,
                    le = J ? Symbol.for("react.forward_ref") : 60112,
                    ue = J ? Symbol.for("react.suspense") : 60113,
                    ce = J ? Symbol.for("react.suspense_list") : 60120,
                    de = J ? Symbol.for("react.memo") : 60115,
                    fe = J ? Symbol.for("react.lazy") : 60116,
                    pe = J ? Symbol.for("react.block") : 60121,
                    me = "function" == typeof Symbol && Symbol.iterator;

                function ge(e) {
                    return null === e || "object" != typeof e ? null : "function" == typeof(e = me && e[me] || e["@@iterator"]) ? e : null
                }

                function he(e) {
                    if (null == e) return null;
                    if ("function" == typeof e) return e.displayName || e.name || null;
                    if ("string" == typeof e) return e;
                    switch (e) {
                        case ne:
                            return "Fragment";
                        case te:
                            return "Portal";
                        case re:
                            return "Profiler";
                        case ie:
                            return "StrictMode";
                        case ue:
                            return "Suspense";
                        case ce:
                            return "SuspenseList"
                    }
                    if ("object" == typeof e) switch (e.$$typeof) {
                        case oe:
                            return "Context.Consumer";
                        case ae:
                            return "Context.Provider";
                        case le:
                            var t = e.render;
                            return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case de:
                            return he(e.type);
                        case pe:
                            return he(e.render);
                        case fe:
                            if (e = 1 === e._status ? e._result : null) return he(e)
                    }
                    return null
                }

                function be(e) {
                    var t = "";
                    do {
                        e: switch (e.tag) {
                            case 3:
                            case 4:
                            case 6:
                            case 7:
                            case 10:
                            case 9:
                                var n = "";
                                break e;
                            default:
                                var i = e._debugOwner,
                                    r = e._debugSource,
                                    a = he(e.type);
                                n = null, i && (n = he(i.type)), i = a, a = "", r ? a = " (at " + r.fileName.replace(X, "") + ":" + r.lineNumber + ")" : n && (a = " (created by " + n + ")"), n = "\n    in " + (i || "Unknown") + a
                        }
                        t += n,
                        e = e.return
                    } while (e);
                    return t
                }

                function ve(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e;
                        default:
                            return ""
                    }
                }

                function ye(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function we(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = ye(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            i = "" + e[t];
                        if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                            var r = n.get,
                                a = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return r.call(this)
                                },
                                set: function(e) {
                                    i = "" + e, a.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return i
                                },
                                setValue: function(e) {
                                    i = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function Se(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        i = "";
                    return e && (i = ye(e) ? e.checked ? "true" : "false" : e.value), (e = i) !== n && (t.setValue(e), !0)
                }

                function Te(e, t) {
                    var n = t.checked;
                    return r({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function Ee(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        i = null != t.checked ? t.checked : t.defaultChecked;
                    n = ve(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: i,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function xe(e, t) {
                    null != (t = t.checked) && Z(e, "checked", t, !1)
                }

                function Ie(e, t) {
                    xe(e, t);
                    var n = ve(t.value),
                        i = t.type;
                    if (null != n) "number" === i ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === i || "reset" === i) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? Ae(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ae(e, t.type, ve(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function ke(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var i = t.type;
                        if (!("submit" !== i && "reset" !== i || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function Ae(e, t, n) {
                    "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }

                function Ne(e, t) {
                    return e = r({
                        children: void 0
                    }, t), (t = function(e) {
                        var t = "";
                        return i.Children.forEach(e, (function(e) {
                            null != e && (t += e)
                        })), t
                    }(t.children)) && (e.children = t), e
                }

                function ze(e, t, n, i) {
                    if (e = e.options, t) {
                        t = {};
                        for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
                        for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && i && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + ve(n), t = null, r = 0; r < e.length; r++) {
                            if (e[r].value === n) return e[r].selected = !0, void(i && (e[r].defaultSelected = !0));
                            null !== t || e[r].disabled || (t = e[r])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function Ce(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
                    return r({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function Me(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(o(92));
                            if (Array.isArray(n)) {
                                if (!(1 >= n.length)) throw Error(o(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: ve(n)
                    }
                }

                function Pe(e, t) {
                    var n = ve(t.value),
                        i = ve(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != i && (e.defaultValue = "" + i)
                }

                function Le(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }
                var De = "http://www.w3.org/1999/xhtml",
                    Oe = "http://www.w3.org/2000/svg";

                function Re(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function je(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? Re(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var Ue, _e, $e = (_e = function(e, t) {
                    if (e.namespaceURI !== Oe || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((Ue = Ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, i) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return _e(e, t)
                    }))
                } : _e);

                function Fe(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }

                function qe(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Ge = {
                        animationend: qe("Animation", "AnimationEnd"),
                        animationiteration: qe("Animation", "AnimationIteration"),
                        animationstart: qe("Animation", "AnimationStart"),
                        transitionend: qe("Transition", "TransitionEnd")
                    },
                    Ve = {},
                    We = {};

                function Be(e) {
                    if (Ve[e]) return Ve[e];
                    if (!Ge[e]) return e;
                    var t, n = Ge[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in We) return Ve[e] = n[t];
                    return e
                }
                A && (We = document.createElement("div").style, "AnimationEvent" in window || (delete Ge.animationend.animation, delete Ge.animationiteration.animation, delete Ge.animationstart.animation), "TransitionEvent" in window || delete Ge.transitionend.transition);
                var He = Be("animationend"),
                    Qe = Be("animationiteration"),
                    Ye = Be("animationstart"),
                    Ke = Be("transitionend"),
                    Ze = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Xe = new("function" == typeof WeakMap ? WeakMap : Map);

                function Je(e) {
                    var t = Xe.get(e);
                    return void 0 === t && (t = new Map, Xe.set(e, t)), t
                }

                function et(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function tt(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function nt(e) {
                    if (et(e) !== e) throw Error(o(188))
                }

                function it(e) {
                    if (e = function(e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = et(e))) throw Error(o(188));
                                return t !== e ? null : e
                            }
                            for (var n = e, i = t;;) {
                                var r = n.return;
                                if (null === r) break;
                                var a = r.alternate;
                                if (null === a) {
                                    if (null !== (i = r.return)) {
                                        n = i;
                                        continue
                                    }
                                    break
                                }
                                if (r.child === a.child) {
                                    for (a = r.child; a;) {
                                        if (a === n) return nt(r), e;
                                        if (a === i) return nt(r), t;
                                        a = a.sibling
                                    }
                                    throw Error(o(188))
                                }
                                if (n.return !== i.return) n = r, i = a;
                                else {
                                    for (var s = !1, l = r.child; l;) {
                                        if (l === n) {
                                            s = !0, n = r, i = a;
                                            break
                                        }
                                        if (l === i) {
                                            s = !0, i = r, n = a;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!s) {
                                        for (l = a.child; l;) {
                                            if (l === n) {
                                                s = !0, n = a, i = r;
                                                break
                                            }
                                            if (l === i) {
                                                s = !0, i = a, n = r;
                                                break
                                            }
                                            l = l.sibling
                                        }
                                        if (!s) throw Error(o(189))
                                    }
                                }
                                if (n.alternate !== i) throw Error(o(190))
                            }
                            if (3 !== n.tag) throw Error(o(188));
                            return n.stateNode.current === n ? e : t
                        }(e), !e) return null;
                    for (var t = e;;) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        if (t.child) t.child.return = t, t = t.child;
                        else {
                            if (t === e) break;
                            for (; !t.sibling;) {
                                if (!t.return || t.return === e) return null;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return null
                }

                function rt(e, t) {
                    if (null == t) throw Error(o(30));
                    return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
                }

                function at(e, t, n) {
                    Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
                }
                var ot = null;

                function st(e) {
                    if (e) {
                        var t = e._dispatchListeners,
                            n = e._dispatchInstances;
                        if (Array.isArray(t))
                            for (var i = 0; i < t.length && !e.isPropagationStopped(); i++) b(e, t[i], n[i]);
                        else t && b(e, t, n);
                        e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
                    }
                }

                function lt(e) {
                    if (null !== e && (ot = rt(ot, e)), e = ot, ot = null, e) {
                        if (at(e, st), ot) throw Error(o(95));
                        if (c) throw e = d, c = !1, d = null, e
                    }
                }

                function ut(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }

                function ct(e) {
                    if (!A) return !1;
                    var t = (e = "on" + e) in document;
                    return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
                }
                var dt = [];

                function ft(e) {
                    e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > dt.length && dt.push(e)
                }

                function pt(e, t, n, i) {
                    if (dt.length) {
                        var r = dt.pop();
                        return r.topLevelType = e, r.eventSystemFlags = i, r.nativeEvent = t, r.targetInst = n, r
                    }
                    return {
                        topLevelType: e,
                        eventSystemFlags: i,
                        nativeEvent: t,
                        targetInst: n,
                        ancestors: []
                    }
                }

                function mt(e) {
                    var t = e.targetInst,
                        n = t;
                    do {
                        if (!n) {
                            e.ancestors.push(n);
                            break
                        }
                        var i = n;
                        if (3 === i.tag) i = i.stateNode.containerInfo;
                        else {
                            for (; i.return;) i = i.return;
                            i = 3 !== i.tag ? null : i.stateNode.containerInfo
                        }
                        if (!i) break;
                        5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = Mn(i)
                    } while (n);
                    for (n = 0; n < e.ancestors.length; n++) {
                        t = e.ancestors[n];
                        var r = ut(e.nativeEvent);
                        i = e.topLevelType;
                        var a = e.nativeEvent,
                            o = e.eventSystemFlags;
                        0 === n && (o |= 64);
                        for (var s = null, l = 0; l < T.length; l++) {
                            var u = T[l];
                            u && (u = u.extractEvents(i, t, a, r, o)) && (s = rt(s, u))
                        }
                        lt(s)
                    }
                }

                function gt(e, t, n) {
                    if (!n.has(e)) {
                        switch (e) {
                            case "scroll":
                                Yt(t, "scroll", !0);
                                break;
                            case "focus":
                            case "blur":
                                Yt(t, "focus", !0), Yt(t, "blur", !0), n.set("blur", null), n.set("focus", null);
                                break;
                            case "cancel":
                            case "close":
                                ct(e) && Yt(t, e, !0);
                                break;
                            case "invalid":
                            case "submit":
                            case "reset":
                                break;
                            default:
                                -1 === Ze.indexOf(e) && Qt(e, t)
                        }
                        n.set(e, null)
                    }
                }
                var ht, bt, vt, yt = !1,
                    wt = [],
                    St = null,
                    Tt = null,
                    Et = null,
                    xt = new Map,
                    It = new Map,
                    kt = [],
                    At = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
                    Nt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

                function zt(e, t, n, i, r) {
                    return {
                        blockedOn: e,
                        topLevelType: t,
                        eventSystemFlags: 32 | n,
                        nativeEvent: r,
                        container: i
                    }
                }

                function Ct(e, t) {
                    switch (e) {
                        case "focus":
                        case "blur":
                            St = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            Tt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Et = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            xt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            It.delete(t.pointerId)
                    }
                }

                function Mt(e, t, n, i, r, a) {
                    return null === e || e.nativeEvent !== a ? (e = zt(t, n, i, r, a), null !== t && (null !== (t = Pn(t)) && bt(t)), e) : (e.eventSystemFlags |= i, e)
                }

                function Pt(e) {
                    var t = Mn(e.target);
                    if (null !== t) {
                        var n = et(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = tt(n))) return e.blockedOn = t, void a.unstable_runWithPriority(e.priority, (function() {
                                    vt(n)
                                }))
                            } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Lt(e) {
                    if (null !== e.blockedOn) return !1;
                    var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                    if (null !== t) {
                        var n = Pn(t);
                        return null !== n && bt(n), e.blockedOn = t, !1
                    }
                    return !0
                }

                function Dt(e, t, n) {
                    Lt(e) && n.delete(t)
                }

                function Ot() {
                    for (yt = !1; 0 < wt.length;) {
                        var e = wt[0];
                        if (null !== e.blockedOn) {
                            null !== (e = Pn(e.blockedOn)) && ht(e);
                            break
                        }
                        var t = Jt(e.topLevelType, e.eventSystemFlags, e.container, e.nativeEvent);
                        null !== t ? e.blockedOn = t : wt.shift()
                    }
                    null !== St && Lt(St) && (St = null), null !== Tt && Lt(Tt) && (Tt = null), null !== Et && Lt(Et) && (Et = null), xt.forEach(Dt), It.forEach(Dt)
                }

                function Rt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, yt || (yt = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Ot)))
                }

                function jt(e) {
                    function t(t) {
                        return Rt(t, e)
                    }
                    if (0 < wt.length) {
                        Rt(wt[0], e);
                        for (var n = 1; n < wt.length; n++) {
                            var i = wt[n];
                            i.blockedOn === e && (i.blockedOn = null)
                        }
                    }
                    for (null !== St && Rt(St, e), null !== Tt && Rt(Tt, e), null !== Et && Rt(Et, e), xt.forEach(t), It.forEach(t), n = 0; n < kt.length; n++)(i = kt[n]).blockedOn === e && (i.blockedOn = null);
                    for (; 0 < kt.length && null === (n = kt[0]).blockedOn;) Pt(n), null === n.blockedOn && kt.shift()
                }
                var Ut = {},
                    _t = new Map,
                    $t = new Map,
                    Ft = ["abort", "abort", He, "animationEnd", Qe, "animationIteration", Ye, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ke, "transitionEnd", "waiting", "waiting"];

                function qt(e, t) {
                    for (var n = 0; n < e.length; n += 2) {
                        var i = e[n],
                            r = e[n + 1],
                            a = "on" + (r[0].toUpperCase() + r.slice(1));
                        a = {
                            phasedRegistrationNames: {
                                bubbled: a,
                                captured: a + "Capture"
                            },
                            dependencies: [i],
                            eventPriority: t
                        }, $t.set(i, t), _t.set(i, a), Ut[r] = a
                    }
                }
                qt("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), qt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), qt(Ft, 2);
                for (var Gt = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Vt = 0; Vt < Gt.length; Vt++) $t.set(Gt[Vt], 0);
                var Wt = a.unstable_UserBlockingPriority,
                    Bt = a.unstable_runWithPriority,
                    Ht = !0;

                function Qt(e, t) {
                    Yt(t, e, !1)
                }

                function Yt(e, t, n) {
                    var i = $t.get(t);
                    switch (void 0 === i ? 2 : i) {
                        case 0:
                            i = Kt.bind(null, t, 1, e);
                            break;
                        case 1:
                            i = Zt.bind(null, t, 1, e);
                            break;
                        default:
                            i = Xt.bind(null, t, 1, e)
                    }
                    n ? e.addEventListener(t, i, !0) : e.addEventListener(t, i, !1)
                }

                function Kt(e, t, n, i) {
                    U || R();
                    var r = Xt,
                        a = U;
                    U = !0;
                    try {
                        O(r, e, t, n, i)
                    } finally {
                        (U = a) || $()
                    }
                }

                function Zt(e, t, n, i) {
                    Bt(Wt, Xt.bind(null, e, t, n, i))
                }

                function Xt(e, t, n, i) {
                    if (Ht)
                        if (0 < wt.length && -1 < At.indexOf(e)) e = zt(null, e, t, n, i), wt.push(e);
                        else {
                            var r = Jt(e, t, n, i);
                            if (null === r) Ct(e, i);
                            else if (-1 < At.indexOf(e)) e = zt(r, e, t, n, i), wt.push(e);
                            else if (! function(e, t, n, i, r) {
                                    switch (t) {
                                        case "focus":
                                            return St = Mt(St, e, t, n, i, r), !0;
                                        case "dragenter":
                                            return Tt = Mt(Tt, e, t, n, i, r), !0;
                                        case "mouseover":
                                            return Et = Mt(Et, e, t, n, i, r), !0;
                                        case "pointerover":
                                            var a = r.pointerId;
                                            return xt.set(a, Mt(xt.get(a) || null, e, t, n, i, r)), !0;
                                        case "gotpointercapture":
                                            return a = r.pointerId, It.set(a, Mt(It.get(a) || null, e, t, n, i, r)), !0
                                    }
                                    return !1
                                }(r, e, t, n, i)) {
                                Ct(e, i), e = pt(e, i, null, t);
                                try {
                                    F(mt, e)
                                } finally {
                                    ft(e)
                                }
                            }
                        }
                }

                function Jt(e, t, n, i) {
                    if (null !== (n = Mn(n = ut(i)))) {
                        var r = et(n);
                        if (null === r) n = null;
                        else {
                            var a = r.tag;
                            if (13 === a) {
                                if (null !== (n = tt(r))) return n;
                                n = null
                            } else if (3 === a) {
                                if (r.stateNode.hydrate) return 3 === r.tag ? r.stateNode.containerInfo : null;
                                n = null
                            } else r !== n && (n = null)
                        }
                    }
                    e = pt(e, i, n, t);
                    try {
                        F(mt, e)
                    } finally {
                        ft(e)
                    }
                    return null
                }
                var en = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    tn = ["Webkit", "ms", "Moz", "O"];

                function nn(e, t, n) {
                    return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || en.hasOwnProperty(e) && en[e] ? ("" + t).trim() : t + "px"
                }

                function rn(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var i = 0 === n.indexOf("--"),
                                r = nn(n, t[n], i);
                            "float" === n && (n = "cssFloat"), i ? e.setProperty(n, r) : e[n] = r
                        }
                }
                Object.keys(en).forEach((function(e) {
                    tn.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), en[t] = en[e]
                    }))
                }));
                var an = r({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function on(e, t) {
                    if (t) {
                        if (an[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e, ""));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(o(60));
                            if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
                        }
                        if (null != t.style && "object" != typeof t.style) throw Error(o(62, ""))
                    }
                }

                function sn(e, t) {
                    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var ln = De;

                function un(e, t) {
                    var n = Je(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
                    t = I[t];
                    for (var i = 0; i < t.length; i++) gt(t[i], e, n)
                }

                function cn() {}

                function dn(e) {
                    if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function fn(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function pn(e, t) {
                    var n, i = fn(e);
                    for (e = 0; i;) {
                        if (3 === i.nodeType) {
                            if (n = e + i.textContent.length, e <= t && n >= t) return {
                                node: i,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; i;) {
                                if (i.nextSibling) {
                                    i = i.nextSibling;
                                    break e
                                }
                                i = i.parentNode
                            }
                            i = void 0
                        }
                        i = fn(i)
                    }
                }

                function mn(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? mn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function gn() {
                    for (var e = window, t = dn(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" == typeof t.contentWindow.location.href
                        } catch (e) {
                            n = !1
                        }
                        if (!n) break;
                        t = dn((e = t.contentWindow).document)
                    }
                    return t
                }

                function hn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var bn = "$?",
                    vn = "$!",
                    yn = null,
                    wn = null;

                function Sn(e, t) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!t.autoFocus
                    }
                    return !1
                }

                function Tn(e, t) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var En = "function" == typeof setTimeout ? setTimeout : void 0,
                    xn = "function" == typeof clearTimeout ? clearTimeout : void 0;

                function In(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break
                    }
                    return e
                }

                function kn(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || n === vn || n === bn) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var An = Math.random().toString(36).slice(2),
                    Nn = "__reactInternalInstance$" + An,
                    zn = "__reactEventHandlers$" + An,
                    Cn = "__reactContainere$" + An;

                function Mn(e) {
                    var t = e[Nn];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[Cn] || n[Nn]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = kn(e); null !== e;) {
                                    if (n = e[Nn]) return n;
                                    e = kn(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function Pn(e) {
                    return !(e = e[Nn] || e[Cn]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function Ln(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(o(33))
                }

                function Dn(e) {
                    return e[zn] || null
                }

                function On(e) {
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Rn(e, t) {
                    var n = e.stateNode;
                    if (!n) return null;
                    var i = m(n);
                    if (!i) return null;
                    n = i[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (i = !i.disabled) || (i = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !i;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
                    return n
                }

                function jn(e, t, n) {
                    (t = Rn(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
                }

                function Un(e) {
                    if (e && e.dispatchConfig.phasedRegistrationNames) {
                        for (var t = e._targetInst, n = []; t;) n.push(t), t = On(t);
                        for (t = n.length; 0 < t--;) jn(n[t], "captured", e);
                        for (t = 0; t < n.length; t++) jn(n[t], "bubbled", e)
                    }
                }

                function _n(e, t, n) {
                    e && n && n.dispatchConfig.registrationName && (t = Rn(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = rt(n._dispatchListeners, t), n._dispatchInstances = rt(n._dispatchInstances, e))
                }

                function $n(e) {
                    e && e.dispatchConfig.registrationName && _n(e._targetInst, null, e)
                }

                function Fn(e) {
                    at(e, Un)
                }
                var qn = null,
                    Gn = null,
                    Vn = null;

                function Wn() {
                    if (Vn) return Vn;
                    var e, t, n = Gn,
                        i = n.length,
                        r = "value" in qn ? qn.value : qn.textContent,
                        a = r.length;
                    for (e = 0; e < i && n[e] === r[e]; e++);
                    var o = i - e;
                    for (t = 1; t <= o && n[i - t] === r[a - t]; t++);
                    return Vn = r.slice(e, 1 < t ? 1 - t : void 0)
                }

                function Bn() {
                    return !0
                }

                function Hn() {
                    return !1
                }

                function Qn(e, t, n, i) {
                    for (var r in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(r) && ((t = e[r]) ? this[r] = t(n) : "target" === r ? this.target = i : this[r] = n[r]);
                    return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Bn : Hn, this.isPropagationStopped = Hn, this
                }

                function Yn(e, t, n, i) {
                    if (this.eventPool.length) {
                        var r = this.eventPool.pop();
                        return this.call(r, e, t, n, i), r
                    }
                    return new this(e, t, n, i)
                }

                function Kn(e) {
                    if (!(e instanceof this)) throw Error(o(279));
                    e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
                }

                function Zn(e) {
                    e.eventPool = [], e.getPooled = Yn, e.release = Kn
                }
                r(Qn.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Bn)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Bn)
                    },
                    persist: function() {
                        this.isPersistent = Bn
                    },
                    isPersistent: Hn,
                    destructor: function() {
                        var e, t = this.constructor.Interface;
                        for (e in t) this[e] = null;
                        this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Hn, this._dispatchInstances = this._dispatchListeners = null
                    }
                }), Qn.Interface = {
                    type: null,
                    target: null,
                    currentTarget: function() {
                        return null
                    },
                    eventPhase: null,
                    bubbles: null,
                    cancelable: null,
                    timeStamp: function(e) {
                        return e.timeStamp || Date.now()
                    },
                    defaultPrevented: null,
                    isTrusted: null
                }, Qn.extend = function(e) {
                    function t() {}

                    function n() {
                        return i.apply(this, arguments)
                    }
                    var i = this;
                    t.prototype = i.prototype;
                    var a = new t;
                    return r(a, n.prototype), n.prototype = a, n.prototype.constructor = n, n.Interface = r({}, i.Interface, e), n.extend = i.extend, Zn(n), n
                }, Zn(Qn);
                var Xn = Qn.extend({
                        data: null
                    }),
                    Jn = Qn.extend({
                        data: null
                    }),
                    ei = [9, 13, 27, 32],
                    ti = A && "CompositionEvent" in window,
                    ni = null;
                A && "documentMode" in document && (ni = document.documentMode);
                var ii = A && "TextEvent" in window && !ni,
                    ri = A && (!ti || ni && 8 < ni && 11 >= ni),
                    ai = String.fromCharCode(32),
                    oi = {
                        beforeInput: {
                            phasedRegistrationNames: {
                                bubbled: "onBeforeInput",
                                captured: "onBeforeInputCapture"
                            },
                            dependencies: ["compositionend", "keypress", "textInput", "paste"]
                        },
                        compositionEnd: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionEnd",
                                captured: "onCompositionEndCapture"
                            },
                            dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                        },
                        compositionStart: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionStart",
                                captured: "onCompositionStartCapture"
                            },
                            dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                        },
                        compositionUpdate: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionUpdate",
                                captured: "onCompositionUpdateCapture"
                            },
                            dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                        }
                    },
                    si = !1;

                function li(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== ei.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "blur":
                            return !0;
                        default:
                            return !1
                    }
                }

                function ui(e) {
                    return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var ci = !1;
                var di = {
                        eventTypes: oi,
                        extractEvents: function(e, t, n, i) {
                            var r;
                            if (ti) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var a = oi.compositionStart;
                                        break e;
                                    case "compositionend":
                                        a = oi.compositionEnd;
                                        break e;
                                    case "compositionupdate":
                                        a = oi.compositionUpdate;
                                        break e
                                }
                                a = void 0
                            }
                            else ci ? li(e, n) && (a = oi.compositionEnd) : "keydown" === e && 229 === n.keyCode && (a = oi.compositionStart);
                            return a ? (ri && "ko" !== n.locale && (ci || a !== oi.compositionStart ? a === oi.compositionEnd && ci && (r = Wn()) : (Gn = "value" in (qn = i) ? qn.value : qn.textContent, ci = !0)), a = Xn.getPooled(a, t, n, i), r ? a.data = r : null !== (r = ui(n)) && (a.data = r), Fn(a), r = a) : r = null, (e = ii ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return ui(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (si = !0, ai);
                                    case "textInput":
                                        return (e = t.data) === ai && si ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (ci) return "compositionend" === e || !ti && li(e, t) ? (e = Wn(), Vn = Gn = qn = null, ci = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return ri && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) ? ((t = Jn.getPooled(oi.beforeInput, t, n, i)).data = e, Fn(t)) : t = null, null === r ? t : null === t ? r : [r, t]
                        }
                    },
                    fi = {
                        color: !0,
                        date: !0,
                        datetime: !0,
                        "datetime-local": !0,
                        email: !0,
                        month: !0,
                        number: !0,
                        password: !0,
                        range: !0,
                        search: !0,
                        tel: !0,
                        text: !0,
                        time: !0,
                        url: !0,
                        week: !0
                    };

                function pi(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!fi[e.type] : "textarea" === t
                }
                var mi = {
                    change: {
                        phasedRegistrationNames: {
                            bubbled: "onChange",
                            captured: "onChangeCapture"
                        },
                        dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
                    }
                };

                function gi(e, t, n) {
                    return (e = Qn.getPooled(mi.change, e, t, n)).type = "change", P(n), Fn(e), e
                }
                var hi = null,
                    bi = null;

                function vi(e) {
                    lt(e)
                }

                function yi(e) {
                    if (Se(Ln(e))) return e
                }

                function wi(e, t) {
                    if ("change" === e) return t
                }
                var Si = !1;

                function Ti() {
                    hi && (hi.detachEvent("onpropertychange", Ei), bi = hi = null)
                }

                function Ei(e) {
                    if ("value" === e.propertyName && yi(bi))
                        if (e = gi(bi, e, ut(e)), U) lt(e);
                        else {
                            U = !0;
                            try {
                                D(vi, e)
                            } finally {
                                U = !1, $()
                            }
                        }
                }

                function xi(e, t, n) {
                    "focus" === e ? (Ti(), bi = n, (hi = t).attachEvent("onpropertychange", Ei)) : "blur" === e && Ti()
                }

                function Ii(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return yi(bi)
                }

                function ki(e, t) {
                    if ("click" === e) return yi(t)
                }

                function Ai(e, t) {
                    if ("input" === e || "change" === e) return yi(t)
                }
                A && (Si = ct("input") && (!document.documentMode || 9 < document.documentMode));
                var Ni = {
                        eventTypes: mi,
                        _isInputEventSupported: Si,
                        extractEvents: function(e, t, n, i) {
                            var r = t ? Ln(t) : window,
                                a = r.nodeName && r.nodeName.toLowerCase();
                            if ("select" === a || "input" === a && "file" === r.type) var o = wi;
                            else if (pi(r))
                                if (Si) o = Ai;
                                else {
                                    o = Ii;
                                    var s = xi
                                }
                            else(a = r.nodeName) && "input" === a.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (o = ki);
                            if (o && (o = o(e, t))) return gi(o, n, i);
                            s && s(e, r, t), "blur" === e && (e = r._wrapperState) && e.controlled && "number" === r.type && Ae(r, "number", r.value)
                        }
                    },
                    zi = Qn.extend({
                        view: null,
                        detail: null
                    }),
                    Ci = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Mi(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Ci[e]) && !!t[e]
                }

                function Pi() {
                    return Mi
                }
                var Li = 0,
                    Di = 0,
                    Oi = !1,
                    Ri = !1,
                    ji = zi.extend({
                        screenX: null,
                        screenY: null,
                        clientX: null,
                        clientY: null,
                        pageX: null,
                        pageY: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        getModifierState: Pi,
                        button: null,
                        buttons: null,
                        relatedTarget: function(e) {
                            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                        },
                        movementX: function(e) {
                            if ("movementX" in e) return e.movementX;
                            var t = Li;
                            return Li = e.screenX, Oi ? "mousemove" === e.type ? e.screenX - t : 0 : (Oi = !0, 0)
                        },
                        movementY: function(e) {
                            if ("movementY" in e) return e.movementY;
                            var t = Di;
                            return Di = e.screenY, Ri ? "mousemove" === e.type ? e.screenY - t : 0 : (Ri = !0, 0)
                        }
                    }),
                    Ui = ji.extend({
                        pointerId: null,
                        width: null,
                        height: null,
                        pressure: null,
                        tangentialPressure: null,
                        tiltX: null,
                        tiltY: null,
                        twist: null,
                        pointerType: null,
                        isPrimary: null
                    }),
                    _i = {
                        mouseEnter: {
                            registrationName: "onMouseEnter",
                            dependencies: ["mouseout", "mouseover"]
                        },
                        mouseLeave: {
                            registrationName: "onMouseLeave",
                            dependencies: ["mouseout", "mouseover"]
                        },
                        pointerEnter: {
                            registrationName: "onPointerEnter",
                            dependencies: ["pointerout", "pointerover"]
                        },
                        pointerLeave: {
                            registrationName: "onPointerLeave",
                            dependencies: ["pointerout", "pointerover"]
                        }
                    },
                    $i = {
                        eventTypes: _i,
                        extractEvents: function(e, t, n, i, r) {
                            var a = "mouseover" === e || "pointerover" === e,
                                o = "mouseout" === e || "pointerout" === e;
                            if (a && 0 == (32 & r) && (n.relatedTarget || n.fromElement) || !o && !a) return null;
                            (a = i.window === i ? i : (a = i.ownerDocument) ? a.defaultView || a.parentWindow : window, o) ? (o = t, null !== (t = (t = n.relatedTarget || n.toElement) ? Mn(t) : null) && (t !== et(t) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : o = null;
                            if (o === t) return null;
                            if ("mouseout" === e || "mouseover" === e) var s = ji,
                                l = _i.mouseLeave,
                                u = _i.mouseEnter,
                                c = "mouse";
                            else "pointerout" !== e && "pointerover" !== e || (s = Ui, l = _i.pointerLeave, u = _i.pointerEnter, c = "pointer");
                            if (e = null == o ? a : Ln(o), a = null == t ? a : Ln(t), (l = s.getPooled(l, o, n, i)).type = c + "leave", l.target = e, l.relatedTarget = a, (n = s.getPooled(u, t, n, i)).type = c + "enter", n.target = a, n.relatedTarget = e, c = t, (i = o) && c) e: {
                                for (u = c, o = 0, e = s = i; e; e = On(e)) o++;
                                for (e = 0, t = u; t; t = On(t)) e++;
                                for (; 0 < o - e;) s = On(s),
                                o--;
                                for (; 0 < e - o;) u = On(u),
                                e--;
                                for (; o--;) {
                                    if (s === u || s === u.alternate) break e;
                                    s = On(s), u = On(u)
                                }
                                s = null
                            }
                            else s = null;
                            for (u = s, s = []; i && i !== u && (null === (o = i.alternate) || o !== u);) s.push(i), i = On(i);
                            for (i = []; c && c !== u && (null === (o = c.alternate) || o !== u);) i.push(c), c = On(c);
                            for (c = 0; c < s.length; c++) _n(s[c], "bubbled", l);
                            for (c = i.length; 0 < c--;) _n(i[c], "captured", n);
                            return 0 == (64 & r) ? [l] : [l, n]
                        }
                    };
                var Fi = "function" == typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                    },
                    qi = Object.prototype.hasOwnProperty;

                function Gi(e, t) {
                    if (Fi(e, t)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        i = Object.keys(t);
                    if (n.length !== i.length) return !1;
                    for (i = 0; i < n.length; i++)
                        if (!qi.call(t, n[i]) || !Fi(e[n[i]], t[n[i]])) return !1;
                    return !0
                }
                var Vi = A && "documentMode" in document && 11 >= document.documentMode,
                    Wi = {
                        select: {
                            phasedRegistrationNames: {
                                bubbled: "onSelect",
                                captured: "onSelectCapture"
                            },
                            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                        }
                    },
                    Bi = null,
                    Hi = null,
                    Qi = null,
                    Yi = !1;

                function Ki(e, t) {
                    var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                    return Yi || null == Bi || Bi !== dn(n) ? null : ("selectionStart" in (n = Bi) && hn(n) ? n = {
                        start: n.selectionStart,
                        end: n.selectionEnd
                    } : n = {
                        anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: n.anchorOffset,
                        focusNode: n.focusNode,
                        focusOffset: n.focusOffset
                    }, Qi && Gi(Qi, n) ? null : (Qi = n, (e = Qn.getPooled(Wi.select, Hi, e, t)).type = "select", e.target = Bi, Fn(e), e))
                }
                var Zi = {
                        eventTypes: Wi,
                        extractEvents: function(e, t, n, i, r, a) {
                            if (!(a = !(r = a || (i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument)))) {
                                e: {
                                    r = Je(r),
                                    a = I.onSelect;
                                    for (var o = 0; o < a.length; o++)
                                        if (!r.has(a[o])) {
                                            r = !1;
                                            break e
                                        }
                                    r = !0
                                }
                                a = !r
                            }
                            if (a) return null;
                            switch (r = t ? Ln(t) : window, e) {
                                case "focus":
                                    (pi(r) || "true" === r.contentEditable) && (Bi = r, Hi = t, Qi = null);
                                    break;
                                case "blur":
                                    Qi = Hi = Bi = null;
                                    break;
                                case "mousedown":
                                    Yi = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    return Yi = !1, Ki(n, i);
                                case "selectionchange":
                                    if (Vi) break;
                                case "keydown":
                                case "keyup":
                                    return Ki(n, i)
                            }
                            return null
                        }
                    },
                    Xi = Qn.extend({
                        animationName: null,
                        elapsedTime: null,
                        pseudoElement: null
                    }),
                    Ji = Qn.extend({
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    er = zi.extend({
                        relatedTarget: null
                    });

                function tr(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }
                var nr = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    ir = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    rr = zi.extend({
                        key: function(e) {
                            if (e.key) {
                                var t = nr[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tr(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? ir[e.keyCode] || "Unidentified" : ""
                        },
                        location: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        repeat: null,
                        locale: null,
                        getModifierState: Pi,
                        charCode: function(e) {
                            return "keypress" === e.type ? tr(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tr(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    ar = ji.extend({
                        dataTransfer: null
                    }),
                    or = zi.extend({
                        touches: null,
                        targetTouches: null,
                        changedTouches: null,
                        altKey: null,
                        metaKey: null,
                        ctrlKey: null,
                        shiftKey: null,
                        getModifierState: Pi
                    }),
                    sr = Qn.extend({
                        propertyName: null,
                        elapsedTime: null,
                        pseudoElement: null
                    }),
                    lr = ji.extend({
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: null,
                        deltaMode: null
                    }),
                    ur = {
                        eventTypes: Ut,
                        extractEvents: function(e, t, n, i) {
                            var r = _t.get(e);
                            if (!r) return null;
                            switch (e) {
                                case "keypress":
                                    if (0 === tr(n)) return null;
                                case "keydown":
                                case "keyup":
                                    e = rr;
                                    break;
                                case "blur":
                                case "focus":
                                    e = er;
                                    break;
                                case "click":
                                    if (2 === n.button) return null;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    e = ji;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    e = ar;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    e = or;
                                    break;
                                case He:
                                case Qe:
                                case Ye:
                                    e = Xi;
                                    break;
                                case Ke:
                                    e = sr;
                                    break;
                                case "scroll":
                                    e = zi;
                                    break;
                                case "wheel":
                                    e = lr;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    e = Ji;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    e = Ui;
                                    break;
                                default:
                                    e = Qn
                            }
                            return Fn(t = e.getPooled(r, t, n, i)), t
                        }
                    };
                if (v) throw Error(o(101));
                v = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w(), m = Dn, g = Pn, h = Ln, k({
                    SimpleEventPlugin: ur,
                    EnterLeaveEventPlugin: $i,
                    ChangeEventPlugin: Ni,
                    SelectEventPlugin: Zi,
                    BeforeInputEventPlugin: di
                });
                var cr = [],
                    dr = -1;

                function fr(e) {
                    0 > dr || (e.current = cr[dr], cr[dr] = null, dr--)
                }

                function pr(e, t) {
                    dr++, cr[dr] = e.current, e.current = t
                }
                var mr = {},
                    gr = {
                        current: mr
                    },
                    hr = {
                        current: !1
                    },
                    br = mr;

                function vr(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return mr;
                    var i = e.stateNode;
                    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
                    var r, a = {};
                    for (r in n) a[r] = t[r];
                    return i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
                }

                function yr(e) {
                    return null != (e = e.childContextTypes)
                }

                function wr() {
                    fr(hr), fr(gr)
                }

                function Sr(e, t, n) {
                    if (gr.current !== mr) throw Error(o(168));
                    pr(gr, t), pr(hr, n)
                }

                function Tr(e, t, n) {
                    var i = e.stateNode;
                    if (e = t.childContextTypes, "function" != typeof i.getChildContext) return n;
                    for (var a in i = i.getChildContext())
                        if (!(a in e)) throw Error(o(108, he(t) || "Unknown", a));
                    return r({}, n, {}, i)
                }

                function Er(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mr, br = gr.current, pr(gr, e), pr(hr, hr.current), !0
                }

                function xr(e, t, n) {
                    var i = e.stateNode;
                    if (!i) throw Error(o(169));
                    n ? (e = Tr(e, t, br), i.__reactInternalMemoizedMergedChildContext = e, fr(hr), fr(gr), pr(gr, e)) : fr(hr), pr(hr, n)
                }
                var Ir = a.unstable_runWithPriority,
                    kr = a.unstable_scheduleCallback,
                    Ar = a.unstable_cancelCallback,
                    Nr = a.unstable_requestPaint,
                    zr = a.unstable_now,
                    Cr = a.unstable_getCurrentPriorityLevel,
                    Mr = a.unstable_ImmediatePriority,
                    Pr = a.unstable_UserBlockingPriority,
                    Lr = a.unstable_NormalPriority,
                    Dr = a.unstable_LowPriority,
                    Or = a.unstable_IdlePriority,
                    Rr = {},
                    jr = a.unstable_shouldYield,
                    Ur = void 0 !== Nr ? Nr : function() {},
                    _r = null,
                    $r = null,
                    Fr = !1,
                    qr = zr(),
                    Gr = 1e4 > qr ? zr : function() {
                        return zr() - qr
                    };

                function Vr() {
                    switch (Cr()) {
                        case Mr:
                            return 99;
                        case Pr:
                            return 98;
                        case Lr:
                            return 97;
                        case Dr:
                            return 96;
                        case Or:
                            return 95;
                        default:
                            throw Error(o(332))
                    }
                }

                function Wr(e) {
                    switch (e) {
                        case 99:
                            return Mr;
                        case 98:
                            return Pr;
                        case 97:
                            return Lr;
                        case 96:
                            return Dr;
                        case 95:
                            return Or;
                        default:
                            throw Error(o(332))
                    }
                }

                function Br(e, t) {
                    return e = Wr(e), Ir(e, t)
                }

                function Hr(e, t, n) {
                    return e = Wr(e), kr(e, t, n)
                }

                function Qr(e) {
                    return null === _r ? (_r = [e], $r = kr(Mr, Kr)) : _r.push(e), Rr
                }

                function Yr() {
                    if (null !== $r) {
                        var e = $r;
                        $r = null, Ar(e)
                    }
                    Kr()
                }

                function Kr() {
                    if (!Fr && null !== _r) {
                        Fr = !0;
                        var e = 0;
                        try {
                            var t = _r;
                            Br(99, (function() {
                                for (; e < t.length; e++) {
                                    var n = t[e];
                                    do {
                                        n = n(!0)
                                    } while (null !== n)
                                }
                            })), _r = null
                        } catch (t) {
                            throw null !== _r && (_r = _r.slice(e + 1)), kr(Mr, Yr), t
                        } finally {
                            Fr = !1
                        }
                    }
                }

                function Zr(e, t, n) {
                    return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
                }

                function Xr(e, t) {
                    if (e && e.defaultProps)
                        for (var n in t = r({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                var Jr = {
                        current: null
                    },
                    ea = null,
                    ta = null,
                    na = null;

                function ia() {
                    na = ta = ea = null
                }

                function ra(e) {
                    var t = Jr.current;
                    fr(Jr), e.type._context._currentValue = t
                }

                function aa(e, t) {
                    for (; null !== e;) {
                        var n = e.alternate;
                        if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
                        else {
                            if (!(null !== n && n.childExpirationTime < t)) break;
                            n.childExpirationTime = t
                        }
                        e = e.return
                    }
                }

                function oa(e, t) {
                    ea = e, na = ta = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Do = !0), e.firstContext = null)
                }

                function sa(e, t) {
                    if (na !== e && !1 !== t && 0 !== t)
                        if ("number" == typeof t && 1073741823 !== t || (na = e, t = 1073741823), t = {
                                context: e,
                                observedBits: t,
                                next: null
                            }, null === ta) {
                            if (null === ea) throw Error(o(308));
                            ta = t, ea.dependencies = {
                                expirationTime: 0,
                                firstContext: t,
                                responders: null
                            }
                        } else ta = ta.next = t;
                    return e._currentValue
                }
                var la = !1;

                function ua(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        baseQueue: null,
                        shared: {
                            pending: null
                        },
                        effects: null
                    }
                }

                function ca(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        baseQueue: e.baseQueue,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function da(e, t) {
                    return (e = {
                        expirationTime: e,
                        suspenseConfig: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }).next = e
                }

                function fa(e, t) {
                    if (null !== (e = e.updateQueue)) {
                        var n = (e = e.shared).pending;
                        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                    }
                }

                function pa(e, t) {
                    var n = e.alternate;
                    null !== n && ca(n, e), null === (n = (e = e.updateQueue).baseQueue) ? (e.baseQueue = t.next = t, t.next = t) : (t.next = n.next, n.next = t)
                }

                function ma(e, t, n, i) {
                    var a = e.updateQueue;
                    la = !1;
                    var o = a.baseQueue,
                        s = a.shared.pending;
                    if (null !== s) {
                        if (null !== o) {
                            var l = o.next;
                            o.next = s.next, s.next = l
                        }
                        o = s, a.shared.pending = null, null !== (l = e.alternate) && (null !== (l = l.updateQueue) && (l.baseQueue = s))
                    }
                    if (null !== o) {
                        l = o.next;
                        var u = a.baseState,
                            c = 0,
                            d = null,
                            f = null,
                            p = null;
                        if (null !== l)
                            for (var m = l;;) {
                                if ((s = m.expirationTime) < i) {
                                    var g = {
                                        expirationTime: m.expirationTime,
                                        suspenseConfig: m.suspenseConfig,
                                        tag: m.tag,
                                        payload: m.payload,
                                        callback: m.callback,
                                        next: null
                                    };
                                    null === p ? (f = p = g, d = u) : p = p.next = g, s > c && (c = s)
                                } else {
                                    null !== p && (p = p.next = {
                                        expirationTime: 1073741823,
                                        suspenseConfig: m.suspenseConfig,
                                        tag: m.tag,
                                        payload: m.payload,
                                        callback: m.callback,
                                        next: null
                                    }), pl(s, m.suspenseConfig);
                                    e: {
                                        var h = e,
                                            b = m;
                                        switch (s = t, g = n, b.tag) {
                                            case 1:
                                                if ("function" == typeof(h = b.payload)) {
                                                    u = h.call(g, u, s);
                                                    break e
                                                }
                                                u = h;
                                                break e;
                                            case 3:
                                                h.effectTag = -4097 & h.effectTag | 64;
                                            case 0:
                                                if (null == (s = "function" == typeof(h = b.payload) ? h.call(g, u, s) : h)) break e;
                                                u = r({}, u, s);
                                                break e;
                                            case 2:
                                                la = !0
                                        }
                                    }
                                    null !== m.callback && (e.effectTag |= 32, null === (s = a.effects) ? a.effects = [m] : s.push(m))
                                }
                                if (null === (m = m.next) || m === l) {
                                    if (null === (s = a.shared.pending)) break;
                                    m = o.next = s.next, s.next = l, a.baseQueue = o = s, a.shared.pending = null
                                }
                            }
                        null === p ? d = u : p.next = f, a.baseState = d, a.baseQueue = p, ml(c), e.expirationTime = c, e.memoizedState = u
                    }
                }

                function ga(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var i = e[t],
                                r = i.callback;
                            if (null !== r) {
                                if (i.callback = null, i = r, r = n, "function" != typeof i) throw Error(o(191, i));
                                i.call(r)
                            }
                        }
                }
                var ha = K.ReactCurrentBatchConfig,
                    ba = (new i.Component).refs;

                function va(e, t, n, i) {
                    n = null == (n = n(i, t = e.memoizedState)) ? t : r({}, t, n), e.memoizedState = n, 0 === e.expirationTime && (e.updateQueue.baseState = n)
                }
                var ya = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternalFiber) && et(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternalFiber;
                        var i = el(),
                            r = ha.suspense;
                        (r = da(i = tl(i, e, r), r)).payload = t, null != n && (r.callback = n), fa(e, r), nl(e, i)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternalFiber;
                        var i = el(),
                            r = ha.suspense;
                        (r = da(i = tl(i, e, r), r)).tag = 1, r.payload = t, null != n && (r.callback = n), fa(e, r), nl(e, i)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternalFiber;
                        var n = el(),
                            i = ha.suspense;
                        (i = da(n = tl(n, e, i), i)).tag = 2, null != t && (i.callback = t), fa(e, i), nl(e, n)
                    }
                };

                function wa(e, t, n, i, r, a, o) {
                    return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(i, a, o) : !t.prototype || !t.prototype.isPureReactComponent || (!Gi(n, i) || !Gi(r, a))
                }

                function Sa(e, t, n) {
                    var i = !1,
                        r = mr,
                        a = t.contextType;
                    return "object" == typeof a && null !== a ? a = sa(a) : (r = yr(t) ? br : gr.current, a = (i = null != (i = t.contextTypes)) ? vr(e, r) : mr), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ya, e.stateNode = t, t._reactInternalFiber = e, i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = a), t
                }

                function Ta(e, t, n, i) {
                    e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, i), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && ya.enqueueReplaceState(t, t.state, null)
                }

                function Ea(e, t, n, i) {
                    var r = e.stateNode;
                    r.props = n, r.state = e.memoizedState, r.refs = ba, ua(e);
                    var a = t.contextType;
                    "object" == typeof a && null !== a ? r.context = sa(a) : (a = yr(t) ? br : gr.current, r.context = vr(e, a)), ma(e, n, r, i), r.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (va(e, t, a, n), r.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof r.getSnapshotBeforeUpdate || "function" != typeof r.UNSAFE_componentWillMount && "function" != typeof r.componentWillMount || (t = r.state, "function" == typeof r.componentWillMount && r.componentWillMount(), "function" == typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && ya.enqueueReplaceState(r, r.state, null), ma(e, n, r, i), r.state = e.memoizedState), "function" == typeof r.componentDidMount && (e.effectTag |= 4)
                }
                var xa = Array.isArray;

                function Ia(e, t, n) {
                    if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(o(309));
                                var i = n.stateNode
                            }
                            if (!i) throw Error(o(147, e));
                            var r = "" + e;
                            return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === r ? t.ref : (t = function(e) {
                                var t = i.refs;
                                t === ba && (t = i.refs = {}), null === e ? delete t[r] : t[r] = e
                            }, t._stringRef = r, t)
                        }
                        if ("string" != typeof e) throw Error(o(284));
                        if (!n._owner) throw Error(o(290, e))
                    }
                    return e
                }

                function ka(e, t) {
                    if ("textarea" !== e.type) throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
                }

                function Aa(e) {
                    function t(t, n) {
                        if (e) {
                            var i = t.lastEffect;
                            null !== i ? (i.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
                        }
                    }

                    function n(n, i) {
                        if (!e) return null;
                        for (; null !== i;) t(n, i), i = i.sibling;
                        return null
                    }

                    function i(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function r(e, t) {
                        return (e = Dl(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, i) {
                        return t.index = i, e ? null !== (i = t.alternate) ? (i = i.index) < n ? (t.effectTag = 2, n) : i : (t.effectTag = 2, n) : n
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.effectTag = 2), t
                    }

                    function l(e, t, n, i) {
                        return null === t || 6 !== t.tag ? ((t = jl(n, e.mode, i)).return = e, t) : ((t = r(t, n)).return = e, t)
                    }

                    function u(e, t, n, i) {
                        return null !== t && t.elementType === n.type ? ((i = r(t, n.props)).ref = Ia(e, t, n), i.return = e, i) : ((i = Ol(n.type, n.key, n.props, null, e.mode, i)).ref = Ia(e, t, n), i.return = e, i)
                    }

                    function c(e, t, n, i) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ul(n, e.mode, i)).return = e, t) : ((t = r(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, i, a) {
                        return null === t || 7 !== t.tag ? ((t = Rl(n, e.mode, i, a)).return = e, t) : ((t = r(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" == typeof t || "number" == typeof t) return (t = jl("" + t, e.mode, n)).return = e, t;
                        if ("object" == typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case ee:
                                    return (n = Ol(t.type, t.key, t.props, null, e.mode, n)).ref = Ia(e, null, t), n.return = e, n;
                                case te:
                                    return (t = Ul(t, e.mode, n)).return = e, t
                            }
                            if (xa(t) || ge(t)) return (t = Rl(t, e.mode, n, null)).return = e, t;
                            ka(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, i) {
                        var r = null !== t ? t.key : null;
                        if ("string" == typeof n || "number" == typeof n) return null !== r ? null : l(e, t, "" + n, i);
                        if ("object" == typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case ee:
                                    return n.key === r ? n.type === ne ? d(e, t, n.props.children, i, r) : u(e, t, n, i) : null;
                                case te:
                                    return n.key === r ? c(e, t, n, i) : null
                            }
                            if (xa(n) || ge(n)) return null !== r ? null : d(e, t, n, i, null);
                            ka(e, n)
                        }
                        return null
                    }

                    function m(e, t, n, i, r) {
                        if ("string" == typeof i || "number" == typeof i) return l(t, e = e.get(n) || null, "" + i, r);
                        if ("object" == typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case ee:
                                    return e = e.get(null === i.key ? n : i.key) || null, i.type === ne ? d(t, e, i.props.children, r, i.key) : u(t, e, i, r);
                                case te:
                                    return c(t, e = e.get(null === i.key ? n : i.key) || null, i, r)
                            }
                            if (xa(i) || ge(i)) return d(t, e = e.get(n) || null, i, r, null);
                            ka(t, i)
                        }
                        return null
                    }

                    function g(r, o, s, l) {
                        for (var u = null, c = null, d = o, g = o = 0, h = null; null !== d && g < s.length; g++) {
                            d.index > g ? (h = d, d = null) : h = d.sibling;
                            var b = p(r, d, s[g], l);
                            if (null === b) {
                                null === d && (d = h);
                                break
                            }
                            e && d && null === b.alternate && t(r, d), o = a(b, o, g), null === c ? u = b : c.sibling = b, c = b, d = h
                        }
                        if (g === s.length) return n(r, d), u;
                        if (null === d) {
                            for (; g < s.length; g++) null !== (d = f(r, s[g], l)) && (o = a(d, o, g), null === c ? u = d : c.sibling = d, c = d);
                            return u
                        }
                        for (d = i(r, d); g < s.length; g++) null !== (h = m(d, r, g, s[g], l)) && (e && null !== h.alternate && d.delete(null === h.key ? g : h.key), o = a(h, o, g), null === c ? u = h : c.sibling = h, c = h);
                        return e && d.forEach((function(e) {
                            return t(r, e)
                        })), u
                    }

                    function h(r, s, l, u) {
                        var c = ge(l);
                        if ("function" != typeof c) throw Error(o(150));
                        if (null == (l = c.call(l))) throw Error(o(151));
                        for (var d = c = null, g = s, h = s = 0, b = null, v = l.next(); null !== g && !v.done; h++, v = l.next()) {
                            g.index > h ? (b = g, g = null) : b = g.sibling;
                            var y = p(r, g, v.value, u);
                            if (null === y) {
                                null === g && (g = b);
                                break
                            }
                            e && g && null === y.alternate && t(r, g), s = a(y, s, h), null === d ? c = y : d.sibling = y, d = y, g = b
                        }
                        if (v.done) return n(r, g), c;
                        if (null === g) {
                            for (; !v.done; h++, v = l.next()) null !== (v = f(r, v.value, u)) && (s = a(v, s, h), null === d ? c = v : d.sibling = v, d = v);
                            return c
                        }
                        for (g = i(r, g); !v.done; h++, v = l.next()) null !== (v = m(g, r, h, v.value, u)) && (e && null !== v.alternate && g.delete(null === v.key ? h : v.key), s = a(v, s, h), null === d ? c = v : d.sibling = v, d = v);
                        return e && g.forEach((function(e) {
                            return t(r, e)
                        })), c
                    }
                    return function(e, i, a, l) {
                        var u = "object" == typeof a && null !== a && a.type === ne && null === a.key;
                        u && (a = a.props.children);
                        var c = "object" == typeof a && null !== a;
                        if (c) switch (a.$$typeof) {
                            case ee:
                                e: {
                                    for (c = a.key, u = i; null !== u;) {
                                        if (u.key === c) {
                                            if (7 === u.tag) {
                                                if (a.type === ne) {
                                                    n(e, u.sibling), (i = r(u, a.props.children)).return = e, e = i;
                                                    break e
                                                }
                                            } else if (u.elementType === a.type) {
                                                n(e, u.sibling), (i = r(u, a.props)).ref = Ia(e, u, a), i.return = e, e = i;
                                                break e
                                            }
                                            n(e, u);
                                            break
                                        }
                                        t(e, u), u = u.sibling
                                    }
                                    a.type === ne ? ((i = Rl(a.props.children, e.mode, l, a.key)).return = e, e = i) : ((l = Ol(a.type, a.key, a.props, null, e.mode, l)).ref = Ia(e, i, a), l.return = e, e = l)
                                }
                                return s(e);
                            case te:
                                e: {
                                    for (u = a.key; null !== i;) {
                                        if (i.key === u) {
                                            if (4 === i.tag && i.stateNode.containerInfo === a.containerInfo && i.stateNode.implementation === a.implementation) {
                                                n(e, i.sibling), (i = r(i, a.children || [])).return = e, e = i;
                                                break e
                                            }
                                            n(e, i);
                                            break
                                        }
                                        t(e, i), i = i.sibling
                                    }(i = Ul(a, e.mode, l)).return = e,
                                    e = i
                                }
                                return s(e)
                        }
                        if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== i && 6 === i.tag ? (n(e, i.sibling), (i = r(i, a)).return = e, e = i) : (n(e, i), (i = jl(a, e.mode, l)).return = e, e = i), s(e);
                        if (xa(a)) return g(e, i, a, l);
                        if (ge(a)) return h(e, i, a, l);
                        if (c && ka(e, a), void 0 === a && !u) switch (e.tag) {
                            case 1:
                            case 0:
                                throw e = e.type, Error(o(152, e.displayName || e.name || "Component"))
                        }
                        return n(e, i)
                    }
                }
                var Na = Aa(!0),
                    za = Aa(!1),
                    Ca = {},
                    Ma = {
                        current: Ca
                    },
                    Pa = {
                        current: Ca
                    },
                    La = {
                        current: Ca
                    };

                function Da(e) {
                    if (e === Ca) throw Error(o(174));
                    return e
                }

                function Oa(e, t) {
                    switch (pr(La, t), pr(Pa, e), pr(Ma, Ca), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : je(null, "");
                            break;
                        default:
                            t = je(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    fr(Ma), pr(Ma, t)
                }

                function Ra() {
                    fr(Ma), fr(Pa), fr(La)
                }

                function ja(e) {
                    Da(La.current);
                    var t = Da(Ma.current),
                        n = je(t, e.type);
                    t !== n && (pr(Pa, e), pr(Ma, n))
                }

                function Ua(e) {
                    Pa.current === e && (fr(Ma), fr(Pa))
                }
                var _a = {
                    current: 0
                };

                function $a(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || n.data === bn || n.data === vn)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 != (64 & t.effectTag)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }

                function Fa(e, t) {
                    return {
                        responder: e,
                        props: t
                    }
                }
                var qa = K.ReactCurrentDispatcher,
                    Ga = K.ReactCurrentBatchConfig,
                    Va = 0,
                    Wa = null,
                    Ba = null,
                    Ha = null,
                    Qa = !1;

                function Ya() {
                    throw Error(o(321))
                }

                function Ka(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Fi(e[n], t[n])) return !1;
                    return !0
                }

                function Za(e, t, n, i, r, a) {
                    if (Va = a, Wa = t, t.memoizedState = null, t.updateQueue = null, t.expirationTime = 0, qa.current = null === e || null === e.memoizedState ? So : To, e = n(i, r), t.expirationTime === Va) {
                        a = 0;
                        do {
                            if (t.expirationTime = 0, !(25 > a)) throw Error(o(301));
                            a += 1, Ha = Ba = null, t.updateQueue = null, qa.current = Eo, e = n(i, r)
                        } while (t.expirationTime === Va)
                    }
                    if (qa.current = wo, t = null !== Ba && null !== Ba.next, Va = 0, Ha = Ba = Wa = null, Qa = !1, t) throw Error(o(300));
                    return e
                }

                function Xa() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === Ha ? Wa.memoizedState = Ha = e : Ha = Ha.next = e, Ha
                }

                function Ja() {
                    if (null === Ba) {
                        var e = Wa.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = Ba.next;
                    var t = null === Ha ? Wa.memoizedState : Ha.next;
                    if (null !== t) Ha = t, Ba = e;
                    else {
                        if (null === e) throw Error(o(310));
                        e = {
                            memoizedState: (Ba = e).memoizedState,
                            baseState: Ba.baseState,
                            baseQueue: Ba.baseQueue,
                            queue: Ba.queue,
                            next: null
                        }, null === Ha ? Wa.memoizedState = Ha = e : Ha = Ha.next = e
                    }
                    return Ha
                }

                function eo(e, t) {
                    return "function" == typeof t ? t(e) : t
                }

                function to(e) {
                    var t = Ja(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var i = Ba,
                        r = i.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== r) {
                            var s = r.next;
                            r.next = a.next, a.next = s
                        }
                        i.baseQueue = r = a, n.pending = null
                    }
                    if (null !== r) {
                        r = r.next, i = i.baseState;
                        var l = s = a = null,
                            u = r;
                        do {
                            var c = u.expirationTime;
                            if (c < Va) {
                                var d = {
                                    expirationTime: u.expirationTime,
                                    suspenseConfig: u.suspenseConfig,
                                    action: u.action,
                                    eagerReducer: u.eagerReducer,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === l ? (s = l = d, a = i) : l = l.next = d, c > Wa.expirationTime && (Wa.expirationTime = c, ml(c))
                            } else null !== l && (l = l.next = {
                                expirationTime: 1073741823,
                                suspenseConfig: u.suspenseConfig,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            }), pl(c, u.suspenseConfig), i = u.eagerReducer === e ? u.eagerState : e(i, u.action);
                            u = u.next
                        } while (null !== u && u !== r);
                        null === l ? a = i : l.next = s, Fi(i, t.memoizedState) || (Do = !0), t.memoizedState = i, t.baseState = a, t.baseQueue = l, n.lastRenderedState = i
                    }
                    return [t.memoizedState, n.dispatch]
                }

                function no(e) {
                    var t = Ja(),
                        n = t.queue;
                    if (null === n) throw Error(o(311));
                    n.lastRenderedReducer = e;
                    var i = n.dispatch,
                        r = n.pending,
                        a = t.memoizedState;
                    if (null !== r) {
                        n.pending = null;
                        var s = r = r.next;
                        do {
                            a = e(a, s.action), s = s.next
                        } while (s !== r);
                        Fi(a, t.memoizedState) || (Do = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, i]
                }

                function io(e) {
                    var t = Xa();
                    return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: eo,
                        lastRenderedState: e
                    }).dispatch = yo.bind(null, Wa, e), [t.memoizedState, e]
                }

                function ro(e, t, n, i) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: i,
                        next: null
                    }, null === (t = Wa.updateQueue) ? (t = {
                        lastEffect: null
                    }, Wa.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e
                }

                function ao() {
                    return Ja().memoizedState
                }

                function oo(e, t, n, i) {
                    var r = Xa();
                    Wa.effectTag |= e, r.memoizedState = ro(1 | t, n, void 0, void 0 === i ? null : i)
                }

                function so(e, t, n, i) {
                    var r = Ja();
                    i = void 0 === i ? null : i;
                    var a = void 0;
                    if (null !== Ba) {
                        var o = Ba.memoizedState;
                        if (a = o.destroy, null !== i && Ka(i, o.deps)) return void ro(t, n, a, i)
                    }
                    Wa.effectTag |= e, r.memoizedState = ro(1 | t, n, a, i)
                }

                function lo(e, t) {
                    return oo(516, 4, e, t)
                }

                function uo(e, t) {
                    return so(516, 4, e, t)
                }

                function co(e, t) {
                    return so(4, 2, e, t)
                }

                function fo(e, t) {
                    return "function" == typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null != t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function po(e, t, n) {
                    return n = null != n ? n.concat([e]) : null, so(4, 2, fo.bind(null, t, e), n)
                }

                function mo() {}

                function go(e, t) {
                    return Xa().memoizedState = [e, void 0 === t ? null : t], e
                }

                function ho(e, t) {
                    var n = Ja();
                    t = void 0 === t ? null : t;
                    var i = n.memoizedState;
                    return null !== i && null !== t && Ka(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e)
                }

                function bo(e, t) {
                    var n = Ja();
                    t = void 0 === t ? null : t;
                    var i = n.memoizedState;
                    return null !== i && null !== t && Ka(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function vo(e, t, n) {
                    var i = Vr();
                    Br(98 > i ? 98 : i, (function() {
                        e(!0)
                    })), Br(97 < i ? 97 : i, (function() {
                        var i = Ga.suspense;
                        Ga.suspense = void 0 === t ? null : t;
                        try {
                            e(!1), n()
                        } finally {
                            Ga.suspense = i
                        }
                    }))
                }

                function yo(e, t, n) {
                    var i = el(),
                        r = ha.suspense;
                    r = {
                        expirationTime: i = tl(i, e, r),
                        suspenseConfig: r,
                        action: n,
                        eagerReducer: null,
                        eagerState: null,
                        next: null
                    };
                    var a = t.pending;
                    if (null === a ? r.next = r : (r.next = a.next, a.next = r), t.pending = r, a = e.alternate, e === Wa || null !== a && a === Wa) Qa = !0, r.expirationTime = Va, Wa.expirationTime = Va;
                    else {
                        if (0 === e.expirationTime && (null === a || 0 === a.expirationTime) && null !== (a = t.lastRenderedReducer)) try {
                            var o = t.lastRenderedState,
                                s = a(o, n);
                            if (r.eagerReducer = a, r.eagerState = s, Fi(s, o)) return
                        } catch (e) {}
                        nl(e, i)
                    }
                }
                var wo = {
                        readContext: sa,
                        useCallback: Ya,
                        useContext: Ya,
                        useEffect: Ya,
                        useImperativeHandle: Ya,
                        useLayoutEffect: Ya,
                        useMemo: Ya,
                        useReducer: Ya,
                        useRef: Ya,
                        useState: Ya,
                        useDebugValue: Ya,
                        useResponder: Ya,
                        useDeferredValue: Ya,
                        useTransition: Ya
                    },
                    So = {
                        readContext: sa,
                        useCallback: go,
                        useContext: sa,
                        useEffect: lo,
                        useImperativeHandle: function(e, t, n) {
                            return n = null != n ? n.concat([e]) : null, oo(4, 2, fo.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return oo(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = Xa();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var i = Xa();
                            return t = void 0 !== n ? n(t) : t, i.memoizedState = i.baseState = t, e = (e = i.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }).dispatch = yo.bind(null, Wa, e), [i.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, Xa().memoizedState = e
                        },
                        useState: io,
                        useDebugValue: mo,
                        useResponder: Fa,
                        useDeferredValue: function(e, t) {
                            var n = io(e),
                                i = n[0],
                                r = n[1];
                            return lo((function() {
                                var n = Ga.suspense;
                                Ga.suspense = void 0 === t ? null : t;
                                try {
                                    r(e)
                                } finally {
                                    Ga.suspense = n
                                }
                            }), [e, t]), i
                        },
                        useTransition: function(e) {
                            var t = io(!1),
                                n = t[0];
                            return t = t[1], [go(vo.bind(null, t, e), [t, e]), n]
                        }
                    },
                    To = {
                        readContext: sa,
                        useCallback: ho,
                        useContext: sa,
                        useEffect: uo,
                        useImperativeHandle: po,
                        useLayoutEffect: co,
                        useMemo: bo,
                        useReducer: to,
                        useRef: ao,
                        useState: function() {
                            return to(eo)
                        },
                        useDebugValue: mo,
                        useResponder: Fa,
                        useDeferredValue: function(e, t) {
                            var n = to(eo),
                                i = n[0],
                                r = n[1];
                            return uo((function() {
                                var n = Ga.suspense;
                                Ga.suspense = void 0 === t ? null : t;
                                try {
                                    r(e)
                                } finally {
                                    Ga.suspense = n
                                }
                            }), [e, t]), i
                        },
                        useTransition: function(e) {
                            var t = to(eo),
                                n = t[0];
                            return t = t[1], [ho(vo.bind(null, t, e), [t, e]), n]
                        }
                    },
                    Eo = {
                        readContext: sa,
                        useCallback: ho,
                        useContext: sa,
                        useEffect: uo,
                        useImperativeHandle: po,
                        useLayoutEffect: co,
                        useMemo: bo,
                        useReducer: no,
                        useRef: ao,
                        useState: function() {
                            return no(eo)
                        },
                        useDebugValue: mo,
                        useResponder: Fa,
                        useDeferredValue: function(e, t) {
                            var n = no(eo),
                                i = n[0],
                                r = n[1];
                            return uo((function() {
                                var n = Ga.suspense;
                                Ga.suspense = void 0 === t ? null : t;
                                try {
                                    r(e)
                                } finally {
                                    Ga.suspense = n
                                }
                            }), [e, t]), i
                        },
                        useTransition: function(e) {
                            var t = no(eo),
                                n = t[0];
                            return t = t[1], [ho(vo.bind(null, t, e), [t, e]), n]
                        }
                    },
                    xo = null,
                    Io = null,
                    ko = !1;

                function Ao(e, t) {
                    var n = Pl(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
                }

                function No(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                        default:
                            return !1
                    }
                }

                function zo(e) {
                    if (ko) {
                        var t = Io;
                        if (t) {
                            var n = t;
                            if (!No(e, t)) {
                                if (!(t = In(n.nextSibling)) || !No(e, t)) return e.effectTag = -1025 & e.effectTag | 2, ko = !1, void(xo = e);
                                Ao(xo, n)
                            }
                            xo = e, Io = In(t.firstChild)
                        } else e.effectTag = -1025 & e.effectTag | 2, ko = !1, xo = e
                    }
                }

                function Co(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    xo = e
                }

                function Mo(e) {
                    if (e !== xo) return !1;
                    if (!ko) return Co(e), ko = !0, !1;
                    var t = e.type;
                    if (5 !== e.tag || "head" !== t && "body" !== t && !Tn(t, e.memoizedProps))
                        for (t = Io; t;) Ao(e, t), t = In(t.nextSibling);
                    if (Co(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            Io = In(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && n !== vn && n !== bn || t++
                                }
                                e = e.nextSibling
                            }
                            Io = null
                        }
                    } else Io = xo ? In(e.stateNode.nextSibling) : null;
                    return !0
                }

                function Po() {
                    Io = xo = null, ko = !1
                }
                var Lo = K.ReactCurrentOwner,
                    Do = !1;

                function Oo(e, t, n, i) {
                    t.child = null === e ? za(t, null, n, i) : Na(t, e.child, n, i)
                }

                function Ro(e, t, n, i, r) {
                    n = n.render;
                    var a = t.ref;
                    return oa(t, r), i = Za(e, t, n, i, a, r), null === e || Do ? (t.effectTag |= 1, Oo(e, t, i, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), Xo(e, t, r))
                }

                function jo(e, t, n, i, r, a) {
                    if (null === e) {
                        var o = n.type;
                        return "function" != typeof o || Ll(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ol(n.type, null, i, null, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, Uo(e, t, o, i, r, a))
                    }
                    return o = e.child, r < a && (r = o.memoizedProps, (n = null !== (n = n.compare) ? n : Gi)(r, i) && e.ref === t.ref) ? Xo(e, t, a) : (t.effectTag |= 1, (e = Dl(o, i)).ref = t.ref, e.return = t, t.child = e)
                }

                function Uo(e, t, n, i, r, a) {
                    return null !== e && Gi(e.memoizedProps, i) && e.ref === t.ref && (Do = !1, r < a) ? (t.expirationTime = e.expirationTime, Xo(e, t, a)) : $o(e, t, n, i, a)
                }

                function _o(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
                }

                function $o(e, t, n, i, r) {
                    var a = yr(n) ? br : gr.current;
                    return a = vr(t, a), oa(t, r), n = Za(e, t, n, i, a, r), null === e || Do ? (t.effectTag |= 1, Oo(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), Xo(e, t, r))
                }

                function Fo(e, t, n, i, r) {
                    if (yr(n)) {
                        var a = !0;
                        Er(t)
                    } else a = !1;
                    if (oa(t, r), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Sa(t, n, i), Ea(t, n, i, r), i = !0;
                    else if (null === e) {
                        var o = t.stateNode,
                            s = t.memoizedProps;
                        o.props = s;
                        var l = o.context,
                            u = n.contextType;
                        "object" == typeof u && null !== u ? u = sa(u) : u = vr(t, u = yr(n) ? br : gr.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" == typeof c || "function" == typeof o.getSnapshotBeforeUpdate;
                        d || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== i || l !== u) && Ta(t, o, i, u), la = !1;
                        var f = t.memoizedState;
                        o.state = f, ma(t, i, o, r), l = t.memoizedState, s !== i || f !== l || hr.current || la ? ("function" == typeof c && (va(t, n, c, i), l = t.memoizedState), (s = la || wa(t, n, s, i, f, l, u)) ? (d || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || ("function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()), "function" == typeof o.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), t.memoizedProps = i, t.memoizedState = l), o.props = i, o.state = l, o.context = u, i = s) : ("function" == typeof o.componentDidMount && (t.effectTag |= 4), i = !1)
                    } else o = t.stateNode, ca(e, t), s = t.memoizedProps, o.props = t.type === t.elementType ? s : Xr(t.type, s), l = o.context, "object" == typeof(u = n.contextType) && null !== u ? u = sa(u) : u = vr(t, u = yr(n) ? br : gr.current), (d = "function" == typeof(c = n.getDerivedStateFromProps) || "function" == typeof o.getSnapshotBeforeUpdate) || "function" != typeof o.UNSAFE_componentWillReceiveProps && "function" != typeof o.componentWillReceiveProps || (s !== i || l !== u) && Ta(t, o, i, u), la = !1, l = t.memoizedState, o.state = l, ma(t, i, o, r), f = t.memoizedState, s !== i || l !== f || hr.current || la ? ("function" == typeof c && (va(t, n, c, i), f = t.memoizedState), (c = la || wa(t, n, s, i, l, f, u)) ? (d || "function" != typeof o.UNSAFE_componentWillUpdate && "function" != typeof o.componentWillUpdate || ("function" == typeof o.componentWillUpdate && o.componentWillUpdate(i, f, u), "function" == typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(i, f, u)), "function" == typeof o.componentDidUpdate && (t.effectTag |= 4), "function" == typeof o.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = i, t.memoizedState = f), o.props = i, o.state = f, o.context = u, i = c) : ("function" != typeof o.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof o.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), i = !1);
                    return qo(e, t, n, i, a, r)
                }

                function qo(e, t, n, i, r, a) {
                    _o(e, t);
                    var o = 0 != (64 & t.effectTag);
                    if (!i && !o) return r && xr(t, n, !1), Xo(e, t, a);
                    i = t.stateNode, Lo.current = t;
                    var s = o && "function" != typeof n.getDerivedStateFromError ? null : i.render();
                    return t.effectTag |= 1, null !== e && o ? (t.child = Na(t, e.child, null, a), t.child = Na(t, null, s, a)) : Oo(e, t, s, a), t.memoizedState = i.state, r && xr(t, n, !0), t.child
                }

                function Go(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Sr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Sr(0, t.context, !1), Oa(e, t.containerInfo)
                }
                var Vo, Wo, Bo, Ho = {
                    dehydrated: null,
                    retryTime: 0
                };

                function Qo(e, t, n) {
                    var i, r = t.mode,
                        a = t.pendingProps,
                        o = _a.current,
                        s = !1;
                    if ((i = 0 != (64 & t.effectTag)) || (i = 0 != (2 & o) && (null === e || null !== e.memoizedState)), i ? (s = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === a.fallback || !0 === a.unstable_avoidThisFallback || (o |= 1), pr(_a, 1 & o), null === e) {
                        if (void 0 !== a.fallback && zo(t), s) {
                            if (s = a.fallback, (a = Rl(null, r, 0, null)).return = t, 0 == (2 & t.mode))
                                for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                            return (n = Rl(s, r, n, null)).return = t, a.sibling = n, t.memoizedState = Ho, t.child = a, n
                        }
                        return r = a.children, t.memoizedState = null, t.child = za(t, null, r, n)
                    }
                    if (null !== e.memoizedState) {
                        if (r = (e = e.child).sibling, s) {
                            if (a = a.fallback, (n = Dl(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (s = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                                for (n.child = s; null !== s;) s.return = n, s = s.sibling;
                            return (r = Dl(r, a)).return = t, n.sibling = r, n.childExpirationTime = 0, t.memoizedState = Ho, t.child = n, r
                        }
                        return n = Na(t, e.child, a.children, n), t.memoizedState = null, t.child = n
                    }
                    if (e = e.child, s) {
                        if (s = a.fallback, (a = Rl(null, r, 0, null)).return = t, a.child = e, null !== e && (e.return = a), 0 == (2 & t.mode))
                            for (e = null !== t.memoizedState ? t.child.child : t.child, a.child = e; null !== e;) e.return = a, e = e.sibling;
                        return (n = Rl(s, r, n, null)).return = t, a.sibling = n, n.effectTag |= 2, a.childExpirationTime = 0, t.memoizedState = Ho, t.child = a, n
                    }
                    return t.memoizedState = null, t.child = Na(t, e, a.children, n)
                }

                function Yo(e, t) {
                    e.expirationTime < t && (e.expirationTime = t);
                    var n = e.alternate;
                    null !== n && n.expirationTime < t && (n.expirationTime = t), aa(e.return, t)
                }

                function Ko(e, t, n, i, r, a) {
                    var o = e.memoizedState;
                    null === o ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: i,
                        tail: n,
                        tailExpiration: 0,
                        tailMode: r,
                        lastEffect: a
                    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = i, o.tail = n, o.tailExpiration = 0, o.tailMode = r, o.lastEffect = a)
                }

                function Zo(e, t, n) {
                    var i = t.pendingProps,
                        r = i.revealOrder,
                        a = i.tail;
                    if (Oo(e, t, i.children, n), 0 != (2 & (i = _a.current))) i = 1 & i | 2, t.effectTag |= 64;
                    else {
                        if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Yo(e, n);
                            else if (19 === e.tag) Yo(e, n);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        i &= 1
                    }
                    if (pr(_a, i), 0 == (2 & t.mode)) t.memoizedState = null;
                    else switch (r) {
                        case "forwards":
                            for (n = t.child, r = null; null !== n;) null !== (e = n.alternate) && null === $a(e) && (r = n), n = n.sibling;
                            null === (n = r) ? (r = t.child, t.child = null) : (r = n.sibling, n.sibling = null), Ko(t, !1, r, n, a, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, r = t.child, t.child = null; null !== r;) {
                                if (null !== (e = r.alternate) && null === $a(e)) {
                                    t.child = r;
                                    break
                                }
                                e = r.sibling, r.sibling = n, n = r, r = e
                            }
                            Ko(t, !0, n, null, a, t.lastEffect);
                            break;
                        case "together":
                            Ko(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Xo(e, t, n) {
                    null !== e && (t.dependencies = e.dependencies);
                    var i = t.expirationTime;
                    if (0 !== i && ml(i), t.childExpirationTime < n) return null;
                    if (null !== e && t.child !== e.child) throw Error(o(153));
                    if (null !== t.child) {
                        for (n = Dl(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Dl(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Jo(e, t) {
                    switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var i = null; null !== n;) null !== n.alternate && (i = n), n = n.sibling;
                            null === i ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : i.sibling = null
                    }
                }

                function es(e, t, n) {
                    var i = t.pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return yr(t.type) && wr(), null;
                        case 3:
                            return Ra(), fr(hr), fr(gr), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || !Mo(t) || (t.effectTag |= 4), null;
                        case 5:
                            Ua(t), n = Da(La.current);
                            var a = t.type;
                            if (null !== e && null != t.stateNode) Wo(e, t, a, i, n), e.ref !== t.ref && (t.effectTag |= 128);
                            else {
                                if (!i) {
                                    if (null === t.stateNode) throw Error(o(166));
                                    return null
                                }
                                if (e = Da(Ma.current), Mo(t)) {
                                    i = t.stateNode, a = t.type;
                                    var s = t.memoizedProps;
                                    switch (i[Nn] = t, i[zn] = s, a) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Qt("load", i);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < Ze.length; e++) Qt(Ze[e], i);
                                            break;
                                        case "source":
                                            Qt("error", i);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Qt("error", i), Qt("load", i);
                                            break;
                                        case "form":
                                            Qt("reset", i), Qt("submit", i);
                                            break;
                                        case "details":
                                            Qt("toggle", i);
                                            break;
                                        case "input":
                                            Ee(i, s), Qt("invalid", i), un(n, "onChange");
                                            break;
                                        case "select":
                                            i._wrapperState = {
                                                wasMultiple: !!s.multiple
                                            }, Qt("invalid", i), un(n, "onChange");
                                            break;
                                        case "textarea":
                                            Me(i, s), Qt("invalid", i), un(n, "onChange")
                                    }
                                    for (var l in on(a, s), e = null, s)
                                        if (s.hasOwnProperty(l)) {
                                            var u = s[l];
                                            "children" === l ? "string" == typeof u ? i.textContent !== u && (e = ["children", u]) : "number" == typeof u && i.textContent !== "" + u && (e = ["children", "" + u]) : x.hasOwnProperty(l) && null != u && un(n, l)
                                        }
                                    switch (a) {
                                        case "input":
                                            we(i), ke(i, s, !0);
                                            break;
                                        case "textarea":
                                            we(i), Le(i);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof s.onClick && (i.onclick = cn)
                                    }
                                    n = e, t.updateQueue = n, null !== n && (t.effectTag |= 4)
                                } else {
                                    switch (l = 9 === n.nodeType ? n : n.ownerDocument, e === ln && (e = Re(a)), e === ln ? "script" === a ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof i.is ? e = l.createElement(a, {
                                        is: i.is
                                    }) : (e = l.createElement(a), "select" === a && (l = e, i.multiple ? l.multiple = !0 : i.size && (l.size = i.size))) : e = l.createElementNS(e, a), e[Nn] = t, e[zn] = i, Vo(e, t), t.stateNode = e, l = sn(a, i), a) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Qt("load", e), u = i;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (u = 0; u < Ze.length; u++) Qt(Ze[u], e);
                                            u = i;
                                            break;
                                        case "source":
                                            Qt("error", e), u = i;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Qt("error", e), Qt("load", e), u = i;
                                            break;
                                        case "form":
                                            Qt("reset", e), Qt("submit", e), u = i;
                                            break;
                                        case "details":
                                            Qt("toggle", e), u = i;
                                            break;
                                        case "input":
                                            Ee(e, i), u = Te(e, i), Qt("invalid", e), un(n, "onChange");
                                            break;
                                        case "option":
                                            u = Ne(e, i);
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!i.multiple
                                            }, u = r({}, i, {
                                                value: void 0
                                            }), Qt("invalid", e), un(n, "onChange");
                                            break;
                                        case "textarea":
                                            Me(e, i), u = Ce(e, i), Qt("invalid", e), un(n, "onChange");
                                            break;
                                        default:
                                            u = i
                                    }
                                    on(a, u);
                                    var c = u;
                                    for (s in c)
                                        if (c.hasOwnProperty(s)) {
                                            var d = c[s];
                                            "style" === s ? rn(e, d) : "dangerouslySetInnerHTML" === s ? null != (d = d ? d.__html : void 0) && $e(e, d) : "children" === s ? "string" == typeof d ? ("textarea" !== a || "" !== d) && Fe(e, d) : "number" == typeof d && Fe(e, "" + d) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (x.hasOwnProperty(s) ? null != d && un(n, s) : null != d && Z(e, s, d, l))
                                        }
                                    switch (a) {
                                        case "input":
                                            we(e), ke(e, i, !1);
                                            break;
                                        case "textarea":
                                            we(e), Le(e);
                                            break;
                                        case "option":
                                            null != i.value && e.setAttribute("value", "" + ve(i.value));
                                            break;
                                        case "select":
                                            e.multiple = !!i.multiple, null != (n = i.value) ? ze(e, !!i.multiple, n, !1) : null != i.defaultValue && ze(e, !!i.multiple, i.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof u.onClick && (e.onclick = cn)
                                    }
                                    Sn(a, i) && (t.effectTag |= 4)
                                }
                                null !== t.ref && (t.effectTag |= 128)
                            }
                            return null;
                        case 6:
                            if (e && null != t.stateNode) Bo(0, t, e.memoizedProps, i);
                            else {
                                if ("string" != typeof i && null === t.stateNode) throw Error(o(166));
                                n = Da(La.current), Da(Ma.current), Mo(t) ? (n = t.stateNode, i = t.memoizedProps, n[Nn] = t, n.nodeValue !== i && (t.effectTag |= 4)) : ((n = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(i))[Nn] = t, t.stateNode = n)
                            }
                            return null;
                        case 13:
                            return fr(_a), i = t.memoizedState, 0 != (64 & t.effectTag) ? (t.expirationTime = n, t) : (n = null !== i, i = !1, null === e ? void 0 !== t.memoizedProps.fallback && Mo(t) : (i = null !== (a = e.memoizedState), n || null === a || null !== (a = e.child.sibling) && (null !== (s = t.firstEffect) ? (t.firstEffect = a, a.nextEffect = s) : (t.firstEffect = t.lastEffect = a, a.nextEffect = null), a.effectTag = 8)), n && !i && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & _a.current) ? Os === Ns && (Os = zs) : (Os !== Ns && Os !== zs || (Os = Cs), 0 !== $s && null !== Ps && (Fl(Ps, Ds), ql(Ps, $s)))), (n || i) && (t.effectTag |= 4), null);
                        case 4:
                            return Ra(), null;
                        case 10:
                            return ra(t), null;
                        case 19:
                            if (fr(_a), null === (i = t.memoizedState)) return null;
                            if (a = 0 != (64 & t.effectTag), null === (s = i.rendering)) {
                                if (a) Jo(i, !1);
                                else if (Os !== Ns || null !== e && 0 != (64 & e.effectTag))
                                    for (s = t.child; null !== s;) {
                                        if (null !== (e = $a(s))) {
                                            for (t.effectTag |= 64, Jo(i, !1), null !== (a = e.updateQueue) && (t.updateQueue = a, t.effectTag |= 4), null === i.lastEffect && (t.firstEffect = null), t.lastEffect = i.lastEffect, i = t.child; null !== i;) s = n, (a = i).effectTag &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (e = a.alternate) ? (a.childExpirationTime = 0, a.expirationTime = s, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null) : (a.childExpirationTime = e.childExpirationTime, a.expirationTime = e.expirationTime, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, s = e.dependencies, a.dependencies = null === s ? null : {
                                                expirationTime: s.expirationTime,
                                                firstContext: s.firstContext,
                                                responders: s.responders
                                            }), i = i.sibling;
                                            return pr(_a, 1 & _a.current | 2), t.child
                                        }
                                        s = s.sibling
                                    }
                            } else {
                                if (!a)
                                    if (null !== (e = $a(s))) {
                                        if (t.effectTag |= 64, a = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.effectTag |= 4), Jo(i, !0), null === i.tail && "hidden" === i.tailMode && !s.alternate) return null !== (t = t.lastEffect = i.lastEffect) && (t.nextEffect = null), null
                                    } else 2 * Gr() - i.renderingStartTime > i.tailExpiration && 1 < n && (t.effectTag |= 64, a = !0, Jo(i, !1), t.expirationTime = t.childExpirationTime = n - 1);
                                i.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (n = i.last) ? n.sibling = s : t.child = s, i.last = s)
                            }
                            return null !== i.tail ? (0 === i.tailExpiration && (i.tailExpiration = Gr() + 500), n = i.tail, i.rendering = n, i.tail = n.sibling, i.lastEffect = t.lastEffect, i.renderingStartTime = Gr(), n.sibling = null, t = _a.current, pr(_a, a ? 1 & t | 2 : 1 & t), n) : null
                    }
                    throw Error(o(156, t.tag))
                }

                function ts(e) {
                    switch (e.tag) {
                        case 1:
                            yr(e.type) && wr();
                            var t = e.effectTag;
                            return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
                        case 3:
                            if (Ra(), fr(hr), fr(gr), 0 != (64 & (t = e.effectTag))) throw Error(o(285));
                            return e.effectTag = -4097 & t | 64, e;
                        case 5:
                            return Ua(e), null;
                        case 13:
                            return fr(_a), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
                        case 19:
                            return fr(_a), null;
                        case 4:
                            return Ra(), null;
                        case 10:
                            return ra(e), null;
                        default:
                            return null
                    }
                }

                function ns(e, t) {
                    return {
                        value: e,
                        source: t,
                        stack: be(t)
                    }
                }
                Vo = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Wo = function(e, t, n, i, a) {
                    var o = e.memoizedProps;
                    if (o !== i) {
                        var s, l, u = t.stateNode;
                        switch (Da(Ma.current), e = null, n) {
                            case "input":
                                o = Te(u, o), i = Te(u, i), e = [];
                                break;
                            case "option":
                                o = Ne(u, o), i = Ne(u, i), e = [];
                                break;
                            case "select":
                                o = r({}, o, {
                                    value: void 0
                                }), i = r({}, i, {
                                    value: void 0
                                }), e = [];
                                break;
                            case "textarea":
                                o = Ce(u, o), i = Ce(u, i), e = [];
                                break;
                            default:
                                "function" != typeof o.onClick && "function" == typeof i.onClick && (u.onclick = cn)
                        }
                        for (s in on(n, i), n = null, o)
                            if (!i.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
                                if ("style" === s)
                                    for (l in u = o[s]) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
                                else "dangerouslySetInnerHTML" !== s && "children" !== s && "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (x.hasOwnProperty(s) ? e || (e = []) : (e = e || []).push(s, null));
                        for (s in i) {
                            var c = i[s];
                            if (u = null != o ? o[s] : void 0, i.hasOwnProperty(s) && c !== u && (null != c || null != u))
                                if ("style" === s)
                                    if (u) {
                                        for (l in u) !u.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                                        for (l in c) c.hasOwnProperty(l) && u[l] !== c[l] && (n || (n = {}), n[l] = c[l])
                                    } else n || (e || (e = []), e.push(s, n)), n = c;
                            else "dangerouslySetInnerHTML" === s ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (e = e || []).push(s, c)) : "children" === s ? u === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(s, "" + c) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && (x.hasOwnProperty(s) ? (null != c && un(a, s), e || u === c || (e = [])) : (e = e || []).push(s, c))
                        }
                        n && (e = e || []).push("style", n), a = e, (t.updateQueue = a) && (t.effectTag |= 4)
                    }
                }, Bo = function(e, t, n, i) {
                    n !== i && (t.effectTag |= 4)
                };
                var is = "function" == typeof WeakSet ? WeakSet : Set;

                function rs(e, t) {
                    var n = t.source,
                        i = t.stack;
                    null === i && null !== n && (i = be(n)), null !== n && he(n.type), t = t.value, null !== e && 1 === e.tag && he(e.type);
                    try {
                        console.error(t)
                    } catch (e) {
                        setTimeout((function() {
                            throw e
                        }))
                    }
                }

                function as(e) {
                    var t = e.ref;
                    if (null !== t)
                        if ("function" == typeof t) try {
                            t(null)
                        } catch (t) {
                            kl(e, t)
                        } else t.current = null
                }

                function os(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 3:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & t.effectTag && null !== e) {
                                var n = e.memoizedProps,
                                    i = e.memoizedState;
                                t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Xr(t.type, n), i), e.__reactInternalSnapshotBeforeUpdate = t
                            }
                            return
                    }
                    throw Error(o(163))
                }

                function ss(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var i = n.destroy;
                                n.destroy = void 0, void 0 !== i && i()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ls(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var i = n.create;
                                n.destroy = i()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function us(e, t, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            return void ls(3, n);
                        case 1:
                            if (e = n.stateNode, 4 & n.effectTag)
                                if (null === t) e.componentDidMount();
                                else {
                                    var i = n.elementType === n.type ? t.memoizedProps : Xr(n.type, t.memoizedProps);
                                    e.componentDidUpdate(i, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate)
                                }
                            return void(null !== (t = n.updateQueue) && ga(n, t, e));
                        case 3:
                            if (null !== (t = n.updateQueue)) {
                                if (e = null, null !== n.child) switch (n.child.tag) {
                                    case 5:
                                    case 1:
                                        e = n.child.stateNode
                                }
                                ga(n, t, e)
                            }
                            return;
                        case 5:
                            return e = n.stateNode, void(null === t && 4 & n.effectTag && Sn(n.type, n.memoizedProps) && e.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                            return;
                        case 13:
                            return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && jt(n)))))
                    }
                    throw Error(o(163))
                }

                function cs(e, t, n) {
                    switch ("function" == typeof Cl && Cl(t), t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var i = e.next;
                                Br(97 < n ? 97 : n, (function() {
                                    var e = i;
                                    do {
                                        var n = e.destroy;
                                        if (void 0 !== n) {
                                            var r = t;
                                            try {
                                                n()
                                            } catch (e) {
                                                kl(r, e)
                                            }
                                        }
                                        e = e.next
                                    } while (e !== i)
                                }))
                            }
                            break;
                        case 1:
                            as(t), "function" == typeof(n = t.stateNode).componentWillUnmount && function(e, t) {
                                try {
                                    t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                                } catch (t) {
                                    kl(e, t)
                                }
                            }(t, n);
                            break;
                        case 5:
                            as(t);
                            break;
                        case 4:
                            hs(e, t, n)
                    }
                }

                function ds(e) {
                    var t = e.alternate;
                    e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, e.stateNode = null, null !== t && ds(t)
                }

                function fs(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function ps(e) {
                    e: {
                        for (var t = e.return; null !== t;) {
                            if (fs(t)) {
                                var n = t;
                                break e
                            }
                            t = t.return
                        }
                        throw Error(o(160))
                    }
                    switch (t = n.stateNode, n.tag) {
                        case 5:
                            var i = !1;
                            break;
                        case 3:
                        case 4:
                            t = t.containerInfo, i = !0;
                            break;
                        default:
                            throw Error(o(161))
                    }
                    16 & n.effectTag && (Fe(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
                        for (; null === n.sibling;) {
                            if (null === n.return || fs(n.return)) {
                                n = null;
                                break e
                            }
                            n = n.return
                        }
                        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                            if (2 & n.effectTag) continue t;
                            if (null === n.child || 4 === n.tag) continue t;
                            n.child.return = n, n = n.child
                        }
                        if (!(2 & n.effectTag)) {
                            n = n.stateNode;
                            break e
                        }
                    }
                    i ? ms(e, n, t) : gs(e, n, t)
                }

                function ms(e, t, n) {
                    var i = e.tag,
                        r = 5 === i || 6 === i;
                    if (r) e = r ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = cn));
                    else if (4 !== i && null !== (e = e.child))
                        for (ms(e, t, n), e = e.sibling; null !== e;) ms(e, t, n), e = e.sibling
                }

                function gs(e, t, n) {
                    var i = e.tag,
                        r = 5 === i || 6 === i;
                    if (r) e = r ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== i && null !== (e = e.child))
                        for (gs(e, t, n), e = e.sibling; null !== e;) gs(e, t, n), e = e.sibling
                }

                function hs(e, t, n) {
                    for (var i, r, a = t, s = !1;;) {
                        if (!s) {
                            s = a.return;
                            e: for (;;) {
                                if (null === s) throw Error(o(160));
                                switch (i = s.stateNode, s.tag) {
                                    case 5:
                                        r = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        i = i.containerInfo, r = !0;
                                        break e
                                }
                                s = s.return
                            }
                            s = !0
                        }
                        if (5 === a.tag || 6 === a.tag) {
                            e: for (var l = e, u = a, c = n, d = u;;)
                                if (cs(l, d, c), null !== d.child && 4 !== d.tag) d.child.return = d, d = d.child;
                                else {
                                    if (d === u) break e;
                                    for (; null === d.sibling;) {
                                        if (null === d.return || d.return === u) break e;
                                        d = d.return
                                    }
                                    d.sibling.return = d.return, d = d.sibling
                                }r ? (l = i, u = a.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u)) : i.removeChild(a.stateNode)
                        }
                        else if (4 === a.tag) {
                            if (null !== a.child) {
                                i = a.stateNode.containerInfo, r = !0, a.child.return = a, a = a.child;
                                continue
                            }
                        } else if (cs(e, a, n), null !== a.child) {
                            a.child.return = a, a = a.child;
                            continue
                        }
                        if (a === t) break;
                        for (; null === a.sibling;) {
                            if (null === a.return || a.return === t) return;
                            4 === (a = a.return).tag && (s = !1)
                        }
                        a.sibling.return = a.return, a = a.sibling
                    }
                }

                function bs(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            return void ss(3, t);
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            var n = t.stateNode;
                            if (null != n) {
                                var i = t.memoizedProps,
                                    r = null !== e ? e.memoizedProps : i;
                                e = t.type;
                                var a = t.updateQueue;
                                if (t.updateQueue = null, null !== a) {
                                    for (n[zn] = i, "input" === e && "radio" === i.type && null != i.name && xe(n, i), sn(e, r), t = sn(e, i), r = 0; r < a.length; r += 2) {
                                        var s = a[r],
                                            l = a[r + 1];
                                        "style" === s ? rn(n, l) : "dangerouslySetInnerHTML" === s ? $e(n, l) : "children" === s ? Fe(n, l) : Z(n, s, l, t)
                                    }
                                    switch (e) {
                                        case "input":
                                            Ie(n, i);
                                            break;
                                        case "textarea":
                                            Pe(n, i);
                                            break;
                                        case "select":
                                            t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!i.multiple, null != (e = i.value) ? ze(n, !!i.multiple, e, !1) : t !== !!i.multiple && (null != i.defaultValue ? ze(n, !!i.multiple, i.defaultValue, !0) : ze(n, !!i.multiple, i.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === t.stateNode) throw Error(o(162));
                            return void(t.stateNode.nodeValue = t.memoizedProps);
                        case 3:
                            return void((t = t.stateNode).hydrate && (t.hydrate = !1, jt(t.containerInfo)));
                        case 13:
                            if (n = t, null === t.memoizedState ? i = !1 : (i = !0, n = t.child, qs = Gr()), null !== n) e: for (e = n;;) {
                                if (5 === e.tag) a = e.stateNode, i ? "function" == typeof(a = a.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (a = e.stateNode, r = null != (r = e.memoizedProps.style) && r.hasOwnProperty("display") ? r.display : null, a.style.display = nn("display", r));
                                else if (6 === e.tag) e.stateNode.nodeValue = i ? "" : e.memoizedProps;
                                else {
                                    if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                                        (a = e.child.sibling).return = e, e = a;
                                        continue
                                    }
                                    if (null !== e.child) {
                                        e.child.return = e, e = e.child;
                                        continue
                                    }
                                }
                                if (e === n) break;
                                for (; null === e.sibling;) {
                                    if (null === e.return || e.return === n) break e;
                                    e = e.return
                                }
                                e.sibling.return = e.return, e = e.sibling
                            }
                            return void vs(t);
                        case 19:
                            return void vs(t)
                    }
                    throw Error(o(163))
                }

                function vs(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new is), t.forEach((function(t) {
                            var i = Nl.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(i, i))
                        }))
                    }
                }
                var ys = "function" == typeof WeakMap ? WeakMap : Map;

                function ws(e, t, n) {
                    (n = da(n, null)).tag = 3, n.payload = {
                        element: null
                    };
                    var i = t.value;
                    return n.callback = function() {
                        Vs || (Vs = !0, Ws = i), rs(e, t)
                    }, n
                }

                function Ss(e, t, n) {
                    (n = da(n, null)).tag = 3;
                    var i = e.type.getDerivedStateFromError;
                    if ("function" == typeof i) {
                        var r = t.value;
                        n.payload = function() {
                            return rs(e, t), i(r)
                        }
                    }
                    var a = e.stateNode;
                    return null !== a && "function" == typeof a.componentDidCatch && (n.callback = function() {
                        "function" != typeof i && (null === Bs ? Bs = new Set([this]) : Bs.add(this), rs(e, t));
                        var n = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== n ? n : ""
                        })
                    }), n
                }
                var Ts, Es = Math.ceil,
                    xs = K.ReactCurrentDispatcher,
                    Is = K.ReactCurrentOwner,
                    ks = 16,
                    As = 32,
                    Ns = 0,
                    zs = 3,
                    Cs = 4,
                    Ms = 0,
                    Ps = null,
                    Ls = null,
                    Ds = 0,
                    Os = Ns,
                    Rs = null,
                    js = 1073741823,
                    Us = 1073741823,
                    _s = null,
                    $s = 0,
                    Fs = !1,
                    qs = 0,
                    Gs = null,
                    Vs = !1,
                    Ws = null,
                    Bs = null,
                    Hs = !1,
                    Qs = null,
                    Ys = 90,
                    Ks = null,
                    Zs = 0,
                    Xs = null,
                    Js = 0;

                function el() {
                    return 0 != (48 & Ms) ? 1073741821 - (Gr() / 10 | 0) : 0 !== Js ? Js : Js = 1073741821 - (Gr() / 10 | 0)
                }

                function tl(e, t, n) {
                    if (0 == (2 & (t = t.mode))) return 1073741823;
                    var i = Vr();
                    if (0 == (4 & t)) return 99 === i ? 1073741823 : 1073741822;
                    if (0 != (Ms & ks)) return Ds;
                    if (null !== n) e = Zr(e, 0 | n.timeoutMs || 5e3, 250);
                    else switch (i) {
                        case 99:
                            e = 1073741823;
                            break;
                        case 98:
                            e = Zr(e, 150, 100);
                            break;
                        case 97:
                        case 96:
                            e = Zr(e, 5e3, 250);
                            break;
                        case 95:
                            e = 2;
                            break;
                        default:
                            throw Error(o(326))
                    }
                    return null !== Ps && e === Ds && --e, e
                }

                function nl(e, t) {
                    if (50 < Zs) throw Zs = 0, Xs = null, Error(o(185));
                    if (null !== (e = il(e, t))) {
                        var n = Vr();
                        1073741823 === t ? 0 != (8 & Ms) && 0 == (48 & Ms) ? sl(e) : (al(e), 0 === Ms && Yr()) : al(e), 0 == (4 & Ms) || 98 !== n && 99 !== n || (null === Ks ? Ks = new Map([
                            [e, t]
                        ]) : (void 0 === (n = Ks.get(e)) || n > t) && Ks.set(e, t))
                    }
                }

                function il(e, t) {
                    e.expirationTime < t && (e.expirationTime = t);
                    var n = e.alternate;
                    null !== n && n.expirationTime < t && (n.expirationTime = t);
                    var i = e.return,
                        r = null;
                    if (null === i && 3 === e.tag) r = e.stateNode;
                    else
                        for (; null !== i;) {
                            if (n = i.alternate, i.childExpirationTime < t && (i.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === i.return && 3 === i.tag) {
                                r = i.stateNode;
                                break
                            }
                            i = i.return
                        }
                    return null !== r && (Ps === r && (ml(t), Os === Cs && Fl(r, Ds)), ql(r, t)), r
                }

                function rl(e) {
                    var t = e.lastExpiredTime;
                    if (0 !== t) return t;
                    if (!$l(e, t = e.firstPendingTime)) return t;
                    var n = e.lastPingedTime;
                    return 2 >= (e = n > (e = e.nextKnownPendingLevel) ? n : e) && t !== e ? 0 : e
                }

                function al(e) {
                    if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Qr(sl.bind(null, e));
                    else {
                        var t = rl(e),
                            n = e.callbackNode;
                        if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
                        else {
                            var i = el();
                            if (1073741823 === t ? i = 99 : 1 === t || 2 === t ? i = 95 : i = 0 >= (i = 10 * (1073741821 - t) - 10 * (1073741821 - i)) ? 99 : 250 >= i ? 98 : 5250 >= i ? 97 : 95, null !== n) {
                                var r = e.callbackPriority;
                                if (e.callbackExpirationTime === t && r >= i) return;
                                n !== Rr && Ar(n)
                            }
                            e.callbackExpirationTime = t, e.callbackPriority = i, t = 1073741823 === t ? Qr(sl.bind(null, e)) : Hr(i, ol.bind(null, e), {
                                timeout: 10 * (1073741821 - t) - Gr()
                            }), e.callbackNode = t
                        }
                    }
                }

                function ol(e, t) {
                    if (Js = 0, t) return Gl(e, t = el()), al(e), null;
                    var n = rl(e);
                    if (0 !== n) {
                        if (t = e.callbackNode, 0 != (48 & Ms)) throw Error(o(327));
                        if (El(), e === Ps && n === Ds || cl(e, n), null !== Ls) {
                            var i = Ms;
                            Ms |= ks;
                            for (var r = fl();;) try {
                                hl();
                                break
                            } catch (t) {
                                dl(e, t)
                            }
                            if (ia(), Ms = i, xs.current = r, 1 === Os) throw t = Rs, cl(e, n), Fl(e, n), al(e), t;
                            if (null === Ls) switch (r = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, i = Os, Ps = null, i) {
                                case Ns:
                                case 1:
                                    throw Error(o(345));
                                case 2:
                                    Gl(e, 2 < n ? 2 : n);
                                    break;
                                case zs:
                                    if (Fl(e, n), n === (i = e.lastSuspendedTime) && (e.nextKnownPendingLevel = yl(r)), 1073741823 === js && 10 < (r = qs + 500 - Gr())) {
                                        if (Fs) {
                                            var a = e.lastPingedTime;
                                            if (0 === a || a >= n) {
                                                e.lastPingedTime = n, cl(e, n);
                                                break
                                            }
                                        }
                                        if (0 !== (a = rl(e)) && a !== n) break;
                                        if (0 !== i && i !== n) {
                                            e.lastPingedTime = i;
                                            break
                                        }
                                        e.timeoutHandle = En(wl.bind(null, e), r);
                                        break
                                    }
                                    wl(e);
                                    break;
                                case Cs:
                                    if (Fl(e, n), n === (i = e.lastSuspendedTime) && (e.nextKnownPendingLevel = yl(r)), Fs && (0 === (r = e.lastPingedTime) || r >= n)) {
                                        e.lastPingedTime = n, cl(e, n);
                                        break
                                    }
                                    if (0 !== (r = rl(e)) && r !== n) break;
                                    if (0 !== i && i !== n) {
                                        e.lastPingedTime = i;
                                        break
                                    }
                                    if (1073741823 !== Us ? i = 10 * (1073741821 - Us) - Gr() : 1073741823 === js ? i = 0 : (i = 10 * (1073741821 - js) - 5e3, 0 > (i = (r = Gr()) - i) && (i = 0), (n = 10 * (1073741821 - n) - r) < (i = (120 > i ? 120 : 480 > i ? 480 : 1080 > i ? 1080 : 1920 > i ? 1920 : 3e3 > i ? 3e3 : 4320 > i ? 4320 : 1960 * Es(i / 1960)) - i) && (i = n)), 10 < i) {
                                        e.timeoutHandle = En(wl.bind(null, e), i);
                                        break
                                    }
                                    wl(e);
                                    break;
                                case 5:
                                    if (1073741823 !== js && null !== _s) {
                                        a = js;
                                        var s = _s;
                                        if (0 >= (i = 0 | s.busyMinDurationMs) ? i = 0 : (r = 0 | s.busyDelayMs, i = (a = Gr() - (10 * (1073741821 - a) - (0 | s.timeoutMs || 5e3))) <= r ? 0 : r + i - a), 10 < i) {
                                            Fl(e, n), e.timeoutHandle = En(wl.bind(null, e), i);
                                            break
                                        }
                                    }
                                    wl(e);
                                    break;
                                default:
                                    throw Error(o(329))
                            }
                            if (al(e), e.callbackNode === t) return ol.bind(null, e)
                        }
                    }
                    return null
                }

                function sl(e) {
                    var t = e.lastExpiredTime;
                    if (t = 0 !== t ? t : 1073741823, 0 != (48 & Ms)) throw Error(o(327));
                    if (El(), e === Ps && t === Ds || cl(e, t), null !== Ls) {
                        var n = Ms;
                        Ms |= ks;
                        for (var i = fl();;) try {
                            gl();
                            break
                        } catch (t) {
                            dl(e, t)
                        }
                        if (ia(), Ms = n, xs.current = i, 1 === Os) throw n = Rs, cl(e, t), Fl(e, t), al(e), n;
                        if (null !== Ls) throw Error(o(261));
                        e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Ps = null, wl(e), al(e)
                    }
                    return null
                }

                function ll(e, t) {
                    var n = Ms;
                    Ms |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Ms = n) && Yr()
                    }
                }

                function ul(e, t) {
                    var n = Ms;
                    Ms &= -2, Ms |= 8;
                    try {
                        return e(t)
                    } finally {
                        0 === (Ms = n) && Yr()
                    }
                }

                function cl(e, t) {
                    e.finishedWork = null, e.finishedExpirationTime = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, xn(n)), null !== Ls)
                        for (n = Ls.return; null !== n;) {
                            var i = n;
                            switch (i.tag) {
                                case 1:
                                    null != (i = i.type.childContextTypes) && wr();
                                    break;
                                case 3:
                                    Ra(), fr(hr), fr(gr);
                                    break;
                                case 5:
                                    Ua(i);
                                    break;
                                case 4:
                                    Ra();
                                    break;
                                case 13:
                                case 19:
                                    fr(_a);
                                    break;
                                case 10:
                                    ra(i)
                            }
                            n = n.return
                        }
                    Ps = e, Ls = Dl(e.current, null), Ds = t, Os = Ns, Rs = null, Us = js = 1073741823, _s = null, $s = 0, Fs = !1
                }

                function dl(e, t) {
                    for (;;) {
                        try {
                            if (ia(), qa.current = wo, Qa)
                                for (var n = Wa.memoizedState; null !== n;) {
                                    var i = n.queue;
                                    null !== i && (i.pending = null), n = n.next
                                }
                            if (Va = 0, Ha = Ba = Wa = null, Qa = !1, null === Ls || null === Ls.return) return Os = 1, Rs = t, Ls = null;
                            e: {
                                var r = e,
                                    a = Ls.return,
                                    o = Ls,
                                    s = t;
                                if (t = Ds, o.effectTag |= 2048, o.firstEffect = o.lastEffect = null, null !== s && "object" == typeof s && "function" == typeof s.then) {
                                    var l = s;
                                    if (0 == (2 & o.mode)) {
                                        var u = o.alternate;
                                        u ? (o.updateQueue = u.updateQueue, o.memoizedState = u.memoizedState, o.expirationTime = u.expirationTime) : (o.updateQueue = null, o.memoizedState = null)
                                    }
                                    var c = 0 != (1 & _a.current),
                                        d = a;
                                    do {
                                        var f;
                                        if (f = 13 === d.tag) {
                                            var p = d.memoizedState;
                                            if (null !== p) f = null !== p.dehydrated;
                                            else {
                                                var m = d.memoizedProps;
                                                f = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !c)
                                            }
                                        }
                                        if (f) {
                                            var g = d.updateQueue;
                                            if (null === g) {
                                                var h = new Set;
                                                h.add(l), d.updateQueue = h
                                            } else g.add(l);
                                            if (0 == (2 & d.mode)) {
                                                if (d.effectTag |= 64, o.effectTag &= -2981, 1 === o.tag)
                                                    if (null === o.alternate) o.tag = 17;
                                                    else {
                                                        var b = da(1073741823, null);
                                                        b.tag = 2, fa(o, b)
                                                    }
                                                o.expirationTime = 1073741823;
                                                break e
                                            }
                                            s = void 0, o = t;
                                            var v = r.pingCache;
                                            if (null === v ? (v = r.pingCache = new ys, s = new Set, v.set(l, s)) : void 0 === (s = v.get(l)) && (s = new Set, v.set(l, s)), !s.has(o)) {
                                                s.add(o);
                                                var y = Al.bind(null, r, l, o);
                                                l.then(y, y)
                                            }
                                            d.effectTag |= 4096, d.expirationTime = t;
                                            break e
                                        }
                                        d = d.return
                                    } while (null !== d);
                                    s = Error((he(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + be(o))
                                }
                                5 !== Os && (Os = 2),
                                s = ns(s, o),
                                d = a;do {
                                    switch (d.tag) {
                                        case 3:
                                            l = s, d.effectTag |= 4096, d.expirationTime = t, pa(d, ws(d, l, t));
                                            break e;
                                        case 1:
                                            l = s;
                                            var w = d.type,
                                                S = d.stateNode;
                                            if (0 == (64 & d.effectTag) && ("function" == typeof w.getDerivedStateFromError || null !== S && "function" == typeof S.componentDidCatch && (null === Bs || !Bs.has(S)))) {
                                                d.effectTag |= 4096, d.expirationTime = t, pa(d, Ss(d, l, t));
                                                break e
                                            }
                                    }
                                    d = d.return
                                } while (null !== d)
                            }
                            Ls = vl(Ls)
                        } catch (e) {
                            t = e;
                            continue
                        }
                        break
                    }
                }

                function fl() {
                    var e = xs.current;
                    return xs.current = wo, null === e ? wo : e
                }

                function pl(e, t) {
                    e < js && 2 < e && (js = e), null !== t && e < Us && 2 < e && (Us = e, _s = t)
                }

                function ml(e) {
                    e > $s && ($s = e)
                }

                function gl() {
                    for (; null !== Ls;) Ls = bl(Ls)
                }

                function hl() {
                    for (; null !== Ls && !jr();) Ls = bl(Ls)
                }

                function bl(e) {
                    var t = Ts(e.alternate, e, Ds);
                    return e.memoizedProps = e.pendingProps, null === t && (t = vl(e)), Is.current = null, t
                }

                function vl(e) {
                    Ls = e;
                    do {
                        var t = Ls.alternate;
                        if (e = Ls.return, 0 == (2048 & Ls.effectTag)) {
                            if (t = es(t, Ls, Ds), 1 === Ds || 1 !== Ls.childExpirationTime) {
                                for (var n = 0, i = Ls.child; null !== i;) {
                                    var r = i.expirationTime,
                                        a = i.childExpirationTime;
                                    r > n && (n = r), a > n && (n = a), i = i.sibling
                                }
                                Ls.childExpirationTime = n
                            }
                            if (null !== t) return t;
                            null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = Ls.firstEffect), null !== Ls.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = Ls.firstEffect), e.lastEffect = Ls.lastEffect), 1 < Ls.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = Ls : e.firstEffect = Ls, e.lastEffect = Ls))
                        } else {
                            if (null !== (t = ts(Ls))) return t.effectTag &= 2047, t;
                            null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
                        }
                        if (null !== (t = Ls.sibling)) return t;
                        Ls = e
                    } while (null !== Ls);
                    return Os === Ns && (Os = 5), null
                }

                function yl(e) {
                    var t = e.expirationTime;
                    return t > (e = e.childExpirationTime) ? t : e
                }

                function wl(e) {
                    var t = Vr();
                    return Br(99, Sl.bind(null, e, t)), null
                }

                function Sl(e, t) {
                    do {
                        El()
                    } while (null !== Qs);
                    if (0 != (48 & Ms)) throw Error(o(327));
                    var n = e.finishedWork,
                        i = e.finishedExpirationTime;
                    if (null === n) return null;
                    if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(o(177));
                    e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
                    var r = yl(n);
                    if (e.firstPendingTime = r, i <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : i <= e.firstSuspendedTime && (e.firstSuspendedTime = i - 1), i <= e.lastPingedTime && (e.lastPingedTime = 0), i <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Ps && (Ls = Ps = null, Ds = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                        var a = Ms;
                        Ms |= As, Is.current = null, yn = Ht;
                        var s = gn();
                        if (hn(s)) {
                            if ("selectionStart" in s) var l = {
                                start: s.selectionStart,
                                end: s.selectionEnd
                            };
                            else e: {
                                var u = (l = (l = s.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                                if (u && 0 !== u.rangeCount) {
                                    l = u.anchorNode;
                                    var c = u.anchorOffset,
                                        d = u.focusNode;
                                    u = u.focusOffset;
                                    try {
                                        l.nodeType, d.nodeType
                                    } catch (e) {
                                        l = null;
                                        break e
                                    }
                                    var f = 0,
                                        p = -1,
                                        m = -1,
                                        g = 0,
                                        h = 0,
                                        b = s,
                                        v = null;
                                    t: for (;;) {
                                        for (var y; b !== l || 0 !== c && 3 !== b.nodeType || (p = f + c), b !== d || 0 !== u && 3 !== b.nodeType || (m = f + u), 3 === b.nodeType && (f += b.nodeValue.length), null !== (y = b.firstChild);) v = b, b = y;
                                        for (;;) {
                                            if (b === s) break t;
                                            if (v === l && ++g === c && (p = f), v === d && ++h === u && (m = f), null !== (y = b.nextSibling)) break;
                                            v = (b = v).parentNode
                                        }
                                        b = y
                                    }
                                    l = -1 === p || -1 === m ? null : {
                                        start: p,
                                        end: m
                                    }
                                } else l = null
                            }
                            l = l || {
                                start: 0,
                                end: 0
                            }
                        } else l = null;
                        wn = {
                            activeElementDetached: null,
                            focusedElem: s,
                            selectionRange: l
                        }, Ht = !1, Gs = r;
                        do {
                            try {
                                Tl()
                            } catch (e) {
                                if (null === Gs) throw Error(o(330));
                                kl(Gs, e), Gs = Gs.nextEffect
                            }
                        } while (null !== Gs);
                        Gs = r;
                        do {
                            try {
                                for (s = e, l = t; null !== Gs;) {
                                    var w = Gs.effectTag;
                                    if (16 & w && Fe(Gs.stateNode, ""), 128 & w) {
                                        var S = Gs.alternate;
                                        if (null !== S) {
                                            var T = S.ref;
                                            null !== T && ("function" == typeof T ? T(null) : T.current = null)
                                        }
                                    }
                                    switch (1038 & w) {
                                        case 2:
                                            ps(Gs), Gs.effectTag &= -3;
                                            break;
                                        case 6:
                                            ps(Gs), Gs.effectTag &= -3, bs(Gs.alternate, Gs);
                                            break;
                                        case 1024:
                                            Gs.effectTag &= -1025;
                                            break;
                                        case 1028:
                                            Gs.effectTag &= -1025, bs(Gs.alternate, Gs);
                                            break;
                                        case 4:
                                            bs(Gs.alternate, Gs);
                                            break;
                                        case 8:
                                            hs(s, c = Gs, l), ds(c)
                                    }
                                    Gs = Gs.nextEffect
                                }
                            } catch (e) {
                                if (null === Gs) throw Error(o(330));
                                kl(Gs, e), Gs = Gs.nextEffect
                            }
                        } while (null !== Gs);
                        if (T = wn, S = gn(), w = T.focusedElem, l = T.selectionRange, S !== w && w && w.ownerDocument && mn(w.ownerDocument.documentElement, w)) {
                            null !== l && hn(w) && (S = l.start, void 0 === (T = l.end) && (T = S), "selectionStart" in w ? (w.selectionStart = S, w.selectionEnd = Math.min(T, w.value.length)) : (T = (S = w.ownerDocument || document) && S.defaultView || window).getSelection && (T = T.getSelection(), c = w.textContent.length, s = Math.min(l.start, c), l = void 0 === l.end ? s : Math.min(l.end, c), !T.extend && s > l && (c = l, l = s, s = c), c = pn(w, s), d = pn(w, l), c && d && (1 !== T.rangeCount || T.anchorNode !== c.node || T.anchorOffset !== c.offset || T.focusNode !== d.node || T.focusOffset !== d.offset) && ((S = S.createRange()).setStart(c.node, c.offset), T.removeAllRanges(), s > l ? (T.addRange(S), T.extend(d.node, d.offset)) : (S.setEnd(d.node, d.offset), T.addRange(S))))), S = [];
                            for (T = w; T = T.parentNode;) 1 === T.nodeType && S.push({
                                element: T,
                                left: T.scrollLeft,
                                top: T.scrollTop
                            });
                            for ("function" == typeof w.focus && w.focus(), w = 0; w < S.length; w++)(T = S[w]).element.scrollLeft = T.left, T.element.scrollTop = T.top
                        }
                        Ht = !!yn, wn = yn = null, e.current = n, Gs = r;
                        do {
                            try {
                                for (w = e; null !== Gs;) {
                                    var E = Gs.effectTag;
                                    if (36 & E && us(w, Gs.alternate, Gs), 128 & E) {
                                        S = void 0;
                                        var x = Gs.ref;
                                        if (null !== x) {
                                            var I = Gs.stateNode;
                                            Gs.tag, S = I, "function" == typeof x ? x(S) : x.current = S
                                        }
                                    }
                                    Gs = Gs.nextEffect
                                }
                            } catch (e) {
                                if (null === Gs) throw Error(o(330));
                                kl(Gs, e), Gs = Gs.nextEffect
                            }
                        } while (null !== Gs);
                        Gs = null, Ur(), Ms = a
                    } else e.current = n;
                    if (Hs) Hs = !1, Qs = e, Ys = t;
                    else
                        for (Gs = r; null !== Gs;) t = Gs.nextEffect, Gs.nextEffect = null, Gs = t;
                    if (0 === (t = e.firstPendingTime) && (Bs = null), 1073741823 === t ? e === Xs ? Zs++ : (Zs = 0, Xs = e) : Zs = 0, "function" == typeof zl && zl(n.stateNode, i), al(e), Vs) throw Vs = !1, e = Ws, Ws = null, e;
                    return 0 != (8 & Ms) || Yr(), null
                }

                function Tl() {
                    for (; null !== Gs;) {
                        var e = Gs.effectTag;
                        0 != (256 & e) && os(Gs.alternate, Gs), 0 == (512 & e) || Hs || (Hs = !0, Hr(97, (function() {
                            return El(), null
                        }))), Gs = Gs.nextEffect
                    }
                }

                function El() {
                    if (90 !== Ys) {
                        var e = 97 < Ys ? 97 : Ys;
                        return Ys = 90, Br(e, xl)
                    }
                }

                function xl() {
                    if (null === Qs) return !1;
                    var e = Qs;
                    if (Qs = null, 0 != (48 & Ms)) throw Error(o(331));
                    var t = Ms;
                    for (Ms |= As, e = e.current.firstEffect; null !== e;) {
                        try {
                            var n = e;
                            if (0 != (512 & n.effectTag)) switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 22:
                                    ss(5, n), ls(5, n)
                            }
                        } catch (t) {
                            if (null === e) throw Error(o(330));
                            kl(e, t)
                        }
                        n = e.nextEffect, e.nextEffect = null, e = n
                    }
                    return Ms = t, Yr(), !0
                }

                function Il(e, t, n) {
                    fa(e, t = ws(e, t = ns(n, t), 1073741823)), null !== (e = il(e, 1073741823)) && al(e)
                }

                function kl(e, t) {
                    if (3 === e.tag) Il(e, e, t);
                    else
                        for (var n = e.return; null !== n;) {
                            if (3 === n.tag) {
                                Il(n, e, t);
                                break
                            }
                            if (1 === n.tag) {
                                var i = n.stateNode;
                                if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof i.componentDidCatch && (null === Bs || !Bs.has(i))) {
                                    fa(n, e = Ss(n, e = ns(t, e), 1073741823)), null !== (n = il(n, 1073741823)) && al(n);
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function Al(e, t, n) {
                    var i = e.pingCache;
                    null !== i && i.delete(t), Ps === e && Ds === n ? Os === Cs || Os === zs && 1073741823 === js && Gr() - qs < 500 ? cl(e, Ds) : Fs = !0 : $l(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, al(e)))
                }

                function Nl(e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t), 0 === (t = 0) && (t = tl(t = el(), e, null)), null !== (e = il(e, t)) && al(e)
                }
                Ts = function(e, t, n) {
                    var i = t.expirationTime;
                    if (null !== e) {
                        var r = t.pendingProps;
                        if (e.memoizedProps !== r || hr.current) Do = !0;
                        else {
                            if (i < n) {
                                switch (Do = !1, t.tag) {
                                    case 3:
                                        Go(t), Po();
                                        break;
                                    case 5:
                                        if (ja(t), 4 & t.mode && 1 !== n && r.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                                        break;
                                    case 1:
                                        yr(t.type) && Er(t);
                                        break;
                                    case 4:
                                        Oa(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        i = t.memoizedProps.value, r = t.type._context, pr(Jr, r._currentValue), r._currentValue = i;
                                        break;
                                    case 13:
                                        if (null !== t.memoizedState) return 0 !== (i = t.child.childExpirationTime) && i >= n ? Qo(e, t, n) : (pr(_a, 1 & _a.current), null !== (t = Xo(e, t, n)) ? t.sibling : null);
                                        pr(_a, 1 & _a.current);
                                        break;
                                    case 19:
                                        if (i = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                            if (i) return Zo(e, t, n);
                                            t.effectTag |= 64
                                        }
                                        if (null !== (r = t.memoizedState) && (r.rendering = null, r.tail = null), pr(_a, _a.current), !i) return null
                                }
                                return Xo(e, t, n)
                            }
                            Do = !1
                        }
                    } else Do = !1;
                    switch (t.expirationTime = 0, t.tag) {
                        case 2:
                            if (i = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, r = vr(t, gr.current), oa(t, n), r = Za(null, t, i, e, r, n), t.effectTag |= 1, "object" == typeof r && null !== r && "function" == typeof r.render && void 0 === r.$$typeof) {
                                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yr(i)) {
                                    var a = !0;
                                    Er(t)
                                } else a = !1;
                                t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null, ua(t);
                                var s = i.getDerivedStateFromProps;
                                "function" == typeof s && va(t, i, s, e), r.updater = ya, t.stateNode = r, r._reactInternalFiber = t, Ea(t, i, e, n), t = qo(null, t, i, !0, a, n)
                            } else t.tag = 0, Oo(null, t, r, n), t = t.child;
                            return t;
                        case 16:
                            e: {
                                if (r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
                                        if (-1 === e._status) {
                                            e._status = 0;
                                            var t = e._ctor;
                                            t = t(), e._result = t, t.then((function(t) {
                                                0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                            }), (function(t) {
                                                0 === e._status && (e._status = 2, e._result = t)
                                            }))
                                        }
                                    }(r), 1 !== r._status) throw r._result;
                                switch (r = r._result, t.type = r, a = t.tag = function(e) {
                                    if ("function" == typeof e) return Ll(e) ? 1 : 0;
                                    if (null != e) {
                                        if ((e = e.$$typeof) === le) return 11;
                                        if (e === de) return 14
                                    }
                                    return 2
                                }(r), e = Xr(r, e), a) {
                                    case 0:
                                        t = $o(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Fo(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = Ro(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = jo(null, t, r, Xr(r.type, e), i, n);
                                        break e
                                }
                                throw Error(o(306, r, ""))
                            }
                            return t;
                        case 0:
                            return i = t.type, r = t.pendingProps, $o(e, t, i, r = t.elementType === i ? r : Xr(i, r), n);
                        case 1:
                            return i = t.type, r = t.pendingProps, Fo(e, t, i, r = t.elementType === i ? r : Xr(i, r), n);
                        case 3:
                            if (Go(t), i = t.updateQueue, null === e || null === i) throw Error(o(282));
                            if (i = t.pendingProps, r = null !== (r = t.memoizedState) ? r.element : null, ca(e, t), ma(t, i, null, n), (i = t.memoizedState.element) === r) Po(), t = Xo(e, t, n);
                            else {
                                if ((r = t.stateNode.hydrate) && (Io = In(t.stateNode.containerInfo.firstChild), xo = t, r = ko = !0), r)
                                    for (n = za(t, null, i, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                                else Oo(e, t, i, n), Po();
                                t = t.child
                            }
                            return t;
                        case 5:
                            return ja(t), null === e && zo(t), i = t.type, r = t.pendingProps, a = null !== e ? e.memoizedProps : null, s = r.children, Tn(i, r) ? s = null : null !== a && Tn(i, a) && (t.effectTag |= 16), _o(e, t), 4 & t.mode && 1 !== n && r.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Oo(e, t, s, n), t = t.child), t;
                        case 6:
                            return null === e && zo(t), null;
                        case 13:
                            return Qo(e, t, n);
                        case 4:
                            return Oa(t, t.stateNode.containerInfo), i = t.pendingProps, null === e ? t.child = Na(t, null, i, n) : Oo(e, t, i, n), t.child;
                        case 11:
                            return i = t.type, r = t.pendingProps, Ro(e, t, i, r = t.elementType === i ? r : Xr(i, r), n);
                        case 7:
                            return Oo(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Oo(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                i = t.type._context,
                                r = t.pendingProps,
                                s = t.memoizedProps,
                                a = r.value;
                                var l = t.type._context;
                                if (pr(Jr, l._currentValue), l._currentValue = a, null !== s)
                                    if (l = s.value, 0 === (a = Fi(l, a) ? 0 : 0 | ("function" == typeof i._calculateChangedBits ? i._calculateChangedBits(l, a) : 1073741823))) {
                                        if (s.children === r.children && !hr.current) {
                                            t = Xo(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                            var u = l.dependencies;
                                            if (null !== u) {
                                                s = l.child;
                                                for (var c = u.firstContext; null !== c;) {
                                                    if (c.context === i && 0 != (c.observedBits & a)) {
                                                        1 === l.tag && ((c = da(n, null)).tag = 2, fa(l, c)), l.expirationTime < n && (l.expirationTime = n), null !== (c = l.alternate) && c.expirationTime < n && (c.expirationTime = n), aa(l.return, n), u.expirationTime < n && (u.expirationTime = n);
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else s = 10 === l.tag && l.type === t.type ? null : l.child;
                                            if (null !== s) s.return = l;
                                            else
                                                for (s = l; null !== s;) {
                                                    if (s === t) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (l = s.sibling)) {
                                                        l.return = s.return, s = l;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            l = s
                                        }
                                Oo(e, t, r.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return r = t.type, i = (a = t.pendingProps).children, oa(t, n), i = i(r = sa(r, a.unstable_observedBits)), t.effectTag |= 1, Oo(e, t, i, n), t.child;
                        case 14:
                            return a = Xr(r = t.type, t.pendingProps), jo(e, t, r, a = Xr(r.type, a), i, n);
                        case 15:
                            return Uo(e, t, t.type, t.pendingProps, i, n);
                        case 17:
                            return i = t.type, r = t.pendingProps, r = t.elementType === i ? r : Xr(i, r), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, yr(i) ? (e = !0, Er(t)) : e = !1, oa(t, n), Sa(t, i, r), Ea(t, i, r, n), qo(null, t, i, !0, e, n);
                        case 19:
                            return Zo(e, t, n)
                    }
                    throw Error(o(156, t.tag))
                };
                var zl = null,
                    Cl = null;

                function Ml(e, t, n, i) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
                }

                function Pl(e, t, n, i) {
                    return new Ml(e, t, n, i)
                }

                function Ll(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Dl(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Pl(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        expirationTime: t.expirationTime,
                        firstContext: t.firstContext,
                        responders: t.responders
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Ol(e, t, n, i, r, a) {
                    var s = 2;
                    if (i = e, "function" == typeof e) Ll(e) && (s = 1);
                    else if ("string" == typeof e) s = 5;
                    else e: switch (e) {
                        case ne:
                            return Rl(n.children, r, a, t);
                        case se:
                            s = 8, r |= 7;
                            break;
                        case ie:
                            s = 8, r |= 1;
                            break;
                        case re:
                            return (e = Pl(12, n, t, 8 | r)).elementType = re, e.type = re, e.expirationTime = a, e;
                        case ue:
                            return (e = Pl(13, n, t, r)).type = ue, e.elementType = ue, e.expirationTime = a, e;
                        case ce:
                            return (e = Pl(19, n, t, r)).elementType = ce, e.expirationTime = a, e;
                        default:
                            if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                                case ae:
                                    s = 10;
                                    break e;
                                case oe:
                                    s = 9;
                                    break e;
                                case le:
                                    s = 11;
                                    break e;
                                case de:
                                    s = 14;
                                    break e;
                                case fe:
                                    s = 16, i = null;
                                    break e;
                                case pe:
                                    s = 22;
                                    break e
                            }
                            throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Pl(s, n, t, r)).elementType = e, t.type = i, t.expirationTime = a, t
                }

                function Rl(e, t, n, i) {
                    return (e = Pl(7, e, i, t)).expirationTime = n, e
                }

                function jl(e, t, n) {
                    return (e = Pl(6, e, null, t)).expirationTime = n, e
                }

                function Ul(e, t, n) {
                    return (t = Pl(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function _l(e, t, n) {
                    this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
                }

                function $l(e, t) {
                    var n = e.firstSuspendedTime;
                    return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
                }

                function Fl(e, t) {
                    var n = e.firstSuspendedTime,
                        i = e.lastSuspendedTime;
                    n < t && (e.firstSuspendedTime = t), (i > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
                }

                function ql(e, t) {
                    t > e.firstPendingTime && (e.firstPendingTime = t);
                    var n = e.firstSuspendedTime;
                    0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
                }

                function Gl(e, t) {
                    var n = e.lastExpiredTime;
                    (0 === n || n > t) && (e.lastExpiredTime = t)
                }

                function Vl(e, t, n, i) {
                    var r = t.current,
                        a = el(),
                        s = ha.suspense;
                    a = tl(a, r, s);
                    e: if (n) {
                        t: {
                            if (et(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(o(170));
                            var l = n;do {
                                switch (l.tag) {
                                    case 3:
                                        l = l.stateNode.context;
                                        break t;
                                    case 1:
                                        if (yr(l.type)) {
                                            l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break t
                                        }
                                }
                                l = l.return
                            } while (null !== l);
                            throw Error(o(171))
                        }
                        if (1 === n.tag) {
                            var u = n.type;
                            if (yr(u)) {
                                n = Tr(n, u, l);
                                break e
                            }
                        }
                        n = l
                    }
                    else n = mr;
                    return null === t.context ? t.context = n : t.pendingContext = n, (t = da(a, s)).payload = {
                        element: e
                    }, null !== (i = void 0 === i ? null : i) && (t.callback = i), fa(r, t), nl(r, a), a
                }

                function Wl(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Bl(e, t) {
                    null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
                }

                function Hl(e, t) {
                    Bl(e, t), (e = e.alternate) && Bl(e, t)
                }

                function Ql(e, t, n) {
                    var i = new _l(e, t, n = null != n && !0 === n.hydrate),
                        r = Pl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
                    i.current = r, r.stateNode = i, ua(r), e[Cn] = i.current, n && 0 !== t && function(e, t) {
                        var n = Je(t);
                        At.forEach((function(e) {
                            gt(e, t, n)
                        })), Nt.forEach((function(e) {
                            gt(e, t, n)
                        }))
                    }(0, 9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = i
                }

                function Yl(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Kl(e, t, n, i, r) {
                    var a = n._reactRootContainer;
                    if (a) {
                        var o = a._internalRoot;
                        if ("function" == typeof r) {
                            var s = r;
                            r = function() {
                                var e = Wl(o);
                                s.call(e)
                            }
                        }
                        Vl(t, o, e, r)
                    } else {
                        if (a = n._reactRootContainer = function(e, t) {
                                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                                    for (var n; n = e.lastChild;) e.removeChild(n);
                                return new Ql(e, 0, t ? {
                                    hydrate: !0
                                } : void 0)
                            }(n, i), o = a._internalRoot, "function" == typeof r) {
                            var l = r;
                            r = function() {
                                var e = Wl(o);
                                l.call(e)
                            }
                        }
                        ul((function() {
                            Vl(t, o, e, r)
                        }))
                    }
                    return Wl(o)
                }

                function Zl(e, t, n) {
                    var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: te,
                        key: null == i ? null : "" + i,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function Xl(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Yl(t)) throw Error(o(200));
                    return Zl(e, t, null, n)
                }
                Ql.prototype.render = function(e) {
                    Vl(e, this._internalRoot, null, null)
                }, Ql.prototype.unmount = function() {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    Vl(null, e, null, (function() {
                        t[Cn] = null
                    }))
                }, ht = function(e) {
                    if (13 === e.tag) {
                        var t = Zr(el(), 150, 100);
                        nl(e, t), Hl(e, t)
                    }
                }, bt = function(e) {
                    13 === e.tag && (nl(e, 3), Hl(e, 3))
                }, vt = function(e) {
                    if (13 === e.tag) {
                        var t = el();
                        nl(e, t = tl(t, e, null)), Hl(e, t)
                    }
                }, N = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (Ie(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var i = n[t];
                                    if (i !== e && i.form === e.form) {
                                        var r = Dn(i);
                                        if (!r) throw Error(o(90));
                                        Se(i), Ie(i, r)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Pe(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ze(e, !!n.multiple, t, !1)
                    }
                }, D = ll, O = function(e, t, n, i, r) {
                    var a = Ms;
                    Ms |= 4;
                    try {
                        return Br(98, e.bind(null, t, n, i, r))
                    } finally {
                        0 === (Ms = a) && Yr()
                    }
                }, R = function() {
                    0 == (49 & Ms) && (function() {
                        if (null !== Ks) {
                            var e = Ks;
                            Ks = null, e.forEach((function(e, t) {
                                Gl(t, e), al(t)
                            })), Yr()
                        }
                    }(), El())
                }, j = function(e, t) {
                    var n = Ms;
                    Ms |= 2;
                    try {
                        return e(t)
                    } finally {
                        0 === (Ms = n) && Yr()
                    }
                };
                var Jl = {
                    Events: [Pn, Ln, Dn, k, E, Fn, function(e) {
                        at(e, $n)
                    }, P, L, Xt, lt, El, {
                        current: !1
                    }]
                };
                ! function(e) {
                    var t = e.findFiberByHostInstance;
                    (function(e) {
                        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (t.isDisabled || !t.supportsFiber) return !0;
                        try {
                            var n = t.inject(e);
                            zl = function(e) {
                                try {
                                    t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                                } catch (e) {}
                            }, Cl = function(e) {
                                try {
                                    t.onCommitFiberUnmount(n, e)
                                } catch (e) {}
                            }
                        } catch (e) {}
                    })(r({}, e, {
                        overrideHookState: null,
                        overrideProps: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: K.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = it(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: function(e) {
                            return t ? t(e) : null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    }))
                }({
                    findFiberByHostInstance: Mn,
                    bundleType: 0,
                    version: "16.14.0",
                    rendererPackageName: "react-dom"
                }), t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jl, t.createPortal = Xl, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternalFiber;
                    if (void 0 === t) {
                        if ("function" == typeof e.render) throw Error(o(188));
                        throw Error(o(268, Object.keys(e)))
                    }
                    return e = null === (e = it(t)) ? null : e.stateNode
                }, t.flushSync = function(e, t) {
                    if (0 != (48 & Ms)) throw Error(o(187));
                    var n = Ms;
                    Ms |= 1;
                    try {
                        return Br(99, e.bind(null, t))
                    } finally {
                        Ms = n, Yr()
                    }
                }, t.hydrate = function(e, t, n) {
                    if (!Yl(t)) throw Error(o(200));
                    return Kl(null, e, t, !0, n)
                }, t.render = function(e, t, n) {
                    if (!Yl(t)) throw Error(o(200));
                    return Kl(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Yl(e)) throw Error(o(40));
                    return !!e._reactRootContainer && (ul((function() {
                        Kl(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[Cn] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = ll, t.unstable_createPortal = function(e, t) {
                    return Xl(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, t.unstable_renderSubtreeIntoContainer = function(e, t, n, i) {
                    if (!Yl(n)) throw Error(o(200));
                    if (null == e || void 0 === e._reactInternalFiber) throw Error(o(38));
                    return Kl(e, t, n, !1, i)
                }, t.version = "16.14.0"
            },
            31542: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (e) {
                        console.error(e)
                    }
                }(), e.exports = n(43577)
            },
            41535: (e, t, n) => {
                "use strict";
                var i = n(62525),
                    r = "function" == typeof Symbol && Symbol.for,
                    a = r ? Symbol.for("react.element") : 60103,
                    o = r ? Symbol.for("react.portal") : 60106,
                    s = r ? Symbol.for("react.fragment") : 60107,
                    l = r ? Symbol.for("react.strict_mode") : 60108,
                    u = r ? Symbol.for("react.profiler") : 60114,
                    c = r ? Symbol.for("react.provider") : 60109,
                    d = r ? Symbol.for("react.context") : 60110,
                    f = r ? Symbol.for("react.forward_ref") : 60112,
                    p = r ? Symbol.for("react.suspense") : 60113,
                    m = r ? Symbol.for("react.memo") : 60115,
                    g = r ? Symbol.for("react.lazy") : 60116,
                    h = "function" == typeof Symbol && Symbol.iterator;

                function b(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var v = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    y = {};

                function w(e, t, n) {
                    this.props = e, this.context = t, this.refs = y, this.updater = n || v
                }

                function S() {}

                function T(e, t, n) {
                    this.props = e, this.context = t, this.refs = y, this.updater = n || v
                }
                w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
                    if ("object" != typeof e && "function" != typeof e && null != e) throw Error(b(85));
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, w.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, S.prototype = w.prototype;
                var E = T.prototype = new S;
                E.constructor = T, i(E, w.prototype), E.isPureReactComponent = !0;
                var x = {
                        current: null
                    },
                    I = Object.prototype.hasOwnProperty,
                    k = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function A(e, t, n) {
                    var i, r = {},
                        o = null,
                        s = null;
                    if (null != t)
                        for (i in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (o = "" + t.key), t) I.call(t, i) && !k.hasOwnProperty(i) && (r[i] = t[i]);
                    var l = arguments.length - 2;
                    if (1 === l) r.children = n;
                    else if (1 < l) {
                        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                        r.children = u
                    }
                    if (e && e.defaultProps)
                        for (i in l = e.defaultProps) void 0 === r[i] && (r[i] = l[i]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: o,
                        ref: s,
                        props: r,
                        _owner: x.current
                    }
                }

                function N(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === a
                }
                var z = /\/+/g,
                    C = [];

                function M(e, t, n, i) {
                    if (C.length) {
                        var r = C.pop();
                        return r.result = e, r.keyPrefix = t, r.func = n, r.context = i, r.count = 0, r
                    }
                    return {
                        result: e,
                        keyPrefix: t,
                        func: n,
                        context: i,
                        count: 0
                    }
                }

                function P(e) {
                    e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > C.length && C.push(e)
                }

                function L(e, t, n, i) {
                    var r = typeof e;
                    "undefined" !== r && "boolean" !== r || (e = null);
                    var s = !1;
                    if (null === e) s = !0;
                    else switch (r) {
                        case "string":
                        case "number":
                            s = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case a:
                                case o:
                                    s = !0
                            }
                    }
                    if (s) return n(i, e, "" === t ? "." + O(e, 0) : t), 1;
                    if (s = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
                        for (var l = 0; l < e.length; l++) {
                            var u = t + O(r = e[l], l);
                            s += L(r, u, n, i)
                        } else if (null === e || "object" != typeof e ? u = null : u = "function" == typeof(u = h && e[h] || e["@@iterator"]) ? u : null, "function" == typeof u)
                            for (e = u.call(e), l = 0; !(r = e.next()).done;) s += L(r = r.value, u = t + O(r, l++), n, i);
                        else if ("object" === r) throw n = "" + e, Error(b(31, "[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, ""));
                    return s
                }

                function D(e, t, n) {
                    return null == e ? 0 : L(e, "", t, n)
                }

                function O(e, t) {
                    return "object" == typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }(e.key) : t.toString(36)
                }

                function R(e, t) {
                    e.func.call(e.context, t, e.count++)
                }

                function j(e, t, n) {
                    var i = e.result,
                        r = e.keyPrefix;
                    e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, i, n, (function(e) {
                        return e
                    })) : null != e && (N(e) && (e = function(e, t) {
                        return {
                            $$typeof: a,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(e, r + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(z, "$&/") + "/") + n)), i.push(e))
                }

                function U(e, t, n, i, r) {
                    var a = "";
                    null != n && (a = ("" + n).replace(z, "$&/") + "/"), D(e, j, t = M(t, a, i, r)), P(t)
                }
                var _ = {
                    current: null
                };

                function $() {
                    var e = _.current;
                    if (null === e) throw Error(b(321));
                    return e
                }
                var F = {
                    ReactCurrentDispatcher: _,
                    ReactCurrentBatchConfig: {
                        suspense: null
                    },
                    ReactCurrentOwner: x,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: i
                };
                t.Children = {
                    map: function(e, t, n) {
                        if (null == e) return e;
                        var i = [];
                        return U(e, i, null, t, n), i
                    },
                    forEach: function(e, t, n) {
                        if (null == e) return e;
                        D(e, R, t = M(null, null, t, n)), P(t)
                    },
                    count: function(e) {
                        return D(e, (function() {
                            return null
                        }), null)
                    },
                    toArray: function(e) {
                        var t = [];
                        return U(e, t, null, (function(e) {
                            return e
                        })), t
                    },
                    only: function(e) {
                        if (!N(e)) throw Error(b(143));
                        return e
                    }
                }, t.Component = w, t.Fragment = s, t.Profiler = u, t.PureComponent = T, t.StrictMode = l, t.Suspense = p, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F, t.cloneElement = function(e, t, n) {
                    if (null == e) throw Error(b(267, e));
                    var r = i({}, e.props),
                        o = e.key,
                        s = e.ref,
                        l = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (s = t.ref, l = x.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                        for (c in t) I.call(t, c) && !k.hasOwnProperty(c) && (r[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) r.children = n;
                    else if (1 < c) {
                        u = Array(c);
                        for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                        r.children = u
                    }
                    return {
                        $$typeof: a,
                        type: e.type,
                        key: o,
                        ref: s,
                        props: r,
                        _owner: l
                    }
                }, t.createContext = function(e, t) {
                    return void 0 === t && (t = null), (e = {
                        $$typeof: d,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: c,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = A, t.createFactory = function(e) {
                    var t = A.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: f,
                        render: e
                    }
                }, t.isValidElement = N, t.lazy = function(e) {
                    return {
                        $$typeof: g,
                        _ctor: e,
                        _status: -1,
                        _result: null
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: m,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.useCallback = function(e, t) {
                    return $().useCallback(e, t)
                }, t.useContext = function(e, t) {
                    return $().useContext(e, t)
                }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                    return $().useEffect(e, t)
                }, t.useImperativeHandle = function(e, t, n) {
                    return $().useImperativeHandle(e, t, n)
                }, t.useLayoutEffect = function(e, t) {
                    return $().useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return $().useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return $().useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return $().useRef(e)
                }, t.useState = function(e) {
                    return $().useState(e)
                }, t.version = "16.14.0"
            },
            27378: (e, t, n) => {
                "use strict";
                e.exports = n(41535)
            },
            360: e => {
                "use strict";
                e.exports = URL
            },
            96553: () => {},
            82507: e => {
                "use strict";
                e.exports = JSON.parse('{"locales":"de","translations":{"This sometimes happens when elements have dynamic or generated <0>classes</0> or <1>ids</1>. Help us re-identify your selected component.":"Dies geschieht manchmal, wenn Elemente dynamische oder generierte <0>Klassen</0> oder <1>IDs haben</1>. Helfen Sie uns, Ihre ausgewählte Komponente neu zu identifizieren.","We think it may be <0>this</0> element:":"Wir denken, dass es <0>dieses</0> Element sein könnte:","Use your mouse to select the element you want to test or use the Page element selector. Once you\'ve made your selection <0>LEAVE THIS TAB OPEN</0> and return back to the previous tab.":"Wählen Sie mit der Maus das Element aus, das Sie testen möchten, oder verwenden Sie den Elementselektor der Seite. Sobald Sie Ihre Auswahl getroffen haben, <0>LASSEN SIE DIESE REGISTERKARTE GEÖFFNET</0> und kehren Sie zur vorherigen Registerkarte zurück.","URL: <0>${0}</0>":"URL: <0>${0}</0>","<0>Accessible text: </0>${0}":"<0>Zugänglicher Text: </0>${0}","<0>Name: </0>${0}":"<0>Name: </0>${0}","<0>Role: </0>${0}":"<0>Position: </0>${0}","<0>State: </0>${0}":"<0>Bundesstaat: </0>${0}","<0>Hint: </0>${0}":"<0>Hinweis: </0>${0}","<0>Name: </0>(None found) <1>We have found issues for this image automatically</1>":"<0>Name: </0>(Nicht gefunden) <1>Wir haben automatisch Probleme für dieses Bild gefunden</1>"," Required":" Erforderlich","${0}":"${0}","${0} - web accessibility testing":"${0} - Zugänglichkeitstests von Webseiten","${0} items":"${0} Posten","${0} of ${1} elements":"${0} von ${1} Elementen","${0} remaining until session expires":"${0} verbleiben bis zum Ablauf der Sitzung","${0} seconds":"${0} Sekunden","${0} test results":"${0} Testergebnisse","(Any issues(s) for this step have been found automatically)":"(Alle Probleme für diesen Schritt wurden automatisch gefunden)",", make sure you\'ve put your site into the state you wish to test it.":"Stellen Sie sicher, dass Sie Ihre Website in den Zustand versetzt haben, in dem Sie sie testen möchten.","1 minute":"1 Minute","<< Please describe how you encountered this error >>":"<< Please describe how you encountered this error >>","A table with 1 column of headers":"Eine Tabelle mit 1 Überschriftsspalte","A table with 1 header row and 1 header column":"Eine Tabelle mit 1 Überschriftszeile und 1 Überschriftsspalte","A table with 1 row of headers":"Eine Tabelle mit 1 Überschriftsreihe","A table with irregular headers. A table can have irregular headers when the header cells are associated with specific ranges of cells rather than an entire row or column.":"Eine Tabelle mit unregelmäßigen Überschriften. Eine Tabelle kann unregelmäßige Überschriften enthalten, wenn die Überschriften mit bestimmten Zellbereichen und nicht mit einer ganzen Zeile oder Spalte verbunden sind.","A table with multi-level headers. Multi-level headers are used on complex tables in which the headers can\'t be associated in a vertical or horizontal way.":"Eine Tabelle mit mehrstufigen Überschriften. Mehrstufige Überschriften werden in komplexen Tabellen verwendet, in denen die Überschriften nicht vertikal oder horizontal zugeordnet werden können.","AT (Assistive Technology) output":"AT (Assistive Technology) Output","About Deque":"Über Deque","Accessibility Specialist":"Zugänglichkeits-Spezialist","Accessible name":"Zugänglicher Name","Additional info":"Zusätzliche Informationen","An abstract example of a form with total issues":"Ein abstraktes Beispiel für ein Formular mit Gesamtvorfällen","An abstract example of a highlighted interactive element with total issues":"Ein abstraktes Beispiel für ein hervorgehobenes interaktives Element mit Gesamtvorfällen","An abstract example of a highlighted modal with total issues":"Ein abstraktes Beispiel für ein hervorgehobenes Modal mit Gesamtvorfällen","An abstract example of a highlighted table with total issues":"Ein abstraktes Beispiel für eine hervorgehobene Tabelle mit Gesamtvorfällen","An abstract example of a web page structure with total issues":"Ein abstraktes Beispiel für eine Webseitenstruktur mit Gesamtvorfällen","An abstract example of a web page with images and total issues":"Ein abstraktes Beispiel für eine Webseite mit Bildern und Gesamtvorfällen","An abstract example of an IGT question, it reads Is our AI correct? - Yes - No - Next":"Ein abstraktes Beispiel für eine IGT-Frage lautet: Ist unsere KI korrekt? - Ja - Nein - Weiter","An abstract image of the Axe devtools extension with the share button highlighted":"Ein abstraktes Bild der Axe devtools-Erweiterung mit hervorgehobener „teilen“-Schaltfläche","An abstract keyboard with total issues":"Eine abstrakte Tastatur mit Gesamtvorfällen","Appearance":"Aussehen","Ask you simple questions about your page content and code":"Ihnen einfache Fragen zu Inhalt und Code Ihrer Seite stellen","Aspect ratio:":"Seitenverhältnis:","Automated screenreader & keyboard testing":"Automatisierte Screenreader- und Tastaturtests","Automatic test run:":"Automatischer Testlauf:","Axe Extension Error":"Fehler bei der Achsenverlängerung","Back":"Zurück","Back to start new scan":"Zurück zum Start eines neuen Scans","Be in control of vital settings for all of your users to prevent inconsistent results":"Behalten Sie die Kontrolle über wichtige Einstellungen für alle Ihre Benutzer, um inkonsistente Ergebnisse zu vermeiden.","Before you hit ":"Bevor Sie den ","Beta":"Beta","Browser:":"Browser aufrufen:","Busy":"Beschäftigt","Buttons and links":"Schaltflächen und Links","Can users interact with interactive elements?":"Können die Nutzer mit interaktiven Elementen interagieren?","Cancel":"Abbrechen","Change How You See Needs Review":"Ändern Sie Ihre Sichtweise der Bedürfnisüberprüfung","Check it out":"Überprüfen Sie es","Checked":"Überprüft","Click \\"NEXT\\" to continue":"Klicken Sie \\"NEXT\\", um fortzufahren","Click \\"READY\\" when you are ready to re-run the automatic test for \\"${0}\\" test record.":"Klicken Sie auf \\"READY\\" wenn Sie bereit sind, den automatischen Test für den Testdatensatz \\"${0}\\" erneut ausführen.","Click here to go to the original url.":"Klicken Sie hier, um zur Original-URL zu gelangen.","Click the button below to continue working":"Klicken Sie auf die Schaltfläche unten, um weiterzuarbeiten.","Close":"Schließen","Collaborate with your team":"Zusammenarbeit mit Ihrem Team","Collapsed":"Abgestürzt","Complete Sign-Up":"Anmeldung abschließen","Computer vision automatically identifies missing semantics":"Computer Vision identifiziert automatisch fehlende Semantik","Configure defaults across your whole organization":"Konfigurieren Sie die Standardeinstellungen für Ihr gesamtes Unternehmen.","Current":"Aktuell","Dark":"Dunkel","Definition list":"Definitionsliste","Designer":"Designer","Detects complex issues with very little time and effort":"Erkennt komplexe Probleme mit sehr geringem Zeit- und Arbeitsaufwand","Detects languages automatically":"Erkennt die Sprachen automatisch","Developer":"Entwickler","Device pixel ratio:":"Pixelverhältnis des Geräts:","Devtools":"Devtools","Did you know that you can now configure how “Needs Review” issues appear? You can change it in the “Rules and Issues” settings.":"Wussten Sie, dass Sie jetzt konfigurieren können, wie „Überprüfung erforderlich“-Vorfälle angezeigt werden? Sie können das in den „Regeln und Vorfälle“-Einstellungen ändern.","Disabled":"Deaktiviert","Distinguishes informative from decorative images":"Unterscheidet informative von dekorativen Bildern","Easily capture issues normally only caught with tedious manual testing":"Einfaches Erfassen von Vorfällen, die normalerweise nur durch mühsame manuelle Tests erkannt werden","Easily export, save, and share your accessibility issues.":"Sie können Ihre Zugänglichkeitsprobleme ganz einfach exportieren, speichern und weitergeben.","Easily test images":"Einfaches Testen von Bildern","Edit test name":"Testnamen bearbeiten","Element 1 of 1":"Element 1 von 1","Element not highlightable":"Element nicht markierbar","Element not inspectable":"Element nicht inspizierbar","Ensures errors can be read by screenreaders":"Gewährleistet, dass Fehler von Screenreadern gelesen werden können","Expanded":"Erweitert","Experience what a screenreader would read aloud–menus, tabs, buttons, and links":"Erleben Sie, was ein Screenreader vorlesen würde - Menüs, Registerkarten, Schaltflächen und Links.","Extend Session":"Session erweitern","Extension theme":"Erweiterungsthema","Finds bugs that confuse screenreader users":"Findet Fehler, die Screenreader-Benutzer verwirren","Finds focus traps":"Findet Fokus-Fallen","Finish":"Beenden","Follow my browser\'s settings (Default)":"Den Einstellungen meines Browsers folgen (Standard)","Form ${0}":"Formular ${0}","Forms":"Formulare","Forms are business critical. Make them accessible.":"Formulare sind geschäftskritisch. Machen Sie sie zugänglich.","Found ${0} fields.":"${0} Felder gefunden.","Found 1 field.":"1 Feld gefunden.","Frequently Asked Questions":"Häufig gestellte Fragen","Full Page Scan":"Ganzseitiger Scan","Generate 1 single report with results from your full (100% WCAG coverage) audit":"Erstellen Sie einen einzigen Bericht mit den Ergebnissen Ihres vollständigen Audits (100% WCAG-Abdeckung).","Generate the reports managers need":"Erstellen Sie die Berichte, die Manager benötigen.","Go to Settings":"Zu den Einstellungen gehen","Group name: ${0}":"Gruppenname: ${0}","Has popup":"Hat Popup","Headings":"Überschriften","Help you test like an expert":"Testen Sie wie ein Experte","High Contrast (Default)":"Hoher Kontrast (Standard)","Highlight":"Hervorheben","Highlight ${0}":"${0} hervorheben","Highlight Element":"Element hervorheben","Highlight theme":"Thema hervorheben","Highlight thumbnail element ${0}. Accessible name: ${1}":"Thumbnail-Element hervorheben ${0}. Zugänglicher Name: ${1}","Highlight thumbnail element ${0}. This element has no accessible name":"Thumbnail-Element hervorheben ${0}. Dieses Element hat keinen zugänglichen Namen.","How good is your core page structure?":"Wie gut ist Ihre zentrale Seitenstruktur?","I would like to select a different form, an element containing a set of fields, or a particular field.":"Ich möchte ein anderes Formular, ein Element, das eine Reihe von Feldern enthält, oder ein bestimmtes Feld auswählen.","IGTs are AI-powered advanced testing tools that:":"IGTs sind KI-gestützte fortschrittliche Prüfwerkzeuge, die:","Identifies images that need more descriptive ALT text":"Bilder identifizieren, die einen ALT-Text benötigen, der beschreibender ist.","Identify accessibility bugs that can’t be caught with automation alone":"Zugänglichkeitsfehler identifizieren, die durch Automatisierung allein nicht gefunden werden können.","Image ${0}.":"Bild ${0}.","Images":"Bilder","Import into your issue tracker as JSON, CSV, or JUnit XML":"Import in Ihren Vorfall-Tracker als JSON, CSV oder JUnit XML","Improve team collaboration and fix issues faster!":"Verbessern Sie die Zusammenarbeit im Team und beheben Sie Probleme schneller.","In order to use the pro features you must agree to the terms and conditions and complete your sign up":"Um die Pro-Funktionen nutzen zu können, müssen Sie den Allgemeinen Geschäftsbedingungen zustimmen und Ihre Anmeldung abschließen.","Inspect":"Inspizieren","Inspect Element":"Element inspizieren","Interactive Elements":"Interaktive Elemente","Invalid":"Ungültig","Issue Settings Change":"Vorfall-Einstellungen ändern","Issue detected.":"Problem erkannt.","Issue raised during automatic testing.":"Problem, das während der automatischen Prüfung aufgetreten ist.","It appears you have navigated or reloaded the page, click \\"Ready\\" when the page is back in the correct state.":"Es sieht so aus, als hätten Sie navigiert oder die Seite neu geladen. Klicken Sie auf \\"Ready\\", wenn die Seite wieder im korrekten Zustand ist.","Jump to Next Highlight":"Zum nächsten Highlight springen","Jump to Previous Highlight":"Zum vorherigen Highlight springen","Keyboard":"Tastatur","Keyboard Shortcuts":"Tastatur-Shortcuts","Language":"Sprache","Learn more about this feature":"Mehr über diese Funktion erfahren","Let\'s save your test. After it\'s saved, you can run guided tests, export, and share your results.":"Speichern wir Ihren Test. Nach dem Speichern können Sie geführte Tests durchführen, exportieren und Ihre Ergebnisse weitergeben.","Let’s get you started with accessibility testing! We are asking for your role so that we can personalize the experience.":"Beginnen wir mit dem Zugänglichkeitstest! Geben Sie Ihre Position an, damit wir die Erfahrung personalisieren können.","Light":"Leicht","Link opens in a new window":"Link wird in einem neuen Fenster geöffnet","Lists":"Listen","Loading":"Wird geladen","Manage settings across all your devices and browsers in 1 location":"Verwaltung der Einstellungen für alle Ihre Geräte und Browser an einem Ort","Manager":"Manager","Manual Issues: The Missing Piece of Your Testing Puzzle":"Manuelle Probleme: Das fehlende Teil Ihres Testpuzzles","Modal":"Modal","Modal Dialog":"Modaler Dialog","Modals are challenging. We make it easy.":"Modale sind eine Herausforderung. Wir machen es Ihnen leicht.","More Info":"Weitere Informationen","More Information":"Weitere Informationen","More info":"Weitere Informationen","Move to next violation":"Weiter zum nächsten Verstoß","Move to previous violation":"Zu vorherigem Verstoß übergehen","Multi-line":"Mehrzeilig","Multi-selectable":"Mehrfach auswählbar","N/A":"K/A","Name your test something that will be easy for you to recognize later. Try to use something like the page title or what project this test is for!":"Geben Sie Ihrem Test einen Namen, den Sie später leicht erkennen können. Versuchen Sie, etwas wie den Titel der Seite oder das Projekt, für das dieser Test bestimmt ist, zu verwenden!","Next":"Weiter","No":"Nein","No accessibility experience required!":"Keine Zugänglichkeitserfahrungen erforderlich!","No accessibility training needed. Unlock your free trial to get started.":"Keine Zugänglichkeitsschulung erforderlich. Schalten Sie Ihre kostenlose Testversion frei, um loszulegen.","No credit card required.":"Keine Kreditkarte erforderlich.","No further action needed.":"Keine weiteren Maßnahmen erforderlich.","Not checked":"Nicht überprüft","Not editable":"Nicht bearbeitbar","Not pressed":"Nicht gedrückt","Not selected":"Nicht ausgewählt","Not sorted":"Nicht sortiert.","Oops!":"Huch!","Operating System:":"Betriebssystem:","Options":"Optionen","Ordered list":"Bestellliste","Other":"Andere","Our AI identified this as a header cell. If that is correct, click the \\"${0}\\" button below.":"Unsere KI hat dies als Überschrift identifiziert. Wenn das richtig ist, klicken Sie auf die untere \\"${0}\\"-Schaltfläche.","Overwhelmed by testing your data tables for accessibility?":"Sind Sie mit der Prüfung Ihrer Datentabellen auf Barrierefreiheit überfordert?","Page information":"Seiteninformationen","Partial Page Scan":"Teilweiser Seiten-Scan","Please click NEXT.":"Klicken Sie auf WEITER.","Please do not scroll or interact with the page while we capture screenshots.":"Bitte blättern Sie nicht durch die Seite und interagieren Sie nicht mit ihr, während wir Screenshots aufnehmen.","Please make sure your page is in the right state and try again.":"Bitte vergewissern Sie sich, dass Ihre Seite im richtigen Zustand ist und versuchen Sie es erneut.","Please put this page in whatever state you would like to re-run the automatic test.":"Bitte versetzen Sie diese Seite in den Zustand, in dem Sie den automatischen Test erneut durchführen möchten.","Please select your role":"Wählen Sie Ihre Position.","Pressed":"Gedrückt","Privacy Policy":"Datenschutzrichtlinie","Pro just got a whole lot better with axe configuration!":"Mit der Achsenkonfiguration ist Pro jetzt noch besser geworden!","Provide feedback:":"Feedback geben:","Re-run automatic scan":"Automatischen Scan wiederholen","Re-run automatic tests":"Automatische Tests wiederholen","Re-run saved tests after you’ve fixed issues to validate resolution":"Führen Sie gespeicherte Tests erneut durch, nachdem Sie Probleme behoben haben, um die Lösung zu überprüfen.","Re-running automatic tests":"Automatische Tests wiederholen","Re-running automatic tests. Please wait...":"Automatische Tests wiederholen. Bitte warten …","Ready":"Fertig","Replay tab order":"Registerkarten-Reihenfolge wiederholen","Required":"Erforderlich","Reset":"Zurücksetzen","Reset Settings":"Einstellungen zurücksetzen","Reset Tutorial Pointouts":"Tutorial-Pointouts zurücksetzen","Reset help":"Hilfe zurücksetzen","Restart test":"Test wiederholen","Results":"Ergebnisse","Role: ${0}.":"Position: ${0}.","Save":"Speichern","Save Results":"Ergebnisse speichern","Save Test":"Test speichern","Save progress & quit":"Fortschritt speichern und beenden","Save your test":"Ihren Test speichern","Scan User Flow":"Benutzerflow scannen","Scan all of my page (Analyze)":"Meine gesamte Seite scannen (Analysieren)","Screenshot of Guided Tests section of axe DevTools showing Intelligent Guided Tests for Table, Keyboard, Modal Dialog, Interactive Elements and Structure.":"Screenshot der Sektion Guided Tests in axe DevTools mit intelligenten Guided Tests für Tabelle, Tastatur, Modaler Dialog, Interaktive Elemente und Struktur.","Screenshot of axe Configuration page with \\"Rules and Issues Settings\\" section displayed. Showing \\"Accessibility Standard\\" settings.":"Screenshot der Achsen-Konfigurationsseite mit dem Abschnitt \\"Rules and Issues Settings\\". \\"Accessibility Standard\\"-Einstellungen anzeigen.","Screenshot of export modal with options to export the \'Record and Issue data\' as well as \'Only issues\' in CSV, JSON, or JUnit XML":"Screenshot des Export-Modals mit Optionen zum Exportieren der „Datensatz- und Problemdaten“ sowie „Nur Probleme“ in CSV, JSON oder JUnit XML.","Screenshot of the new \\"Add Manual Issue\\" dialog.":"Screenshot des neuen \\"Add Manual Issue\\"-Dialogs.","Seamlessly configure your axe DevTools settings in 1 location!":"Konfigurieren Sie Ihre Achsen-DevTools-Einstellungen nahtlos an einem Ort!","Select all":"Alle auswählen","Select all \\"${0}\\"":"Alle auswählen \\"${0}\\"","Select your role":"Wählen Sie Ihre Position","Selected":"Ausgewählt","Selected (${0} / ${1})":"Ausgewählt (${0} / ${1})","Session Timeout":"Session-Timeout","Share data with Export.":"Daten mit Export teilen.","Sharing is caring.":"Teilen ist wichtig.","Sign in":"Einloggen","Simplifies how you find table bugs":"Vereinfacht die Suche nach Tabellenfehlern","Simply answer a series of simple questions":"Beantworten Sie einfach eine Reihe von einfachen Fragen.","Single-line":"Einzeilig","Sorted":"Sortiert","Sorted in ascending order":"In aufsteigender Reihenfolge sortiert","Sorted in descending order":"In absteigender Reihenfolge sortiert","Spans ${0} columns":"Umfasst ${0} Spalten","Spans ${0} rows":"Umfasst ${0} Zeilen","Stack Trace":"Stack-Trace","Start using ${0}":"Beginnen Sie mit ${0}","Stop tab order replay":"Stoppen der Wiedergabe der Registerkarten-Reihenfolge","Structure":"Struktur","Supercharge your manual issues with screenshots & detailed descriptions":"Laden Sie Ihre manuellen Probleme mit Screenshots und detaillierten Beschreibungen auf.","THIS IS NOT A DATA CELL":"DIES IST KEINE DATENZELLE.","Table":"Tabelle","Take your accessibility testing from 57% to more than 80% with AI-powered IGTs.":"Steigern Sie Ihre Zugänglichkeitstests mit KI-gesteuerten IGTs von 57 % auf über 80 %.","Terms of Service":"Nutzungsbedingungen","Test Element":"Testelement","Test a series of pages and interactions for accessibility violations.":"Testen Sie eine Reihe von Seiten und Interaktionen auf Zugänglichkeitsverstöße.","Test forms to ensure users can fill them out accurately and submit them.":"Testen Sie Formulare, um sicherzustellen, dass die Benutzer sie korrekt ausfüllen und abschicken können.","Test name":"Testname","Test name can not be empty.":"Der Testname darf nicht leer sein.","Test name help":"Hilfe zum Testnamen","Tester":"Tester","Tests for screenreader compatibility for all platforms at the same time":"Tests für Screenreader-Kompatibilität für alle Plattformen gleichzeitig","The AI-powered “Forms  IGT” Pro feature:":"Die KI-unterstützte Funktion „Forms IGT“ Pro:","The AI-powered “Table IGT” Pro feature:":"Die KI-gestützte Funktion „Table IGT“ Pro:","The Interactive Elements tool will guide you through testing interactive elements\' accessible names, roles, and states.":"Das Tool „Interaktive Elemente“ führt Sie durch das Testen der zugänglichen Namen, Rollen und Zustände interaktiver Elemente.","The Modal Dialog tool will guide you through testing a single modal or alert dialog.":"Das Modal-Dialog-Tool führt Sie durch das Testen eines einzelnen Modal- oder Warndialogs.","The images tests will walk you through testing images (img tags, the \'img\' role, css background images, icons and more!).":"Die Bildtests führen Sie durch das Testen von Bildern (IMG-Tags, die „img“-Rolle, CSS-Hintergrundbilder, Symbole und mehr!).","The keyboard tests will perform a series of tab order and focus indication checks.":"Die Tastaturtests führen eine Reihe von Überprüfungen der Tabulatorreihenfolge und der Fokusanzeige durch.","The state of your page has changed.\\n  Please put it in the state you started testing.":"Der Status Ihrer Seite hat sich geändert.\\n  Bitte geben Sie den Zustand an, in dem Sie den Test begonnen haben.","The structure tool will guide you through testing the page\'s structure.":"Das Struktur-Tool führt Sie durch den Seitenstrukturtest.","The table tool will guide you through testing a table.":"Das Tabellenwerkzeug führt Sie durch einen Tabellentest.","The “Images IGT” Pro feature:":"Die „Images IGT“ Pro-Funktion:","The “Keyboard IGT” Pro feature:":"Die „Keyboard IGT“ Pro-Funktion:","The “Modal Dialog IGT” Pro feature:":"Die Pro-Funktion „Modal Dialog IGT“:","The “Structure IGT” Pro feature:":"Die Pro-Funktion „Structure IGT“:","There was a problem creating your issue.":"Es gab ein Problem bei der Erstellung Ihres Vorfalls.","There was a problem deleting your test.":"Beim Löschen Ihres Tests ist ein Problem aufgetreten.","There was a problem loading your test.":"Beim Laden Ihres Tests ist ein Problem aufgetreten.","There was a problem loading your tests.":"Beim Laden Ihrer Tests ist ein Problem aufgetreten.","There was a problem starting your ${0}.":"Beim Starten Ihres ${0} ist ein Problem aufgetreten.","There was a problem updating your issue.":"Es gab ein Problem bei der Aktualisierung Ihres Vorfalls.","There was a problem updating your test.":"Es gab ein Problem bei der Aktualisierung Ihres Tests.","There was an issue updating your test. Please try again.":"Es gab ein Problem bei der Aktualisierung Ihres Tests. Bitte versuchen Sie es erneut.","This data cell has no AT output":"Diese Datenzelle hat keinen AT-Output","This data cell has no accessible name":"Diese Datenzelle hat keinen zugänglichen Namen","This is not a data table":"Dies ist keine Datentabelle","This page is not the same page on which the automatic test was last run.":"Diese Seite ist nicht dieselbe Seite, auf der der automatische Test zuletzt durchgeführt wurde.","This will replace the current automatic test results.":"Dies wird die derzeitigen automatischen Testergebnisse ersetzen.","To ensure consistency across all Deque products, best practices and needs review issues are now disabled by default. In addition, the default WCAG level is now WCAG 2.1 AA.":"Um die Konsistenz zwischen allen Deque-Produkten zu gewährleisten, sind bewährte Praktiken und Vorfallsprüfungen jetzt standardmäßig deaktiviert. Darüber hinaus ist die Standard-WCAG-Stufe jetzt WCAG 2.1 AA.","To start testing for accessibility, open the\\n          browser’s Developer Tools, navigate to the ${0}\\n          tab, and run an analysis on a webpage.":"Um den Zugänglichkeitstest zu beginnen, \\n          öffnen Sie die Entwicklertools des Browsers, navigieren Sie zur Registerkarte ${0}\\n          und führen Sie eine Analyse auf einer Webseite durch.","Try Now":"Jetzt versuchen","Try again":"Erneut versuchen","Tutorial pointouts are used to point out things of interest, or introduce new features.":"Tutorial-Pointouts werden verwendet, um auf interessante Dinge hinzuweisen oder neue Funktionen vorzustellen.","Tutorial pointouts have been reset!":"Die Tutorial-Pointouts wurden zurückgesetzt!","Unable to authenticate with the axe server.":"Die Authentifizierung beim Achsen-Server ist nicht möglich.","Unable to delete":"Kann nicht gelöscht werden","Unable to highlight one or more elements.\\n          Get your page in the right state before trying again.":"Ein oder mehrere Elemente können nicht hervorgehoben werden.\\n          Bringen Sie Ihre Seite in den richtigen Zustand, bevor Sie es erneut versuchen.","Uncovers structural issues on your page":"Deckt strukturelle Probleme auf Ihrer Seite auf","Unordered list":"Unsortierte Liste","Unselect all":"Alle aufheben","Upgrade to check it out":"Upgrade zum Ausprobieren","Upload to your issue tracking software or send a link":"Hochladen in Ihre Problemverfolgungssoftware oder Senden eines Links.","Use Browser Locale (Default)":"Browser-Lokalisierung verwenden (Standard)","User Flow Analysis":"Benutzerflow-Analyse","Uses computer vision to confirm visible labels match programmatic labels":"Verwendet Computer Vision, um zu überprüfen, ob die sichtbaren Etiketten mit den programmatischen Etiketten übereinstimmen.","Uses computer vision to uncover problems in your table":"Verwendet Computer Vision, um Probleme in Ihrer Tabelle zu erkennen.","Uses computer vision-powered focus indication analysis":"Verwendet Computer-Vision-gestützte Analyse der Fokusanzeige.","Validate the states of interactive widgets":"Validierung der Zustände von interaktiven Widgets","Validates focus management":"Validierung des Fokusmanagements","Validates headings, page titles, lists, and media elements":"Validierung von Überschriften, Seitentiteln, Listen und Medienelementen","Validates image elements, SVGs, and CSS background images":"Validierung von Bildelementen, SVGs und CSS-Hintergrundbildern","Validates semantics, labels, and groups":"Validierung von Semantik, Bezeichnungen und Gruppen","View help pages & get free issue remediation guidance":"Hilfeseiten anzeigen und kostenlose Anleitung zur Problembehebung erhalten.","Viewport height:":"Höhe des Ansichtsfensters:","Viewport width:":"Breite des Ansichtsfensters:","Vision is needed to perform the entirety of this test accurately.":"Für die genaue Durchführung des gesamten Tests ist Vision erforderlich.","Walks you through testing any type of table–simple or complex":"Führt Sie durch die Prüfung jeder Art von Tabelle - einfach oder komplex","We couldn\'t find any ${0}":"Wir konnten keine ${0} finden.","We couldn\'t find any ${0} on your page.":"Wir konnten auf Ihrer Seite keine ${0} finden.","We encountered an error that we were unable to recover from.":"Wir sind auf einen Fehler gestoßen, den wir nicht beheben konnten.","We were unable to find any interactive elements. Select any that we missed. If there are no interactive elements, click \\"NEXT\\" to continue":"Wir konnten keine interaktiven Elemente finden. Wählen Sie alle aus, die wir übersehen haben. Wenn keine interaktiven Elemente vorhanden sind, klicken Sie auf  \\"NEXT\\", um fortzufahren.","Welcome to ${0}":"Willkommen bei ${0}","What in the world are Intelligent Guided Tests (IGTs)?!":"Was in aller Welt sind intelligent geführte Tests (Intelligent Guided Tests, IGTs)?","With the AI-powered “Interactive Elements IGT” Pro feature:":"Mit der KI-gestützten „Interactive Elements IGT“ Pro-Funktion:","With the “Export” Pro feature:":"Mit der Pro „Export“-Funktion:","Yes":"Ja","Your session has expired. Please log back in.":"Ihre Sitzung ist abgelaufen. Bitte loggen Sie sich erneut ein.","Your test was successfully deleted.":"Ihr Test wurde erfolgreich gelöscht.","You’re doing awesome! Boost your testing with Intelligent Guided Tests.":"Sie machen das großartig! Verbessern Sie Ihre Tests mit Intelligent Guided Tests.","You’re doing awesome! Share your great work with your team.":"Sie machen das großartig! Teilen Sie Ihre großartige Arbeit mit Ihrem Team.","alt":"alt","axe-core version:":"axe-core version:","bullet 1":"bullet 1","bullet 2":"bullet 2","bullet 3":"bullet 3","critical":"kritisch","description.":"Beschreibung.","minor":"gering","moderate":"mäßig","or":"oder","powered by":"angetrieben durch","see all (${0}) fields":"alle (${0}) Felder ansehen","serious":"schwerwiegend","title":"Titel","unknown":"unbekannt","© Copyright ${0} Deque Systems, Inc":"© Copyright ${0} Deque Systems, Inc","© Copyright ${0}, Deque Systems, Inc. All Rights Reserved":"© Copyright ${0}, Deque Systems, Inc. Alle Rechte vorbehalten"}}')
            },
            9552: e => {
                "use strict";
                e.exports = JSON.parse('{"locales":"es","translations":{"This sometimes happens when elements have dynamic or generated <0>classes</0> or <1>ids</1>. Help us re-identify your selected component.":"Esto ocurre a veces cuando los elementos tienen clases <0>dinámicas</0> o ids <1>generadas</1>. Ayúdenos a reidentificar el componente seleccionado.","We think it may be <0>this</0> element:":"Creemos que puede ser <0>este</0> elemento:","Use your mouse to select the element you want to test or use the Page element selector. Once you\'ve made your selection <0>LEAVE THIS TAB OPEN</0> and return back to the previous tab.":"Utilice el ratón para seleccionar el elemento que desea probar o utilice el selector de elementos de la página. Una vez realizada la selección <0>DEJE ESTA PESTAÑA ABIERTA</0> y vuelva a la pestaña anterior.","URL: <0>${0}</0>":"URL: <0>${0}</0>","<0>Accessible text: </0>${0}":"<0>Texto accesible: </0>${0}","<0>Name: </0>${0}":"<0>Nombre: </0>${0}","<0>Role: </0>${0}":"<0>Cargo: </0>${0}","<0>State: </0>${0}":"<0>Estado: </0>${0}","<0>Hint: </0>${0}":"<0>Pista: </0>${0}","<0>Name: </0>(None found) <1>We have found issues for this image automatically</1>":"<0>Nombre: </0>(No se ha encontrado ninguno) <1>Hemos encontrado problemas para esta imagen automáticamente</1>"," Required":" Requerido","${0}":"${0}","${0} - web accessibility testing":"${0} - pruebas de accesibilidad web","${0} items":"${0} artículos","${0} of ${1} elements":"${0} de ${1} elementos","${0} remaining until session expires":"${0} restantes hasta que expire la sesión","${0} seconds":"${0} segundos","${0} test results":"${0} resultados de la prueba","(Any issues(s) for this step have been found automatically)":"(Cualquier problema para este paso ha sido encontrado automáticamente)",", make sure you\'ve put your site into the state you wish to test it.":", asegúrese de que ha puesto su sitio en el estado en el que desea probarlo.","1 minute":"1 minuto","<< Please describe how you encountered this error >>":"<< Please describe how you encountered this error >>","A table with 1 column of headers":"Una tabla con 1 columna de encabezados","A table with 1 header row and 1 header column":"Una tabla con 1 fila de encabezados y 1 columna de encabezados","A table with 1 row of headers":"Una tabla con 1 fila de cabeceras","A table with irregular headers. A table can have irregular headers when the header cells are associated with specific ranges of cells rather than an entire row or column.":"Una tabla con cabeceras irregulares. Una tabla puede tener cabeceras irregulares cuando las celdas de cabecera están asociadas a rangos específicos de celdas en lugar de a una fila o columna entera.","A table with multi-level headers. Multi-level headers are used on complex tables in which the headers can\'t be associated in a vertical or horizontal way.":"Una tabla con cabeceras multinivel. Las cabeceras multinivel se utilizan en tablas complejas en las que las cabeceras no pueden asociarse de forma vertical u horizontal.","AT (Assistive Technology) output":"Salida AT (Tecnología Asistencial)","About Deque":"Acerca de Deque","Accessibility Specialist":"Especialista en accesibilidad","Accessible name":"Nombre accesible","Additional info":"Información adicional","An abstract example of a form with total issues":"Ejemplo abstracto de un formulario con todos los problemas","An abstract example of a highlighted interactive element with total issues":"Ejemplo abstracto de un elemento interactivo resaltado con todos los problemas","An abstract example of a highlighted modal with total issues":"Ejemplo abstracto de modal resaltado con todos los problemas","An abstract example of a highlighted table with total issues":"Ejemplo abstracto de tabla resaltada con todos los problemas","An abstract example of a web page structure with total issues":"Ejemplo abstracto de estructura de página web con todos los problemas","An abstract example of a web page with images and total issues":"Ejemplo abstracto de página web con imágenes y problemas generales","An abstract example of an IGT question, it reads Is our AI correct? - Yes - No - Next":"Ejemplo abstracto de pregunta IGT: ¿Es correcta nuestra IA? - Sí - No - Siguiente","An abstract image of the Axe devtools extension with the share button highlighted":"Una imagen abstracta de la extensión Axe devtools con el botón de compartir resaltado","An abstract keyboard with total issues":"Un teclado abstracto con el total de incidencias","Appearance":"Apariencia","Ask you simple questions about your page content and code":"Realiza preguntas sencillas sobre el contenido y el código de su página","Aspect ratio:":"Relación de aspecto:","Automated screenreader & keyboard testing":"Pruebas automatizadas de lector de pantalla y teclado","Automatic test run:":"Ejecución automática de pruebas:","Axe Extension Error":"Error de extensión Axe","Back":"Atrás","Back to start new scan":"Volver para iniciar un nuevo análisis","Be in control of vital settings for all of your users to prevent inconsistent results":"Controle la configuración vital de todos sus usuarios para evitar resultados incoherentes","Before you hit ":"Antes de pulsar ","Beta":"Beta","Browser:":"Navegador:","Busy":"Ocupado","Buttons and links":"Botones y enlaces","Can users interact with interactive elements?":"¿Los usuarios pueden interactuar con elementos interactivos?","Cancel":"Cancelar","Change How You See Needs Review":"Cambiar cómo ve Necesita revisión","Check it out":"Revisar","Checked":"Revisado","Click \\"NEXT\\" to continue":"Haga clic en \\"SIGUIENTE\\" para continuar.","Click \\"READY\\" when you are ready to re-run the automatic test for \\"${0}\\" test record.":"Haga clic en \\"LISTO\\" cuando esté listo para volver a ejecutar la prueba automática para el registro de prueba \\"${0}\\".","Click here to go to the original url.":"Haga clic aquí para ir a la url original.","Click the button below to continue working":"Haga clic en el botón de abajo para seguir trabajando","Close":"Cerrar","Collaborate with your team":"Colaborar con su equipo","Collapsed":"Colapsado","Complete Sign-Up":"Registro completo","Computer vision automatically identifies missing semantics":"La visión por ordenador identifica automáticamente la semántica que falta","Configure defaults across your whole organization":"Configure los valores predeterminados para toda su organización","Current":"Actual","Dark":"Oscuro","Definition list":"Lista de definiciones","Designer":"Diseñador","Detects complex issues with very little time and effort":"Detecta problemas complejos con muy poco tiempo y esfuerzo","Detects languages automatically":"Detecta idiomas automáticamente","Developer":"Desarrollador","Device pixel ratio:":"Proporción de píxeles por dispositivo:","Devtools":"Devtools","Did you know that you can now configure how “Needs Review” issues appear? You can change it in the “Rules and Issues” settings.":"¿Sabía que ahora puede configurar cómo aparecen los problemas “Necesita revisión”? Puede cambiarlo en la configuración de “Reglas y problemas”.","Disabled":"Desactivado","Distinguishes informative from decorative images":"Distingue las imágenes informativas de las decorativas","Easily capture issues normally only caught with tedious manual testing":"Capture fácilmente los problemas que normalmente sólo se detectan con tediosas pruebas manuales","Easily export, save, and share your accessibility issues.":"Exporte, guarde y comparta fácilmente sus problemas de accesibilidad.","Easily test images":"Pruebe imágenes fácilmente","Edit test name":"Edite el nombre de la prueba","Element 1 of 1":"Elemento 1 de 1","Element not highlightable":"Elemento no destacable","Element not inspectable":"Elemento no inspeccionable","Ensures errors can be read by screenreaders":"Garantiza que los errores puedan ser leídos por lectores de pantalla","Expanded":"Ampliado","Experience what a screenreader would read aloud–menus, tabs, buttons, and links":"Experimente lo que un lector de pantalla leería en voz alta: menús, pestañas, botones y enlaces","Extend Session":"Ampliar sesión","Extension theme":"Tema de extensión","Finds bugs that confuse screenreader users":"Detecta errores que confunden a los usuarios de lectores de pantalla","Finds focus traps":"Encuentra trampas de enfoque","Finish":"Finalizar","Follow my browser\'s settings (Default)":"Seguir la configuración de mi navegador (Por defecto)","Form ${0}":"Formulario ${0}","Forms":"Formularios","Forms are business critical. Make them accessible.":"Los formularios son esenciales para la empresa. Hágalos accesibles.","Found ${0} fields.":"Encontrados ${0} campos.","Found 1 field.":"Encontrado 1 campo.","Frequently Asked Questions":"Preguntas frecuentes","Full Page Scan":"Escaneo de página completa","Generate 1 single report with results from your full (100% WCAG coverage) audit":"Genere 1 único informe con los resultados de su auditoría completa (100 % de cobertura WCAG)","Generate the reports managers need":"Generar los informes que necesitan los administradores","Go to Settings":"Ir a Configuración","Group name: ${0}":"Nombre del grupo: ${0}","Has popup":"Tiene ventana emergente","Headings":"Encabezados","Help you test like an expert":"Le ayudarán a realizar pruebas como un experto","High Contrast (Default)":"Contraste alto (predeterminado)","Highlight":"Punto destacado ","Highlight ${0}":"Punto destacado ${0}","Highlight Element":"Elemento de Punto destacado","Highlight theme":"Tema de Punto destacado","Highlight thumbnail element ${0}. Accessible name: ${1}":"Elemento miniatura de Punto destacado ${0}. Nombre accesible: ${1}","Highlight thumbnail element ${0}. This element has no accessible name":"Elemento miniatura de Punto destacado ${0}. Este elemento no tiene nombre accesible","How good is your core page structure?":"¿Qué tal es la estructura de su página principal?","I would like to select a different form, an element containing a set of fields, or a particular field.":"Me gustaría seleccionar un formulario diferente, un elemento que contenga un conjunto de campos o un campo concreto.","IGTs are AI-powered advanced testing tools that:":"Los IGT son herramientas de pruebas avanzadas basadas en IA que:","Identifies images that need more descriptive ALT text":"Identifican imágenes que necesitan un texto ALT más descriptivo","Identify accessibility bugs that can’t be caught with automation alone":"Identifican errores de accesibilidad que no pueden detectarse sólo con la automatización","Image ${0}.":"Imagen ${0}.","Images":"Imágenes","Import into your issue tracker as JSON, CSV, or JUnit XML":"Importar a su gestor de incidencias como JSON, CSV o JUnit XML","Improve team collaboration and fix issues faster!":"Mejorar la colaboración en equipo y solucionar los problemas más rápido","In order to use the pro features you must agree to the terms and conditions and complete your sign up":"Para utilizar las funciones pro, debe aceptar los términos y condiciones y completar su registro","Inspect":"Inspeccionar","Inspect Element":"Inspeccionar elemento","Interactive Elements":"Elementos interactivos","Invalid":"No válido","Issue Settings Change":"Cambio de configuración del problema","Issue detected.":"Problema detectado.","Issue raised during automatic testing.":"Problema detectado durante la prueba automática.","It appears you have navigated or reloaded the page, click \\"Ready\\" when the page is back in the correct state.":"Parece que ha navegado o recargado la página, haga clic en \\"Listo\\" cuando la página vuelva a estar en el estado correcto.","Jump to Next Highlight":"Saltar al siguiente punto destacado","Jump to Previous Highlight":"Saltar al punto destacado anterior","Keyboard":"Teclado","Keyboard Shortcuts":"Atajos de teclado","Language":"Idioma","Learn more about this feature":"Más información sobre esta función","Let\'s save your test. After it\'s saved, you can run guided tests, export, and share your results.":"Guarde su prueba. Una vez guardada, puede realizar pruebas guiadas, exportar y compartir los resultados.","Let’s get you started with accessibility testing! We are asking for your role so that we can personalize the experience.":"¡Empecemos con las pruebas de accesibilidad! Le pedimos su rol para poder personalizar la experiencia.","Light":"Luz","Link opens in a new window":"El enlace se abre en una ventana nueva","Lists":"Listas","Loading":"Cargando","Manage settings across all your devices and browsers in 1 location":"Gestione la configuración de todos sus dispositivos y navegadores en una sola ubicación","Manager":"Gestor","Manual Issues: The Missing Piece of Your Testing Puzzle":"Problemas manuales: La pieza que faltaba en el rompecabezas de las pruebas","Modal":"Modal","Modal Dialog":"Diálogo modal","Modals are challenging. We make it easy.":"Los modales son un reto. Nosotros lo hacemos fácil.","More Info":"Más info","More Information":"Más información","More info":"Más info","Move to next violation":"Ir a la siguiente infracción","Move to previous violation":"Ir a la infracción anterior","Multi-line":"Multilínea","Multi-selectable":"Multiseleccionable","N/A":"N/A","Name your test something that will be easy for you to recognize later. Try to use something like the page title or what project this test is for!":"Ponga a su prueba un nombre que le resulte fácil de reconocer más adelante. ¡Intente utilizar algo como el título de la página o para qué proyecto es esta prueba!","Next":"Siguiente","No":"No","No accessibility experience required!":"¡No es necesario tener experiencia en accesibilidad!","No accessibility training needed. Unlock your free trial to get started.":"No se necesita formación en accesibilidad. Desbloquee su prueba gratuita para empezar.","No credit card required.":"No necesita tarjeta de crédito.","No further action needed.":"No es necesaria ninguna otra acción.","Not checked":"No marcado","Not editable":"No editable","Not pressed":"No presionado","Not selected":"No seleccionado","Not sorted":"No ordenado","Oops!":"¡Ups!","Operating System:":"Sistema operativo:","Options":"Opciones","Ordered list":"Lista ordenada","Other":"Otro","Our AI identified this as a header cell. If that is correct, click the \\"${0}\\" button below.":"Nuestra IA identificó esto como una celda de cabecera. Si es correcto, haga clic en el botón \\"${0}\\" de abajo.","Overwhelmed by testing your data tables for accessibility?":"¿Está abrumado por tener que comprobar la accesibilidad de sus tablas de datos?","Page information":"Información de la página","Partial Page Scan":"Escaneo parcial de página","Please click NEXT.":"Haga clic en SIGUIENTE.","Please do not scroll or interact with the page while we capture screenshots.":"Por favor, no se desplace ni interactúe con la página mientras realizamos las capturas de pantalla.","Please make sure your page is in the right state and try again.":"Asegúrese de que la página está en el estado correcto e inténtelo de nuevo.","Please put this page in whatever state you would like to re-run the automatic test.":"Por favor, ponga esta página en el estado que desee para volver a ejecutar la prueba automática.","Please select your role":"Seleccione su rol","Pressed":"Presionado","Privacy Policy":"Política de privacidad","Pro just got a whole lot better with axe configuration!":"¡Pro acaba de mejorar con la configuración de axe!","Provide feedback:":"Proporcione sus comentarios:","Re-run automatic scan":"Vuelva a ejecutar escaneo automático","Re-run automatic tests":"Vuelva a ejecutar pruebas automáticas","Re-run saved tests after you’ve fixed issues to validate resolution":"Vuelva a ejecutar las pruebas guardadas después de solucionar los problemas para validar la resolución","Re-running automatic tests":"Vuelva a ejecutar pruebas automáticas","Re-running automatic tests. Please wait...":"Vuelva a ejecutar pruebas automáticas. Por favor, espere...","Ready":"Listo","Replay tab order":"Reproducir orden de ficha","Required":"Requerido","Reset":"Restablecer","Reset Settings":"Restablecer configuración","Reset Tutorial Pointouts":"Restablecer puntos del tutorial","Reset help":"Restablecer ayuda","Restart test":"Reiniciar prueba","Results":"Resultados","Role: ${0}.":"Rol: ${0}.","Save":"Guardar","Save Results":"Guardar resultados","Save Test":"Guardar prueba","Save progress & quit":"Guardar progreso y salir","Save your test":"Guardar la prueba","Scan User Flow":"Escanear flujo de usuario","Scan all of my page (Analyze)":"Escanear toda mi página (Analizar)","Screenshot of Guided Tests section of axe DevTools showing Intelligent Guided Tests for Table, Keyboard, Modal Dialog, Interactive Elements and Structure.":"Captura de pantalla de la sección Pruebas Guiadas de axe DevTools mostrando Pruebas Guiadas Inteligentes para Tabla, Teclado, Diálogo Modal, Elementos Interactivos y Estructura.","Screenshot of axe Configuration page with \\"Rules and Issues Settings\\" section displayed. Showing \\"Accessibility Standard\\" settings.":"Captura de pantalla de la página de configuración de axe con  Configuración con la sección \\"Configuración de reglas y problemas\\". Mostrando la configuración de \\"Estándar de Accesibilidad\\".","Screenshot of export modal with options to export the \'Record and Issue data\' as well as \'Only issues\' in CSV, JSON, or JUnit XML":"Captura de pantalla del modal de exportación con opciones para exportar los ‘Registrar y expedir datos’ así como ‘Sólo problemas’ en CSV, JSON o JUnit XML.","Screenshot of the new \\"Add Manual Issue\\" dialog.":"Captura de pantalla del nuevo diálogo \\"Añadir problema manual\\".","Seamlessly configure your axe DevTools settings in 1 location!":"¡Configure sin problemas sus ajustes de axe DevTools en una sola ubicación!","Select all":"Seleccionar todo","Select all \\"${0}\\"":"Seleccionar todo \\"${0}\\"","Select your role":"Seleccionar su rol","Selected":"Seleccionado","Selected (${0} / ${1})":"Seleccionado (${0} / ${1})","Session Timeout":"Tiempo de espera de la sesión","Share data with Export.":"Compartir datos con Export.","Sharing is caring.":"Compartir es cuidar.","Sign in":"Iniciar sesión","Simplifies how you find table bugs":"Simplifica la búsqueda de errores en las tablas","Simply answer a series of simple questions":"Sólo tiene que responder a una serie de preguntas sencillas","Single-line":"Una sola línea","Sorted":"Ordenado","Sorted in ascending order":"Orden ascendente","Sorted in descending order":"Ordenado de forma descendente","Spans ${0} columns":"Abarca ${0} columnas","Spans ${0} rows":"Abarca ${0} filas","Stack Trace":"Seguimiento de pila","Start using ${0}":"Comience a usar ${0}","Stop tab order replay":"Detener repetición de orden de tabulación","Structure":"Estructura","Supercharge your manual issues with screenshots & detailed descriptions":"Mejore sus problemas manuales con capturas de pantalla y descripciones detalladas","THIS IS NOT A DATA CELL":"ESTO NO ES UNA CELDA DE DATOS","Table":"Tabla","Take your accessibility testing from 57% to more than 80% with AI-powered IGTs.":"Lleve sus pruebas de accesibilidad del 57 % a más del 80 % con los IGT potenciados por IA.","Terms of Service":"Términos de servicio","Test Element":"Elemento de prueba","Test a series of pages and interactions for accessibility violations.":"Probar una serie de páginas e interacciones para detectar violaciones de la accesibilidad.","Test forms to ensure users can fill them out accurately and submit them.":"Probar formularios para asegurarse de que los usuarios pueden rellenarlos con precisión y enviarlos.","Test name":"Nombre de la prueba","Test name can not be empty.":"El nombre de la prueba no puede estar vacío.","Test name help":"Ayuda del nombre de la prueba","Tester":"Probador","Tests for screenreader compatibility for all platforms at the same time":"Pruebas de compatibilidad con lectores de pantalla para todas las plataformas al mismo tiempo.","The AI-powered “Forms  IGT” Pro feature:":"La función “Formularios IGT” Pro con IA:","The AI-powered “Table IGT” Pro feature:":"La función “Tabla IGT” Pro con IA:","The Interactive Elements tool will guide you through testing interactive elements\' accessible names, roles, and states.":"La herramienta Elementos interactivos le guiará en la comprobación de los nombres, funciones y estados accesibles de los elementos interactivos.","The Modal Dialog tool will guide you through testing a single modal or alert dialog.":"La herramienta Diálogo modal le guiará a través de las pruebas de un único diálogo modal o de alerta.","The images tests will walk you through testing images (img tags, the \'img\' role, css background images, icons and more!).":"Las pruebas de imágenes le guiarán a través de las pruebas de imágenes (etiquetas img, la función \'img\', imágenes de fondo css, iconos y mucho más).","The keyboard tests will perform a series of tab order and focus indication checks.":"Las pruebas de teclado realizarán una serie de comprobaciones de orden de tabulación e indicación de foco.","The state of your page has changed.\\n  Please put it in the state you started testing.":"El estado de su página ha cambiado.\\n  Por favor, póngala en el estado en el que comenzó las pruebas.","The structure tool will guide you through testing the page\'s structure.":"La herramienta de estructura le guiará en la comprobación de la estructura de la página.","The table tool will guide you through testing a table.":"La herramienta de tabla le guiará a través de la prueba de una tabla.","The “Images IGT” Pro feature:":"La función “Imágenes IGT” Pro:","The “Keyboard IGT” Pro feature:":"La función “Teclado IGT” Pro:","The “Modal Dialog IGT” Pro feature:":"La función “Diálogo modal IGT” Pro:","The “Structure IGT” Pro feature:":"La función “Estructura IGT” Pro:","There was a problem creating your issue.":"Se ha producido un problema al crear su problema.","There was a problem deleting your test.":"Se ha producido un problema al eliminar la prueba.","There was a problem loading your test.":"Se ha producido un problema al cargar la prueba.","There was a problem loading your tests.":"Se ha producido un problema al cargar las pruebas.","There was a problem starting your ${0}.":"Se ha producido un problema al iniciar su ${0}.","There was a problem updating your issue.":"Se ha producido un problema al actualizar su problema.","There was a problem updating your test.":"Se ha producido un problema al actualizar su prueba.","There was an issue updating your test. Please try again.":"Se ha producido un error al actualizar su prueba. Por favor, inténtelo de nuevo.","This data cell has no AT output":"Esta celda de datos no tiene salida AT","This data cell has no accessible name":"Esta celda de datos no tiene nombre accesible","This is not a data table":"Esto no es una tabla de datos","This page is not the same page on which the automatic test was last run.":"Esta página no es la misma en la que se ejecutó por última vez la prueba automática.","This will replace the current automatic test results.":"Esto reemplazará los resultados de la prueba automática actual.","To ensure consistency across all Deque products, best practices and needs review issues are now disabled by default. In addition, the default WCAG level is now WCAG 2.1 AA.":"Para garantizar la coherencia en todos los productos Deque, las mejores prácticas y las cuestiones de revisión de necesidades están ahora desactivadas por defecto. Además, el nivel WCAG predeterminado es ahora WCAG 2.1 AA.","To start testing for accessibility, open the\\n          browser’s Developer Tools, navigate to the ${0}\\n          tab, and run an analysis on a webpage.":"Para empezar a comprobar la accesibilidad, abra las\\n          Herramientas de desarrollo del navegador, vaya a la pestaña ${0}\\n          y ejecute un análisis en una página web.","Try Now":"Probar ahora","Try again":"Volver a probar","Tutorial pointouts are used to point out things of interest, or introduce new features.":"Las indicaciones de los tutoriales se utilizan para señalar aspectos de interés o introducir nuevas funciones.","Tutorial pointouts have been reset!":"¡Se han restablecido los puntos de tutorial!","Unable to authenticate with the axe server.":"No se puede autenticar con el servidor axe.","Unable to delete":"No se puede borrar","Unable to highlight one or more elements.\\n          Get your page in the right state before trying again.":"No se puede resaltar uno o más elementos.\\n          Ponga su página en el estado correcto antes de volver a intentarlo.","Uncovers structural issues on your page":"Descubra problemas estructurales en su página","Unordered list":"Lista desordenada","Unselect all":"Deseleccionar todo","Upgrade to check it out":"Actualizar para comprobarlo","Upload to your issue tracking software or send a link":"Cargar en su software de seguimiento de problemas o enviar un enlace","Use Browser Locale (Default)":"Utilizar la configuración regional del navegador (predeterminada)","User Flow Analysis":"Análisis del flujo de usuarios","Uses computer vision to confirm visible labels match programmatic labels":"Utiliza visión por ordenador para confirmar que las etiquetas visibles coinciden con las programáticas","Uses computer vision to uncover problems in your table":"Utiliza visión por ordenador para descubrir problemas en la tabla","Uses computer vision-powered focus indication analysis":"Utiliza el análisis de indicación de enfoque basado en visión por ordenador","Validate the states of interactive widgets":"Valida los estados de los widgets interactivos","Validates focus management":"Valida la gestión del enfoque","Validates headings, page titles, lists, and media elements":"Valida encabezados, títulos de páginas, listas y elementos multimedia","Validates image elements, SVGs, and CSS background images":"Valida elementos de imagen, SVG e imágenes de fondo CSS","Validates semantics, labels, and groups":"Valida la semántica, las etiquetas y los grupos","View help pages & get free issue remediation guidance":"Consulte las páginas de ayuda y obtenga orientación gratuita para solucionar problemas","Viewport height:":"Altura de la ventana gráfica:","Viewport width:":"Anchura de la ventana gráfica:","Vision is needed to perform the entirety of this test accurately.":"Se necesita visión para realizar la totalidad de esta prueba con precisión.","Walks you through testing any type of table–simple or complex":"Le guía a través de la prueba de cualquier tipo de tabla, simple o compleja","We couldn\'t find any ${0}":"No pudimos encontrar ningún ${0}","We couldn\'t find any ${0} on your page.":"No pudimos encontrar ningún ${0} en su página.","We encountered an error that we were unable to recover from.":"Se ha producido un error del que no hemos podido recuperarnos.","We were unable to find any interactive elements. Select any that we missed. If there are no interactive elements, click \\"NEXT\\" to continue":"No pudimos encontrar ningún elemento interactivo. Seleccione cualquiera que no hayamos detectado. Si no hay elementos interactivos, haga clic en \\"SIGUIENTE\\" para continuar.","Welcome to ${0}":"Bienvenido a ${0}","What in the world are Intelligent Guided Tests (IGTs)?!":"¿Qué son los Exámenes Guiados Inteligentes (IGT)?","With the AI-powered “Interactive Elements IGT” Pro feature:":"Con la función Pro “Elementos interactivos IGT” potenciada por IA:","With the “Export” Pro feature:":"Con la función “Exportar” Pro:","Yes":"Sí","Your session has expired. Please log back in.":"Su sesión ha expirado. Vuelva a conectarse.","Your test was successfully deleted.":"Su prueba se ha eliminado correctamente.","You’re doing awesome! Boost your testing with Intelligent Guided Tests.":"¡Lo está haciendo de maravilla! Impulse sus pruebas con las Pruebas Guiadas Inteligentes.","You’re doing awesome! Share your great work with your team.":"¡Lo está haciendo de maravilla! Comparta su gran trabajo con su equipo.","alt":"alt","axe-core version:":"versión axe-core:","bullet 1":"viñeta 1","bullet 2":"viñeta 2","bullet 3":"punto 3","critical":"crítico","description.":"descripción.","minor":"menor","moderate":"moderado","or":"o","powered by":"impulsado por","see all (${0}) fields":"ver todos (${0}) los campos","serious":"título","title":"serio","unknown":"desconocido","© Copyright ${0} Deque Systems, Inc":"© Copyright ${0} Deque Systems, Inc","© Copyright ${0}, Deque Systems, Inc. All Rights Reserved":"© Copyright ${0}, Deque Systems, Inc. Todos los derechos reservados"}}')
            },
            69135: e => {
                "use strict";
                e.exports = JSON.parse('{"locales":"fr","translations":{"This sometimes happens when elements have dynamic or generated <0>classes</0> or <1>ids</1>. Help us re-identify your selected component.":"Cela se produit parfois lorsque des éléments ont <0>des classes</0> ou <1>des identifiants</1>dynamiques ou générés. Aidez-nous à réidentifier le composant sélectionné.","We think it may be <0>this</0> element:":"Nous pensons qu’il s’agit de <0>cet</0> élément :","Use your mouse to select the element you want to test or use the Page element selector. Once you\'ve made your selection <0>LEAVE THIS TAB OPEN</0> and return back to the previous tab.":"Utilisez votre souris pour sélectionner l’élément que vous souhaitez tester ou utilisez le sélecteur d’éléments disponible sur la page. Une fois votre sélection effectuée <0>LAISSEZ CET ONGLET OUVERT</0> et retournez sur l’onglet précédent.","URL: <0>${0}</0>":"URL : <0>${0}</0>","<0>Accessible text: </0>${0}":"<0>Texte accessible : </0>${0}","<0>Name: </0>${0}":"<0>Nom : </0>${0}","<0>Role: </0>${0}":"<0>Rôle : </0>${0}","<0>State: </0>${0}":"<0>Statut : </0>${0}","<0>Hint: </0>${0}":"<0>Indice : </0>${0}","<0>Name: </0>(None found) <1>We have found issues for this image automatically</1>":"<0>Nom : </0>(aucun trouvé) <1>Nous avons trouvé des problèmes pour cette image automatiquement</1>"," Required":" Requis","${0}":"${0}","${0} - web accessibility testing":"${0} -  test d’accessibilité du Web","${0} items":"${0} éléments","${0} of ${1} elements":"${0} sur ${1} éléments","${0} remaining until session expires":"${0} s restantes avant l’expiration de la session","${0} seconds":"${0} secondes","${0} test results":"${0} résultats des tests","(Any issues(s) for this step have been found automatically)":"(Le ou les problèmes éventuels pour cette étape ont été trouvés automatiquement)",", make sure you\'ve put your site into the state you wish to test it.":", pour tester votre site, assurez-vous d’avoir mis votre site dans le statut dans lequel vous souhaitez le tester.","1 minute":"1 minute","<< Please describe how you encountered this error >>":"<< Please describe how you encountered this error >>","A table with 1 column of headers":"Un tableau avec 1 colonne d’en-tête","A table with 1 header row and 1 header column":"Un tableau avec 1 ligne d’en-tête et 1 colonne d’en-tête","A table with 1 row of headers":"Un tableau avec 1 ligne d’en-tête","A table with irregular headers. A table can have irregular headers when the header cells are associated with specific ranges of cells rather than an entire row or column.":"Un tableau avec des en-têtes irréguliers. Un tableau peut avoir des en-têtes irréguliers lorsque les cellules d’en-tête sont associées à des plages spécifiques de cellules plutôt qu’à une ligne ou une colonne entière.","A table with multi-level headers. Multi-level headers are used on complex tables in which the headers can\'t be associated in a vertical or horizontal way.":"Un tableau avec des en-têtes à plusieurs niveaux. Les en-têtes à plusieurs niveaux sont utilisés dans les tableaux complexes dans lesquels les en-têtes ne peuvent pas être associés de manière verticale ou horizontale.","AT (Assistive Technology) output":"Sortie AT (Assistive Technology)","About Deque":"À propos de Deque","Accessibility Specialist":"Spécialiste de l’accessibilité","Accessible name":"Nom accessible","Additional info":"Informations complémentaires","An abstract example of a form with total issues":"Un exemple abstrait d’un formulaire indiquant le nombre total de problèmes","An abstract example of a highlighted interactive element with total issues":"Un exemple abstrait d’un élément interactif mis en évidence indiquant le nombre total de problèmes","An abstract example of a highlighted modal with total issues":"Un exemple abstrait d’un modal mis en évidence indiquant le nombre total de problèmes","An abstract example of a highlighted table with total issues":"Exemple abstrait d’un tableau mis en évidence indiquant le nombre total de problèmes","An abstract example of a web page structure with total issues":"Un exemple abstrait de structure de page Web indiquant le nombre total de problèmes","An abstract example of a web page with images and total issues":"Un exemple abstrait d’une page Web avec des images et indiquant le nombre total de problèmes","An abstract example of an IGT question, it reads Is our AI correct? - Yes - No - Next":"Un exemple abstrait d’une question de l’IGT (test guidé intelligent), elle se lit ainsi : Notre IA est-elle correcte ? - Oui - Non - Suivant","An abstract image of the Axe devtools extension with the share button highlighted":"Une image abstraite de l’extension Axe devtools avec le bouton « share » (partager) mis en évidence","An abstract keyboard with total issues":"Un clavier abstrait indiquant le nombre total de problèmes","Appearance":"Apparence","Ask you simple questions about your page content and code":"Vous pose des questions simples sur le contenu et le code de votre page","Aspect ratio:":"Rapport d’aspect :","Automated screenreader & keyboard testing":"Test automatisé des lecteurs d’écran et des claviers","Automatic test run:":"Test de fonctionnement automatique :","Axe Extension Error":"Erreur d’extension Axe","Back":"Retour","Back to start new scan":"Retourner pour lancer une nouvelle analyse","Be in control of vital settings for all of your users to prevent inconsistent results":"Contrôlez les paramètres essentiels pour tous vos utilisateurs afin d’éviter des résultats incohérents","Before you hit ":"Avant de commencer ","Beta":"Beta","Browser:":"Navigateur :","Busy":"En cours d’exécution","Buttons and links":"Boutons et liens","Can users interact with interactive elements?":"Les utilisateurs peuvent-ils interagir avec les éléments interactifs ?","Cancel":"Annuler","Change How You See Needs Review":"Changez la façon dont vous voyez l’examen des besoins","Check it out":"Vérifier","Checked":"Vérifié","Click \\"NEXT\\" to continue":"Cliquez sur \\"SUIVANT\\" pour continuer","Click \\"READY\\" when you are ready to re-run the automatic test for \\"${0}\\" test record.":"Cliquez sur \\"PRÊT\\" lorsque vous êtes prêt à réexécuter le test automatique pour l’enregistrement du test \\"${0}\\".","Click here to go to the original url.":"Cliquez ici pour accéder à l’URL d’origine.","Click the button below to continue working":"Cliquez sur le bouton ci-dessous pour continuer à travailler","Close":"Fermer","Collaborate with your team":"Collaborer avec votre équipe","Collapsed":"Réduit","Complete Sign-Up":"Terminer l’inscription","Computer vision automatically identifies missing semantics":"La vision par ordinateur identifie automatiquement la sémantique manquante","Configure defaults across your whole organization":"Configurez les valeurs par défaut pour l’ensemble de votre organisation","Current":"Actuel","Dark":"Sombre","Definition list":"Liste de définitions","Designer":"Concepteur","Detects complex issues with very little time and effort":"Détecte les problèmes complexes avec très peu de temps et d’efforts","Detects languages automatically":"Détecte automatiquement les langues","Developer":"Développeur","Device pixel ratio:":"Rapport entre les pixels de l’appareil :","Devtools":"Devtools","Did you know that you can now configure how “Needs Review” issues appear? You can change it in the “Rules and Issues” settings.":"Saviez-vous que vous pouvez désormais configurer la façon dont les problèmes « À revoir » apparaissent ? Vous pouvez le modifier dans les paramètres « Règles et problèmes ».","Disabled":"Désactivé","Distinguishes informative from decorative images":"Différencie les images informatives des images décoratives","Easily capture issues normally only caught with tedious manual testing":"Identifiez facilement les problèmes qui ne sont normalement détectés que par des tests manuels fastidieux","Easily export, save, and share your accessibility issues.":"Exportez, enregistrez et partagez facilement vos problèmes d’accessibilité.","Easily test images":"Testez facilement les images","Edit test name":"Modifier le nom du test","Element 1 of 1":"Élément 1 sur 1","Element not highlightable":"Élément non mis en évidence","Element not inspectable":"Élément non inspectable","Ensures errors can be read by screenreaders":"Veillez à ce que les erreurs puissent être lues par les lecteurs d’écran","Expanded":"Agrandi","Experience what a screenreader would read aloud–menus, tabs, buttons, and links":"Découvrez ce qu’un lecteur d’écran lirait à haute voix : menus, onglets, boutons et liens","Extend Session":"Prolonger la session","Extension theme":"Thème d’extension","Finds bugs that confuse screenreader users":"Identifie les bogues qui déroutent les lecteurs d’écran","Finds focus traps":"Détecte les pièges de mise au point","Finish":"Terminer","Follow my browser\'s settings (Default)":"Suivre les paramètres de mon navigateur (par défaut)","Form ${0}":"Formulaire ${0}","Forms":"Formulaires","Forms are business critical. Make them accessible.":"Les formulaires sont essentiels pour les entreprises. Rendez-les accessibles.","Found ${0} fields.":"${0} champs trouvés.","Found 1 field.":"1 champ trouvé.","Frequently Asked Questions":"Questions fréquemment posées","Full Page Scan":"Analyse complète de la page","Generate 1 single report with results from your full (100% WCAG coverage) audit":"Générez un seul rapport avec les résultats de votre audit complet (100 % de couverture WCAG (référentiel général d\'accessibilité pour les administrations))","Generate the reports managers need":"Générez les rapports dont les responsables ont besoin","Go to Settings":"Accéder aux paramètres","Group name: ${0}":"Nom du groupe : ${0}","Has popup":"Contient une fenêtre contextuelle","Headings":"En-têtes","Help you test like an expert":"Vous permet de tester comme un expert","High Contrast (Default)":"Contraste élevé (par défaut)","Highlight":"Mettre en évidence","Highlight ${0}":"Mettre en évidence ${0}","Highlight Element":"Mettre en évidence l’élément","Highlight theme":"Mettre en évidence le thème","Highlight thumbnail element ${0}. Accessible name: ${1}":"Mettre en évidence l’élément de la vignette ${0}. Nom accessible : ${1}","Highlight thumbnail element ${0}. This element has no accessible name":"Mettre en évidence l’élément de la vignette ${0}. Cet élément ne dispose pas de nom accessible","How good is your core page structure?":"Quelle est la qualité de la structure de base de votre page ?","I would like to select a different form, an element containing a set of fields, or a particular field.":"J’aimerais sélectionner un formulaire différent, un élément contenant un ensemble de champs ou un champ particulier.","IGTs are AI-powered advanced testing tools that:":"Les IGT sont des outils de test avancés alimentés par l’IA qui :","Identifies images that need more descriptive ALT text":"identifie les images qui ont besoin d’un texte ALT plus descriptif","Identify accessibility bugs that can’t be caught with automation alone":"Identifie les bogues d’accessibilité qui ne peuvent pas être détectés par l’automatisation seule","Image ${0}.":"Image ${0}.","Images":"Images","Import into your issue tracker as JSON, CSV, or JUnit XML":"Importation dans votre outil de suivi des problèmes sous forme de JSON, CSV ou JUnit XML","Improve team collaboration and fix issues faster!":"Améliorez la collaboration au sein de votre équipe et résolvez les problèmes plus rapidement !","In order to use the pro features you must agree to the terms and conditions and complete your sign up":"Afin d’utiliser les fonctionnalités pro, vous devez accepter les termes et conditions et compléter votre inscription","Inspect":"Inspecter","Inspect Element":"Inspecter l’élément","Interactive Elements":"Éléments interactifs","Invalid":"Invalide","Issue Settings Change":"Problème lors de la modification des paramètres","Issue detected.":"Problème détecté.","Issue raised during automatic testing.":"Problème soulevé lors des tests automatiques.","It appears you have navigated or reloaded the page, click \\"Ready\\" when the page is back in the correct state.":"Il semblerait que vous ayez navigué ou actualisé la page. Cliquez sur \\"Prêt \\" lorsque la page reprend son statut fonctionnel normal.","Jump to Next Highlight":"Passer à la mise en évidence suivante","Jump to Previous Highlight":"Retourner à la mise en évidence précédente","Keyboard":"Clavier","Keyboard Shortcuts":"Raccourcis clavier","Language":"Langue","Learn more about this feature":"En savoir plus sur cette fonctionnalité","Let\'s save your test. After it\'s saved, you can run guided tests, export, and share your results.":"Commençons par enregistrer votre test. Après l’avoir enregistré, vous pouvez effectuer des tests guidés, exporter et partager vos résultats.","Let’s get you started with accessibility testing! We are asking for your role so that we can personalize the experience.":"Commençons à tester l’accessibilité ! Votre rôle nous intéresse afin que nous puissions personnaliser votre expérience.","Light":"Éclairage","Link opens in a new window":"Le lien s’ouvre dans une nouvelle fenêtre","Lists":"Listes","Loading":"Chargement en cours","Manage settings across all your devices and browsers in 1 location":"Gérez les paramètres de tous vos appareils et navigateurs en un seul endroit","Manager":"Gestionnaire","Manual Issues: The Missing Piece of Your Testing Puzzle":"Problèmes à résoudre manuellement : Le maillon manquant de votre chaîne de tests","Modal":"Modal","Modal Dialog":"Dialogue modal","Modals are challenging. We make it easy.":"Les modaux représentent un défi. Nous vous facilitons la tâche.","More Info":"Plus d’infos","More Information":"Plus d’informations","More info":"Plus d’infos","Move to next violation":"Passer à l’infraction suivante","Move to previous violation":"Retourner à l’infraction précédente","Multi-line":"Multilignes","Multi-selectable":"Sélection multiple","N/A":"Sans objet","Name your test something that will be easy for you to recognize later. Try to use something like the page title or what project this test is for!":"Donnez à votre test un nom qui vous permettra de le reconnaître facilement par la suite. Essayez d’utiliser un titre comme celui de la page ou du projet pour lequel ce test est réalisé !","Next":"Suivant","No":"Non","No accessibility experience required!":"Aucune expérience en matière d’accessibilité n’est requise !","No accessibility training needed. Unlock your free trial to get started.":"Aucune formation à l’accessibilité n’est nécessaire. Profitez de votre essai gratuit pour vous lancer.","No credit card required.":"Aucune carte de crédit n’est nécessaire.","No further action needed.":"Aucune autre action n’est nécessaire.","Not checked":"Non vérifié","Not editable":"Non modifiable","Not pressed":"Pas actionné","Not selected":"Pas sélectionné","Not sorted":"Non trié","Oops!":"Oups !","Operating System:":"Système d’exploitation :","Options":"Options","Ordered list":"Liste triée","Other":"Autre","Our AI identified this as a header cell. If that is correct, click the \\"${0}\\" button below.":"Notre IA a identifié cette cellule comme étant une cellule d’en-tête. Si c’est le cas, cliquez sur le bouton \\"${0}\\" ci-dessous.","Overwhelmed by testing your data tables for accessibility?":"Les tests d’accessibilité de vos tableaux de données vous laissent perplexe ?","Page information":"Informations sur la page","Partial Page Scan":"Analyse partielle de la page","Please click NEXT.":"Veuillez cliquer sur SUIVANT.","Please do not scroll or interact with the page while we capture screenshots.":"Veuillez ne pas faire défiler la page ni interagir avec elle pendant que nous effectuons des captures d’écran.","Please make sure your page is in the right state and try again.":"Assurez-vous que votre page affiche son statut fonctionnel normal et réessayez.","Please put this page in whatever state you would like to re-run the automatic test.":"Veuillez mettre cette page dans le statut dans lequel vous souhaitez que le test automatique soit réexécuté.","Please select your role":"Veuillez indiquer votre rôle","Pressed":"Actionné","Privacy Policy":"Politique de confidentialité","Pro just got a whole lot better with axe configuration!":"La version Pro vient de considérablement s’améliorer avec la configuration d’Axe !","Provide feedback:":"Donnez votre avis :","Re-run automatic scan":"Relancer l’analyse automatique","Re-run automatic tests":"Relancer les tests automatiques","Re-run saved tests after you’ve fixed issues to validate resolution":"Relancer les tests sauvegardés après avoir résolu les problèmes pour valider la résolution","Re-running automatic tests":"Relancer les tests automatiques","Re-running automatic tests. Please wait...":"Relancer les tests automatiques. Veuillez patienter…","Ready":"Prêt","Replay tab order":"Ordre de l’onglet Répéter","Required":"Requis","Reset":"Réinitialiser","Reset Settings":"Réinitialiser les paramètres","Reset Tutorial Pointouts":"Réinitialiser les points de repère du tutoriel","Reset help":"Réinitialiser l’aide","Restart test":"Redémarrer le test","Results":"Résultats","Role: ${0}.":"Rôle : ${0}.","Save":"Enregistrer","Save Results":"Enregistrer les résultats","Save Test":"Enregistrer le test","Save progress & quit":"Enregistrer la progression et quitter","Save your test":"Enregistrer votre test","Scan User Flow":"Analyser le flux de l’utilisateur","Scan all of my page (Analyze)":"Analyser toute ma page","Screenshot of Guided Tests section of axe DevTools showing Intelligent Guided Tests for Table, Keyboard, Modal Dialog, Interactive Elements and Structure.":"Capture d’écran de la section « Tests guidés de axe DevTools » montrant les tests guidés intelligents pour le tableau, le clavier, la boîte de dialogue modale, les éléments interactifs et la structure.","Screenshot of axe Configuration page with \\"Rules and Issues Settings\\" section displayed. Showing \\"Accessibility Standard\\" settings.":"Capture d’écran de la page de configuration d’axe avec la section \\"Paramètres des règles et problèmes\\" affichée. Affichage des paramètres de la \\"Norme d’accessibilité\\".","Screenshot of export modal with options to export the \'Record and Issue data\' as well as \'Only issues\' in CSV, JSON, or JUnit XML":"Capture d’écran de la fenêtre modale d’exportation avec des options pour exporter les données « Enregistrer et données avec problème » ainsi que « Seulement les problèmes » en format CSV, JSON ou XML JUnit","Screenshot of the new \\"Add Manual Issue\\" dialog.":"Capture d’écran de la nouvelle boîte de dialogue \\"Ajouter un problème manuel\\".","Seamlessly configure your axe DevTools settings in 1 location!":"Configurez en toute transparence vos paramètres axe DevTools en un seul endroit !","Select all":"Tout sélectionner","Select all \\"${0}\\"":"Sélectionner tout \\"${0}\\"","Select your role":"Sélectionner votre rôle","Selected":"Sélectionné","Selected (${0} / ${1})":"Sélectionné (${0}/${1})","Session Timeout":"Délai d’attente de la session","Share data with Export.":"Partager des données avec l’option Exporter.","Sharing is caring.":"La générosité s’exprime à travers le partage.","Sign in":"S’identifier","Simplifies how you find table bugs":"Simplifie la recherche de bogues dans les tableaux","Simply answer a series of simple questions":"Répondez à une série de questions simples","Single-line":"Ligne unique","Sorted":"Trié","Sorted in ascending order":"Trié par ordre croissant","Sorted in descending order":"Trié par ordre décroissant","Spans ${0} columns":"S’étend sur ${0} colonnes","Spans ${0} rows":"S’étend sur ${0} lignes","Stack Trace":"Trace d’appels","Start using ${0}":"Commencer à utiliser ${0}","Stop tab order replay":"Arrêter la relecture de l’ordre des onglets","Structure":"Structure","Supercharge your manual issues with screenshots & detailed descriptions":"Donnez plus de valeur à vos problèmes manuels avec des captures d’écran et des descriptions détaillées","THIS IS NOT A DATA CELL":"CECI N’EST PAS UNE CELLULE DE DONNÉES","Table":"Tableau","Take your accessibility testing from 57% to more than 80% with AI-powered IGTs.":"Optimisez vos tests d’accessibilité en les faisant passer de 57 % à plus de 80 % grâce à des IGT pilotés par l’IA.","Terms of Service":"Conditions d’utilisation","Test Element":"Tester l’élément","Test a series of pages and interactions for accessibility violations.":"Tester une série de pages et d’interactions pour détecter les violations d’accessibilité.","Test forms to ensure users can fill them out accurately and submit them.":"Tester les formulaires pour s’assurer que les utilisateurs peuvent les remplir correctement et les envoyer.","Test name":"Nom du test","Test name can not be empty.":"Le nom du test ne peut pas être vide.","Test name help":"Aide sur le nom du test","Tester":"Testeur","Tests for screenreader compatibility for all platforms at the same time":"Teste la compatibilité avec les lecteurs d’écran pour toutes les plateformes en même temps","The AI-powered “Forms  IGT” Pro feature:":"La fonction Pro « Formulaires IGT » alimentée par l’IA :","The AI-powered “Table IGT” Pro feature:":"La fonction Pro « Tableau IGT » alimentée par l’IA :","The Interactive Elements tool will guide you through testing interactive elements\' accessible names, roles, and states.":"L’outil « Éléments interactifs » vous guidera pour tester l’accessibilité des noms, des rôles et des statuts des éléments interactifs.","The Modal Dialog tool will guide you through testing a single modal or alert dialog.":"L’outil « Dialogues modaux » vous guidera dans le test d’un dialogue modal ou d’un dialogue d’alerte unique.","The images tests will walk you through testing images (img tags, the \'img\' role, css background images, icons and more!).":"Les tests d’images vous permettront de tester les images (balises img, rôle « img », images d’arrière-plan CSS, icônes et bien plus encore !).","The keyboard tests will perform a series of tab order and focus indication checks.":"Les tests de clavier effectueront une série de vérifications de l’ordre des onglets et de l’indication de la mise au point.","The state of your page has changed.\\n  Please put it in the state you started testing.":"Le statut de votre page a changé.\\n  Veuillez la remettre dans le même statut que celui dans lequel vous avez commencé à la tester.","The structure tool will guide you through testing the page\'s structure.":"L’outil « Structure » vous guidera dans le test de la structure de la page.","The table tool will guide you through testing a table.":"L’outil « Tableau » vous guidera dans le test d’un tableau.","The “Images IGT” Pro feature:":"La fonction Pro « Images IGT » :","The “Keyboard IGT” Pro feature:":"La fonction Pro « Clavier IGT » :","The “Modal Dialog IGT” Pro feature:":"La fonction Pro « Dialogue modal IGT » :","The “Structure IGT” Pro feature:":"La fonction Pro « Structure IGT » :","There was a problem creating your issue.":"Un incident s’est produit lors de la création de votre problème.","There was a problem deleting your test.":"Un incident s’est produit lors de la suppression de votre test.","There was a problem loading your test.":"Un incident s’est produit lors du chargement de votre test.","There was a problem loading your tests.":"Un incident s’est produit lors du chargement de vos tests.","There was a problem starting your ${0}.":"Il y a eu un problème pour démarrer votre ${0}.","There was a problem updating your issue.":"Un incident s’est produit lors de la mise à jour de votre problème.","There was a problem updating your test.":"Un incident s’est produit lors de la mise à jour de votre test.","There was an issue updating your test. Please try again.":"Un incident s’est produit lors de la mise à jour de votre test. Veuillez réessayer.","This data cell has no AT output":"Cette cellule de données ne dispose pas de sortie AT (Assistive Technology)","This data cell has no accessible name":"Cette cellule de données ne dispose pas de nom accessible","This is not a data table":"Il ne s’agit pas d’un tableau de données","This page is not the same page on which the automatic test was last run.":"Cette page n’est pas la même que celle sur laquelle le test automatique a été exécuté pour la dernière fois.","This will replace the current automatic test results.":"Cette action remplacera les résultats du test automatique en cours.","To ensure consistency across all Deque products, best practices and needs review issues are now disabled by default. In addition, the default WCAG level is now WCAG 2.1 AA.":"Pour assurer la cohérence entre tous les produits Deque, les questions relatives aux meilleures pratiques et à l’examen des besoins sont désormais désactivées par défaut. En outre, le niveau WCAG par défaut est désormais WCAG 2.1 AA.","To start testing for accessibility, open the\\n          browser’s Developer Tools, navigate to the ${0}\\n          tab, and run an analysis on a webpage.":"Pour commencer à tester l’accessibilité, ouvrez les\\n          outils de développement du navigateur, naviguez jusqu’à l’onglet ${0}\\n          et lancez une analyse sur une page Web.","Try Now":"Essayer maintenant","Try again":"Réessayer","Tutorial pointouts are used to point out things of interest, or introduce new features.":"Les points de repère du tutoriel sont utilisés pour attirer l’attention sur des éléments intéressants ou pour présenter de nouvelles fonctionnalités.","Tutorial pointouts have been reset!":"Les points de repère du tutoriel ont été réinitialisés !","Unable to authenticate with the axe server.":"Impossible de s’authentifier auprès du serveur Axe.","Unable to delete":"Impossible de supprimer","Unable to highlight one or more elements.\\n          Get your page in the right state before trying again.":"Impossible de mettre en évidence un ou plusieurs éléments.\\n          Mettez votre page dans son statut fonctionnel normal avant de réessayer.","Uncovers structural issues on your page":"Identifie les problèmes structurels de votre page","Unordered list":"Liste non triée","Unselect all":"Tout désélectionner","Upgrade to check it out":"Mettre à niveau pour vérifier","Upload to your issue tracking software or send a link":"Télécharger dans votre logiciel de suivi des problèmes ou envoyer un lien","Use Browser Locale (Default)":"Utiliser la langue du navigateur (par défaut)","User Flow Analysis":"Analyse du flux d’utilisateurs","Uses computer vision to confirm visible labels match programmatic labels":"Utilise la vision artificielle pour confirmer que les étiquettes visibles correspondent aux étiquettes programmatiques","Uses computer vision to uncover problems in your table":"Utilise la vision par ordinateur pour découvrir les problèmes dans votre tableau","Uses computer vision-powered focus indication analysis":"Utilise une analyse des indications de mise au point basée sur la vision par ordinateur","Validate the states of interactive widgets":"Valider les statuts des widgets interactifs","Validates focus management":"Valide la gestion de la mise au point","Validates headings, page titles, lists, and media elements":"Valide les en-têtes, les titres de page, les listes et les éléments multimédias","Validates image elements, SVGs, and CSS background images":"Valide les éléments d’image, les GVE (graphiques vectoriels évolutifs) et les images d’arrière-plan CSS","Validates semantics, labels, and groups":"Validation de la sémantique, des étiquettes et des groupes","View help pages & get free issue remediation guidance":"Consulter les pages d’aide et obtenir des conseils gratuits pour remédier aux problèmes","Viewport height:":"Hauteur de la fenêtre de visualisation :","Viewport width:":"Largeur de la fenêtre de visualisation :","Vision is needed to perform the entirety of this test accurately.":"La vision est nécessaire pour effectuer l’ensemble de ce test avec précision.","Walks you through testing any type of table–simple or complex":"Vous aide à tester n’importe quel type de tableau, simple ou complexe","We couldn\'t find any ${0}":"Nous n’avons pas trouvé de ${0}","We couldn\'t find any ${0} on your page.":"Nous n’avons pas trouvé de ${0} sur votre page.","We encountered an error that we were unable to recover from.":"Nous avons rencontré une erreur que nous n’avons pas pu corriger.","We were unable to find any interactive elements. Select any that we missed. If there are no interactive elements, click \\"NEXT\\" to continue":"Nous n’avons pas trouvé d’éléments interactifs. Sélectionnez les éléments qui nous ont échappé. S’il n’y a pas d’éléments interactifs, cliquez sur \\"SUIVANT\\" pour continuer","Welcome to ${0}":"Bienvenue sur ${0}","What in the world are Intelligent Guided Tests (IGTs)?!":"Qu’est-ce que les tests guidés intelligents (IGT) ?","With the AI-powered “Interactive Elements IGT” Pro feature:":"Avec la fonction Pro « Éléments interactifs IGT » alimentée par l’IA :","With the “Export” Pro feature:":"Avec la fonction Pro « Export » :","Yes":"Oui","Your session has expired. Please log back in.":"Votre session a expiré. Veuillez vous reconnecter.","Your test was successfully deleted.":"Votre test a bien été supprimé.","You’re doing awesome! Boost your testing with Intelligent Guided Tests.":"Vous vous débrouillez très bien ! Boostez vos tests avec les tests guidés intelligents.","You’re doing awesome! Share your great work with your team.":"Vous vous débrouillez très bien ! Partagez votre travail avec votre équipe.","alt":"alt","axe-core version:":"version axe-core :","bullet 1":"puce 1","bullet 2":"puce 2","bullet 3":"puce 3","critical":"critique","description.":"description.","minor":"mineur","moderate":"modéré","or":"ou","powered by":"alimenté par","see all (${0}) fields":"voir tous les champs (${0})","serious":"sérieux","title":"titre","unknown":"inconnu","© Copyright ${0} Deque Systems, Inc":"© Copyright ${0} Deque Systems, Inc","© Copyright ${0}, Deque Systems, Inc. All Rights Reserved":"© Copyright ${0}, Deque Systems, Inc. Tous droits réservés"}}')
            },
            6479: e => {
                "use strict";
                e.exports = JSON.parse('{"locales":"it","translations":{"This sometimes happens when elements have dynamic or generated <0>classes</0> or <1>ids</1>. Help us re-identify your selected component.":"Talvolta capita con elementi dinamici o generati <0>classi</0> o <1>id</1>. Aiutaci a identificare nuovamente il componente selezionato.","We think it may be <0>this</0> element:":"Pensiamo sia <0>questo</0> elemento:","Use your mouse to select the element you want to test or use the Page element selector. Once you\'ve made your selection <0>LEAVE THIS TAB OPEN</0> and return back to the previous tab.":"Seleziona con il mouse l’elemento da testare o serviti del selettore di elementi della pagina. Una volta effettuata la selezione <0>LASCIA APERTA QUESTA SCHEDA</0> e ritorna alla scheda precedente.","URL: <0>${0}</0>":"URL: <0>${0}</0>","<0>Accessible text: </0>${0}":"<0>Testo accessibile: </0>${0}","<0>Name: </0>${0}":"<0>Nome: </0>${0}","<0>Role: </0>${0}":"<0>Ruolo: </0>${0}","<0>State: </0>${0}":"<0>Paese: </0>${0}","<0>Hint: </0>${0}":"<0>Suggerimento </0>${0}","<0>Name: </0>(None found) <1>We have found issues for this image automatically</1>":"<0>Nome: </0>(Nessun risultato trovato) <1>Abbiamo riscontrato problemi su questa immagine a livello automatico</1>"," Required":" Obbligatorio","${0}":"${0}","${0} - web accessibility testing":"${0} - test di accessibilità web","${0} items":"${0} articoli","${0} of ${1} elements":"${0} di ${1} elementi","${0} remaining until session expires":"${0} rimanente fino allo scadere della sessione","${0} seconds":"${0} secondi","${0} test results":"${0} risultati del test","(Any issues(s) for this step have been found automatically)":"(Eventuali problemi in questa fase sono stati riscontrati automaticamente)",", make sure you\'ve put your site into the state you wish to test it.":", assicurati di aver messo il tuo sito nello stato in cui desideri testarlo.","1 minute":"1 minuto","<< Please describe how you encountered this error >>":"<< Please describe how you encountered this error >>","A table with 1 column of headers":"Una tabella con 1 colonna di intestazioni","A table with 1 header row and 1 header column":"Una tabella con 1 riga di intestazione e 1 colonna di intestazione","A table with 1 row of headers":"Una tabella con 1 riga di intestazioni","A table with irregular headers. A table can have irregular headers when the header cells are associated with specific ranges of cells rather than an entire row or column.":"Una tabella con intestazioni irregolari. Una tabella può avere intestazioni irregolari quando le celle di intestazione sono associate a specifici intervalli di celle piuttosto che a un’intera riga o colonna.","A table with multi-level headers. Multi-level headers are used on complex tables in which the headers can\'t be associated in a vertical or horizontal way.":"Una tabella con intestazioni a più livelli. Le intestazioni a più livelli sono utilizzate in tabelle complesse in cui le intestazioni non possono essere associate in modo verticale od orizzontale.","AT (Assistive Technology) output":"Uscita AT (tecnologia assistiva)","About Deque":"Informazioni su Deque","Accessibility Specialist":"Specialista dell’accessibilità","Accessible name":"Nome accessibile","Additional info":"Informazioni aggiuntive","An abstract example of a form with total issues":"Un esempio astratto di modulo con problemi totali","An abstract example of a highlighted interactive element with total issues":"Un esempio astratto di un elemento interattivo evidenziato con problemi totali","An abstract example of a highlighted modal with total issues":"Un esempio astratto di un modale evidenziato con problemi totali","An abstract example of a highlighted table with total issues":"Un esempio astratto di tabella evidenziata con numeri totali","An abstract example of a web page structure with total issues":"Un esempio astratto di struttura di una pagina web con problemi totali","An abstract example of a web page with images and total issues":"Un esempio astratto di pagina web con immagini e problemi totali","An abstract example of an IGT question, it reads Is our AI correct? - Yes - No - Next":"Un esempio astratto di domanda IGT che recita La nostra IA è corretta? - Sì - No - Avanti","An abstract image of the Axe devtools extension with the share button highlighted":"Un’immagine astratta dell’estensione Axe devtools con il pulsante di condivisione evidenziato","An abstract keyboard with total issues":"Una tastiera astratta con problemi totali","Appearance":"Aspetto","Ask you simple questions about your page content and code":"Ti pone semplici domande sui contenuti e sul codice della tua pagina","Aspect ratio:":"Proporzione:","Automated screenreader & keyboard testing":"Test automatizzati per screenreader e tastiera","Automatic test run:":"Esecuzione automatica del test:","Axe Extension Error":"Errore di estensione Axe","Back":"Indietro","Back to start new scan":"Indietro per avviare una nuova scansione","Be in control of vital settings for all of your users to prevent inconsistent results":"Controllo delle impostazioni vitali per tutti gli utenti per evitare risultati incoerenti.","Before you hit ":"Prima di colpire ","Beta":"Beta","Browser:":"Browser:","Busy":"Occupato","Buttons and links":"Pulsanti e link","Can users interact with interactive elements?":"Gli utenti possono interagire con gli elementi interattivi?","Cancel":"Annullamento","Change How You See Needs Review":"Cambia il modo di vedere le esigenze","Check it out":"Guarda qui","Checked":"Controllato","Click \\"NEXT\\" to continue":"Clicca \\"NEXT\\" per continuare","Click \\"READY\\" when you are ready to re-run the automatic test for \\"${0}\\" test record.":"Clicca \\"READY\\" una volta pronto a rieseguire il test automatico per il registro di prova \\"${0}\\".","Click here to go to the original url.":"Fai clic qui per andare all’url originale.","Click the button below to continue working":"Fai clic sul pulsante sottostante per continuare a lavorare","Close":"Chiudi","Collaborate with your team":"Collabora con il tuo team","Collapsed":"Crollato","Complete Sign-Up":"Completa l’iscrizione","Computer vision automatically identifies missing semantics":"La computer vision identifica automaticamente la semantica mancante","Configure defaults across your whole organization":"Configura le impostazioni predefinite in tutta l’organizzazione","Current":"Attuale","Dark":"Scuro","Definition list":"Elenco delle definizioni","Designer":"Designer","Detects complex issues with very little time and effort":"Rileva problemi complessi con pochissimo tempo e sforzo.","Detects languages automatically":"Rileva automaticamente le lingue","Developer":"Sviluppatore","Device pixel ratio:":"Rapporto pixel del dispositivo:","Devtools":"Devtools","Did you know that you can now configure how “Needs Review” issues appear? You can change it in the “Rules and Issues” settings.":"Sapevi che ora è possibile configurare il modo in cui vengono visualizzati i problemi “Needs Review”? È possibile modificarla nelle impostazioni di “Regole e problemi”.","Disabled":"Disattivato","Distinguishes informative from decorative images":"Distingue le immagini informative da quelle decorative","Easily capture issues normally only caught with tedious manual testing":"Cattura facilmente i problemi che normalmente vengono rilevati solo con noiosi test manuali. ","Easily export, save, and share your accessibility issues.":"Esporta, salva e condividi facilmente i problemi di accessibilità.","Easily test images":"Facile verifica delle immagini","Edit test name":"Modifica del nome del test","Element 1 of 1":"Elemento 1 di 1","Element not highlightable":"Elemento non evidenziabile","Element not inspectable":"Elemento non ispezionabile","Ensures errors can be read by screenreaders":"Assicura che gli errori possano essere letti dagli screenreader","Expanded":"Espanso","Experience what a screenreader would read aloud–menus, tabs, buttons, and links":"Sperimenta ciò che uno screenreader leggerebbe ad alta voce: menu, schede, pulsanti e link.","Extend Session":"Estendi la sessione","Extension theme":"Tema dell’estensione","Finds bugs that confuse screenreader users":"Trova i bug che confondono gli utenti di screenreader","Finds focus traps":"Trova le trappole per la messa a fuoco","Finish":"Finitura","Follow my browser\'s settings (Default)":"Segui le impostazioni del browser (predefinito)","Form ${0}":"Modello ${0}","Forms":"Modelli","Forms are business critical. Make them accessible.":"I moduli sono fondamentali per l’azienda. Rendili accessibili.","Found ${0} fields.":"Trovati ${0} campi.","Found 1 field.":"Trovato 1 campo.","Frequently Asked Questions":"Domande frequenti","Full Page Scan":"Scansione a pagina intera","Generate 1 single report with results from your full (100% WCAG coverage) audit":"Genera un unico report con i risultati dell’audit completo (100% di copertura WCAG)","Generate the reports managers need":"Genera i report di cui i manager hanno bisogno","Go to Settings":"Vai alle Impostazioni","Group name: ${0}":"Nome del gruppo: ${0}","Has popup":"Ha un popup","Headings":"Titoli","Help you test like an expert":"Ti aiuta a eseguire i test come un esperto","High Contrast (Default)":"Contrasto elevato (predefinito)","Highlight":"In evidenza","Highlight ${0}":"In evidenza ${0}","Highlight Element":"Elemento in evidenza","Highlight theme":"Tema in evidenza","Highlight thumbnail element ${0}. Accessible name: ${1}":"Evidenzia l’elemento miniatura ${0}. Nome accessibile: ${1}","Highlight thumbnail element ${0}. This element has no accessible name":"Evidenzia l’elemento miniatura ${0}. Questo elemento non ha un nome accessibile","How good is your core page structure?":"Quanto è buona la struttura della tua pagina principale?","I would like to select a different form, an element containing a set of fields, or a particular field.":"Vorrei selezionare un modulo diverso, un elemento contenente un insieme di campi o un campo particolare.","IGTs are AI-powered advanced testing tools that:":"Gli IGT sono strumenti di test avanzati alimentati dall’intelligenza artificiale che:","Identifies images that need more descriptive ALT text":"Identifica le immagini che necessitano di un testo ALT più descrittivo.","Identify accessibility bugs that can’t be caught with automation alone":"Identifica i bug di accessibilità che non possono essere colti con la sola automazione","Image ${0}.":"Immagine ${0}.","Images":"Immagini","Import into your issue tracker as JSON, CSV, or JUnit XML":"Importazione nel tracker dei problemi come JSON, CSV o JUnit XML","Improve team collaboration and fix issues faster!":"Migliora la collaborazione del team e risolvi i problemi più velocemente!","In order to use the pro features you must agree to the terms and conditions and complete your sign up":"Per utilizzare le funzioni pro è necessario accettare i termini e le condizioni e completare l’iscrizione.","Inspect":"Ispeziona","Inspect Element":"Ispeziona l’elemento","Interactive Elements":"Elementi interattivi","Invalid":"Non valido","Issue Settings Change":"Modifica le impostazioni del problema","Issue detected.":"Problema rilevato.","Issue raised during automatic testing.":"Problema sollevato durante il test automatico.","It appears you have navigated or reloaded the page, click \\"Ready\\" when the page is back in the correct state.":"Sembra che la pagina sia stata navigata o ricaricata, fai clic su \\"Ready\\" quando la pagina è tornata nello stato corretto.","Jump to Next Highlight":"Vai all’evidenziazione successiva","Jump to Previous Highlight":"Vai all’evidenziazione precedente","Keyboard":"Tastiera","Keyboard Shortcuts":"Scorciatoie da tastiera","Language":"Lingua","Learn more about this feature":"Per saperne di più su questa funzione","Let\'s save your test. After it\'s saved, you can run guided tests, export, and share your results.":"Salviamo il test. Una volta salvato, è possibile eseguire test guidati, esportare e condividere i risultati.","Let’s get you started with accessibility testing! We are asking for your role so that we can personalize the experience.":"Iniziamo con i test di accessibilità! Chiediamo il tuo ruolo per poter personalizzare l’esperienza.","Light":"Luce","Link opens in a new window":"Il link si apre in una nuova finestra","Lists":"Elenchi","Loading":"Caricamento","Manage settings across all your devices and browsers in 1 location":"Gestisci le impostazioni di tutti i tuoi dispositivi e browser in un’unica posizione","Manager":"Direttore","Manual Issues: The Missing Piece of Your Testing Puzzle":"Problemi del manuale: Il pezzo mancante del puzzle dei test","Modal":"Modale","Modal Dialog":"Finestra di dialogo modale","Modals are challenging. We make it easy.":"I modali sono impegnativi. Noi lo rendiamo facile.","More Info":"Per saperne di più","More Information":"Ulteriori informazioni","More info":"Più informazioni","Move to next violation":"Passa alla violazione successiva","Move to previous violation":"Passa alla violazione precedente","Multi-line":"Multi-linea","Multi-selectable":"Multi-selezionabile","N/A":"N/D","Name your test something that will be easy for you to recognize later. Try to use something like the page title or what project this test is for!":"Dai al tuo test un nome che sia facile da riconoscere in seguito. Cerca di usare qualcosa come il titolo della pagina o il progetto per cui è stato fatto questo test!","Next":"Avanti","No":"No","No accessibility experience required!":"Non è richiesta alcuna esperienza di accessibilità!","No accessibility training needed. Unlock your free trial to get started.":"Non è necessaria alcuna formazione sull’accessibilità. Sblocca la tua prova gratuita per iniziare.","No credit card required.":"Non è richiesta la carta di credito.","No further action needed.":"Non sono necessarie ulteriori azioni.","Not checked":"Non controllato","Not editable":"Non modificabile","Not pressed":"Non premuto","Not selected":"Non selezionato","Not sorted":"Non ordinato","Oops!":"Oops!","Operating System:":"Sistema operativo:","Options":"Opzioni","Ordered list":"Elenco ordinato","Other":"Altro","Our AI identified this as a header cell. If that is correct, click the \\"${0}\\" button below.":"La nostra intelligenza artificiale ha identificato questa come una cella di intestazione. Se la risposta è corretta, fai clic sul pulsante \\"${0}\\" in basso.","Overwhelmed by testing your data tables for accessibility?":"Sei sopraffatto dalla necessità di testare l’accessibilità delle tue tabelle di dati?","Page information":"Informazioni sulla pagina","Partial Page Scan":"Scansione di pagine parziali","Please click NEXT.":"Fai clic su NEXT.","Please do not scroll or interact with the page while we capture screenshots.":"Non scorrere o interagire con la pagina mentre acquisiamo le schermate.","Please make sure your page is in the right state and try again.":"Assicurati che la pagina sia nello stato corretto e riprova.","Please put this page in whatever state you would like to re-run the automatic test.":"Posiziona questa pagina nello stato in cui vuoi eseguire nuovamente il test automatico.","Please select your role":"Seleziona il tuo ruolo","Pressed":"Premuto","Privacy Policy":"Informativa sulla privacy","Pro just got a whole lot better with axe configuration!":"Pro è appena migliorato con la configurazione degli assi!","Provide feedback:":"Fornisci un feedback:","Re-run automatic scan":"Esegui nuovamente la scansione automatica","Re-run automatic tests":"Esegui nuovamente i test automatici","Re-run saved tests after you’ve fixed issues to validate resolution":"Esegui nuovamente i test salvati dopo aver risolto i problemi per convalidare la risoluzione.","Re-running automatic tests":"Esecuzione di nuovi test automatici","Re-running automatic tests. Please wait...":"Esecuzione di nuovi test automatici. Attendere prego...","Ready":"Pronto","Replay tab order":"Ordine delle schede di riproduzione","Required":"Obbligatorio","Reset":"Ripristino","Reset Settings":"Ripristino delle impostazioni","Reset Tutorial Pointouts":"Azzeramento dei punti di riferimento dell’esercitazione","Reset help":"Aiuto per il reset","Restart test":"Riavvia il test","Results":"Risultati","Role: ${0}.":"Ruolo: ${0}.","Save":"Salva","Save Results":"Salva i risultati","Save Test":"Salva il test","Save progress & quit":"Salva i progressi ed esci","Save your test":"Salva il tuo test","Scan User Flow":"Flusso utente di scansione","Scan all of my page (Analyze)":"Scansione di tutta la mia pagina (Analisi)","Screenshot of Guided Tests section of axe DevTools showing Intelligent Guided Tests for Table, Keyboard, Modal Dialog, Interactive Elements and Structure.":"Schermata della sezione Test guidati degli assi DevTools che mostra i test guidati intelligenti per Tabella, Tastiera, Dialogo modale, Elementi interattivi e Struttura.","Screenshot of axe Configuration page with \\"Rules and Issues Settings\\" section displayed. Showing \\"Accessibility Standard\\" settings.":"Schermata della pagina di configurazione degli assi con la sezione \\"Rules and Issues Settings\\" visualizzata. Mostra le impostazioni di \\"Accessibility Standard\\".","Screenshot of export modal with options to export the \'Record and Issue data\' as well as \'Only issues\' in CSV, JSON, or JUnit XML":"Schermata della modale di esportazione con le opzioni per esportare i \\"dati dei record e dei problemi\\" e \\"solo i problemi\\" in CSV, JSON o JUnit XML.","Screenshot of the new \\"Add Manual Issue\\" dialog.":"Schermata della nuova finestra di dialogo \\"Add Manual Issue\\".","Seamlessly configure your axe DevTools settings in 1 location!":"Configura le impostazioni degli assi DevTools in un’unica posizione!","Select all":"Seleziona tutto","Select all \\"${0}\\"":"Seleziona tutto \\"${0}\\"","Select your role":"Seleziona il tuo ruolo","Selected":"Selezionato","Selected (${0} / ${1})":"Selezionato (${0} / ${1})","Session Timeout":"Timeout della sessione","Share data with Export.":"Condividi i dati con l’esportazione.","Sharing is caring.":"Condividere è prendersi cura.","Sign in":"Accedi","Simplifies how you find table bugs":"Semplifica la ricerca di bug nelle tabelle","Simply answer a series of simple questions":"Basta rispondere a una serie di semplici domande","Single-line":"Linea singola","Sorted":"Ordinato","Sorted in ascending order":"Ordinati in ordine crescente","Sorted in descending order":"Ordinati in ordine decrescente","Spans ${0} columns":"Estendi ${0} colonne","Spans ${0} rows":"Estendi ${0} righe","Stack Trace":"Traccia dello stack","Start using ${0}":"Inizia a usare ${0}","Stop tab order replay":"Interrompi la riproduzione dell’ordine della scheda","Structure":"Struttura","Supercharge your manual issues with screenshots & detailed descriptions":"Potenzia i tuoi problemi manuali con schermate e descrizioni dettagliate","THIS IS NOT A DATA CELL":"NON È UNA CELLA DATI","Table":"Tabella","Take your accessibility testing from 57% to more than 80% with AI-powered IGTs.":"Porta i tuoi test di accessibilità dal 57% a oltre l’80% con gli IGT dotati di IA.","Terms of Service":"Termini di servizio","Test Element":"Elemento di prova","Test a series of pages and interactions for accessibility violations.":"Testa una serie di pagine e interazioni per individuare eventuali violazioni dell’accessibilità.","Test forms to ensure users can fill them out accurately and submit them.":"Testa i moduli per assicurarti che gli utenti possano compilarli con precisione e inviarli.","Test name":"Nome del test","Test name can not be empty.":"Il nome del test non può essere vuoto.","Test name help":"Aiuto per il nome del test","Tester":"Collaudatore","Tests for screenreader compatibility for all platforms at the same time":"Test di compatibilità con gli screenreader per tutte le piattaforme contemporaneamente","The AI-powered “Forms  IGT” Pro feature:":"La funzione IA \\"Moduli IGT\\" Pro:","The AI-powered “Table IGT” Pro feature:":"La funzione IA \\"Tabella IGT\\" Pro:","The Interactive Elements tool will guide you through testing interactive elements\' accessible names, roles, and states.":"Lo strumento per gli elementi interattivi indica come testare i nomi, i ruoli e gli stati accessibili degli stessi.","The Modal Dialog tool will guide you through testing a single modal or alert dialog.":"Lo strumento Dialogo modale ti guiderà nella verifica di un singolo dialogo modale o di avviso.","The images tests will walk you through testing images (img tags, the \'img\' role, css background images, icons and more!).":"I test sulle immagini ti guideranno nella verifica delle immagini (tag img, ruolo ‘img’, immagini di sfondo css, icone e altro ancora).","The keyboard tests will perform a series of tab order and focus indication checks.":"I test della tastiera eseguono una serie di controlli sull’ordine delle schede e sull’indicazione del focus.","The state of your page has changed.\\n  Please put it in the state you started testing.":"Lo stato della pagina è cambiato.\\n  Inserirlo nello stato in cui si è iniziato il test.","The structure tool will guide you through testing the page\'s structure.":"Lo strumento struttura ti guiderà nella verifica della struttura della pagina.","The table tool will guide you through testing a table.":"Lo strumento tabella ti guiderà nella verifica di una tabella.","The “Images IGT” Pro feature:":"La funzione Pro “Immagini IGT”:","The “Keyboard IGT” Pro feature:":"La funzione “Keyboard IGT” Pro:","The “Modal Dialog IGT” Pro feature:":"La funzione Pro “Dialogo modale IGT”:","The “Structure IGT” Pro feature:":"La funzione Pro “Struttura IGT”:","There was a problem creating your issue.":"Si è verificato un problema nella creazione del problema.","There was a problem deleting your test.":"Si è verificato un problema nell’eliminazione del test.","There was a problem loading your test.":"Si è verificato un problema nel caricamento del test.","There was a problem loading your tests.":"Si è verificato un problema nel caricamento dei test.","There was a problem starting your ${0}.":"Si è verificato un problema nell’avvio del tuo ${0}.","There was a problem updating your issue.":"Si è verificato un problema nell’aggiornamento del problema.","There was a problem updating your test.":"Si è verificato un problema nell’aggiornamento del test.","There was an issue updating your test. Please try again.":"Si è verificato un problema nell’aggiornamento del test. Riprova.","This data cell has no AT output":"Questa cella dati non ha un’uscita AT","This data cell has no accessible name":"Questa cella dati non ha un nome accessibile","This is not a data table":"Questa non è una tabella di dati","This page is not the same page on which the automatic test was last run.":"Questa pagina non è la stessa in cui è stato eseguito l’ultimo test automatico.","This will replace the current automatic test results.":"Questo sostituirà gli attuali risultati automatici del test.","To ensure consistency across all Deque products, best practices and needs review issues are now disabled by default. In addition, the default WCAG level is now WCAG 2.1 AA.":"Per garantire la coerenza tra tutti i prodotti Deque, le best practice e i temi di revisione delle esigenze sono ora disattivati per impostazione predefinita. Inoltre, il livello WCAG predefinito è ora WCAG 2.1 AA.","To start testing for accessibility, open the\\n          browser’s Developer Tools, navigate to the ${0}\\n          tab, and run an analysis on a webpage.":"Per iniziare a verificare l’accessibilità, apri il file\\n          Strumenti per gli sviluppatori del browser, vai alla voce ${0}\\n          ed esegui un’analisi su una pagina web.","Try Now":"Prova ora","Try again":"Riprova","Tutorial pointouts are used to point out things of interest, or introduce new features.":"Le esercitazioni vengono utilizzate per evidenziare elementi di interesse o per introdurre nuove funzionalità.","Tutorial pointouts have been reset!":"I punti del tutorial sono stati ripristinati!","Unable to authenticate with the axe server.":"Impossibile autenticarsi con il server axe.","Unable to delete":"Impossibile eliminare","Unable to highlight one or more elements.\\n          Get your page in the right state before trying again.":"Impossibile evidenziare uno o più elementi.\\n          Riportare la pagina nello stato corretto prima di riprovare.","Uncovers structural issues on your page":"Scopre i problemi strutturali della pagina","Unordered list":"Elenco non ordinato","Unselect all":"Deseleziona tutti","Upgrade to check it out":"Aggiorna per verificare","Upload to your issue tracking software or send a link":"Carica nel software di tracciamento dei problemi o invia un link","Use Browser Locale (Default)":"Usa il locale del browser (predefinito)","User Flow Analysis":"Analisi del flusso di utenti","Uses computer vision to confirm visible labels match programmatic labels":"Utilizza la visione computerizzata per confermare che le etichette visibili corrispondono a quelle programmatiche","Uses computer vision to uncover problems in your table":"Utilizza la visione computerizzata per scoprire i problemi della tavola","Uses computer vision-powered focus indication analysis":"Utilizza un’analisi dell’indicazione di messa a fuoco basata sulla visione computerizzata.","Validate the states of interactive widgets":"Convalida gli stati dei widget interattivi","Validates focus management":"Convalida la gestione del focus","Validates headings, page titles, lists, and media elements":"Convalida intestazioni, titoli di pagina, elenchi ed elementi multimediali","Validates image elements, SVGs, and CSS background images":"Convalida elementi di immagine, SVG e immagini di sfondo CSS","Validates semantics, labels, and groups":"Convalida la semantica, le etichette e i gruppi.","View help pages & get free issue remediation guidance":"Visualizza le pagine di aiuto e ottieni una guida gratuita per la risoluzione dei problemi","Viewport height:":"Altezza della finestra di visualizzazione:","Viewport width:":"Larghezza della finestra di visualizzazione:","Vision is needed to perform the entirety of this test accurately.":"La vista è necessaria per eseguire con precisione l’intero test.","Walks you through testing any type of table–simple or complex":"Ti guida nella verifica di qualsiasi tipo di tabella, semplice o complessa","We couldn\'t find any ${0}":"Non siamo riusciti a trovare alcun ${0}","We couldn\'t find any ${0} on your page.":"Non abbiamo trovato alcun ${0} nella tua pagina.","We encountered an error that we were unable to recover from.":"Abbiamo riscontrato un errore dal quale non siamo riusciti a riprenderci.","We were unable to find any interactive elements. Select any that we missed. If there are no interactive elements, click \\"NEXT\\" to continue":"Non siamo riusciti a trovare alcun elemento interattivo. Seleziona quelli che ci sono sfuggiti. Se non ci sono elementi interattivi, fare clic su \\"NEXT\\" per continuare.","Welcome to ${0}":"Benvenuti a ${0}","What in the world are Intelligent Guided Tests (IGTs)?!":"Cosa sono i test guidati intelligenti (IGT)?!","With the AI-powered “Interactive Elements IGT” Pro feature:":"Con la funzione AI “Interactive Elements IGT” Pro:","With the “Export” Pro feature:":"Con la funzione “Esportazione” Pro:","Yes":"Sì","Your session has expired. Please log back in.":"La sessione è scaduta. Effettua nuovamente il login.","Your test was successfully deleted.":"Il test è stato eliminato con successo.","You’re doing awesome! Boost your testing with Intelligent Guided Tests.":"Stai andando alla grande! Potenzia i tuoi test con i test guidati intelligenti.","You’re doing awesome! Share your great work with your team.":"Stai andando alla grande! Condividi il tuo ottimo lavoro con il tuo team.","alt":"alt","axe-core version:":"versione axe-core:","bullet 1":"punto 1","bullet 2":"punto 2","bullet 3":"punto 3","critical":"descrizione","description.":"fondamentale.","minor":"minore","moderate":"moderato","or":"o","powered by":"gestito da","see all (${0}) fields":"vedi tutti i (${0}) campi","serious":"serio","title":"titolo","unknown":"sconosciuto","© Copyright ${0} Deque Systems, Inc":"© Copyright ${0} Deque Systems, Inc","© Copyright ${0}, Deque Systems, Inc. All Rights Reserved":"© Copyright ${0}, Deque Systems, Inc. Tutti i diritti riservati"}}')
            },
            17130: e => {
                "use strict";
                e.exports = JSON.parse('{"locales":"ja","translations":{"${0} of ${1}":"${1} 中の ${0}","All issues":"すべての問題","An error occurred":"エラーが発生しました","Analyze":"分析する","Analyze Accessibility":"アクセシビリティを分析する","Analyzing... please wait.":"分析中...お待ちください。","And":"また","Automatic scans are just the start!":"自動スキャンはほんの始まりにすぎません！","Best practices":"ベストプラクティス","Change Scope":"スコープを変更する","Change the filter to \'All issues\' to see all issues.":"すべての問題を閲覧するには、フィルターを「すべての問題」に変更してください。","Clear the existing session":"現在のセッションをクリア","Click here to save your automatic results for future use as well as gain access to new guided testing to let you test more of your page without needing to be an accessibility expert!":"今後のために自動テスト結果を保存するにはここをクリックしてください。また、アクセシビリティの専門家ではなくてもページをさらにテストできる新しいガイド付きテストにもアクセスできます！","Click the Analyze button to check for accessibility issues on the page in the current state.":"現状のページのアクセシビリティの問題を確認するには、「分析する」ボタンをクリックしてください。","Congratulations!":"おめでとうございます！","Current item":"現在の項目","Deque news":"Deque news","Dismiss":"閉じる","Edit":"編集","Element location":"要素の位置","Element source":"要素のソース","Error details":"エラーの詳細","File a bug":"バグを報告する","First issue":"最初の問題","Fix all of these issues:":"これらのすべての問題を修正してください：","Fix at least one (1) of these issues:":"これらのうち、最低1つの問題を修正してください：","Fix the following:":"以下を修正してください：","For issues with rules or Shadow DOM, click the bug button to file an issue on Github.":"ルールまたはShadow DOMに関する問題は、バグボタンをクリックしてGithubでissueを登録してください。","Highlight":"強調する","Highlight element":"要素を強調する","Impact: ":"影響","Inspect":"調査する","Inspect (${0})":"調査する（${0}）","Inspect Node":"ノードを調査する","Issue description":"問題の説明","Issue has ${0} tags":"問題には ${0} 個タグがあります","Issue has been reviewed":"問題はレビュー済みです","Issue stack trace":"問題のスタックトレース","Issue tags:":"問題のタグ","Issue type:":"問題の種類","Issues":"問題","Last issue":"最後の問題","Learn more":"もっと詳しく知る","Link opens in a new window":"リンクは新規ウィンドウで開きます","Loading, please wait...":"ロード中です。お待ちください...","Manually evaluated as \'Not an issue\'.":"「問題ではない」と目視で判定されています。","Needs Review Issue":"レビューが必要な問題","Needs review":"レビューが必要","Next issue":"次の問題","No Visible Issues":"視認できる問題はありません","No accessibility violations found in the current state of the page. Now you should rerun ${0} on every state of the page (including expanding accordians, modals, sub-menus, error messaging and more). You should also perform manual testing using assistive technologies like NVDA, VoiceOver and JAWS.":"現在のページの状態ではアクセシビリティの問題は検出されませんでした。すべてのページの状態（アコーディオン、モーダル、サブメニュー、エラーメッセージなどを表示した状態を含む）で ${0} を再度実行してください。また、NVDA、VoiceOverやJAWSなどの支援技術を用いたマニュアルチェックも実行してください。","No issue description specified.":"問題の説明は提供されていません。","Plan: ${0}":"プラン: ${0}","Please try again. If the error persists, please":"もう一度お試しください。もしエラーが続く場合は、Deque Systemsに","Press the escape key to close tags.":"タグを閉じるには、ESC（エスケープ）キーを押下します。","Previous issue":"前の問題","Professional":"プロフェッショナル","Provide an issue description:":"問題の説明を提供する：","Rejected":"却下済み","Related node:":"関連したノード：","Related nodes:":"関連したノード：","Report an aXe Coconut issue in axe-core":"aXe Coconutの問題をaxe-coreで報告する","Report an issue in axe-core.":"問題をaxe-coreで報告する","Report bugs in aXe Coconut":"aXe Coconutのバグを報告する","Reviewed issues are stored in a session and will be remembered for subsequent tests. The session is cleared when you close your browser. When testing multiple websites, we recommend you clear the session in between tests.":"レビュー済みの問題はセッションに保管され、次のテストのために記録されます。ブラウザーを閉じるとセッションはクリアされます。複数のWebサイトをテストする際は、テスト間にセッションをクリアすることを推奨します。","Rule issues":"ルールの問題","Run again":"再実行する","Save":"保存","Save results":"結果を保存","Scoping allows you to choose a specific element and run automatic and guided tests within that context.":"スコープを使うと、特定の要素を選択し、自動およびガイド付きテストをそのコンテキストの中で実施できるようになります。","Sign up for axe news and updates!":"axe newsや更新情報にサインアップしてください！（英語のみ）","Sign up for the axe-pro beta":"axe-pro betaに参加する","Stop highlight":"強調をやめる","Take your accessibility testing further!":"アクセシビリティテストを促進させましょう！","This is an issue":"これは問題です","This is not an issue":"これは問題ではありません","To solve this violation, you need to:":"この問題を修正するには、次のことをする必要があります：","URL/Scope":"URL/スコープ","Upgrade to axe-pro to enable":"スコープを有効化するには、axe-proにアップグレードしてください","Violations":"問題","We are not sure this is an issue, because:":"次の理由により、これが問題か判断できません：","aXe Coconut issue for rule: ${0}":"aXe Coconut issue for rule: ${0}","aXe encountered an error in the code of this rule while running on this page. Please review the page manually and report the error by reviewing the issue stack trace.":"aXeでこのページを分析中、このルールのコードにエラーが発生しました。ページを目視で確認し、問題のスタックトレースを確認してこのエラーを報告してください。","category: ${0}":"カテゴリー：${0}","critical":"緊急","found":"検出数","issue":"問題","issues":"問題","minor":"軽微","moderate":"普通","or ":"または","report the issue":"問題を報告","scoping":"（スコープとは）","serious":"深刻","sign in to ${0}":"${0} にサインイン","to Deque Systems":"してください。","to unlock our amazing new features.":"","unknown":"不明","Advanced Options":"高度なオプション","Be sure to close and restart the developer tools for changes to take effect.":"変更を適用するには、開発者ツールを閉じて再起動してください。","Chrome Menu":"Chromeメニュー","Close":"閉じる","Developer Tools":"開発者ツール","Loading...":"読み込み中...","Localization Settings":"言語設定","More Tools":"他のツール","Navigation instructions:":"ナビゲーション方法","Options saved.":"オプションを保存しました。","Preferred Language":"設定言語","Provide feedback:":"フィードバックをする","Test the leading edge with aXe Coconut!":"axe Coconutで最新の技術を試しましょう！","Thanks for using the aXe extension!":"axeエクステンションをお使いいただきありがとうございます！","There was an unexpected error. Please try again.":"予期せぬエラーが発生しました。もう一度お試しください。","To learn more, visit":"詳細はこちら","To start testing for accessibility, open the\\n          browser’s Developer Tools, navigate to the aXe\\n          tab, and run an analysis on a webpage.":"アクセシビリティの検証を始めるには\\n          ブラウザーの開発者ツールを開き、axeタブに移動し\\n          webページを分析してください。","To start testing with the latest 3x version of\\n          aXe-core, open the Chrome Developer Tools,\\n          navigate to the aXe-Coconut tab, and run an\\n          analysis on a webpage.":"最新の 3x バージョンのaxe-coreで検証するには\\n          Chromeの開発者ツールを開き、\\n          axe-Coconutタブに移動し、\\n          webページを分析してください。","You can test webpages with open Shadow DOM,\\n          experimental rules, and more.":"Webページをopen Shadow DOMや\\n          実験的なルールなどで検証できます。","axe extension":"axeエクステンション"}}')
            }
        },
        n = {};

    function i(e) {
        var r = n[e];
        if (void 0 !== r) return r.exports;
        var a = n[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, i), a.loaded = !0, a.exports
    }
    i.m = t, i.amdO = {}, e = [], i.O = (t, n, r, a) => {
        if (!n) {
            var o = 1 / 0;
            for (c = 0; c < e.length; c++) {
                for (var [n, r, a] = e[c], s = !0, l = 0; l < n.length; l++)(!1 & a || o >= a) && Object.keys(i.O).every((e => i.O[e](n[l]))) ? n.splice(l--, 1) : (s = !1, a < o && (o = a));
                if (s) {
                    e.splice(c--, 1);
                    var u = r();
                    void 0 !== u && (t = u)
                }
            }
            return t
        }
        a = a || 0;
        for (var c = e.length; c > 0 && e[c - 1][2] > a; c--) e[c] = e[c - 1];
        e[c] = [n, r, a]
    }, i.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return i.d(t, {
            a: t
        }), t
    }, i.d = (e, t) => {
        for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, i.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), i.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.nmd = e => (e.paths = [], e.children || (e.children = []), e), i.j = 42, (() => {
        var e = {
            42: 0
        };
        i.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var r, a, [o, s, l] = n,
                    u = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (r in s) i.o(s, r) && (i.m[r] = s[r]);
                    if (l) var c = l(i)
                }
                for (t && t(n); u < o.length; u++) a = o[u], i.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return i.O(c)
            },
            n = this.webpackChunk = this.webpackChunk || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var r = i.O(void 0, [736], (() => i(86449)));
    r = i.O(r)
})();
