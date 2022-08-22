import React from 'react'
import { ReactComponentLive } from './src'

export const App = () => <ReactComponentLive defaultValue='() => {
	const TestDemo = () => {
			const { useState } = React;
			const [count, setCount] = useState(0);
			const increase = () => setCount(count + 1)
			const decrease = () => setCount(count - 1)

			return (
				<div>
						<button onClick={increase}> +1 </button>
						<button onClick={decrease}> -1 </button>

						<div>{`count 值：${count}`}</div>
				</div>
			)
	}

	return <TestDemo />
}'/>