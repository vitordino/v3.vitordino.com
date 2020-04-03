import { useLayoutEffect } from 'react'

export const useScrollLock = (condition = false) => {
	useLayoutEffect(() => {
		if (condition) {
			const original = window.getComputedStyle(document.documentElement)
				.overflow
			document.documentElement.style.overflow = 'hidden'
			return () => (document.documentElement.style.overflow = original)
		}
	}, [condition])
}

const ScrollLock = () => {
	useScrollLock()
	return null
}

export default ScrollLock
