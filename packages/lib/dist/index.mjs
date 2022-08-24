// src/context-provider.tsx
import React, { useMemo } from "react";
import TomorrowNightBlue from "monaco-themes/themes/Tomorrow-Night-Blue.json";
var defaultContextValue = {
  scope: {},
  theme: TomorrowNightBlue
};
var Context = React.createContext(defaultContextValue);
var ContextProvider = (props) => {
  const { theme, scope } = props;
  const contextValue = useMemo(() => {
    return {
      scope: scope || defaultContextValue.scope,
      theme: theme || defaultContextValue.theme
    };
  }, [scope, theme]);
  return /* @__PURE__ */ React.createElement(Context.Provider, {
    value: contextValue
  }, props.children);
};

// src/monaco-editor.tsx
import React2, {
  useRef,
  useContext,
  useEffect,
  useImperativeHandle,
  forwardRef
} from "react";
import * as monaco2 from "monaco-editor";

// src/userWorker.ts
import * as monaco from "monaco-editor";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker();
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker();
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker();
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker();
    }
    return new editorWorker();
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
var MonacoEditor = forwardRef((props, ref) => {
  const contextValue = useContext(Context);
  const {
    defaultValue = "",
    editorOptions,
    theme = contextValue.theme,
    ...restProps
  } = props;
  const editor2 = useRef(null);
  const monacoEl = useRef(null);
  useImperativeHandle(ref, () => ({
    get editor() {
      return editor2.current;
    }
  }));
  useEffect(() => {
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
  return /* @__PURE__ */ React2.createElement("div", {
    style: { width: 600, height: 600 },
    ...restProps,
    ref: monacoEl
  });
});

// src/preview.tsx
import React3, { useContext as useContext2 } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
var Preview = (props) => {
  const contextValue = useContext2(Context);
  const {
    code,
    scope = contextValue.scope,
    ...restProps
  } = props;
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("div", {
    ...restProps
  }, /* @__PURE__ */ React3.createElement(LiveProvider, {
    scope,
    language: "javascript",
    code
  }, /* @__PURE__ */ React3.createElement(LiveError, null), /* @__PURE__ */ React3.createElement(LivePreview, null))));
};

// src/component-live.tsx
import React4, { useEffect as useEffect2, useRef as useRef2, useState, useContext as useContext3 } from "react";
var ReactComponentLive = (props) => {
  const monacoEditor = useRef2(null);
  const contextValue = useContext3(Context);
  const scope = contextValue.scope;
  const { defaultValue } = props;
  const [code, setCode] = useState("");
  useEffect2(() => {
    if (monacoEditor.current) {
      const editor2 = monacoEditor.current.editor;
      editor2.onDidBlurEditorText(() => {
        setCode(editor2.getValue());
      });
      setCode(monacoEditor.current.editor.getValue());
    }
  }, [monacoEditor]);
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, /* @__PURE__ */ React4.createElement(ContextProvider, {
    scope
  }, /* @__PURE__ */ React4.createElement("div", {
    style: {
      display: "flex"
    }
  }, /* @__PURE__ */ React4.createElement(MonacoEditor, {
    defaultValue,
    ref: monacoEditor
  }), /* @__PURE__ */ React4.createElement("div", {
    style: {
      width: 600,
      height: 600,
      overflow: "auto",
      padding: 10,
      boxSizing: "border-box",
      background: "lightskyblue"
    }
  }, /* @__PURE__ */ React4.createElement(Preview, {
    code
  })))));
};
export {
  Context,
  ContextProvider,
  MonacoEditor,
  Preview,
  ReactComponentLive
};
//# sourceMappingURL=index.mjs.map