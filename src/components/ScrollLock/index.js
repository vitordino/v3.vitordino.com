import { useLayoutEffect } from 'react'

export const useScrollLock = (active = false) => {
	useLayoutEffect(() => {
		if (active) {
			const o = window.getComputedStyle(document.documentElement).overflow
			document.documentElement.style.overflow = 'hidden'
			return () => (document.documentElement.style.overflow = o)
		}
	}, [active])
}

const ScrollLock = ({ active = true }) => {
	useScrollLock(active)
	return null
}

export default ScrollLock
