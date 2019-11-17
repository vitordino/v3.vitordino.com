import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'

const CodeBlock = ({ children }) => {
	const language = children.props.className.replace(/language-/, '')
	const code = children.props.children
	return (
		<Highlight {...defaultProps} code={code} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={className}>
					{tokens.slice(0, -1).map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	)
}

export default CodeBlock
