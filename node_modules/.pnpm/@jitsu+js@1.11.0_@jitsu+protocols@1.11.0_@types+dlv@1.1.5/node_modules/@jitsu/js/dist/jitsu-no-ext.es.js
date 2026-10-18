var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a4, b5) => {
  for (var prop in b5 || (b5 = {}))
    if (__hasOwnProp.call(b5, prop))
      __defNormalProp(a4, prop, b5[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b5)) {
      if (__propIsEnum.call(b5, prop))
        __defNormalProp(a4, prop, b5[prop]);
    }
  return a4;
};
var __spreadProps = (a4, b5) => __defProps(a4, __getOwnPropDescs(b5));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x3) => x3.done ? resolve(x3.value) : Promise.resolve(x3.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../../node_modules/.pnpm/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
function dlv_es_default(t2, e2, l3, n4, r3) {
  for (e2 = e2.split ? e2.split(".") : e2, n4 = 0; n4 < e2.length; n4++) t2 = t2 ? t2[e2[n4]] : r3;
  return t2 === r3 ? l3 : t2;
}

// ../../node_modules/.pnpm/@analytics+type-utils@0.6.2/node_modules/@analytics/type-utils/dist/analytics-util-types.module.js
var e = "undefined";
var o = "object";
var b = "any";
var m = "*";
var j = "__";
var F = "undefined" != typeof process ? process : {};
var P = F.env && F.env.NODE_ENV || "";
var $ = "undefined" != typeof document;
var T = $ && "localhost" === window.location.hostname;
var _ = null != F.versions && null != F.versions.node;
var k = "undefined" != typeof Deno && void 0 !== Deno.core;
var B = "object" == typeof self && self.constructor && "DedicatedWorkerGlobalScope" === self.constructor.name;
var G = $ && "nodejs" === window.name || "undefined" != typeof navigator && void 0 !== navigator.userAgent && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
function M(n4, t2) {
  return t2.charAt(0)[n4]() + t2.slice(1);
}
var U = M.bind(null, "toUpperCase");
var H = M.bind(null, "toLowerCase");
function J(n4) {
  return Y(n4) ? U("null") : "object" == typeof n4 ? yn(n4) : Object.prototype.toString.call(n4).slice(8, -1);
}
function R(n4, t2) {
  void 0 === t2 && (t2 = true);
  var e2 = J(n4);
  return t2 ? H(e2) : e2;
}
function V(n4, t2) {
  return typeof t2 === n4;
}
var W = V.bind(null, "function");
var q = V.bind(null, "string");
var I = V.bind(null, "undefined");
var Q = V.bind(null, "boolean");
var X = V.bind(null, "symbol");
function Y(n4) {
  return null === n4;
}
function nn(n4) {
  return "number" === R(n4) && !isNaN(n4);
}
function rn(n4) {
  return "array" === R(n4);
}
function on(n4) {
  if (!un(n4)) return false;
  for (var t2 = n4; null !== Object.getPrototypeOf(t2); ) t2 = Object.getPrototypeOf(t2);
  return Object.getPrototypeOf(n4) === t2;
}
function un(n4) {
  return n4 && ("object" == typeof n4 || null !== n4);
}
function yn(n4) {
  return W(n4.constructor) ? n4.constructor.name : null;
}
function hn(n4) {
  return n4 instanceof Error || q(n4.message) && n4.constructor && nn(n4.constructor.stackTraceLimit);
}
function On(n4, t2) {
  if ("object" != typeof t2 || Y(t2)) return false;
  if (t2 instanceof n4) return true;
  var e2 = R(new n4(""));
  if (hn(t2)) for (; t2; ) {
    if (R(t2) === e2) return true;
    t2 = Object.getPrototypeOf(t2);
  }
  return false;
}
var Sn = On.bind(null, TypeError);
var An = On.bind(null, SyntaxError);
function $n(n4, t2) {
  var e2 = n4 instanceof Element || n4 instanceof HTMLDocument;
  return e2 && t2 ? Tn(n4, t2) : e2;
}
function Tn(n4, t2) {
  return void 0 === t2 && (t2 = ""), n4 && n4.nodeName === t2.toUpperCase();
}
function _n(n4) {
  var t2 = [].slice.call(arguments, 1);
  return function() {
    return n4.apply(void 0, [].slice.call(arguments).concat(t2));
  };
}
var kn = _n($n, "form");
var Bn = _n($n, "button");
var Gn = _n($n, "input");
var Mn = _n($n, "select");

// ../../node_modules/.pnpm/analytics-utils@1.0.12_@types+dlv@1.1.4/node_modules/analytics-utils/dist/analytics-utils.module.js
function n(e2) {
  try {
    return decodeURIComponent(e2.replace(/\+/g, " "));
  } catch (e3) {
    return null;
  }
}
function s(r3) {
  return (function(e2) {
    for (var r4, t2 = /* @__PURE__ */ Object.create(null), o3 = /([^&=]+)=?([^&]*)/g; r4 = o3.exec(e2); ) {
      var a4 = n(r4[1]), i4 = n(r4[2]);
      "[]" === a4.substring(a4.length - 2) ? (t2[a4 = a4.substring(0, a4.length - 2)] || (t2[a4] = [])).push(i4) : t2[a4] = "" === i4 || i4;
    }
    for (var u3 in t2) {
      var c4 = u3.split("[");
      c4.length > 1 && (m2(t2, c4.map(function(e3) {
        return e3.replace(/[?[\]\\ ]/g, "");
      }), t2[u3]), delete t2[u3]);
    }
    return t2;
  })((function(r4) {
    if (r4) {
      var t2 = r4.match(/\?(.*)/);
      return t2 && t2[1] ? t2[1].split("#")[0] : "";
    }
    return $ && window.location.search.substring(1);
  })(r3));
}
function m2(e2, r3, t2) {
  for (var n4 = r3.length - 1, o3 = 0; o3 < n4; ++o3) {
    var a4 = r3[o3];
    if ("__proto__" === a4 || "constructor" === a4) break;
    a4 in e2 || (e2[a4] = {}), e2 = e2[a4];
  }
  e2[r3[n4]] = t2;
}
function y() {
  for (var e2 = "", r3 = 0, t2 = 4294967295 * Math.random() | 0; r3++ < 36; ) {
    var n4 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[r3 - 1], o3 = 15 & t2;
    e2 += "-" == n4 || "4" == n4 ? n4 : ("x" == n4 ? o3 : 3 & o3 | 8).toString(16), t2 = r3 % 8 == 0 ? 4294967295 * Math.random() | 0 : t2 >> 4;
  }
  return e2;
}

// ../../node_modules/.pnpm/@analytics+global-storage-utils@0.1.7/node_modules/@analytics/global-storage-utils/dist/analytics-util-global-storage.module.js
var l = "global";
var o2 = j + "global" + j;
var n2 = typeof self === o && self.self === self && self || typeof global === o && global.global === global && global || void 0;
function a(t2) {
  return n2[o2][t2];
}
function f(t2, e2) {
  return n2[o2][t2] = e2;
}
function i(t2) {
  delete n2[o2][t2];
}
function u(t2, e2, r3) {
  var l3;
  try {
    if (b2(t2)) {
      var o3 = window[t2];
      l3 = o3[e2].bind(o3);
    }
  } catch (t3) {
  }
  return l3 || r3;
}
n2[o2] || (n2[o2] = {});
var c = {};
function b2(t2) {
  if (typeof c[t2] !== e) return c[t2];
  try {
    var e2 = window[t2];
    e2.setItem(e, e), e2.removeItem(e);
  } catch (e3) {
    return c[t2] = false;
  }
  return c[t2] = true;
}

// ../../node_modules/.pnpm/@analytics+core@0.12.15_@types+dlv@1.1.4/node_modules/@analytics/core/dist/server/analytics-core.module.js
function g() {
  return g = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n4 = arguments[t2];
      for (var r3 in n4) Object.prototype.hasOwnProperty.call(n4, r3) && (e2[r3] = n4[r3]);
    }
    return e2;
  }, g.apply(this, arguments);
}
var h = "function";
var v = "undefined";
var y2 = "@@redux/" + Math.random().toString(36);
var b3 = /* @__PURE__ */ (function() {
  return typeof Symbol === h && Symbol.observable || "@@observable";
})();
var I2 = " != " + h;
function w(e2, t2, n4) {
  var r3;
  if (typeof t2 === h && typeof n4 === v && (n4 = t2, t2 = void 0), typeof n4 !== v) {
    if (typeof n4 !== h) throw new Error("enhancer" + I2);
    return n4(w)(e2, t2);
  }
  if (typeof e2 !== h) throw new Error("reducer" + I2);
  var i4 = e2, a4 = t2, o3 = [], u3 = o3, s2 = false;
  function l3() {
    u3 === o3 && (u3 = o3.slice());
  }
  function f2() {
    return a4;
  }
  function d3(e3) {
    if (typeof e3 !== h) throw new Error("Listener" + I2);
    var t3 = true;
    return l3(), u3.push(e3), function() {
      if (t3) {
        t3 = false, l3();
        var n5 = u3.indexOf(e3);
        u3.splice(n5, 1);
      }
    };
  }
  function p(e3) {
    if (!on(e3)) throw new Error("Act != obj");
    if (typeof e3.type === v) throw new Error("ActType " + v);
    if (s2) throw new Error("Dispatch in reducer");
    try {
      s2 = true, a4 = i4(a4, e3);
    } finally {
      s2 = false;
    }
    for (var t3 = o3 = u3, n5 = 0; n5 < t3.length; n5++) (0, t3[n5])();
    return e3;
  }
  return p({ type: "@@redux/INIT" }), (r3 = { dispatch: p, subscribe: d3, getState: f2, replaceReducer: function(e3) {
    if (typeof e3 !== h) throw new Error("next reducer" + I2);
    i4 = e3, p({ type: "@@redux/INIT" });
  } })[b3] = function() {
    var e3, t3 = d3;
    return (e3 = { subscribe: function(e4) {
      if ("object" != typeof e4) throw new TypeError("Observer != obj");
      function n5() {
        e4.next && e4.next(f2());
      }
      return n5(), { unsubscribe: t3(n5) };
    } })[b3] = function() {
      return this;
    }, e3;
  }, r3;
}
function E(e2, t2) {
  var n4 = t2 && t2.type;
  return "action " + (n4 && n4.toString() || "?") + "reducer " + e2 + " returns " + v;
}
function P2() {
  var e2 = [].slice.call(arguments);
  return 0 === e2.length ? function(e3) {
    return e3;
  } : 1 === e2.length ? e2[0] : e2.reduce(function(e3, t2) {
    return function() {
      return e3(t2.apply(void 0, [].slice.call(arguments)));
    };
  });
}
function S() {
  var e2 = arguments;
  return function(t2) {
    return function(n4, r3, i4) {
      var a4, o3 = t2(n4, r3, i4), u3 = o3.dispatch, c4 = { getState: o3.getState, dispatch: function(e3) {
        return u3(e3);
      } };
      return a4 = [].slice.call(e2).map(function(e3) {
        return e3(c4);
      }), g({}, o3, { dispatch: u3 = P2.apply(void 0, a4)(o3.dispatch) });
    };
  };
}
var N = j + "anon_id";
var A = j + "user_id";
var _2 = j + "user_traits";
var j2 = "userId";
var k2 = "anonymousId";
var x = ["bootstrap", "params", "campaign", "initializeStart", "initialize", "initializeEnd", "ready", "resetStart", "reset", "resetEnd", "pageStart", "page", "pageEnd", "pageAborted", "trackStart", "track", "trackEnd", "trackAborted", "identifyStart", "identify", "identifyEnd", "identifyAborted", "userIdChanged", "registerPlugins", "enablePlugin", "disablePlugin", "online", "offline", "setItemStart", "setItem", "setItemEnd", "setItemAborted", "removeItemStart", "removeItem", "removeItemEnd", "removeItemAborted"];
var T2 = ["name", "EVENTS", "config", "loaded"];
var z = x.reduce(function(e2, t2) {
  return e2[t2] = t2, e2;
}, { registerPluginType: function(e2) {
  return "registerPlugin:" + e2;
}, pluginReadyType: function(e2) {
  return "ready:" + e2;
} });
var M2 = /^utm_/;
var q2 = /^an_prop_/;
var V2 = /^an_trait_/;
function C(e2) {
  var t2 = e2.storage.setItem;
  return function(n4) {
    return function(r3) {
      return function(i4) {
        if (i4.type === z.bootstrap) {
          var a4 = i4.params, o3 = i4.user, u3 = i4.persistedUser, c4 = i4.initialUser, s2 = u3.userId === o3.userId;
          u3.anonymousId !== o3.anonymousId && t2(N, o3.anonymousId), s2 || t2(A, o3.userId), c4.traits && t2(_2, g({}, s2 && u3.traits ? u3.traits : {}, c4.traits));
          var l3 = Object.keys(i4.params);
          if (l3.length) {
            var f2 = a4.an_uid, d3 = a4.an_event, p = l3.reduce(function(e3, t3) {
              if (t3.match(M2) || t3.match(/^(d|g)clid/)) {
                var n5 = t3.replace(M2, "");
                e3.campaign["campaign" === n5 ? "name" : n5] = a4[t3];
              }
              return t3.match(q2) && (e3.props[t3.replace(q2, "")] = a4[t3]), t3.match(V2) && (e3.traits[t3.replace(V2, "")] = a4[t3]), e3;
            }, { campaign: {}, props: {}, traits: {} });
            n4.dispatch(g({ type: z.params, raw: a4 }, p, f2 ? { userId: f2 } : {})), f2 && setTimeout(function() {
              return e2.identify(f2, p.traits);
            }, 0), d3 && setTimeout(function() {
              return e2.track(d3, p.props);
            }, 0), Object.keys(p.campaign).length && n4.dispatch({ type: z.campaign, campaign: p.campaign });
          }
        }
        return r3(i4);
      };
    };
  };
}
function U2(e2) {
  return function(t2, n4) {
    if (void 0 === t2 && (t2 = {}), void 0 === n4 && (n4 = {}), n4.type === z.setItemEnd) {
      if (n4.key === N) return g({}, t2, { anonymousId: n4.value });
      if (n4.key === A) return g({}, t2, { userId: n4.value });
    }
    switch (n4.type) {
      case z.identify:
        return Object.assign({}, t2, { userId: n4.userId, traits: g({}, t2.traits, n4.traits) });
      case z.reset:
        return [A, N, _2].forEach(function(t3) {
          e2.removeItem(t3);
        }), Object.assign({}, t2, { userId: null, anonymousId: null, traits: {} });
      default:
        return t2;
    }
  };
}
function R2(e2) {
  return { userId: e2.getItem(A), anonymousId: e2.getItem(N), traits: e2.getItem(_2) };
}
var $2 = function(e2) {
  return j + "TEMP" + j + e2;
};
function D(t2) {
  var n4 = t2.storage, r3 = n4.setItem, a4 = n4.removeItem, o3 = n4.getItem;
  return function(t3) {
    return function(n5) {
      return function(u3) {
        var c4 = u3.userId, s2 = u3.traits, l3 = u3.options;
        if (u3.type === z.reset && ([A, _2, N].forEach(function(e2) {
          a4(e2);
        }), [j2, k2, "traits"].forEach(function(e2) {
          i($2(e2));
        })), u3.type === z.identify) {
          o3(N) || r3(N, y());
          var f2 = o3(A), d3 = o3(_2) || {};
          f2 && f2 !== c4 && t3.dispatch({ type: z.userIdChanged, old: { userId: f2, traits: d3 }, new: { userId: c4, traits: s2 }, options: l3 }), c4 && r3(A, c4), s2 && r3(_2, g({}, d3, s2));
        }
        return n5(u3);
      };
    };
  };
}
var B2 = {};
function L(e2, t2) {
  B2[e2] && W(B2[e2]) && (B2[e2](t2), delete B2[e2]);
}
function J2(e2, t2, n4) {
  return new Promise(function(r3, i4) {
    return t2() ? r3(e2) : n4 < 1 ? i4(g({}, e2, { queue: true })) : new Promise(function(e3) {
      return setTimeout(e3, 10);
    }).then(function(a4) {
      return J2(e2, t2, n4 - 10).then(r3, i4);
    });
  });
}
function X2(e2) {
  return { abort: e2 };
}
var H2 = function(e2) {
  var t2 = e2.data, n4 = e2.action, r3 = e2.instance, i4 = e2.state, a4 = e2.allPlugins, o3 = e2.allMatches, u3 = e2.store, s2 = e2.EVENTS;
  try {
    var f2 = i4.plugins, d3 = i4.context, p = n4.type, m4 = p.match(W2), h3 = t2.exact.map(function(e3) {
      return e3.pluginName;
    });
    m4 && (h3 = o3.during.map(function(e3) {
      return e3.pluginName;
    }));
    var v2 = /* @__PURE__ */ (function(e3, t3) {
      return function(n5, r4, i5) {
        var a5 = r4.config, o4 = r4.name, u4 = o4 + "." + n5.type;
        i5 && (u4 = i5.event);
        var c4 = n5.type.match(W2) ? /* @__PURE__ */ (function(e4, t4, n6, r5, i6) {
          return function(a6, o5) {
            var u5 = r5 ? r5.name : e4, c5 = o5 && ne(o5) ? o5 : n6;
            if (r5 && (!(c5 = o5 && ne(o5) ? o5 : [e4]).includes(e4) || 1 !== c5.length)) throw new Error("Method " + t4 + " can only abort " + e4 + " plugin. " + JSON.stringify(c5) + " input valid");
            return g({}, i6, { abort: { reason: a6, plugins: c5, caller: t4, _: u5 } });
          };
        })(o4, u4, t3, i5, n5) : /* @__PURE__ */ (function(e4, t4) {
          return function() {
            throw new Error(e4.type + " action not cancellable. Remove abort in " + t4);
          };
        })(n5, u4);
        return { payload: ae(n5), instance: e3, config: a5 || {}, abort: c4 };
      };
    })(r3, h3), y3 = t2.exact.reduce(function(e3, t3) {
      var n5 = t3.pluginName, r4 = t3.methodName, i5 = false;
      return r4.match(/^initialize/) || r4.match(/^reset/) || (i5 = !f2[n5].loaded), d3.offline && r4.match(/^(page|track|identify)/) && (i5 = true), e3["" + n5] = i5, e3;
    }, {});
    return Promise.resolve(t2.exact.reduce(function(e3, i5, o4) {
      try {
        var u4 = i5.pluginName;
        return Promise.resolve(e3).then(function(e4) {
          function i6() {
            return Promise.resolve(e4);
          }
          var o5 = (function() {
            if (t2.namespaced && t2.namespaced[u4]) return Promise.resolve(t2.namespaced[u4].reduce(function(e5, t3, n5) {
              try {
                return Promise.resolve(e5).then(function(e6) {
                  return t3.method && W(t3.method) ? ((function(e7, t4) {
                    var n7 = ie(e7);
                    if (n7 && n7.name === t4) {
                      var r4 = ie(n7.method);
                      throw new Error([t4 + " plugin is calling method " + e7, "Plugins cant call self", "Use " + n7.method + " " + (r4 ? "or " + r4.method : "") + " in " + t4 + " plugin insteadof " + e7].join("\n"));
                    }
                  })(t3.methodName, t3.pluginName), Promise.resolve(t3.method({ payload: e6, instance: r3, abort: (n6 = e6, i7 = u4, o6 = t3.pluginName, function(e7, t4) {
                    return g({}, n6, { abort: { reason: e7, plugins: t4 || [i7], caller: p, from: o6 || i7 } });
                  }), config: Q2(t3.pluginName, f2, a4), plugins: f2 })).then(function(t4) {
                    var n7 = on(t4) ? t4 : {};
                    return Promise.resolve(g({}, e6, n7));
                  })) : e6;
                  var n6, i7, o6;
                });
              } catch (e6) {
                return Promise.reject(e6);
              }
            }, Promise.resolve(n4))).then(function(t3) {
              e4[u4] = t3;
            });
            e4[u4] = n4;
          })();
          return o5 && o5.then ? o5.then(i6) : i6();
        });
      } catch (e4) {
        return Promise.reject(e4);
      }
    }, Promise.resolve({}))).then(function(e3) {
      return Promise.resolve(t2.exact.reduce(function(n5, i5, o4) {
        try {
          var s3 = t2.exact.length === o4 + 1, l3 = i5.pluginName, d4 = a4[l3];
          return Promise.resolve(n5).then(function(t3) {
            var n6 = e3[l3] ? e3[l3] : {};
            if (m4 && (n6 = t3), ee(n6, l3)) return K({ data: n6, method: p, instance: r3, pluginName: l3, store: u3 }), Promise.resolve(t3);
            if (ee(t3, l3)) return s3 && K({ data: t3, method: p, instance: r3, store: u3 }), Promise.resolve(t3);
            if (y3.hasOwnProperty(l3) && true === y3[l3]) return u3.dispatch({ type: "queue", plugin: l3, payload: n6, _: { called: "queue", from: "queueMechanism" } }), Promise.resolve(t3);
            var i6 = v2(e3[l3], a4[l3]);
            return Promise.resolve(d4[p]({ abort: i6.abort, payload: n6, instance: r3, config: Q2(l3, f2, a4), plugins: f2 })).then(function(i7) {
              var a5 = on(i7) ? i7 : {}, o5 = g({}, t3, a5), s4 = e3[l3];
              if (ee(s4, l3)) K({ data: s4, method: p, instance: r3, pluginName: l3, store: u3 });
              else {
                var f3 = p + ":" + l3;
                (f3.match(/:/g) || []).length < 2 && !p.match(F2) && !p.match(G2) && r3.dispatch(g({}, m4 ? o5 : n6, { type: f3, _: { called: f3, from: "submethod" } }));
              }
              return Promise.resolve(o5);
            });
          });
        } catch (e4) {
          return Promise.reject(e4);
        }
      }, Promise.resolve(n4))).then(function(e4) {
        if (!(p.match(W2) || p.match(/^registerPlugin/) || p.match(G2) || p.match(F2) || p.match(/^params/) || p.match(/^userIdChanged/))) {
          if (s2.plugins.includes(p), e4._ && e4._.originalAction === p) return e4;
          var n5 = g({}, e4, { _: { originalAction: e4.type, called: e4.type, from: "engineEnd" } });
          te(e4, t2.exact.length) && !p.match(/End$/) && (n5 = g({}, n5, { type: e4.type + "Aborted" })), u3.dispatch(n5);
        }
        return e4;
      });
    });
  } catch (e3) {
    return Promise.reject(e3);
  }
};
var W2 = /Start$/;
var F2 = /^bootstrap/;
var G2 = /^ready/;
function K(e2) {
  var t2 = e2.pluginName, n4 = e2.method + "Aborted" + (t2 ? ":" + t2 : "");
  e2.store.dispatch(g({}, e2.data, { type: n4, _: { called: n4, from: "abort" } }));
}
function Q2(e2, t2, n4) {
  var r3 = t2[e2] || n4[e2];
  return r3 && r3.config ? r3.config : {};
}
function Y2(e2, t2) {
  return t2.reduce(function(t3, n4) {
    return n4[e2] ? t3.concat({ methodName: e2, pluginName: n4.name, method: n4[e2] }) : t3;
  }, []);
}
function Z(e2, t2) {
  var n4 = e2.replace(W2, ""), r3 = t2 ? ":" + t2 : "";
  return ["" + e2 + r3, "" + n4 + r3, n4 + "End" + r3];
}
function ee(e2, t2) {
  var n4 = e2.abort;
  return !!n4 && (true === n4 || re(n4, t2) || n4 && re(n4.plugins, t2));
}
function te(e2, t2) {
  var n4 = e2.abort;
  if (!n4) return false;
  if (true === n4 || q(n4)) return true;
  var r3 = n4.plugins;
  return ne(n4) && n4.length === t2 || ne(r3) && r3.length === t2;
}
function ne(e2) {
  return Array.isArray(e2);
}
function re(e2, t2) {
  return !(!e2 || !ne(e2)) && e2.includes(t2);
}
function ie(e2) {
  var t2 = e2.match(/(.*):(.*)/);
  return !!t2 && { method: t2[1], name: t2[2] };
}
function ae(e2) {
  return Object.keys(e2).reduce(function(t2, n4) {
    return "type" === n4 || (t2[n4] = on(e2[n4]) ? Object.assign({}, e2[n4]) : e2[n4]), t2;
  }, {});
}
function oe(e2, t2, n4) {
  var r3 = {};
  return function(i4) {
    return function(a4) {
      return function(o3) {
        try {
          var u3, s2 = function(e3) {
            return u3 ? e3 : a4(m4);
          }, d3 = o3.type, p = o3.plugins, m4 = o3;
          if (o3.abort) return Promise.resolve(a4(o3));
          if (d3 === z.enablePlugin && i4.dispatch({ type: z.initializeStart, plugins: p, disabled: [], fromEnable: true, meta: o3.meta }), d3 === z.disablePlugin && setTimeout(function() {
            return L(o3.meta.rid, { payload: o3 });
          }, 0), d3 === z.initializeEnd) {
            var h3 = t2(), v2 = Object.keys(h3), y3 = v2.filter(function(e3) {
              return p.includes(e3);
            }).map(function(e3) {
              return h3[e3];
            }), b5 = [], I4 = [], w2 = o3.disabled, E3 = y3.map(function(e3) {
              var t3 = e3.loaded, n5 = e3.name, a5 = e3.config;
              return J2(e3, function() {
                return t3({ config: a5 });
              }, 1e4).then(function(t4) {
                return r3[n5] || (i4.dispatch({ type: z.pluginReadyType(n5), name: n5, events: Object.keys(e3).filter(function(e4) {
                  return !T2.includes(e4);
                }) }), r3[n5] = true), b5 = b5.concat(n5), e3;
              }).catch(function(e4) {
                if (e4 instanceof Error) throw new Error(e4);
                return I4 = I4.concat(e4.name), e4;
              });
            });
            Promise.all(E3).then(function(e3) {
              var t3 = { plugins: b5, failed: I4, disabled: w2 };
              setTimeout(function() {
                v2.length === E3.length + w2.length && i4.dispatch(g({}, { type: z.ready }, t3));
              }, 0);
            });
          }
          var P3 = (function() {
            if (d3 !== z.bootstrap) return /^ready:([^:]*)$/.test(d3) && setTimeout(function() {
              return (function(e3, t3, n5) {
                var r4 = {}, i5 = t3(), a5 = e3.getState(), o4 = a5.plugins, u4 = a5.queue, s3 = a5.user;
                if (!a5.context.offline && u4 && u4.actions && u4.actions.length) {
                  var f2 = u4.actions.reduce(function(e4, t4, n6) {
                    return o4[t4.plugin].loaded ? (e4.process.push(t4), e4.processIndex.push(n6)) : (e4.requeue.push(t4), e4.requeueIndex.push(n6)), e4;
                  }, { processIndex: [], process: [], requeue: [], requeueIndex: [] });
                  if (f2.processIndex && f2.processIndex.length) {
                    f2.processIndex.forEach(function(t4) {
                      var a6 = u4.actions[t4], f3 = a6.plugin, d5 = a6.payload.type, p2 = i5[f3][d5];
                      if (p2 && W(p2)) {
                        var m5, h4 = (function(e4, t5) {
                          return void 0 === e4 && (e4 = {}), void 0 === t5 && (t5 = {}), [j2, k2].reduce(function(n6, r5) {
                            return e4.hasOwnProperty(r5) && t5[r5] && t5[r5] !== e4[r5] && (n6[r5] = t5[r5]), n6;
                          }, e4);
                        })(a6.payload, s3), v3 = r4[h4.meta.rid];
                        if (!v3 && (m5 = p2({ payload: h4, config: o4[f3].config, instance: n5, abort: X2 })) && on(m5) && m5.abort) return void (r4[h4.meta.rid] = true);
                        if (!v3) {
                          var y4 = d5 + ":" + f3;
                          e3.dispatch(g({}, h4, { type: y4, _: { called: y4, from: "queueDrain" } }));
                        }
                      }
                    });
                    var d4 = u4.actions.filter(function(e4, t4) {
                      return !~f2.processIndex.indexOf(t4);
                    });
                    u4.actions = d4;
                  }
                }
              })(i4, t2, e2);
            }, 0), Promise.resolve((function(e3, t3, n5, r4, i5) {
              try {
                var a5 = W(t3) ? t3() : t3, o4 = e3.type, u4 = o4.replace(W2, "");
                if (e3._ && e3._.called) return Promise.resolve(e3);
                var c4 = n5.getState(), s3 = (m5 = a5, void 0 === (h4 = c4.plugins) && (h4 = {}), void 0 === (v3 = e3.options) && (v3 = {}), Object.keys(m5).filter(function(e4) {
                  var t4 = v3.plugins || {};
                  return Q(t4[e4]) ? t4[e4] : false !== t4.all && (!h4[e4] || false !== h4[e4].enabled);
                }).map(function(e4) {
                  return m5[e4];
                }));
                o4 === z.initializeStart && e3.fromEnable && (s3 = Object.keys(c4.plugins).filter(function(t4) {
                  var n6 = c4.plugins[t4];
                  return e3.plugins.includes(t4) && !n6.initialized;
                }).map(function(e4) {
                  return a5[e4];
                }));
                var d4 = s3.map(function(e4) {
                  return e4.name;
                }), p2 = (function(e4, t4, n6) {
                  var r5 = Z(e4).map(function(e5) {
                    return Y2(e5, t4);
                  });
                  return t4.reduce(function(n7, r6) {
                    var i6 = r6.name, a6 = Z(e4, i6).map(function(e5) {
                      return Y2(e5, t4);
                    }), o5 = a6[0], u5 = a6[1], c5 = a6[2];
                    return o5.length && (n7.beforeNS[i6] = o5), u5.length && (n7.duringNS[i6] = u5), c5.length && (n7.afterNS[i6] = c5), n7;
                  }, { before: r5[0], beforeNS: {}, during: r5[1], duringNS: {}, after: r5[2], afterNS: {} });
                })(o4, s3);
                return Promise.resolve(H2({ action: e3, data: { exact: p2.before, namespaced: p2.beforeNS }, state: c4, allPlugins: a5, allMatches: p2, instance: n5, store: r4, EVENTS: i5 })).then(function(e4) {
                  function t4() {
                    var t5 = (function() {
                      if (o4.match(W2)) return Promise.resolve(H2({ action: g({}, s4, { type: u4 + "End" }), data: { exact: p2.after, namespaced: p2.afterNS }, state: c4, allPlugins: a5, allMatches: p2, instance: n5, store: r4, EVENTS: i5 })).then(function(e5) {
                        e5.meta && e5.meta.hasCallback && L(e5.meta.rid, { payload: e5 });
                      });
                    })();
                    return t5 && t5.then ? t5.then(function() {
                      return e4;
                    }) : e4;
                  }
                  if (te(e4, d4.length)) return e4;
                  var s4, l3 = (function() {
                    if (o4 !== u4) return Promise.resolve(H2({ action: g({}, e4, { type: u4 }), data: { exact: p2.during, namespaced: p2.duringNS }, state: c4, allPlugins: a5, allMatches: p2, instance: n5, store: r4, EVENTS: i5 })).then(function(e5) {
                      s4 = e5;
                    });
                    s4 = e4;
                  })();
                  return l3 && l3.then ? l3.then(t4) : t4();
                });
              } catch (e4) {
                return Promise.reject(e4);
              }
              var m5, h4, v3;
            })(o3, t2, e2, i4, n4)).then(function(e3) {
              return u3 = 1, a4(e3);
            });
          })();
          return Promise.resolve(P3 && P3.then ? P3.then(s2) : s2(P3));
        } catch (e3) {
          return Promise.reject(e3);
        }
      };
    };
  };
}
function ue(e2) {
  return function(t2) {
    return function(t3) {
      return function(n4) {
        var r3 = n4.type, i4 = n4.key, a4 = n4.value, o3 = n4.options;
        if (r3 === z.setItem || r3 === z.removeItem) {
          if (n4.abort) return t3(n4);
          r3 === z.setItem ? e2.setItem(i4, a4, o3) : e2.removeItem(i4, o3);
        }
        return t3(n4);
      };
    };
  };
}
var ce = function() {
  var e2 = this;
  this.before = [], this.after = [], this.addMiddleware = function(t2, n4) {
    e2[n4] = e2[n4].concat(t2);
  }, this.removeMiddleware = function(t2, n4) {
    var r3 = e2[n4].findIndex(function(e3) {
      return e3 === t2;
    });
    -1 !== r3 && (e2[n4] = [].concat(e2[n4].slice(0, r3), e2[n4].slice(r3 + 1)));
  }, this.dynamicMiddlewares = function(t2) {
    return function(n4) {
      return function(r3) {
        return function(i4) {
          var a4 = { getState: n4.getState, dispatch: function(e3) {
            return n4.dispatch(e3);
          } }, o3 = e2[t2].map(function(e3) {
            return e3(a4);
          });
          return P2.apply(void 0, o3)(r3)(i4);
        };
      };
    };
  };
};
function se(e2) {
  return function(t2, n4) {
    void 0 === t2 && (t2 = {});
    var r3 = {};
    if ("initialize:aborted" === n4.type) return t2;
    if (/^registerPlugin:([^:]*)$/.test(n4.type)) {
      var i4 = le(n4.type, "registerPlugin"), a4 = e2()[i4];
      if (!a4 || !i4) return t2;
      var o3 = n4.enabled, u3 = a4.config;
      return r3[i4] = { enabled: o3, initialized: !!o3 && Boolean(!a4.initialize), loaded: !!o3 && Boolean(a4.loaded({ config: u3 })), config: u3 }, g({}, t2, r3);
    }
    if (/^initialize:([^:]*)$/.test(n4.type)) {
      var c4 = le(n4.type, z.initialize), s2 = e2()[c4];
      return s2 && c4 ? (r3[c4] = g({}, t2[c4], { initialized: true, loaded: Boolean(s2.loaded({ config: s2.config })) }), g({}, t2, r3)) : t2;
    }
    if (/^ready:([^:]*)$/.test(n4.type)) return r3[n4.name] = g({}, t2[n4.name], { loaded: true }), g({}, t2, r3);
    switch (n4.type) {
      case z.disablePlugin:
        return g({}, t2, fe(n4.plugins, false, t2));
      case z.enablePlugin:
        return g({}, t2, fe(n4.plugins, true, t2));
      default:
        return t2;
    }
  };
}
function le(e2, t2) {
  return e2.substring(t2.length + 1, e2.length);
}
function fe(e2, t2, n4) {
  return e2.reduce(function(e3, r3) {
    return e3[r3] = g({}, n4[r3], { enabled: t2 }), e3;
  }, n4);
}
function de(e2) {
  try {
    return JSON.parse(JSON.stringify(e2));
  } catch (e3) {
  }
  return e2;
}
var pe = { last: {}, history: [] };
function me(e2, t2) {
  void 0 === e2 && (e2 = pe);
  var n4 = t2.options, r3 = t2.meta;
  if (t2.type === z.track) {
    var i4 = de(g({ event: t2.event, properties: t2.properties }, Object.keys(n4).length && { options: n4 }, { meta: r3 }));
    return g({}, e2, { last: i4, history: e2.history.concat(i4) });
  }
  return e2;
}
var ge = { actions: [] };
function he(e2, t2) {
  void 0 === e2 && (e2 = ge);
  var n4 = t2.payload;
  switch (t2.type) {
    case "queue":
      var r3;
      return r3 = n4 && n4.type && n4.type === z.identify ? [t2].concat(e2.actions) : e2.actions.concat(t2), g({}, e2, { actions: r3 });
    case "dequeue":
      return [];
    default:
      return e2;
  }
}
var ve = /#.*$/;
function ye(e2) {
  var t2 = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e2);
  return "/" + (t2 && t2[3] ? t2[3].split("?")[0].replace(ve, "") : "");
}
var be;
var Ie = function(e2) {
  if (void 0 === e2 && (e2 = {}), !$) return e2;
  var t2 = document, n4 = t2.title, r3 = t2.referrer, i4 = window, a4 = i4.location, o3 = i4.innerWidth, u3 = i4.innerHeight, c4 = a4.hash, s2 = a4.search, l3 = (function(e3) {
    var t3 = (function() {
      if ($) {
        for (var e4, t4 = document.getElementsByTagName("link"), n5 = 0; e4 = t4[n5]; n5++) if ("canonical" === e4.getAttribute("rel")) return e4.getAttribute("href");
      }
    })();
    return t3 ? t3.match(/\?/) ? t3 : t3 + e3 : window.location.href.replace(ve, "");
  })(s2), f2 = { title: n4, url: l3, path: ye(l3), hash: c4, search: s2, width: o3, height: u3 };
  return r3 && "" !== r3 && (f2.referrer = r3), g({}, f2, e2);
};
var we = { last: {}, history: [] };
function Ee(e2, t2) {
  void 0 === e2 && (e2 = we);
  var n4 = t2.options;
  if (t2.type === z.page) {
    var r3 = de(g({ properties: t2.properties, meta: t2.meta }, Object.keys(n4).length && { options: n4 }));
    return g({}, e2, { last: r3, history: e2.history.concat(r3) });
  }
  return e2;
}
be = {};
var Pe = { initialized: false, sessionId: y(), app: null, version: null, debug: false, offline: !!$ && !navigator.onLine, os: { name: "na" }, userAgent: $ ? navigator.userAgent : "node", library: { name: "analytics", version: "0.12.14" }, timezone: void 0, locale: void 0, campaign: {}, referrer: be };
function Se(e2, t2) {
  void 0 === e2 && (e2 = Pe);
  var n4 = e2.initialized, r3 = t2.campaign;
  switch (t2.type) {
    case z.campaign:
      return g({}, e2, { campaign: r3 });
    case z.offline:
      return g({}, e2, { offline: true });
    case z.online:
      return g({}, e2, { offline: false });
    default:
      return n4 ? e2 : g({}, Pe, e2, { initialized: true });
  }
}
var Ne = ["plugins", "reducers", "storage"];
function Ae() {
  return f("analytics", []), function(e2) {
    return function(t2, n4, r3) {
      var i4 = e2(t2, n4, r3), a4 = i4.dispatch;
      return Object.assign(i4, { dispatch: function(e3) {
        return n2[o2].analytics.push(e3.action || e3), a4(e3);
      } });
    };
  };
}
function _e(e2) {
  return function() {
    return P2(P2.apply(null, arguments), Ae());
  };
}
function Oe(e2) {
  return e2 ? rn(e2) ? e2 : [e2] : [];
}
function je(t2, n4, r3) {
  void 0 === t2 && (t2 = {});
  var i4, a4, o3 = y();
  return n4 && (B2[o3] = (i4 = n4, a4 = (function(e2) {
    for (var t3, n5 = e2 || Array.prototype.slice.call(arguments), r4 = 0; r4 < n5.length; r4++) if (W(n5[r4])) {
      t3 = n5[r4];
      break;
    }
    return t3;
  })(r3), function(e2) {
    a4 && a4(e2), i4(e2);
  })), g({}, t2, { rid: o3, ts: (/* @__PURE__ */ new Date()).getTime() }, n4 ? { hasCallback: true } : {});
}
function ke(o3) {
  void 0 === o3 && (o3 = {});
  var u3 = o3.reducers || {}, s2 = o3.initialUser || {}, f2 = (o3.plugins || []).reduce(function(e2, t2) {
    if (W(t2)) return e2.middlewares = e2.middlewares.concat(t2), e2;
    if (t2.NAMESPACE && (t2.name = t2.NAMESPACE), !t2.name) throw new Error("https://lytics.dev/errors/1");
    t2.config || (t2.config = {});
    var n4 = t2.EVENTS ? Object.keys(t2.EVENTS).map(function(e3) {
      return t2.EVENTS[e3];
    }) : [];
    e2.pluginEnabled[t2.name] = !(false === t2.enabled || false === t2.config.enabled), delete t2.enabled, t2.methods && (e2.methods[t2.name] = Object.keys(t2.methods).reduce(function(e3, n5) {
      var r4;
      return e3[n5] = (r4 = t2.methods[n5], function() {
        for (var e4 = Array.prototype.slice.call(arguments), t3 = new Array(r4.length), n6 = 0; n6 < e4.length; n6++) t3[n6] = e4[n6];
        return t3[t3.length] = K2, r4.apply({ instance: K2 }, t3);
      }), e3;
    }, {}), delete t2.methods);
    var r3 = Object.keys(t2).concat(n4), i4 = new Set(e2.events.concat(r3));
    if (e2.events = Array.from(i4), e2.pluginsArray = e2.pluginsArray.concat(t2), e2.plugins[t2.name]) throw new Error(t2.name + "AlreadyLoaded");
    return e2.plugins[t2.name] = t2, e2.plugins[t2.name].loaded || (e2.plugins[t2.name].loaded = function() {
      return true;
    }), e2;
  }, { plugins: {}, pluginEnabled: {}, methods: {}, pluginsArray: [], middlewares: [], events: [] }), m4 = o3.storage ? o3.storage : { getItem: a, setItem: f, removeItem: i }, b5 = /* @__PURE__ */ (function(e2) {
    return function(t2, n4, i4) {
      return n4.getState("user")[t2] || (i4 && on(i4) && i4[t2] ? i4[t2] : R2(e2)[t2] || a($2(t2)) || null);
    };
  })(m4), I4 = f2.plugins, A3 = f2.events.filter(function(e2) {
    return !T2.includes(e2);
  }).sort(), _3 = new Set(A3.concat(x).filter(function(e2) {
    return !T2.includes(e2);
  })), O2 = Array.from(_3).sort(), M3 = function() {
    return I4;
  }, q3 = new ce(), V3 = q3.addMiddleware, B3 = q3.removeMiddleware, L3 = q3.dynamicMiddlewares, J4 = function() {
    throw new Error("Abort disabled inListener");
  }, X3 = s(), H3 = R2(m4), W3 = g({}, H3, s2, X3.an_uid ? { userId: X3.an_uid } : {}, X3.an_aid ? { anonymousId: X3.an_aid } : {});
  W3.anonymousId || (W3.anonymousId = y());
  var F4 = g({ enable: function(e2, t2) {
    return new Promise(function(n4) {
      le2.dispatch({ type: z.enablePlugin, plugins: Oe(e2), _: { originalAction: z.enablePlugin } }, n4, [t2]);
    });
  }, disable: function(e2, t2) {
    return new Promise(function(n4) {
      le2.dispatch({ type: z.disablePlugin, plugins: Oe(e2), _: { originalAction: z.disablePlugin } }, n4, [t2]);
    });
  } }, f2.methods), G4 = false, K2 = { identify: function(e2, t2, n4, r3) {
    try {
      var i4 = q(e2) ? e2 : null, o4 = on(e2) ? e2 : t2, u4 = n4 || {}, s3 = K2.user();
      f($2(j2), i4);
      var l3 = i4 || o4.userId || b5(j2, K2, o4);
      return Promise.resolve(new Promise(function(e3) {
        le2.dispatch(g({ type: z.identifyStart, userId: l3, traits: o4 || {}, options: u4, anonymousId: s3.anonymousId }, s3.id && s3.id !== i4 && { previousId: s3.id }), e3, [t2, n4, r3]);
      }));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, track: function(e2, t2, n4, r3) {
    try {
      var i4 = on(e2) ? e2.event : e2;
      if (!i4 || !q(i4)) throw new Error("EventMissing");
      var a4 = on(e2) ? e2 : t2 || {}, o4 = on(n4) ? n4 : {};
      return Promise.resolve(new Promise(function(e3) {
        le2.dispatch({ type: z.trackStart, event: i4, properties: a4, options: o4, userId: b5(j2, K2, t2), anonymousId: b5(k2, K2, t2) }, e3, [t2, n4, r3]);
      }));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, page: function(e2, t2, n4) {
    try {
      var r3 = on(e2) ? e2 : {}, i4 = on(t2) ? t2 : {};
      return Promise.resolve(new Promise(function(a4) {
        le2.dispatch({ type: z.pageStart, properties: Ie(r3), options: i4, userId: b5(j2, K2, r3), anonymousId: b5(k2, K2, r3) }, a4, [e2, t2, n4]);
      }));
    } catch (e3) {
      return Promise.reject(e3);
    }
  }, user: function(e2) {
    if (e2 === j2 || "id" === e2) return b5(j2, K2);
    if (e2 === k2 || "anonId" === e2) return b5(k2, K2);
    var t2 = K2.getState("user");
    return e2 ? dlv_es_default(t2, e2) : t2;
  }, reset: function(e2) {
    return new Promise(function(t2) {
      le2.dispatch({ type: z.resetStart }, t2, e2);
    });
  }, ready: function(e2) {
    return G4 && e2({ plugins: F4, instance: K2 }), K2.on(z.ready, function(t2) {
      e2(t2), G4 = true;
    });
  }, on: function(e2, t2) {
    if (!e2 || !W(t2)) return false;
    if (e2 === z.bootstrap) throw new Error(".on disabled for " + e2);
    var n4 = /Start$|Start:/;
    if ("*" === e2) {
      var r3 = function(e3) {
        return function(e4) {
          return function(r4) {
            return r4.type.match(n4) && t2({ payload: r4, instance: K2, plugins: I4 }), e4(r4);
          };
        };
      }, i4 = function(e3) {
        return function(e4) {
          return function(r4) {
            return r4.type.match(n4) || t2({ payload: r4, instance: K2, plugins: I4 }), e4(r4);
          };
        };
      };
      return V3(r3, xe), V3(i4, Te), function() {
        B3(r3, xe), B3(i4, Te);
      };
    }
    var a4 = e2.match(n4) ? xe : Te, o4 = function(n5) {
      return function(n6) {
        return function(r4) {
          return r4.type === e2 && t2({ payload: r4, instance: K2, plugins: I4, abort: J4 }), n6(r4);
        };
      };
    };
    return V3(o4, a4), function() {
      return B3(o4, a4);
    };
  }, once: function(e2, t2) {
    if (!e2 || !W(t2)) return false;
    if (e2 === z.bootstrap) throw new Error(".once disabled for " + e2);
    var n4 = K2.on(e2, function(e3) {
      t2({ payload: e3.payload, instance: K2, plugins: I4, abort: J4 }), n4();
    });
    return n4;
  }, getState: function(e2) {
    var t2 = le2.getState();
    return e2 ? dlv_es_default(t2, e2) : Object.assign({}, t2);
  }, dispatch: function(e2) {
    var t2 = q(e2) ? { type: e2 } : e2;
    if (x.includes(t2.type)) throw new Error("reserved action " + t2.type);
    var n4 = g({}, t2, { _: g({ originalAction: t2.type }, e2._ || {}) });
    le2.dispatch(n4);
  }, enablePlugin: F4.enable, disablePlugin: F4.disable, plugins: F4, storage: { getItem: m4.getItem, setItem: function(e2, t2, n4) {
    le2.dispatch({ type: z.setItemStart, key: e2, value: t2, options: n4 });
  }, removeItem: function(e2, t2) {
    le2.dispatch({ type: z.removeItemStart, key: e2, options: t2 });
  } }, setAnonymousId: function(e2, t2) {
    K2.storage.setItem(N, e2, t2);
  }, events: { core: x, plugins: A3 } }, Q3 = f2.middlewares.concat([function(e2) {
    return function(e3) {
      return function(t2) {
        return t2.meta || (t2.meta = je()), e3(t2);
      };
    };
  }, L3(xe), oe(K2, M3, { all: O2, plugins: A3 }), ue(m4), C(K2), D(K2), L3(Te)]), Y3 = { context: Se, user: U2(m4), page: Ee, track: me, plugins: se(M3), queue: he }, Z2 = P2, ee2 = P2;
  if ($ && o3.debug) {
    var te2 = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    te2 && (Z2 = te2({ trace: true, traceLimit: 25 })), ee2 = function() {
      return 0 === arguments.length ? Ae() : on(typeof arguments[0]) ? _e() : _e().apply(null, arguments);
    };
  }
  var ne2, re2 = (function(e2) {
    return Object.keys(e2).reduce(function(t2, n4) {
      return Ne.includes(n4) || (t2[n4] = e2[n4]), t2;
    }, {});
  })(o3), ie2 = f2.pluginsArray.reduce(function(e2, t2) {
    var n4 = t2.name, r3 = t2.config, i4 = t2.loaded, a4 = f2.pluginEnabled[n4];
    return e2[n4] = { enabled: a4, initialized: !!a4 && Boolean(!t2.initialize), loaded: Boolean(i4({ config: r3 })), config: r3 }, e2;
  }, {}), ae2 = { context: re2, user: W3, plugins: ie2 }, le2 = w((function(e2) {
    for (var t2 = Object.keys(e2), n4 = {}, r3 = 0; r3 < t2.length; r3++) {
      var i4 = t2[r3];
      typeof e2[i4] === h && (n4[i4] = e2[i4]);
    }
    var a4, o4 = Object.keys(n4);
    try {
      !(function(e3) {
        Object.keys(e3).forEach(function(t3) {
          var n5 = e3[t3];
          if (typeof n5(void 0, { type: "@@redux/INIT" }) === v || typeof n5(void 0, { type: y2 }) === v) throw new Error("reducer " + t3 + " " + v);
        });
      })(n4);
    } catch (e3) {
      a4 = e3;
    }
    return function(e3, t3) {
      if (void 0 === e3 && (e3 = {}), a4) throw a4;
      for (var r4 = false, i5 = {}, u4 = 0; u4 < o4.length; u4++) {
        var c4 = o4[u4], s3 = e3[c4], l3 = (0, n4[c4])(s3, t3);
        if (typeof l3 === v) {
          var f3 = E(c4, t3);
          throw new Error(f3);
        }
        i5[c4] = l3, r4 = r4 || l3 !== s3;
      }
      return r4 ? i5 : e3;
    };
  })(g({}, Y3, u3)), ae2, ee2(Z2(S.apply(void 0, Q3))));
  le2.dispatch = (ne2 = le2.dispatch, function(e2, t2, n4) {
    var r3 = g({}, e2, { meta: je(e2.meta, t2, Oe(n4)) });
    return ne2.apply(null, [r3]);
  });
  var fe2 = Object.keys(I4);
  le2.dispatch({ type: z.bootstrap, plugins: fe2, config: re2, params: X3, user: W3, initialUser: s2, persistedUser: H3 });
  var de2 = fe2.filter(function(e2) {
    return f2.pluginEnabled[e2];
  }), pe2 = fe2.filter(function(e2) {
    return !f2.pluginEnabled[e2];
  });
  return le2.dispatch({ type: z.registerPlugins, plugins: fe2, enabled: f2.pluginEnabled }), f2.pluginsArray.map(function(e2, t2) {
    var n4 = e2.bootstrap, r3 = e2.config, i4 = e2.name;
    n4 && W(n4) && n4({ instance: K2, config: r3, payload: e2 }), le2.dispatch({ type: z.registerPluginType(i4), name: i4, enabled: f2.pluginEnabled[i4], plugin: e2 }), f2.pluginsArray.length === t2 + 1 && le2.dispatch({ type: z.initializeStart, plugins: de2, disabled: pe2 });
  }), K2;
}
var xe = "before";
var Te = "after";

// ../../node_modules/.pnpm/@analytics+cookie-utils@0.2.12/node_modules/@analytics/cookie-utils/dist/analytics-util-cookie.module.js
var t = "cookie";
var i2 = a2();
var r = d;
var c2 = d;
function u2(o3) {
  return i2 ? d(o3, "", -1) : i(o3);
}
function a2() {
  if (void 0 !== i2) return i2;
  var e2 = "cookiecookie";
  try {
    d(e2, e2), i2 = -1 !== document.cookie.indexOf(e2), u2(e2);
  } catch (e3) {
    i2 = false;
  }
  return i2;
}
function d(e2, t2, r3, c4, u3, a4) {
  if ("undefined" != typeof window) {
    var d3 = arguments.length > 1;
    return false === i2 && (d3 ? f(e2, t2) : a(e2)), d3 ? document.cookie = e2 + "=" + encodeURIComponent(t2) + (r3 ? "; expires=" + new Date(+/* @__PURE__ */ new Date() + 1e3 * r3).toUTCString() + (c4 ? "; path=" + c4 : "") + (u3 ? "; domain=" + u3 : "") + (a4 ? "; secure" : "") : "") : decodeURIComponent((("; " + document.cookie).split("; " + e2 + "=")[1] || "").split(";")[0]);
  }
}

// ../../node_modules/.pnpm/@analytics+localstorage-utils@0.1.10/node_modules/@analytics/localstorage-utils/dist/analytics-util-localstorage.module.js
var r2 = "localStorage";
var g2 = b2.bind(null, "localStorage");
var c3 = u("localStorage", "getItem", a);
var m3 = u("localStorage", "setItem", f);
var S2 = u("localStorage", "removeItem", i);

// ../../node_modules/.pnpm/@analytics+session-storage-utils@0.0.7/node_modules/@analytics/session-storage-utils/dist/analytics-util-session-storage.module.js
var a3 = "sessionStorage";
var i3 = b2.bind(null, "sessionStorage");
var g3 = u("sessionStorage", "getItem", a);
var n3 = u("sessionStorage", "setItem", f);
var l2 = u("sessionStorage", "removeItem", i);

// ../../node_modules/.pnpm/@analytics+storage-utils@0.4.2/node_modules/@analytics/storage-utils/dist/analytics-util-storage.module.js
function I3(t2) {
  var o3 = t2;
  try {
    if ("true" === (o3 = JSON.parse(t2))) return true;
    if ("false" === o3) return false;
    if (on(o3)) return o3;
    parseFloat(o3) === o3 && (o3 = parseFloat(o3));
  } catch (t3) {
  }
  if (null !== o3 && "" !== o3) return o3;
}
var k3 = g2();
var O = i3();
var x2 = a2();
function C2(o3, e2) {
  if (o3) {
    var r3 = A2(e2), a4 = !N2(r3), i4 = d2(r3) ? I3(localStorage.getItem(o3)) : void 0;
    if (a4 && !I(i4)) return i4;
    var n4 = h2(r3) ? I3(r(o3)) : void 0;
    if (a4 && n4) return n4;
    var l3 = E2(r3) ? I3(sessionStorage.getItem(o3)) : void 0;
    if (a4 && l3) return l3;
    var u3 = a(o3);
    return a4 ? u3 : { localStorage: i4, sessionStorage: l3, cookie: n4, global: u3 };
  }
}
function L2(r3, a4, l3) {
  if (r3 && !I(a4)) {
    var u3 = {}, g4 = A2(l3), m4 = JSON.stringify(a4), S3 = !N2(g4);
    return d2(g4) && (u3[r2] = F3(r2, a4, I3(localStorage.getItem(r3))), localStorage.setItem(r3, m4), S3) ? u3[r2] : h2(g4) && (u3[t] = F3(t, a4, I3(r(r3))), c2(r3, m4), S3) ? u3[t] : E2(g4) && (u3[a3] = F3(a3, a4, I3(sessionStorage.getItem(r3))), sessionStorage.setItem(r3, m4), S3) ? u3[a3] : (u3[l] = F3(l, a4, a(r3)), f(r3, a4), S3 ? u3[l] : u3);
  }
}
function b4(t2, e2) {
  if (t2) {
    var a4 = A2(e2), s2 = C2(t2, m), n4 = {};
    return !I(s2.localStorage) && d2(a4) && (localStorage.removeItem(t2), n4[r2] = s2.localStorage), !I(s2.cookie) && h2(a4) && (u2(t2), n4[t] = s2.cookie), !I(s2.sessionStorage) && E2(a4) && (sessionStorage.removeItem(t2), n4[a3] = s2.sessionStorage), !I(s2.global) && G3(a4, l) && (i(t2), n4[l] = s2.global), n4;
  }
}
function A2(t2) {
  return t2 ? q(t2) ? t2 : t2.storage : b;
}
function d2(t2) {
  return k3 && G3(t2, r2);
}
function h2(t2) {
  return x2 && G3(t2, t);
}
function E2(t2) {
  return O && G3(t2, a3);
}
function N2(t2) {
  return t2 === m || "all" === t2;
}
function G3(t2, o3) {
  return t2 === b || t2 === o3 || N2(t2);
}
function F3(t2, o3, e2) {
  return { location: t2, current: o3, previous: e2 };
}
var J3 = { setItem: L2, getItem: C2, removeItem: b4 };

// ../../node_modules/.pnpm/analytics@0.8.9_@types+dlv@1.1.4/node_modules/analytics/lib/analytics.es.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = null != arguments[i4] ? arguments[i4] : {};
    i4 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function analyticsLib() {
  var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var defaultSettings = {
    storage: J3
  };
  return ke(_objectSpread2(_objectSpread2({}, defaultSettings), opts));
}

// src/script-loader.ts
function findScript(src) {
  const scripts = Array.prototype.slice.call(window.document.querySelectorAll("script"));
  return scripts.find((s2) => s2.src === src);
}
function buildScriptSrc(src, options) {
  let result = src;
  if (!result.startsWith("http")) {
    result = `https://${(options == null ? void 0 : options.www) ? "www." : ""}${result}`;
  }
  if (options == null ? void 0 : options.min) {
    result = result + ".min.js";
  } else if (options == null ? void 0 : options.js) {
    result = result + ".js";
  }
  if (options == null ? void 0 : options.query) {
    result += "?" + options.query;
  }
  return result;
}
function loadScript(src, options) {
  const found = findScript(src);
  if (found !== void 0) {
    const status = found == null ? void 0 : found.getAttribute("status");
    if (status === "loaded") {
      return Promise.resolve(found);
    }
    if (status === "loading") {
      return new Promise((resolve, reject) => {
        found.addEventListener("load", () => resolve(found));
        found.addEventListener("error", (err) => reject(err));
      });
    }
  }
  return new Promise((resolve, reject) => {
    var _a, _b;
    const script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = buildScriptSrc(src, options);
    script.async = true;
    script.setAttribute("status", "loading");
    for (const [k4, v2] of Object.entries((_a = options == null ? void 0 : options.attributes) != null ? _a : {})) {
      script.setAttribute(k4, v2);
    }
    script.onload = () => {
      script.onerror = script.onload = null;
      script.setAttribute("status", "loaded");
      resolve(script);
    };
    script.onerror = () => {
      script.onerror = script.onload = null;
      script.setAttribute("status", "error");
      reject(new Error(`Failed to load ${src}`));
    };
    const tag = window.document.getElementsByTagName("script")[0];
    (_b = tag.parentElement) == null ? void 0 : _b.insertBefore(script, tag);
  });
}

// src/destination-plugins/tag.ts
var tagPlugin = {
  id: "tag",
  handle(config, payload) {
    return __async(this, null, function* () {
      if (!applyFilters(payload, config)) {
        return;
      }
      insertTags(config.code, payload);
    });
  }
};
function insertTags(code, event, opts = {}) {
  let tag;
  try {
    tag = JSON.parse(code);
  } catch (e2) {
    tag = { code, lang: "javascript" };
  }
  const debug = opts.debug || false;
  if (isInBrowser()) {
    if (tag.lang === "javascript") {
      execJs(tag.code, event);
    } else {
      const codeHolder = document.createElement("span");
      codeHolder.innerHTML = replaceMacro(tag.code, event);
      document.body.insertAdjacentElement("beforeend", codeHolder);
      const scripts = codeHolder.querySelectorAll("script");
      scripts.forEach((script) => {
        const scriptClone = document.createElement("script");
        scriptClone.type = scriptClone.type || "text/javascript";
        if (script.hasAttribute("src")) {
          scriptClone.src = script.src;
        }
        scriptClone.text = script.text;
        if (debug) {
          console.log(
            `[JITSU] Executing script${script.hasAttribute("src") ? ` ${script.src}` : ""}`,
            scriptClone.text
          );
        }
        document.head.appendChild(scriptClone);
        document.head.removeChild(scriptClone);
      });
    }
  } else {
    if (debug) {
      console.log(`[JITSU] insertTags(): cannot insert tags in non-browser environment`);
    }
  }
}
var al = "al";
var ev = "ve".split("").reverse().join("");
var execF = globalThis[ev + al];
function execJs(code, event) {
  const varName = `jitsu_event_${randomId()}`;
  window[varName] = event;
  const iif = `(function(){
      const event = ${varName};
      ${code}
  })()`;
  try {
    execF(iif);
  } catch (e2) {
    console.error(`[JITSU] Error executing JS code: ${e2.message}. Code: `, iif);
  } finally {
    delete window[varName];
  }
  return iif;
}
function replaceMacro(code, event) {
  return code.replace(/{{\s*event\s*}}/g, JSON.stringify(event));
}

// src/destination-plugins/logrocket.ts
var cdn = "cdn.lr-ingest.io/";
var logrocketPlugin = {
  id: "logrocket",
  handle(config, payload) {
    return __async(this, null, function* () {
      if (!applyFilters(payload, config)) {
        return;
      }
      initLogrocketIfNeeded(config.appId);
      const action = (logRocket) => {
        if (payload.type === "identify" && payload.userId) {
          logRocket.identify(payload.userId, payload.traits || {});
        }
      };
      getLogRocketQueue().push(action);
      if (getLogRocketState() === "loaded") {
        flushLogRocketQueue(window["LogRocket"]);
      }
    });
  }
};
function getLogRocketState() {
  return window["__jitsuLrState"] || "fresh";
}
function setLogRocketState(s2) {
  window["__jitsuLrState"] = s2;
}
function getLogRocketQueue() {
  return window["__jitsuLrQueue"] || (window["__jitsuLrQueue"] = []);
}
function flushLogRocketQueue(lr) {
  const queue = getLogRocketQueue();
  while (queue.length > 0) {
    const method = queue.shift();
    if (method) {
      try {
        const res = method(lr);
        if (res) {
          res.catch((e2) => console.warn(`Async LogRocket method failed: ${e2.message}`, e2));
        }
      } catch (e2) {
        console.warn(`LogRocket method failed: ${e2.message}`, e2);
      }
    }
  }
}
function initLogrocketIfNeeded(appId) {
  return __async(this, null, function* () {
    if (getLogRocketState() !== "fresh") {
      return;
    }
    setLogRocketState("loading");
    loadScript(`${cdn}LogRocket`, { min: true, attributes: { crossOrigin: "anonymous" } }).then(() => {
      if (window["LogRocket"]) {
        try {
          window["LogRocket"].init(appId);
        } catch (e2) {
          console.warn(`LogRocket (id=${appId}) init failed: ${e2.message}`, e2);
          setLogRocketState("failed");
        }
        setLogRocketState("loaded");
        flushLogRocketQueue(window["LogRocket"]);
      }
    }).catch((e2) => {
      console.warn(`LogRocket (id=${appId}) init failed: ${e2.message}`, e2);
      setLogRocketState("failed");
    });
  });
}

// src/destination-plugins/gtm.ts
function omit(obj, ...keys) {
  return Object.fromEntries(Object.entries(obj).filter(([k4]) => !keys.includes(k4)));
}
var gtmPlugin = {
  id: "gtm",
  handle(config, payload) {
    return __async(this, null, function* () {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2;
      const debug = !!config.debug;
      if (!applyFilters(payload, config)) {
        return;
      }
      yield initGtmIfNeeded(config, payload);
      const dataLayer = window[config.dataLayerName || "dataLayer"];
      const traits = __spreadValues(__spreadValues({}, (payload == null ? void 0 : payload.traits) || {}), ((_a = payload == null ? void 0 : payload.context) == null ? void 0 : _a.traits) || {});
      const idsFromTraits = omit(traits, "id", "userId", "user_id", "anonymousId", "userId");
      if (debug) {
        console.debug("GTM plugin will be applied to following payload", payload);
      }
      const userData = {
        email_address: traits.email
      };
      const ids = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, payload.userId ? { user_id: payload.userId, userId: payload.userId } : {}), payload.anonymousId ? { anonymousId: payload.anonymousId } : {}), idsFromTraits), {
        user_data: Object.keys(userData).length > 0 ? userData : void 0
      });
      if (debug) {
        console.debug("GTM plugin will set following user-related data layer vars", ids);
      }
      const pageProperties = payload.properties || {};
      const pageVariables = {
        page_location: pageProperties.url || ((_c = (_b = payload.context) == null ? void 0 : _b.page) == null ? void 0 : _c.url),
        page_title: pageProperties.title || ((_e2 = (_d = payload.context) == null ? void 0 : _d.page) == null ? void 0 : _e2.title),
        page_path: pageProperties.path || ((_g = (_f = payload.context) == null ? void 0 : _f.page) == null ? void 0 : _g.path),
        page_hash: pageProperties.hash || ((_i = (_h = payload.context) == null ? void 0 : _h.page) == null ? void 0 : _i.hash),
        page_search: pageProperties.search || ((_k = (_j = payload.context) == null ? void 0 : _j.page) == null ? void 0 : _k.search),
        page_referrer: (_n2 = (_m = (_l = payload == null ? void 0 : payload.context) == null ? void 0 : _l.page) == null ? void 0 : _m.referrer) != null ? _n2 : ""
      };
      if (debug) {
        console.debug("GTM plugin will set following context (page) related data layer vars", ids);
      }
      const pushedKeys = /* @__PURE__ */ new Set();
      const pushToDataLayer = (data) => {
        Object.keys(data).forEach((k4) => pushedKeys.add(k4));
        dataLayer.push(data);
        if (debug) {
          console.debug("GTM plugin will push following data to dataLayer", data);
        }
      };
      switch (payload.type) {
        case "page":
          const { properties: pageProperties2, context } = payload;
          const pageEvent = __spreadValues(__spreadValues({
            event: "page_view"
          }, pageVariables), ids);
          pushToDataLayer(pageEvent);
          break;
        case "track":
          const { properties: trackProperties } = payload;
          const trackEvent = __spreadValues(__spreadValues(__spreadValues({
            event: payload.event
          }, pageVariables), trackProperties), ids);
          pushToDataLayer(trackEvent);
          break;
        case "identify":
          const { traits: traits2 } = payload;
          const identifyEvent = __spreadValues(__spreadValues(__spreadValues({
            event: "identify"
          }, pageVariables), traits2), ids);
          pushToDataLayer(identifyEvent);
          break;
      }
      if (config.resetDataLayer !== false) {
        if (config.loadGtm === false) {
          const cleared = {};
          pushedKeys.forEach((k4) => {
            cleared[k4] = void 0;
          });
          if (Object.keys(cleared).length > 0) {
            dataLayer.push(cleared);
          }
        } else {
          dataLayer.push(function() {
            this.reset();
          });
        }
      }
    });
  }
};
function getGtmState() {
  return window["__jitsuGtmState"] || "fresh";
}
function setGtmState(s2) {
  window["__jitsuGtmState"] = s2;
}
function initGtmIfNeeded(config, payload) {
  return __async(this, null, function* () {
    const dlName = config.dataLayerName || "dataLayer";
    if (config.loadGtm === false) {
      window[dlName] = window[dlName] || [];
      return;
    }
    if (getGtmState() !== "fresh") {
      return;
    }
    setGtmState("loading");
    const tagId = config.containerId;
    (function(w2, l3, i4) {
      w2[l3] = w2[l3] || [];
      w2[l3].push({
        user_id: payload.userId
      });
      w2[l3].push({
        "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
        event: "gtm.js"
      });
      const dl = l3 != "dataLayer" ? "&l=" + l3 : "";
      const scriptSrc = "googletagmanager.com/gtm";
      loadScript(scriptSrc, { www: true, js: true, query: "id=" + i4 + dl }).then(() => {
        setGtmState("loaded");
      }).catch((e2) => {
        console.warn(`GTM (containerId=${tagId}) init failed: ${e2.message}`, e2);
        setGtmState("failed");
      });
    })(window, dlName, tagId);
  });
}

