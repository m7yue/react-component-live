import te, { useMemo as pr, forwardRef as mr, useContext as ne, useRef as ee, useImperativeHandle as hr, useEffect as je, useState as br } from "react";
import * as M from "monaco-editor";
import { LiveProvider as kr, LiveError as yr, LivePreview as Er } from "react-live";
const Rr = "vs-dark", _r = !0, wr = [
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
], Tr = {
  "editor.foreground": "#FFFFFF",
  "editor.background": "#002451",
  "editor.selectionBackground": "#003F8E",
  "editor.lineHighlightBackground": "#00346E",
  "editorCursor.foreground": "#FFFFFF",
  "editorWhitespace.foreground": "#404F7D"
}, xr = {
  base: Rr,
  inherit: _r,
  rules: wr,
  colors: Tr
};
var B = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Cr() {
  if (Pe)
    return A;
  Pe = 1;
  var d = te, i = Symbol.for("react.element"), k = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, E = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(v, c, _) {
    var h, w = {}, O = null, I = null;
    _ !== void 0 && (O = "" + _), c.key !== void 0 && (O = "" + c.key), c.ref !== void 0 && (I = c.ref);
    for (h in c)
      m.call(c, h) && !C.hasOwnProperty(h) && (w[h] = c[h]);
    if (v && v.defaultProps)
      for (h in c = v.defaultProps, c)
        w[h] === void 0 && (w[h] = c[h]);
    return { $$typeof: i, type: v, key: O, ref: I, props: w, _owner: E.current };
  }
  return A.Fragment = k, A.jsx = R, A.jsxs = R, A;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Or() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var d = te, i = Symbol.for("react.element"), k = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), v = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), oe = Symbol.iterator, We = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = oe && e[oe] || e[We];
      return typeof r == "function" ? r : null;
    }
    var S = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        $e("error", e, t);
      }
    }
    function $e(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, f = n.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var u = t.map(function(a) {
          return String(a);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, Le = !1, Ve = !1, Ye = !1, Ne = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === C || Ne || e === E || e === _ || e === h || Ye || e === I || Ie || Le || Ve || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === w || e.$$typeof === R || e.$$typeof === v || e.$$typeof === c || e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Me(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case k:
          return "Portal";
        case C:
          return "Profiler";
        case E:
          return "StrictMode";
        case _:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return fe(r) + ".Consumer";
          case R:
            var t = e;
            return fe(t._context) + ".Provider";
          case c:
            return Me(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : T(e.type) || "Memo";
          case O: {
            var f = e, u = f._payload, a = f._init;
            try {
              return T(a(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, D = 0, ie, ue, se, ce, le, de, ve;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Be() {
      {
        if (D === 0) {
          ie = console.log, ue = console.info, se = console.warn, ce = console.error, le = console.group, de = console.groupCollapsed, ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function ze() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ie
            }),
            info: P({}, e, {
              value: ue
            }),
            warn: P({}, e, {
              value: se
            }),
            error: P({}, e, {
              value: ce
            }),
            group: P({}, e, {
              value: le
            }),
            groupCollapsed: P({}, e, {
              value: de
            }),
            groupEnd: P({}, e, {
              value: ve
            })
          });
        }
        D < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = S.ReactCurrentDispatcher, J;
    function L(e, r, t) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (f) {
            var n = f.stack.trim().match(/\n( *(at )?)/);
            J = n && n[1] || "";
          }
        return `
` + J + e;
      }
    }
    var G = !1, V;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new qe();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = q.current, q.current = null, Be();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (x) {
              n = x;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (x) {
              n = x;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            n = x;
          }
          e();
        }
      } catch (x) {
        if (x && n && typeof x.stack == "string") {
          for (var o = x.stack.split(`
`), p = n.stack.split(`
`), s = o.length - 1, l = p.length - 1; s >= 1 && l >= 0 && o[s] !== p[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (o[s] !== p[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || o[s] !== p[l]) {
                    var b = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, b), b;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = u, ze(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", Oe = F ? L(F) : "";
      return typeof e == "function" && V.set(e, Oe), Oe;
    }
    function Je(e, r, t) {
      return pe(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ge(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case _:
          return L("Suspense");
        case h:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Je(e.render);
          case w:
            return Y(e.type, r, t);
          case O: {
            var n = e, f = n._payload, u = n._init;
            try {
              return Y(u(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var N = Object.prototype.hasOwnProperty, me = {}, he = S.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function He(e, r, t, n, f) {
      {
        var u = Function.call.bind(N);
        for (var a in e)
          if (u(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && (U(f), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), U(null)), o instanceof Error && !(o.message in me) && (me[o.message] = !0, U(f), g("Failed %s type: %s", t, o.message), U(null));
          }
      }
    }
    var Ke = Array.isArray;
    function H(e) {
      return Ke(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ke(e) {
      if (Ze(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), be(e);
    }
    var W = S.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Ee, K;
    K = {};
    function er(e) {
      if (N.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = T(W.current.type);
        K[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(W.current.type), e.ref), K[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function or(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, n, f, u, a) {
      var o = {
        $$typeof: i,
        type: e,
        key: r,
        ref: t,
        props: a,
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function fr(e, r, t, n, f) {
      {
        var u, a = {}, o = null, p = null;
        t !== void 0 && (ke(t), o = "" + t), rr(r) && (ke(r.key), o = "" + r.key), er(r) && (p = r.ref, tr(r, f));
        for (u in r)
          N.call(r, u) && !Qe.hasOwnProperty(u) && (a[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            a[u] === void 0 && (a[u] = s[u]);
        }
        if (o || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && nr(a, l), p && or(a, l);
        }
        return ar(e, o, p, f, n, W.current, a);
      }
    }
    var X = S.ReactCurrentOwner, Re = S.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function _e() {
      {
        if (X.current) {
          var e = T(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var we = {};
    function ur(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ur(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== X.current && (n = " It was passed a child from " + T(e._owner.type) + "."), j(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), j(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && Te(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Ae(e);
          if (typeof f == "function" && f !== e.entries)
            for (var u = f.call(e), a; !(a = u.next()).done; )
              Q(a.value) && Te(a.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = T(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = T(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            j(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Ce(e, r, t, n, f, u) {
      {
        var a = Ue(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ir(f);
          p ? o += p : o += _e();
          var s;
          e === null ? s = "null" : H(e) ? s = "array" : e !== void 0 && e.$$typeof === i ? (s = "<" + (T(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var l = fr(e, r, t, f, u);
        if (l == null)
          return l;
        if (a) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (H(b)) {
                for (var F = 0; F < b.length; F++)
                  xe(b[F], e);
                Object.freeze && Object.freeze(b);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(b, e);
        }
        return e === m ? cr(l) : sr(l), l;
      }
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function dr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var vr = dr, gr = lr;
    $.Fragment = m, $.jsx = vr, $.jsxs = gr;
  }()), $;
}
(function(d) {
  process.env.NODE_ENV === "production" ? d.exports = Cr() : d.exports = Or();
})(B);
const Fe = B.exports.Fragment, y = B.exports.jsx, De = B.exports.jsxs, re = {
  scope: {},
  theme: xr
}, z = te.createContext(re), Pr = (d) => {
  const {
    theme: i,
    scope: k
  } = d, m = pr(() => ({
    scope: k || re.scope,
    theme: i || re.theme
  }), [k, i]);
  return /* @__PURE__ */ y(z.Provider, {
    value: m,
    children: d.children
  });
};
function Sr() {
  return new Worker("" + new URL("assets/editor.worker.55353356.js", import.meta.url).href);
}
function jr() {
  return new Worker("" + new URL("assets/json.worker.2be2570f.js", import.meta.url).href);
}
function Fr() {
  return new Worker("" + new URL("assets/css.worker.1bba75ea.js", import.meta.url).href);
}
function Dr() {
  return new Worker("" + new URL("assets/html.worker.3376e5b8.js", import.meta.url).href);
}
function Wr() {
  return new Worker("" + new URL("assets/ts.worker.9acd5107.js", import.meta.url).href);
}
self.MonacoEnvironment = {
  getWorker(d, i) {
    return i === "json" ? new jr() : i === "css" || i === "scss" || i === "less" ? new Fr() : i === "html" || i === "handlebars" || i === "razor" ? new Dr() : i === "typescript" || i === "javascript" ? new Wr() : new Sr();
  }
};
M.languages.typescript.typescriptDefaults.setEagerModelSync(!0);
const Ar = {
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
}, $r = mr((d, i) => {
  const k = ne(z), {
    defaultValue: m = "",
    editorOptions: E,
    theme: C = k.theme,
    ...R
  } = d, v = ee(null), c = ee(null);
  return hr(i, () => ({
    get editor() {
      return v.current;
    }
  })), je(() => (c && !v.current && (M.editor.defineTheme("tomorrowNightBlue", C), M.editor.setTheme("tomorrowNightBlue"), v.current = M.editor.create(c.current, {
    ...Ar,
    ...E,
    value: m
  })), () => {
    var _;
    return (_ = v.current) == null ? void 0 : _.dispose();
  }), [c]), /* @__PURE__ */ y("div", {
    style: {
      width: 600,
      height: 600
    },
    ...R,
    ref: c
  });
}), Ir = (d) => {
  const i = ne(z), {
    code: k,
    scope: m = i.scope,
    ...E
  } = d;
  return /* @__PURE__ */ y(Fe, {
    children: /* @__PURE__ */ y("div", {
      ...E,
      children: /* @__PURE__ */ De(kr, {
        scope: m,
        language: "javascript",
        code: k,
        children: [/* @__PURE__ */ y(yr, {}), /* @__PURE__ */ y(Er, {})]
      })
    })
  });
}, Yr = (d) => {
  const i = ee(null), m = ne(z).scope, {
    defaultValue: E
  } = d, [C, R] = br("");
  return je(() => {
    if (i.current) {
      const v = i.current.editor;
      v.onDidBlurEditorText(() => {
        R(v.getValue());
      }), R(i.current.editor.getValue());
    }
  }, [i]), /* @__PURE__ */ y(Fe, {
    children: /* @__PURE__ */ y(Pr, {
      scope: m,
      children: /* @__PURE__ */ De("div", {
        style: {
          display: "flex"
        },
        children: [/* @__PURE__ */ y($r, {
          defaultValue: E,
          ref: i
        }), /* @__PURE__ */ y("div", {
          style: {
            width: 600,
            height: 600,
            overflow: "auto",
            padding: 10,
            boxSizing: "border-box",
            background: "lightskyblue"
          },
          children: /* @__PURE__ */ y(Ir, {
            code: C
          })
        })]
      })
    })
  });
};
export {
  z as Context,
  Pr as ContextProvider,
  $r as MonacoEditor,
  Ir as Preview,
  Yr as ReactComponentLive
};
