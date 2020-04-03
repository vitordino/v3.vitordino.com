import React from 'react'
import styled, { css } from 'styled-components'

import Portal from '~/components/Portal'
import ScrollLock from '~/components/ScrollLock'

const Wrapper = styled.div`
	display: block;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
	opacity: 0;
	pointer-events: none;
	${({ isOpen }) =>
		isOpen &&
		css`
			opacity: 1;
			pointer-events: auto;
		`}
`

const Backdrop = styled.div`
	background: #ff00000f;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`

const ContactModal = ({ isOpen, onClose }) => {
	return (
		<Portal>
			{isOpen && <ScrollLock />}
			<Wrapper isOpen={isOpen}>
				<Backdrop onClick={onClose} />
				<div>content here</div>
			</Wrapper>
		</Portal>
	)
}

export default ContactModal
