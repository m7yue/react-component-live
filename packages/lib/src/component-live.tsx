import React, { useEffect, useRef, useState, useContext, FC } from "react";
import { ContextProvider, Context } from './context-provider'
import { MonacoEditor } from './monaco-editor'
import { Preview } from './preview'

export type LiveProps = {
  defaultValue?: string
}

export const ReactComponentLive: FC<LiveProps> = (props) => {
  const monacoEditor = useRef<React.ElementRef<typeof MonacoEditor>>(null);
  const contextValue = useContext(Context);
  const scope = contextValue.scope;
  const { defaultValue } = props

  const [code, setCode] = useState('');

  useEffect(() => {
    if (monacoEditor.current) {
      const editor = monacoEditor.current.editor;
      editor.onDidBlurEditorText(() => {
        setCode(editor.getValue());
      });
      setCode(monacoEditor.current.editor.getValue());
    }
  }, [monacoEditor]);

  return (
    <>
      <ContextProvider scope={scope}>
        <MonacoEditor
          defaultValue={defaultValue}
          ref={monacoEditor}
        />

        <Preview code={code}/>
      </ContextProvider>
    </>
  );
}