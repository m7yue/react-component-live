"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Context: () => Context,
  ContextProvider: () => ContextProvider,
  MonacoEditor: () => MonacoEditor,
  Preview: () => Preview,
  ReactComponentLive: () => ReactComponentLive
});
module.exports = __toCommonJS(src_exports);

// src/context-provider.tsx
var import_react = __toESM(require("react"));
var import_Tomorrow_Night_Blue = __toESM(require("monaco-themes/themes/Tomorrow-Night-Blue.json"));
var defaultContextValue = {
  scope: {},
  theme: import_Tomorrow_Night_Blue.default
};
var Context = import_react.default.createContext(defaultContextValue);
var ContextProvider = (props) => {
  const { theme, scope } = props;
  const contextValue = (0, import_react.useMemo)(() => {
    return {
      scope: scope || defaultContextValue.scope,
      theme: theme || defaultContextValue.theme
    };
  }, [scope, theme]);
  return /* @__PURE__ */ import_react.default.createElement(Context.Provider, {
    value: contextValue
  }, props.children);
};

// src/monaco-editor.tsx
var import_react2 = __toESM(require("react"));
var monaco2 = __toESM(require("monaco-editor"));

// src/userWorker.ts
var monaco = __toESM(require("monaco-editor"));
var import_editor = __toESM(require("monaco-editor/esm/vs/editor/editor.worker?worker"));
var import_json = __toESM(require("monaco-editor/esm/vs/language/json/json.worker?worker"));
var import_css = __toESM(require("monaco-editor/esm/vs/language/css/css.worker?worker"));
var import_html = __toESM(require("monaco-editor/esm/vs/language/html/html.worker?worker"));
var import_ts = __toESM(require("monaco-editor/esm/vs/language/typescript/ts.worker?worker"));
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new import_json.default();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new import_css.default();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new import_html.default();
    }
    if (label === "typescript" || label === "javascript") {
      return new import_ts.default();
    }
    return new import_editor.default();
  }
};
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

// src/monaco-editor.tsx
var defaultEditorOptions = {
  tabSize: 2,
  lineNumbers: "off",
  minimap: {
    enabled: false,
    size: "proportional",
    showSlider: "mouseover"
  },
  showUnused: true,
  useShadowDOM: true,
  language: "javascript"
};
var MonacoEditor = (0, import_react2.forwardRef)((props, ref) => {
  const contextValue = (0, import_react2.useContext)(Context);
  const {
    defaultValue = "",
    editorOptions,
    theme = contextValue.theme,
    ...restProps
  } = props;
  const editor2 = (0, import_react2.useRef)(null);
  const monacoEl = (0, import_react2.useRef)(null);
  (0, import_react2.useImperativeHandle)(ref, () => ({
    get editor() {
      return editor2.current;
    }
  }));
  (0, import_react2.useEffect)(() => {
    if (monacoEl && !editor2.current) {
      monaco2.editor.defineTheme("tomorrowNightBlue", theme);
      monaco2.editor.setTheme("tomorrowNightBlue");
      editor2.current = monaco2.editor.create(monacoEl.current, {
        ...defaultEditorOptions,
        ...editorOptions,
        value: defaultValue
      });
    }
    return () => {
      var _a;
      return (_a = editor2.current) == null ? void 0 : _a.dispose();
    };
  }, [monacoEl]);
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    style: { width: 600, height: 600 },
    ...restProps,
    ref: monacoEl
  });
});

// src/preview.tsx
var import_react3 = __toESM(require("react"));
var import_react_live = require("react-live");
var Preview = (props) => {
  const contextValue = (0, import_react3.useContext)(Context);
  const {
    code,
    scope = contextValue.scope,
    ...restProps
  } = props;
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("div", {
    ...restProps
  }, /* @__PURE__ */ import_react3.default.createElement(import_react_live.LiveProvider, {
    scope,
    language: "javascript",
    code
  }, /* @__PURE__ */ import_react3.default.createElement(import_react_live.LiveError, null), /* @__PURE__ */ import_react3.default.createElement(import_react_live.LivePreview, null))));
};

// src/component-live.tsx
var import_react4 = __toESM(require("react"));
var ReactComponentLive = (props) => {
  const monacoEditor = (0, import_react4.useRef)(null);
  const contextValue = (0, import_react4.useContext)(Context);
  const scope = contextValue.scope;
  const { defaultValue } = props;
  const [code, setCode] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    if (monacoEditor.current) {
      const editor2 = monacoEditor.current.editor;
      editor2.onDidBlurEditorText(() => {
        setCode(editor2.getValue());
      });
      setCode(monacoEditor.current.editor.getValue());
    }
  }, [monacoEditor]);
  return /* @__PURE__ */ import_react4.default.createElement(import_react4.default.Fragment, null, /* @__PURE__ */ import_react4.default.createElement(ContextProvider, {
    scope
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /* @__PURE__ */ import_react4.default.createElement(MonacoEditor, {
    defaultValue,
    ref: monacoEditor
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    style: {
      width: 600,
      height: 600,
      overflow: "auto",
      padding: 10,
      boxSizing: "border-box",
      background: "lightskyblue"
    }
  }, /* @__PURE__ */ import_react4.default.createElement(Preview, {
    code
  })))));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Context,
  ContextProvider,
  MonacoEditor,
  Preview,
  ReactComponentLive
});
//# sourceMappingURL=index.js.map