var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import { Context } from "./context-provider";
var Preview = function (props) {
    var contextValue = useContext(Context);
    var code = props.code, _a = props.scope, scope = _a === void 0 ? contextValue.scope : _a;
    return (_jsx(_Fragment, { children: _jsxs(LiveProvider, __assign({ scope: scope, language: "javascript", code: code }, { children: [_jsx(LiveError, {}), _jsx(LivePreview, {})] })) }));
};
export { Preview };