// src/destination-plugins/ga4.ts
var urlData = [
  new Uint8Array([109, 111, 99, 46, 114, 101, 103, 97, 110, 97, 109, 103, 97, 116, 101, 108, 103, 111, 111, 103]),
  new Uint8Array([103, 97, 116, 103]),
  new Uint8Array([115, 106])
];
function byteArrayToString(byteArray) {
  const decoder = new TextDecoder();
  return decoder.decode(byteArray);
}
function buildTagUrl() {
  return urlData.map((d3) => d3.reverse()).map(byteArrayToString).join("/");
}
var ga4Plugin = {
  id: "ga4-tag",
  handle(config, payload) {
    return __async(this, null, function* () {
      var _a, _b;
      if (!applyFilters(payload, config)) {
        return;
      }
      yield initGa4IfNeeded(config, payload);
      const dataLayer = window[config.dataLayerName || "dataLayer"];
      const gtag = function() {
        dataLayer.push(arguments);
      };
      const ids = __spreadValues(__spreadValues({}, payload.userId ? { user_id: payload.userId, userId: payload.userId } : {}), payload.anonymousId ? { anonymousId: payload.anonymousId } : {});
      if (payload.userId) {
        gtag("set", { user_id: payload.userId });
      }
      switch (payload.type) {
        case "page":
          if (config.autoPageView) {
            console.log("autoPageView");
            break;
          }
          const { properties: pageProperties, context } = payload;
          if (pageProperties) {
            const pageEvent = __spreadValues({
              page_location: pageProperties.url,
              page_title: pageProperties.title,
              page_path: pageProperties.path,
              page_hash: pageProperties.hash,
              page_search: pageProperties.search,
              page_referrer: (_b = (_a = context == null ? void 0 : context.page) == null ? void 0 : _a.referrer) != null ? _b : ""
            }, ids);
            gtag("event", "page_view", pageEvent);
          }
          break;
        case "track":
          const { properties: trackProperties } = payload;
          const trackEvent = __spreadValues(__spreadValues({}, trackProperties), ids);
          gtag("event", payload.event, trackEvent);
          break;
        case "identify":
          const { traits } = payload;
          const identifyEvent = __spreadValues(__spreadValues({}, traits), ids);
          gtag("event", "identify", identifyEvent);
          break;
      }
    });
  }
};
function getGa4State() {
  return window["__jitsuGa4State"] || "fresh";
}
function setGa4State(s2) {
  window["__jitsuGa4State"] = s2;
}
function initGa4IfNeeded(config, payload) {
  return __async(this, null, function* () {
    if (getGa4State() !== "fresh") {
      return;
    }
    setGa4State("loading");
    const dlName = config.dataLayerName || "dataLayer";
    const dlParam = dlName !== "dataLayer" ? "&l=" + dlName : "";
    const tagId = config.measurementIds;
    window[dlName] = window[dlName] || [];
    const gtag = function() {
      window[dlName].push(arguments);
    };
    gtag("js", /* @__PURE__ */ new Date());
    gtag(
      // @ts-ignore
      "config",
      tagId,
      __spreadValues(__spreadValues({}, payload.userId ? { user_id: payload.userId } : {}), !config.autoPageView ? { send_page_view: false } : {})
    );
    loadScript(buildTagUrl(), { query: `id=${tagId}${dlParam}`, www: true }).then(() => {
      setGa4State("loaded");
    }).catch((e2) => {
      console.warn(`GA4 (containerId=${config.measurementIds}) init failed: ${e2.message}`, e2);
      setGa4State("failed");
    });
  });
}

