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
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useMemo } from "react";
import TomorrowNightBlue from "monaco-themes/themes/Tomorrow-Night-Blue.json";
var defaultContextValue = {
    scope: {},
    theme: TomorrowNightBlue,
};
export var Context = React.createContext(defaultContextValue);
var ContextProvider = function (props) {
    var theme = props.theme, scope = props.scope;
    var contextValue = useMemo(function () {
        return {
            scope: scope || defaultContextValue.scope,
            theme: theme || defaultContextValue.theme,
        };
    }, [scope, theme]);
    return (_jsx(Context.Provider, __assign({ value: contextValue }, { children: props.children })));
};
export { ContextProvider };
