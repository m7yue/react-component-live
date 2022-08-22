import React, {
  useRef,
  useContext,
  useEffect,
  useImperativeHandle,
  forwardRef,
  ComponentPropsWithRef,
} from "react";
import * as monaco from "monaco-editor";
import { type editor } from "monaco-editor";

import "./userWorker";

import { Context } from "./context-provider";

type IStandaloneEditorConstructionOptions =
  editor.IStandaloneEditorConstructionOptions;

export type MonacoEditorProps = {
  defaultValue?: string;
  theme?:  monaco.editor.IStandaloneThemeData;
  editorOptions?: editor.IStandaloneEditorConstructionOptions;
} &  ComponentPropsWithRef<'div'>;

const defaultEditorOptions: IStandaloneEditorConstructionOptions = {
  tabSize: 2,
  lineNumbers: "off", // 行数信息
  minimap: {
    enabled: false,
    size: "proportional",
    showSlider: "mouseover",
  },
  showUnused: true,
  useShadowDOM: true,
  language: "javascript",
};

export const MonacoEditor = forwardRef<
  {
    get editor(): monaco.editor.IStandaloneCodeEditor;
  },
  MonacoEditorProps
>((props, ref) => {
  const contextValue = useContext(Context);

  const {
    defaultValue = '',
    editorOptions,
    theme = contextValue.theme,
    ...restProps
  } = props;

  const editor = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const monacoEl = useRef(null);
  
  useImperativeHandle(ref, () => ({
    get editor() {
      return editor.current!;
    },
  }));

  useEffect(() => {
    if (monacoEl && !editor.current) {
      monaco.editor.defineTheme("tomorrowNightBlue", theme);
      monaco.editor.setTheme("tomorrowNightBlue");

      editor.current = monaco.editor.create(monacoEl.current!, {
        ...defaultEditorOptions,
        ...editorOptions,
        value: defaultValue,
      });
    }

    return () => editor.current?.dispose();
  }, [monacoEl]);

  return <div style={{ width: 600, height: 600 } } {...restProps} ref={monacoEl}></div>;
});