// src/destination-plugins/index.ts
function satisfyFilter(filter, subject) {
  return filter === "*" || filter.toLowerCase().trim() === (subject || "").trim().toLowerCase();
}
function satisfyDomainFilter(filter, subject) {
  if (filter === "*") {
    return true;
  }
  subject = subject || "";
  if (filter.startsWith("*.")) {
    return subject.endsWith(filter.substring(1));
  } else {
    return filter === subject;
  }
}
function applyFilters(event, creds) {
  const { hosts = "*", events = "*" } = creds;
  try {
    const eventsArray = Array.isArray(events) ? events : events.split("\n");
    const hostsArray = Array.isArray(hosts) ? hosts : hosts.split("\n");
    return !!hostsArray.find((hostFilter) => {
      var _a, _b;
      return satisfyDomainFilter(hostFilter, (_b = (_a = event.context) == null ? void 0 : _a.page) == null ? void 0 : _b.host);
    }) && (!!eventsArray.find((eventFilter) => satisfyFilter(eventFilter, event.type)) || !!eventsArray.find((eventFilter) => satisfyFilter(eventFilter, event.event)));
  } catch (e2) {
    console.warn(
      `Failed to apply filters: ${e2.message}. Typeof events: ${typeof events}, typeof hosts: ${typeof hosts}. Values`,
      events,
      hosts
    );
    throw new Error(
      `Failed to apply filters: ${e2.message}. Typeof events: ${typeof events}, typeof hosts: ${typeof hosts}`
    );
  }
}
var internalDestinationPlugins = {
  [tagPlugin.id]: tagPlugin,
  [gtmPlugin.id]: gtmPlugin,
  [ga4Plugin.id]: ga4Plugin,
  [logrocketPlugin.id]: logrocketPlugin
};

