(() => {
  var e, t = {
    34123: (e, t, o) => {
      "use strict";
      var n = o(47793),
        r = o(65981);
      const s = "4.9.1",
        a = "4.84.3";
      var i = o(96292),
        c = o.n(i);

      function l(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, n)
        }
        return o
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(o), !0).forEach((function(t) {
            u(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : l(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }

      function u(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = o, e
      }
      const p = c()("bridge"),
        g = c()("bridge:message"),
        m = c()("bridge:response"),
        f = {
          devtools: "devtools",
          content: "content-script",
          background: "background",
          unknown: "unknown"
        };
      const b = new class {
        constructor() {
          u(this, "listener", ((e, t) => {
            const {
              origin: o,
              context: n,
              topic: r,
              message: s,
              options: a
            } = e, {
              tab: i,
              frameId: c
            } = t, l = i && -1 !== i.id ? i.id : null == a ? void 0 : a.tabId;
            if (!o) return;
            if (this.context === f.background && n === f.content) return this.send(n, r, s, {
              tabId: a.tabId || l,
              frameId: a.frameId,
              allFrames: a.allFrames
            });
            const d = this.context !== f.devtools || browser.devtools.inspectedWindow.tabId === l;
            if (n !== this.context || !d) return;
            g(`[${r}] ${o} → ${this.context}: %O`, void 0 !== s ? s : "");
            const u = this.getListeners(r),
              p = e => {
                console.error(e)
              };
            try {
              for (var m of u) {
                const e = m({
                  context: n,
                  topic: r,
                  message: s,
                  origin: o,
                  tabId: l,
                  frameId: c
                });
                if (!m.isGlobal && void 0 !== e) return Promise.resolve(e).catch(p)
              }
            } catch (e) {
              p(e)
            }
          }));
          const {
            context: e
          } = this;
          if (this.messageListeners = new Map, e !== f.unknown) {
            if (!e) throw new Error(`Unsupported bridge context: ${e}`);
            this.attachListener()
          }
        }
        attachListener() {
          const {
            context: e,
            listener: t
          } = this;
          browser.runtime.onMessage.hasListener(t) || (p("bridge initialized with context %s", e), browser.runtime.onMessage.addListener(t)), window.addEventListener("pageshow", (o => {
            o.persisted && !browser.runtime.onMessage.hasListener(t) && (p("bridge initialized with context %s (cached page)", e), browser.runtime.onMessage.addListener(t))
          })), window.addEventListener("beforeunload", (() => {
            browser.runtime.onMessage.removeListener(t)
          }))
        }
        get context() {
          return "undefined" == typeof browser ? f.unknown : browser && browser.devtools ? f.devtools : browser && browser.tabs ? f.background : browser && browser.storage ? f.content : void 0
        }
        async send(e, t, o, {
          tabId: n,
          frameId: r = 0,
          allFrames: s = !1
        } = {}) {
          if ("undefined" == typeof browser) return;
          n || this.context !== f.devtools || (n = browser.devtools.inspectedWindow.tabId);
          let a = browser.runtime.sendMessage;
          if (e === f.content && void 0 !== browser.tabs) {
            const e = {
              frameId: s ? null : r
            };
            a = t => browser.tabs.sendMessage(n, d(d({}, t), {}, {
              options: d(d({}, t.options), e)
            }), e)
          }
          const i = `${this.context}${this.context === f.devtools ? `:${n}` : ""}`,
            c = `${e}${[e, this.context].includes(f.content) && n ? `:${n}` : ""}`;
          g(`[${t}] ${i} → ${c}: %O`, void 0 !== o ? o : "");
          const l = {
            origin: i,
            context: e,
            topic: t,
            message: o,
            options: e === f.content ? {
              tabId: n,
              frameId: r,
              allFrames: s
            } : {
              tabId: n
            }
          };
          let u = null;
          try {
            u = await a(l)
          } catch (e) {
            if ("Could not establish connection. Receiving end does not exist." !== e.message) throw e
          }
          return null !== u && m(`[${t}] ${c} → ${i}: %O`, u), u
        }
        getListeners(e) {
          const {
            messageListeners: t
          } = this;
          return e && "*" !== e ? [...t.get(e) || [], ...t.get("*") || []] : t.get("*") || []
        }
        listen(e, t) {
          const {
            messageListeners: o
          } = this, n = o.get(e) || [];
          "function" == typeof e && (t = e, e = "*"), "*" === e && (t.isGlobal = !0), "function" == typeof t && (n.length ? o.set(e, [...n, t]) : o.set(e, [t]))
        }
        unlisten(e, t) {
          const {
            messageListeners: o
          } = this;
          if ("function" == typeof e && (t = e, e = "*"), "function" != typeof t) return;
          const n = (o.get(e) || []).filter((e => e !== t));
          n.length ? o.set(e, n) : o.delete(e)
        }
      },
        h = f;
      var v = o(45741),
        y = o.n(v);
      let O;
      O = "AxeChrome";
      const w = {
        coconut: "extension-coconut",
        chrome: "extension-chrome",
        firefox: "extension-firefox",
        edge: "extension-edge"
      };
      let E, _;
      const I = async (e = !1, t) => {
        let {
          usageServerURL: o
        } = await browser.storage.local.get("usageServerURL");
        return !e && E && o === _ || (_ = o, "default" === o && (o = "https://usage.deque.com"), E = new (y())("axe-devtools-html", w[t || "chrome"]), E.url(o)), E
      };
      let x = console;
      const S = () => {
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
        L = (...e) => {
          S() && x.warn(...e)
        };
      var R = o(28020);
      let U;
      async function P() {
        var e;
        return null === (e = await T()) || void 0 === e ? void 0 : e.distinct_id
      }
      const T = async () => {
        if (U) return U;
        const {
          axeServerURL: e,
          session: t
        } = await browser.storage.local.get(["axeServerURL", "session"]);
        return U = await (0, R.getDistinctIdCookie)({
          host: "default" === e ? "https://axe.deque.com" : e,
          origin: globalThis.location.origin,
          token: t && t.access_token
        }), U
      };

      function A(e, t) {
        if (null == e) return {};
        var o, n, r = function(e, t) {
          if (null == e) return {};
          var o, n, r = {},
            s = Object.keys(e);
          for (n = 0; n < s.length; n++) o = s[n], t.indexOf(o) >= 0 || (r[o] = e[o]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (n = 0; n < s.length; n++) o = s[n], t.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o])
        }
        return r
      }

      function j(e, t) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), o.push.apply(o, n)
        }
        return o
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = null != arguments[t] ? arguments[t] : {};
          t % 2 ? j(Object(o), !0).forEach((function(t) {
            k(e, t, o[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : j(Object(o)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
          }))
        }
        return e
      }

      function k(e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = o, e
      }
      const {
        AMPLITUDE_API_KEY: N,
        DATADOG_CLIENT_TOKEN: D,
        NODE_ENV: M
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
      }, q = n.Z.getInstance(), F = "conversion:install", V = "conversion:uninstall", G = "user:login", $ = "user:open", X = "analysis:analyze", z = "record:delete", H = "record:rename", K = "analysis:complete", W = "issues:export", J = "issue:inspected", Y = "issue:relatedInspected", B = "issue:toggleHighlight", Z = "issue:moreInfo", Q = "ml:suggestedInteractiveElement", ee = "ml:suggestedInteractiveElementRejected", te = "ml:missedInteractiveElement", oe = "ml:suggestedRole", ne = "ml:suggestedRoleAccepted", re = "ml:suggestedRoleRejected", se = "ml:suggestedTableHeader", ae = "ml:suggestedTableHeaderRejected", ie = "ml:suggestedNotDataCell", ce = "ml:suggestedNotDataCellAccepted", le = "conversion:click:scanPart", de = "conversion:click:saveTest", ue = "conversion:click:export", pe = "conversion:click:shareIssue", ge = "analysis:startUFA", me = (e = [], t) => e.filter((({
        impact: e
      }) => e === t)).reduce(((e, {
        nodes: t
      }) => e + ((null == t ? void 0 : t.length) || 1)), 0), fe = e => {
        try {
          const t = new URL(e);
          return "localhost" === t.hostname || !!t.port || "file://" === t.origin
        } catch (e) {
          return !1
        }
      }, be = e => {
        if (void 0 === e) return;
        const t = Array.from(new Set(e.map((e => e.rule || e.id)))),
          o = {
            failedRuleCount: t.length,
            failedRuleNames: t,
            criticalIssueCount: me(e, "critical"),
            seriousIssueCount: me(e, "serious"),
            moderateIssueCount: me(e, "moderate"),
            minorIssueCount: me(e, "minor")
          };
        if (e.length && Array.isArray(e[0].nodes)) {
          const t = e.reduce(((e, t) => e + t.nodes.length), 0);
          o.failedItemCount = t
        }
        return o
      }, he = async e => {
        const t = await I(),
          {
            productName: o,
            productComponent: n
          } = t,
          r = C(C({}, e), {}, {
            productName: o,
            productComponent: n
          });
        try {
          let {
            event: e
          } = r, t = A(r, ["event"]);
          Re(e, t)
        } catch (e) {
          L("Analytics Data Error", {
            error: e.message,
            stack: e.stack
          })
        }
        try {
          t.postEvent(r)
        } catch (e) {
          L("Usage Data Error", {
            error: e.message,
            stack: e.stack
          })
        }
      }, ve = e => {
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
      }, ye = async (e = []) => {
        let t, o, n, i;
        if ("devtools" in browser) try {
          ({
            contentType: t,
            title: o,
            url: n,
            scoped: i
          } = await b.send(h.content, "get-document-metadata"))
        } catch (e) {
          r.fy.logger.error("Unable to get document metadata", {
            error: e.message,
            stack: e.stack
          })
        }
        const {
          usageOrganization: c,
          usageDepartment: l,
          usageApplication: d,
          user: u,
          cachedUserCompany: p,
          axeSettings: g,
          userJobRole: m,
          cachedUserEmail: f
        } = await browser.storage.local.get(["usageOrganization", "usageDepartment", "usageApplication", "user", "cachedUserCompany", "axeSettings", "userJobRole", "cachedUserEmail"]), v = !(!u || !u.id);
        return {
          distinctId: await P(),
          organization: c || ((null == u ? void 0 : u.company) || p || ""),
          department: l || "",
          application: d || "",
          userStatus: ve(u),
          loggedIn: v,
          devInstance: fe(n),
          keycloakId: u && u.id,
          userId: u && u.username || f,
          userJobRole: m || "Anonymous",
          productName: "axe-pro",
          productComponent: "extension",
          productComponentVersion: a,
          applicationProperties: C({
            engineVersion: s,
            scoped: i,
            target: n,
            targetMedium: t,
            targetState: o,
            experimental: !1,
            rulesetName: (null == g ? void 0 : g.ruleset) || "all",
            bestPractices: !!g && !!g.enableBestPractices
          }, be(e))
        }
      }, Oe = e => async function(t, o) {
        const n = await ye(t);
        if (!o) return he(C(C({}, n), {}, {
          event: e
        }));
        he(C(C({}, n), {}, {
          event: e,
          applicationProperties: C(C({}, n.applicationProperties), o)
        }))
      }, we = e => t => Oe(e)(void 0, t), Ee = (Oe("issue:viewed"), we(J), we(Y), we(B), we(Z), Oe(z), Oe(H), Oe(F), Oe(V), Oe(G), Oe($), (e, t = "interactive-elements") => o => Oe(e)(void 0, C({
        eventTool: t
      }, o)));
      Ee(Q), Ee(ee), Ee(te), Ee(oe), Ee(ne), Ee(re), Ee(se, "table"), Ee(ae, "table"), Ee(ie, "table"), Ee(ce, "table"), Oe(le), Oe(de), Oe(ue), Oe(pe), Oe(ge);
      let _e = !1,
        Ie = !1;
      const xe = async () => {
        if (_e) return;
        const e = await P();
        q.init(N, void 0, {
          deviceId: e,
          includeUtm: !0,
          saveParamsReferrerOncePerSession: !1,
          includeGclid: !0,
          includeReferrer: !0,
          secureCookie: !0,
          sameSiteCookie: "Lax"
        }), _e = !0
      },
        Se = async () => {
          if (void 0 !== globalThis.document && void 0 !== globalThis.XMLHttpRequest) {
            if (Ie) return !0;
            r.fy.init({
              clientToken: D,
              site: "datadoghq.com",
              service: "axe-extension",
              env: M,
              version: a,
              beforeSend: e => {
                var t;
                if (0 === (null == e || null === (t = e.http) || void 0 === t ? void 0 : t.status_code)) return !1
              }
            }), Ie = !0
          }
        },
        Le = async () => {
          await Promise.all([xe(), Se()])
        },
        Re = async (e, t = {}) => {
          await Le();
          let o = {};
          switch (e) {
            case X:
              o = {
                analyze: 1
              };
              break;
            case K:
              o = {
                complete: 1
              };
              break;
            case W:
              o = {
                export: 1
              }
          }
          await (async (e = {}) => {
            const {
              user: t,
              userJobRole: o = "",
              usageOrganization: n = "",
              cachedUserCompany: r,
              axeSettings: s,
              highlightTheme: a,
              theme: i,
              locale: c,
              policySettings: l,
              axeServerURL: d,
              firstView: u,
              exportFormat: p
            } = await browser.storage.local.get(["user", "userJobRole", "usageOrganization", "cachedUserCompany", "axeSettings", "highlightTheme", "theme", "locale", "policySettings", "axeServerURL", "firstView", "exportFormat"]);
            q.setUserId(t && t.id);
            const g = t && t.id,
              m = (new q.Identify).set("role", o).set("userStatus", ve(t)).set("loggedIn", g).set("axeSettings", C(C({
                highlightTheme: a,
                theme: i,
                locale: c,
                axeServerURL: d
              }, s), {}, {
                ruleset: (null == s ? void 0 : s.ruleset) || "all"
              })).set("policySettings", l).set("firstView", u).set("exportSchema", p || "devtools");
            for (const [t, o] of Object.entries(e)) isNaN(o) ? m.set(t, o) : m.add(t, o);
            q.identify(m), q.setGroup("organization", n || (null == t ? void 0 : t.company) || r)
          })(o);
          const {
            devInstance: n,
            productName: r,
            productComponent: s,
            productComponentVersion: a,
            engineVersion: i,
            applicationProperties: c
          } = t, l = C({
            devInstance: n,
            productName: r,
            productComponent: s,
            productComponentVersion: a,
            engineVersion: i
          }, c);
          q.logEvent(e, l)
        },
        Ue = browser.runtime.getManifest(),
        Pe = Ue.name.split(" - ")[0];
      Le(), browser.devtools.panels.create(Pe, "", "panel.html").then((() => {
        b.send(h.content, "init", {
          extension: Ue.name,
          version: Ue.version
        })
      }))
    },
    360: e => {
      "use strict";
      e.exports = URL
    },
    96553: () => { }
  },
    o = {};

  function n(e) {
    var r = o[e];
    if (void 0 !== r) return r.exports;
    var s = o[e] = {
      id: e,
      loaded: !1,
      exports: {}
    };
    return t[e].call(s.exports, s, s.exports, n), s.loaded = !0, s.exports
  }
  n.m = t, n.amdO = {}, e = [], n.O = (t, o, r, s) => {
    if (!o) {
      var a = 1 / 0;
      for (d = 0; d < e.length; d++) {
        for (var [o, r, s] = e[d], i = !0, c = 0; c < o.length; c++)(!1 & s || a >= s) && Object.keys(n.O).every((e => n.O[e](o[c]))) ? o.splice(c--, 1) : (i = !1, s < a && (a = s));
        if (i) {
          e.splice(d--, 1);
          var l = r();
          void 0 !== l && (t = l)
        }
      }
      return t
    }
    s = s || 0;
    for (var d = e.length; d > 0 && e[d - 1][2] > s; d--) e[d] = e[d - 1];
    e[d] = [o, r, s]
  }, n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, {
      a: t
    }), t
  }, n.d = (e, t) => {
    for (var o in t) n.o(t, o) && !n.o(e, o) && Object.defineProperty(e, o, {
      enumerable: !0,
      get: t[o]
    })
  }, n.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (e) {
      if ("object" == typeof window) return window
    }
  }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), n.j = 308, (() => {
    var e = {
      308: 0
    };
    n.O.j = t => 0 === e[t];
    var t = (t, o) => {
      var r, s, [a, i, c] = o,
        l = 0;
      if (a.some((t => 0 !== e[t]))) {
        for (r in i) n.o(i, r) && (n.m[r] = i[r]);
        if (c) var d = c(n)
      }
      for (t && t(o); l < a.length; l++) s = a[l], n.o(e, s) && e[s] && e[s][0](), e[s] = 0;
      return n.O(d)
    },
      o = this.webpackChunk = this.webpackChunk || [];
    o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
  })();
  var r = n.O(void 0, [736], (() => n(34123)));
  r = n.O(r)
})();
