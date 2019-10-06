import { useState } from 'react'

const isBrowser = typeof window !== 'undefined'

const usePersistentState = (key, initialValue) => {
	const [state, setInnerState] = useState(() => {
		try {
			const item = isBrowser && window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(error)
			return initialValue
		}
	})

	const setState = v => {
		try {
			const valueToStore = v instanceof Function ? v(state) : v
			setInnerState(valueToStore)
			if (isBrowser) {
				return window.localStorage.setItem(key, JSON.stringify(valueToStore))
			}
		} catch (error) {
			console.error(error)
		}
	}

	return [state, setState]
}

export default usePersistentState