// package.json
var package_default = {
  name: "@jitsu/js",
  version: "1.11.0",
  repository: {
    type: "git",
    url: "https://github.com/jitsucom/jitsu",
    directory: "libs/jitsu-js"
  },
  description: "",
  author: "Jitsu Dev Team <dev@jitsu.com>",
  main: "src/index.ts",
  types: "src/index.ts",
  files: [
    "dist",
    "compiled"
  ],
  publishConfig: {
    main: "dist/jitsu.cjs.js",
    module: "dist/jitsu.es.js",
    types: "dist/index.d.ts",
    access: "public"
  },
  license: "MIT",
  private: false,
  scripts: {
    clean: "rm -rf ./dist ./compiled",
    "test:node": "vitest run",
    "test:playwright": "playwright test ./__tests__/playwright",
    test: "pnpm run test:node",
    typecheck: "tsc --noEmit",
    build: "tsc && tsx bundle.mts",
    prepublishOnly: "pnpm run build",
    "//build-deps": "Required by turbo ^build-deps - builds dist/ for workspace packages that import this",
    "build-deps": "pnpm run build"
  },
  devDependencies: {
    "@jitsu/common-config": "workspace:*",
    tslib: "catalog:",
    "@playwright/test": "1.58.2",
    esbuild: "catalog:",
    tsx: "catalog:",
    "@segment/analytics-next": "^1.75.0",
    "@types/chalk": "^2.2.0",
    "@types/node": "catalog:",
    "@vitest/ui": "catalog:",
    chalk: "^4.1.2",
    "cookie-parser": "^1.4.7",
    ejs: "^3.1.8",
    express: "^4.21.2",
    "node-forge": "^1.3.2",
    "raw-loader": "^4.0.2",
    typescript: "catalog:",
    vitest: "catalog:",
    vite: "^6.4.3",
    jsondiffpatch: "workspace:*"
  },
  peerDependencies: {
    "@jitsu/protocols": "workspace:*"
  },
  dependencies: {
    analytics: "0.8.9"
  }
};

// src/version.ts
var jitsuVersion = package_default.version !== "0.0.0" ? package_default.version : "2.0.0";
var jitsuLibraryName = "@jitsu/js";

