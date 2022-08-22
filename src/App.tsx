import React, { useEffect, useRef, useState } from 'react'
import theme from 'prism-react-renderer/themes/vsDark';
import { MonacoEditor } from './monaco-editor'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

const Comp = () => {
  const [count, setCount] = useState(0)
  const increase = () => setCount(count + 1)
  const decrease = () => setCount(count - 1)

  return (
    <div>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>

      <div>current count: {count}</div>
    </div>
  )
}

function App() {
  const monacoEditor = useRef<React.ElementRef<typeof MonacoEditor>>(null)
  const [code, setCode] = useState('')

  useEffect(() => {
    if (monacoEditor.current) {
      const editor = monacoEditor.current.editor
      editor
      // .onDidChangeModelContent
      // .onDidChangeCursorPosition
      // .onDidChangeCursorSelection
      // .onDidChangeModel
      // .onDidFocusEditorText
      .onDidBlurEditorText // 1
      // .onDidFocusEditorWidget
      // .onDidCompositionEnd
      // .onDidLayoutChange
      
      (
        () => {
        console.log(editor.getValue())
        setCode(editor.getValue())
      })
      setCode(monacoEditor.current.editor.getValue())
    }
  }, [monacoEditor])

  const scope = {
    Comp
  }

  return (
    <>
      <MonacoEditor ref={monacoEditor}/>
      <LiveProvider
        scope={
          scope
        }
        // noInline={true}
        // transformCode={
        //   (code) => {
        //     console.log(code)
        //     return code
        //   }
        // }
        // transpileOptions={{
        //   target: {
        //     chrome: 61
        //   },
        //   transforms: {
        //     arrow: true,
        //     classes: true,
        //     computedProperty: true,
        //     conciseMethodProperty: true,
        //     dangerousForOf: true,
        //     dangerousTaggedTemplateString: true,
        //     defaultParameter: true,
        //     destructuring: true,
        //     exponentiation: true,
        //     forOf: true,
        //     generator: true,
        //     letConst: true,
        //     modules: true,
        //     numericLiteral: true,
        //     objectRestSpread: true,
        //     parameterDestructuring: true,
        //     reservedProperties: true,
        //     spreadRest: true,
        //     templateString: true,
        //     trailingFunctionCommas: true,
        //     unicodeRegExp: true,
        //   }
        // }}
        language={'javascript'}
        code={code}
        theme={theme}
      >
        {/* <LiveEditor/>  */}
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </>
  )
}

export default App
