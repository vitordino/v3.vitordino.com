import { useState } from 'react'

const usePersistentState = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(error)
			return initialValue
		}
	})

	const setValue = v => {
		try {
			const valueToStore = v instanceof Function ? v(storedValue) : v
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error(error)
		}
	}

	return [storedValue, setValue]
}

export default usePersistentState
