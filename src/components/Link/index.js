import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import useStore from '@/store'

/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/button-has-type */
const Link = ({ to, children, className, style, target, ...p }) => {
	const { locales, locale } = useStore(s => ({
		locales: s.locales,
		locale: s.locale,
	}))

	const href = (to || {}).pathname || typeof to === 'string' ? to : null
	const props = { className, style, children, target }

	const isIndex = href === '/'
	const localized =
		!locales[locale] || locales[locale].default
			? href
			: `${locales[locale].path}${isIndex ? '' : `${href}`}`

	if (p.onClick || p.type)
		return <button type={p.type || 'button'} {...p} {...props} />
	if (/^[./]/.test(href)) return <GatsbyLink {...props} to={localized} />
	if (/^[.#]/.test(href)) return <a {...p} {...props} href={href} />
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

export default Link
