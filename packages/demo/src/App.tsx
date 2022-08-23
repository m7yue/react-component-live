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

// export const App = () => {
//   const code = `
// () => {
//   const TestDemo = () => {
//     const { useState } = React;
//     const [count, setCount] = useState(0);
//     const increase = () => setCount(count + 1)
//     const decrease = () => setCount(count - 1)

//     return (
//       <div>
//         <button onClick={increase}> +1 </button>
//         <button onClick={decrease}> -1 </button>

//         <div>{\`count 值：\${count}\`}</div>
//       </div>
//     )
//   }

//   return <TestDemo />
// }
//   `
//  return <ReactComponentLive defaultValue={code}/>
// }