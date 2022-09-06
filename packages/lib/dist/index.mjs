import Bt, { useMemo as z1, forwardRef as J1, useContext as bn, useRef as ir, useImperativeHandle as Q1, useEffect as br, useState as _s, createContext as K1, Component as Z1 } from "react";
import * as tr from "monaco-editor";
import "prism-react-renderer";
const eo = "vs-dark", to = !0, no = [
  {
    background: "002451",
    token: ""
  },
  {
    foreground: "7285b7",
    token: "comment"
  },
  {
    foreground: "ffffff",
    token: "keyword.operator.class"
  },
  {
    foreground: "ffffff",
    token: "keyword.operator"
  },
  {
    foreground: "ffffff",
    token: "constant.other"
  },
  {
    foreground: "ffffff",
    token: "source.php.embedded.line"
  },
  {
    foreground: "ff9da4",
    token: "variable"
  },
  {
    foreground: "ff9da4",
    token: "support.other.variable"
  },
  {
    foreground: "ff9da4",
    token: "string.other.link"
  },
  {
    foreground: "ff9da4",
    token: "string.regexp"
  },
  {
    foreground: "ff9da4",
    token: "entity.name.tag"
  },
  {
    foreground: "ff9da4",
    token: "entity.other.attribute-name"
  },
  {
    foreground: "ff9da4",
    token: "meta.tag"
  },
  {
    foreground: "ff9da4",
    token: "declaration.tag"
  },
  {
    foreground: "ff9da4",
    token: "markup.deleted.git_gutter"
  },
  {
    foreground: "ffc58f",
    token: "constant.numeric"
  },
  {
    foreground: "ffc58f",
    token: "constant.language"
  },
  {
    foreground: "ffc58f",
    token: "support.constant"
  },
  {
    foreground: "ffc58f",
    token: "constant.character"
  },
  {
    foreground: "ffc58f",
    token: "variable.parameter"
  },
  {
    foreground: "ffc58f",
    token: "punctuation.section.embedded"
  },
  {
    foreground: "ffc58f",
    token: "keyword.other.unit"
  },
  {
    foreground: "ffeead",
    token: "entity.name.class"
  },
  {
    foreground: "ffeead",
    token: "entity.name.type.class"
  },
  {
    foreground: "ffeead",
    token: "support.type"
  },
  {
    foreground: "ffeead",
    token: "support.class"
  },
  {
    foreground: "d1f1a9",
    token: "string"
  },
  {
    foreground: "d1f1a9",
    token: "constant.other.symbol"
  },
  {
    foreground: "d1f1a9",
    token: "entity.other.inherited-class"
  },
  {
    foreground: "d1f1a9",
    token: "markup.heading"
  },
  {
    foreground: "d1f1a9",
    token: "markup.inserted.git_gutter"
  },
  {
    foreground: "99ffff",
    token: "keyword.operator"
  },
  {
    foreground: "99ffff",
    token: "constant.other.color"
  },
  {
    foreground: "bbdaff",
    token: "entity.name.function"
  },
  {
    foreground: "bbdaff",
    token: "meta.function-call"
  },
  {
    foreground: "bbdaff",
    token: "support.function"
  },
  {
    foreground: "bbdaff",
    token: "keyword.other.special-method"
  },
  {
    foreground: "bbdaff",
    token: "meta.block-level"
  },
  {
    foreground: "bbdaff",
    token: "markup.changed.git_gutter"
  },
  {
    foreground: "ebbbff",
    token: "keyword"
  },
  {
    foreground: "ebbbff",
    token: "storage"
  },
  {
    foreground: "ebbbff",
    token: "storage.type"
  },
  {
    foreground: "ebbbff",
    token: "entity.name.tag.css"
  },
  {
    foreground: "ffffff",
    background: "f99da5",
    token: "invalid"
  },
  {
    foreground: "ffffff",
    background: "bbdafe",
    token: "meta.separator"
  },
  {
    foreground: "ffffff",
    background: "ebbbff",
    token: "invalid.deprecated"
  },
  {
    foreground: "ffffff",
    token: "markup.inserted.diff"
  },
  {
    foreground: "ffffff",
    token: "markup.deleted.diff"
  },
  {
    foreground: "ffffff",
    token: "meta.diff.header.to-file"
  },
  {
    foreground: "ffffff",
    token: "meta.diff.header.from-file"
  },
  {
    foreground: "718c00",
    token: "markup.inserted.diff"
  },
  {
    foreground: "718c00",
    token: "meta.diff.header.to-file"
  },
  {
    foreground: "c82829",
    token: "markup.deleted.diff"
  },
  {
    foreground: "c82829",
    token: "meta.diff.header.from-file"
  },
  {
    foreground: "ffffff",
    background: "4271ae",
    token: "meta.diff.header.from-file"
  },
  {
    foreground: "ffffff",
    background: "4271ae",
    token: "meta.diff.header.to-file"
  },
  {
    foreground: "3e999f",
    fontStyle: "italic",
    token: "meta.diff.range"
  }
], ro = {
  "editor.foreground": "#FFFFFF",
  "editor.background": "#002451",
  "editor.selectionBackground": "#003F8E",
  "editor.lineHighlightBackground": "#00346E",
  "editorCursor.foreground": "#FFFFFF",
  "editorWhitespace.foreground": "#404F7D"
}, so = {
  base: eo,
  inherit: to,
  rules: no,
  colors: ro
};
var jt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Un = { exports: {} }, an = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function oo() {
  if (Gr)
    return an;
  Gr = 1;
  var e = Bt, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(m, y, _) {
    var v, P = {}, A = null, j = null;
    _ !== void 0 && (A = "" + _), y.key !== void 0 && (A = "" + y.key), y.ref !== void 0 && (j = y.ref);
    for (v in y)
      o.call(y, v) && !c.hasOwnProperty(v) && (P[v] = y[v]);
    if (m && m.defaultProps)
      for (v in y = m.defaultProps, y)
        P[v] === void 0 && (P[v] = y[v]);
    return { $$typeof: n, type: m, key: A, ref: j, props: P, _owner: i.current };
  }
  return an.Fragment = r, an.jsx = p, an.jsxs = p, an;
}
var cn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr;
function io() {
  return zr || (zr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Bt, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), m = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), Y = Symbol.iterator, ce = "@@iterator";
    function ue(u) {
      if (u === null || typeof u != "object")
        return null;
      var x = Y && u[Y] || u[ce];
      return typeof x == "function" ? x : null;
    }
    var J = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function K(u) {
      {
        for (var x = arguments.length, E = new Array(x > 1 ? x - 1 : 0), L = 1; L < x; L++)
          E[L - 1] = arguments[L];
        he("error", u, E);
      }
    }
    function he(u, x, E) {
      {
        var L = J.ReactDebugCurrentFrame, U = L.getStackAddendum();
        U !== "" && (x += "%s", E = E.concat([U]));
        var G = E.map(function(V) {
          return String(V);
        });
        G.unshift("Warning: " + x), Function.prototype.apply.call(console[u], console, G);
      }
    }
    var fe = !1, ve = !1, $e = !1, Ce = !1, Ge = !1, Oe;
    Oe = Symbol.for("react.module.reference");
    function ze(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === o || u === c || Ge || u === i || u === _ || u === v || Ce || u === j || fe || ve || $e || typeof u == "object" && u !== null && (u.$$typeof === A || u.$$typeof === P || u.$$typeof === p || u.$$typeof === m || u.$$typeof === y || u.$$typeof === Oe || u.getModuleId !== void 0));
    }
    function De(u, x, E) {
      var L = u.displayName;
      if (L)
        return L;
      var U = x.displayName || x.name || "";
      return U !== "" ? E + "(" + U + ")" : E;
    }
    function Pe(u) {
      return u.displayName || "Context";
    }
    function _e(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && K("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case _:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case m:
            var x = u;
            return Pe(x) + ".Consumer";
          case p:
            var E = u;
            return Pe(E._context) + ".Provider";
          case y:
            return De(u, u.render, "ForwardRef");
          case P:
            var L = u.displayName || null;
            return L !== null ? L : _e(u.type) || "Memo";
          case A: {
            var U = u, G = U._payload, V = U._init;
            try {
              return _e(V(G));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var xe = Object.assign, Ee = 0, Le, je, ee, Ve, Fe, We, Be;
    function nt() {
    }
    nt.__reactDisabledLog = !0;
    function dt() {
      {
        if (Ee === 0) {
          Le = console.log, je = console.info, ee = console.warn, Ve = console.error, Fe = console.group, We = console.groupCollapsed, Be = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: nt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: u,
            log: u,
            warn: u,
            error: u,
            group: u,
            groupCollapsed: u,
            groupEnd: u
          });
        }
        Ee++;
      }
    }
    function g() {
      {
        if (Ee--, Ee === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: xe({}, u, {
              value: Le
            }),
            info: xe({}, u, {
              value: je
            }),
            warn: xe({}, u, {
              value: ee
            }),
            error: xe({}, u, {
              value: Ve
            }),
            group: xe({}, u, {
              value: Fe
            }),
            groupCollapsed: xe({}, u, {
              value: We
            }),
            groupEnd: xe({}, u, {
              value: Be
            })
          });
        }
        Ee < 0 && K("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var b = J.ReactCurrentDispatcher, w;
    function I(u, x, E) {
      {
        if (w === void 0)
          try {
            throw Error();
          } catch (U) {
            var L = U.stack.trim().match(/\n( *(at )?)/);
            w = L && L[1] || "";
          }
        return `
` + w + u;
      }
    }
    var S = !1, C;
    {
      var D = typeof WeakMap == "function" ? WeakMap : Map;
      C = new D();
    }
    function H(u, x) {
      if (!u || S)
        return "";
      {
        var E = C.get(u);
        if (E !== void 0)
          return E;
      }
      var L;
      S = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var G;
      G = b.current, b.current = null, dt();
      try {
        if (x) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (He) {
              L = He;
            }
            Reflect.construct(u, [], V);
          } else {
            try {
              V.call();
            } catch (He) {
              L = He;
            }
            u.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (He) {
            L = He;
          }
          u();
        }
      } catch (He) {
        if (He && L && typeof He.stack == "string") {
          for (var $ = He.stack.split(`
`), ke = L.stack.split(`
`), re = $.length - 1, se = ke.length - 1; re >= 1 && se >= 0 && $[re] !== ke[se]; )
            se--;
          for (; re >= 1 && se >= 0; re--, se--)
            if ($[re] !== ke[se]) {
              if (re !== 1 || se !== 1)
                do
                  if (re--, se--, se < 0 || $[re] !== ke[se]) {
                    var Se = `
` + $[re].replace(" at new ", " at ");
                    return u.displayName && Se.includes("<anonymous>") && (Se = Se.replace("<anonymous>", u.displayName)), typeof u == "function" && C.set(u, Se), Se;
                  }
                while (re >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        S = !1, b.current = G, g(), Error.prepareStackTrace = U;
      }
      var ct = u ? u.displayName || u.name : "", Sn = ct ? I(ct) : "";
      return typeof u == "function" && C.set(u, Sn), Sn;
    }
    function Z(u, x, E) {
      return H(u, !1);
    }
    function Q(u) {
      var x = u.prototype;
      return !!(x && x.isReactComponent);
    }
    function ie(u, x, E) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return H(u, Q(u));
      if (typeof u == "string")
        return I(u);
      switch (u) {
        case _:
          return I("Suspense");
        case v:
          return I("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case y:
            return Z(u.render);
          case P:
            return ie(u.type, x, E);
          case A: {
            var L = u, U = L._payload, G = L._init;
            try {
              return ie(G(U), x, E);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, ne = {}, me = J.ReactDebugCurrentFrame;
    function pe(u) {
      if (u) {
        var x = u._owner, E = ie(u.type, u._source, x ? x.type : null);
        me.setExtraStackFrame(E);
      } else
        me.setExtraStackFrame(null);
    }
    function rt(u, x, E, L, U) {
      {
        var G = Function.call.bind(de);
        for (var V in u)
          if (G(u, V)) {
            var $ = void 0;
            try {
              if (typeof u[V] != "function") {
                var ke = Error((L || "React class") + ": " + E + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ke.name = "Invariant Violation", ke;
              }
              $ = u[V](x, V, L, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              $ = re;
            }
            $ && !($ instanceof Error) && (pe(U), K("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", E, V, typeof $), pe(null)), $ instanceof Error && !($.message in ne) && (ne[$.message] = !0, pe(U), K("Failed %s type: %s", E, $.message), pe(null));
          }
      }
    }
    var at = Array.isArray;
    function st(u) {
      return at(u);
    }
    function Vt(u) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, E = x && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return E;
      }
    }
    function Wt(u) {
      try {
        return vt(u), !1;
      } catch {
        return !0;
      }
    }
    function vt(u) {
      return "" + u;
    }
    function Et(u) {
      if (Wt(u))
        return K("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vt(u)), vt(u);
    }
    var ot = J.ReactCurrentOwner, Ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, St, At, mt;
    mt = {};
    function Ut(u) {
      if (de.call(u, "ref")) {
        var x = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Xt(u) {
      if (de.call(u, "key")) {
        var x = Object.getOwnPropertyDescriptor(u, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Yt(u, x) {
      if (typeof u.ref == "string" && ot.current && x && ot.current.stateNode !== x) {
        var E = _e(ot.current.type);
        mt[E] || (K('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _e(ot.current.type), u.ref), mt[E] = !0);
      }
    }
    function Gt(u, x) {
      {
        var E = function() {
          St || (St = !0, K("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function zt(u, x) {
      {
        var E = function() {
          At || (At = !0, K("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        E.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Jt = function(u, x, E, L, U, G, V) {
      var $ = {
        $$typeof: n,
        type: u,
        key: x,
        ref: E,
        props: V,
        _owner: G
      };
      return $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty($, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty($, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    };
    function Qt(u, x, E, L, U) {
      {
        var G, V = {}, $ = null, ke = null;
        E !== void 0 && (Et(E), $ = "" + E), Xt(x) && (Et(x.key), $ = "" + x.key), Ut(x) && (ke = x.ref, Yt(x, U));
        for (G in x)
          de.call(x, G) && !Ht.hasOwnProperty(G) && (V[G] = x[G]);
        if (u && u.defaultProps) {
          var re = u.defaultProps;
          for (G in re)
            V[G] === void 0 && (V[G] = re[G]);
        }
        if ($ || ke) {
          var se = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          $ && Gt(V, se), ke && zt(V, se);
        }
        return Jt(u, $, ke, U, L, ot.current, V);
      }
    }
    var kt = J.ReactCurrentOwner, Pt = J.ReactDebugCurrentFrame;
    function Je(u) {
      if (u) {
        var x = u._owner, E = ie(u.type, u._source, x ? x.type : null);
        Pt.setExtraStackFrame(E);
      } else
        Pt.setExtraStackFrame(null);
    }
    var gt;
    gt = !1;
    function _t(u) {
      return typeof u == "object" && u !== null && u.$$typeof === n;
    }
    function Rt() {
      {
        if (kt.current) {
          var u = _e(kt.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Kt(u) {
      {
        if (u !== void 0) {
          var x = u.fileName.replace(/^.*[\\\/]/, ""), E = u.lineNumber;
          return `

Check your code at ` + x + ":" + E + ".";
        }
        return "";
      }
    }
    var Nt = {};
    function Zt(u) {
      {
        var x = Rt();
        if (!x) {
          var E = typeof u == "string" ? u : u.displayName || u.name;
          E && (x = `

Check the top-level render call using <` + E + ">.");
        }
        return x;
      }
    }
    function Ct(u, x) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var E = Zt(x);
        if (Nt[E])
          return;
        Nt[E] = !0;
        var L = "";
        u && u._owner && u._owner !== kt.current && (L = " It was passed a child from " + _e(u._owner.type) + "."), Je(u), K('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, L), Je(null);
      }
    }
    function Ot(u, x) {
      {
        if (typeof u != "object")
          return;
        if (st(u))
          for (var E = 0; E < u.length; E++) {
            var L = u[E];
            _t(L) && Ct(L, x);
          }
        else if (_t(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var U = ue(u);
          if (typeof U == "function" && U !== u.entries)
            for (var G = U.call(u), V; !(V = G.next()).done; )
              _t(V.value) && Ct(V.value, x);
        }
      }
    }
    function en(u) {
      {
        var x = u.type;
        if (x == null || typeof x == "string")
          return;
        var E;
        if (typeof x == "function")
          E = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === y || x.$$typeof === P))
          E = x.propTypes;
        else
          return;
        if (E) {
          var L = _e(x);
          rt(E, u.props, "prop", L, u);
        } else if (x.PropTypes !== void 0 && !gt) {
          gt = !0;
          var U = _e(x);
          K("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && K("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(u) {
      {
        for (var x = Object.keys(u.props), E = 0; E < x.length; E++) {
          var L = x[E];
          if (L !== "children" && L !== "key") {
            Je(u), K("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Je(null);
            break;
          }
        }
        u.ref !== null && (Je(u), K("Invalid attribute `ref` supplied to `React.Fragment`."), Je(null));
      }
    }
    function Dt(u, x, E, L, U, G) {
      {
        var V = ze(u);
        if (!V) {
          var $ = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && ($ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ke = Kt(U);
          ke ? $ += ke : $ += Rt();
          var re;
          u === null ? re = "null" : st(u) ? re = "array" : u !== void 0 && u.$$typeof === n ? (re = "<" + (_e(u.type) || "Unknown") + " />", $ = " Did you accidentally export a JSX literal instead of a component?") : re = typeof u, K("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, $);
        }
        var se = Qt(u, x, E, U, G);
        if (se == null)
          return se;
        if (V) {
          var Se = x.children;
          if (Se !== void 0)
            if (L)
              if (st(Se)) {
                for (var ct = 0; ct < Se.length; ct++)
                  Ot(Se[ct], u);
                Object.freeze && Object.freeze(Se);
              } else
                K("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ot(Se, u);
        }
        return u === o ? tn(se) : en(se), se;
      }
    }
    function nn(u, x, E) {
      return Dt(u, x, E, !0);
    }
    function rn(u, x, E) {
      return Dt(u, x, E, !1);
    }
    var sn = rn, on = nn;
    cn.Fragment = o, cn.jsx = sn, cn.jsxs = on;
  }()), cn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = oo() : e.exports = io();
})(Un);
const ys = Un.exports.Fragment, Ie = Un.exports.jsx, bs = Un.exports.jsxs, ar = {
  scope: {},
  theme: so
}, Xn = Bt.createContext(ar), ao = (e) => {
  const {
    theme: n,
    scope: r
  } = e, o = z1(() => ({
    scope: r || ar.scope,
    theme: n || ar.theme
  }), [r, n]);
  return /* @__PURE__ */ Ie(Xn.Provider, {
    value: o,
    children: e.children
  });
};
function co() {
  return new Worker("" + new URL("assets/editor.worker.55353356.js", import.meta.url).href);
}
function lo() {
  return new Worker("" + new URL("assets/json.worker.2be2570f.js", import.meta.url).href);
}
function uo() {
  return new Worker("" + new URL("assets/css.worker.1bba75ea.js", import.meta.url).href);
}
function fo() {
  return new Worker("" + new URL("assets/html.worker.3376e5b8.js", import.meta.url).href);
}
function po() {
  return new Worker("" + new URL("assets/ts.worker.9acd5107.js", import.meta.url).href);
}
self.MonacoEnvironment = {
  getWorker(e, n) {
    return n === "json" ? new lo() : n === "css" || n === "scss" || n === "less" ? new uo() : n === "html" || n === "handlebars" || n === "razor" ? new fo() : n === "typescript" || n === "javascript" ? new po() : new co();
  }
};
const ho = {
  tabSize: 2,
  lineNumbers: "off",
  minimap: {
    enabled: !1,
    size: "proportional",
    showSlider: "mouseover"
  },
  showUnused: !0,
  useShadowDOM: !0,
  language: "javascript"
}, mo = J1((e, n) => {
  const r = bn(Xn), {
    defaultValue: o = "",
    editorOptions: i,
    theme: c = r.theme,
    ...p
  } = e, m = ir(null), y = ir(null);
  return Q1(n, () => ({
    get editor() {
      return m.current;
    }
  })), br(() => (y && !m.current && (tr.editor.defineTheme("tomorrowNightBlue", c), tr.editor.setTheme("tomorrowNightBlue"), m.current = tr.editor.create(y.current, {
    ...ho,
    ...i,
    value: o
  })), () => {
    var _;
    return (_ = m.current) == null ? void 0 : _.dispose();
  }), [y]), /* @__PURE__ */ Ie("div", {
    style: {
      width: 600,
      height: 600
    },
    ...p,
    ref: y
  });
});
var l;
(function(e) {
  e[e.NONE = 0] = "NONE";
  const r = 0 + 1;
  e[e._abstract = r] = "_abstract";
  const o = r + 1;
  e[e._accessor = o] = "_accessor";
  const i = o + 1;
  e[e._as = i] = "_as";
  const c = i + 1;
  e[e._asserts = c] = "_asserts";
  const p = c + 1;
  e[e._async = p] = "_async";
  const m = p + 1;
  e[e._await = m] = "_await";
  const y = m + 1;
  e[e._checks = y] = "_checks";
  const _ = y + 1;
  e[e._constructor = _] = "_constructor";
  const v = _ + 1;
  e[e._declare = v] = "_declare";
  const P = v + 1;
  e[e._enum = P] = "_enum";
  const A = P + 1;
  e[e._exports = A] = "_exports";
  const j = A + 1;
  e[e._from = j] = "_from";
  const Y = j + 1;
  e[e._get = Y] = "_get";
  const ce = Y + 1;
  e[e._global = ce] = "_global";
  const ue = ce + 1;
  e[e._implements = ue] = "_implements";
  const J = ue + 1;
  e[e._infer = J] = "_infer";
  const K = J + 1;
  e[e._interface = K] = "_interface";
  const he = K + 1;
  e[e._is = he] = "_is";
  const fe = he + 1;
  e[e._keyof = fe] = "_keyof";
  const ve = fe + 1;
  e[e._mixins = ve] = "_mixins";
  const $e = ve + 1;
  e[e._module = $e] = "_module";
  const Ce = $e + 1;
  e[e._namespace = Ce] = "_namespace";
  const Ge = Ce + 1;
  e[e._of = Ge] = "_of";
  const Oe = Ge + 1;
  e[e._opaque = Oe] = "_opaque";
  const ze = Oe + 1;
  e[e._out = ze] = "_out";
  const De = ze + 1;
  e[e._override = De] = "_override";
  const Pe = De + 1;
  e[e._private = Pe] = "_private";
  const _e = Pe + 1;
  e[e._protected = _e] = "_protected";
  const xe = _e + 1;
  e[e._proto = xe] = "_proto";
  const Ee = xe + 1;
  e[e._public = Ee] = "_public";
  const Le = Ee + 1;
  e[e._readonly = Le] = "_readonly";
  const je = Le + 1;
  e[e._require = je] = "_require";
  const ee = je + 1;
  e[e._set = ee] = "_set";
  const Ve = ee + 1;
  e[e._static = Ve] = "_static";
  const Fe = Ve + 1;
  e[e._symbol = Fe] = "_symbol";
  const We = Fe + 1;
  e[e._type = We] = "_type";
  const Be = We + 1;
  e[e._unique = Be] = "_unique";
})(l || (l = {}));
var t;
(function(e) {
  e[e.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK";
  const r = 1 << 4;
  e[e.IS_KEYWORD = r] = "IS_KEYWORD";
  const o = 1 << 5;
  e[e.IS_ASSIGN = o] = "IS_ASSIGN";
  const i = 1 << 6;
  e[e.IS_RIGHT_ASSOCIATIVE = i] = "IS_RIGHT_ASSOCIATIVE";
  const c = 1 << 7;
  e[e.IS_PREFIX = c] = "IS_PREFIX";
  const p = 1 << 8;
  e[e.IS_POSTFIX = p] = "IS_POSTFIX";
  const m = 1 << 9;
  e[e.IS_EXPRESSION_START = m] = "IS_EXPRESSION_START";
  const y = 512;
  e[e.num = y] = "num";
  const _ = 1536;
  e[e.bigint = _] = "bigint";
  const v = 2560;
  e[e.decimal = v] = "decimal";
  const P = 3584;
  e[e.regexp = P] = "regexp";
  const A = 4608;
  e[e.string = A] = "string";
  const j = 5632;
  e[e.name = j] = "name";
  const Y = 6144;
  e[e.eof = Y] = "eof";
  const ce = 7680;
  e[e.bracketL = ce] = "bracketL";
  const ue = 8192;
  e[e.bracketR = ue] = "bracketR";
  const J = 9728;
  e[e.braceL = J] = "braceL";
  const K = 10752;
  e[e.braceBarL = K] = "braceBarL";
  const he = 11264;
  e[e.braceR = he] = "braceR";
  const fe = 12288;
  e[e.braceBarR = fe] = "braceBarR";
  const ve = 13824;
  e[e.parenL = ve] = "parenL";
  const $e = 14336;
  e[e.parenR = $e] = "parenR";
  const Ce = 15360;
  e[e.comma = Ce] = "comma";
  const Ge = 16384;
  e[e.semi = Ge] = "semi";
  const Oe = 17408;
  e[e.colon = Oe] = "colon";
  const ze = 18432;
  e[e.doubleColon = ze] = "doubleColon";
  const De = 19456;
  e[e.dot = De] = "dot";
  const Pe = 20480;
  e[e.question = Pe] = "question";
  const _e = 21504;
  e[e.questionDot = _e] = "questionDot";
  const xe = 22528;
  e[e.arrow = xe] = "arrow";
  const Ee = 23552;
  e[e.template = Ee] = "template";
  const Le = 24576;
  e[e.ellipsis = Le] = "ellipsis";
  const je = 25600;
  e[e.backQuote = je] = "backQuote";
  const ee = 27136;
  e[e.dollarBraceL = ee] = "dollarBraceL";
  const Ve = 27648;
  e[e.at = Ve] = "at";
  const Fe = 29184;
  e[e.hash = Fe] = "hash";
  const We = 29728;
  e[e.eq = We] = "eq";
  const Be = 30752;
  e[e.assign = Be] = "assign";
  const nt = 32640;
  e[e.preIncDec = nt] = "preIncDec";
  const dt = 33664;
  e[e.postIncDec = dt] = "postIncDec";
  const g = 34432;
  e[e.bang = g] = "bang";
  const b = 35456;
  e[e.tilde = b] = "tilde";
  const w = 35841;
  e[e.pipeline = w] = "pipeline";
  const I = 36866;
  e[e.nullishCoalescing = I] = "nullishCoalescing";
  const S = 37890;
  e[e.logicalOR = S] = "logicalOR";
  const C = 38915;
  e[e.logicalAND = C] = "logicalAND";
  const D = 39940;
  e[e.bitwiseOR = D] = "bitwiseOR";
  const H = 40965;
  e[e.bitwiseXOR = H] = "bitwiseXOR";
  const Z = 41990;
  e[e.bitwiseAND = Z] = "bitwiseAND";
  const Q = 43015;
  e[e.equality = Q] = "equality";
  const ie = 44040;
  e[e.lessThan = ie] = "lessThan";
  const de = 45064;
  e[e.greaterThan = de] = "greaterThan";
  const ne = 46088;
  e[e.relationalOrEqual = ne] = "relationalOrEqual";
  const me = 47113;
  e[e.bitShiftL = me] = "bitShiftL";
  const pe = 48137;
  e[e.bitShiftR = pe] = "bitShiftR";
  const rt = 49802;
  e[e.plus = rt] = "plus";
  const at = 50826;
  e[e.minus = at] = "minus";
  const st = 51723;
  e[e.modulo = st] = "modulo";
  const Vt = 52235;
  e[e.star = Vt] = "star";
  const Wt = 53259;
  e[e.slash = Wt] = "slash";
  const vt = 54348;
  e[e.exponent = vt] = "exponent";
  const Et = 55296;
  e[e.jsxName = Et] = "jsxName";
  const ot = 56320;
  e[e.jsxText = ot] = "jsxText";
  const Ht = 57856;
  e[e.jsxTagStart = Ht] = "jsxTagStart";
  const St = 58368;
  e[e.jsxTagEnd = St] = "jsxTagEnd";
  const At = 59904;
  e[e.typeParameterStart = At] = "typeParameterStart";
  const mt = 60416;
  e[e.nonNullAssertion = mt] = "nonNullAssertion";
  const Ut = 61456;
  e[e._break = Ut] = "_break";
  const Xt = 62480;
  e[e._case = Xt] = "_case";
  const Yt = 63504;
  e[e._catch = Yt] = "_catch";
  const Gt = 64528;
  e[e._continue = Gt] = "_continue";
  const zt = 65552;
  e[e._debugger = zt] = "_debugger";
  const Jt = 66576;
  e[e._default = Jt] = "_default";
  const Qt = 67600;
  e[e._do = Qt] = "_do";
  const kt = 68624;
  e[e._else = kt] = "_else";
  const Pt = 69648;
  e[e._finally = Pt] = "_finally";
  const Je = 70672;
  e[e._for = Je] = "_for";
  const gt = 72208;
  e[e._function = gt] = "_function";
  const _t = 72720;
  e[e._if = _t] = "_if";
  const Rt = 73744;
  e[e._return = Rt] = "_return";
  const Kt = 74768;
  e[e._switch = Kt] = "_switch";
  const Nt = 76432;
  e[e._throw = Nt] = "_throw";
  const Zt = 76816;
  e[e._try = Zt] = "_try";
  const Ct = 77840;
  e[e._var = Ct] = "_var";
  const Ot = 78864;
  e[e._let = Ot] = "_let";
  const en = 79888;
  e[e._const = en] = "_const";
  const tn = 80912;
  e[e._while = tn] = "_while";
  const Dt = 81936;
  e[e._with = Dt] = "_with";
  const nn = 83472;
  e[e._new = nn] = "_new";
  const rn = 84496;
  e[e._this = rn] = "_this";
  const sn = 85520;
  e[e._super = sn] = "_super";
  const on = 86544;
  e[e._class = on] = "_class";
  const u = 87056;
  e[e._extends = u] = "_extends";
  const x = 88080;
  e[e._export = x] = "_export";
  const E = 89616;
  e[e._import = E] = "_import";
  const L = 90640;
  e[e._yield = L] = "_yield";
  const U = 91664;
  e[e._null = U] = "_null";
  const G = 92688;
  e[e._true = G] = "_true";
  const V = 93712;
  e[e._false = V] = "_false";
  const $ = 94232;
  e[e._in = $] = "_in";
  const ke = 95256;
  e[e._instanceof = ke] = "_instanceof";
  const re = 96912;
  e[e._typeof = re] = "_typeof";
  const se = 97936;
  e[e._void = se] = "_void";
  const Se = 98960;
  e[e._delete = Se] = "_delete";
  const ct = 99856;
  e[e._async = ct] = "_async";
  const Sn = 100880;
  e[e._get = Sn] = "_get";
  const He = 101904;
  e[e._set = He] = "_set";
  const F1 = 102928;
  e[e._declare = F1] = "_declare";
  const B1 = 103952;
  e[e._readonly = B1] = "_readonly";
  const q1 = 104976;
  e[e._abstract = q1] = "_abstract";
  const M1 = 106e3;
  e[e._static = M1] = "_static";
  const $1 = 106512;
  e[e._public = $1] = "_public";
  const V1 = 107536;
  e[e._private = V1] = "_private";
  const W1 = 108560;
  e[e._protected = W1] = "_protected";
  const H1 = 109584;
  e[e._override = H1] = "_override";
  const U1 = 111120;
  e[e._as = U1] = "_as";
  const X1 = 112144;
  e[e._enum = X1] = "_enum";
  const Y1 = 113168;
  e[e._type = Y1] = "_type";
  const G1 = 114192;
  e[e._implements = G1] = "_implements";
})(t || (t = {}));
function ko(e) {
  switch (e) {
    case t.num:
      return "num";
    case t.bigint:
      return "bigint";
    case t.decimal:
      return "decimal";
    case t.regexp:
      return "regexp";
    case t.string:
      return "string";
    case t.name:
      return "name";
    case t.eof:
      return "eof";
    case t.bracketL:
      return "[";
    case t.bracketR:
      return "]";
    case t.braceL:
      return "{";
    case t.braceBarL:
      return "{|";
    case t.braceR:
      return "}";
    case t.braceBarR:
      return "|}";
    case t.parenL:
      return "(";
    case t.parenR:
      return ")";
    case t.comma:
      return ",";
    case t.semi:
      return ";";
    case t.colon:
      return ":";
    case t.doubleColon:
      return "::";
    case t.dot:
      return ".";
    case t.question:
      return "?";
    case t.questionDot:
      return "?.";
    case t.arrow:
      return "=>";
    case t.template:
      return "template";
    case t.ellipsis:
      return "...";
    case t.backQuote:
      return "`";
    case t.dollarBraceL:
      return "${";
    case t.at:
      return "@";
    case t.hash:
      return "#";
    case t.eq:
      return "=";
    case t.assign:
      return "_=";
    case t.preIncDec:
      return "++/--";
    case t.postIncDec:
      return "++/--";
    case t.bang:
      return "!";
    case t.tilde:
      return "~";
    case t.pipeline:
      return "|>";
    case t.nullishCoalescing:
      return "??";
    case t.logicalOR:
      return "||";
    case t.logicalAND:
      return "&&";
    case t.bitwiseOR:
      return "|";
    case t.bitwiseXOR:
      return "^";
    case t.bitwiseAND:
      return "&";
    case t.equality:
      return "==/!=";
    case t.lessThan:
      return "<";
    case t.greaterThan:
      return ">";
    case t.relationalOrEqual:
      return "<=/>=";
    case t.bitShiftL:
      return "<<";
    case t.bitShiftR:
      return ">>/>>>";
    case t.plus:
      return "+";
    case t.minus:
      return "-";
    case t.modulo:
      return "%";
    case t.star:
      return "*";
    case t.slash:
      return "/";
    case t.exponent:
      return "**";
    case t.jsxName:
      return "jsxName";
    case t.jsxText:
      return "jsxText";
    case t.jsxTagStart:
      return "jsxTagStart";
    case t.jsxTagEnd:
      return "jsxTagEnd";
    case t.typeParameterStart:
      return "typeParameterStart";
    case t.nonNullAssertion:
      return "nonNullAssertion";
    case t._break:
      return "break";
    case t._case:
      return "case";
    case t._catch:
      return "catch";
    case t._continue:
      return "continue";
    case t._debugger:
      return "debugger";
    case t._default:
      return "default";
    case t._do:
      return "do";
    case t._else:
      return "else";
    case t._finally:
      return "finally";
    case t._for:
      return "for";
    case t._function:
      return "function";
    case t._if:
      return "if";
    case t._return:
      return "return";
    case t._switch:
      return "switch";
    case t._throw:
      return "throw";
    case t._try:
      return "try";
    case t._var:
      return "var";
    case t._let:
      return "let";
    case t._const:
      return "const";
    case t._while:
      return "while";
    case t._with:
      return "with";
    case t._new:
      return "new";
    case t._this:
      return "this";
    case t._super:
      return "super";
    case t._class:
      return "class";
    case t._extends:
      return "extends";
    case t._export:
      return "export";
    case t._import:
      return "import";
    case t._yield:
      return "yield";
    case t._null:
      return "null";
    case t._true:
      return "true";
    case t._false:
      return "false";
    case t._in:
      return "in";
    case t._instanceof:
      return "instanceof";
    case t._typeof:
      return "typeof";
    case t._void:
      return "void";
    case t._delete:
      return "delete";
    case t._async:
      return "async";
    case t._get:
      return "get";
    case t._set:
      return "set";
    case t._declare:
      return "declare";
    case t._readonly:
      return "readonly";
    case t._abstract:
      return "abstract";
    case t._static:
      return "static";
    case t._public:
      return "public";
    case t._private:
      return "private";
    case t._protected:
      return "protected";
    case t._override:
      return "override";
    case t._as:
      return "as";
    case t._enum:
      return "enum";
    case t._type:
      return "type";
    case t._implements:
      return "implements";
    default:
      return "";
  }
}
class et {
  constructor(n, r, o) {
    this.startTokenIndex = n, this.endTokenIndex = r, this.isFunctionScope = o;
  }
}
class go {
  constructor(n, r, o, i, c, p, m, y, _, v, P, A, j) {
    this.potentialArrowAt = n, this.noAnonFunctionType = r, this.inDisallowConditionalTypesContext = o, this.tokensLength = i, this.scopesLength = c, this.pos = p, this.type = m, this.contextualKeyword = y, this.start = _, this.end = v, this.isType = P, this.scopeDepth = A, this.error = j;
  }
}
class Te {
  constructor() {
    Te.prototype.__init.call(this), Te.prototype.__init2.call(this), Te.prototype.__init3.call(this), Te.prototype.__init4.call(this), Te.prototype.__init5.call(this), Te.prototype.__init6.call(this), Te.prototype.__init7.call(this), Te.prototype.__init8.call(this), Te.prototype.__init9.call(this), Te.prototype.__init10.call(this), Te.prototype.__init11.call(this), Te.prototype.__init12.call(this), Te.prototype.__init13.call(this);
  }
  __init() {
    this.potentialArrowAt = -1;
  }
  __init2() {
    this.noAnonFunctionType = !1;
  }
  __init3() {
    this.inDisallowConditionalTypesContext = !1;
  }
  __init4() {
    this.tokens = [];
  }
  __init5() {
    this.scopes = [];
  }
  __init6() {
    this.pos = 0;
  }
  __init7() {
    this.type = t.eof;
  }
  __init8() {
    this.contextualKeyword = l.NONE;
  }
  __init9() {
    this.start = 0;
  }
  __init10() {
    this.end = 0;
  }
  __init11() {
    this.isType = !1;
  }
  __init12() {
    this.scopeDepth = 0;
  }
  __init13() {
    this.error = null;
  }
  snapshot() {
    return new go(
      this.potentialArrowAt,
      this.noAnonFunctionType,
      this.inDisallowConditionalTypesContext,
      this.tokens.length,
      this.scopes.length,
      this.pos,
      this.type,
      this.contextualKeyword,
      this.start,
      this.end,
      this.isType,
      this.scopeDepth,
      this.error
    );
  }
  restoreFromSnapshot(n) {
    this.potentialArrowAt = n.potentialArrowAt, this.noAnonFunctionType = n.noAnonFunctionType, this.inDisallowConditionalTypesContext = n.inDisallowConditionalTypesContext, this.tokens.length = n.tokensLength, this.scopes.length = n.scopesLength, this.pos = n.pos, this.type = n.type, this.contextualKeyword = n.contextualKeyword, this.start = n.start, this.end = n.end, this.isType = n.isType, this.scopeDepth = n.scopeDepth, this.error = n.error;
  }
}
var f;
(function(e) {
  e[e.backSpace = 8] = "backSpace";
  const r = 10;
  e[e.lineFeed = r] = "lineFeed";
  const o = 13;
  e[e.carriageReturn = o] = "carriageReturn";
  const i = 14;
  e[e.shiftOut = i] = "shiftOut";
  const c = 32;
  e[e.space = c] = "space";
  const p = 33;
  e[e.exclamationMark = p] = "exclamationMark";
  const m = 34;
  e[e.quotationMark = m] = "quotationMark";
  const y = 35;
  e[e.numberSign = y] = "numberSign";
  const _ = 36;
  e[e.dollarSign = _] = "dollarSign";
  const v = 37;
  e[e.percentSign = v] = "percentSign";
  const P = 38;
  e[e.ampersand = P] = "ampersand";
  const A = 39;
  e[e.apostrophe = A] = "apostrophe";
  const j = 40;
  e[e.leftParenthesis = j] = "leftParenthesis";
  const Y = 41;
  e[e.rightParenthesis = Y] = "rightParenthesis";
  const ce = 42;
  e[e.asterisk = ce] = "asterisk";
  const ue = 43;
  e[e.plusSign = ue] = "plusSign";
  const J = 44;
  e[e.comma = J] = "comma";
  const K = 45;
  e[e.dash = K] = "dash";
  const he = 46;
  e[e.dot = he] = "dot";
  const fe = 47;
  e[e.slash = fe] = "slash";
  const ve = 48;
  e[e.digit0 = ve] = "digit0";
  const $e = 49;
  e[e.digit1 = $e] = "digit1";
  const Ce = 50;
  e[e.digit2 = Ce] = "digit2";
  const Ge = 51;
  e[e.digit3 = Ge] = "digit3";
  const Oe = 52;
  e[e.digit4 = Oe] = "digit4";
  const ze = 53;
  e[e.digit5 = ze] = "digit5";
  const De = 54;
  e[e.digit6 = De] = "digit6";
  const Pe = 55;
  e[e.digit7 = Pe] = "digit7";
  const _e = 56;
  e[e.digit8 = _e] = "digit8";
  const xe = 57;
  e[e.digit9 = xe] = "digit9";
  const Ee = 58;
  e[e.colon = Ee] = "colon";
  const Le = 59;
  e[e.semicolon = Le] = "semicolon";
  const je = 60;
  e[e.lessThan = je] = "lessThan";
  const ee = 61;
  e[e.equalsTo = ee] = "equalsTo";
  const Ve = 62;
  e[e.greaterThan = Ve] = "greaterThan";
  const Fe = 63;
  e[e.questionMark = Fe] = "questionMark";
  const We = 64;
  e[e.atSign = We] = "atSign";
  const Be = 65;
  e[e.uppercaseA = Be] = "uppercaseA";
  const nt = 66;
  e[e.uppercaseB = nt] = "uppercaseB";
  const dt = 67;
  e[e.uppercaseC = dt] = "uppercaseC";
  const g = 68;
  e[e.uppercaseD = g] = "uppercaseD";
  const b = 69;
  e[e.uppercaseE = b] = "uppercaseE";
  const w = 70;
  e[e.uppercaseF = w] = "uppercaseF";
  const I = 71;
  e[e.uppercaseG = I] = "uppercaseG";
  const S = 72;
  e[e.uppercaseH = S] = "uppercaseH";
  const C = 73;
  e[e.uppercaseI = C] = "uppercaseI";
  const D = 74;
  e[e.uppercaseJ = D] = "uppercaseJ";
  const H = 75;
  e[e.uppercaseK = H] = "uppercaseK";
  const Z = 76;
  e[e.uppercaseL = Z] = "uppercaseL";
  const Q = 77;
  e[e.uppercaseM = Q] = "uppercaseM";
  const ie = 78;
  e[e.uppercaseN = ie] = "uppercaseN";
  const de = 79;
  e[e.uppercaseO = de] = "uppercaseO";
  const ne = 80;
  e[e.uppercaseP = ne] = "uppercaseP";
  const me = 81;
  e[e.uppercaseQ = me] = "uppercaseQ";
  const pe = 82;
  e[e.uppercaseR = pe] = "uppercaseR";
  const rt = 83;
  e[e.uppercaseS = rt] = "uppercaseS";
  const at = 84;
  e[e.uppercaseT = at] = "uppercaseT";
  const st = 85;
  e[e.uppercaseU = st] = "uppercaseU";
  const Vt = 86;
  e[e.uppercaseV = Vt] = "uppercaseV";
  const Wt = 87;
  e[e.uppercaseW = Wt] = "uppercaseW";
  const vt = 88;
  e[e.uppercaseX = vt] = "uppercaseX";
  const Et = 89;
  e[e.uppercaseY = Et] = "uppercaseY";
  const ot = 90;
  e[e.uppercaseZ = ot] = "uppercaseZ";
  const Ht = 91;
  e[e.leftSquareBracket = Ht] = "leftSquareBracket";
  const St = 92;
  e[e.backslash = St] = "backslash";
  const At = 93;
  e[e.rightSquareBracket = At] = "rightSquareBracket";
  const mt = 94;
  e[e.caret = mt] = "caret";
  const Ut = 95;
  e[e.underscore = Ut] = "underscore";
  const Xt = 96;
  e[e.graveAccent = Xt] = "graveAccent";
  const Yt = 97;
  e[e.lowercaseA = Yt] = "lowercaseA";
  const Gt = 98;
  e[e.lowercaseB = Gt] = "lowercaseB";
  const zt = 99;
  e[e.lowercaseC = zt] = "lowercaseC";
  const Jt = 100;
  e[e.lowercaseD = Jt] = "lowercaseD";
  const Qt = 101;
  e[e.lowercaseE = Qt] = "lowercaseE";
  const kt = 102;
  e[e.lowercaseF = kt] = "lowercaseF";
  const Pt = 103;
  e[e.lowercaseG = Pt] = "lowercaseG";
  const Je = 104;
  e[e.lowercaseH = Je] = "lowercaseH";
  const gt = 105;
  e[e.lowercaseI = gt] = "lowercaseI";
  const _t = 106;
  e[e.lowercaseJ = _t] = "lowercaseJ";
  const Rt = 107;
  e[e.lowercaseK = Rt] = "lowercaseK";
  const Kt = 108;
  e[e.lowercaseL = Kt] = "lowercaseL";
  const Nt = 109;
  e[e.lowercaseM = Nt] = "lowercaseM";
  const Zt = 110;
  e[e.lowercaseN = Zt] = "lowercaseN";
  const Ct = 111;
  e[e.lowercaseO = Ct] = "lowercaseO";
  const Ot = 112;
  e[e.lowercaseP = Ot] = "lowercaseP";
  const en = 113;
  e[e.lowercaseQ = en] = "lowercaseQ";
  const tn = 114;
  e[e.lowercaseR = tn] = "lowercaseR";
  const Dt = 115;
  e[e.lowercaseS = Dt] = "lowercaseS";
  const nn = 116;
  e[e.lowercaseT = nn] = "lowercaseT";
  const rn = 117;
  e[e.lowercaseU = rn] = "lowercaseU";
  const sn = 118;
  e[e.lowercaseV = sn] = "lowercaseV";
  const on = 119;
  e[e.lowercaseW = on] = "lowercaseW";
  const u = 120;
  e[e.lowercaseX = u] = "lowercaseX";
  const x = 121;
  e[e.lowercaseY = x] = "lowercaseY";
  const E = 122;
  e[e.lowercaseZ = E] = "lowercaseZ";
  const L = 123;
  e[e.leftCurlyBrace = L] = "leftCurlyBrace";
  const U = 124;
  e[e.verticalBar = U] = "verticalBar";
  const G = 125;
  e[e.rightCurlyBrace = G] = "rightCurlyBrace";
  const V = 126;
  e[e.tilde = V] = "tilde";
  const $ = 160;
  e[e.nonBreakingSpace = $] = "nonBreakingSpace";
  const ke = 5760;
  e[e.oghamSpaceMark = ke] = "oghamSpaceMark";
  const re = 8232;
  e[e.lineSeparator = re] = "lineSeparator";
  const se = 8233;
  e[e.paragraphSeparator = se] = "paragraphSeparator";
})(f || (f = {}));
let Yn, W, X, s, T, xs;
function dn() {
  return xs++;
}
function _o(e) {
  if ("pos" in e) {
    const n = bo(e.pos);
    e.message += ` (${n.line}:${n.column})`, e.loc = n;
  }
  return e;
}
class yo {
  constructor(n, r) {
    this.line = n, this.column = r;
  }
}
function bo(e) {
  let n = 1, r = 1;
  for (let o = 0; o < e; o++)
    T.charCodeAt(o) === f.lineFeed ? (n++, r = 1) : r++;
  return new yo(n, r);
}
function xo(e, n, r, o) {
  T = e, s = new Te(), xs = 1, Yn = n, W = r, X = o;
}
function N(e) {
  return s.contextualKeyword === e;
}
function ws(e) {
  const n = wn();
  return n.type === t.name && n.contextualKeyword === e;
}
function ye(e) {
  return s.contextualKeyword === e && h(t.name);
}
function ge(e) {
  ye(e) || F();
}
function Re() {
  return a(t.eof) || a(t.braceR) || Me();
}
function Me() {
  const e = s.tokens[s.tokens.length - 1], n = e ? e.end : 0;
  for (let r = n; r < s.start; r++) {
    const o = T.charCodeAt(r);
    if (o === f.lineFeed || o === f.carriageReturn || o === 8232 || o === 8233)
      return !0;
  }
  return !1;
}
function wo() {
  const e = xr();
  for (let n = s.end; n < e; n++) {
    const r = T.charCodeAt(n);
    if (r === f.lineFeed || r === f.carriageReturn || r === 8232 || r === 8233)
      return !0;
  }
  return !1;
}
function Qe() {
  return h(t.semi) || Re();
}
function te() {
  Qe() || F('Unexpected token, expected ";"');
}
function d(e) {
  h(e) || F(`Unexpected token, expected "${ko(e)}"`);
}
function F(e = "Unexpected token", n = s.start) {
  if (s.error)
    return;
  const r = new SyntaxError(e);
  r.pos = n, s.error = r, s.pos = T.length, B(t.eof);
}
const Is = [
  9,
  11,
  12,
  f.space,
  f.nonBreakingSpace,
  f.oghamSpaceMark,
  8192,
  8193,
  8194,
  8195,
  8196,
  8197,
  8198,
  8199,
  8200,
  8201,
  8202,
  8239,
  8287,
  12288,
  65279
], Jr = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, Ts = new Uint8Array(65536);
for (const e of Is)
  Ts[e] = 1;
function Io(e) {
  if (e < 48)
    return e === 36;
  if (e < 58)
    return !0;
  if (e < 65)
    return !1;
  if (e < 91)
    return !0;
  if (e < 97)
    return e === 95;
  if (e < 123)
    return !0;
  if (e < 128)
    return !1;
  throw new Error("Should not be called with non-ASCII char code.");
}
const Ue = new Uint8Array(65536);
for (let e = 0; e < 128; e++)
  Ue[e] = Io(e) ? 1 : 0;
for (let e = 128; e < 65536; e++)
  Ue[e] = 1;
for (const e of Is)
  Ue[e] = 0;
Ue[8232] = 0;
Ue[8233] = 0;
const xn = Ue.slice();
for (let e = f.digit0; e <= f.digit9; e++)
  xn[e] = 0;
const Qr = new Int32Array([
  -1,
  27,
  783,
  918,
  1755,
  2376,
  2862,
  3483,
  -1,
  3699,
  -1,
  4617,
  4752,
  4833,
  5130,
  5508,
  5940,
  -1,
  6480,
  6939,
  7533,
  7965,
  8127,
  8289,
  -1,
  8505,
  -1,
  -1,
  -1,
  54,
  243,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  432,
  -1,
  -1,
  -1,
  675,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  81,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  108,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  135,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  162,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  189,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  216,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._abstract << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  270,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  297,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  324,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  351,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  378,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  405,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._accessor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._as << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  459,
  -1,
  -1,
  -1,
  -1,
  -1,
  594,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  486,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  513,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  540,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  567,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._asserts << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  621,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  648,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._async << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  702,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  729,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  756,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._await << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  810,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  837,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  864,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  891,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._break << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  945,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1107,
  -1,
  -1,
  -1,
  1242,
  -1,
  -1,
  1350,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  972,
  1026,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  999,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._case << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1053,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1080,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._catch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1134,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1161,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1188,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1215,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._checks << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1269,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1296,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1323,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._class << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1377,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1404,
  1620,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1431,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._const << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1458,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1485,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1512,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1539,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1566,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1593,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._constructor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1647,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1674,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1701,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1728,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._continue << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1782,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2349,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1809,
  1971,
  -1,
  -1,
  2106,
  -1,
  -1,
  -1,
  -1,
  -1,
  2241,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1836,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1863,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1890,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1917,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1944,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._debugger << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1998,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2025,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2052,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2079,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._declare << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2133,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2160,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2187,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2214,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._default << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2268,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2295,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2322,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._delete << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._do << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2403,
  -1,
  2484,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2565,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2430,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2457,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._else << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2511,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2538,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._enum << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2592,
  -1,
  -1,
  -1,
  2727,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2619,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2646,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2673,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._export << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2700,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._exports << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2754,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2781,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2808,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2835,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._extends << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2889,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2997,
  -1,
  -1,
  -1,
  -1,
  -1,
  3159,
  -1,
  -1,
  3213,
  -1,
  -1,
  3294,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2916,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2943,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2970,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._false << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3024,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3051,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3078,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3105,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3132,
  -1,
  (t._finally << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3186,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._for << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3240,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3267,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._from << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3321,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3348,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3375,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3402,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3429,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3456,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._function << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3510,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3564,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3537,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._get << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3591,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3618,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3645,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3672,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._global << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3726,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3753,
  4077,
  -1,
  -1,
  -1,
  -1,
  4590,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._if << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3780,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3807,
  -1,
  -1,
  3996,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3834,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3861,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3888,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3915,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3942,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3969,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._implements << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4023,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4050,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._import << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._in << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4104,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4185,
  4401,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4131,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4158,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._infer << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4212,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4239,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4266,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4293,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4320,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4347,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4374,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._instanceof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4428,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4455,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4482,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4509,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4536,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4563,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._interface << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._is << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4644,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4671,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4698,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4725,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._keyof << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4779,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4806,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._let << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4860,
  -1,
  -1,
  -1,
  -1,
  -1,
  4995,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4887,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4914,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4941,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4968,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._mixins << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5022,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5049,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5076,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5103,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._module << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5157,
  -1,
  -1,
  -1,
  5373,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5427,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5184,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5211,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5238,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5265,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5292,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5319,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5346,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._namespace << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5400,
  -1,
  -1,
  -1,
  (t._new << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5454,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5481,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._null << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5535,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5562,
  -1,
  -1,
  -1,
  -1,
  5697,
  5751,
  -1,
  -1,
  -1,
  -1,
  l._of << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5589,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5616,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5643,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5670,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._opaque << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5724,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._out << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5778,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5805,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5832,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5859,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5886,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5913,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._override << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5967,
  -1,
  -1,
  6345,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5994,
  -1,
  -1,
  -1,
  -1,
  -1,
  6129,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6021,
  -1,
  -1,
  -1,
  -1,
  -1,
  6048,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6075,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6102,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._private << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6156,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6183,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6318,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6210,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6237,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6264,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6291,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._protected << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._proto << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6372,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6399,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6426,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6453,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._public << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6507,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6534,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6696,
  -1,
  -1,
  6831,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6561,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6588,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6615,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6642,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6669,
  -1,
  l._readonly << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6723,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6750,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6777,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6804,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._require << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6858,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6885,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6912,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._return << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6966,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7020,
  7155,
  -1,
  7263,
  -1,
  7398,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6993,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._set << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7047,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7074,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7101,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7128,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._static << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7182,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7209,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7236,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._super << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7290,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7317,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7344,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7371,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._switch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7425,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7452,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7479,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7506,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._symbol << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7560,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7722,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7830,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7587,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7641,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7614,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._this << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7668,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7695,
  -1,
  -1,
  -1,
  (t._throw << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7749,
  -1,
  -1,
  -1,
  7803,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7776,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._true << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._try << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7857,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7884,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._type << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7911,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7938,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._typeof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7992,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8019,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8046,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8073,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8100,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  l._unique << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8154,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8208,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8181,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._var << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8235,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8262,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._void << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8316,
  8424,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8343,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8370,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8397,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._while << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8451,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8478,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._with << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8532,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8559,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8586,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8613,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  (t._yield << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
]);
function To() {
  let e = 0, n = 0, r = s.pos;
  for (; r < T.length && (n = T.charCodeAt(r), !(n < f.lowercaseA || n > f.lowercaseZ)); ) {
    const i = Qr[e + (n - f.lowercaseA) + 1];
    if (i === -1)
      break;
    e = i, r++;
  }
  const o = Qr[e];
  if (o > -1 && !Ue[n]) {
    s.pos = r, o & 1 ? B(o >>> 1) : B(t.name, o >>> 1);
    return;
  }
  for (; r < T.length; ) {
    const i = T.charCodeAt(r);
    if (Ue[i])
      r++;
    else if (i === f.backslash) {
      if (r += 2, T.charCodeAt(r) === f.leftCurlyBrace) {
        for (; r < T.length && T.charCodeAt(r) !== f.rightCurlyBrace; )
          r++;
        r++;
      }
    } else if (i === f.atSign && T.charCodeAt(r + 1) === f.atSign)
      r += 2;
    else
      break;
  }
  s.pos = r, B(t.name);
}
var R;
(function(e) {
  e[e.Access = 0] = "Access";
  const r = 0 + 1;
  e[e.ExportAccess = r] = "ExportAccess";
  const o = r + 1;
  e[e.TopLevelDeclaration = o] = "TopLevelDeclaration";
  const i = o + 1;
  e[e.FunctionScopedDeclaration = i] = "FunctionScopedDeclaration";
  const c = i + 1;
  e[e.BlockScopedDeclaration = c] = "BlockScopedDeclaration";
  const p = c + 1;
  e[e.ObjectShorthandTopLevelDeclaration = p] = "ObjectShorthandTopLevelDeclaration";
  const m = p + 1;
  e[e.ObjectShorthandFunctionScopedDeclaration = m] = "ObjectShorthandFunctionScopedDeclaration";
  const y = m + 1;
  e[e.ObjectShorthandBlockScopedDeclaration = y] = "ObjectShorthandBlockScopedDeclaration";
  const _ = y + 1;
  e[e.ObjectShorthand = _] = "ObjectShorthand";
  const v = _ + 1;
  e[e.ImportDeclaration = v] = "ImportDeclaration";
  const P = v + 1;
  e[e.ObjectKey = P] = "ObjectKey";
  const A = P + 1;
  e[e.ImportAccess = A] = "ImportAccess";
})(R || (R = {}));
function vs(e) {
  const n = e.identifierRole;
  return n === R.TopLevelDeclaration || n === R.FunctionScopedDeclaration || n === R.BlockScopedDeclaration || n === R.ObjectShorthandTopLevelDeclaration || n === R.ObjectShorthandFunctionScopedDeclaration || n === R.ObjectShorthandBlockScopedDeclaration;
}
function vo(e) {
  const n = e.identifierRole;
  return n === R.FunctionScopedDeclaration || n === R.BlockScopedDeclaration || n === R.ObjectShorthandFunctionScopedDeclaration || n === R.ObjectShorthandBlockScopedDeclaration;
}
function Es(e) {
  const n = e.identifierRole;
  return n === R.TopLevelDeclaration || n === R.ObjectShorthandTopLevelDeclaration || n === R.ImportDeclaration;
}
function Eo(e) {
  const n = e.identifierRole;
  return n === R.TopLevelDeclaration || n === R.BlockScopedDeclaration || n === R.ObjectShorthandTopLevelDeclaration || n === R.ObjectShorthandBlockScopedDeclaration;
}
function So(e) {
  const n = e.identifierRole;
  return n === R.FunctionScopedDeclaration || n === R.ObjectShorthandFunctionScopedDeclaration;
}
function Ao(e) {
  return e.identifierRole === R.ObjectShorthandTopLevelDeclaration || e.identifierRole === R.ObjectShorthandBlockScopedDeclaration || e.identifierRole === R.ObjectShorthandFunctionScopedDeclaration;
}
class Gn {
  constructor() {
    this.type = s.type, this.contextualKeyword = s.contextualKeyword, this.start = s.start, this.end = s.end, this.scopeDepth = s.scopeDepth, this.isType = s.isType, this.identifierRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
  }
}
function k() {
  s.tokens.push(new Gn()), Rs();
}
function lt() {
  s.tokens.push(new Gn()), s.start = s.pos, Xo();
}
function Po() {
  s.type === t.assign && --s.pos, Wo();
}
function q(e) {
  for (let r = s.tokens.length - e; r < s.tokens.length; r++)
    s.tokens[r].isType = !0;
  const n = s.isType;
  return s.isType = !0, n;
}
function M(e) {
  s.isType = e;
}
function h(e) {
  return a(e) ? (k(), !0) : !1;
}
function Ss(e) {
  const n = s.isType;
  s.isType = !0, h(e), s.isType = n;
}
function a(e) {
  return s.type === e;
}
function ae() {
  const e = s.snapshot();
  k();
  const n = s.type;
  return s.restoreFromSnapshot(e), n;
}
class Ro {
  constructor(n, r) {
    this.type = n, this.contextualKeyword = r;
  }
}
function wn() {
  const e = s.snapshot();
  k();
  const n = s.type, r = s.contextualKeyword;
  return s.restoreFromSnapshot(e), new Ro(n, r);
}
function xr() {
  return As(s.pos);
}
function As(e) {
  Jr.lastIndex = e;
  const n = Jr.exec(T);
  return e + n[0].length;
}
function Ps() {
  return T.charCodeAt(xr());
}
function Rs() {
  if (Cs(), s.start = s.pos, s.pos >= T.length) {
    const e = s.tokens;
    e.length >= 2 && e[e.length - 1].start >= T.length && e[e.length - 2].start >= T.length && F("Unexpectedly reached the end of input."), B(t.eof);
    return;
  }
  No(T.charCodeAt(s.pos));
}
function No(e) {
  xn[e] || e === f.backslash || e === f.atSign && T.charCodeAt(s.pos + 1) === f.atSign ? To() : Ds(e);
}
function Co() {
  for (; T.charCodeAt(s.pos) !== f.asterisk || T.charCodeAt(s.pos + 1) !== f.slash; )
    if (s.pos++, s.pos > T.length) {
      F("Unterminated comment", s.pos - 2);
      return;
    }
  s.pos += 2;
}
function Ns(e) {
  let n = T.charCodeAt(s.pos += e);
  if (s.pos < T.length)
    for (; n !== f.lineFeed && n !== f.carriageReturn && n !== f.lineSeparator && n !== f.paragraphSeparator && ++s.pos < T.length; )
      n = T.charCodeAt(s.pos);
}
function Cs() {
  for (; s.pos < T.length; ) {
    const e = T.charCodeAt(s.pos);
    switch (e) {
      case f.carriageReturn:
        T.charCodeAt(s.pos + 1) === f.lineFeed && ++s.pos;
      case f.lineFeed:
      case f.lineSeparator:
      case f.paragraphSeparator:
        ++s.pos;
        break;
      case f.slash:
        switch (T.charCodeAt(s.pos + 1)) {
          case f.asterisk:
            s.pos += 2, Co();
            break;
          case f.slash:
            Ns(2);
            break;
          default:
            return;
        }
        break;
      default:
        if (Ts[e])
          ++s.pos;
        else
          return;
    }
  }
}
function B(e, n = l.NONE) {
  s.end = s.pos, s.type = e, s.contextualKeyword = n;
}
function Oo() {
  const e = T.charCodeAt(s.pos + 1);
  if (e >= f.digit0 && e <= f.digit9) {
    Ls(!0);
    return;
  }
  e === f.dot && T.charCodeAt(s.pos + 2) === f.dot ? (s.pos += 3, B(t.ellipsis)) : (++s.pos, B(t.dot));
}
function Do() {
  T.charCodeAt(s.pos + 1) === f.equalsTo ? z(t.assign, 2) : z(t.slash, 1);
}
function Lo(e) {
  let n = e === f.asterisk ? t.star : t.modulo, r = 1, o = T.charCodeAt(s.pos + 1);
  e === f.asterisk && o === f.asterisk && (r++, o = T.charCodeAt(s.pos + 2), n = t.exponent), o === f.equalsTo && T.charCodeAt(s.pos + 2) !== f.greaterThan && (r++, n = t.assign), z(n, r);
}
function jo(e) {
  const n = T.charCodeAt(s.pos + 1);
  if (n === e) {
    T.charCodeAt(s.pos + 2) === f.equalsTo ? z(t.assign, 3) : z(e === f.verticalBar ? t.logicalOR : t.logicalAND, 2);
    return;
  }
  if (e === f.verticalBar) {
    if (n === f.greaterThan) {
      z(t.pipeline, 2);
      return;
    } else if (n === f.rightCurlyBrace && X) {
      z(t.braceBarR, 2);
      return;
    }
  }
  if (n === f.equalsTo) {
    z(t.assign, 2);
    return;
  }
  z(e === f.verticalBar ? t.bitwiseOR : t.bitwiseAND, 1);
}
function Fo() {
  T.charCodeAt(s.pos + 1) === f.equalsTo ? z(t.assign, 2) : z(t.bitwiseXOR, 1);
}
function Bo(e) {
  const n = T.charCodeAt(s.pos + 1);
  if (n === e) {
    z(t.preIncDec, 2);
    return;
  }
  n === f.equalsTo ? z(t.assign, 2) : e === f.plusSign ? z(t.plus, 1) : z(t.minus, 1);
}
function qo() {
  const e = T.charCodeAt(s.pos + 1);
  if (e === f.lessThan) {
    if (T.charCodeAt(s.pos + 2) === f.equalsTo) {
      z(t.assign, 3);
      return;
    }
    z(t.bitShiftL, 2);
    return;
  }
  e === f.equalsTo ? z(t.relationalOrEqual, 2) : z(t.lessThan, 1);
}
function Os() {
  if (s.isType) {
    z(t.greaterThan, 1);
    return;
  }
  const e = T.charCodeAt(s.pos + 1);
  if (e === f.greaterThan) {
    const n = T.charCodeAt(s.pos + 2) === f.greaterThan ? 3 : 2;
    if (T.charCodeAt(s.pos + n) === f.equalsTo) {
      z(t.assign, n + 1);
      return;
    }
    z(t.bitShiftR, n);
    return;
  }
  e === f.equalsTo ? z(t.relationalOrEqual, 2) : z(t.greaterThan, 1);
}
function Mo() {
  s.type === t.greaterThan && (s.pos -= 1, Os());
}
function $o(e) {
  const n = T.charCodeAt(s.pos + 1);
  if (n === f.equalsTo) {
    z(t.equality, T.charCodeAt(s.pos + 2) === f.equalsTo ? 3 : 2);
    return;
  }
  if (e === f.equalsTo && n === f.greaterThan) {
    s.pos += 2, B(t.arrow);
    return;
  }
  z(e === f.equalsTo ? t.eq : t.bang, 1);
}
function Vo() {
  const e = T.charCodeAt(s.pos + 1), n = T.charCodeAt(s.pos + 2);
  e === f.questionMark && !(X && s.isType) ? n === f.equalsTo ? z(t.assign, 3) : z(t.nullishCoalescing, 2) : e === f.dot && !(n >= f.digit0 && n <= f.digit9) ? (s.pos += 2, B(t.questionDot)) : (++s.pos, B(t.question));
}
function Ds(e) {
  switch (e) {
    case f.numberSign:
      ++s.pos, B(t.hash);
      return;
    case f.dot:
      Oo();
      return;
    case f.leftParenthesis:
      ++s.pos, B(t.parenL);
      return;
    case f.rightParenthesis:
      ++s.pos, B(t.parenR);
      return;
    case f.semicolon:
      ++s.pos, B(t.semi);
      return;
    case f.comma:
      ++s.pos, B(t.comma);
      return;
    case f.leftSquareBracket:
      ++s.pos, B(t.bracketL);
      return;
    case f.rightSquareBracket:
      ++s.pos, B(t.bracketR);
      return;
    case f.leftCurlyBrace:
      X && T.charCodeAt(s.pos + 1) === f.verticalBar ? z(t.braceBarL, 2) : (++s.pos, B(t.braceL));
      return;
    case f.rightCurlyBrace:
      ++s.pos, B(t.braceR);
      return;
    case f.colon:
      T.charCodeAt(s.pos + 1) === f.colon ? z(t.doubleColon, 2) : (++s.pos, B(t.colon));
      return;
    case f.questionMark:
      Vo();
      return;
    case f.atSign:
      ++s.pos, B(t.at);
      return;
    case f.graveAccent:
      ++s.pos, B(t.backQuote);
      return;
    case f.digit0: {
      const n = T.charCodeAt(s.pos + 1);
      if (n === f.lowercaseX || n === f.uppercaseX || n === f.lowercaseO || n === f.uppercaseO || n === f.lowercaseB || n === f.uppercaseB) {
        Ho();
        return;
      }
    }
    case f.digit1:
    case f.digit2:
    case f.digit3:
    case f.digit4:
    case f.digit5:
    case f.digit6:
    case f.digit7:
    case f.digit8:
    case f.digit9:
      Ls(!1);
      return;
    case f.quotationMark:
    case f.apostrophe:
      Uo(e);
      return;
    case f.slash:
      Do();
      return;
    case f.percentSign:
    case f.asterisk:
      Lo(e);
      return;
    case f.verticalBar:
    case f.ampersand:
      jo(e);
      return;
    case f.caret:
      Fo();
      return;
    case f.plusSign:
    case f.dash:
      Bo(e);
      return;
    case f.lessThan:
      qo();
      return;
    case f.greaterThan:
      Os();
      return;
    case f.equalsTo:
    case f.exclamationMark:
      $o(e);
      return;
    case f.tilde:
      z(t.tilde, 1);
      return;
  }
  F(`Unexpected character '${String.fromCharCode(e)}'`, s.pos);
}
function z(e, n) {
  s.pos += n, B(e);
}
function Wo() {
  const e = s.pos;
  let n = !1, r = !1;
  for (; ; ) {
    if (s.pos >= T.length) {
      F("Unterminated regular expression", e);
      return;
    }
    const o = T.charCodeAt(s.pos);
    if (n)
      n = !1;
    else {
      if (o === f.leftSquareBracket)
        r = !0;
      else if (o === f.rightSquareBracket && r)
        r = !1;
      else if (o === f.slash && !r)
        break;
      n = o === f.backslash;
    }
    ++s.pos;
  }
  ++s.pos, Yo(), B(t.regexp);
}
function nr() {
  for (; ; ) {
    const e = T.charCodeAt(s.pos);
    if (e >= f.digit0 && e <= f.digit9 || e === f.underscore)
      s.pos++;
    else
      break;
  }
}
function Ho() {
  for (s.pos += 2; ; ) {
    const n = T.charCodeAt(s.pos);
    if (n >= f.digit0 && n <= f.digit9 || n >= f.lowercaseA && n <= f.lowercaseF || n >= f.uppercaseA && n <= f.uppercaseF || n === f.underscore)
      s.pos++;
    else
      break;
  }
  T.charCodeAt(s.pos) === f.lowercaseN ? (++s.pos, B(t.bigint)) : B(t.num);
}
function Ls(e) {
  let n = !1, r = !1;
  e || nr();
  let o = T.charCodeAt(s.pos);
  if (o === f.dot && (++s.pos, nr(), o = T.charCodeAt(s.pos)), (o === f.uppercaseE || o === f.lowercaseE) && (o = T.charCodeAt(++s.pos), (o === f.plusSign || o === f.dash) && ++s.pos, nr(), o = T.charCodeAt(s.pos)), o === f.lowercaseN ? (++s.pos, n = !0) : o === f.lowercaseM && (++s.pos, r = !0), n) {
    B(t.bigint);
    return;
  }
  if (r) {
    B(t.decimal);
    return;
  }
  B(t.num);
}
function Uo(e) {
  for (s.pos++; ; ) {
    if (s.pos >= T.length) {
      F("Unterminated string constant");
      return;
    }
    const n = T.charCodeAt(s.pos);
    if (n === f.backslash)
      s.pos++;
    else if (n === e)
      break;
    s.pos++;
  }
  s.pos++, B(t.string);
}
function Xo() {
  for (; ; ) {
    if (s.pos >= T.length) {
      F("Unterminated template");
      return;
    }
    const e = T.charCodeAt(s.pos);
    if (e === f.graveAccent || e === f.dollarSign && T.charCodeAt(s.pos + 1) === f.leftCurlyBrace) {
      if (s.pos === s.start && a(t.template))
        if (e === f.dollarSign) {
          s.pos += 2, B(t.dollarBraceL);
          return;
        } else {
          ++s.pos, B(t.backQuote);
          return;
        }
      B(t.template);
      return;
    }
    e === f.backslash && s.pos++, s.pos++;
  }
}
function Yo() {
  for (; s.pos < T.length; ) {
    const e = T.charCodeAt(s.pos);
    if (Ue[e])
      s.pos++;
    else if (e === f.backslash) {
      if (s.pos += 2, T.charCodeAt(s.pos) === f.leftCurlyBrace) {
        for (; s.pos < T.length && T.charCodeAt(s.pos) !== f.rightCurlyBrace; )
          s.pos++;
        s.pos++;
      }
    } else
      break;
  }
}
function mn(e, n = e.currentIndex()) {
  let r = n + 1;
  if (An(e, r)) {
    const o = e.identifierNameAtIndex(n);
    return {
      isType: !1,
      leftName: o,
      rightName: o,
      endIndex: r
    };
  }
  if (r++, An(e, r))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: r
    };
  if (r++, An(e, r))
    return {
      isType: !1,
      leftName: e.identifierNameAtIndex(n),
      rightName: e.identifierNameAtIndex(n + 2),
      endIndex: r
    };
  if (r++, An(e, r))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: r
    };
  throw new Error(`Unexpected import/export specifier at ${n}`);
}
function An(e, n) {
  const r = e.tokens[n];
  return r.type === t.braceR || r.type === t.comma;
}
const Go = /* @__PURE__ */ new Map([
  ["quot", '"'],
  ["amp", "&"],
  ["apos", "'"],
  ["lt", "<"],
  ["gt", ">"],
  ["nbsp", "\xA0"],
  ["iexcl", "\xA1"],
  ["cent", "\xA2"],
  ["pound", "\xA3"],
  ["curren", "\xA4"],
  ["yen", "\xA5"],
  ["brvbar", "\xA6"],
  ["sect", "\xA7"],
  ["uml", "\xA8"],
  ["copy", "\xA9"],
  ["ordf", "\xAA"],
  ["laquo", "\xAB"],
  ["not", "\xAC"],
  ["shy", "\xAD"],
  ["reg", "\xAE"],
  ["macr", "\xAF"],
  ["deg", "\xB0"],
  ["plusmn", "\xB1"],
  ["sup2", "\xB2"],
  ["sup3", "\xB3"],
  ["acute", "\xB4"],
  ["micro", "\xB5"],
  ["para", "\xB6"],
  ["middot", "\xB7"],
  ["cedil", "\xB8"],
  ["sup1", "\xB9"],
  ["ordm", "\xBA"],
  ["raquo", "\xBB"],
  ["frac14", "\xBC"],
  ["frac12", "\xBD"],
  ["frac34", "\xBE"],
  ["iquest", "\xBF"],
  ["Agrave", "\xC0"],
  ["Aacute", "\xC1"],
  ["Acirc", "\xC2"],
  ["Atilde", "\xC3"],
  ["Auml", "\xC4"],
  ["Aring", "\xC5"],
  ["AElig", "\xC6"],
  ["Ccedil", "\xC7"],
  ["Egrave", "\xC8"],
  ["Eacute", "\xC9"],
  ["Ecirc", "\xCA"],
  ["Euml", "\xCB"],
  ["Igrave", "\xCC"],
  ["Iacute", "\xCD"],
  ["Icirc", "\xCE"],
  ["Iuml", "\xCF"],
  ["ETH", "\xD0"],
  ["Ntilde", "\xD1"],
  ["Ograve", "\xD2"],
  ["Oacute", "\xD3"],
  ["Ocirc", "\xD4"],
  ["Otilde", "\xD5"],
  ["Ouml", "\xD6"],
  ["times", "\xD7"],
  ["Oslash", "\xD8"],
  ["Ugrave", "\xD9"],
  ["Uacute", "\xDA"],
  ["Ucirc", "\xDB"],
  ["Uuml", "\xDC"],
  ["Yacute", "\xDD"],
  ["THORN", "\xDE"],
  ["szlig", "\xDF"],
  ["agrave", "\xE0"],
  ["aacute", "\xE1"],
  ["acirc", "\xE2"],
  ["atilde", "\xE3"],
  ["auml", "\xE4"],
  ["aring", "\xE5"],
  ["aelig", "\xE6"],
  ["ccedil", "\xE7"],
  ["egrave", "\xE8"],
  ["eacute", "\xE9"],
  ["ecirc", "\xEA"],
  ["euml", "\xEB"],
  ["igrave", "\xEC"],
  ["iacute", "\xED"],
  ["icirc", "\xEE"],
  ["iuml", "\xEF"],
  ["eth", "\xF0"],
  ["ntilde", "\xF1"],
  ["ograve", "\xF2"],
  ["oacute", "\xF3"],
  ["ocirc", "\xF4"],
  ["otilde", "\xF5"],
  ["ouml", "\xF6"],
  ["divide", "\xF7"],
  ["oslash", "\xF8"],
  ["ugrave", "\xF9"],
  ["uacute", "\xFA"],
  ["ucirc", "\xFB"],
  ["uuml", "\xFC"],
  ["yacute", "\xFD"],
  ["thorn", "\xFE"],
  ["yuml", "\xFF"],
  ["OElig", "\u0152"],
  ["oelig", "\u0153"],
  ["Scaron", "\u0160"],
  ["scaron", "\u0161"],
  ["Yuml", "\u0178"],
  ["fnof", "\u0192"],
  ["circ", "\u02C6"],
  ["tilde", "\u02DC"],
  ["Alpha", "\u0391"],
  ["Beta", "\u0392"],
  ["Gamma", "\u0393"],
  ["Delta", "\u0394"],
  ["Epsilon", "\u0395"],
  ["Zeta", "\u0396"],
  ["Eta", "\u0397"],
  ["Theta", "\u0398"],
  ["Iota", "\u0399"],
  ["Kappa", "\u039A"],
  ["Lambda", "\u039B"],
  ["Mu", "\u039C"],
  ["Nu", "\u039D"],
  ["Xi", "\u039E"],
  ["Omicron", "\u039F"],
  ["Pi", "\u03A0"],
  ["Rho", "\u03A1"],
  ["Sigma", "\u03A3"],
  ["Tau", "\u03A4"],
  ["Upsilon", "\u03A5"],
  ["Phi", "\u03A6"],
  ["Chi", "\u03A7"],
  ["Psi", "\u03A8"],
  ["Omega", "\u03A9"],
  ["alpha", "\u03B1"],
  ["beta", "\u03B2"],
  ["gamma", "\u03B3"],
  ["delta", "\u03B4"],
  ["epsilon", "\u03B5"],
  ["zeta", "\u03B6"],
  ["eta", "\u03B7"],
  ["theta", "\u03B8"],
  ["iota", "\u03B9"],
  ["kappa", "\u03BA"],
  ["lambda", "\u03BB"],
  ["mu", "\u03BC"],
  ["nu", "\u03BD"],
  ["xi", "\u03BE"],
  ["omicron", "\u03BF"],
  ["pi", "\u03C0"],
  ["rho", "\u03C1"],
  ["sigmaf", "\u03C2"],
  ["sigma", "\u03C3"],
  ["tau", "\u03C4"],
  ["upsilon", "\u03C5"],
  ["phi", "\u03C6"],
  ["chi", "\u03C7"],
  ["psi", "\u03C8"],
  ["omega", "\u03C9"],
  ["thetasym", "\u03D1"],
  ["upsih", "\u03D2"],
  ["piv", "\u03D6"],
  ["ensp", "\u2002"],
  ["emsp", "\u2003"],
  ["thinsp", "\u2009"],
  ["zwnj", "\u200C"],
  ["zwj", "\u200D"],
  ["lrm", "\u200E"],
  ["rlm", "\u200F"],
  ["ndash", "\u2013"],
  ["mdash", "\u2014"],
  ["lsquo", "\u2018"],
  ["rsquo", "\u2019"],
  ["sbquo", "\u201A"],
  ["ldquo", "\u201C"],
  ["rdquo", "\u201D"],
  ["bdquo", "\u201E"],
  ["dagger", "\u2020"],
  ["Dagger", "\u2021"],
  ["bull", "\u2022"],
  ["hellip", "\u2026"],
  ["permil", "\u2030"],
  ["prime", "\u2032"],
  ["Prime", "\u2033"],
  ["lsaquo", "\u2039"],
  ["rsaquo", "\u203A"],
  ["oline", "\u203E"],
  ["frasl", "\u2044"],
  ["euro", "\u20AC"],
  ["image", "\u2111"],
  ["weierp", "\u2118"],
  ["real", "\u211C"],
  ["trade", "\u2122"],
  ["alefsym", "\u2135"],
  ["larr", "\u2190"],
  ["uarr", "\u2191"],
  ["rarr", "\u2192"],
  ["darr", "\u2193"],
  ["harr", "\u2194"],
  ["crarr", "\u21B5"],
  ["lArr", "\u21D0"],
  ["uArr", "\u21D1"],
  ["rArr", "\u21D2"],
  ["dArr", "\u21D3"],
  ["hArr", "\u21D4"],
  ["forall", "\u2200"],
  ["part", "\u2202"],
  ["exist", "\u2203"],
  ["empty", "\u2205"],
  ["nabla", "\u2207"],
  ["isin", "\u2208"],
  ["notin", "\u2209"],
  ["ni", "\u220B"],
  ["prod", "\u220F"],
  ["sum", "\u2211"],
  ["minus", "\u2212"],
  ["lowast", "\u2217"],
  ["radic", "\u221A"],
  ["prop", "\u221D"],
  ["infin", "\u221E"],
  ["ang", "\u2220"],
  ["and", "\u2227"],
  ["or", "\u2228"],
  ["cap", "\u2229"],
  ["cup", "\u222A"],
  ["int", "\u222B"],
  ["there4", "\u2234"],
  ["sim", "\u223C"],
  ["cong", "\u2245"],
  ["asymp", "\u2248"],
  ["ne", "\u2260"],
  ["equiv", "\u2261"],
  ["le", "\u2264"],
  ["ge", "\u2265"],
  ["sub", "\u2282"],
  ["sup", "\u2283"],
  ["nsub", "\u2284"],
  ["sube", "\u2286"],
  ["supe", "\u2287"],
  ["oplus", "\u2295"],
  ["otimes", "\u2297"],
  ["perp", "\u22A5"],
  ["sdot", "\u22C5"],
  ["lceil", "\u2308"],
  ["rceil", "\u2309"],
  ["lfloor", "\u230A"],
  ["rfloor", "\u230B"],
  ["lang", "\u2329"],
  ["rang", "\u232A"],
  ["loz", "\u25CA"],
  ["spades", "\u2660"],
  ["clubs", "\u2663"],
  ["hearts", "\u2665"],
  ["diams", "\u2666"]
]);
function js(e) {
  const [n, r] = Kr(e.jsxPragma || "React.createElement"), [o, i] = Kr(e.jsxFragmentPragma || "React.Fragment");
  return { base: n, suffix: r, fragmentBase: o, fragmentSuffix: i };
}
function Kr(e) {
  let n = e.indexOf(".");
  return n === -1 && (n = e.length), [e.slice(0, n), e.slice(n)];
}
class Xe {
  getPrefixCode() {
    return "";
  }
  getHoistedCode() {
    return "";
  }
  getSuffixCode() {
    return "";
  }
}
class pn extends Xe {
  __init() {
    this.lastLineNumber = 1;
  }
  __init2() {
    this.lastIndex = 0;
  }
  __init3() {
    this.filenameVarName = null;
  }
  constructor(n, r, o, i, c) {
    super(), this.rootTransformer = n, this.tokens = r, this.importProcessor = o, this.nameManager = i, this.options = c, pn.prototype.__init.call(this), pn.prototype.__init2.call(this), pn.prototype.__init3.call(this), this.jsxPragmaInfo = js(c);
  }
  process() {
    return this.tokens.matches1(t.jsxTagStart) ? (this.processJSXTag(), !0) : !1;
  }
  getPrefixCode() {
    return this.filenameVarName ? `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};` : "";
  }
  getLineNumberForIndex(n) {
    const r = this.tokens.code;
    for (; this.lastIndex < n && this.lastIndex < r.length; )
      r[this.lastIndex] === `
` && this.lastLineNumber++, this.lastIndex++;
    return this.lastLineNumber;
  }
  getFilenameVarName() {
    return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName")), this.filenameVarName;
  }
  processProps(n) {
    const r = this.getLineNumberForIndex(n), o = this.options.production ? "" : `__self: this, __source: {fileName: ${this.getFilenameVarName()}, lineNumber: ${r}}`;
    if (!this.tokens.matches1(t.jsxName) && !this.tokens.matches1(t.braceL)) {
      o ? this.tokens.appendCode(`, {${o}}`) : this.tokens.appendCode(", null");
      return;
    }
    for (this.tokens.appendCode(", {"); ; ) {
      if (this.tokens.matches2(t.jsxName, t.eq))
        this.processPropKeyName(), this.tokens.replaceToken(": "), this.tokens.matches1(t.braceL) ? (this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("")) : this.tokens.matches1(t.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue();
      else if (this.tokens.matches1(t.jsxName))
        this.processPropKeyName(), this.tokens.appendCode(": true");
      else if (this.tokens.matches1(t.braceL))
        this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("");
      else
        break;
      this.tokens.appendCode(",");
    }
    o ? this.tokens.appendCode(` ${o}}`) : this.tokens.appendCode("}");
  }
  processPropKeyName() {
    const n = this.tokens.identifierName();
    n.includes("-") ? this.tokens.replaceToken(`'${n}'`) : this.tokens.copyToken();
  }
  processStringPropValue() {
    const n = this.tokens.currentToken(), r = this.tokens.code.slice(n.start + 1, n.end - 1), o = Zr(r), i = Jo(r);
    this.tokens.replaceToken(i + o);
  }
  processTagIntro() {
    let n = this.tokens.currentIndex() + 1;
    for (; this.tokens.tokens[n].isType || !this.tokens.matches2AtIndex(n - 1, t.jsxName, t.jsxName) && !this.tokens.matches2AtIndex(n - 1, t.greaterThan, t.jsxName) && !this.tokens.matches1AtIndex(n, t.braceL) && !this.tokens.matches1AtIndex(n, t.jsxTagEnd) && !this.tokens.matches2AtIndex(n, t.slash, t.jsxTagEnd); )
      n++;
    if (n === this.tokens.currentIndex() + 1) {
      const r = this.tokens.identifierName();
      Fs(r) && this.tokens.replaceToken(`'${r}'`);
    }
    for (; this.tokens.currentIndex() < n; )
      this.rootTransformer.processToken();
  }
  processChildren() {
    for (; ; ) {
      if (this.tokens.matches2(t.jsxTagStart, t.slash))
        return;
      if (this.tokens.matches1(t.braceL))
        this.tokens.matches2(t.braceL, t.braceR) ? (this.tokens.replaceToken(""), this.tokens.replaceToken("")) : (this.tokens.replaceToken(", "), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(""));
      else if (this.tokens.matches1(t.jsxTagStart))
        this.tokens.appendCode(", "), this.processJSXTag();
      else if (this.tokens.matches1(t.jsxText))
        this.processChildTextElement();
      else
        throw new Error("Unexpected token when processing JSX children.");
    }
  }
  processChildTextElement() {
    const n = this.tokens.currentToken(), r = this.tokens.code.slice(n.start, n.end), o = Zr(r), i = zo(r);
    i === '""' ? this.tokens.replaceToken(o) : this.tokens.replaceToken(`, ${i}${o}`);
  }
  processJSXTag() {
    const { jsxPragmaInfo: n } = this, r = this.importProcessor && this.importProcessor.getIdentifierReplacement(n.base) || n.base, o = this.tokens.currentToken().start;
    if (this.tokens.replaceToken(`${r}${n.suffix}(`), this.tokens.matches1(t.jsxTagEnd)) {
      const i = this.importProcessor && this.importProcessor.getIdentifierReplacement(n.fragmentBase) || n.fragmentBase;
      for (this.tokens.replaceToken(
        `${i}${n.fragmentSuffix}, null`
      ), this.processChildren(); !this.tokens.matches1(t.jsxTagEnd); )
        this.tokens.replaceToken("");
      this.tokens.replaceToken(")");
    } else if (this.processTagIntro(), this.processProps(o), this.tokens.matches2(t.slash, t.jsxTagEnd))
      this.tokens.replaceToken(""), this.tokens.replaceToken(")");
    else if (this.tokens.matches1(t.jsxTagEnd)) {
      for (this.tokens.replaceToken(""), this.processChildren(); !this.tokens.matches1(t.jsxTagEnd); )
        this.tokens.replaceToken("");
      this.tokens.replaceToken(")");
    } else
      throw new Error("Expected either /> or > at the end of the tag.");
  }
}
function Fs(e) {
  const n = e.charCodeAt(0);
  return n >= f.lowercaseA && n <= f.lowercaseZ;
}
function zo(e) {
  let n = "", r = "", o = !1, i = !1;
  for (let c = 0; c < e.length; c++) {
    const p = e[c];
    if (p === " " || p === "	" || p === "\r")
      o || (r += p);
    else if (p === `
`)
      r = "", o = !0;
    else {
      if (i && o && (n += " "), n += r, r = "", p === "&") {
        const { entity: m, newI: y } = Bs(e, c + 1);
        c = y - 1, n += m;
      } else
        n += p;
      i = !0, o = !1;
    }
  }
  return o || (n += r), JSON.stringify(n);
}
function Zr(e) {
  let n = 0, r = 0;
  for (const o of e)
    o === `
` ? (n++, r = 0) : o === " " && r++;
  return `
`.repeat(n) + " ".repeat(r);
}
function Jo(e) {
  let n = "";
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (o === `
`)
      if (/\s/.test(e[r + 1]))
        for (n += " "; r < e.length && /\s/.test(e[r + 1]); )
          r++;
      else
        n += `
`;
    else if (o === "&") {
      const { entity: i, newI: c } = Bs(e, r + 1);
      n += i, r = c - 1;
    } else
      n += o;
  }
  return JSON.stringify(n);
}
function Bs(e, n) {
  let r = "", o = 0, i, c = n;
  if (e[c] === "#") {
    let p = 10;
    c++;
    let m;
    if (e[c] === "x")
      for (p = 16, c++, m = c; c < e.length && Ko(e.charCodeAt(c)); )
        c++;
    else
      for (m = c; c < e.length && Qo(e.charCodeAt(c)); )
        c++;
    if (e[c] === ";") {
      const y = e.slice(m, c);
      y && (c++, i = String.fromCodePoint(parseInt(y, p)));
    }
  } else
    for (; c < e.length && o++ < 10; ) {
      const p = e[c];
      if (c++, p === ";") {
        i = Go.get(r);
        break;
      }
      r += p;
    }
  return i ? { entity: i, newI: c } : { entity: "&", newI: n };
}
function Qo(e) {
  return e >= f.digit0 && e <= f.digit9;
}
function Ko(e) {
  return e >= f.digit0 && e <= f.digit9 || e >= f.lowercaseA && e <= f.lowercaseF || e >= f.uppercaseA && e <= f.uppercaseF;
}
function qs(e, n) {
  const r = js(n), o = /* @__PURE__ */ new Set();
  for (let i = 0; i < e.tokens.length; i++) {
    const c = e.tokens[i];
    if (c.type === t.name && !c.isType && (c.identifierRole === R.Access || c.identifierRole === R.ObjectShorthand || c.identifierRole === R.ExportAccess) && !c.shadowsGlobal && o.add(e.identifierNameForToken(c)), c.type === t.jsxTagStart && o.add(r.base), c.type === t.jsxTagStart && i + 1 < e.tokens.length && e.tokens[i + 1].type === t.jsxTagEnd && (o.add(r.base), o.add(r.fragmentBase)), c.type === t.jsxName && c.identifierRole === R.Access) {
      const p = e.identifierNameForToken(c);
      (!Fs(p) || e.tokens[i + 1].type === t.dot) && o.add(e.identifierNameForToken(c));
    }
  }
  return o;
}
class yt {
  __init() {
    this.nonTypeIdentifiers = /* @__PURE__ */ new Set();
  }
  __init2() {
    this.importInfoByPath = /* @__PURE__ */ new Map();
  }
  __init3() {
    this.importsToReplace = /* @__PURE__ */ new Map();
  }
  __init4() {
    this.identifierReplacements = /* @__PURE__ */ new Map();
  }
  __init5() {
    this.exportBindingsByLocalName = /* @__PURE__ */ new Map();
  }
  constructor(n, r, o, i, c, p) {
    this.nameManager = n, this.tokens = r, this.enableLegacyTypeScriptModuleInterop = o, this.options = i, this.isTypeScriptTransformEnabled = c, this.helperManager = p, yt.prototype.__init.call(this), yt.prototype.__init2.call(this), yt.prototype.__init3.call(this), yt.prototype.__init4.call(this), yt.prototype.__init5.call(this);
  }
  preprocessTokens() {
    for (let n = 0; n < this.tokens.tokens.length; n++)
      this.tokens.matches1AtIndex(n, t._import) && !this.tokens.matches3AtIndex(n, t._import, t.name, t.eq) && this.preprocessImportAtIndex(n), this.tokens.matches1AtIndex(n, t._export) && !this.tokens.matches2AtIndex(n, t._export, t.eq) && this.preprocessExportAtIndex(n);
    this.generateImportReplacements();
  }
  pruneTypeOnlyImports() {
    this.nonTypeIdentifiers = qs(this.tokens, this.options);
    for (const [n, r] of this.importInfoByPath.entries()) {
      if (r.hasBareImport || r.hasStarExport || r.exportStarNames.length > 0 || r.namedExports.length > 0)
        continue;
      [
        ...r.defaultNames,
        ...r.wildcardNames,
        ...r.namedImports.map(({ localName: i }) => i)
      ].every((i) => this.isTypeName(i)) && this.importsToReplace.set(n, "");
    }
  }
  isTypeName(n) {
    return this.isTypeScriptTransformEnabled && !this.nonTypeIdentifiers.has(n);
  }
  generateImportReplacements() {
    for (const [n, r] of this.importInfoByPath.entries()) {
      const {
        defaultNames: o,
        wildcardNames: i,
        namedImports: c,
        namedExports: p,
        exportStarNames: m,
        hasStarExport: y
      } = r;
      if (o.length === 0 && i.length === 0 && c.length === 0 && p.length === 0 && m.length === 0 && !y) {
        this.importsToReplace.set(n, `require('${n}');`);
        continue;
      }
      const _ = this.getFreeIdentifierForPath(n);
      let v;
      this.enableLegacyTypeScriptModuleInterop ? v = _ : v = i.length > 0 ? i[0] : this.getFreeIdentifierForPath(n);
      let P = `var ${_} = require('${n}');`;
      if (i.length > 0)
        for (const A of i) {
          const j = this.enableLegacyTypeScriptModuleInterop ? _ : `${this.helperManager.getHelperName("interopRequireWildcard")}(${_})`;
          P += ` var ${A} = ${j};`;
        }
      else
        m.length > 0 && v !== _ ? P += ` var ${v} = ${this.helperManager.getHelperName(
          "interopRequireWildcard"
        )}(${_});` : o.length > 0 && v !== _ && (P += ` var ${v} = ${this.helperManager.getHelperName(
          "interopRequireDefault"
        )}(${_});`);
      for (const { importedName: A, localName: j } of p)
        P += ` ${this.helperManager.getHelperName(
          "createNamedExportFrom"
        )}(${_}, '${j}', '${A}');`;
      for (const A of m)
        P += ` exports.${A} = ${v};`;
      y && (P += ` ${this.helperManager.getHelperName(
        "createStarExport"
      )}(${_});`), this.importsToReplace.set(n, P);
      for (const A of o)
        this.identifierReplacements.set(A, `${v}.default`);
      for (const { importedName: A, localName: j } of c)
        this.identifierReplacements.set(j, `${_}.${A}`);
    }
  }
  getFreeIdentifierForPath(n) {
    const r = n.split("/"), i = r[r.length - 1].replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${i}`);
  }
  preprocessImportAtIndex(n) {
    const r = [], o = [], i = [];
    if (n++, (this.tokens.matchesContextualAtIndex(n, l._type) || this.tokens.matches1AtIndex(n, t._typeof)) && !this.tokens.matches1AtIndex(n + 1, t.comma) && !this.tokens.matchesContextualAtIndex(n + 1, l._from) || this.tokens.matches1AtIndex(n, t.parenL))
      return;
    if (this.tokens.matches1AtIndex(n, t.name) && (r.push(this.tokens.identifierNameAtIndex(n)), n++, this.tokens.matches1AtIndex(n, t.comma) && n++), this.tokens.matches1AtIndex(n, t.star) && (n += 2, o.push(this.tokens.identifierNameAtIndex(n)), n++), this.tokens.matches1AtIndex(n, t.braceL)) {
      const m = this.getNamedImports(n + 1);
      n = m.newIndex;
      for (const y of m.namedImports)
        y.importedName === "default" ? r.push(y.localName) : i.push(y);
    }
    if (this.tokens.matchesContextualAtIndex(n, l._from) && n++, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const c = this.tokens.stringValueAtIndex(n), p = this.getImportInfo(c);
    p.defaultNames.push(...r), p.wildcardNames.push(...o), p.namedImports.push(...i), r.length === 0 && o.length === 0 && i.length === 0 && (p.hasBareImport = !0);
  }
  preprocessExportAtIndex(n) {
    if (this.tokens.matches2AtIndex(n, t._export, t._var) || this.tokens.matches2AtIndex(n, t._export, t._let) || this.tokens.matches2AtIndex(n, t._export, t._const))
      this.preprocessVarExportAtIndex(n);
    else if (this.tokens.matches2AtIndex(n, t._export, t._function) || this.tokens.matches2AtIndex(n, t._export, t._class)) {
      const r = this.tokens.identifierNameAtIndex(n + 2);
      this.addExportBinding(r, r);
    } else if (this.tokens.matches3AtIndex(n, t._export, t.name, t._function)) {
      const r = this.tokens.identifierNameAtIndex(n + 3);
      this.addExportBinding(r, r);
    } else
      this.tokens.matches2AtIndex(n, t._export, t.braceL) ? this.preprocessNamedExportAtIndex(n) : this.tokens.matches2AtIndex(n, t._export, t.star) && this.preprocessExportStarAtIndex(n);
  }
  preprocessVarExportAtIndex(n) {
    let r = 0;
    for (let o = n + 2; ; o++)
      if (this.tokens.matches1AtIndex(o, t.braceL) || this.tokens.matches1AtIndex(o, t.dollarBraceL) || this.tokens.matches1AtIndex(o, t.bracketL))
        r++;
      else if (this.tokens.matches1AtIndex(o, t.braceR) || this.tokens.matches1AtIndex(o, t.bracketR))
        r--;
      else {
        if (r === 0 && !this.tokens.matches1AtIndex(o, t.name))
          break;
        if (this.tokens.matches1AtIndex(1, t.eq)) {
          const i = this.tokens.currentToken().rhsEndIndex;
          if (i == null)
            throw new Error("Expected = token with an end index.");
          o = i - 1;
        } else {
          const i = this.tokens.tokens[o];
          if (vs(i)) {
            const c = this.tokens.identifierNameAtIndex(o);
            this.identifierReplacements.set(c, `exports.${c}`);
          }
        }
      }
  }
  preprocessNamedExportAtIndex(n) {
    n += 2;
    const { newIndex: r, namedImports: o } = this.getNamedImports(n);
    if (n = r, this.tokens.matchesContextualAtIndex(n, l._from))
      n++;
    else {
      for (const { importedName: p, localName: m } of o)
        this.addExportBinding(p, m);
      return;
    }
    if (!this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const i = this.tokens.stringValueAtIndex(n);
    this.getImportInfo(i).namedExports.push(...o);
  }
  preprocessExportStarAtIndex(n) {
    let r = null;
    if (this.tokens.matches3AtIndex(n, t._export, t.star, t._as) ? (n += 3, r = this.tokens.identifierNameAtIndex(n), n += 2) : n += 3, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of star export statement.");
    const o = this.tokens.stringValueAtIndex(n), i = this.getImportInfo(o);
    r !== null ? i.exportStarNames.push(r) : i.hasStarExport = !0;
  }
  getNamedImports(n) {
    const r = [];
    for (; ; ) {
      if (this.tokens.matches1AtIndex(n, t.braceR)) {
        n++;
        break;
      }
      const o = mn(this.tokens, n);
      if (n = o.endIndex, o.isType || r.push({
        importedName: o.leftName,
        localName: o.rightName
      }), this.tokens.matches2AtIndex(n, t.comma, t.braceR)) {
        n += 2;
        break;
      } else if (this.tokens.matches1AtIndex(n, t.braceR)) {
        n++;
        break;
      } else if (this.tokens.matches1AtIndex(n, t.comma))
        n++;
      else
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[n])}`);
    }
    return { newIndex: n, namedImports: r };
  }
  getImportInfo(n) {
    const r = this.importInfoByPath.get(n);
    if (r)
      return r;
    const o = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: !1,
      exportStarNames: [],
      hasStarExport: !1
    };
    return this.importInfoByPath.set(n, o), o;
  }
  addExportBinding(n, r) {
    this.exportBindingsByLocalName.has(n) || this.exportBindingsByLocalName.set(n, []), this.exportBindingsByLocalName.get(n).push(r);
  }
  claimImportCode(n) {
    const r = this.importsToReplace.get(n);
    return this.importsToReplace.set(n, ""), r || "";
  }
  getIdentifierReplacement(n) {
    return this.identifierReplacements.get(n) || null;
  }
  resolveExportBinding(n) {
    const r = this.exportBindingsByLocalName.get(n);
    return !r || r.length === 0 ? null : r.map((o) => `exports.${o}`).join(" = ");
  }
  getGlobalNames() {
    return /* @__PURE__ */ new Set([
      ...this.identifierReplacements.keys(),
      ...this.exportBindingsByLocalName.keys()
    ]);
  }
}
function Zo(e, n, { compiledFilename: r }) {
  let o = "AAAA";
  for (let i = 0; i < e.length; i++)
    e.charCodeAt(i) === f.lineFeed && (o += ";AACA");
  return {
    version: 3,
    file: r || "",
    sources: [n],
    mappings: o,
    names: []
  };
}
const ei = {
  require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
  interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
  interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
  createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
  createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
  nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
  asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
  optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
  asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `
};
class Dn {
  __init() {
    this.helperNames = {};
  }
  __init2() {
    this.createRequireName = null;
  }
  constructor(n) {
    this.nameManager = n, Dn.prototype.__init.call(this), Dn.prototype.__init2.call(this);
  }
  getHelperName(n) {
    let r = this.helperNames[n];
    return r || (r = this.nameManager.claimFreeName(`_${n}`), this.helperNames[n] = r, r);
  }
  emitHelpers() {
    let n = "";
    this.helperNames.optionalChainDelete && this.getHelperName("optionalChain"), this.helperNames.asyncOptionalChainDelete && this.getHelperName("asyncOptionalChain");
    for (const [r, o] of Object.entries(ei)) {
      const i = this.helperNames[r];
      let c = o;
      r === "optionalChainDelete" ? c = c.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain) : r === "asyncOptionalChainDelete" ? c = c.replace(
        "ASYNC_OPTIONAL_CHAIN_NAME",
        this.helperNames.asyncOptionalChain
      ) : r === "require" && (this.createRequireName === null && (this.createRequireName = this.nameManager.claimFreeName("_createRequire")), c = c.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), i && (n += " ", n += c.replace(r, i).replace(/\s+/g, " ").trim());
    }
    return n;
  }
}
function es(e, n, r) {
  !ti(e, r) || ni(e, n, r);
}
function ti(e, n) {
  for (const r of e.tokens)
    if (r.type === t.name && vo(r) && n.has(e.identifierNameForToken(r)))
      return !0;
  return !1;
}
function ni(e, n, r) {
  const o = [];
  let i = n.length - 1;
  for (let c = e.tokens.length - 1; ; c--) {
    for (; o.length > 0 && o[o.length - 1].startTokenIndex === c + 1; )
      o.pop();
    for (; i >= 0 && n[i].endTokenIndex === c + 1; )
      o.push(n[i]), i--;
    if (c < 0)
      break;
    const p = e.tokens[c], m = e.identifierNameForToken(p);
    if (o.length > 1 && p.type === t.name && r.has(m)) {
      if (Eo(p))
        ts(o[o.length - 1], e, m);
      else if (So(p)) {
        let y = o.length - 1;
        for (; y > 0 && !o[y].isFunctionScope; )
          y--;
        if (y < 0)
          throw new Error("Did not find parent function scope.");
        ts(o[y], e, m);
      }
    }
  }
  if (o.length > 0)
    throw new Error("Expected empty scope stack after processing file.");
}
function ts(e, n, r) {
  for (let o = e.startTokenIndex; o < e.endTokenIndex; o++) {
    const i = n.tokens[o];
    (i.type === t.name || i.type === t.jsxName) && n.identifierNameForToken(i) === r && (i.shadowsGlobal = !0);
  }
}
function ri(e, n) {
  const r = [];
  for (const o of n)
    o.type === t.name && r.push(e.slice(o.start, o.end));
  return r;
}
class wr {
  __init() {
    this.usedNames = /* @__PURE__ */ new Set();
  }
  constructor(n, r) {
    wr.prototype.__init.call(this), this.usedNames = new Set(ri(n, r));
  }
  claimFreeName(n) {
    const r = this.findFreeName(n);
    return this.usedNames.add(r), r;
  }
  findFreeName(n) {
    if (!this.usedNames.has(n))
      return n;
    let r = 2;
    for (; this.usedNames.has(n + String(r)); )
      r++;
    return n + String(r);
  }
}
var le = {}, cr = {}, Ke = {}, si = jt && jt.__extends || function() {
  var e = function(n, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, i) {
      o.__proto__ = i;
    } || function(o, i) {
      for (var c in i)
        i.hasOwnProperty(c) && (o[c] = i[c]);
    }, e(n, r);
  };
  return function(n, r) {
    e(n, r);
    function o() {
      this.constructor = n;
    }
    n.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
  };
}();
Object.defineProperty(Ke, "__esModule", { value: !0 });
Ke.DetailContext = Ke.NoopContext = Ke.VError = void 0;
var Ms = function(e) {
  si(n, e);
  function n(r, o) {
    var i = e.call(this, o) || this;
    return i.path = r, Object.setPrototypeOf(i, n.prototype), i;
  }
  return n;
}(Error);
Ke.VError = Ms;
var oi = function() {
  function e() {
  }
  return e.prototype.fail = function(n, r, o) {
    return !1;
  }, e.prototype.unionResolver = function() {
    return this;
  }, e.prototype.createContext = function() {
    return this;
  }, e.prototype.resolveUnion = function(n) {
  }, e;
}();
Ke.NoopContext = oi;
var $s = function() {
  function e() {
    this._propNames = [""], this._messages = [null], this._score = 0;
  }
  return e.prototype.fail = function(n, r, o) {
    return this._propNames.push(n), this._messages.push(r), this._score += o, !1;
  }, e.prototype.unionResolver = function() {
    return new ii();
  }, e.prototype.resolveUnion = function(n) {
    for (var r, o, i = n, c = null, p = 0, m = i.contexts; p < m.length; p++) {
      var y = m[p];
      (!c || y._score >= c._score) && (c = y);
    }
    c && c._score > 0 && ((r = this._propNames).push.apply(r, c._propNames), (o = this._messages).push.apply(o, c._messages));
  }, e.prototype.getError = function(n) {
    for (var r = [], o = this._propNames.length - 1; o >= 0; o--) {
      var i = this._propNames[o];
      n += typeof i == "number" ? "[" + i + "]" : i ? "." + i : "";
      var c = this._messages[o];
      c && r.push(n + " " + c);
    }
    return new Ms(n, r.join("; "));
  }, e.prototype.getErrorDetail = function(n) {
    for (var r = [], o = this._propNames.length - 1; o >= 0; o--) {
      var i = this._propNames[o];
      n += typeof i == "number" ? "[" + i + "]" : i ? "." + i : "";
      var c = this._messages[o];
      c && r.push({ path: n, message: c });
    }
    for (var p = null, o = r.length - 1; o >= 0; o--)
      p && (r[o].nested = [p]), p = r[o];
    return p;
  }, e;
}();
Ke.DetailContext = $s;
var ii = function() {
  function e() {
    this.contexts = [];
  }
  return e.prototype.createContext = function() {
    var n = new $s();
    return this.contexts.push(n), n;
  }, e;
}();
(function(e) {
  var n = jt && jt.__extends || function() {
    var g = function(b, w) {
      return g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(I, S) {
        I.__proto__ = S;
      } || function(I, S) {
        for (var C in S)
          S.hasOwnProperty(C) && (I[C] = S[C]);
      }, g(b, w);
    };
    return function(b, w) {
      g(b, w);
      function I() {
        this.constructor = b;
      }
      b.prototype = w === null ? Object.create(w) : (I.prototype = w.prototype, new I());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.basicTypes = e.BasicType = e.TParamList = e.TParam = e.param = e.TFunc = e.func = e.TProp = e.TOptional = e.opt = e.TIface = e.iface = e.TEnumLiteral = e.enumlit = e.TEnumType = e.enumtype = e.TIntersection = e.intersection = e.TUnion = e.union = e.TTuple = e.tuple = e.TArray = e.array = e.TLiteral = e.lit = e.TName = e.name = e.TType = void 0;
  var r = Ke, o = function() {
    function g() {
    }
    return g;
  }();
  e.TType = o;
  function i(g) {
    return typeof g == "string" ? p(g) : g;
  }
  function c(g, b) {
    var w = g[b];
    if (!w)
      throw new Error("Unknown type " + b);
    return w;
  }
  function p(g) {
    return new m(g);
  }
  e.name = p;
  var m = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.name = w, I._failMsg = "is not a " + w, I;
    }
    return b.prototype.getChecker = function(w, I, S) {
      var C = this, D = c(w, this.name), H = D.getChecker(w, I, S);
      return D instanceof ee || D instanceof b ? H : function(Z, Q) {
        return H(Z, Q) ? !0 : Q.fail(null, C._failMsg, 0);
      };
    }, b;
  }(o);
  e.TName = m;
  function y(g) {
    return new _(g);
  }
  e.lit = y;
  var _ = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.value = w, I.name = JSON.stringify(w), I._failMsg = "is not " + I.name, I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this;
      return function(C, D) {
        return C === S.value ? !0 : D.fail(null, S._failMsg, -1);
      };
    }, b;
  }(o);
  e.TLiteral = _;
  function v(g) {
    return new P(i(g));
  }
  e.array = v;
  var P = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.ttype = w, I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this.ttype.getChecker(w, I);
      return function(C, D) {
        if (!Array.isArray(C))
          return D.fail(null, "is not an array", 0);
        for (var H = 0; H < C.length; H++) {
          var Z = S(C[H], D);
          if (!Z)
            return D.fail(H, null, 1);
        }
        return !0;
      };
    }, b;
  }(o);
  e.TArray = P;
  function A() {
    for (var g = [], b = 0; b < arguments.length; b++)
      g[b] = arguments[b];
    return new j(g.map(function(w) {
      return i(w);
    }));
  }
  e.tuple = A;
  var j = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.ttypes = w, I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this.ttypes.map(function(D) {
        return D.getChecker(w, I);
      }), C = function(D, H) {
        if (!Array.isArray(D))
          return H.fail(null, "is not an array", 0);
        for (var Z = 0; Z < S.length; Z++) {
          var Q = S[Z](D[Z], H);
          if (!Q)
            return H.fail(Z, null, 1);
        }
        return !0;
      };
      return I ? function(D, H) {
        return C(D, H) ? D.length <= S.length ? !0 : H.fail(S.length, "is extraneous", 2) : !1;
      } : C;
    }, b;
  }(o);
  e.TTuple = j;
  function Y() {
    for (var g = [], b = 0; b < arguments.length; b++)
      g[b] = arguments[b];
    return new ce(g.map(function(w) {
      return i(w);
    }));
  }
  e.union = Y;
  var ce = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      I.ttypes = w;
      var S = w.map(function(D) {
        return D instanceof m || D instanceof _ ? D.name : null;
      }).filter(function(D) {
        return D;
      }), C = w.length - S.length;
      return S.length ? (C > 0 && S.push(C + " more"), I._failMsg = "is none of " + S.join(", ")) : I._failMsg = "is none of " + C + " types", I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this, C = this.ttypes.map(function(D) {
        return D.getChecker(w, I);
      });
      return function(D, H) {
        for (var Z = H.unionResolver(), Q = 0; Q < C.length; Q++) {
          var ie = C[Q](D, Z.createContext());
          if (ie)
            return !0;
        }
        return H.resolveUnion(Z), H.fail(null, S._failMsg, 0);
      };
    }, b;
  }(o);
  e.TUnion = ce;
  function ue() {
    for (var g = [], b = 0; b < arguments.length; b++)
      g[b] = arguments[b];
    return new J(g.map(function(w) {
      return i(w);
    }));
  }
  e.intersection = ue;
  var J = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.ttypes = w, I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = /* @__PURE__ */ new Set(), C = this.ttypes.map(function(D) {
        return D.getChecker(w, I, S);
      });
      return function(D, H) {
        var Z = C.every(function(Q) {
          return Q(D, H);
        });
        return Z ? !0 : H.fail(null, null, 0);
      };
    }, b;
  }(o);
  e.TIntersection = J;
  function K(g) {
    return new he(g);
  }
  e.enumtype = K;
  var he = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.members = w, I.validValues = /* @__PURE__ */ new Set(), I._failMsg = "is not a valid enum value", I.validValues = new Set(Object.keys(w).map(function(S) {
        return w[S];
      })), I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this;
      return function(C, D) {
        return S.validValues.has(C) ? !0 : D.fail(null, S._failMsg, 0);
      };
    }, b;
  }(o);
  e.TEnumType = he;
  function fe(g, b) {
    return new ve(g, b);
  }
  e.enumlit = fe;
  var ve = function(g) {
    n(b, g);
    function b(w, I) {
      var S = g.call(this) || this;
      return S.enumName = w, S.prop = I, S._failMsg = "is not " + w + "." + I, S;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this, C = c(w, this.enumName);
      if (!(C instanceof he))
        throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
      var D = C.members[this.prop];
      if (!C.members.hasOwnProperty(this.prop))
        throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
      return function(H, Z) {
        return H === D ? !0 : Z.fail(null, S._failMsg, -1);
      };
    }, b;
  }(o);
  e.TEnumLiteral = ve;
  function $e(g) {
    return Object.keys(g).map(function(b) {
      return Ce(b, g[b]);
    });
  }
  function Ce(g, b) {
    return b instanceof De ? new Pe(g, b.ttype, !0) : new Pe(g, i(b), !1);
  }
  function Ge(g, b) {
    return new Oe(g, $e(b));
  }
  e.iface = Ge;
  var Oe = function(g) {
    n(b, g);
    function b(w, I) {
      var S = g.call(this) || this;
      return S.bases = w, S.props = I, S.propSet = new Set(I.map(function(C) {
        return C.name;
      })), S;
    }
    return b.prototype.getChecker = function(w, I, S) {
      var C = this, D = this.bases.map(function(ne) {
        return c(w, ne).getChecker(w, I);
      }), H = this.props.map(function(ne) {
        return ne.ttype.getChecker(w, I);
      }), Z = new r.NoopContext(), Q = this.props.map(function(ne, me) {
        return !ne.isOpt && !H[me](void 0, Z);
      }), ie = function(ne, me) {
        if (typeof ne != "object" || ne === null)
          return me.fail(null, "is not an object", 0);
        for (var pe = 0; pe < D.length; pe++)
          if (!D[pe](ne, me))
            return !1;
        for (var pe = 0; pe < H.length; pe++) {
          var rt = C.props[pe].name, at = ne[rt];
          if (at === void 0) {
            if (Q[pe])
              return me.fail(rt, "is missing", 1);
          } else {
            var st = H[pe](at, me);
            if (!st)
              return me.fail(rt, null, 1);
          }
        }
        return !0;
      };
      if (!I)
        return ie;
      var de = this.propSet;
      return S && (this.propSet.forEach(function(ne) {
        return S.add(ne);
      }), de = S), function(ne, me) {
        if (!ie(ne, me))
          return !1;
        for (var pe in ne)
          if (!de.has(pe))
            return me.fail(pe, "is extraneous", 2);
        return !0;
      };
    }, b;
  }(o);
  e.TIface = Oe;
  function ze(g) {
    return new De(i(g));
  }
  e.opt = ze;
  var De = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.ttype = w, I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this.ttype.getChecker(w, I);
      return function(C, D) {
        return C === void 0 || S(C, D);
      };
    }, b;
  }(o);
  e.TOptional = De;
  var Pe = function() {
    function g(b, w, I) {
      this.name = b, this.ttype = w, this.isOpt = I;
    }
    return g;
  }();
  e.TProp = Pe;
  function _e(g) {
    for (var b = [], w = 1; w < arguments.length; w++)
      b[w - 1] = arguments[w];
    return new xe(new je(b), i(g));
  }
  e.func = _e;
  var xe = function(g) {
    n(b, g);
    function b(w, I) {
      var S = g.call(this) || this;
      return S.paramList = w, S.result = I, S;
    }
    return b.prototype.getChecker = function(w, I) {
      return function(S, C) {
        return typeof S == "function" ? !0 : C.fail(null, "is not a function", 0);
      };
    }, b;
  }(o);
  e.TFunc = xe;
  function Ee(g, b, w) {
    return new Le(g, i(b), Boolean(w));
  }
  e.param = Ee;
  var Le = function() {
    function g(b, w, I) {
      this.name = b, this.ttype = w, this.isOpt = I;
    }
    return g;
  }();
  e.TParam = Le;
  var je = function(g) {
    n(b, g);
    function b(w) {
      var I = g.call(this) || this;
      return I.params = w, I;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this, C = this.params.map(function(Q) {
        return Q.ttype.getChecker(w, I);
      }), D = new r.NoopContext(), H = this.params.map(function(Q, ie) {
        return !Q.isOpt && !C[ie](void 0, D);
      }), Z = function(Q, ie) {
        if (!Array.isArray(Q))
          return ie.fail(null, "is not an array", 0);
        for (var de = 0; de < C.length; de++) {
          var ne = S.params[de];
          if (Q[de] === void 0) {
            if (H[de])
              return ie.fail(ne.name, "is missing", 1);
          } else {
            var me = C[de](Q[de], ie);
            if (!me)
              return ie.fail(ne.name, null, 1);
          }
        }
        return !0;
      };
      return I ? function(Q, ie) {
        return Z(Q, ie) ? Q.length <= C.length ? !0 : ie.fail(C.length, "is extraneous", 2) : !1;
      } : Z;
    }, b;
  }(o);
  e.TParamList = je;
  var ee = function(g) {
    n(b, g);
    function b(w, I) {
      var S = g.call(this) || this;
      return S.validator = w, S.message = I, S;
    }
    return b.prototype.getChecker = function(w, I) {
      var S = this;
      return function(C, D) {
        return S.validator(C) ? !0 : D.fail(null, S.message, 0);
      };
    }, b;
  }(o);
  e.BasicType = ee, e.basicTypes = {
    any: new ee(function(g) {
      return !0;
    }, "is invalid"),
    number: new ee(function(g) {
      return typeof g == "number";
    }, "is not a number"),
    object: new ee(function(g) {
      return typeof g == "object" && g;
    }, "is not an object"),
    boolean: new ee(function(g) {
      return typeof g == "boolean";
    }, "is not a boolean"),
    string: new ee(function(g) {
      return typeof g == "string";
    }, "is not a string"),
    symbol: new ee(function(g) {
      return typeof g == "symbol";
    }, "is not a symbol"),
    void: new ee(function(g) {
      return g == null;
    }, "is not void"),
    undefined: new ee(function(g) {
      return g === void 0;
    }, "is not undefined"),
    null: new ee(function(g) {
      return g === null;
    }, "is not null"),
    never: new ee(function(g) {
      return !1;
    }, "is unexpected"),
    Date: new ee(Fe("[object Date]"), "is not a Date"),
    RegExp: new ee(Fe("[object RegExp]"), "is not a RegExp")
  };
  var Ve = Object.prototype.toString;
  function Fe(g) {
    return function(b) {
      return typeof b == "object" && b && Ve.call(b) === g;
    };
  }
  typeof Buffer < "u" && (e.basicTypes.Buffer = new ee(function(g) {
    return Buffer.isBuffer(g);
  }, "is not a Buffer"));
  for (var We = function(g) {
    e.basicTypes[g.name] = new ee(function(b) {
      return b instanceof g;
    }, "is not a " + g.name);
  }, Be = 0, nt = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    ArrayBuffer
  ]; Be < nt.length; Be++) {
    var dt = nt[Be];
    We(dt);
  }
})(cr);
(function(e) {
  var n = jt && jt.__spreadArrays || function() {
    for (var y = 0, _ = 0, v = arguments.length; _ < v; _++)
      y += arguments[_].length;
    for (var P = Array(y), A = 0, _ = 0; _ < v; _++)
      for (var j = arguments[_], Y = 0, ce = j.length; Y < ce; Y++, A++)
        P[A] = j[Y];
    return P;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Checker = e.createCheckers = void 0;
  var r = cr, o = Ke, i = cr;
  Object.defineProperty(e, "TArray", { enumerable: !0, get: function() {
    return i.TArray;
  } }), Object.defineProperty(e, "TEnumType", { enumerable: !0, get: function() {
    return i.TEnumType;
  } }), Object.defineProperty(e, "TEnumLiteral", { enumerable: !0, get: function() {
    return i.TEnumLiteral;
  } }), Object.defineProperty(e, "TFunc", { enumerable: !0, get: function() {
    return i.TFunc;
  } }), Object.defineProperty(e, "TIface", { enumerable: !0, get: function() {
    return i.TIface;
  } }), Object.defineProperty(e, "TLiteral", { enumerable: !0, get: function() {
    return i.TLiteral;
  } }), Object.defineProperty(e, "TName", { enumerable: !0, get: function() {
    return i.TName;
  } }), Object.defineProperty(e, "TOptional", { enumerable: !0, get: function() {
    return i.TOptional;
  } }), Object.defineProperty(e, "TParam", { enumerable: !0, get: function() {
    return i.TParam;
  } }), Object.defineProperty(e, "TParamList", { enumerable: !0, get: function() {
    return i.TParamList;
  } }), Object.defineProperty(e, "TProp", { enumerable: !0, get: function() {
    return i.TProp;
  } }), Object.defineProperty(e, "TTuple", { enumerable: !0, get: function() {
    return i.TTuple;
  } }), Object.defineProperty(e, "TType", { enumerable: !0, get: function() {
    return i.TType;
  } }), Object.defineProperty(e, "TUnion", { enumerable: !0, get: function() {
    return i.TUnion;
  } }), Object.defineProperty(e, "TIntersection", { enumerable: !0, get: function() {
    return i.TIntersection;
  } }), Object.defineProperty(e, "array", { enumerable: !0, get: function() {
    return i.array;
  } }), Object.defineProperty(e, "enumlit", { enumerable: !0, get: function() {
    return i.enumlit;
  } }), Object.defineProperty(e, "enumtype", { enumerable: !0, get: function() {
    return i.enumtype;
  } }), Object.defineProperty(e, "func", { enumerable: !0, get: function() {
    return i.func;
  } }), Object.defineProperty(e, "iface", { enumerable: !0, get: function() {
    return i.iface;
  } }), Object.defineProperty(e, "lit", { enumerable: !0, get: function() {
    return i.lit;
  } }), Object.defineProperty(e, "name", { enumerable: !0, get: function() {
    return i.name;
  } }), Object.defineProperty(e, "opt", { enumerable: !0, get: function() {
    return i.opt;
  } }), Object.defineProperty(e, "param", { enumerable: !0, get: function() {
    return i.param;
  } }), Object.defineProperty(e, "tuple", { enumerable: !0, get: function() {
    return i.tuple;
  } }), Object.defineProperty(e, "union", { enumerable: !0, get: function() {
    return i.union;
  } }), Object.defineProperty(e, "intersection", { enumerable: !0, get: function() {
    return i.intersection;
  } }), Object.defineProperty(e, "BasicType", { enumerable: !0, get: function() {
    return i.BasicType;
  } });
  var c = Ke;
  Object.defineProperty(e, "VError", { enumerable: !0, get: function() {
    return c.VError;
  } });
  function p() {
    for (var y = [], _ = 0; _ < arguments.length; _++)
      y[_] = arguments[_];
    for (var v = Object.assign.apply(Object, n([{}, r.basicTypes], y)), P = {}, A = 0, j = y; A < j.length; A++)
      for (var Y = j[A], ce = 0, ue = Object.keys(Y); ce < ue.length; ce++) {
        var J = ue[ce];
        P[J] = new m(v, Y[J]);
      }
    return P;
  }
  e.createCheckers = p;
  var m = function() {
    function y(_, v, P) {
      if (P === void 0 && (P = "value"), this.suite = _, this.ttype = v, this._path = P, this.props = /* @__PURE__ */ new Map(), v instanceof r.TIface)
        for (var A = 0, j = v.props; A < j.length; A++) {
          var Y = j[A];
          this.props.set(Y.name, Y.ttype);
        }
      this.checkerPlain = this.ttype.getChecker(_, !1), this.checkerStrict = this.ttype.getChecker(_, !0);
    }
    return y.prototype.setReportedPath = function(_) {
      this._path = _;
    }, y.prototype.check = function(_) {
      return this._doCheck(this.checkerPlain, _);
    }, y.prototype.test = function(_) {
      return this.checkerPlain(_, new o.NoopContext());
    }, y.prototype.validate = function(_) {
      return this._doValidate(this.checkerPlain, _);
    }, y.prototype.strictCheck = function(_) {
      return this._doCheck(this.checkerStrict, _);
    }, y.prototype.strictTest = function(_) {
      return this.checkerStrict(_, new o.NoopContext());
    }, y.prototype.strictValidate = function(_) {
      return this._doValidate(this.checkerStrict, _);
    }, y.prototype.getProp = function(_) {
      var v = this.props.get(_);
      if (!v)
        throw new Error("Type has no property " + _);
      return new y(this.suite, v, this._path + "." + _);
    }, y.prototype.methodArgs = function(_) {
      var v = this._getMethod(_);
      return new y(this.suite, v.paramList);
    }, y.prototype.methodResult = function(_) {
      var v = this._getMethod(_);
      return new y(this.suite, v.result);
    }, y.prototype.getArgs = function() {
      if (!(this.ttype instanceof r.TFunc))
        throw new Error("getArgs() applied to non-function");
      return new y(this.suite, this.ttype.paramList);
    }, y.prototype.getResult = function() {
      if (!(this.ttype instanceof r.TFunc))
        throw new Error("getResult() applied to non-function");
      return new y(this.suite, this.ttype.result);
    }, y.prototype.getType = function() {
      return this.ttype;
    }, y.prototype._doCheck = function(_, v) {
      var P = new o.NoopContext();
      if (!_(v, P)) {
        var A = new o.DetailContext();
        throw _(v, A), A.getError(this._path);
      }
    }, y.prototype._doValidate = function(_, v) {
      var P = new o.NoopContext();
      if (_(v, P))
        return null;
      var A = new o.DetailContext();
      return _(v, A), A.getErrorDetail(this._path);
    }, y.prototype._getMethod = function(_) {
      var v = this.props.get(_);
      if (!v)
        throw new Error("Type has no property " + _);
      if (!(v instanceof r.TFunc))
        throw new Error("Property " + _ + " is not a method");
      return v;
    }, y;
  }();
  e.Checker = m;
})(le);
const ai = le.union(
  le.lit("jsx"),
  le.lit("typescript"),
  le.lit("flow"),
  le.lit("imports"),
  le.lit("react-hot-loader"),
  le.lit("jest")
), ci = le.iface([], {
  compiledFilename: "string"
}), li = le.iface([], {
  transforms: le.array("Transform"),
  jsxPragma: le.opt("string"),
  jsxFragmentPragma: le.opt("string"),
  enableLegacyTypeScriptModuleInterop: le.opt("boolean"),
  enableLegacyBabel5ModuleInterop: le.opt("boolean"),
  sourceMapOptions: le.opt("SourceMapOptions"),
  filePath: le.opt("string"),
  production: le.opt("boolean"),
  disableESTransforms: le.opt("boolean"),
  preserveDynamicImport: le.opt("boolean"),
  injectCreateRequireForImportRequire: le.opt("boolean")
}), ui = {
  Transform: ai,
  SourceMapOptions: ci,
  Options: li
}, { Options: fi } = le.createCheckers(ui);
function pi(e) {
  fi.strictCheck(e);
}
function Vs() {
  k(), be(!1);
}
function Ws(e) {
  k(), zn(e);
}
function ht(e) {
  O(), Ir(e);
}
function Ln() {
  O(), s.tokens[s.tokens.length - 1].identifierRole = R.ImportDeclaration;
}
function Ir(e) {
  let n;
  s.scopeDepth === 0 ? n = R.TopLevelDeclaration : e ? n = R.BlockScopedDeclaration : n = R.FunctionScopedDeclaration, s.tokens[s.tokens.length - 1].identifierRole = n;
}
function zn(e) {
  switch (s.type) {
    case t._this: {
      const n = q(0);
      k(), M(n);
      return;
    }
    case t._yield:
    case t.name: {
      s.type = t.name, ht(e);
      return;
    }
    case t.bracketL: {
      k(), Tr(t.bracketR, e, !0);
      return;
    }
    case t.braceL:
      l1(!0, e);
      return;
    default:
      F();
  }
}
function Tr(e, n, r = !1, o = !1, i = 0) {
  let c = !0, p = !1;
  const m = s.tokens.length;
  for (; !h(e) && !s.error; )
    if (c ? c = !1 : (d(t.comma), s.tokens[s.tokens.length - 1].contextId = i, !p && s.tokens[m].isType && (s.tokens[s.tokens.length - 1].isType = !0, p = !0)), !(r && a(t.comma))) {
      if (h(e))
        break;
      if (a(t.ellipsis)) {
        Ws(n), Hs(), h(t.comma), d(e);
        break;
      } else
        hi(o, n);
    }
}
function hi(e, n) {
  e && vr([
    l._public,
    l._protected,
    l._private,
    l._readonly,
    l._override
  ]), jn(n), Hs(), jn(n, !0);
}
function Hs() {
  X ? Cc() : W && xa();
}
function jn(e, n = !1) {
  if (n || zn(e), !h(t.eq))
    return;
  const r = s.tokens.length - 1;
  be(), s.tokens[r].rhsEndIndex = s.tokens.length;
}
function lr() {
  return a(t.name);
}
function di() {
  return a(t.name) || Boolean(s.type & t.IS_KEYWORD) || a(t.string) || a(t.num) || a(t.bigint) || a(t.decimal);
}
function Us() {
  const e = s.snapshot();
  return k(), (a(t.bracketL) || a(t.braceL) || a(t.star) || a(t.ellipsis) || a(t.hash) || di()) && !Me() ? !0 : (s.restoreFromSnapshot(e), !1);
}
function vr(e) {
  for (; Xs(e) !== null; )
    ;
}
function Xs(e) {
  if (!a(t.name))
    return null;
  const n = s.contextualKeyword;
  if (e.indexOf(n) !== -1 && Us()) {
    switch (n) {
      case l._readonly:
        s.tokens[s.tokens.length - 1].type = t._readonly;
        break;
      case l._abstract:
        s.tokens[s.tokens.length - 1].type = t._abstract;
        break;
      case l._static:
        s.tokens[s.tokens.length - 1].type = t._static;
        break;
      case l._public:
        s.tokens[s.tokens.length - 1].type = t._public;
        break;
      case l._private:
        s.tokens[s.tokens.length - 1].type = t._private;
        break;
      case l._protected:
        s.tokens[s.tokens.length - 1].type = t._protected;
        break;
      case l._override:
        s.tokens[s.tokens.length - 1].type = t._override;
        break;
      case l._declare:
        s.tokens[s.tokens.length - 1].type = t._declare;
        break;
    }
    return n;
  }
  return null;
}
function In() {
  for (O(); h(t.dot); )
    O();
}
function mi() {
  In(), !Me() && a(t.lessThan) && Mt();
}
function ki() {
  k(), Tn();
}
function gi() {
  k();
}
function _i() {
  d(t._typeof), a(t._import) ? Ys() : In(), !Me() && a(t.lessThan) && Mt();
}
function Ys() {
  d(t._import), d(t.parenL), d(t.string), d(t.parenR), h(t.dot) && In(), a(t.lessThan) && Mt();
}
function yi() {
  const e = h(t._in), n = ye(l._out);
  (e || n) && !a(t.name) ? s.tokens[s.tokens.length - 1].type = t.name : O(), h(t._extends) && oe(), h(t.eq) && oe();
}
function It() {
  a(t.lessThan) && Jn();
}
function Jn() {
  const e = q(0);
  for (a(t.lessThan) || a(t.typeParameterStart) ? k() : F(); !h(t.greaterThan) && !s.error; )
    yi(), h(t.comma);
  M(e);
}
function Er(e) {
  const n = e === t.arrow;
  It(), d(t.parenL), s.scopeDepth++, bi(!1), s.scopeDepth--, (n || a(e)) && kn(e);
}
function bi(e) {
  Tr(t.parenR, e);
}
function Fn() {
  h(t.comma) || te();
}
function ns() {
  Er(t.colon), Fn();
}
function xi() {
  const e = s.snapshot();
  k();
  const n = h(t.name) && a(t.colon);
  return s.restoreFromSnapshot(e), n;
}
function Gs() {
  if (!(a(t.bracketL) && xi()))
    return !1;
  const e = q(0);
  return d(t.bracketL), O(), Tn(), d(t.bracketR), qt(), Fn(), M(e), !0;
}
function rs(e) {
  h(t.question), !e && (a(t.parenL) || a(t.lessThan)) ? (Er(t.colon), Fn()) : (qt(), Fn());
}
function wi() {
  if (a(t.parenL) || a(t.lessThan)) {
    ns();
    return;
  }
  if (a(t._new)) {
    k(), a(t.parenL) || a(t.lessThan) ? ns() : rs(!1);
    return;
  }
  const e = !!Xs([l._readonly]);
  Gs() || ((N(l._get) || N(l._set)) && Us(), gn(-1), rs(e));
}
function Ii() {
  zs();
}
function zs() {
  for (d(t.braceL); !h(t.braceR) && !s.error; )
    wi();
}
function Ti() {
  const e = s.snapshot(), n = vi();
  return s.restoreFromSnapshot(e), n;
}
function vi() {
  return k(), h(t.plus) || h(t.minus) ? N(l._readonly) : (N(l._readonly) && k(), !a(t.bracketL) || (k(), !lr()) ? !1 : (k(), a(t._in)));
}
function Ei() {
  O(), d(t._in), oe();
}
function Si() {
  d(t.braceL), a(t.plus) || a(t.minus) ? (k(), ge(l._readonly)) : ye(l._readonly), d(t.bracketL), Ei(), ye(l._as) && oe(), d(t.bracketR), a(t.plus) || a(t.minus) ? (k(), d(t.question)) : h(t.question), $i(), te(), d(t.braceR);
}
function Ai() {
  for (d(t.bracketL); !h(t.bracketR) && !s.error; )
    Pi(), h(t.comma);
}
function Pi() {
  h(t.ellipsis) ? oe() : (oe(), h(t.question)), h(t.colon) && oe();
}
function Ri() {
  d(t.parenL), oe(), d(t.parenR);
}
function Ni() {
  for (lt(), lt(); !a(t.backQuote) && !s.error; )
    d(t.dollarBraceL), oe(), lt(), lt();
  k();
}
var ut;
(function(e) {
  e[e.TSFunctionType = 0] = "TSFunctionType";
  const r = 0 + 1;
  e[e.TSConstructorType = r] = "TSConstructorType";
  const o = r + 1;
  e[e.TSAbstractConstructorType = o] = "TSAbstractConstructorType";
})(ut || (ut = {}));
function rr(e) {
  e === ut.TSAbstractConstructorType && ge(l._abstract), (e === ut.TSConstructorType || e === ut.TSAbstractConstructorType) && d(t._new);
  const n = s.inDisallowConditionalTypesContext;
  s.inDisallowConditionalTypesContext = !1, Er(t.arrow), s.inDisallowConditionalTypesContext = n;
}
function Ci() {
  switch (s.type) {
    case t.name:
      mi();
      return;
    case t._void:
    case t._null:
      k();
      return;
    case t.string:
    case t.num:
    case t.bigint:
    case t.decimal:
    case t._true:
    case t._false:
      Ft();
      return;
    case t.minus:
      k(), Ft();
      return;
    case t._this: {
      gi(), N(l._is) && !Me() && ki();
      return;
    }
    case t._typeof:
      _i();
      return;
    case t._import:
      Ys();
      return;
    case t.braceL:
      Ti() ? Si() : Ii();
      return;
    case t.bracketL:
      Ai();
      return;
    case t.parenL:
      Ri();
      return;
    case t.backQuote:
      Ni();
      return;
    default:
      if (s.type & t.IS_KEYWORD) {
        k(), s.tokens[s.tokens.length - 1].type = t.name;
        return;
      }
      break;
  }
  F();
}
function Oi() {
  for (Ci(); !Me() && h(t.bracketL); )
    h(t.bracketR) || (oe(), d(t.bracketR));
}
function Di() {
  if (ge(l._infer), O(), a(t._extends)) {
    const e = s.snapshot();
    d(t._extends);
    const n = s.inDisallowConditionalTypesContext;
    s.inDisallowConditionalTypesContext = !0, oe(), s.inDisallowConditionalTypesContext = n, (s.error || !s.inDisallowConditionalTypesContext && a(t.question)) && s.restoreFromSnapshot(e);
  }
}
function ur() {
  if (N(l._keyof) || N(l._unique) || N(l._readonly))
    k(), ur();
  else if (N(l._infer))
    Di();
  else {
    const e = s.inDisallowConditionalTypesContext;
    s.inDisallowConditionalTypesContext = !1, Oi(), s.inDisallowConditionalTypesContext = e;
  }
}
function ss() {
  if (h(t.bitwiseAND), ur(), a(t.bitwiseAND))
    for (; h(t.bitwiseAND); )
      ur();
}
function Li() {
  if (h(t.bitwiseOR), ss(), a(t.bitwiseOR))
    for (; h(t.bitwiseOR); )
      ss();
}
function ji() {
  return a(t.lessThan) ? !0 : a(t.parenL) && Bi();
}
function Fi() {
  if (a(t.name) || a(t._this))
    return k(), !0;
  if (a(t.braceL) || a(t.bracketL)) {
    let e = 1;
    for (k(); e > 0 && !s.error; )
      a(t.braceL) || a(t.bracketL) ? e++ : (a(t.braceR) || a(t.bracketR)) && e--, k();
    return !0;
  }
  return !1;
}
function Bi() {
  const e = s.snapshot(), n = qi();
  return s.restoreFromSnapshot(e), n;
}
function qi() {
  return k(), !!(a(t.parenR) || a(t.ellipsis) || Fi() && (a(t.colon) || a(t.comma) || a(t.question) || a(t.eq) || a(t.parenR) && (k(), a(t.arrow))));
}
function kn(e) {
  const n = q(0);
  d(e), Vi() || oe(), M(n);
}
function Mi() {
  a(t.colon) && kn(t.colon);
}
function qt() {
  a(t.colon) && Tn();
}
function $i() {
  h(t.colon) && oe();
}
function Vi() {
  const e = s.snapshot();
  return N(l._asserts) ? (k(), ye(l._is) ? (oe(), !0) : lr() || a(t._this) ? (k(), ye(l._is) && oe(), !0) : (s.restoreFromSnapshot(e), !1)) : lr() || a(t._this) ? (k(), N(l._is) && !Me() ? (k(), oe(), !0) : (s.restoreFromSnapshot(e), !1)) : !1;
}
function Tn() {
  const e = q(0);
  d(t.colon), oe(), M(e);
}
function oe() {
  if (os(), s.inDisallowConditionalTypesContext || Me() || !h(t._extends))
    return;
  const e = s.inDisallowConditionalTypesContext;
  s.inDisallowConditionalTypesContext = !0, os(), s.inDisallowConditionalTypesContext = e, d(t.question), oe(), d(t.colon), oe();
}
function Wi() {
  return N(l._abstract) && ae() === t._new;
}
function os() {
  if (ji()) {
    rr(ut.TSFunctionType);
    return;
  }
  if (a(t._new)) {
    rr(ut.TSConstructorType);
    return;
  } else if (Wi()) {
    rr(ut.TSAbstractConstructorType);
    return;
  }
  Li();
}
function Hi() {
  const e = q(1);
  oe(), d(t.greaterThan), M(e), vn();
}
function Ui() {
  if (h(t.jsxTagStart)) {
    s.tokens[s.tokens.length - 1].type = t.typeParameterStart;
    const e = q(1);
    for (; !a(t.greaterThan) && !s.error; )
      oe(), h(t.comma);
    qe(), M(e);
  }
}
function Js() {
  for (; !a(t.braceL) && !s.error; )
    Xi(), h(t.comma);
}
function Xi() {
  In(), a(t.lessThan) && Mt();
}
function Yi() {
  ht(!1), It(), h(t._extends) && Js(), zs();
}
function Gi() {
  ht(!1), It(), d(t.eq), oe(), te();
}
function zi() {
  if (a(t.string) ? Ft() : O(), h(t.eq)) {
    const e = s.tokens.length - 1;
    be(), s.tokens[e].rhsEndIndex = s.tokens.length;
  }
}
function Sr() {
  for (ht(!1), d(t.braceL); !h(t.braceR) && !s.error; )
    zi(), h(t.comma);
}
function Ar() {
  d(t.braceL), er(t.braceR);
}
function fr() {
  ht(!1), h(t.dot) ? fr() : Ar();
}
function Qs() {
  N(l._global) ? O() : a(t.string) ? it() : F(), a(t.braceL) ? Ar() : te();
}
function pr() {
  Ln(), d(t.eq), Qi(), te();
}
function Ji() {
  return N(l._require) && ae() === t.parenL;
}
function Qi() {
  Ji() ? Ki() : In();
}
function Ki() {
  ge(l._require), d(t.parenL), a(t.string) || F(), Ft(), d(t.parenR);
}
function Zi() {
  if (Qe())
    return !1;
  switch (s.type) {
    case t._function: {
      const e = q(1);
      k();
      const n = s.start;
      return xt(n, !0), M(e), !0;
    }
    case t._class: {
      const e = q(1);
      return wt(!0, !1), M(e), !0;
    }
    case t._const:
      if (a(t._const) && ws(l._enum)) {
        const e = q(1);
        return d(t._const), ge(l._enum), s.tokens[s.tokens.length - 1].type = t._enum, Sr(), M(e), !0;
      }
    case t._var:
    case t._let: {
      const e = q(1);
      return b1(s.type), M(e), !0;
    }
    case t.name: {
      const e = q(1), n = s.contextualKeyword;
      let r = !1;
      return n === l._global ? (Qs(), r = !0) : r = Qn(n, !0), M(e), r;
    }
    default:
      return !1;
  }
}
function is() {
  return Qn(s.contextualKeyword, !0);
}
function ea(e) {
  switch (e) {
    case l._declare: {
      const n = s.tokens.length - 1;
      if (Zi())
        return s.tokens[n].type = t._declare, !0;
      break;
    }
    case l._global:
      if (a(t.braceL))
        return Ar(), !0;
      break;
    default:
      return Qn(e, !1);
  }
  return !1;
}
function Qn(e, n) {
  switch (e) {
    case l._abstract:
      if (Lt(n) && a(t._class))
        return s.tokens[s.tokens.length - 1].type = t._abstract, wt(!0, !1), !0;
      break;
    case l._enum:
      if (Lt(n) && a(t.name))
        return s.tokens[s.tokens.length - 1].type = t._enum, Sr(), !0;
      break;
    case l._interface:
      if (Lt(n) && a(t.name)) {
        const r = q(n ? 2 : 1);
        return Yi(), M(r), !0;
      }
      break;
    case l._module:
      if (Lt(n)) {
        if (a(t.string)) {
          const r = q(n ? 2 : 1);
          return Qs(), M(r), !0;
        } else if (a(t.name)) {
          const r = q(n ? 2 : 1);
          return fr(), M(r), !0;
        }
      }
      break;
    case l._namespace:
      if (Lt(n) && a(t.name)) {
        const r = q(n ? 2 : 1);
        return fr(), M(r), !0;
      }
      break;
    case l._type:
      if (Lt(n) && a(t.name)) {
        const r = q(n ? 2 : 1);
        return Gi(), M(r), !0;
      }
      break;
  }
  return !1;
}
function Lt(e) {
  return e ? (k(), !0) : !Qe();
}
function ta() {
  const e = s.snapshot();
  return Jn(), $t(), Mi(), d(t.arrow), s.error ? (s.restoreFromSnapshot(e), !1) : (En(!0), !0);
}
function Pr() {
  s.type === t.bitShiftL && (s.pos -= 1, B(t.lessThan)), Mt();
}
function Mt() {
  const e = q(0);
  for (d(t.lessThan); !h(t.greaterThan) && !s.error; )
    oe(), h(t.comma);
  M(e);
}
function Ks() {
  if (a(t.name))
    switch (s.contextualKeyword) {
      case l._abstract:
      case l._declare:
      case l._enum:
      case l._interface:
      case l._module:
      case l._namespace:
      case l._type:
        return !0;
    }
  return !1;
}
function na(e, n) {
  if (a(t.colon) && kn(t.colon), !a(t.braceL) && Qe()) {
    let r = s.tokens.length - 1;
    for (; r >= 0 && (s.tokens[r].start >= e || s.tokens[r].type === t._default || s.tokens[r].type === t._export); )
      s.tokens[r].isType = !0, r--;
    return;
  }
  En(!1, n);
}
function ra(e, n, r) {
  if (!Me() && h(t.bang)) {
    s.tokens[s.tokens.length - 1].type = t.nonNullAssertion;
    return;
  }
  if (a(t.lessThan) || a(t.bitShiftL)) {
    const o = s.snapshot();
    if (!n && a1() && ta())
      return;
    if (Pr(), !n && h(t.parenL) ? (s.tokens[s.tokens.length - 1].subscriptStartIndex = e, ft()) : a(t.backQuote) ? Dr() : (s.type === t.greaterThan || s.type !== t.parenL && Boolean(s.type & t.IS_EXPRESSION_START) && !Me()) && F(), s.error)
      s.restoreFromSnapshot(o);
    else
      return;
  } else
    !n && a(t.questionDot) && ae() === t.lessThan && (k(), s.tokens[e].isOptionalChainStart = !0, s.tokens[s.tokens.length - 1].subscriptStartIndex = e, Mt(), d(t.parenL), ft());
  Nr(e, n, r);
}
function sa() {
  return h(t._import) ? (N(l._type) && ae() !== t.eq && ge(l._type), pr(), !0) : h(t.eq) ? (we(), te(), !0) : ye(l._as) ? (ge(l._namespace), O(), te(), !0) : (N(l._type) && ae() === t.braceL && k(), !1);
}
function oa() {
  if (O(), a(t.comma) || a(t.braceR)) {
    s.tokens[s.tokens.length - 1].identifierRole = R.ImportDeclaration;
    return;
  }
  if (O(), a(t.comma) || a(t.braceR)) {
    s.tokens[s.tokens.length - 1].identifierRole = R.ImportDeclaration, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0;
    return;
  }
  if (O(), a(t.comma) || a(t.braceR)) {
    s.tokens[s.tokens.length - 3].identifierRole = R.ImportAccess, s.tokens[s.tokens.length - 1].identifierRole = R.ImportDeclaration;
    return;
  }
  O(), s.tokens[s.tokens.length - 3].identifierRole = R.ImportAccess, s.tokens[s.tokens.length - 1].identifierRole = R.ImportDeclaration, s.tokens[s.tokens.length - 4].isType = !0, s.tokens[s.tokens.length - 3].isType = !0, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0;
}
function ia() {
  if (O(), a(t.comma) || a(t.braceR)) {
    s.tokens[s.tokens.length - 1].identifierRole = R.ExportAccess;
    return;
  }
  if (O(), a(t.comma) || a(t.braceR)) {
    s.tokens[s.tokens.length - 1].identifierRole = R.ExportAccess, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0;
    return;
  }
  if (O(), a(t.comma) || a(t.braceR)) {
    s.tokens[s.tokens.length - 3].identifierRole = R.ExportAccess;
    return;
  }
  O(), s.tokens[s.tokens.length - 3].identifierRole = R.ExportAccess, s.tokens[s.tokens.length - 4].isType = !0, s.tokens[s.tokens.length - 3].isType = !0, s.tokens[s.tokens.length - 2].isType = !0, s.tokens[s.tokens.length - 1].isType = !0;
}
function aa() {
  if (N(l._abstract) && ae() === t._class)
    return s.type = t._abstract, k(), wt(!0, !0), !0;
  if (N(l._interface)) {
    const e = q(2);
    return Qn(l._interface, !0), M(e), !0;
  }
  return !1;
}
function ca() {
  if (s.type === t._const) {
    const e = wn();
    if (e.type === t.name && e.contextualKeyword === l._enum)
      return d(t._const), ge(l._enum), s.tokens[s.tokens.length - 1].type = t._enum, Sr(), !0;
  }
  return !1;
}
function la(e) {
  const n = s.tokens.length;
  vr([
    l._abstract,
    l._readonly,
    l._declare,
    l._static,
    l._override
  ]);
  const r = s.tokens.length;
  if (Gs()) {
    const i = e ? n - 1 : n;
    for (let c = i; c < r; c++)
      s.tokens[c].isType = !0;
    return !0;
  }
  return !1;
}
function ua(e) {
  ea(e) || te();
}
function fa() {
  const e = ye(l._declare);
  e && (s.tokens[s.tokens.length - 1].type = t._declare);
  let n = !1;
  if (a(t.name))
    if (e) {
      const r = q(2);
      n = is(), M(r);
    } else
      n = is();
  if (!n)
    if (e) {
      const r = q(2);
      Ne(!0), M(r);
    } else
      Ne(!0);
}
function pa(e) {
  if (e && (a(t.lessThan) || a(t.bitShiftL)) && Pr(), ye(l._implements)) {
    s.tokens[s.tokens.length - 1].type = t._implements;
    const n = q(1);
    Js(), M(n);
  }
}
function ha() {
  It();
}
function da() {
  It();
}
function ma() {
  const e = q(0);
  Me() || h(t.bang), qt(), M(e);
}
function ka() {
  a(t.colon) && Tn();
}
function ga(e, n) {
  return Yn ? _a(e, n) : ya(e, n);
}
function _a(e, n) {
  if (!a(t.lessThan))
    return Ze(e, n);
  const r = s.snapshot();
  let o = Ze(e, n);
  if (s.error)
    s.restoreFromSnapshot(r);
  else
    return o;
  return s.type = t.typeParameterStart, Jn(), o = Ze(e, n), o || F(), o;
}
function ya(e, n) {
  if (!a(t.lessThan))
    return Ze(e, n);
  const r = s.snapshot();
  Jn();
  const o = Ze(e, n);
  if (o || F(), s.error)
    s.restoreFromSnapshot(r);
  else
    return o;
  return Ze(e, n);
}
function ba() {
  if (a(t.colon)) {
    const e = s.snapshot();
    kn(t.colon), Re() && F(), a(t.arrow) || F(), s.error && s.restoreFromSnapshot(e);
  }
  return h(t.arrow);
}
function xa() {
  const e = q(0);
  h(t.question), qt(), M(e);
}
function wa() {
  (a(t.lessThan) || a(t.bitShiftL)) && Pr(), y1();
}
function Ia() {
  for (; ; ) {
    if (s.pos >= T.length) {
      F("Unterminated JSX contents");
      return;
    }
    const e = T.charCodeAt(s.pos);
    switch (e) {
      case f.lessThan:
      case f.leftCurlyBrace:
        if (s.pos === s.start) {
          if (e === f.lessThan) {
            s.pos++, B(t.jsxTagStart);
            return;
          }
          Ds(e);
          return;
        }
        B(t.jsxText);
        return;
      default:
        s.pos++;
    }
  }
}
function Ta(e) {
  for (s.pos++; ; ) {
    if (s.pos >= T.length) {
      F("Unterminated string constant");
      return;
    }
    if (T.charCodeAt(s.pos) === e) {
      s.pos++;
      break;
    }
    s.pos++;
  }
  B(t.string);
}
function va() {
  let e;
  do {
    if (s.pos > T.length) {
      F("Unexpectedly reached the end of input.");
      return;
    }
    e = T.charCodeAt(++s.pos);
  } while (Ue[e] || e === f.dash);
  B(t.jsxName);
}
function hr() {
  qe();
}
function Zs(e) {
  if (hr(), !h(t.colon)) {
    s.tokens[s.tokens.length - 1].identifierRole = e;
    return;
  }
  hr();
}
function e1() {
  for (Zs(R.Access); a(t.dot); )
    qe(), hr();
}
function Ea() {
  switch (s.type) {
    case t.braceL:
      k(), t1(), qe();
      return;
    case t.jsxTagStart:
      r1(), qe();
      return;
    case t.string:
      qe();
      return;
    default:
      F("JSX value should be either an expression or a quoted JSX text");
  }
}
function Sa() {
  d(t.ellipsis), we();
}
function t1() {
  a(t.braceR) || we();
}
function Aa() {
  if (h(t.braceL)) {
    d(t.ellipsis), be(), qe();
    return;
  }
  Zs(R.ObjectKey), a(t.eq) && (qe(), Ea());
}
function Pa() {
  if (a(t.jsxTagEnd))
    return !1;
  for (e1(), W && Ui(); !a(t.slash) && !a(t.jsxTagEnd) && !s.error; )
    Aa();
  const e = a(t.slash);
  return e && qe(), e;
}
function Ra() {
  a(t.jsxTagEnd) || e1();
}
function n1() {
  if (!Pa())
    for (ln(); ; )
      switch (s.type) {
        case t.jsxTagStart:
          if (qe(), a(t.slash)) {
            qe(), Ra();
            return;
          }
          n1(), ln();
          break;
        case t.jsxText:
          ln();
          break;
        case t.braceL:
          k(), a(t.ellipsis) ? (Sa(), ln()) : (t1(), ln());
          break;
        default:
          F();
          return;
      }
}
function r1() {
  qe(), n1();
}
function qe() {
  s.tokens.push(new Gn()), Cs(), s.start = s.pos;
  const e = T.charCodeAt(s.pos);
  if (xn[e])
    va();
  else if (e === f.quotationMark || e === f.apostrophe)
    Ta(e);
  else
    switch (++s.pos, e) {
      case f.greaterThan:
        B(t.jsxTagEnd);
        break;
      case f.lessThan:
        B(t.jsxTagStart);
        break;
      case f.slash:
        B(t.slash);
        break;
      case f.equalsTo:
        B(t.eq);
        break;
      case f.leftCurlyBrace:
        B(t.braceL);
        break;
      case f.dot:
        B(t.dot);
        break;
      case f.colon:
        B(t.colon);
        break;
      default:
        F();
    }
}
function ln() {
  s.tokens.push(new Gn()), s.start = s.pos, Ia();
}
function Na(e) {
  if (a(t.question)) {
    const n = ae();
    if (n === t.colon || n === t.comma || n === t.parenR)
      return;
  }
  s1(e);
}
function Ca() {
  Ss(t.question), a(t.colon) && (W ? Tn() : X && Tt());
}
class Oa {
  constructor(n) {
    this.stop = n;
  }
}
function we(e = !1) {
  if (be(e), a(t.comma))
    for (; h(t.comma); )
      be(e);
}
function be(e = !1, n = !1) {
  return W ? ga(e, n) : X ? Bc(e, n) : Ze(e, n);
}
function Ze(e, n) {
  if (a(t._yield))
    return za(), !1;
  (a(t.parenL) || a(t.name) || a(t._yield)) && (s.potentialArrowAt = s.start);
  const r = Da(e);
  return n && Or(), s.type & t.IS_ASSIGN ? (k(), be(e), !1) : r;
}
function Da(e) {
  return ja(e) ? !0 : (La(e), !1);
}
function La(e) {
  W || X ? Na(e) : s1(e);
}
function s1(e) {
  h(t.question) && (be(), d(t.colon), be(e));
}
function ja(e) {
  const n = s.tokens.length;
  return vn() ? !0 : (Rn(n, -1, e), !1);
}
function Rn(e, n, r) {
  if (W && (t._in & t.PRECEDENCE_MASK) > n && !Me() && ye(l._as)) {
    s.tokens[s.tokens.length - 1].type = t._as;
    const i = q(1);
    oe(), M(i), Mo(), Rn(e, n, r);
    return;
  }
  const o = s.type & t.PRECEDENCE_MASK;
  if (o > 0 && (!r || !a(t._in)) && o > n) {
    const i = s.type;
    k(), i === t.nullishCoalescing && (s.tokens[s.tokens.length - 1].nullishStartIndex = e);
    const c = s.tokens.length;
    vn(), Rn(c, i & t.IS_RIGHT_ASSOCIATIVE ? o - 1 : o, r), i === t.nullishCoalescing && (s.tokens[e].numNullishCoalesceStarts++, s.tokens[s.tokens.length - 1].numNullishCoalesceEnds++), Rn(e, n, r);
  }
}
function vn() {
  if (W && !Yn && h(t.lessThan))
    return Hi(), !1;
  if (N(l._module) && Ps() === f.leftCurlyBrace && !wo())
    return Ja(), !1;
  if (s.type & t.IS_PREFIX)
    return k(), vn(), !1;
  if (o1())
    return !0;
  for (; s.type & t.IS_POSTFIX && !Re(); )
    s.type === t.preIncDec && (s.type = t.postIncDec), k();
  return !1;
}
function o1() {
  const e = s.tokens.length;
  return it() ? !0 : (Rr(e), s.tokens.length > e && s.tokens[e].isOptionalChainStart && (s.tokens[s.tokens.length - 1].isOptionalChainEnd = !0), !1);
}
function Rr(e, n = !1) {
  X ? Mc(e, n) : i1(e, n);
}
function i1(e, n = !1) {
  const r = new Oa(!1);
  do
    Fa(e, n, r);
  while (!r.stop && !s.error);
}
function Fa(e, n, r) {
  W ? ra(e, n, r) : X ? bc(e, n, r) : Nr(e, n, r);
}
function Nr(e, n, r) {
  if (!n && h(t.doubleColon))
    Cr(), r.stop = !0, Rr(e, n);
  else if (a(t.questionDot)) {
    if (s.tokens[e].isOptionalChainStart = !0, n && ae() === t.parenL) {
      r.stop = !0;
      return;
    }
    k(), s.tokens[s.tokens.length - 1].subscriptStartIndex = e, h(t.bracketL) ? (we(), d(t.bracketR)) : h(t.parenL) ? ft() : Bn();
  } else if (h(t.dot))
    s.tokens[s.tokens.length - 1].subscriptStartIndex = e, Bn();
  else if (h(t.bracketL))
    s.tokens[s.tokens.length - 1].subscriptStartIndex = e, we(), d(t.bracketR);
  else if (!n && a(t.parenL))
    if (a1()) {
      const o = s.snapshot(), i = s.tokens.length;
      k(), s.tokens[s.tokens.length - 1].subscriptStartIndex = e;
      const c = dn();
      s.tokens[s.tokens.length - 1].contextId = c, ft(), s.tokens[s.tokens.length - 1].contextId = c, Ba() && (s.restoreFromSnapshot(o), r.stop = !0, s.scopeDepth++, $t(), qa(i));
    } else {
      k(), s.tokens[s.tokens.length - 1].subscriptStartIndex = e;
      const o = dn();
      s.tokens[s.tokens.length - 1].contextId = o, ft(), s.tokens[s.tokens.length - 1].contextId = o;
    }
  else
    a(t.backQuote) ? Dr() : r.stop = !0;
}
function a1() {
  return s.tokens[s.tokens.length - 1].contextualKeyword === l._async && !Re();
}
function ft() {
  let e = !0;
  for (; !h(t.parenR) && !s.error; ) {
    if (e)
      e = !1;
    else if (d(t.comma), h(t.parenR))
      break;
    p1(!1);
  }
}
function Ba() {
  return a(t.colon) || a(t.arrow);
}
function qa(e) {
  W ? ka() : X && Fc(), d(t.arrow), _n(e);
}
function Cr() {
  const e = s.tokens.length;
  it(), Rr(e, !0);
}
function it() {
  if (h(t.modulo))
    return O(), !1;
  if (a(t.jsxText))
    return Ft(), !1;
  if (a(t.lessThan) && Yn)
    return s.type = t.jsxTagStart, r1(), k(), !1;
  const e = s.potentialArrowAt === s.start;
  switch (s.type) {
    case t.slash:
    case t.assign:
      Po();
    case t._super:
    case t._this:
    case t.regexp:
    case t.num:
    case t.bigint:
    case t.decimal:
    case t.string:
    case t._null:
    case t._true:
    case t._false:
      return k(), !1;
    case t._import:
      return k(), a(t.dot) && (s.tokens[s.tokens.length - 1].type = t.name, k(), O()), !1;
    case t.name: {
      const n = s.tokens.length, r = s.start, o = s.contextualKeyword;
      return O(), o === l._await ? (Ga(), !1) : o === l._async && a(t._function) && !Re() ? (k(), xt(r, !1), !1) : e && o === l._async && !Re() && a(t.name) ? (s.scopeDepth++, ht(!1), d(t.arrow), _n(n), !0) : a(t._do) && !Re() ? (k(), pt(), !1) : e && !Re() && a(t.arrow) ? (s.scopeDepth++, Ir(!1), d(t.arrow), _n(n), !0) : (s.tokens[s.tokens.length - 1].identifierRole = R.Access, !1);
    }
    case t._do:
      return k(), pt(), !1;
    case t.parenL:
      return c1(e);
    case t.bracketL:
      return k(), f1(t.bracketR, !0), !1;
    case t.braceL:
      return l1(!1, !1), !1;
    case t._function:
      return Ma(), !1;
    case t.at:
      Wr();
    case t._class:
      return wt(!1), !1;
    case t._new:
      return Va(), !1;
    case t.backQuote:
      return Dr(), !1;
    case t.doubleColon:
      return k(), Cr(), !1;
    case t.hash: {
      const n = Ps();
      return xn[n] || n === f.backslash ? Bn() : k(), !1;
    }
    default:
      return F(), !1;
  }
}
function Bn() {
  h(t.hash), O();
}
function Ma() {
  const e = s.start;
  O(), h(t.dot) && O(), xt(e, !1);
}
function Ft() {
  k();
}
function Kn() {
  d(t.parenL), we(), d(t.parenR);
}
function c1(e) {
  const n = s.snapshot(), r = s.tokens.length;
  d(t.parenL);
  let o = !0;
  for (; !a(t.parenR) && !s.error; ) {
    if (o)
      o = !1;
    else if (d(t.comma), a(t.parenR))
      break;
    if (a(t.ellipsis)) {
      Ws(!1), Or();
      break;
    } else
      be(!1, !0);
  }
  return d(t.parenR), e && $a() && dr() ? (s.restoreFromSnapshot(n), s.scopeDepth++, $t(), dr(), _n(r), s.error ? (s.restoreFromSnapshot(n), c1(!1), !1) : !0) : !1;
}
function $a() {
  return a(t.colon) || !Re();
}
function dr() {
  return W ? ba() : X ? qc() : h(t.arrow);
}
function Or() {
  (W || X) && Ca();
}
function Va() {
  if (d(t._new), h(t.dot)) {
    O();
    return;
  }
  Wa(), X && xc(), h(t.parenL) && f1(t.parenR);
}
function Wa() {
  Cr(), h(t.questionDot);
}
function Dr() {
  for (lt(), lt(); !a(t.backQuote) && !s.error; )
    d(t.dollarBraceL), we(), lt(), lt();
  k();
}
function l1(e, n) {
  const r = dn();
  let o = !0;
  for (k(), s.tokens[s.tokens.length - 1].contextId = r; !h(t.braceR) && !s.error; ) {
    if (o)
      o = !1;
    else if (d(t.comma), h(t.braceR))
      break;
    let i = !1;
    if (a(t.ellipsis)) {
      const c = s.tokens.length;
      if (Vs(), e && (s.tokens.length === c + 2 && Ir(n), h(t.braceR)))
        break;
      continue;
    }
    e || (i = h(t.star)), !e && N(l._async) ? (i && F(), O(), a(t.colon) || a(t.parenL) || a(t.braceR) || a(t.eq) || a(t.comma) || (a(t.star) && (k(), i = !0), gn(r))) : gn(r), Ya(e, n, r);
  }
  s.tokens[s.tokens.length - 1].contextId = r;
}
function Ha(e) {
  return !e && (a(t.string) || a(t.num) || a(t.bracketL) || a(t.name) || !!(s.type & t.IS_KEYWORD));
}
function Ua(e, n) {
  const r = s.start;
  return a(t.parenL) ? (e && F(), mr(r, !1), !0) : Ha(e) ? (gn(n), mr(r, !1), !0) : !1;
}
function Xa(e, n) {
  if (h(t.colon)) {
    e ? jn(n) : be(!1);
    return;
  }
  let r;
  e ? s.scopeDepth === 0 ? r = R.ObjectShorthandTopLevelDeclaration : n ? r = R.ObjectShorthandBlockScopedDeclaration : r = R.ObjectShorthandFunctionScopedDeclaration : r = R.ObjectShorthand, s.tokens[s.tokens.length - 1].identifierRole = r, jn(n, !0);
}
function Ya(e, n, r) {
  W ? ha() : X && Nc(), Ua(e, r) || Xa(e, n);
}
function gn(e) {
  X && Vr(), h(t.bracketL) ? (s.tokens[s.tokens.length - 1].contextId = e, be(), d(t.bracketR), s.tokens[s.tokens.length - 1].contextId = e) : (a(t.num) || a(t.string) || a(t.bigint) || a(t.decimal) ? it() : Bn(), s.tokens[s.tokens.length - 1].identifierRole = R.ObjectKey, s.tokens[s.tokens.length - 1].contextId = e);
}
function mr(e, n) {
  const r = dn();
  s.scopeDepth++;
  const o = s.tokens.length;
  $t(n, r), u1(e, r);
  const c = s.tokens.length;
  s.scopes.push(new et(o, c, !0)), s.scopeDepth--;
}
function _n(e) {
  En(!0);
  const n = s.tokens.length;
  s.scopes.push(new et(e, n, !0)), s.scopeDepth--;
}
function u1(e, n = 0) {
  W ? na(e, n) : X ? yc(n) : En(!1, n);
}
function En(e, n = 0) {
  e && !a(t.braceL) ? be() : pt(!0, n);
}
function f1(e, n = !1) {
  let r = !0;
  for (; !h(e) && !s.error; ) {
    if (r)
      r = !1;
    else if (d(t.comma), h(e))
      break;
    p1(n);
  }
}
function p1(e) {
  e && a(t.comma) || (a(t.ellipsis) ? (Vs(), Or()) : a(t.question) ? k() : be(!1, !0));
}
function O() {
  k(), s.tokens[s.tokens.length - 1].type = t.name;
}
function Ga() {
  vn();
}
function za() {
  k(), !a(t.semi) && !Re() && (h(t.star), be());
}
function Ja() {
  ge(l._module), d(t.braceL), er(t.braceR);
}
function Qa(e) {
  return (e.type === t.name || !!(e.type & t.IS_KEYWORD)) && e.contextualKeyword !== l._from;
}
function tt(e) {
  const n = q(0);
  d(e || t.colon), Ae(), M(n);
}
function as() {
  d(t.modulo), ge(l._checks), h(t.parenL) && (we(), d(t.parenR));
}
function Lr() {
  const e = q(0);
  d(t.colon), a(t.modulo) ? as() : (Ae(), a(t.modulo) && as()), M(e);
}
function Ka() {
  k(), jr(!0);
}
function Za() {
  k(), O(), a(t.lessThan) && Ye(), d(t.parenL), gr(), d(t.parenR), Lr(), te();
}
function kr() {
  a(t._class) ? Ka() : a(t._function) ? Za() : a(t._var) ? ec() : ye(l._module) ? h(t.dot) ? rc() : tc() : N(l._type) ? sc() : N(l._opaque) ? oc() : N(l._interface) ? ic() : a(t._export) ? nc() : F();
}
function ec() {
  k(), k1(), te();
}
function tc() {
  for (a(t.string) ? it() : O(), d(t.braceL); !a(t.braceR) && !s.error; )
    a(t._import) ? (k(), E1()) : F();
  d(t.braceR);
}
function nc() {
  d(t._export), h(t._default) ? a(t._function) || a(t._class) ? kr() : (Ae(), te()) : a(t._var) || a(t._function) || a(t._class) || N(l._opaque) ? kr() : a(t.star) || a(t.braceL) || N(l._interface) || N(l._type) || N(l._opaque) ? T1() : F();
}
function rc() {
  ge(l._exports), Tt(), te();
}
function sc() {
  k(), Br();
}
function oc() {
  k(), qr(!0);
}
function ic() {
  k(), jr();
}
function jr(e = !1) {
  if (Zn(), a(t.lessThan) && Ye(), h(t._extends))
    do
      Nn();
    while (!e && h(t.comma));
  if (N(l._mixins)) {
    k();
    do
      Nn();
    while (h(t.comma));
  }
  if (N(l._implements)) {
    k();
    do
      Nn();
    while (h(t.comma));
  }
  qn(e, !1, e);
}
function Nn() {
  h1(!1), a(t.lessThan) && bt();
}
function Fr() {
  jr();
}
function Zn() {
  O();
}
function Br() {
  Zn(), a(t.lessThan) && Ye(), tt(t.eq), te();
}
function qr(e) {
  ge(l._type), Zn(), a(t.lessThan) && Ye(), a(t.colon) && tt(t.colon), e || tt(t.eq), te();
}
function ac() {
  Vr(), k1(), h(t.eq) && Ae();
}
function Ye() {
  const e = q(0);
  a(t.lessThan) || a(t.typeParameterStart) ? k() : F();
  do
    ac(), a(t.greaterThan) || d(t.comma);
  while (!a(t.greaterThan) && !s.error);
  d(t.greaterThan), M(e);
}
function bt() {
  const e = q(0);
  for (d(t.lessThan); !a(t.greaterThan) && !s.error; )
    Ae(), a(t.greaterThan) || d(t.comma);
  d(t.greaterThan), M(e);
}
function cc() {
  if (ge(l._interface), h(t._extends))
    do
      Nn();
    while (h(t.comma));
  qn(!1, !1, !1);
}
function Mr() {
  a(t.num) || a(t.string) ? it() : O();
}
function lc() {
  ae() === t.colon ? (Mr(), tt()) : Ae(), d(t.bracketR), tt();
}
function uc() {
  Mr(), d(t.bracketR), d(t.bracketR), a(t.lessThan) || a(t.parenL) ? $r() : (h(t.question), tt());
}
function $r() {
  for (a(t.lessThan) && Ye(), d(t.parenL); !a(t.parenR) && !a(t.ellipsis) && !s.error; )
    Mn(), a(t.parenR) || d(t.comma);
  h(t.ellipsis) && Mn(), d(t.parenR), tt();
}
function fc() {
  $r();
}
function qn(e, n, r) {
  let o;
  for (n && a(t.braceBarL) ? (d(t.braceBarL), o = t.braceBarR) : (d(t.braceL), o = t.braceR); !a(o) && !s.error; ) {
    if (r && N(l._proto)) {
      const i = ae();
      i !== t.colon && i !== t.question && (k(), e = !1);
    }
    if (e && N(l._static)) {
      const i = ae();
      i !== t.colon && i !== t.question && k();
    }
    if (Vr(), h(t.bracketL))
      h(t.bracketL) ? uc() : lc();
    else if (a(t.parenL) || a(t.lessThan))
      fc();
    else {
      if (N(l._get) || N(l._set)) {
        const i = ae();
        (i === t.name || i === t.string || i === t.num) && k();
      }
      pc();
    }
    hc();
  }
  d(o);
}
function pc() {
  if (a(t.ellipsis)) {
    if (d(t.ellipsis), h(t.comma) || h(t.semi), a(t.braceR))
      return;
    Ae();
  } else
    Mr(), a(t.lessThan) || a(t.parenL) ? $r() : (h(t.question), tt());
}
function hc() {
  !h(t.semi) && !h(t.comma) && !a(t.braceR) && !a(t.braceBarR) && F();
}
function h1(e) {
  for (e || O(); h(t.dot); )
    O();
}
function dc() {
  h1(!0), a(t.lessThan) && bt();
}
function mc() {
  d(t._typeof), d1();
}
function kc() {
  for (d(t.bracketL); s.pos < T.length && !a(t.bracketR) && (Ae(), !a(t.bracketR)); )
    d(t.comma);
  d(t.bracketR);
}
function Mn() {
  const e = ae();
  e === t.colon || e === t.question ? (O(), h(t.question), tt()) : Ae();
}
function gr() {
  for (; !a(t.parenR) && !a(t.ellipsis) && !s.error; )
    Mn(), a(t.parenR) || d(t.comma);
  h(t.ellipsis) && Mn();
}
function d1() {
  let e = !1;
  const n = s.noAnonFunctionType;
  switch (s.type) {
    case t.name: {
      if (N(l._interface)) {
        cc();
        return;
      }
      O(), dc();
      return;
    }
    case t.braceL:
      qn(!1, !1, !1);
      return;
    case t.braceBarL:
      qn(!1, !0, !1);
      return;
    case t.bracketL:
      kc();
      return;
    case t.lessThan:
      Ye(), d(t.parenL), gr(), d(t.parenR), d(t.arrow), Ae();
      return;
    case t.parenL:
      if (k(), !a(t.parenR) && !a(t.ellipsis))
        if (a(t.name)) {
          const r = ae();
          e = r !== t.question && r !== t.colon;
        } else
          e = !0;
      if (e)
        if (s.noAnonFunctionType = !1, Ae(), s.noAnonFunctionType = n, s.noAnonFunctionType || !(a(t.comma) || a(t.parenR) && ae() === t.arrow)) {
          d(t.parenR);
          return;
        } else
          h(t.comma);
      gr(), d(t.parenR), d(t.arrow), Ae();
      return;
    case t.minus:
      k(), Ft();
      return;
    case t.string:
    case t.num:
    case t._true:
    case t._false:
    case t._null:
    case t._this:
    case t._void:
    case t.star:
      k();
      return;
    default:
      if (s.type === t._typeof) {
        mc();
        return;
      } else if (s.type & t.IS_KEYWORD) {
        k(), s.tokens[s.tokens.length - 1].type = t.name;
        return;
      }
  }
  F();
}
function gc() {
  for (d1(); !Re() && (a(t.bracketL) || a(t.questionDot)); )
    h(t.questionDot), d(t.bracketL), h(t.bracketR) || (Ae(), d(t.bracketR));
}
function m1() {
  h(t.question) ? m1() : gc();
}
function cs() {
  m1(), !s.noAnonFunctionType && h(t.arrow) && Ae();
}
function ls() {
  for (h(t.bitwiseAND), cs(); h(t.bitwiseAND); )
    cs();
}
function _c() {
  for (h(t.bitwiseOR), ls(); h(t.bitwiseOR); )
    ls();
}
function Ae() {
  _c();
}
function Tt() {
  tt();
}
function k1() {
  O(), a(t.colon) && Tt();
}
function Vr() {
  (a(t.plus) || a(t.minus)) && (k(), s.tokens[s.tokens.length - 1].isType = !0);
}
function yc(e) {
  a(t.colon) && Lr(), En(!1, e);
}
function bc(e, n, r) {
  if (a(t.questionDot) && ae() === t.lessThan) {
    if (n) {
      r.stop = !0;
      return;
    }
    k(), bt(), d(t.parenL), ft();
    return;
  } else if (!n && a(t.lessThan)) {
    const o = s.snapshot();
    if (bt(), d(t.parenL), ft(), s.error)
      s.restoreFromSnapshot(o);
    else
      return;
  }
  Nr(e, n, r);
}
function xc() {
  if (a(t.lessThan)) {
    const e = s.snapshot();
    bt(), s.error && s.restoreFromSnapshot(e);
  }
}
function wc() {
  if (a(t.name) && s.contextualKeyword === l._interface) {
    const e = q(0);
    return k(), Fr(), M(e), !0;
  } else if (N(l._enum))
    return g1(), !0;
  return !1;
}
function Ic() {
  return N(l._enum) ? (g1(), !0) : !1;
}
function Tc(e) {
  if (e === l._declare) {
    if (a(t._class) || a(t.name) || a(t._function) || a(t._var) || a(t._export)) {
      const n = q(1);
      kr(), M(n);
    }
  } else if (a(t.name)) {
    if (e === l._interface) {
      const n = q(1);
      Fr(), M(n);
    } else if (e === l._type) {
      const n = q(1);
      Br(), M(n);
    } else if (e === l._opaque) {
      const n = q(1);
      qr(!1), M(n);
    }
  }
  te();
}
function vc() {
  return N(l._type) || N(l._interface) || N(l._opaque) || N(l._enum);
}
function Ec() {
  return a(t.name) && (s.contextualKeyword === l._type || s.contextualKeyword === l._interface || s.contextualKeyword === l._opaque || s.contextualKeyword === l._enum);
}
function Sc() {
  if (N(l._type)) {
    const e = q(1);
    k(), a(t.braceL) ? (Hr(), yn()) : Br(), M(e);
  } else if (N(l._opaque)) {
    const e = q(1);
    k(), qr(!1), M(e);
  } else if (N(l._interface)) {
    const e = q(1);
    k(), Fr(), M(e);
  } else
    Ne(!0);
}
function Ac() {
  return a(t.star) || N(l._type) && ae() === t.star;
}
function Pc() {
  if (ye(l._type)) {
    const e = q(2);
    _r(), M(e);
  } else
    _r();
}
function Rc(e) {
  if (e && a(t.lessThan) && bt(), N(l._implements)) {
    const n = q(0);
    k(), s.tokens[s.tokens.length - 1].type = t._implements;
    do
      Zn(), a(t.lessThan) && bt();
    while (h(t.comma));
    M(n);
  }
}
function Nc() {
  a(t.lessThan) && (Ye(), a(t.parenL) || F());
}
function Cc() {
  const e = q(0);
  h(t.question), a(t.colon) && Tt(), M(e);
}
function Oc() {
  if (a(t._typeof) || N(l._type)) {
    const e = wn();
    (Qa(e) || e.type === t.braceL || e.type === t.star) && k();
  }
}
function Dc() {
  const e = s.contextualKeyword === l._type || s.type === t._typeof;
  e ? k() : O(), N(l._as) && !ws(l._as) ? (O(), e && !a(t.name) && !(s.type & t.IS_KEYWORD) || O()) : (e && (a(t.name) || !!(s.type & t.IS_KEYWORD)) && O(), ye(l._as) && O());
}
function Lc() {
  if (a(t.lessThan)) {
    const e = q(0);
    Ye(), M(e);
  }
}
function jc() {
  a(t.colon) && Tt();
}
function Fc() {
  if (a(t.colon)) {
    const e = s.noAnonFunctionType;
    s.noAnonFunctionType = !0, Tt(), s.noAnonFunctionType = e;
  }
}
function Bc(e, n) {
  if (a(t.lessThan)) {
    const r = s.snapshot();
    let o = Ze(e, n);
    if (s.error)
      s.restoreFromSnapshot(r), s.type = t.typeParameterStart;
    else
      return o;
    const i = q(0);
    if (Ye(), M(i), o = Ze(e, n), o)
      return !0;
    F();
  }
  return Ze(e, n);
}
function qc() {
  if (a(t.colon)) {
    const e = q(0), n = s.snapshot(), r = s.noAnonFunctionType;
    s.noAnonFunctionType = !0, Lr(), s.noAnonFunctionType = r, Re() && F(), a(t.arrow) || F(), s.error && s.restoreFromSnapshot(n), M(e);
  }
  return h(t.arrow);
}
function Mc(e, n = !1) {
  if (s.tokens[s.tokens.length - 1].contextualKeyword === l._async && a(t.lessThan)) {
    const r = s.snapshot();
    if ($c() && !s.error)
      return;
    s.restoreFromSnapshot(r);
  }
  i1(e, n);
}
function $c() {
  s.scopeDepth++;
  const e = s.tokens.length;
  return $t(), dr() ? (_n(e), !0) : !1;
}
function g1() {
  ge(l._enum), s.tokens[s.tokens.length - 1].type = t._enum, O(), Vc();
}
function Vc() {
  ye(l._of) && k(), d(t.braceL), Wc(), d(t.braceR);
}
function Wc() {
  for (; !a(t.braceR) && !s.error && !h(t.ellipsis); )
    Hc(), a(t.braceR) || d(t.comma);
}
function Hc() {
  O(), h(t.eq) && k();
}
function Uc() {
  if (er(t.eof), s.scopes.push(new et(0, s.tokens.length, !0)), s.scopeDepth !== 0)
    throw new Error(`Invalid scope depth at end of file: ${s.scopeDepth}`);
  return new Al(s.tokens, s.scopes);
}
function Ne(e) {
  X && wc() || (a(t.at) && Wr(), Xc(e));
}
function Xc(e) {
  if (W && ca())
    return;
  const n = s.type;
  switch (n) {
    case t._break:
    case t._continue:
      Gc();
      return;
    case t._debugger:
      zc();
      return;
    case t._do:
      Jc();
      return;
    case t._for:
      Qc();
      return;
    case t._function:
      if (ae() === t.dot)
        break;
      e || F(), Zc();
      return;
    case t._class:
      e || F(), wt(!0);
      return;
    case t._if:
      el();
      return;
    case t._return:
      tl();
      return;
    case t._switch:
      nl();
      return;
    case t._throw:
      rl();
      return;
    case t._try:
      ol();
      return;
    case t._let:
    case t._const:
      e || F();
    case t._var:
      b1(n);
      return;
    case t._while:
      il();
      return;
    case t.braceL:
      pt();
      return;
    case t.semi:
      al();
      return;
    case t._export:
    case t._import: {
      const i = ae();
      if (i === t.parenL || i === t.dot)
        break;
      k(), n === t._import ? E1() : T1();
      return;
    }
    case t.name:
      if (s.contextualKeyword === l._async) {
        const i = s.start, c = s.snapshot();
        if (k(), a(t._function) && !Re()) {
          d(t._function), xt(i, !0);
          return;
        } else
          s.restoreFromSnapshot(c);
      }
  }
  const r = s.tokens.length;
  we();
  let o = null;
  if (s.tokens.length === r + 1) {
    const i = s.tokens[s.tokens.length - 1];
    i.type === t.name && (o = i.contextualKeyword);
  }
  if (o == null) {
    te();
    return;
  }
  h(t.colon) ? cl() : ll(o);
}
function Wr() {
  for (; a(t.at); )
    _1();
}
function _1() {
  if (k(), h(t.parenL))
    we(), d(t.parenR);
  else
    for (O(); h(t.dot); )
      O();
  Yc();
}
function Yc() {
  W ? wa() : y1();
}
function y1() {
  h(t.parenL) && ft();
}
function Gc() {
  k(), Qe() || (O(), te());
}
function zc() {
  k(), te();
}
function Jc() {
  k(), Ne(!1), d(t._while), Kn(), h(t.semi);
}
function Qc() {
  s.scopeDepth++;
  const e = s.tokens.length;
  Kc();
  const n = s.tokens.length;
  s.scopes.push(new et(e, n, !1)), s.scopeDepth--;
}
function Kc() {
  k();
  let e = !1;
  if (N(l._await) && (e = !0, k()), d(t.parenL), a(t.semi)) {
    e && F(), sr();
    return;
  }
  if (a(t._var) || a(t._let) || a(t._const)) {
    const n = s.type;
    if (k(), x1(!0, n), a(t._in) || N(l._of)) {
      us(e);
      return;
    }
    sr();
    return;
  }
  if (we(!0), a(t._in) || N(l._of)) {
    us(e);
    return;
  }
  e && F(), sr();
}
function Zc() {
  const e = s.start;
  k(), xt(e, !0);
}
function el() {
  k(), Kn(), Ne(!1), h(t._else) && Ne(!1);
}
function tl() {
  k(), Qe() || (we(), te());
}
function nl() {
  k(), Kn(), s.scopeDepth++;
  const e = s.tokens.length;
  for (d(t.braceL); !a(t.braceR) && !s.error; )
    if (a(t._case) || a(t._default)) {
      const r = a(t._case);
      k(), r && we(), d(t.colon);
    } else
      Ne(!0);
  k();
  const n = s.tokens.length;
  s.scopes.push(new et(e, n, !1)), s.scopeDepth--;
}
function rl() {
  k(), we(), te();
}
function sl() {
  zn(!0), W && qt();
}
function ol() {
  if (k(), pt(), a(t._catch)) {
    k();
    let e = null;
    if (a(t.parenL) && (s.scopeDepth++, e = s.tokens.length, d(t.parenL), sl(), d(t.parenR)), pt(), e != null) {
      const n = s.tokens.length;
      s.scopes.push(new et(e, n, !1)), s.scopeDepth--;
    }
  }
  h(t._finally) && pt();
}
function b1(e) {
  k(), x1(!1, e), te();
}
function il() {
  k(), Kn(), Ne(!1);
}
function al() {
  k();
}
function cl() {
  Ne(!0);
}
function ll(e) {
  W ? ua(e) : X ? Tc(e) : te();
}
function pt(e = !1, n = 0) {
  const r = s.tokens.length;
  s.scopeDepth++, d(t.braceL), n && (s.tokens[s.tokens.length - 1].contextId = n), er(t.braceR), n && (s.tokens[s.tokens.length - 1].contextId = n);
  const o = s.tokens.length;
  s.scopes.push(new et(r, o, e)), s.scopeDepth--;
}
function er(e) {
  for (; !h(e) && !s.error; )
    Ne(!0);
}
function sr() {
  d(t.semi), a(t.semi) || we(), d(t.semi), a(t.parenR) || we(), d(t.parenR), Ne(!1);
}
function us(e) {
  e ? ye(l._of) : k(), we(), d(t.parenR), Ne(!1);
}
function x1(e, n) {
  for (; ; ) {
    const r = n === t._const || n === t._let;
    if (ul(r), h(t.eq)) {
      const o = s.tokens.length - 1;
      be(e), s.tokens[o].rhsEndIndex = s.tokens.length;
    }
    if (!h(t.comma))
      break;
  }
}
function ul(e) {
  zn(e), W ? ma() : X && jc();
}
function xt(e, n, r = !1) {
  a(t.star) && k(), n && !r && !a(t.name) && !a(t._yield) && F();
  let o = null;
  a(t.name) && (n || (o = s.tokens.length, s.scopeDepth++), ht(!1));
  const i = s.tokens.length;
  s.scopeDepth++, $t(), u1(e);
  const c = s.tokens.length;
  s.scopes.push(new et(i, c, !0)), s.scopeDepth--, o !== null && (s.scopes.push(new et(o, c, !0)), s.scopeDepth--);
}
function $t(e = !1, n = 0) {
  W ? da() : X && Lc(), d(t.parenL), n && (s.tokens[s.tokens.length - 1].contextId = n), Tr(
    t.parenR,
    !1,
    !1,
    e,
    n
  ), n && (s.tokens[s.tokens.length - 1].contextId = n);
}
function wt(e, n = !1) {
  const r = dn();
  k(), s.tokens[s.tokens.length - 1].contextId = r, s.tokens[s.tokens.length - 1].isExpression = !e;
  let o = null;
  e || (o = s.tokens.length, s.scopeDepth++), dl(e, n), ml();
  const i = s.tokens.length;
  if (fl(r), !s.error && (s.tokens[i].contextId = r, s.tokens[s.tokens.length - 1].contextId = r, o !== null)) {
    const c = s.tokens.length;
    s.scopes.push(new et(o, c, !1)), s.scopeDepth--;
  }
}
function w1() {
  return a(t.eq) || a(t.semi) || a(t.braceR) || a(t.bang) || a(t.colon);
}
function I1() {
  return a(t.parenL) || a(t.lessThan);
}
function fl(e) {
  for (d(t.braceL); !h(t.braceR) && !s.error; ) {
    if (h(t.semi))
      continue;
    if (a(t.at)) {
      _1();
      continue;
    }
    const n = s.start;
    pl(n, e);
  }
}
function pl(e, n) {
  W && vr([
    l._declare,
    l._public,
    l._protected,
    l._private,
    l._override
  ]);
  let r = !1;
  if (a(t.name) && s.contextualKeyword === l._static) {
    if (O(), I1()) {
      fn(e, !1);
      return;
    } else if (w1()) {
      Cn();
      return;
    }
    if (s.tokens[s.tokens.length - 1].type = t._static, r = !0, a(t.braceL)) {
      s.tokens[s.tokens.length - 1].contextId = n, pt();
      return;
    }
  }
  hl(e, r, n);
}
function hl(e, n, r) {
  if (W && la(n))
    return;
  if (h(t.star)) {
    un(r), fn(e, !1);
    return;
  }
  un(r);
  let o = !1;
  const i = s.tokens[s.tokens.length - 1];
  i.contextualKeyword === l._constructor && (o = !0), fs(), I1() ? fn(e, o) : w1() ? Cn() : i.contextualKeyword === l._async && !Qe() ? (s.tokens[s.tokens.length - 1].type = t._async, a(t.star) && k(), un(r), fs(), fn(e, !1)) : (i.contextualKeyword === l._get || i.contextualKeyword === l._set) && !(Qe() && a(t.star)) ? (i.contextualKeyword === l._get ? s.tokens[s.tokens.length - 1].type = t._get : s.tokens[s.tokens.length - 1].type = t._set, un(r), fn(e, !1)) : i.contextualKeyword === l._accessor && !Qe() ? (un(r), Cn()) : Qe() ? Cn() : F();
}
function fn(e, n) {
  W ? It() : X && a(t.lessThan) && Ye(), mr(e, n);
}
function un(e) {
  gn(e);
}
function fs() {
  if (W) {
    const e = q(0);
    h(t.question), M(e);
  }
}
function Cn() {
  if (W ? (Ss(t.bang), qt()) : X && a(t.colon) && Tt(), a(t.eq)) {
    const e = s.tokens.length;
    k(), be(), s.tokens[e].rhsEndIndex = s.tokens.length;
  }
  te();
}
function dl(e, n = !1) {
  W && (!e || n) && N(l._implements) || (a(t.name) && ht(!0), W ? It() : X && a(t.lessThan) && Ye());
}
function ml() {
  let e = !1;
  h(t._extends) ? (o1(), e = !0) : e = !1, W ? pa(e) : X && Rc(e);
}
function T1() {
  const e = s.tokens.length - 1;
  W && sa() || (yl() ? bl() : _l() ? (O(), a(t.comma) && ae() === t.star ? (d(t.comma), d(t.star), ge(l._as), O()) : v1(), yn()) : h(t._default) ? kl() : wl() ? gl() : (Hr(), yn()), s.tokens[e].rhsEndIndex = s.tokens.length);
}
function kl() {
  if (W && aa() || X && Ic())
    return;
  const e = s.start;
  h(t._function) ? xt(e, !0, !0) : N(l._async) && ae() === t._function ? (ye(l._async), h(t._function), xt(e, !0, !0)) : a(t._class) ? wt(!0, !0) : a(t.at) ? (Wr(), wt(!0, !0)) : (be(), te());
}
function gl() {
  W ? fa() : X ? Sc() : Ne(!0);
}
function _l() {
  if (W && Ks())
    return !1;
  if (X && Ec())
    return !1;
  if (a(t.name))
    return s.contextualKeyword !== l._async;
  if (!a(t._default))
    return !1;
  const e = xr(), n = wn(), r = n.type === t.name && n.contextualKeyword === l._from;
  if (n.type === t.comma)
    return !0;
  if (r) {
    const o = T.charCodeAt(As(e + 4));
    return o === f.quotationMark || o === f.apostrophe;
  }
  return !1;
}
function v1() {
  h(t.comma) && Hr();
}
function yn() {
  ye(l._from) && it(), te();
}
function yl() {
  return X ? Ac() : a(t.star);
}
function bl() {
  X ? Pc() : _r();
}
function _r() {
  d(t.star), N(l._as) ? xl() : yn();
}
function xl() {
  k(), s.tokens[s.tokens.length - 1].type = t._as, O(), v1(), yn();
}
function wl() {
  return W && Ks() || X && vc() || s.type === t._var || s.type === t._const || s.type === t._let || s.type === t._function || s.type === t._class || N(l._async) || a(t.at);
}
function Hr() {
  let e = !0;
  for (d(t.braceL); !h(t.braceR) && !s.error; ) {
    if (e)
      e = !1;
    else if (d(t.comma), h(t.braceR))
      break;
    Il();
  }
}
function Il() {
  if (W) {
    ia();
    return;
  }
  O(), s.tokens[s.tokens.length - 1].identifierRole = R.ExportAccess, ye(l._as) && O();
}
function E1() {
  if (W && a(t.name) && ae() === t.eq) {
    pr();
    return;
  }
  if (W && N(l._type)) {
    const e = wn();
    if (e.type === t.name && e.contextualKeyword !== l._from) {
      if (ge(l._type), ae() === t.eq) {
        pr();
        return;
      }
    } else
      (e.type === t.star || e.type === t.braceL) && ge(l._type);
  }
  a(t.string) || (vl(), ge(l._from)), it(), te();
}
function Tl() {
  return a(t.name);
}
function ps() {
  Ln();
}
function vl() {
  X && Oc();
  let e = !0;
  if (!(Tl() && (ps(), !h(t.comma)))) {
    if (a(t.star)) {
      k(), ge(l._as), ps();
      return;
    }
    for (d(t.braceL); !h(t.braceR) && !s.error; ) {
      if (e)
        e = !1;
      else if (h(t.colon) && F(
        "ES2015 named imports do not destructure. Use another statement for destructuring after the import."
      ), d(t.comma), h(t.braceR))
        break;
      El();
    }
  }
}
function El() {
  if (W) {
    oa();
    return;
  }
  if (X) {
    Dc();
    return;
  }
  Ln(), N(l._as) && (s.tokens[s.tokens.length - 1].identifierRole = R.ImportAccess, k(), Ln());
}
function Sl() {
  return s.pos === 0 && T.charCodeAt(0) === f.numberSign && T.charCodeAt(1) === f.exclamationMark && Ns(2), Rs(), Uc();
}
class Al {
  constructor(n, r) {
    this.tokens = n, this.scopes = r;
  }
}
function Pl(e, n, r, o) {
  if (o && r)
    throw new Error("Cannot combine flow and typescript plugins.");
  xo(e, n, r, o);
  const i = Sl();
  if (s.error)
    throw _o(s.error);
  return i;
}
function Rl(e) {
  let n = e.currentIndex(), r = 0;
  const o = e.currentToken();
  do {
    const i = e.tokens[n];
    if (i.isOptionalChainStart && r++, i.isOptionalChainEnd && r--, r += i.numNullishCoalesceStarts, r -= i.numNullishCoalesceEnds, i.contextualKeyword === l._await && i.identifierRole == null && i.scopeDepth === o.scopeDepth)
      return !0;
    n += 1;
  } while (r > 0 && n < e.tokens.length);
  return !1;
}
class $n {
  __init() {
    this.resultCode = "";
  }
  __init2() {
    this.tokenIndex = 0;
  }
  constructor(n, r, o, i, c) {
    this.code = n, this.tokens = r, this.isFlowEnabled = o, this.disableESTransforms = i, this.helperManager = c, $n.prototype.__init.call(this), $n.prototype.__init2.call(this);
  }
  snapshot() {
    return { resultCode: this.resultCode, tokenIndex: this.tokenIndex };
  }
  restoreToSnapshot(n) {
    this.resultCode = n.resultCode, this.tokenIndex = n.tokenIndex;
  }
  getResultCodeIndex() {
    return this.resultCode.length;
  }
  reset() {
    this.resultCode = "", this.tokenIndex = 0;
  }
  matchesContextualAtIndex(n, r) {
    return this.matches1AtIndex(n, t.name) && this.tokens[n].contextualKeyword === r;
  }
  identifierNameAtIndex(n) {
    return this.identifierNameForToken(this.tokens[n]);
  }
  identifierNameAtRelativeIndex(n) {
    return this.identifierNameForToken(this.tokenAtRelativeIndex(n));
  }
  identifierName() {
    return this.identifierNameForToken(this.currentToken());
  }
  identifierNameForToken(n) {
    return this.code.slice(n.start, n.end);
  }
  rawCodeForToken(n) {
    return this.code.slice(n.start, n.end);
  }
  stringValueAtIndex(n) {
    return this.stringValueForToken(this.tokens[n]);
  }
  stringValue() {
    return this.stringValueForToken(this.currentToken());
  }
  stringValueForToken(n) {
    return this.code.slice(n.start + 1, n.end - 1);
  }
  matches1AtIndex(n, r) {
    return this.tokens[n].type === r;
  }
  matches2AtIndex(n, r, o) {
    return this.tokens[n].type === r && this.tokens[n + 1].type === o;
  }
  matches3AtIndex(n, r, o, i) {
    return this.tokens[n].type === r && this.tokens[n + 1].type === o && this.tokens[n + 2].type === i;
  }
  matches1(n) {
    return this.tokens[this.tokenIndex].type === n;
  }
  matches2(n, r) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r;
  }
  matches3(n, r, o) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r && this.tokens[this.tokenIndex + 2].type === o;
  }
  matches4(n, r, o, i) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === i;
  }
  matches5(n, r, o, i, c) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === r && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === i && this.tokens[this.tokenIndex + 4].type === c;
  }
  matchesContextual(n) {
    return this.matchesContextualAtIndex(this.tokenIndex, n);
  }
  matchesContextIdAndLabel(n, r) {
    return this.matches1(n) && this.currentToken().contextId === r;
  }
  previousWhitespaceAndComments() {
    let n = this.code.slice(
      this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0,
      this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length
    );
    return this.isFlowEnabled && (n = n.replace(/@flow/g, "")), n;
  }
  replaceToken(n) {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++;
  }
  replaceTokenTrimmingLeftWhitespace(n) {
    this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ""), this.appendTokenPrefix(), this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++;
  }
  removeInitialToken() {
    this.replaceToken("");
  }
  removeToken() {
    this.replaceTokenTrimmingLeftWhitespace("");
  }
  copyExpectedToken(n) {
    if (this.tokens[this.tokenIndex].type !== n)
      throw new Error(`Expected token ${n}`);
    this.copyToken();
  }
  copyToken() {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end
    ), this.appendTokenSuffix(), this.tokenIndex++;
  }
  copyTokenWithPrefix(n) {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += n, this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end
    ), this.appendTokenSuffix(), this.tokenIndex++;
  }
  appendTokenPrefix() {
    const n = this.currentToken();
    if ((n.numNullishCoalesceStarts || n.isOptionalChainStart) && (n.isAsyncOperation = Rl(this)), !this.disableESTransforms) {
      if (n.numNullishCoalesceStarts)
        for (let r = 0; r < n.numNullishCoalesceStarts; r++)
          n.isAsyncOperation ? (this.resultCode += "await ", this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce")) : this.resultCode += this.helperManager.getHelperName("nullishCoalesce"), this.resultCode += "(";
      n.isOptionalChainStart && (n.isAsyncOperation && (this.resultCode += "await "), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === t._delete ? n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete") : this.resultCode += this.helperManager.getHelperName("optionalChainDelete") : n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChain") : this.resultCode += this.helperManager.getHelperName("optionalChain"), this.resultCode += "([");
    }
  }
  appendTokenSuffix() {
    const n = this.currentToken();
    if (n.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += "])"), n.numNullishCoalesceEnds && !this.disableESTransforms)
      for (let r = 0; r < n.numNullishCoalesceEnds; r++)
        this.resultCode += "))";
  }
  appendCode(n) {
    this.resultCode += n;
  }
  currentToken() {
    return this.tokens[this.tokenIndex];
  }
  currentTokenCode() {
    const n = this.currentToken();
    return this.code.slice(n.start, n.end);
  }
  tokenAtRelativeIndex(n) {
    return this.tokens[this.tokenIndex + n];
  }
  currentIndex() {
    return this.tokenIndex;
  }
  nextToken() {
    if (this.tokenIndex === this.tokens.length)
      throw new Error("Unexpectedly reached end of input.");
    this.tokenIndex++;
  }
  previousToken() {
    this.tokenIndex--;
  }
  finish() {
    if (this.tokenIndex !== this.tokens.length)
      throw new Error("Tried to finish processing tokens before reaching the end.");
    return this.resultCode += this.previousWhitespaceAndComments(), this.resultCode;
  }
  isAtEnd() {
    return this.tokenIndex === this.tokens.length;
  }
}
function Nl(e, n, r, o) {
  const i = n.snapshot(), c = Cl(n);
  let p = [];
  const m = [], y = [];
  let _ = null;
  const v = [], P = [], A = n.currentToken().contextId;
  if (A == null)
    throw new Error("Expected non-null class context ID on class open-brace.");
  for (n.nextToken(); !n.matchesContextIdAndLabel(t.braceR, A); )
    if (n.matchesContextual(l._constructor) && !n.currentToken().isType)
      ({ constructorInitializerStatements: p, constructorInsertPos: _ } = hs(n));
    else if (n.matches1(t.semi))
      o || P.push({ start: n.currentIndex(), end: n.currentIndex() + 1 }), n.nextToken();
    else if (n.currentToken().isType)
      n.nextToken();
    else {
      const j = n.currentIndex();
      let Y = !1, ce = !1, ue = !1;
      for (; Vn(n.currentToken()); )
        n.matches1(t._static) && (Y = !0), n.matches1(t.hash) && (ce = !0), (n.matches1(t._declare) || n.matches1(t._abstract)) && (ue = !0), n.nextToken();
      if (Y && n.matches1(t.braceL)) {
        or(n, A);
        continue;
      }
      if (ce) {
        or(n, A);
        continue;
      }
      if (n.matchesContextual(l._constructor) && !n.currentToken().isType) {
        ({ constructorInitializerStatements: p, constructorInsertPos: _ } = hs(n));
        continue;
      }
      const J = n.currentIndex();
      if (Ol(n), n.matches1(t.lessThan) || n.matches1(t.parenL)) {
        or(n, A);
        continue;
      }
      for (; n.currentToken().isType; )
        n.nextToken();
      if (n.matches1(t.eq)) {
        const K = n.currentIndex(), he = n.currentToken().rhsEndIndex;
        if (he == null)
          throw new Error("Expected rhsEndIndex on class field assignment.");
        for (n.nextToken(); n.currentIndex() < he; )
          e.processToken();
        let fe;
        Y ? (fe = r.claimFreeName("__initStatic"), y.push(fe)) : (fe = r.claimFreeName("__init"), m.push(fe)), v.push({
          initializerName: fe,
          equalsIndex: K,
          start: J,
          end: n.currentIndex()
        });
      } else
        (!o || ue) && P.push({ start: j, end: n.currentIndex() });
    }
  return n.restoreToSnapshot(i), o ? {
    headerInfo: c,
    constructorInitializerStatements: p,
    instanceInitializerNames: [],
    staticInitializerNames: [],
    constructorInsertPos: _,
    fields: [],
    rangesToRemove: P
  } : {
    headerInfo: c,
    constructorInitializerStatements: p,
    instanceInitializerNames: m,
    staticInitializerNames: y,
    constructorInsertPos: _,
    fields: v,
    rangesToRemove: P
  };
}
function or(e, n) {
  for (e.nextToken(); e.currentToken().contextId !== n; )
    e.nextToken();
  for (; Vn(e.tokenAtRelativeIndex(-1)); )
    e.previousToken();
}
function Cl(e) {
  const n = e.currentToken(), r = n.contextId;
  if (r == null)
    throw new Error("Expected context ID on class token.");
  const o = n.isExpression;
  if (o == null)
    throw new Error("Expected isExpression on class token.");
  let i = null, c = !1;
  for (e.nextToken(), e.matches1(t.name) && (i = e.identifierName()); !e.matchesContextIdAndLabel(t.braceL, r); )
    e.matches1(t._extends) && !e.currentToken().isType && (c = !0), e.nextToken();
  return { isExpression: o, className: i, hasSuperclass: c };
}
function hs(e) {
  const n = [];
  e.nextToken();
  const r = e.currentToken().contextId;
  if (r == null)
    throw new Error("Expected context ID on open-paren starting constructor params.");
  for (; !e.matchesContextIdAndLabel(t.parenR, r); )
    if (e.currentToken().contextId === r) {
      if (e.nextToken(), Vn(e.currentToken())) {
        for (e.nextToken(); Vn(e.currentToken()); )
          e.nextToken();
        const c = e.currentToken();
        if (c.type !== t.name)
          throw new Error("Expected identifier after access modifiers in constructor arg.");
        const p = e.identifierNameForToken(c);
        n.push(`this.${p} = ${p}`);
      }
    } else
      e.nextToken();
  e.nextToken();
  let o = e.currentIndex(), i = !1;
  for (; !e.matchesContextIdAndLabel(t.braceR, r); ) {
    if (!i && e.matches2(t._super, t.parenL)) {
      e.nextToken();
      const c = e.currentToken().contextId;
      if (c == null)
        throw new Error("Expected a context ID on the super call");
      for (; !e.matchesContextIdAndLabel(t.parenR, c); )
        e.nextToken();
      o = e.currentIndex(), i = !0;
    }
    e.nextToken();
  }
  return e.nextToken(), { constructorInitializerStatements: n, constructorInsertPos: o };
}
function Vn(e) {
  return [
    t._async,
    t._get,
    t._set,
    t.plus,
    t.minus,
    t._readonly,
    t._static,
    t._public,
    t._private,
    t._protected,
    t._override,
    t._abstract,
    t.star,
    t._declare,
    t.hash
  ].includes(e.type);
}
function Ol(e) {
  if (e.matches1(t.bracketL)) {
    const r = e.currentToken().contextId;
    if (r == null)
      throw new Error("Expected class context ID on computed name open bracket.");
    for (; !e.matchesContextIdAndLabel(t.bracketR, r); )
      e.nextToken();
    e.nextToken();
  } else
    e.nextToken();
}
function S1(e) {
  if (e.removeInitialToken(), e.removeToken(), e.removeToken(), e.removeToken(), e.matches1(t.parenL))
    e.removeToken(), e.removeToken(), e.removeToken();
  else
    for (; e.matches1(t.dot); )
      e.removeToken(), e.removeToken();
}
const A1 = {
  typeDeclarations: /* @__PURE__ */ new Set(),
  valueDeclarations: /* @__PURE__ */ new Set()
};
function P1(e) {
  const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set();
  for (let o = 0; o < e.tokens.length; o++) {
    const i = e.tokens[o];
    i.type === t.name && Es(i) && (i.isType ? n.add(e.identifierNameForToken(i)) : r.add(e.identifierNameForToken(i)));
  }
  return { typeDeclarations: n, valueDeclarations: r };
}
function R1(e, n, r) {
  if (!e)
    return !1;
  const o = n.currentToken();
  if (o.rhsEndIndex == null)
    throw new Error("Expected non-null rhsEndIndex on export token.");
  const i = o.rhsEndIndex - n.currentIndex();
  if (i !== 3 && !(i === 4 && n.matches1AtIndex(o.rhsEndIndex - 1, t.semi)))
    return !1;
  const c = n.tokenAtRelativeIndex(2);
  if (c.type !== t.name)
    return !1;
  const p = n.identifierNameForToken(c);
  return r.typeDeclarations.has(p) && !r.valueDeclarations.has(p);
}
class hn extends Xe {
  __init() {
    this.hadExport = !1;
  }
  __init2() {
    this.hadNamedExport = !1;
  }
  __init3() {
    this.hadDefaultExport = !1;
  }
  constructor(n, r, o, i, c, p, m, y) {
    super(), this.rootTransformer = n, this.tokens = r, this.importProcessor = o, this.nameManager = i, this.reactHotLoaderTransformer = c, this.enableLegacyBabel5ModuleInterop = p, this.isTypeScriptTransformEnabled = m, this.preserveDynamicImport = y, hn.prototype.__init.call(this), hn.prototype.__init2.call(this), hn.prototype.__init3.call(this), this.declarationInfo = m ? P1(r) : A1;
  }
  getPrefixCode() {
    let n = "";
    return this.hadExport && (n += 'Object.defineProperty(exports, "__esModule", {value: true});'), n;
  }
  getSuffixCode() {
    return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? `
module.exports = exports.default;
` : "";
  }
  process() {
    return this.tokens.matches3(t._import, t.name, t.eq) ? this.processImportEquals() : this.tokens.matches1(t._import) ? (this.processImport(), !0) : this.tokens.matches2(t._export, t.eq) ? (this.tokens.replaceToken("module.exports"), !0) : this.tokens.matches1(t._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : this.tokens.matches2(t.name, t.postIncDec) && this.processPostIncDec() ? !0 : this.tokens.matches1(t.name) || this.tokens.matches1(t.jsxName) ? this.processIdentifier() : this.tokens.matches1(t.eq) ? this.processAssignment() : this.tokens.matches1(t.assign) ? this.processComplexAssignment() : this.tokens.matches1(t.preIncDec) ? this.processPreIncDec() : !1;
  }
  processImportEquals() {
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.importProcessor.isTypeName(n) ? S1(this.tokens) : this.tokens.replaceToken("const"), !0;
  }
  processImport() {
    if (this.tokens.matches2(t._import, t.parenL)) {
      if (this.preserveDynamicImport) {
        this.tokens.copyToken();
        return;
      }
      this.tokens.replaceToken("Promise.resolve().then(() => require");
      const r = this.tokens.currentToken().contextId;
      if (r == null)
        throw new Error("Expected context ID on dynamic import invocation.");
      for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(t.parenR, r); )
        this.rootTransformer.processToken();
      this.tokens.replaceToken("))");
      return;
    }
    if (this.removeImportAndDetectIfType())
      this.tokens.removeToken();
    else {
      const r = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(r)), this.tokens.appendCode(this.importProcessor.claimImportCode(r));
    }
    this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  removeImportAndDetectIfType() {
    if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(l._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._from))
      return this.removeRemainingImport(), !0;
    if (this.tokens.matches1(t.name) || this.tokens.matches1(t.star))
      return this.removeRemainingImport(), !1;
    if (this.tokens.matches1(t.string))
      return !1;
    let n = !1;
    for (; !this.tokens.matches1(t.string); )
      (!n && this.tokens.matches1(t.braceL) || this.tokens.matches1(t.comma)) && (this.tokens.removeToken(), (this.tokens.matches2(t.name, t.comma) || this.tokens.matches2(t.name, t.braceR) || this.tokens.matches4(t.name, t.name, t.name, t.comma) || this.tokens.matches4(t.name, t.name, t.name, t.braceR)) && (n = !0)), this.tokens.removeToken();
    return !n;
  }
  removeRemainingImport() {
    for (; !this.tokens.matches1(t.string); )
      this.tokens.removeToken();
  }
  processIdentifier() {
    const n = this.tokens.currentToken();
    if (n.shadowsGlobal)
      return !1;
    if (n.identifierRole === R.ObjectShorthand)
      return this.processObjectShorthand();
    if (n.identifierRole !== R.Access)
      return !1;
    const r = this.importProcessor.getIdentifierReplacement(
      this.tokens.identifierNameForToken(n)
    );
    if (!r)
      return !1;
    let o = this.tokens.currentIndex() + 1;
    for (; o < this.tokens.tokens.length && this.tokens.tokens[o].type === t.parenR; )
      o++;
    return this.tokens.tokens[o].type === t.parenL ? this.tokens.tokenAtRelativeIndex(1).type === t.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== t._new ? (this.tokens.replaceToken(`${r}.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR)) : this.tokens.replaceToken(`(0, ${r})`) : this.tokens.replaceToken(r), !0;
  }
  processObjectShorthand() {
    const n = this.tokens.identifierName(), r = this.importProcessor.getIdentifierReplacement(n);
    return r ? (this.tokens.replaceToken(`${n}: ${r}`), !0) : !1;
  }
  processExport() {
    if (this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum))
      return !1;
    if (this.tokens.matches2(t._export, t._default))
      return this.hadDefaultExport = !0, this.tokens.matches3(t._export, t._default, t._enum) ? !1 : (this.processExportDefault(), !0);
    if (this.hadNamedExport = !0, this.tokens.matches2(t._export, t._var) || this.tokens.matches2(t._export, t._let) || this.tokens.matches2(t._export, t._const))
      return this.processExportVar(), !0;
    if (this.tokens.matches2(t._export, t._function) || this.tokens.matches3(t._export, t.name, t._function))
      return this.processExportFunction(), !0;
    if (this.tokens.matches2(t._export, t._class) || this.tokens.matches3(t._export, t._abstract, t._class))
      return this.processExportClass(), !0;
    if (this.tokens.matches2(t._export, t.braceL))
      return this.processExportBindings(), !0;
    if (this.tokens.matches2(t._export, t.star))
      return this.processExportStar(), !0;
    if (this.tokens.matches3(t._export, t.name, t.braceL) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.braceR); )
        this.tokens.removeToken();
      return this.tokens.removeToken(), this.tokens.matchesContextual(l._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken()), !0;
    } else
      throw new Error("Unrecognized export syntax.");
  }
  processAssignment() {
    const n = this.tokens.currentIndex(), r = this.tokens.tokens[n - 1];
    if (r.isType || r.type !== t.name || r.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot) || n >= 2 && [t._var, t._let, t._const].includes(this.tokens.tokens[n - 2].type))
      return !1;
    const o = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(r)
    );
    return o ? (this.tokens.copyToken(), this.tokens.appendCode(` ${o} =`), !0) : !1;
  }
  processComplexAssignment() {
    const n = this.tokens.currentIndex(), r = this.tokens.tokens[n - 1];
    if (r.type !== t.name || r.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot))
      return !1;
    const o = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(r)
    );
    return o ? (this.tokens.appendCode(` = ${o}`), this.tokens.copyToken(), !0) : !1;
  }
  processPreIncDec() {
    const n = this.tokens.currentIndex(), r = this.tokens.tokens[n + 1];
    if (r.type !== t.name || r.shadowsGlobal || n + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(n + 2, t.dot) || this.tokens.matches1AtIndex(n + 2, t.bracketL) || this.tokens.matches1AtIndex(n + 2, t.parenL)))
      return !1;
    const o = this.tokens.identifierNameForToken(r), i = this.importProcessor.resolveExportBinding(o);
    return i ? (this.tokens.appendCode(`${i} = `), this.tokens.copyToken(), !0) : !1;
  }
  processPostIncDec() {
    const n = this.tokens.currentIndex(), r = this.tokens.tokens[n], o = this.tokens.tokens[n + 1];
    if (r.type !== t.name || r.shadowsGlobal || n >= 1 && this.tokens.matches1AtIndex(n - 1, t.dot))
      return !1;
    const i = this.tokens.identifierNameForToken(r), c = this.importProcessor.resolveExportBinding(i);
    if (!c)
      return !1;
    const p = this.tokens.rawCodeForToken(o), m = this.importProcessor.getIdentifierReplacement(i) || i;
    if (p === "++")
      this.tokens.replaceToken(`(${m} = ${c} = ${m} + 1, ${m} - 1)`);
    else if (p === "--")
      this.tokens.replaceToken(`(${m} = ${c} = ${m} - 1, ${m} + 1)`);
    else
      throw new Error(`Unexpected operator: ${p}`);
    return this.tokens.removeToken(), !0;
  }
  processExportDefault() {
    if (this.tokens.matches4(t._export, t._default, t._function, t.name) || this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      l._async
    )) {
      this.tokens.removeInitialToken(), this.tokens.removeToken();
      const n = this.processNamedFunction();
      this.tokens.appendCode(` exports.default = ${n};`);
    } else if (this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name)) {
      this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
      const n = this.rootTransformer.processNamedClass();
      this.tokens.appendCode(` exports.default = ${n};`);
    } else {
      if (this.tokens.matches3(t._export, t._default, t.at))
        throw new Error("Export default statements with decorators are not yet supported.");
      if (R1(this.isTypeScriptTransformEnabled, this.tokens, this.declarationInfo))
        this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
      else if (this.reactHotLoaderTransformer) {
        const n = this.nameManager.claimFreeName("_default");
        this.tokens.replaceToken(`let ${n}; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${n} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(n);
      } else
        this.tokens.replaceToken("exports."), this.tokens.copyToken(), this.tokens.appendCode(" =");
    }
  }
  processExportVar() {
    this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar();
  }
  isSimpleExportVar() {
    let n = this.tokens.currentIndex();
    if (n++, n++, !this.tokens.matches1AtIndex(n, t.name))
      return !1;
    for (n++; n < this.tokens.tokens.length && this.tokens.tokens[n].isType; )
      n++;
    return !!this.tokens.matches1AtIndex(n, t.eq);
  }
  processSimpleExportVar() {
    this.tokens.removeInitialToken(), this.tokens.copyToken();
    const n = this.tokens.identifierName();
    for (; !this.tokens.matches1(t.eq); )
      this.rootTransformer.processToken();
    const r = this.tokens.currentToken().rhsEndIndex;
    if (r == null)
      throw new Error("Expected = token with an end index.");
    for (; this.tokens.currentIndex() < r; )
      this.rootTransformer.processToken();
    this.tokens.appendCode(`; exports.${n} = ${n}`);
  }
  processComplexExportVar() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = this.tokens.matches1(t.braceL);
    n && this.tokens.appendCode("(");
    let r = 0;
    for (; ; )
      if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL) || this.tokens.matches1(t.bracketL))
        r++, this.tokens.copyToken();
      else if (this.tokens.matches1(t.braceR) || this.tokens.matches1(t.bracketR))
        r--, this.tokens.copyToken();
      else {
        if (r === 0 && !this.tokens.matches1(t.name) && !this.tokens.currentToken().isType)
          break;
        if (this.tokens.matches1(t.eq)) {
          const o = this.tokens.currentToken().rhsEndIndex;
          if (o == null)
            throw new Error("Expected = token with an end index.");
          for (; this.tokens.currentIndex() < o; )
            this.rootTransformer.processToken();
        } else {
          const o = this.tokens.currentToken();
          if (vs(o)) {
            const i = this.tokens.identifierName();
            let c = this.importProcessor.getIdentifierReplacement(i);
            if (c === null)
              throw new Error(`Expected a replacement for ${i} in \`export var\` syntax.`);
            Ao(o) && (c = `${i}: ${c}`), this.tokens.replaceToken(c);
          } else
            this.rootTransformer.processToken();
        }
      }
    if (n) {
      const o = this.tokens.currentToken().rhsEndIndex;
      if (o == null)
        throw new Error("Expected = token with an end index.");
      for (; this.tokens.currentIndex() < o; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(")");
    }
  }
  processExportFunction() {
    this.tokens.replaceToken("");
    const n = this.processNamedFunction();
    this.tokens.appendCode(` exports.${n} = ${n};`);
  }
  processNamedFunction() {
    if (this.tokens.matches1(t._function))
      this.tokens.copyToken();
    else if (this.tokens.matches2(t.name, t._function)) {
      if (!this.tokens.matchesContextual(l._async))
        throw new Error("Expected async keyword in function export.");
      this.tokens.copyToken(), this.tokens.copyToken();
    }
    if (this.tokens.matches1(t.star) && this.tokens.copyToken(), !this.tokens.matches1(t.name))
      throw new Error("Expected identifier for exported function name.");
    const n = this.tokens.identifierName();
    if (this.tokens.copyToken(), this.tokens.currentToken().isType)
      for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType; )
        this.tokens.removeToken();
    return this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(t.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), n;
  }
  processExportClass() {
    this.tokens.removeInitialToken(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
    const n = this.rootTransformer.processNamedClass();
    this.tokens.appendCode(` exports.${n} = ${n};`);
  }
  processExportBindings() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = [];
    for (; ; ) {
      if (this.tokens.matches1(t.braceR)) {
        this.tokens.removeToken();
        break;
      }
      const r = mn(this.tokens);
      for (; this.tokens.currentIndex() < r.endIndex; )
        this.tokens.removeToken();
      if (!r.isType && !this.shouldElideExportedIdentifier(r.leftName)) {
        const o = r.leftName, i = r.rightName, c = this.importProcessor.getIdentifierReplacement(o);
        n.push(`exports.${i} = ${c || o};`);
      }
      if (this.tokens.matches1(t.braceR)) {
        this.tokens.removeToken();
        break;
      }
      if (this.tokens.matches2(t.comma, t.braceR)) {
        this.tokens.removeToken(), this.tokens.removeToken();
        break;
      } else if (this.tokens.matches1(t.comma))
        this.tokens.removeToken();
      else
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
    }
    if (this.tokens.matchesContextual(l._from)) {
      this.tokens.removeToken();
      const r = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(r));
    } else
      this.tokens.appendCode(n.join(" "));
    this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  processExportStar() {
    for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.string); )
      this.tokens.removeToken();
    const n = this.tokens.stringValue();
    this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(n)), this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  shouldElideExportedIdentifier(n) {
    return this.isTypeScriptTransformEnabled && !this.declarationInfo.valueDeclarations.has(n);
  }
}
class Dl extends Xe {
  constructor(n, r, o, i, c, p) {
    super(), this.tokens = n, this.nameManager = r, this.helperManager = o, this.reactHotLoaderTransformer = i, this.isTypeScriptTransformEnabled = c, this.nonTypeIdentifiers = c ? qs(n, p) : /* @__PURE__ */ new Set(), this.declarationInfo = c ? P1(n) : A1, this.injectCreateRequireForImportRequire = Boolean(p.injectCreateRequireForImportRequire);
  }
  process() {
    if (this.tokens.matches3(t._import, t.name, t.eq))
      return this.processImportEquals();
    if (this.tokens.matches4(t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      this.tokens.removeInitialToken();
      for (let n = 0; n < 7; n++)
        this.tokens.removeToken();
      return !0;
    }
    if (this.tokens.matches2(t._export, t.eq))
      return this.tokens.replaceToken("module.exports"), !0;
    if (this.tokens.matches5(t._export, t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, l._type)) {
      this.tokens.removeInitialToken();
      for (let n = 0; n < 8; n++)
        this.tokens.removeToken();
      return !0;
    }
    if (this.tokens.matches1(t._import))
      return this.processImport();
    if (this.tokens.matches2(t._export, t._default))
      return this.processExportDefault();
    if (this.tokens.matches2(t._export, t.braceL))
      return this.processNamedExports();
    if (this.tokens.matches3(t._export, t.name, t.braceL) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.braceR); )
        this.tokens.removeToken();
      return this.tokens.removeToken(), this.tokens.matchesContextual(l._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken()), !0;
    }
    return !1;
  }
  processImportEquals() {
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.isTypeName(n) ? S1(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0;
  }
  processImport() {
    if (this.tokens.matches2(t._import, t.parenL))
      return !1;
    const n = this.tokens.snapshot();
    if (this.removeImportTypeBindings()) {
      for (this.tokens.restoreToSnapshot(n); !this.tokens.matches1(t.string); )
        this.tokens.removeToken();
      this.tokens.removeToken(), this.tokens.matches1(t.semi) && this.tokens.removeToken();
    }
    return !0;
  }
  removeImportTypeBindings() {
    if (this.tokens.copyExpectedToken(t._import), this.tokens.matchesContextual(l._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._from))
      return !0;
    if (this.tokens.matches1(t.string))
      return this.tokens.copyToken(), !1;
    let n = !1, r = !1;
    if (this.tokens.matches1(t.name) && (this.isTypeName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(t.comma) && this.tokens.removeToken()) : (n = !0, this.tokens.copyToken(), this.tokens.matches1(t.comma) && (r = !0, this.tokens.removeToken()))), this.tokens.matches1(t.star))
      this.isTypeName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (r && this.tokens.appendCode(","), n = !0, this.tokens.copyExpectedToken(t.star), this.tokens.copyExpectedToken(t.name), this.tokens.copyExpectedToken(t.name));
    else if (this.tokens.matches1(t.braceL)) {
      for (r && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(t.braceR); ) {
        const o = mn(this.tokens);
        if (o.isType || this.isTypeName(o.rightName)) {
          for (; this.tokens.currentIndex() < o.endIndex; )
            this.tokens.removeToken();
          this.tokens.matches1(t.comma) && this.tokens.removeToken();
        } else {
          for (n = !0; this.tokens.currentIndex() < o.endIndex; )
            this.tokens.copyToken();
          this.tokens.matches1(t.comma) && this.tokens.copyToken();
        }
      }
      this.tokens.copyExpectedToken(t.braceR);
    }
    return !n;
  }
  isTypeName(n) {
    return this.isTypeScriptTransformEnabled && !this.nonTypeIdentifiers.has(n);
  }
  processExportDefault() {
    if (R1(this.isTypeScriptTransformEnabled, this.tokens, this.declarationInfo))
      return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
    if (!(this.tokens.matches4(t._export, t._default, t._function, t.name) || this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      l._async
    ) || this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name)) && this.reactHotLoaderTransformer) {
      const r = this.nameManager.claimFreeName("_default");
      return this.tokens.replaceToken(`let ${r}; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${r} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(r), !0;
    }
    return !1;
  }
  processNamedExports() {
    if (!this.isTypeScriptTransformEnabled)
      return !1;
    for (this.tokens.copyExpectedToken(t._export), this.tokens.copyExpectedToken(t.braceL); !this.tokens.matches1(t.braceR); ) {
      const n = mn(this.tokens);
      if (n.isType || this.shouldElideExportedName(n.leftName)) {
        for (; this.tokens.currentIndex() < n.endIndex; )
          this.tokens.removeToken();
        this.tokens.matches1(t.comma) && this.tokens.removeToken();
      } else {
        for (; this.tokens.currentIndex() < n.endIndex; )
          this.tokens.copyToken();
        this.tokens.matches1(t.comma) && this.tokens.copyToken();
      }
    }
    return this.tokens.copyExpectedToken(t.braceR), !0;
  }
  shouldElideExportedName(n) {
    return this.isTypeScriptTransformEnabled && this.declarationInfo.typeDeclarations.has(n) && !this.declarationInfo.valueDeclarations.has(n);
  }
}
class Ll extends Xe {
  constructor(n, r, o) {
    super(), this.rootTransformer = n, this.tokens = r, this.isImportsTransformEnabled = o;
  }
  process() {
    return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) ? (this.processNamedExportEnum(), !0) : this.tokens.matches3(t._export, t._default, t._enum) ? (this.processDefaultExportEnum(), !0) : !1;
  }
  processNamedExportEnum() {
    if (this.isImportsTransformEnabled) {
      this.tokens.removeInitialToken();
      const n = this.tokens.identifierNameAtRelativeIndex(1);
      this.processEnum(), this.tokens.appendCode(` exports.${n} = ${n};`);
    } else
      this.tokens.copyToken(), this.processEnum();
  }
  processDefaultExportEnum() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = this.tokens.identifierNameAtRelativeIndex(1);
    this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${n};`) : this.tokens.appendCode(` export default ${n};`);
  }
  processEnum() {
    this.tokens.replaceToken("const"), this.tokens.copyExpectedToken(t.name);
    let n = !1;
    this.tokens.matchesContextual(l._of) && (this.tokens.removeToken(), n = this.tokens.matchesContextual(l._symbol), this.tokens.removeToken());
    const r = this.tokens.matches3(t.braceL, t.name, t.eq);
    this.tokens.appendCode(' = require("flow-enums-runtime")');
    const o = !n && !r;
    for (this.tokens.replaceTokenTrimmingLeftWhitespace(o ? ".Mirrored([" : "({"); !this.tokens.matches1(t.braceR); ) {
      if (this.tokens.matches1(t.ellipsis)) {
        this.tokens.removeToken();
        break;
      }
      this.processEnumElement(n, r), this.tokens.matches1(t.comma) && this.tokens.copyToken();
    }
    this.tokens.replaceToken(o ? "]);" : "});");
  }
  processEnumElement(n, r) {
    if (n) {
      const o = this.tokens.identifierName();
      this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${o}")`);
    } else
      r ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
  }
}
function jl(e) {
  let n, r = e[0], o = 1;
  for (; o < e.length; ) {
    const i = e[o], c = e[o + 1];
    if (o += 2, (i === "optionalAccess" || i === "optionalCall") && r == null)
      return;
    i === "access" || i === "optionalAccess" ? (n = r, r = c(r)) : (i === "call" || i === "optionalCall") && (r = c((...p) => r.call(n, ...p)), n = void 0);
  }
  return r;
}
const Pn = "jest", Fl = ["mock", "unmock", "enableAutomock", "disableAutomock"];
class Ur extends Xe {
  __init() {
    this.hoistedFunctionNames = [];
  }
  constructor(n, r, o, i) {
    super(), this.rootTransformer = n, this.tokens = r, this.nameManager = o, this.importProcessor = i, Ur.prototype.__init.call(this);
  }
  process() {
    return this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(t.name, t.dot, t.name, t.parenL) && this.tokens.identifierName() === Pn ? jl([this, "access", (n) => n.importProcessor, "optionalAccess", (n) => n.getGlobalNames, "call", (n) => n(), "optionalAccess", (n) => n.has, "call", (n) => n(Pn)]) ? !1 : this.extractHoistedCalls() : !1;
  }
  getHoistedCode() {
    return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map((n) => `${n}();`).join("") : "";
  }
  extractHoistedCalls() {
    this.tokens.removeToken();
    let n = !1;
    for (; this.tokens.matches3(t.dot, t.name, t.parenL); ) {
      const r = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
      if (Fl.includes(r)) {
        const i = this.nameManager.claimFreeName("__jestHoist");
        this.hoistedFunctionNames.push(i), this.tokens.replaceToken(`function ${i}(){${Pn}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.tokens.appendCode(";}"), n = !1;
      } else
        n ? this.tokens.copyToken() : this.tokens.replaceToken(`${Pn}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), n = !0;
    }
    return !0;
  }
}
class Bl extends Xe {
  constructor(n) {
    super(), this.tokens = n;
  }
  process() {
    if (this.tokens.matches1(t.num)) {
      const n = this.tokens.currentTokenCode();
      if (n.includes("_"))
        return this.tokens.replaceToken(n.replace(/_/g, "")), !0;
    }
    return !1;
  }
}
class ql extends Xe {
  constructor(n, r) {
    super(), this.tokens = n, this.nameManager = r;
  }
  process() {
    return this.tokens.matches2(t._catch, t.braceL) ? (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0) : !1;
  }
}
class Ml extends Xe {
  constructor(n, r) {
    super(), this.tokens = n, this.nameManager = r;
  }
  process() {
    if (this.tokens.matches1(t.nullishCoalescing)) {
      const o = this.tokens.currentToken();
      return this.tokens.tokens[o.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0;
    }
    if (this.tokens.matches1(t._delete) && this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)
      return this.tokens.removeInitialToken(), !0;
    const r = this.tokens.currentToken().subscriptStartIndex;
    if (r != null && this.tokens.tokens[r].isOptionalChainStart && this.tokens.tokenAtRelativeIndex(-1).type !== t._super) {
      const o = this.nameManager.claimFreeName("_");
      let i;
      if (r > 0 && this.tokens.matches1AtIndex(r - 1, t._delete) && this.isLastSubscriptInChain() ? i = `${o} => delete ${o}` : i = `${o} => ${o}`, this.tokens.tokens[r].isAsyncOperation && (i = `async ${i}`), this.tokens.matches2(t.questionDot, t.parenL) || this.tokens.matches2(t.questionDot, t.lessThan))
        this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${i}`);
      else if (this.tokens.matches2(t.questionDot, t.bracketL))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${i}`);
      else if (this.tokens.matches1(t.questionDot))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${i}.`);
      else if (this.tokens.matches1(t.dot))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${i}.`);
      else if (this.tokens.matches1(t.bracketL))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${i}[`);
      else if (this.tokens.matches1(t.parenL))
        this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${i}(`);
      else
        throw new Error("Unexpected subscript operator in optional chain.");
      return !0;
    }
    return !1;
  }
  isLastSubscriptInChain() {
    let n = 0;
    for (let r = this.tokens.currentIndex() + 1; ; r++) {
      if (r >= this.tokens.tokens.length)
        throw new Error("Reached the end of the code while finding the end of the access chain.");
      if (this.tokens.tokens[r].isOptionalChainStart ? n++ : this.tokens.tokens[r].isOptionalChainEnd && n--, n < 0)
        return !0;
      if (n === 0 && this.tokens.tokens[r].subscriptStartIndex != null)
        return !1;
    }
  }
  justSkippedSuper() {
    let n = 0, r = this.tokens.currentIndex() - 1;
    for (; ; ) {
      if (r < 0)
        throw new Error(
          "Reached the start of the code while finding the start of the access chain."
        );
      if (this.tokens.tokens[r].isOptionalChainStart ? n-- : this.tokens.tokens[r].isOptionalChainEnd && n++, n < 0)
        return !1;
      if (n === 0 && this.tokens.tokens[r].subscriptStartIndex != null)
        return this.tokens.tokens[r - 1].type === t._super;
      r--;
    }
  }
}
class $l extends Xe {
  constructor(n, r, o, i) {
    super(), this.rootTransformer = n, this.tokens = r, this.importProcessor = o, this.options = i;
  }
  process() {
    const n = this.tokens.currentIndex();
    if (this.tokens.identifierName() === "createReactClass") {
      const r = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
      return r ? this.tokens.replaceToken(`(0, ${r})`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(n), !0;
    }
    if (this.tokens.matches3(t.name, t.dot, t.name) && this.tokens.identifierName() === "React" && this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass") {
      const r = this.importProcessor && this.importProcessor.getIdentifierReplacement("React") || "React";
      return r ? (this.tokens.replaceToken(r), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(n), !0;
    }
    return !1;
  }
  tryProcessCreateClassCall(n) {
    const r = this.findDisplayName(n);
    !r || this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(t.parenL), this.tokens.copyExpectedToken(t.braceL), this.tokens.appendCode(`displayName: '${r}',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), this.tokens.copyExpectedToken(t.parenR));
  }
  findDisplayName(n) {
    return n < 2 ? null : this.tokens.matches2AtIndex(n - 2, t.name, t.eq) ? this.tokens.identifierNameAtIndex(n - 2) : n >= 2 && this.tokens.tokens[n - 2].identifierRole === R.ObjectKey ? this.tokens.identifierNameAtIndex(n - 2) : this.tokens.matches2AtIndex(n - 2, t._export, t._default) ? this.getDisplayNameFromFilename() : null;
  }
  getDisplayNameFromFilename() {
    const r = (this.options.filePath || "unknown").split("/"), o = r[r.length - 1], i = o.lastIndexOf("."), c = i === -1 ? o : o.slice(0, i);
    return c === "index" && r[r.length - 2] ? r[r.length - 2] : c;
  }
  classNeedsDisplayName() {
    let n = this.tokens.currentIndex();
    if (!this.tokens.matches2(t.parenL, t.braceL))
      return !1;
    const r = n + 1, o = this.tokens.tokens[r].contextId;
    if (o == null)
      throw new Error("Expected non-null context ID on object open-brace.");
    for (; n < this.tokens.tokens.length; n++) {
      const i = this.tokens.tokens[n];
      if (i.type === t.braceR && i.contextId === o) {
        n++;
        break;
      }
      if (this.tokens.identifierNameAtIndex(n) === "displayName" && this.tokens.tokens[n].identifierRole === R.ObjectKey && i.contextId === o)
        return !1;
    }
    if (n === this.tokens.tokens.length)
      throw new Error("Unexpected end of input when processing React class.");
    return this.tokens.matches1AtIndex(n, t.parenR) || this.tokens.matches2AtIndex(n, t.comma, t.parenR);
  }
}
class Xr extends Xe {
  __init() {
    this.extractedDefaultExportName = null;
  }
  constructor(n, r) {
    super(), this.tokens = n, this.filePath = r, Xr.prototype.__init.call(this);
  }
  setExtractedDefaultExportName(n) {
    this.extractedDefaultExportName = n;
  }
  getPrefixCode() {
    return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g, " ").trim();
  }
  getSuffixCode() {
    const n = /* @__PURE__ */ new Set();
    for (const o of this.tokens.tokens)
      !o.isType && Es(o) && o.identifierRole !== R.ImportDeclaration && n.add(this.tokens.identifierNameForToken(o));
    const r = Array.from(n).map((o) => ({
      variableName: o,
      uniqueLocalName: o
    }));
    return this.extractedDefaultExportName && r.push({
      variableName: this.extractedDefaultExportName,
      uniqueLocalName: "default"
    }), `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${r.map(
      ({ variableName: o, uniqueLocalName: i }) => `  reactHotLoader.register(${o}, "${i}", ${JSON.stringify(
        this.filePath || ""
      )});`
    ).join(`
`)}
  leaveModule(module);
})();`;
  }
  process() {
    return !1;
  }
}
const Vl = /* @__PURE__ */ new Set([
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "enum",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "await",
  "false",
  "null",
  "true"
]);
function ds(e) {
  if (e.length === 0 || !xn[e.charCodeAt(0)])
    return !1;
  for (let n = 1; n < e.length; n++)
    if (!Ue[e.charCodeAt(n)])
      return !1;
  return !Vl.has(e);
}
class Wl extends Xe {
  constructor(n, r, o) {
    super(), this.rootTransformer = n, this.tokens = r, this.isImportsTransformEnabled = o;
  }
  process() {
    return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._public) || this.tokens.matches1(t._protected) || this.tokens.matches1(t._private) || this.tokens.matches1(t._abstract) || this.tokens.matches1(t._readonly) || this.tokens.matches1(t._override) || this.tokens.matches1(t.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(t._enum) || this.tokens.matches2(t._const, t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum) ? (this.processEnum(!0), !0) : !1;
  }
  processEnum(n = !1) {
    for (this.tokens.removeInitialToken(); this.tokens.matches1(t._const) || this.tokens.matches1(t._enum); )
      this.tokens.removeToken();
    const r = this.tokens.identifierName();
    this.tokens.removeToken(), n && !this.isImportsTransformEnabled && this.tokens.appendCode("export "), this.tokens.appendCode(`var ${r}; (function (${r})`), this.tokens.copyExpectedToken(t.braceL), this.processEnumBody(r), this.tokens.copyExpectedToken(t.braceR), n && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${r} || (exports.${r} = ${r} = {}));`) : this.tokens.appendCode(`)(${r} || (${r} = {}));`);
  }
  processEnumBody(n) {
    let r = null;
    for (; !this.tokens.matches1(t.braceR); ) {
      const { nameStringCode: o, variableName: i } = this.extractEnumKeyInfo(this.tokens.currentToken());
      this.tokens.removeInitialToken(), this.tokens.matches3(t.eq, t.string, t.comma) || this.tokens.matches3(t.eq, t.string, t.braceR) ? this.processStringLiteralEnumMember(n, o, i) : this.tokens.matches1(t.eq) ? this.processExplicitValueEnumMember(n, o, i) : this.processImplicitValueEnumMember(
        n,
        o,
        i,
        r
      ), this.tokens.matches1(t.comma) && this.tokens.removeToken(), i != null ? r = i : r = `${n}[${o}]`;
    }
  }
  extractEnumKeyInfo(n) {
    if (n.type === t.name) {
      const r = this.tokens.identifierNameForToken(n);
      return {
        nameStringCode: `"${r}"`,
        variableName: ds(r) ? r : null
      };
    } else if (n.type === t.string) {
      const r = this.tokens.stringValueForToken(n);
      return {
        nameStringCode: this.tokens.code.slice(n.start, n.end),
        variableName: ds(r) ? r : null
      };
    } else
      throw new Error("Expected name or string at beginning of enum element.");
  }
  processStringLiteralEnumMember(n, r, o) {
    o != null ? (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${n}[${r}] = ${o};`)) : (this.tokens.appendCode(`${n}[${r}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";"));
  }
  processExplicitValueEnumMember(n, r, o) {
    const i = this.tokens.currentToken().rhsEndIndex;
    if (i == null)
      throw new Error("Expected rhsEndIndex on enum assign.");
    if (o != null) {
      for (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(); this.tokens.currentIndex() < i; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(
        `; ${n}[${n}[${r}] = ${o}] = ${r};`
      );
    } else {
      for (this.tokens.appendCode(`${n}[${n}[${r}]`), this.tokens.copyToken(); this.tokens.currentIndex() < i; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(`] = ${r};`);
    }
  }
  processImplicitValueEnumMember(n, r, o, i) {
    let c = i != null ? `${i} + 1` : "0";
    o != null && (this.tokens.appendCode(`const ${o} = ${c}; `), c = o), this.tokens.appendCode(
      `${n}[${n}[${r}] = ${c}] = ${r};`
    );
  }
}
class Wn {
  __init() {
    this.transformers = [];
  }
  __init2() {
    this.generatedVariables = [];
  }
  constructor(n, r, o, i) {
    Wn.prototype.__init.call(this), Wn.prototype.__init2.call(this), this.nameManager = n.nameManager, this.helperManager = n.helperManager;
    const { tokenProcessor: c, importProcessor: p } = n;
    this.tokens = c, this.isImportsTransformEnabled = r.includes("imports"), this.isReactHotLoaderTransformEnabled = r.includes("react-hot-loader"), this.disableESTransforms = Boolean(i.disableESTransforms), i.disableESTransforms || (this.transformers.push(
      new Ml(c, this.nameManager)
    ), this.transformers.push(new Bl(c)), this.transformers.push(new ql(c, this.nameManager))), r.includes("jsx") && (this.transformers.push(
      new pn(this, c, p, this.nameManager, i)
    ), this.transformers.push(
      new $l(this, c, p, i)
    ));
    let m = null;
    if (r.includes("react-hot-loader")) {
      if (!i.filePath)
        throw new Error("filePath is required when using the react-hot-loader transform.");
      m = new Xr(c, i.filePath), this.transformers.push(m);
    }
    if (r.includes("imports")) {
      if (p === null)
        throw new Error("Expected non-null importProcessor with imports transform enabled.");
      this.transformers.push(
        new hn(
          this,
          c,
          p,
          this.nameManager,
          m,
          o,
          r.includes("typescript"),
          Boolean(i.preserveDynamicImport)
        )
      );
    } else
      this.transformers.push(
        new Dl(
          c,
          this.nameManager,
          this.helperManager,
          m,
          r.includes("typescript"),
          i
        )
      );
    r.includes("flow") && this.transformers.push(
      new Ll(this, c, r.includes("imports"))
    ), r.includes("typescript") && this.transformers.push(
      new Wl(this, c, r.includes("imports"))
    ), r.includes("jest") && this.transformers.push(
      new Ur(this, c, this.nameManager, p)
    );
  }
  transform() {
    this.tokens.reset(), this.processBalancedCode();
    let r = this.isImportsTransformEnabled ? '"use strict";' : "";
    for (const c of this.transformers)
      r += c.getPrefixCode();
    r += this.helperManager.emitHelpers(), r += this.generatedVariables.map((c) => ` var ${c};`).join("");
    for (const c of this.transformers)
      r += c.getHoistedCode();
    let o = "";
    for (const c of this.transformers)
      o += c.getSuffixCode();
    let i = this.tokens.finish();
    if (i.startsWith("#!")) {
      let c = i.indexOf(`
`);
      return c === -1 && (c = i.length, i += `
`), i.slice(0, c + 1) + r + i.slice(c + 1) + o;
    } else
      return r + this.tokens.finish() + o;
  }
  processBalancedCode() {
    let n = 0, r = 0;
    for (; !this.tokens.isAtEnd(); ) {
      if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL))
        n++;
      else if (this.tokens.matches1(t.braceR)) {
        if (n === 0)
          return;
        n--;
      }
      if (this.tokens.matches1(t.parenL))
        r++;
      else if (this.tokens.matches1(t.parenR)) {
        if (r === 0)
          return;
        r--;
      }
      this.processToken();
    }
  }
  processToken() {
    if (this.tokens.matches1(t._class)) {
      this.processClass();
      return;
    }
    for (const n of this.transformers)
      if (n.process())
        return;
    this.tokens.copyToken();
  }
  processNamedClass() {
    if (!this.tokens.matches2(t._class, t.name))
      throw new Error("Expected identifier for exported class name.");
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.processClass(), n;
  }
  processClass() {
    const n = Nl(this, this.tokens, this.nameManager, this.disableESTransforms), r = (n.headerInfo.isExpression || !n.headerInfo.className) && n.staticInitializerNames.length + n.instanceInitializerNames.length > 0;
    let o = n.headerInfo.className;
    r && (o = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(o), this.tokens.appendCode(` (${o} =`));
    const c = this.tokens.currentToken().contextId;
    if (c == null)
      throw new Error("Expected class to have a context ID.");
    for (this.tokens.copyExpectedToken(t._class); !this.tokens.matchesContextIdAndLabel(t.braceL, c); )
      this.processToken();
    this.processClassBody(n, o);
    const p = n.staticInitializerNames.map(
      (m) => `${o}.${m}()`
    );
    r ? this.tokens.appendCode(
      `, ${p.map((m) => `${m}, `).join("")}${o})`
    ) : n.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${p.map((m) => `${m};`).join(" ")}`);
  }
  processClassBody(n, r) {
    const {
      headerInfo: o,
      constructorInsertPos: i,
      constructorInitializerStatements: c,
      fields: p,
      instanceInitializerNames: m,
      rangesToRemove: y
    } = n;
    let _ = 0, v = 0;
    const P = this.tokens.currentToken().contextId;
    if (P == null)
      throw new Error("Expected non-null context ID on class.");
    this.tokens.copyExpectedToken(t.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode(
      "__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}"
    );
    const A = c.length + m.length > 0;
    if (i === null && A) {
      const j = this.makeConstructorInitCode(
        c,
        m,
        r
      );
      if (o.hasSuperclass) {
        const Y = this.nameManager.claimFreeName("args");
        this.tokens.appendCode(
          `constructor(...${Y}) { super(...${Y}); ${j}; }`
        );
      } else
        this.tokens.appendCode(`constructor() { ${j}; }`);
    }
    for (; !this.tokens.matchesContextIdAndLabel(t.braceR, P); )
      if (_ < p.length && this.tokens.currentIndex() === p[_].start) {
        let j = !1;
        for (this.tokens.matches1(t.bracketL) ? this.tokens.copyTokenWithPrefix(`${p[_].initializerName}() {this`) : this.tokens.matches1(t.string) || this.tokens.matches1(t.num) ? (this.tokens.copyTokenWithPrefix(`${p[_].initializerName}() {this[`), j = !0) : this.tokens.copyTokenWithPrefix(`${p[_].initializerName}() {this.`); this.tokens.currentIndex() < p[_].end; )
          j && this.tokens.currentIndex() === p[_].equalsIndex && this.tokens.appendCode("]"), this.processToken();
        this.tokens.appendCode("}"), _++;
      } else if (v < y.length && this.tokens.currentIndex() >= y[v].start) {
        for (this.tokens.currentIndex() < y[v].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < y[v].end; )
          this.tokens.removeToken();
        v++;
      } else
        this.tokens.currentIndex() === i ? (this.tokens.copyToken(), A && this.tokens.appendCode(
          `;${this.makeConstructorInitCode(
            c,
            m,
            r
          )};`
        ), this.processToken()) : this.processToken();
    this.tokens.copyExpectedToken(t.braceR);
  }
  makeConstructorInitCode(n, r, o) {
    return [
      ...n,
      ...r.map((i) => `${o}.prototype.${i}.call(this)`)
    ].join(";");
  }
  processPossibleArrowParamEnd() {
    if (this.tokens.matches2(t.parenR, t.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
      let n = this.tokens.currentIndex() + 1;
      for (; this.tokens.tokens[n].isType; )
        n++;
      if (this.tokens.matches1AtIndex(n, t.arrow)) {
        for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < n; )
          this.tokens.removeToken();
        return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"), !0;
      }
    }
    return !1;
  }
  processPossibleAsyncArrowWithTypeParams() {
    if (!this.tokens.matchesContextual(l._async) && !this.tokens.matches1(t._async))
      return !1;
    const n = this.tokens.tokenAtRelativeIndex(1);
    if (n.type !== t.lessThan || !n.isType)
      return !1;
    let r = this.tokens.currentIndex() + 1;
    for (; this.tokens.tokens[r].isType; )
      r++;
    if (this.tokens.matches1AtIndex(r, t.parenL)) {
      for (this.tokens.replaceToken("async ("), this.tokens.removeInitialToken(); this.tokens.currentIndex() < r; )
        this.tokens.removeToken();
      return this.tokens.removeToken(), this.processBalancedCode(), this.processToken(), !0;
    }
    return !1;
  }
  processPossibleTypeRange() {
    if (this.tokens.currentToken().isType) {
      for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType; )
        this.tokens.removeToken();
      return !0;
    }
    return !1;
  }
}
var Hl = {};
(function(e) {
  e.__esModule = !0, e.LinesAndColumns = void 0;
  var n = `
`, r = "\r", o = function() {
    function i(c) {
      this.string = c;
      for (var p = [0], m = 0; m < c.length; )
        switch (c[m]) {
          case n:
            m += n.length, p.push(m);
            break;
          case r:
            m += r.length, c[m] === n && (m += n.length), p.push(m);
            break;
          default:
            m++;
            break;
        }
      this.offsets = p;
    }
    return i.prototype.locationForIndex = function(c) {
      if (c < 0 || c > this.string.length)
        return null;
      for (var p = 0, m = this.offsets; m[p + 1] <= c; )
        p++;
      var y = c - m[p];
      return { line: p, column: y };
    }, i.prototype.indexForLocation = function(c) {
      var p = c.line, m = c.column;
      return p < 0 || p >= this.offsets.length || m < 0 || m > this.lengthOfLine(p) ? null : this.offsets[p] + m;
    }, i.prototype.lengthOfLine = function(c) {
      var p = this.offsets[c], m = c === this.offsets.length - 1 ? this.string.length : this.offsets[c + 1];
      return m - p;
    }, i;
  }();
  e.LinesAndColumns = o, e.default = o;
})(Hl);
function Ul(e) {
  const n = /* @__PURE__ */ new Set();
  for (let r = 0; r < e.tokens.length; r++)
    e.matches1AtIndex(r, t._import) && !e.matches3AtIndex(r, t._import, t.name, t.eq) && Xl(e, r, n);
  return n;
}
function Xl(e, n, r) {
  n++, !e.matches1AtIndex(n, t.parenL) && (e.matches1AtIndex(n, t.name) && (r.add(e.identifierNameAtIndex(n)), n++, e.matches1AtIndex(n, t.comma) && n++), e.matches1AtIndex(n, t.star) && (n += 2, r.add(e.identifierNameAtIndex(n)), n++), e.matches1AtIndex(n, t.braceL) && (n++, Yl(e, n, r)));
}
function Yl(e, n, r) {
  for (; ; ) {
    if (e.matches1AtIndex(n, t.braceR))
      return;
    const o = mn(e, n);
    if (n = o.endIndex, o.isType || r.add(o.rightName), e.matches2AtIndex(n, t.comma, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.comma))
      n++;
    else
      throw new Error(`Unexpected token: ${JSON.stringify(e.tokens[n])}`);
  }
}
function Gl(e, n) {
  pi(n);
  try {
    const r = zl(e, n);
    let i = { code: new Wn(
      r,
      n.transforms,
      Boolean(n.enableLegacyBabel5ModuleInterop),
      n
    ).transform() };
    if (n.sourceMapOptions) {
      if (!n.filePath)
        throw new Error("filePath must be specified when generating a source map.");
      i = {
        ...i,
        sourceMap: Zo(i.code, n.filePath, n.sourceMapOptions)
      };
    }
    return i;
  } catch (r) {
    throw n.filePath && (r.message = `Error transforming ${n.filePath}: ${r.message}`), r;
  }
}
function zl(e, n) {
  const r = n.transforms.includes("jsx"), o = n.transforms.includes("typescript"), i = n.transforms.includes("flow"), c = n.disableESTransforms === !0, p = Pl(e, r, o, i), m = p.tokens, y = p.scopes, _ = new wr(e, m), v = new Dn(_), P = new $n(
    e,
    m,
    i,
    c,
    v
  ), A = Boolean(n.enableLegacyTypeScriptModuleInterop);
  let j = null;
  return n.transforms.includes("imports") ? (j = new yt(
    _,
    P,
    A,
    n,
    n.transforms.includes("typescript"),
    v
  ), j.preprocessTokens(), es(P, y, j.getGlobalNames()), n.transforms.includes("typescript") && j.pruneTypeOnlyImports()) : n.transforms.includes("typescript") && es(P, y, Ul(P)), { tokenProcessor: P, scopes: y, nameManager: _, importProcessor: j, helperManager: v };
}
function N1(e, n, r) {
  return n in e ? Object.defineProperty(e, n, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = r, e;
}
var Jl = /* @__PURE__ */ K1({}), Yr = Jl, Ql = {
  transforms: ["jsx", "imports"]
}, C1 = function(e) {
  return Gl(e, Ql).code;
};
function Hn(e, n) {
  return Hn = Object.setPrototypeOf || function(o, i) {
    return o.__proto__ = i, o;
  }, Hn(e, n);
}
function Kl(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Hn(e, n);
}
var Zl = function(n, r) {
  return /* @__PURE__ */ function(o) {
    Kl(i, o);
    function i() {
      return o.apply(this, arguments) || this;
    }
    var c = i.prototype;
    return c.componentDidCatch = function(m) {
      r(m);
    }, c.render = function() {
      return typeof n == "function" ? /* @__PURE__ */ Ie(n, {}) : /* @__PURE__ */ Bt.isValidElement(n) ? n : null;
    }, i;
  }(Z1);
}, O1 = Zl;
function eu() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function On(e, n, r) {
  return eu() ? On = Reflect.construct : On = function(i, c, p) {
    var m = [null];
    m.push.apply(m, c);
    var y = Function.bind.apply(i, m), _ = new y();
    return p && Hn(_, p.prototype), _;
  }, On.apply(null, arguments);
}
var tu = function(n, r) {
  var o = Object.keys(r), i = o.map(function(c) {
    return r[c];
  });
  return On(Function, o.concat([n])).apply(void 0, i);
}, D1 = tu;
function ms(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function yr(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ms(Object(r), !0).forEach(function(o) {
      N1(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ms(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
var nu = function(n, r) {
  var o = n.code, i = o === void 0 ? "" : o, c = n.scope, p = c === void 0 ? {} : c, m = i.trim().replace(/;$/, ""), y = C1("return (" + m + ")").trim();
  return O1(D1(y, yr({
    React: Bt
  }, p)), r);
}, ru = function(n, r, o) {
  var i = n.code, c = i === void 0 ? "" : i, p = n.scope, m = p === void 0 ? {} : p, y = function(v) {
    typeof v > "u" ? o(new SyntaxError("`render` must be called with valid JSX.")) : r(O1(v, o));
  };
  if (!/render\s*\(/.test(c))
    return o(new SyntaxError("No-Inline evaluations must call `render`."));
  D1(C1(c), yr(yr({
    React: Bt
  }, m), {}, {
    render: y
  }));
};
function ks(e, n) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    n && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function gs(e) {
  for (var n = 1; n < arguments.length; n++) {
    var r = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ks(Object(r), !0).forEach(function(o) {
      N1(e, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ks(Object(r)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return e;
}
function L1(e) {
  var n = e.children, r = e.code, o = e.language, i = e.theme, c = e.disabled, p = e.scope, m = e.transformCode, y = e.noInline, _ = y === void 0 ? !1 : y, v = _s({
    error: void 0,
    element: void 0
  }), P = v[0], A = v[1];
  function j(ue) {
    var J = function(fe) {
      A({
        error: fe.toString(),
        element: void 0
      });
    };
    try {
      var K = m ? m(ue) : ue;
      return Promise.resolve(K).then(function(he) {
        var fe = function(Ce) {
          return A({
            error: void 0,
            element: Ce
          });
        }, ve = {
          code: he,
          scope: p
        };
        _ ? (A({
          error: void 0,
          element: null
        }), ru(ve, fe, J)) : fe(nu(ve, J));
      }).catch(J);
    } catch (he) {
      return J(he), Promise.resolve();
    }
  }
  var Y = function(J) {
    return A({
      error: J.toString()
    });
  };
  br(function() {
    j(r).catch(Y);
  }, [r, p, _, m]);
  var ce = function(J) {
    j(J).catch(Y);
  };
  return /* @__PURE__ */ Ie(Yr.Provider, {
    value: gs(gs({}, P), {}, {
      code: r,
      language: o,
      theme: i,
      disabled: c,
      onError: Y,
      onChange: ce
    }),
    children: n
  });
}
L1.defaultProps = {
  code: "",
  noInline: !1,
  language: "jsx",
  disabled: !1
};
function su(e) {
  var n = bn(Yr), r = n.error;
  return r ? /* @__PURE__ */ Ie("pre", {
    ...e,
    children: r
  }) : null;
}
function ou(e, n) {
  if (e == null)
    return {};
  var r = {}, o = Object.keys(e), i, c;
  for (c = 0; c < o.length; c++)
    i = o[c], !(n.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var iu = ["Component"];
function j1(e) {
  var n = e.Component, r = ou(e, iu), o = bn(Yr), i = o.element;
  return /* @__PURE__ */ Ie(n, {
    ...r,
    children: i ? /* @__PURE__ */ Ie(i, {}) : null
  });
}
j1.defaultProps = {
  Component: "div"
};
const au = (e) => {
  const n = bn(Xn), {
    code: r,
    scope: o = n.scope,
    ...i
  } = e;
  return /* @__PURE__ */ Ie(ys, {
    children: /* @__PURE__ */ Ie("div", {
      ...i,
      children: /* @__PURE__ */ bs(L1, {
        scope: o,
        language: "javascript",
        code: r,
        children: [/* @__PURE__ */ Ie(su, {}), /* @__PURE__ */ Ie(j1, {})]
      })
    })
  });
}, uu = (e) => {
  const n = ir(null), o = bn(Xn).scope, {
    defaultValue: i
  } = e, [c, p] = _s("");
  return br(() => {
    if (n.current) {
      const m = n.current.editor;
      m.onDidBlurEditorText(() => {
        p(m.getValue());
      }), p(n.current.editor.getValue());
    }
  }, [n]), /* @__PURE__ */ Ie(ys, {
    children: /* @__PURE__ */ Ie(ao, {
      scope: o,
      children: /* @__PURE__ */ bs("div", {
        style: {
          display: "flex"
        },
        children: [/* @__PURE__ */ Ie(mo, {
          defaultValue: i,
          ref: n
        }), /* @__PURE__ */ Ie("div", {
          style: {
            width: 600,
            height: 600,
            overflow: "auto",
            padding: 10,
            boxSizing: "border-box",
            background: "lightskyblue"
          },
          children: /* @__PURE__ */ Ie(au, {
            code: c
          })
        })]
      })
    })
  });
};
export {
  Xn as Context,
  ao as ContextProvider,
  mo as MonacoEditor,
  au as Preview,
  uu as ReactComponentLive
};
