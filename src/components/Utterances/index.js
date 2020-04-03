import React, {
	useRef,
	useLayoutEffect,
	useEffect,
	memo,
	useCallback,
} from 'react'

import { useColorMode, useGridMode } from '~/store'

const removeChilds = node => {
	let last
	while ((last = node.lastChild)) node.removeChild(last)
}

const Utterances = memo(({ uid, theme }) => {
	const ref = useRef(null)

	/* eslint-disable */
	useLayoutEffect(() => {
		if (!ref.current) return
		removeChilds(ref.current)
		const el = document.createElement('script')
		el.src = 'https://utteranc.es/client.js'
		el.async = true
		el.crossOrigin = 'anonymous'
		el.setAttribute('repo', 'vitordino/vitordino.com')
		el.setAttribute('issue-term', uid)
		el.setAttribute('label', 'comments 💬')
		el.setAttribute('theme', theme)
		ref.current.appendChild(el)
	}, [uid])
	/* eslint-enable */

	const message = { type: 'set-theme', theme }

	/* eslint-disable */
	useEffect(() => {
		const iframe = document.querySelector('.utterances-frame')
		if (iframe) {
			iframe.contentWindow.postMessage(message, 'https://utteranc.es')
		}
	}, [theme, uid])
	/* eslint-enable */

	return <section ref={ref} />
})

const withColorMode = Component => props => {
	const colorMode = useColorMode()
	const theme = colorMode.includes('dark') ? 'photon-dark' : 'github-light'
	return <Component theme={theme} {...props} />
}

export default withColorMode(Utterances)
