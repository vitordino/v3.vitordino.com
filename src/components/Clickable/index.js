import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import useLocale from '~/store/locale'

/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/button-has-type */

const onSearchClick = url => e => {
	e.preventDefault()
	return navigate(url)
}

const getLocalizedPath = ({ locales, locale, href }) => {
	const url = href?.replace(/^\/|\/$/g, '')
	if (url.startsWith('?')) return url
	const isIndex = href === '/'
	return !locales[locale] || locales[locale].default
		? url
		: `${locales[locale].path}${isIndex ? '' : `${url}`}`
}

const Clickable = ({ to, children, className, style, target, ...p }) => {
	const { locales, locale } = useLocale()
	const props = { className, style, children, target }

	if (p.onClick || p.type)
		return <button type={p.type || 'button'} {...p} {...props} />

	const href = (to || {}).pathname || typeof to === 'string' ? to : null
	const localized = getLocalizedPath({ locales, locale, href })

	if (/^[.?]/.test(href))
		return <a {...props} href={localized} onClick={onSearchClick(localized)} />
	if (/^[.#]/.test(href)) return <Link {...p} {...props} href={href} />
	if (/^[./]/.test(href)) return <Link {...props} to={localized} />
	if (/^[.http]/.test(href))
		return (
			<a
				{...p}
				{...props}
				href={href}
				target='_blank'
				rel='noopener noreferrer'
			/>
		)
	return <a {...p} {...props} href={href} />
}
/* eslint-enable react/button-has-type */
/* eslint-enable jsx-a11y/anchor-has-content */

export default Clickable