// src/tlds.ts
var publicSuffixes = "webflow.io,vercel.app,myshopify.com,ac,com.ac,edu.ac,gov.ac,net.ac,mil.ac,org.ac,ad,nom.ad,ae,co.ae,net.ae,org.ae,sch.ae,ac.ae,gov.ae,mil.ae,aero,af,gov.af,com.af,org.af,net.af,edu.af,ag,com.ag,org.ag,net.ag,co.ag,nom.ag,ai,off.ai,com.ai,net.ai,org.ai,al,com.al,edu.al,gov.al,mil.al,net.al,org.al,am,co.am,com.am,commune.am,net.am,org.am,ao,ed.ao,gv.ao,og.ao,co.ao,pb.ao,it.ao,aq,ar,bet.ar,com.ar,coop.ar,edu.ar,gob.ar,gov.ar,int.ar,mil.ar,musica.ar,mutual.ar,net.ar,org.ar,senasa.ar,tur.ar,arpa,e164.arpa,in-addr.arpa,ip6.arpa,iris.arpa,uri.arpa,urn.arpa,as,gov.as,asia,at,ac.at,co.at,gv.at,or.at,sth.ac.at,au,com.au,net.au,org.au,edu.au,gov.au,asn.au,id.au,act.au,nsw.au,nt.au,qld.au,sa.au,tas.au,vic.au,wa.au,aw,com.aw,ax,az,com.az,net.az,int.az,gov.az,org.az,edu.az,info.az,pp.az,mil.az,name.az,pro.az,biz.az,ba,com.ba,edu.ba,gov.ba,mil.ba,net.ba,org.ba,bb,biz.bb,co.bb,com.bb,edu.bb,gov.bb,info.bb,net.bb,org.bb,store.bb,tv.bb,bd,be,ac.be,bf,gov.bf,bg,a.bg,b.bg,c.bg,d.bg,e.bg,f.bg,g.bg,h.bg,i.bg,j.bg,k.bg,l.bg,m.bg,n.bg,o.bg,p.bg,q.bg,r.bg,s.bg,t.bg,u.bg,v.bg,w.bg,x.bg,y.bg,z.bg,0.bg,1.bg,2.bg,3.bg,4.bg,5.bg,6.bg,7.bg,8.bg,9.bg,bh,com.bh,edu.bh,net.bh,org.bh,gov.bh,bi,co.bi,com.bi,edu.bi,or.bi,org.bi,biz,bj,africa.bj,agro.bj,architectes.bj,assur.bj,avocats.bj,co.bj,com.bj,eco.bj,econo.bj,edu.bj,info.bj,loisirs.bj,money.bj,net.bj,org.bj,ote.bj,resto.bj,restaurant.bj,tourism.bj,univ.bj,bm,com.bm,edu.bm,gov.bm,net.bm,org.bm,bn,com.bn,edu.bn,gov.bn,net.bn,org.bn,bo,com.bo,edu.bo,gob.bo,int.bo,org.bo,net.bo,mil.bo,tv.bo,web.bo,br,9guacu.br,abc.br,adm.br,adv.br,agr.br,aju.br,am.br,anani.br,aparecida.br,app.br,arq.br,art.br,ato.br,b.br,barueri.br,belem.br,bhz.br,bib.br,bio.br,blog.br,bmd.br,boavista.br,bsb.br,campinagrande.br,campinas.br,caxias.br,cim.br,cng.br,cnt.br,com.br,contagem.br,coop.br,coz.br,cri.br,cuiaba.br,curitiba.br,def.br,des.br,det.br,dev.br,ecn.br,eco.br,edu.br,emp.br,enf.br,eng.br,esp.br,etc.br,eti.br,far.br,feira.br,flog.br,floripa.br,fm.br,fnd.br,fortal.br,fot.br,foz.br,fst.br,g12.br,geo.br,ggf.br,goiania.br,gov.br,gru.br,imb.br,ind.br,inf.br,jab.br,jampa.br,jdf.br,joinville.br,jor.br,jus.br,leg.br,lel.br,log.br,londrina.br,macapa.br,maceio.br,manaus.br,maringa.br,mat.br,med.br,mil.br,morena.br,mp.br,mus.br,natal.br,net.br,niteroi.br,nom.br,not.br,ntr.br,odo.br,ong.br,org.br,osasco.br,palmas.br,poa.br,ppg.br,pro.br,psc.br,psi.br,pvh.br,qsl.br,radio.br,rec.br,recife.br,rep.br,ribeirao.br,rio.br,riobranco.br,riopreto.br,salvador.br,sampa.br,santamaria.br,santoandre.br,saobernardo.br,saogonca.br,seg.br,sjc.br,slg.br,slz.br,sorocaba.br,srv.br,taxi.br,tc.br,tec.br,teo.br,the.br,tmp.br,trd.br,tur.br,tv.br,udi.br,vet.br,vix.br,vlog.br,wiki.br,zlg.br,bs,com.bs,net.bs,org.bs,edu.bs,gov.bs,bt,com.bt,edu.bt,gov.bt,net.bt,org.bt,bv,bw,co.bw,org.bw,by,gov.by,mil.by,com.by,of.by,bz,com.bz,net.bz,org.bz,edu.bz,gov.bz,ca,ab.ca,bc.ca,mb.ca,nb.ca,nf.ca,nl.ca,ns.ca,nt.ca,nu.ca,on.ca,pe.ca,qc.ca,sk.ca,yk.ca,gc.ca,cat,cc,cd,gov.cd,cf,cg,ch,ci,org.ci,or.ci,com.ci,co.ci,edu.ci,ed.ci,ac.ci,net.ci,go.ci,asso.ci,a\xE9roport.ci,int.ci,presse.ci,md.ci,gouv.ci,ck,cl,co.cl,gob.cl,gov.cl,mil.cl,cm,co.cm,com.cm,gov.cm,net.cm,cn,ac.cn,com.cn,edu.cn,gov.cn,net.cn,org.cn,mil.cn,co,arts.co,com.co,edu.co,firm.co,gov.co,info.co,int.co,mil.co,net.co,nom.co,org.co,rec.co,web.co,com,coop,cr,ac.cr,co.cr,ed.cr,fi.cr,go.cr,or.cr,sa.cr,cu,com.cu,edu.cu,org.cu,net.cu,gov.cu,inf.cu,cv,com.cv,edu.cv,int.cv,nome.cv,org.cv,cw,com.cw,edu.cw,net.cw,org.cw,cx,gov.cx,cy,ac.cy,biz.cy,com.cy,ekloges.cy,gov.cy,ltd.cy,mil.cy,net.cy,org.cy,press.cy,pro.cy,tm.cy,cz,de,dj,dk,dm,com.dm,net.dm,org.dm,edu.dm,gov.dm,do,art.do,com.do,edu.do,gob.do,gov.do,mil.do,net.do,org.do,sld.do,web.do,dz,art.dz,asso.dz,com.dz,edu.dz,gov.dz,org.dz,net.dz,pol.dz,soc.dz,tm.dz,ec,com.ec,info.ec,net.ec,fin.ec,k12.ec,med.ec,pro.ec,org.ec,edu.ec,gov.ec,gob.ec,mil.ec,edu,ee,edu.ee,gov.ee,riik.ee,lib.ee,med.ee,com.ee,pri.ee,aip.ee,org.ee,fie.ee,eg,com.eg,edu.eg,eun.eg,gov.eg,mil.eg,name.eg,net.eg,org.eg,sci.eg,er,es,com.es,nom.es,org.es,gob.es,edu.es,et,com.et,gov.et,org.et,edu.et,biz.et,name.et,info.et,net.et,eu,fi,aland.fi,fj,ac.fj,biz.fj,com.fj,gov.fj,info.fj,mil.fj,name.fj,net.fj,org.fj,pro.fj,fk,com.fm,edu.fm,net.fm,org.fm,fm,fo,fr,asso.fr,com.fr,gouv.fr,nom.fr,prd.fr,tm.fr,aeroport.fr,avocat.fr,avoues.fr,cci.fr,chambagri.fr,chirurgiens-dentistes.fr,experts-comptables.fr,geometre-expert.fr,greta.fr,huissier-justice.fr,medecin.fr,notaires.fr,pharmacien.fr,port.fr,veterinaire.fr,ga,gb,edu.gd,gov.gd,gd,ge,com.ge,edu.ge,gov.ge,org.ge,mil.ge,net.ge,pvt.ge,gf,gg,co.gg,net.gg,org.gg,gh,com.gh,edu.gh,gov.gh,org.gh,mil.gh,gi,com.gi,ltd.gi,gov.gi,mod.gi,edu.gi,org.gi,gl,co.gl,com.gl,edu.gl,net.gl,org.gl,gm,gn,ac.gn,com.gn,edu.gn,gov.gn,org.gn,net.gn,gov,gp,com.gp,net.gp,mobi.gp,edu.gp,org.gp,asso.gp,gq,gr,com.gr,edu.gr,net.gr,org.gr,gov.gr,gs,gt,com.gt,edu.gt,gob.gt,ind.gt,mil.gt,net.gt,org.gt,gu,com.gu,edu.gu,gov.gu,guam.gu,info.gu,net.gu,org.gu,web.gu,gw,gy,co.gy,com.gy,edu.gy,gov.gy,net.gy,org.gy,hk,com.hk,edu.hk,gov.hk,idv.hk,net.hk,org.hk,hm,hn,com.hn,edu.hn,org.hn,net.hn,mil.hn,gob.hn,hr,iz.hr,from.hr,name.hr,com.hr,ht,com.ht,shop.ht,firm.ht,info.ht,adult.ht,net.ht,pro.ht,org.ht,med.ht,art.ht,coop.ht,pol.ht,asso.ht,edu.ht,rel.ht,gouv.ht,perso.ht,hu,co.hu,info.hu,org.hu,priv.hu,sport.hu,tm.hu,2000.hu,agrar.hu,bolt.hu,casino.hu,city.hu,erotica.hu,erotika.hu,film.hu,forum.hu,games.hu,hotel.hu,ingatlan.hu,jogasz.hu,konyvelo.hu,lakas.hu,media.hu,news.hu,reklam.hu,sex.hu,shop.hu,suli.hu,szex.hu,tozsde.hu,utazas.hu,video.hu,id,ac.id,biz.id,co.id,desa.id,go.id,mil.id,my.id,net.id,or.id,ponpes.id,sch.id,web.id,ie,gov.ie,il,ac.il,co.il,gov.il,idf.il,k12.il,muni.il,net.il,org.il,im,ac.im,co.im,com.im,ltd.co.im,net.im,org.im,plc.co.im,tt.im,tv.im,in,5g.in,6g.in,ac.in,ai.in,am.in,bihar.in,biz.in,business.in,ca.in,cn.in,co.in,com.in,coop.in,cs.in,delhi.in,dr.in,edu.in,er.in,firm.in,gen.in,gov.in,gujarat.in,ind.in,info.in,int.in,internet.in,io.in,me.in,mil.in,net.in,nic.in,org.in,pg.in,post.in,pro.in,res.in,travel.in,tv.in,uk.in,up.in,us.in,info,int,eu.int,io,com.io,iq,gov.iq,edu.iq,mil.iq,com.iq,org.iq,net.iq,ir,ac.ir,co.ir,gov.ir,id.ir,net.ir,org.ir,sch.ir,is,net.is,com.is,edu.is,gov.is,org.is,int.is,it,gov.it,edu.it,je,co.je,net.je,org.je,jm,jo,com.jo,org.jo,net.jo,edu.jo,sch.jo,gov.jo,mil.jo,name.jo,jobs,jp,ac.jp,ad.jp,co.jp,ed.jp,go.jp,gr.jp,lg.jp,ne.jp,or.jp,ke,ac.ke,co.ke,go.ke,info.ke,me.ke,mobi.ke,ne.ke,or.ke,sc.ke,kg,org.kg,net.kg,com.kg,edu.kg,gov.kg,mil.kg,kh,ki,edu.ki,biz.ki,net.ki,org.ki,gov.ki,info.ki,com.ki,km,org.km,nom.km,gov.km,prd.km,tm.km,edu.km,mil.km,ass.km,com.km,kn,net.kn,org.kn,edu.kn,gov.kn,kp,com.kp,edu.kp,gov.kp,org.kp,rep.kp,tra.kp,kr,ac.kr,co.kr,es.kr,go.kr,hs.kr,kg.kr,mil.kr,ms.kr,ne.kr,or.kr,pe.kr,re.kr,sc.kr,kw,com.kw,edu.kw,emb.kw,gov.kw,ind.kw,net.kw,org.kw,ky,com.ky,edu.ky,net.ky,org.ky,kz,org.kz,edu.kz,net.kz,gov.kz,mil.kz,com.kz,la,int.la,net.la,info.la,edu.la,gov.la,per.la,com.la,org.la,lb,com.lb,edu.lb,gov.lb,net.lb,org.lb,lc,com.lc,net.lc,co.lc,org.lc,edu.lc,gov.lc,li,lk,gov.lk,sch.lk,net.lk,int.lk,com.lk,org.lk,edu.lk,ngo.lk,soc.lk,web.lk,ltd.lk,assn.lk,grp.lk,hotel.lk,ac.lk,lr,com.lr,edu.lr,gov.lr,org.lr,net.lr,ls,ac.ls,biz.ls,co.ls,edu.ls,gov.ls,info.ls,net.ls,org.ls,sc.ls,lt,gov.lt,lu,lv,com.lv,edu.lv,gov.lv,org.lv,mil.lv,id.lv,net.lv,asn.lv,conf.lv,ly,com.ly,net.ly,gov.ly,plc.ly,edu.ly,sch.ly,med.ly,org.ly,id.ly,ma,co.ma,net.ma,gov.ma,org.ma,ac.ma,press.ma,mc,tm.mc,asso.mc,md,me,co.me,net.me,org.me,edu.me,ac.me,gov.me,its.me,priv.me,mg,org.mg,nom.mg,gov.mg,prd.mg,tm.mg,edu.mg,mil.mg,com.mg,co.mg,mh,mil,mk,com.mk,org.mk,net.mk,edu.mk,gov.mk,inf.mk,name.mk,ml,com.ml,edu.ml,gouv.ml,gov.ml,net.ml,org.ml,presse.ml,mm,mn,gov.mn,edu.mn,org.mn,mo,com.mo,net.mo,org.mo,edu.mo,gov.mo,mobi,mp,mq,mr,gov.mr,ms,com.ms,edu.ms,gov.ms,net.ms,org.ms,mt,com.mt,edu.mt,net.mt,org.mt,mu,com.mu,net.mu,org.mu,gov.mu,ac.mu,co.mu,or.mu,museum,mv,aero.mv,biz.mv,com.mv,coop.mv,edu.mv,gov.mv,info.mv,int.mv,mil.mv,museum.mv,name.mv,net.mv,org.mv,pro.mv,mw,ac.mw,biz.mw,co.mw,com.mw,coop.mw,edu.mw,gov.mw,int.mw,museum.mw,net.mw,org.mw,mx,com.mx,org.mx,gob.mx,edu.mx,net.mx,my,biz.my,com.my,edu.my,gov.my,mil.my,name.my,net.my,org.my,mz,ac.mz,adv.mz,co.mz,edu.mz,gov.mz,mil.mz,net.mz,org.mz,na,info.na,pro.na,name.na,school.na,or.na,dr.na,us.na,mx.na,ca.na,in.na,cc.na,tv.na,ws.na,mobi.na,co.na,com.na,org.na,name,nc,asso.nc,nom.nc,ne,net,nf,com.nf,net.nf,per.nf,rec.nf,web.nf,arts.nf,firm.nf,info.nf,other.nf,store.nf,ng,com.ng,edu.ng,gov.ng,i.ng,mil.ng,mobi.ng,name.ng,net.ng,org.ng,sch.ng,ni,ac.ni,biz.ni,co.ni,com.ni,edu.ni,gob.ni,in.ni,info.ni,int.ni,mil.ni,net.ni,nom.ni,org.ni,web.ni,nl,no,fhs.no,vgs.no,fylkesbibl.no,folkebibl.no,museum.no,idrett.no,priv.no,mil.no,stat.no,dep.no,kommune.no,herad.no,np,nr,biz.nr,info.nr,gov.nr,edu.nr,org.nr,net.nr,com.nr,nu,nz,ac.nz,co.nz,cri.nz,geek.nz,gen.nz,govt.nz,health.nz,iwi.nz,kiwi.nz,maori.nz,mil.nz,m\u0101ori.nz,net.nz,org.nz,parliament.nz,school.nz,om,co.om,com.om,edu.om,gov.om,med.om,museum.om,net.om,org.om,pro.om,onion,org,pa,ac.pa,gob.pa,com.pa,org.pa,sld.pa,edu.pa,net.pa,ing.pa,abo.pa,med.pa,nom.pa,pe,edu.pe,gob.pe,nom.pe,mil.pe,org.pe,com.pe,net.pe,pf,com.pf,org.pf,edu.pf,pg,ph,com.ph,net.ph,org.ph,gov.ph,edu.ph,ngo.ph,mil.ph,i.ph,pk,com.pk,net.pk,edu.pk,org.pk,fam.pk,biz.pk,web.pk,gov.pk,gob.pk,gok.pk,gon.pk,gop.pk,gos.pk,info.pk,pl,com.pl,net.pl,org.pl,aid.pl,agro.pl,atm.pl,auto.pl,biz.pl,edu.pl,gmina.pl,gsm.pl,info.pl,mail.pl,miasta.pl,media.pl,mil.pl,nieruchomosci.pl,nom.pl,pc.pl,powiat.pl,priv.pl,realestate.pl,rel.pl,sex.pl,shop.pl,sklep.pl,sos.pl,szkola.pl,targi.pl,tm.pl,tourism.pl,travel.pl,turystyka.pl,pm,pn,gov.pn,co.pn,org.pn,edu.pn,net.pn,post,pr,com.pr,net.pr,org.pr,gov.pr,edu.pr,isla.pr,pro.pr,biz.pr,info.pr,name.pr,est.pr,prof.pr,ac.pr,pro,aaa.pro,aca.pro,acct.pro,avocat.pro,bar.pro,cpa.pro,eng.pro,jur.pro,law.pro,med.pro,recht.pro,ps,edu.ps,gov.ps,sec.ps,plo.ps,com.ps,org.ps,net.ps,pt,net.pt,gov.pt,org.pt,edu.pt,int.pt,publ.pt,com.pt,nome.pt,pw,co.pw,ne.pw,or.pw,ed.pw,go.pw,belau.pw,py,com.py,coop.py,edu.py,gov.py,mil.py,net.py,org.py,qa,com.qa,edu.qa,gov.qa,mil.qa,name.qa,net.qa,org.qa,sch.qa,re,asso.re,com.re,nom.re,ro,arts.ro,com.ro,firm.ro,info.ro,nom.ro,nt.ro,org.ro,rec.ro,store.ro,tm.ro,www.ro,rs,ac.rs,co.rs,edu.rs,gov.rs,in.rs,org.rs,ru,rw,ac.rw,co.rw,coop.rw,gov.rw,mil.rw,net.rw,org.rw,sa,com.sa,net.sa,org.sa,gov.sa,med.sa,pub.sa,edu.sa,sch.sa,sb,com.sb,edu.sb,gov.sb,net.sb,org.sb,sc,com.sc,gov.sc,net.sc,org.sc,edu.sc,sd,com.sd,net.sd,org.sd,edu.sd,med.sd,tv.sd,gov.sd,info.sd,se,a.se,ac.se,b.se,bd.se,brand.se,c.se,d.se,e.se,f.se,fh.se,fhsk.se,fhv.se,g.se,h.se,i.se,k.se,komforb.se,kommunalforbund.se,komvux.se,l.se,lanbib.se,m.se,n.se,naturbruksgymn.se,o.se,org.se,p.se,parti.se,pp.se,press.se,r.se,s.se,t.se,tm.se,u.se,w.se,x.se,y.se,z.se,sg,com.sg,net.sg,org.sg,gov.sg,edu.sg,per.sg,sh,com.sh,net.sh,gov.sh,org.sh,mil.sh,si,sj,sk,sl,com.sl,net.sl,edu.sl,gov.sl,org.sl,sm,sn,art.sn,com.sn,edu.sn,gouv.sn,org.sn,perso.sn,univ.sn,so,com.so,edu.so,gov.so,me.so,net.so,org.so,sr,ss,biz.ss,com.ss,edu.ss,gov.ss,me.ss,net.ss,org.ss,sch.ss,st,co.st,com.st,consulado.st,edu.st,embaixada.st,mil.st,net.st,org.st,principe.st,saotome.st,store.st,su,sv,com.sv,edu.sv,gob.sv,org.sv,red.sv,sx,gov.sx,sy,edu.sy,gov.sy,net.sy,mil.sy,com.sy,org.sy,sz,co.sz,ac.sz,org.sz,tc,td,tel,tf,tg,th,ac.th,co.th,go.th,in.th,mi.th,net.th,or.th,tj,ac.tj,biz.tj,co.tj,com.tj,edu.tj,go.tj,gov.tj,int.tj,mil.tj,name.tj,net.tj,nic.tj,org.tj,test.tj,web.tj,tk,tl,gov.tl,tm,com.tm,co.tm,org.tm,net.tm,nom.tm,gov.tm,mil.tm,edu.tm,tn,com.tn,ens.tn,fin.tn,gov.tn,ind.tn,info.tn,intl.tn,mincom.tn,nat.tn,net.tn,org.tn,perso.tn,tourism.tn,to,com.to,gov.to,net.to,org.to,edu.to,mil.to,tr,av.tr,bbs.tr,bel.tr,biz.tr,com.tr,dr.tr,edu.tr,gen.tr,gov.tr,info.tr,mil.tr,k12.tr,kep.tr,name.tr,net.tr,org.tr,pol.tr,tel.tr,tsk.tr,tv.tr,web.tr,nc.tr,tt,co.tt,com.tt,org.tt,net.tt,biz.tt,info.tt,pro.tt,int.tt,coop.tt,jobs.tt,mobi.tt,travel.tt,museum.tt,aero.tt,name.tt,gov.tt,edu.tt,tv,tw,edu.tw,gov.tw,mil.tw,com.tw,net.tw,org.tw,idv.tw,game.tw,ebiz.tw,club.tw,tz,ac.tz,co.tz,go.tz,hotel.tz,info.tz,me.tz,mil.tz,mobi.tz,ne.tz,or.tz,sc.tz,tv.tz,ua,com.ua,edu.ua,gov.ua,in.ua,net.ua,org.ua,ug,co.ug,or.ug,ac.ug,sc.ug,go.ug,ne.ug,com.ug,org.ug,uk,ac.uk,co.uk,gov.uk,ltd.uk,me.uk,net.uk,nhs.uk,org.uk,plc.uk,police.uk,us,dni.us,fed.us,isa.us,kids.us,nsn.us,ak.us,al.us,ar.us,as.us,az.us,ca.us,co.us,ct.us,dc.us,de.us,fl.us,ga.us,gu.us,hi.us,ia.us,id.us,il.us,in.us,ks.us,ky.us,la.us,ma.us,md.us,me.us,mi.us,mn.us,mo.us,ms.us,mt.us,nc.us,nd.us,ne.us,nh.us,nj.us,nm.us,nv.us,ny.us,oh.us,ok.us,or.us,pa.us,pr.us,ri.us,sc.us,sd.us,tn.us,tx.us,ut.us,vi.us,vt.us,va.us,wa.us,wi.us,wv.us,wy.us,uy,com.uy,edu.uy,gub.uy,mil.uy,net.uy,org.uy,uz,co.uz,com.uz,net.uz,org.uz,va,vc,com.vc,net.vc,org.vc,gov.vc,mil.vc,edu.vc,ve,arts.ve,bib.ve,co.ve,com.ve,e12.ve,edu.ve,firm.ve,gob.ve,gov.ve,info.ve,int.ve,mil.ve,net.ve,nom.ve,org.ve,rar.ve,rec.ve,store.ve,tec.ve,web.ve,vg,vi,co.vi,com.vi,k12.vi,net.vi,org.vi,vn,ac.vn,ai.vn,biz.vn,com.vn,edu.vn,gov.vn,health.vn,id.vn,info.vn,int.vn,io.vn,name.vn,net.vn,org.vn,pro.vn,vu,com.vu,edu.vu,net.vu,org.vu,wf,ws,com.ws,net.ws,org.ws,gov.ws,edu.ws,yt,ye,com.ye,edu.ye,gov.ye,net.ye,mil.ye,org.ye,ac.za,agric.za,alt.za,co.za,edu.za,gov.za,grondar.za,law.za,mil.za,net.za,ngo.za,nic.za,nis.za,nom.za,org.za,school.za,tm.za,web.za,zm,ac.zm,biz.zm,co.zm,com.zm,edu.zm,gov.zm,info.zm,mil.zm,net.zm,org.zm,sch.zm,zw,ac.zw,co.zw,gov.zw,mil.zw,org.zw".split(
  ","
);
var _publicSuffixesMap = {};
publicSuffixes.forEach((tld) => {
  _publicSuffixesMap[tld] = true;
});
var publicSuffixesMap = _publicSuffixesMap;
function getTopLevelDomain(hostname) {
  const [domain] = hostname.split(":");
  const parts = domain.split(".");
  if (parts[parts.length - 1] === "localhost" || parts.length < 2) {
    return parts[parts.length - 1];
  } else {
    const d3 = parts[parts.length - 2] + "." + parts[parts.length - 1];
    if (parts.length > 2 && publicSuffixesMap[d3]) {
      return parts[parts.length - 3] + "." + d3;
    } else {
      return d3;
    }
  }
}

