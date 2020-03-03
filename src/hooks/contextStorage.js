import React, { createContext, useContext, useState, useEffect } from 'react'

const noop = () => ({})

const hasStorage = typeof localStorage !== 'undefined'
const defaultStorage = {
	getItem: key => (hasStorage ? localStorage.getItem(key) : null),
	setItem: (key, value) => {
		if (hasStorage) localStorage.setItem(key, value)
	},
}

const createStorage = (
	key,
	fallbackValue,
	parse,
	stringify,
	storage = defaultStorage,
) => {
	const storedValue = JSON.parse(storage.getItem(key) || 'null', parse)
	const initialValue = storedValue != null ? storedValue : fallbackValue

	const ValueContext = createContext(initialValue)
	const SetterContext = createContext(noop)
	const useStorage = () => [useContext(ValueContext), useContext(SetterContext)]

	const Provider = ({ children }) => {
		const [value, setValue] = useState(initialValue)

		useEffect(() => {
			storage.setItem(key, JSON.stringify(value, stringify))
		}, [value])

		return (
			<ValueContext.Provider value={value}>
				<SetterContext.Provider value={setValue}>
					{children}
				</SetterContext.Provider>
			</ValueContext.Provider>
		)
	}

	return [Provider, useStorage]
}

export default createStorage
