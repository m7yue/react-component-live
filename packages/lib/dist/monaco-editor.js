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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useContext, useEffect, useImperativeHandle, forwardRef, } from "react";
import * as monaco from "monaco-editor";
import "./userWorker";
import { Context } from "./context-provider";
var defaultEditorOptions = {
    tabSize: 2,
    lineNumbers: "off",
    minimap: {
        enabled: false,
        size: "proportional",
        showSlider: "mouseover",
    },
    showUnused: true,
    useShadowDOM: true,
    language: "javascript",
};
export var MonacoEditor = forwardRef(function (props, ref) {
    var contextValue = useContext(Context);
    var _a = props.defaultValue, defaultValue = _a === void 0 ? '' : _a, editorOptions = props.editorOptions, _b = props.theme, theme = _b === void 0 ? contextValue.theme : _b, restProps = __rest(props, ["defaultValue", "editorOptions", "theme"]);
    var editor = useRef(null);
    var monacoEl = useRef(null);
    useImperativeHandle(ref, function () { return ({
        get editor() {
            return editor.current;
        },
    }); });
    useEffect(function () {
        if (monacoEl && !editor.current) {
            monaco.editor.defineTheme("tomorrowNightBlue", theme);
            monaco.editor.setTheme("tomorrowNightBlue");
            editor.current = monaco.editor.create(monacoEl.current, __assign(__assign(__assign({}, defaultEditorOptions), editorOptions), { value: defaultValue }));
        }
        return function () { var _a; return (_a = editor.current) === null || _a === void 0 ? void 0 : _a.dispose(); };
    }, [monacoEl]);
    return _jsx("div", __assign({ style: { width: 600, height: 600 } }, restProps, { ref: monacoEl }));
});