// ../jsondiffpatch/dist/processor.js
var Processor = class {
  constructor(options) {
    this.selfOptions = options || {};
    this.pipes = {};
  }
  options(options) {
    if (options) {
      this.selfOptions = options;
    }
    return this.selfOptions;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pipe(name, pipeArg) {
    let pipe = pipeArg;
    if (typeof name === "string") {
      if (typeof pipe === "undefined") {
        return this.pipes[name];
      } else {
        this.pipes[name] = pipe;
      }
    }
    if (name && name.name) {
      pipe = name;
      if (pipe.processor === this) {
        return pipe;
      }
      this.pipes[pipe.name] = pipe;
    }
    pipe.processor = this;
    return pipe;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  process(input, pipe) {
    let context = input;
    context.options = this.options();
    let nextPipe = pipe || input.pipe || "default";
    let lastPipe;
    while (nextPipe) {
      if (typeof context.nextAfterChildren !== "undefined") {
        context.next = context.nextAfterChildren;
        context.nextAfterChildren = null;
      }
      if (typeof nextPipe === "string") {
        nextPipe = this.pipe(nextPipe);
      }
      nextPipe.process(context);
      lastPipe = nextPipe;
      nextPipe = null;
      if (context) {
        if (context.next) {
          context = context.next;
          nextPipe = context.pipe || lastPipe;
        }
      }
    }
    return context.hasResult ? context.result : void 0;
  }
};
var processor_default = Processor;

// ../jsondiffpatch/dist/pipe.js
var Pipe = class {
  constructor(name) {
    this.name = name;
    this.filters = [];
  }
  process(input) {
    if (!this.processor) {
      throw new Error("add this pipe to a processor before using it");
    }
    const debug = this.debug;
    const length = this.filters.length;
    const context = input;
    for (let index = 0; index < length; index++) {
      const filter = this.filters[index];
      if (debug) {
        this.log(`filter: ${filter.filterName}`);
      }
      filter(context);
      if (typeof context === "object" && context.exiting) {
        context.exiting = false;
        break;
      }
    }
    if (!context.next && this.resultCheck) {
      this.resultCheck(context);
    }
  }
  log(msg) {
    console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
  }
  append(...args) {
    this.filters.push(...args);
    return this;
  }
  prepend(...args) {
    this.filters.unshift(...args);
    return this;
  }
  indexOf(filterName) {
    if (!filterName) {
      throw new Error("a filter name is required");
    }
    for (let index = 0; index < this.filters.length; index++) {
      const filter = this.filters[index];
      if (filter.filterName === filterName) {
        return index;
      }
    }
    throw new Error(`filter not found: ${filterName}`);
  }
  list() {
    return this.filters.map((f2) => f2.filterName);
  }
  after(filterName, ...params) {
    const index = this.indexOf(filterName);
    this.filters.splice(index + 1, 0, ...params);
    return this;
  }
  before(filterName, ...params) {
    const index = this.indexOf(filterName);
    this.filters.splice(index, 0, ...params);
    return this;
  }
  replace(filterName, ...params) {
    const index = this.indexOf(filterName);
    this.filters.splice(index, 1, ...params);
    return this;
  }
  remove(filterName) {
    const index = this.indexOf(filterName);
    this.filters.splice(index, 1);
    return this;
  }
  clear() {
    this.filters.length = 0;
    return this;
  }
  shouldHaveResult(should) {
    if (should === false) {
      this.resultCheck = null;
      return;
    }
    if (this.resultCheck) {
      return;
    }
    this.resultCheck = (context) => {
      if (!context.hasResult) {
        console.log(context);
        const error = new Error(`${this.name} failed`);
        error.noResult = true;
        throw error;
      }
    };
    return this;
  }
};
var pipe_default = Pipe;

// ../jsondiffpatch/dist/contexts/context.js
var Context = class {
  setResult(result) {
    this.result = result;
    this.hasResult = true;
    return this;
  }
  exit() {
    this.exiting = true;
    return this;
  }
  push(child, name) {
    child.parent = this;
    if (typeof name !== "undefined") {
      child.childName = name;
    }
    child.root = this.root || this;
    child.options = child.options || this.options;
    if (!this.children) {
      this.children = [child];
      this.nextAfterChildren = this.next || null;
      this.next = child;
    } else {
      this.children[this.children.length - 1].next = child;
      this.children.push(child);
    }
    child.next = this;
    return this;
  }
};

// ../jsondiffpatch/dist/contexts/diff.js
var DiffContext = class extends Context {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
    this.pipe = "diff";
  }
  setResult(result) {
    return super.setResult(result);
  }
};
var diff_default = DiffContext;

// ../jsondiffpatch/dist/contexts/patch.js
var PatchContext = class extends Context {
  constructor(left, delta) {
    super();
    this.left = left;
    this.delta = delta;
    this.pipe = "patch";
  }
};
var patch_default = PatchContext;

// ../jsondiffpatch/dist/filters/trivial.js
function arrayEquals(a4, b5) {
  if (a4.length !== b5.length) {
    return false;
  }
  for (let i4 = 0; i4 < a4.length; i4++) {
    if (a4[i4] !== b5[i4]) {
      return false;
    }
  }
  return true;
}
var diffFilter = function trivialMatchesDiffFilter(context) {
  if (context.left === context.right) {
    context.setResult(void 0).exit();
    return;
  }
  if (typeof context.left === "undefined") {
    if (typeof context.right === "function") {
      throw new Error("functions are not supported");
    }
    context.setResult([context.right]).exit();
    return;
  }
  if (typeof context.right === "undefined") {
    context.setResult([context.left, 0, 0]).exit();
    return;
  }
  if (typeof context.left === "function" || typeof context.right === "function") {
    throw new Error("functions are not supported");
  }
  context.leftType = context.left === null ? "null" : typeof context.left;
  context.rightType = context.right === null ? "null" : typeof context.right;
  if (context.leftType !== context.rightType) {
    context.setResult([context.left, context.right]).exit();
    return;
  }
  if (context.leftType === "boolean" || context.leftType === "number" || context.leftType === "string") {
    context.setResult([context.left, context.right]).exit();
    return;
  }
  if (context.leftType === "object") {
    context.leftIsArray = Array.isArray(context.left);
  }
  if (context.rightType === "object") {
    context.rightIsArray = Array.isArray(context.right);
  }
  if (context.leftIsArray !== context.rightIsArray) {
    context.setResult([context.left, context.right]).exit();
    return;
  }
  if (context.leftIsArray && context.rightIsArray) {
    if (arrayEquals(context.left, context.right)) {
      context.setResult(void 0).exit();
      return;
    } else {
      context.setResult([context.left, context.right]).exit();
      return;
    }
  }
  if (context.left instanceof RegExp) {
    if (context.right instanceof RegExp) {
      context.setResult([context.left.toString(), context.right.toString()]).exit();
    } else {
      context.setResult([context.left, context.right]).exit();
    }
  }
};
diffFilter.filterName = "trivial";
var patchFilter = function trivialMatchesPatchFilter(context) {
  if (typeof context.delta === "undefined") {
    context.setResult(context.left).exit();
    return;
  }
  context.nested = !Array.isArray(context.delta);
  if (context.nested) {
    return;
  }
  const nonNestedDelta = context.delta;
  if (nonNestedDelta.length === 1) {
    context.setResult(nonNestedDelta[0]).exit();
    return;
  }
  if (nonNestedDelta.length === 2) {
    if (context.left instanceof RegExp) {
      const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
      if (regexArgs) {
        context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
        return;
      }
    }
    context.setResult(nonNestedDelta[1]).exit();
    return;
  }
  if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
    context.setResult(void 0).exit();
  }
};
patchFilter.filterName = "trivial";

// ../jsondiffpatch/dist/filters/nested.js
var collectChildrenDiffFilter = (context) => {
  if (!context || !context.children) {
    return;
  }
  const length = context.children.length;
  let child;
  let result = context.result;
  for (let index = 0; index < length; index++) {
    child = context.children[index];
    if (typeof child.result === "undefined") {
      continue;
    }
    result = result || {};
    result[child.childName] = child.result;
  }
  if (result && context.leftIsArray) {
    result._t = "a";
  }
  context.setResult(result).exit();
};
collectChildrenDiffFilter.filterName = "collectChildren";
var objectsDiffFilter = (context) => {
  if (context.leftIsArray || context.leftType !== "object") {
    return;
  }
  const left = context.left;
  const right = context.right;
  let name;
  let child;
  const propertyFilter = context.options.propertyFilter;
  for (name in left) {
    if (!Object.prototype.hasOwnProperty.call(left, name)) {
      continue;
    }
    if (propertyFilter && !propertyFilter(name, context)) {
      continue;
    }
    child = new diff_default(left[name], right[name]);
    context.push(child, name);
  }
  for (name in right) {
    if (!Object.prototype.hasOwnProperty.call(right, name)) {
      continue;
    }
    if (propertyFilter && !propertyFilter(name, context)) {
      continue;
    }
    if (typeof left[name] === "undefined") {
      child = new diff_default(void 0, right[name]);
      context.push(child, name);
    }
  }
  if (!context.children || context.children.length === 0) {
    context.setResult(void 0).exit();
    return;
  }
  context.exit();
};
objectsDiffFilter.filterName = "objects";
var patchFilter2 = function nestedPatchFilter(context) {
  if (!context.nested) {
    return;
  }
  const nestedDelta = context.delta;
  if (nestedDelta._t) {
    return;
  }
  const objectDelta = nestedDelta;
  let name;
  let child;
  for (name in objectDelta) {
    child = new patch_default(context.left[name], objectDelta[name]);
    context.push(child, name);
  }
  context.exit();
};
patchFilter2.filterName = "objects";
var collectChildrenPatchFilter = function collectChildrenPatchFilter2(context) {
  if (!context || !context.children) {
    return;
  }
  const deltaWithChildren = context.delta;
  if (deltaWithChildren._t) {
    return;
  }
  const object = context.left;
  const length = context.children.length;
  let child;
  for (let index = 0; index < length; index++) {
    child = context.children[index];
    const property = child.childName;
    if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === void 0) {
      delete object[property];
    } else if (object[property] !== child.result) {
      object[property] = child.result;
    }
  }
  context.setResult(object).exit();
};
collectChildrenPatchFilter.filterName = "collectChildren";

// ../jsondiffpatch/dist/filters/dates.js
var diffFilter2 = function datesDiffFilter(context) {
  if (context.left instanceof Date) {
    if (context.right instanceof Date) {
      if (context.left.getTime() !== context.right.getTime()) {
        context.setResult([context.left, context.right]);
      } else {
        context.setResult(void 0);
      }
    } else {
      context.setResult([context.left, context.right]);
    }
    context.exit();
  } else if (context.right instanceof Date) {
    context.setResult([context.left, context.right]).exit();
  }
};
diffFilter2.filterName = "dates";

// ../jsondiffpatch/dist/diffpatcher.js
var DiffPatcher = class {
  constructor(options) {
    this.processor = new processor_default(options);
    this.processor.pipe(new pipe_default("diff").append(collectChildrenDiffFilter, diffFilter, diffFilter2, objectsDiffFilter).shouldHaveResult());
    this.processor.pipe(new pipe_default("patch").append(collectChildrenPatchFilter, patchFilter, patchFilter2).shouldHaveResult());
  }
  options(options) {
    return this.processor.options(options);
  }
  diff(left, right) {
    return this.processor.process(new diff_default(left, right));
  }
  patch(left, delta) {
    return this.processor.process(new patch_default(left, delta));
  }
};
var diffpatcher_default = DiffPatcher;

// ../jsondiffpatch/dist/index.js
function create(options) {
  return new diffpatcher_default(options);
}

