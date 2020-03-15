// adapted from: https://github.com/donavon/use-dark-mode

// eslint-disable-next-line no-unused-expressions
!(function() {
	var storageKey = 'theme:color-mode'

	function setDarkModeInDom(darkMode) {
		document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
	}

	function setDarkModeInLocalStorage(darkMode) {
		const colorMode = JSON.stringify(darkMode ? 'dark' : 'light')
		localStorage.setItem(storageKey, colorMode)
	}

	function setTheme(theme) {
		var isDarkMode = theme === 'dark'
		setDarkModeInDom(isDarkMode)
		setDarkModeInLocalStorage(isDarkMode)
	}

	var preferDarkQuery = '(prefers-color-scheme: dark)'
	var mql = window.matchMedia(preferDarkQuery)
	var supportsColorSchemeQuery = mql.media === preferDarkQuery
	var localStorageTheme = null
	try {
		localStorageTheme = localStorage.getItem(storageKey)
	} catch (err) {}
	var localStorageExists = localStorageTheme !== null
	if (localStorageExists) {
		localStorageTheme = JSON.parse(localStorageTheme)
	}

	// Determine the source of truth
	if (localStorageExists) {
		// source of truth from localStorage
		setDarkModeInDom(localStorageTheme)
	} else if (supportsColorSchemeQuery) {
		// source of truth from system
		setDarkModeInDom(mql.matches)
		setDarkModeInLocalStorage(mql.matches)
	} else {
		// source of truth from document.body
		var isDarkMode = document.documentElement.dataset.theme === 'dark'
		setDarkModeInLocalStorage(isDarkMode)
	}

	window.__setTheme = setTheme
})()
