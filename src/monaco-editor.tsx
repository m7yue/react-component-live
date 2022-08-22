import React, { useRef, useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import * as monaco from 'monaco-editor'
import TomorrowNightBlue from 'monaco-themes/themes/Tomorrow-Night-Blue.json'

import './userWorker';

export const MonacoEditor = forwardRef<{
	get editor(): monaco.editor.IStandaloneCodeEditor
}>((props, ref)  => {
	const editor = useRef<monaco.editor.IStandaloneCodeEditor | null>(null)

	const monacoEl = useRef(null);

	useImperativeHandle(ref, () => ({
		get editor() { return editor.current! }
	}))

	useEffect(() => {
		if (monacoEl && !editor.current) {
			monaco.editor.defineTheme('tomorrowNightBlue', TomorrowNightBlue as monaco.editor.IStandaloneThemeData)
			monaco.editor.setTheme('tomorrowNightBlue')

			editor.current = monaco.editor.create(monacoEl.current!, {
				tabSize: 2,
				lineNumbers: 'off', // 行数信息
				minimap: {
					enabled: false,
					size: 'proportional',
					showSlider: 'mouseover',
				},
				showUnused: true,
				useShadowDOM: true,
				value: `
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
				`,
				language: 'javascript',
			})
		}

		return () => editor.current?.dispose();
	}, [monacoEl]);

	return <div style={{width: 600, height: 600}} ref={monacoEl}></div>;
});