// src/analytics-plugin.ts
var diff = create();
var defaultConfig = {
  /* Your segment writeKey */
  writeKey: void 0,
  /* Disable anonymous MTU */
  host: void 0,
  debug: false,
  fetch: void 0,
  echoEvents: false,
  cookieDomain: void 0,
  cookieNames: {},
  cookieCapture: {},
  runtime: void 0,
  fetchTimeoutMs: void 0,
  s2s: void 0,
  idEndpoint: void 0,
  errorPolicy: "log",
  defaultPayloadContext: {},
  privacy: {
    dontSend: false,
    disableUserIds: false,
    ipPolicy: "keep",
    consentCategories: {}
  }
};
var mergeConfig = (current, newConfig) => {
  for (const key of Object.keys(defaultConfig)) {
    const value = newConfig[key];
    if (key === "privacy") {
      if (typeof value === "object") {
        current.privacy = __spreadValues(__spreadValues(__spreadProps(__spreadValues({}, defaultConfig.privacy), {
          consentCategories: __spreadValues({}, defaultConfig.privacy.consentCategories)
        }), current.privacy), value);
      } else if (typeof value === "undefined") {
        if (newConfig.hasOwnProperty("privacy") || !current.hasOwnProperty("privacy")) {
          current.privacy = __spreadProps(__spreadValues({}, defaultConfig.privacy), {
            consentCategories: __spreadValues({}, defaultConfig.privacy.consentCategories)
          });
        }
      }
    } else if (typeof value === "undefined") {
      if (newConfig.hasOwnProperty(key) || !current.hasOwnProperty(key)) {
        current[key] = defaultConfig[key];
      }
    } else {
      current[key] = value;
    }
  }
};
var parseQuery = (qs) => {
  if (!qs) {
    return {};
  }
  let queryString = qs.length > 0 && qs.charAt(0) === "?" ? qs.substring(1) : qs;
  let query = {};
  let pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
  for (let i4 = 0; i4 < pairs.length; i4++) {
    let pair = pairs[i4].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
};
function utmToKey(key) {
  const name = key.substring("utm_".length);
  return name === "campaign" ? "name" : name;
}
function parseUtms(query) {
  return Object.entries(query).filter(([key]) => key.indexOf("utm_") === 0).reduce(
    (acc, [key, value]) => __spreadProps(__spreadValues({}, acc), {
      [utmToKey(key)]: value
    }),
    {}
  );
}
function safeCall(f2, defaultVal) {
  try {
    return f2();
  } catch (e2) {
    return defaultVal;
  }
}
function restoreTraits(storage) {
  let val = storage.getItem("__user_traits");
  if (typeof val === "string") {
    val = safeCall(() => JSON.parse(val), {});
  }
  if (typeof val !== "object" || val === null || Array.isArray(val)) {
    val = {};
  }
  let groupVal = storage.getItem("__group_traits");
  if (typeof groupVal === "string") {
    groupVal = safeCall(() => JSON.parse(groupVal), {});
  }
  if (typeof groupVal !== "object" || groupVal === null || Array.isArray(groupVal)) {
    groupVal = {};
  }
  return __spreadValues(__spreadValues({}, groupVal || {}), val || {});
}
function getCookie(name) {
  var _a;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  return parts.length === 2 ? (_a = parts.pop()) == null ? void 0 : _a.split(";").shift() : void 0;
}
function getClientIds(runtime, customCookieCapture) {
  const cookieCapture = __spreadValues({
    fbc: "_fbc",
    fbp: "_fbp"
  }, customCookieCapture);
  const clientIds = Object.entries(cookieCapture).reduce((acc, [key, cookieName]) => {
    acc[key] = runtime.getCookie(cookieName);
    return acc;
  }, {});
  return __spreadValues(__spreadValues({}, clientIds), getGa4Ids(runtime));
}
function parseGa4SessionId(cookieValue) {
  if (typeof cookieValue !== "string") {
    return void 0;
  }
  if (cookieValue.startsWith("GA1") || cookieValue.startsWith("GS1")) {
    return cookieValue.split(".")[2];
  } else {
    const match = cookieValue.match(/^GS\d+\.\d+\.(?:[\w_-]+[$])*s(\d+)(?:$|[$])/);
    return match ? match[1] : void 0;
  }
}
function getGa4Ids(runtime) {
  var _a;
  const allCookies = runtime.getCookies();
  const clientId = (_a = allCookies["_ga"]) == null ? void 0 : _a.split(".").slice(-2).join(".");
  const gaSessionCookies = Object.entries(allCookies).filter(([key]) => key.startsWith("_ga_"));
  const sessionIds = gaSessionCookies.length > 0 ? Object.fromEntries(
    gaSessionCookies.map(([key, value]) => {
      const sessionId = parseGa4SessionId(value);
      if (!sessionId) {
        return null;
      }
      return [key.substring("_ga_".length), sessionId];
    }).filter((v2) => v2 !== null)
  ) : void 0;
  if (clientId || sessionIds) {
    return { ga4: { clientId, sessionIds } };
  } else {
    return void 0;
  }
}
function removeCookie(name, { domain, secure }) {
  document.cookie = name + "=;domain=" + domain + ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;SameSite=" + (secure ? "None" : "Lax") + (secure ? ";secure" : "");
}
function setCookie(name, val, { domain, secure }) {
  document.cookie = name + "=" + val + ";domain=" + domain + ";path=/;expires=" + new Date((/* @__PURE__ */ new Date()).getTime() + 1e3 * 60 * 60 * 24 * 365 * 5).toUTCString() + ";SameSite=" + (secure ? "None" : "Lax") + (secure ? ";secure" : "");
}
var defaultCookie2Key = {
  __anon_id: "__eventn_id",
  __user_id: "__eventn_uid",
  __user_traits: "__eventn_id_usr",
  __group_id: "__group_id",
  __group_traits: "__group_traits"
};
var cookieStorage = (cookieDomain, key2cookie) => {
  return {
    setItem(key, val) {
      const cookieName = key2cookie(key) || key;
      if (typeof val === "undefined") {
        removeCookie(cookieName, {
          domain: cookieDomain,
          secure: window.location.protocol === "https:"
        });
        return;
      }
      const strVal = typeof val === "object" && val !== null ? encodeURIComponent(JSON.stringify(val)) : val;
      setCookie(cookieName, strVal, {
        domain: cookieDomain,
        secure: window.location.protocol === "https:"
      });
    },
    getItem(key) {
      const cookieName = key2cookie(key) || key;
      const result = getCookie(cookieName);
      if (key === "__anon_id") {
        return result;
      }
      if (typeof result === "undefined" && key === "__user_id") {
        const traits = parse(getCookie(key2cookie("__user_traits") || "__eventn_id_usr")) || {};
        return traits.internal_id || traits.user_id || traits.id || traits.userId;
      }
      return parse(result);
    },
    removeItem(key) {
      removeCookie(key2cookie(key) || key, {
        domain: cookieDomain,
        secure: window.location.protocol === "https:"
      });
    },
    reset() {
      for (const key of Object.keys(defaultCookie2Key)) {
        removeCookie(key2cookie(key) || key, {
          domain: cookieDomain,
          secure: window.location.protocol === "https:"
        });
      }
    }
  };
};
function windowRuntime(opts) {
  const key2Cookie = (key) => {
    var _a, _b, _c, _d, _e2;
    switch (key) {
      case "__anon_id":
        return ((_a = opts.cookieNames) == null ? void 0 : _a.anonymousId) || defaultCookie2Key.__anon_id;
      case "__user_id":
        return ((_b = opts.cookieNames) == null ? void 0 : _b.userId) || defaultCookie2Key.__user_id;
      case "__user_traits":
        return ((_c = opts.cookieNames) == null ? void 0 : _c.userTraits) || defaultCookie2Key.__user_traits;
      case "__group_id":
        return ((_d = opts.cookieNames) == null ? void 0 : _d.groupId) || defaultCookie2Key.__group_id;
      case "__group_traits":
        return ((_e2 = opts.cookieNames) == null ? void 0 : _e2.groupTraits) || defaultCookie2Key.__group_traits;
      default:
        return key;
    }
  };
  return {
    getCookie(name) {
      var _a;
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      return parts.length === 2 ? (_a = parts.pop()) == null ? void 0 : _a.split(";").shift() : void 0;
    },
    getCookies() {
      const value = `; ${document.cookie}`;
      const cookies = {};
      const matches = value.matchAll(/(\w+)=([^;]+)/g);
      for (const match of matches) {
        cookies[match[1]] = match[2];
      }
      return cookies;
    },
    documentEncoding() {
      return window.document.characterSet;
    },
    timezoneOffset() {
      return (/* @__PURE__ */ new Date()).getTimezoneOffset();
    },
    store() {
      return cookieStorage(opts.cookieDomain || getTopLevelDomain(window.location.hostname), key2Cookie);
    },
    language() {
      return window.navigator.language;
    },
    pageTitle() {
      return window.document.title;
    },
    pageUrl() {
      return window.location.href;
    },
    referrer() {
      return window.document.referrer;
    },
    screen() {
      return {
        width: window.screen.width,
        height: window.screen.height,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        density: Math.floor(window.devicePixelRatio)
      };
    },
    userAgent() {
      return window.navigator.userAgent;
    }
  };
}
function createInMemoryStorage(debug) {
  const storage = {};
  return {
    reset() {
      Object.keys(storage).forEach((key) => delete storage[key]);
    },
    setItem(key, val) {
      if (debug) {
        console.log(`[JITSU EMPTY RUNTIME] Set storage item ${key}=${JSON.stringify(val)}`);
      }
      if (typeof val === "undefined") {
        delete storage[key];
      } else {
        storage[key] = val;
      }
    },
    getItem(key) {
      const val = storage[key];
      if (debug) {
        console.log(`[JITSU EMPTY RUNTIME] Get storage item ${key}=${JSON.stringify(val)}`);
      }
      return val;
    },
    removeItem(key) {
      if (debug) {
        console.log(`[JITSU EMPTY RUNTIME] Get storage item ${key}=${storage[key]}`);
      }
      delete storage[key];
    }
  };
}
var emptyRuntime = (config) => ({
  documentEncoding() {
    return void 0;
  },
  timezoneOffset() {
    return void 0;
  },
  getCookie(name) {
    return void 0;
  },
  getCookies() {
    return {};
  },
  store() {
    return createInMemoryStorage(config.debug);
  },
  language() {
    return void 0;
  },
  pageTitle() {
    return void 0;
  },
  pageUrl() {
    return void 0;
  },
  referrer() {
    return void 0;
  },
  screen() {
    return void 0;
  },
  userAgent() {
    return void 0;
  }
});
function deepCopy(o3) {
  if (typeof o3 !== "object") {
    return o3;
  }
  if (!o3) {
    return o3;
  }
  return JSON.parse(JSON.stringify(o3));
}
function deepMerge(target, source) {
  if (typeof source !== "object" || source === null || Array.isArray(source) || source instanceof Date) {
    return source;
  }
  if (typeof target !== "object" || target === null || Array.isArray(target) || target instanceof Date) {
    return source;
  }
  return Object.entries(source).reduce((acc, [key, value]) => {
    acc[key] = deepMerge(target[key], value);
    return acc;
  }, target);
}
function isInBrowser() {
  return typeof document !== "undefined" && typeof window !== "undefined";
}
function ensureAnonymousId(opts) {
  var _a;
  if (!isInBrowser()) {
    return void 0;
  }
  const cookieName = ((_a = opts.cookieNames) == null ? void 0 : _a.anonymousId) || defaultCookie2Key.__anon_id;
  const existing = getCookie(cookieName);
  if (existing) {
    return existing;
  }
  const id = uuid();
  const domain = opts.cookieDomain || getTopLevelDomain(window.location.hostname);
  setCookie(cookieName, id, {
    domain,
    secure: window.location.protocol === "https:"
  });
  if (opts.debug) {
    console.log(
      `[JITSU DEBUG] preInitAnonymousId: created anonymous ID cookie '${cookieName}'=${id} on domain '${domain}'`
    );
  }
  return id;
}
function fixPath(path) {
  if (path.indexOf("//") === 0 && path.lastIndexOf("/") === 1) {
    return "/";
  }
  return path;
}
var hashRegex = /#.*$/;
function urlPath(url) {
  const regex = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g;
  const matches = regex.exec(url);
  const pathMatch = matches && matches[3] ? matches[3].split("?")[0].replace(hashRegex, "") : "";
  return "/" + pathMatch;
}
function canonicalUrl() {
  if (!isInBrowser()) return;
  const tags = document.getElementsByTagName("link");
  for (var i4 = 0, tag; tag = tags[i4]; i4++) {
    if (tag.getAttribute("rel") === "canonical") {
      return tag.getAttribute("href");
    }
  }
}
function analyticsJsUrl() {
  if (!isInBrowser()) return;
  const canonical = canonicalUrl();
  if (!canonical) return window.location.href.replace(hashRegex, "");
  return canonical.match(/\?/) ? canonical : canonical + window.location.search;
}
function adjustPayload(payload, config, storage, s2s) {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n2, _o;
  const runtime = config.runtime || (isInBrowser() ? windowRuntime(config) : emptyRuntime(config));
  const url = runtime.pageUrl();
  const parsedUrl = url ? safeCall(() => new URL(url), void 0) : void 0;
  const query = parsedUrl ? parseQuery(parsedUrl.search) : {};
  const properties = payload.properties || {};
  if (payload.type === "page" && (properties.url || url)) {
    let targetUrl = url || properties.url;
    if (properties.url && properties.url !== analyticsJsUrl()) {
      targetUrl = properties.url;
    }
    properties.url = targetUrl.replace(hashRegex, "");
    properties.path = fixPath(urlPath(targetUrl));
  }
  const customContext = deepMerge(
    config.defaultPayloadContext,
    ((_a = payload.properties) == null ? void 0 : _a.context) || ((_b = payload.options) == null ? void 0 : _b.context) || {}
  );
  (_c = payload.properties) == null ? true : delete _c.context;
  const referrer = runtime.referrer();
  const context = {
    library: {
      name: jitsuLibraryName,
      version: jitsuVersion,
      env: isInBrowser() ? "browser" : "node"
    },
    consent: typeof ((_d = config.privacy) == null ? void 0 : _d.consentCategories) === "object" && Object.keys((_e2 = config.privacy) == null ? void 0 : _e2.consentCategories).length ? {
      categoryPreferences: config.privacy.consentCategories
    } : void 0,
    userAgent: (_f = runtime.userAgent) == null ? void 0 : _f.call(runtime),
    locale: (_g = runtime.language) == null ? void 0 : _g.call(runtime),
    screen: (_h = runtime.screen) == null ? void 0 : _h.call(runtime),
    ip: (_i = runtime == null ? void 0 : runtime.ip) == null ? void 0 : _i.call(runtime),
    traits: payload.type != "identify" && payload.type != "group" ? __spreadValues(__spreadValues({}, restoreTraits(storage) || {}), ((_j = payload == null ? void 0 : payload.options) == null ? void 0 : _j.traits) || {}) : void 0,
    page: {
      path: properties.path || parsedUrl && parsedUrl.pathname,
      referrer,
      referring_domain: safeCall(() => referrer && new URL(referrer).hostname),
      host: parsedUrl && parsedUrl.host,
      search: properties.search || parsedUrl && parsedUrl.search,
      title: properties.title || runtime.pageTitle(),
      url: properties.url || url,
      encoding: properties.encoding || runtime.documentEncoding()
    },
    clientIds: !((_k = config.privacy) == null ? void 0 : _k.disableUserIds) ? getClientIds(runtime, config.cookieCapture || {}) : void 0,
    campaign: parseUtms(query)
  };
  const withContext = __spreadProps(__spreadValues({}, payload), {
    userId: ((_l = payload == null ? void 0 : payload.options) == null ? void 0 : _l.userId) || (payload == null ? void 0 : payload.userId),
    anonymousId: ((_m = payload == null ? void 0 : payload.options) == null ? void 0 : _m.anonymousId) || (payload == null ? void 0 : payload.anonymousId),
    groupId: ((_n2 = payload == null ? void 0 : payload.options) == null ? void 0 : _n2.groupId) || storage.getItem("__group_id"),
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    sentAt: (/* @__PURE__ */ new Date()).toISOString(),
    messageId: randomId(properties.path || parsedUrl && parsedUrl.pathname),
    writeKey: maskWriteKey(config.writeKey),
    context: deepMerge(context, customContext)
  });
  delete withContext.meta;
  delete withContext.options;
  if ((_o = config.privacy) == null ? void 0 : _o.disableUserIds) {
    delete withContext.userId;
    delete withContext.anonymousId;
    delete withContext.context.traits;
    delete withContext.groupId;
  }
  return withContext;
}
function isDiff(obj) {
  const keys = Object.keys(obj);
  return keys.length === 1 && keys[0] === "__diff";
}
function processDestinations(destinations, method, originalEvent, debug, analyticsInstance) {
  return __async(this, null, function* () {
    const promises = [];
    for (const destination of destinations) {
      let newEvents = [];
      if (destination.newEvents) {
        try {
          newEvents = destination.newEvents.map(
            (e2) => e2 === "same" ? deepCopy(originalEvent) : isDiff(e2) ? diff.patch(deepCopy(originalEvent), e2.__diff) : e2
          );
        } catch (e2) {
          console.error(`[JITSU] Error applying '${destination.id}' changes to event: ${e2 == null ? void 0 : e2.message}`, e2);
        }
      } else {
        newEvents = [deepCopy(originalEvent)];
      }
      const credentials = __spreadValues(__spreadValues({}, destination.credentials), destination.options);
      if (destination.deviceOptions.type === "internal-plugin") {
        const plugin = internalDestinationPlugins[destination.deviceOptions.name];
        if (plugin) {
          for (const event of newEvents) {
            try {
              promises.push(plugin.handle(__spreadProps(__spreadValues({}, credentials), { debug }), event));
            } catch (e2) {
              console.warn(
                `[JITSU] Error processing event with internal plugin '${destination.deviceOptions.name}': ${e2 == null ? void 0 : e2.message}`,
                e2
              );
            }
          }
        } else {
          console.warn(
            `[JITSU] Unknown internal plugin '${destination.deviceOptions.name}' for destination '${destination.id}'`
          );
        }
      } else if (destination.deviceOptions.type === "analytics-plugin") {
        yield loadScript(destination.deviceOptions.packageCdn);
        const plugin = window[destination.deviceOptions.moduleVarName];
        if (!plugin) {
          console.warn(
            `[JITSU] Broken plugin '${destination.deviceOptions.packageCdn}' for destination '${destination.id}' - it doesn't export '${destination.deviceOptions.moduleVarName}' variable`
          );
        } else {
          let pluginInstance;
          try {
            pluginInstance = (typeof plugin === "function" ? plugin : plugin.init)(credentials);
          } catch (e2) {
            console.warn(
              `[JITSU] Error creating plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}': ${e2 == null ? void 0 : e2.message}`,
              e2
            );
          }
          try {
            if (debug) {
              console.log(
                `[JITSU] Plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}' initialized with config:`,
                pluginInstance.config
              );
            }
            pluginInstance.initialize({ config: pluginInstance.config, instance: analyticsInstance });
          } catch (e2) {
            console.warn(
              `[JITSU] Error initializing plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}': ${e2 == null ? void 0 : e2.message}. Config: ${JSON.stringify(pluginInstance.config)}`,
              e2
            );
            continue;
          }
          if (pluginInstance[method]) {
            for (const event of newEvents) {
              try {
                pluginInstance[method]({
                  payload: event,
                  config: pluginInstance.config,
                  instance: analyticsInstance
                });
              } catch (e2) {
                console.warn(
                  `[JITSU] Error processing ${method}() with plugin '${destination.deviceOptions.moduleVarName}@${destination.deviceOptions.packageCdn}' for destination '${destination.id}': ${e2 == null ? void 0 : e2.message}`,
                  e2
                );
              }
            }
          }
        }
      }
    }
  });
}
function looksLikeCuid(id) {
  return id.length === 25 && id.charAt(0) === "c";
}
function validateWriteKey(writeKey) {
  if (writeKey) {
    const [, secret] = writeKey.split(":", 2);
    if (!secret && !looksLikeCuid(writeKey)) {
      throw new Error(
        `Legacy write key detected - ${writeKey}! This format doesn't work anymore, it should be 'key:secret'. Please download a new key from Jitsu UI`
      );
    }
  }
  return writeKey;
}
function maskWriteKey(writeKey) {
  if (writeKey) {
    const [id, secret] = writeKey.split(":", 2);
    if (secret) {
      return `${id}:***`;
    } else {
      return "***";
    }
  }
  return writeKey;
}
function getErrorHandler(opts) {
  const configuredHandler = opts.errorPolicy || "log";
  if (typeof configuredHandler === "function") {
    return configuredHandler;
  } else if (configuredHandler === "rethrow") {
    return (msg, ...args) => {
      throw new Error(msg);
    };
  } else {
    return (msg, ...args) => {
      console.error(msg, ...args);
    };
  }
}
function send(method, payload, jitsuConfig, instance, store, isAutoIdentify) {
  return __async(this, null, function* () {
    var _a, _b;
    const s2s = !!jitsuConfig.s2s;
    const debugHeader = jitsuConfig.debug ? { "X-Enable-Debug": "true" } : {};
    const adjustedPayload = adjustPayload(payload, jitsuConfig, store, s2s);
    if (jitsuConfig.echoEvents) {
      console.log(`[JITSU DEBUG] sending '${method}' event:`, adjustedPayload);
      return;
    }
    const url = s2s ? `${jitsuConfig.host}/api/s/s2s/${method}` : `${jitsuConfig.host}/api/s/${method}`;
    const fetch = jitsuConfig.fetch || globalThis.fetch;
    if (!fetch) {
      throw new Error(
        "Please specify fetch function in jitsu plugin initialization, fetch isn't available in global scope"
      );
    }
    const abortController = jitsuConfig.fetchTimeoutMs ? new AbortController() : void 0;
    const abortTimeout = jitsuConfig.fetchTimeoutMs ? setTimeout(() => {
      abortController == null ? void 0 : abortController.abort();
    }, jitsuConfig.fetchTimeoutMs) : void 0;
    const authHeader = jitsuConfig.writeKey ? { "X-Write-Key": jitsuConfig.writeKey } : {};
    const ipHeader = typeof ((_a = jitsuConfig.privacy) == null ? void 0 : _a.ipPolicy) === "undefined" || ((_b = jitsuConfig.privacy) == null ? void 0 : _b.ipPolicy) === "keep" ? {} : { "X-IP-Policy": jitsuConfig.privacy.ipPolicy };
    let fetchResult;
    try {
      fetchResult = yield fetch(url, {
        method: "POST",
        headers: __spreadValues(__spreadValues(__spreadValues({
          "Content-Type": "application/json"
        }, authHeader), debugHeader), ipHeader),
        body: JSON.stringify(adjustedPayload),
        signal: abortController == null ? void 0 : abortController.signal
      });
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    } catch (e2) {
      const errorHandler = isAutoIdentify ? (msg) => console.warn(msg) : getErrorHandler(jitsuConfig);
      errorHandler(`Call to ${url} failed with error ${e2.message}`);
      return Promise.resolve();
    }
    let responseText;
    try {
      responseText = yield fetchResult.text();
    } catch (e2) {
      console.warn(
        `Can't read response text from ${url} (status - ${fetchResult.status}  ${fetchResult.statusText}): ${e2 == null ? void 0 : e2.message}`
      );
    }
    if (jitsuConfig.debug) {
      console.log(
        `[JITSU DEBUG] ${url} replied ${fetchResult.status}: ${responseText}. Original payload:
${JSON.stringify(
          adjustedPayload,
          null,
          2
        )}`
      );
    }
    if (!fetchResult.ok) {
      const errorHandler = isAutoIdentify ? (msg) => console.warn(msg) : getErrorHandler(jitsuConfig);
      errorHandler(
        `Call to ${url} failed with error: ${fetchResult.status} - ${fetchResult.statusText}: ${responseText}`
      );
      return Promise.resolve();
    }
    let responseJson;
    try {
      responseJson = JSON.parse(responseText);
    } catch (e2) {
      const errorHandler = isAutoIdentify ? (msg) => console.warn(msg) : getErrorHandler(jitsuConfig);
      errorHandler(`Can't parse JSON: ${responseText}: ${e2 == null ? void 0 : e2.message}`);
      return Promise.resolve();
    }
    if (responseJson.destinations && responseJson.destinations.length > 0) {
      if (jitsuConfig.s2s) {
        console.warn(
          `[JITSU] ${payload.type} responded with list of ${responseJson.destinations.length} destinations. However, this code is running in server-to-server mode, so destinations will be ignored`,
          jitsuConfig.debug ? JSON.stringify(responseJson.destinations, null, 2) : void 0
        );
      } else {
        if (isInBrowser()) {
          if (jitsuConfig.debug) {
            console.log(`[JITSU] Processing device destinations: `, JSON.stringify(responseJson.destinations, null, 2));
          }
          return processDestinations(responseJson.destinations, method, adjustedPayload, !!jitsuConfig.debug, instance);
        }
      }
    }
    return adjustedPayload;
  });
}
var controllingTraits = ["$doNotSend"];
function stripControllingTraits(traits) {
  const res = __spreadValues({}, traits);
  for (const key of controllingTraits) {
    delete res[key];
  }
  return res;
}
var jitsuAnalyticsPlugin = (jitsuOptions = {}, storage) => {
  mergeConfig(jitsuOptions, jitsuOptions);
  return {
    name: "jitsu",
    config: jitsuOptions,
    initialize: (args) => __async(null, null, function* () {
      const { config } = args;
      if (config.debug) {
        console.debug("[JITSU DEBUG] Initializing Jitsu plugin with config: ", JSON.stringify(config, null, 2));
      }
      if (!config.host && !config.echoEvents) {
        throw new Error("Please specify host variable in jitsu plugin initialization, or set echoEvents to true");
      }
      validateWriteKey(config.writeKey);
      if (config.idEndpoint) {
        if (!isInBrowser()) {
          console.error(`[JITSU] 'idEndpoint' option can be used only in browser environment`);
          return;
        }
        try {
          const fetch = config.fetch || globalThis.fetch;
          const controller = new AbortController();
          setTimeout(() => controller.abort(), 1e3);
          const domain = config.cookieDomain || getTopLevelDomain(window.location.hostname);
          const res = yield fetch(config.idEndpoint + "?domain=" + encodeURIComponent(domain), {
            credentials: "include",
            signal: controller.signal
          });
          if (!res.ok) {
            console.error(`[JITSU] Can't fetch idEndpoint: ${res.status} - ${res.statusText}`);
          } else if (config.debug) {
            console.log(`[JITSU DEBUG] Fetch idEndpoint: ${res.status}`);
          }
        } catch (e2) {
          console.error(`[JITSU] Can't fetch idEndpoint: ${e2.message}`);
        }
      }
    }),
    page: (args) => {
      var _a;
      const { payload, config, instance } = args;
      if ((_a = config.privacy) == null ? void 0 : _a.dontSend) {
        return;
      }
      const promise = send("page", payload, config, instance, storage);
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
        });
      }
      return promise;
    },
    track: (args) => {
      var _a;
      const { payload, config, instance } = args;
      if ((_a = config.privacy) == null ? void 0 : _a.dontSend) {
        return;
      }
      const promise = send("track", payload, config, instance, storage);
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
        });
      }
      return promise;
    },
    identify: (args) => {
      var _a, _b, _c, _d;
      const { payload, config, instance } = args;
      if (((_a = config.privacy) == null ? void 0 : _a.dontSend) || ((_b = config.privacy) == null ? void 0 : _b.disableUserIds)) {
        return;
      }
      storage.setItem("__user_id", payload.userId);
      const doNotSend = (_c = payload.traits) == null ? void 0 : _c.$doNotSend;
      if (payload.traits && typeof payload.traits === "object") {
        payload.traits = stripControllingTraits(payload.traits);
        storage.setItem("__user_traits", payload.traits);
      }
      if (doNotSend) {
        return Promise.resolve();
      }
      const isAutoIdentify = ((_d = payload.options) == null ? void 0 : _d.autoIdentify) === true;
      const promise = send("identify", payload, config, instance, storage, isAutoIdentify);
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {
        });
      }
      return promise;
    },
    reset: (args) => {
      const { config, instance } = args;
      storage.reset();
      if (config.debug) {
        console.log("[JITSU DEBUG] Resetting Jitsu plugin storage");
      }
    },
    methods: {
      //analytics doesn't support group as a base method, so we need to add it manually
      configure(newOptions) {
        var _a, _b, _c, _d;
        const idsWasDisabled = ((_a = jitsuOptions.privacy) == null ? void 0 : _a.disableUserIds) || ((_b = jitsuOptions.privacy) == null ? void 0 : _b.dontSend);
        mergeConfig(jitsuOptions, newOptions);
        const idsDisabledNow = ((_c = jitsuOptions.privacy) == null ? void 0 : _c.disableUserIds) || ((_d = jitsuOptions.privacy) == null ? void 0 : _d.dontSend);
        if (!idsDisabledNow && idsWasDisabled) {
          if (jitsuOptions.debug) {
            console.log("[JITSU] Enabling Anonymous ID. Generating new Id.");
          }
          const instance = this.instance;
          const newAnonymousId = uuid();
          const userState = instance.user();
          if (userState) {
            userState.anonymousId = newAnonymousId;
          }
          storage.setItem("__anon_id", newAnonymousId);
          instance.setAnonymousId(newAnonymousId);
        }
      },
      group(groupId, traits, options, callback) {
        var _a, _b;
        if (((_a = jitsuOptions.privacy) == null ? void 0 : _a.dontSend) || ((_b = jitsuOptions.privacy) == null ? void 0 : _b.disableUserIds)) {
          return;
        }
        if (typeof groupId === "number") {
          groupId = groupId + "";
        }
        const instance = this.instance;
        const user = instance.user();
        const userId = (options == null ? void 0 : options.userId) || (user == null ? void 0 : user.userId);
        const anonymousId = (options == null ? void 0 : options.anonymousId) || (user == null ? void 0 : user.anonymousId) || storage.getItem("__anon_id");
        storage.setItem("__group_id", groupId);
        const doNotSend = traits == null ? void 0 : traits.$doNotSend;
        if (traits && typeof traits === "object") {
          traits = stripControllingTraits(traits);
          storage.setItem("__group_traits", traits);
        }
        if (doNotSend) {
          return Promise.resolve();
        }
        return send(
          "group",
          __spreadValues(__spreadValues({ type: "group", groupId, traits }, anonymousId ? { anonymousId } : {}), userId ? { userId } : {}),
          jitsuOptions,
          instance,
          storage
        );
      }
    }
  };
};
var seedCounter = 0;
function getSeed() {
  var _a;
  seedCounter = (seedCounter + 1) % Number.MAX_SAFE_INTEGER;
  const defaultSeed = Date.now() % 2147483647;
  const seed = isInBrowser() ? ((_a = window == null ? void 0 : window.performance) == null ? void 0 : _a.now()) || defaultSeed : defaultSeed;
  return seed + seedCounter;
}
function randomId(hashString = "") {
  const d3 = Date.now();
  return (Math.random() * d3 * hash(hashString != null ? hashString : "", getSeed()) % Number.MAX_SAFE_INTEGER).toString(36) + (Math.random() * d3 * hash(hashString != null ? hashString : "", getSeed()) % Number.MAX_SAFE_INTEGER).toString(36);
}
function uuid() {
  var u3 = "", m4 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", i4 = 0, rb = Math.random() * 4294967295 | 0;
  while (i4++ < 36) {
    var c4 = m4[i4 - 1], r3 = rb & 15, v2 = c4 == "x" ? r3 : r3 & 3 | 8;
    u3 += c4 == "-" || c4 == "4" ? c4 : v2.toString(16);
    rb = i4 % 8 == 0 ? Math.random() * 4294967295 | 0 : rb >> 4;
  }
  return u3;
}
function hash(str, seed = 0) {
  let h1 = 3735928559 ^ seed, h22 = 1103547991 ^ seed;
  for (let i4 = 0, ch; i4 < str.length; i4++) {
    ch = str.charCodeAt(i4);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h22 = Math.imul(h22 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h22 ^ h22 >>> 13, 3266489909);
  h22 = Math.imul(h22 ^ h22 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
  return 4294967296 * (2097151 & h22) + (h1 >>> 0);
}

// src/index.ts
function parse(input) {
  let value = input;
  if ((input == null ? void 0 : input.indexOf("%7B%22")) === 0) {
    value = decodeURIComponent(input);
  }
  try {
    value = JSON.parse(value);
    if (value === "true") return true;
    if (value === "false") return false;
    if (typeof value === "object") return value;
    if (parseFloat(value) === value) {
      value = parseFloat(value);
    }
  } catch (e2) {
  }
  if (value === null || value === "") {
    return;
  }
  return value;
}
var emptyAnalytics = {
  setAnonymousId: () => {
  },
  setContextProperty(name, value) {
  },
  getContextProperty(name) {
    return void 0;
  },
  track: () => Promise.resolve(),
  page: () => Promise.resolve(),
  user: () => ({}),
  identify: () => Promise.resolve({}),
  group: () => Promise.resolve({}),
  reset: () => Promise.resolve({}),
  configure: () => {
  },
  getConfiguration() {
    return {};
  }
};
function createUnderlyingAnalyticsInstance(opts, rt, plugins = []) {
  var _a, _b, _c, _e2, _f;
  const storageCache = {};
  let resetCalled = false;
  const cachingStorageWrapper = (persistentStorage) => ({
    setItem(key, val) {
      var _a2, _b2;
      if (((_a2 = opts.privacy) == null ? void 0 : _a2.dontSend) || ((_b2 = opts.privacy) == null ? void 0 : _b2.disableUserIds)) {
        return;
      }
      if (opts.debug) {
        console.log(`[JITSU DEBUG] [Caching storage] setItem: ${key}=${val}`);
      }
      storageCache[key] = val;
      persistentStorage.setItem(key, val);
    },
    getItem(key) {
      var _a2, _b2;
      if (((_a2 = opts.privacy) == null ? void 0 : _a2.dontSend) || ((_b2 = opts.privacy) == null ? void 0 : _b2.disableUserIds)) {
        return;
      }
      const value = storageCache[key] || persistentStorage.getItem(key);
      if (opts.debug) {
        console.log(`[JITSU DEBUG] [Caching storage] getItem: ${key}=${value}. From cache: ${!!storageCache[key]}`);
      }
      return value;
    },
    reset() {
      for (const key of [...Object.keys(storageCache)]) {
        delete storageCache[key];
      }
      persistentStorage.reset();
    },
    removeItem(key) {
      if (opts.debug) {
        console.log(`[JITSU DEBUG] Caching storage removeItem: ${key}`);
      }
      delete storageCache[key];
      persistentStorage.removeItem(key);
    }
  });
  const storage = cachingStorageWrapper(((_a = rt.store) == null ? void 0 : _a.call(rt)) || createInMemoryStorage(opts.debug));
  if (opts.userId && !((_b = opts.privacy) == null ? void 0 : _b.disableUserIds) && !((_c = opts.privacy) == null ? void 0 : _c.dontSend)) {
    storage.setItem("__user_id", opts.userId);
  }
  const analytics = analyticsLib({
    debug: !!opts.debug,
    storage,
    plugins: [jitsuAnalyticsPlugin(opts, storage), ...plugins]
  });
  const a4 = __spreadProps(__spreadValues({}, analytics), {
    page: (...args) => {
      if (args.length === 2 && typeof args[0] === "string" && typeof args[1] === "object") {
        return analytics.page(__spreadValues({
          name: args[0]
        }, args[1]));
      } else {
        return analytics.page(...args);
      }
    },
    identify: (...args) => {
      if (args[0] && typeof args[0] !== "object" && typeof args[0] !== "string") {
        args[0] = args[0] + "";
      }
      const storage2 = analytics.storage;
      const storageWrapper = cachingStorageWrapper(storage2);
      if (typeof args[0] === "string") {
        storageWrapper.setItem("__user_id", args[0]);
      } else if (typeof args[0] === "object") {
        storageWrapper.setItem("__user_traits", args[0]);
      }
      if (args.length === 2 && typeof args[1] === "object") {
        storageWrapper.setItem("__user_traits", args[1]);
      }
      return analytics.identify(...args);
    },
    setContextProperty(name, value) {
      if (opts.debug) {
        console.log(`[JITSU DEBUG] Setting context property '${name}':${JSON.stringify(value)}`);
      }
      if (!opts.defaultPayloadContext) {
        opts.defaultPayloadContext = {
          [name]: value
        };
      } else {
        opts.defaultPayloadContext[name] = value;
      }
    },
    getContextProperty(name) {
      var _a2;
      if (opts.debug) {
        console.log(`[JITSU DEBUG] Getting context property '${name}'`);
      }
      return (_a2 = opts.defaultPayloadContext) == null ? void 0 : _a2[name];
    },
    user() {
      var _a2, _b2;
      const u3 = analytics.user();
      const idsDisabled = ((_a2 = opts.privacy) == null ? void 0 : _a2.disableUserIds) || ((_b2 = opts.privacy) == null ? void 0 : _b2.dontSend);
      if (idsDisabled) {
        return __spreadProps(__spreadValues({}, u3), {
          id: void 0
        });
      }
      if (u3 && !u3.id && opts.userId && !resetCalled) {
        return __spreadProps(__spreadValues({}, u3), {
          id: opts.userId
        });
      }
      return u3;
    },
    setAnonymousId: (id) => {
      if (opts.debug) {
        console.log("[JITSU DEBUG] Setting anonymous id to " + id);
      }
      storage.setItem("__anon_id", id);
      const userState = analytics.user();
      if (userState) {
        userState.anonymousId = id;
      }
      analytics.setAnonymousId(id);
    },
    reset() {
      return __async(this, null, function* () {
        resetCalled = true;
        if (opts.debug) {
          console.log("[JITSU DEBUG] Called reset(). Storage state", JSON.stringify(analytics.user()));
        }
        storage.reset();
        yield analytics.reset();
        this.setAnonymousId(uuid());
        if (opts.debug) {
          console.log("[JITSU DEBUG] User state after reset", JSON.stringify(analytics.user()));
        }
      });
    },
    configure(options) {
      return __async(this, null, function* () {
        var _a2, _b2;
        if (opts.debug) {
          console.log("[JITSU DEBUG] Update Jitsu config with", JSON.stringify(options));
        }
        if (((_a2 = options.privacy) == null ? void 0 : _a2.disableUserIds) || ((_b2 = options.privacy) == null ? void 0 : _b2.dontSend)) {
          storage.reset();
        }
        for (const plugin of Object.values(analytics.plugins)) {
          if (typeof plugin["configure"] === "function") {
            plugin["configure"](options);
          }
        }
      });
    },
    group(groupId, traits, options, callback) {
      return __async(this, null, function* () {
        const results = [];
        for (const plugin of Object.values(analytics.plugins)) {
          if (plugin["group"]) {
            results.push(yield plugin["group"](groupId, traits, options, callback));
          }
        }
        return results[0];
      });
    },
    getConfiguration() {
      return opts;
    }
  });
  if (((_e2 = opts.privacy) == null ? void 0 : _e2.disableUserIds) || ((_f = opts.privacy) == null ? void 0 : _f.dontSend)) {
    storage.reset();
  } else if (opts.userId) {
    a4.identify(opts.userId, {}, { autoIdentify: true }).catch((err) => {
      if (opts.debug) {
        console.warn("[JITSU WARNING] Auto-identification failed on initialization:", err);
      }
    });
  }
  return a4;
}
function fixOptions(opts) {
  var _a, _b;
  return __spreadProps(__spreadValues({}, opts), {
    host: ((_a = opts.host) != null ? _a : "").indexOf("https://") !== 0 && ((_b = opts.host) != null ? _b : "").indexOf("http://") !== 0 ? `https://${opts.host}` : opts.host
  });
}
function jitsuAnalytics(_opts) {
  const opts = fixOptions(_opts);
  if (opts.preInitAnonymousId) {
    ensureAnonymousId(opts);
  }
  const inBrowser = isInBrowser();
  const rt = opts.runtime || (inBrowser ? windowRuntime(opts) : emptyRuntime(opts));
  return createUnderlyingAnalyticsInstance(opts, rt);
}
export {
  createInMemoryStorage,
  parse as default,
  emptyAnalytics,
  emptyRuntime,
  ensureAnonymousId,
  isInBrowser,
  jitsuAnalytics,
  jitsuAnalyticsPlugin,
  parseQuery,
  randomId,
  uuid,
  windowRuntime
};
