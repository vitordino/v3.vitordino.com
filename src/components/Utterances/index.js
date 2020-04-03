import React from 'react'

const Utterances = ({ uid }) => (
	<section
		ref={ref => {
			if (!ref) return
			const el = document.createElement('script')
			el.src = 'https://utteranc.es/client.js'
			el.async = true
			el.crossOrigin = 'anonymous'
			el.setAttribute('repo', 'vitordino/vitordino.com')
			el.setAttribute('issue-term', uid)
			el.setAttribute('label', 'comments 💬')
			el.setAttribute('theme', 'github-light')
			ref.appendChild(el)
		}}
	/>
)

export default Utterances
