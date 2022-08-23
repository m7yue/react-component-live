# react-component-live
a component library for live editor and preview with react-jsx syntax.

## Usage
[参考使用案例](https://github.com/m7yue/react-component-live/blob/main/packages/demo/src/App.tsx)
```ts
import React, { useEffect, useRef, useState, useContext, FC } from "react";
import { ContextProvider, Context, MonacoEditor, Preview } from 'react-component-live'

export const App = () => {
  const defaultCode = `
() => {
  const TestDemo = () => {
    const { useState } = React;
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1)
    const decrease = () => setCount(count - 1)

    return (
      <div>
        <button onClick={increase}> +1 </button>
        <button onClick={decrease}> -1 </button>

        <div>{\`count 值：\${count}\`}</div>
      </div>
    )
  }

  return <TestDemo />
}
  `
  const monacoEditor = useRef<React.ElementRef<typeof MonacoEditor>>(null);
  const contextValue = useContext(Context);
  const scope = contextValue.scope;

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
          defaultValue={defaultCode}
          ref={monacoEditor}
        />

        <Preview code={code}/>
      </ContextProvider>
    </>
  );
}
```

### ContextProvider
全局上下文信息，主要包括 `scope` 和 `theme`.
- 定义 `scope` 信息，例如可以传递引入的组件，在编辑器中直接使用，[参见](https://github.com/FormidableLabs/react-live#how-does-the-scope-work)
- 定义编辑器主题(theme)
```ts
export type ContextValue = {
  scope: LiveProviderProps["scope"];
  theme: monaco.editor.IStandaloneThemeData;
};
```

### MonacoEditor 和 Preview
编辑器和预览区块， 可以通过调整传入样式进行定制化。
#### MonacoEditor
- `defaultValue`: 编辑器默认显示的代码。
- `theme`：如果不想使用 `Provider` 的 `theme`，也可以传入 `theme` 实现独立的主题。
- `editorOptions`：透传 `monaco.editor.IStandaloneEditorConstructionOptions` 参数。
```ts
export type MonacoEditorProps = {
  defaultValue?: string;
  theme?:  monaco.editor.IStandaloneThemeData;
  editorOptions?: editor.IStandaloneEditorConstructionOptions;
} &  ComponentPropsWithRef<'div'>;
```

#### Preview
通过传入 `MonacoEditor` 的 `code`, 得到预览效果。
```ts
export type PreviewProps = {
  code?: string;
  scope?: LiveProviderProps['scope'];
}
```