import React, { useState } from 'react'

const encode = d =>
	Object.entries(d)
		.map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
		.join('&')

export const STATUS = {
	INITIAL: 'INITIAL',
	LOADING: 'LOADING',
	SUCCESS: 'SUCCESS',
	ERROR: 'ERROR',
}

const fetch = typeof window === 'undefined' ? () => ({}) : window?.fetch

const baseFetch = (name, state) =>
	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: encode({ 'form-name': name, ...state }),
	})

const noop = () => ({})

const useNetlifyForm = ({
	name = 'contact',
	state = {},
	onSuccess = noop,
	onError = noop,
}) => {
	const [status, setStatus] = useState(STATUS.INITIAL)

	const handleSubmit = e => {
		e.preventDefault()
		setStatus(STATUS.LOADING)
		baseFetch(name, state)
			.then(x => {
				setStatus(STATUS.SUCCESS)
				onSuccess(x)
			})
			.catch(x => {
				setStatus(STATUS.ERROR)
				onError(x)
			})
	}

	return [handleSubmit, status]
}

export default useNetlifyForm
