import React, { createContext } from 'react'
import locales from '../../content/i18n'

const Context = createContext()

export const useContext = () => React.useContext(Context)

export const AppProvider = ({ locale, children }) => (
	<Context.Provider value={{ locales, locale }}>{children}</Context.Provider>
)
