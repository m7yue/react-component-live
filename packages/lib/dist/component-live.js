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
import { useEffect, useRef, useState, useContext } from "react";
import { ContextProvider, Context } from './context-provider';
import { MonacoEditor } from './monaco-editor';
import { Preview } from './preview';
export var ReactComponentLive = function (props) {
    var monacoEditor = useRef(null);
    var contextValue = useContext(Context);
    var scope = contextValue.scope;
    var defaultValue = props.defaultValue;
    var _a = useState(''), code = _a[0], setCode = _a[1];
    useEffect(function () {
        if (monacoEditor.current) {
            var editor_1 = monacoEditor.current.editor;
            editor_1.onDidBlurEditorText(function () {
                setCode(editor_1.getValue());
            });
            setCode(monacoEditor.current.editor.getValue());
        }
    }, [monacoEditor]);
    return (_jsx(_Fragment, { children: _jsx(ContextProvider, __assign({ scope: scope }, { children: _jsxs("div", __assign({ style: {
                    display: "flex"
                } }, { children: [_jsx(MonacoEditor, { defaultValue: defaultValue, ref: monacoEditor }), _jsx("div", __assign({ style: {
                            width: 600,
                            height: 600,
                            overflow: "auto",
                            padding: 10,
                            boxSizing: "border-box",
                            background: "lightskyblue"
                        } }, { children: _jsx(Preview, { code: code }) }))] })) })) }));
};
