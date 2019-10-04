import { useState, useEffect } from 'react'

const isBrowser = typeof window !== 'undefined'

const usePersistentState = (key, initialValue) => {
	const stored = isBrowser ? localStorage?.getItem(key) : null
	const [state, setState] = useState(stored || initialValue)

	useEffect(() => {
		if (!isBrowser) return
		localStorage?.setItem(key, state)
	}, [key, state])

	return [state, setState]
}

export default usePersistentState
