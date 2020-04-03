import React from 'react'
import styled, { css } from 'styled-components'

import Portal from '~/components/Portal'
import ScrollLock from '~/components/ScrollLock'
import Container from '~/components/Container'
import Grid from '~/components/Grid'
import Spacer from '~/components/Spacer'
import Text from '~/components/Text'

const Wrapper = styled.div`
	display: block;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 100;
	pointer-events: none;
	${({ isOpen }) =>
		isOpen &&
		css`
			pointer-events: auto;
		`}
`

const Backdrop = styled.div`
	background: var(--color-base03);
	opacity: 0;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	transition: 0.25s opacity 0.25rem;
	cursor: pointer;
	${({ isOpen }) =>
		isOpen &&
		css`
			opacity: 0.88;
			transition: 0.25s opacity;
		`}
`

const Inner = styled.div`
	position: relative;
	background: var(--color-base00);
	border-radius: 0 0 0.5rem 0.5rem;
	transform: translateY(-150%);
	transition: 0.25s transform 0;
	${({ isOpen }) =>
		isOpen &&
		css`
			transform: translateY(0);
			transition: 0.25s transform 0.125s;
		`}
	&:before {
		content: '';
		position: absolute;
		border-radius: 0 0 0.5rem 0.5rem;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-shadow: 0 0.25rem 4rem 2px rgba(0, 0, 0, 0.44);
		opacity: 0;
		transition: 0 opacity 0.5s;
		${({ isOpen }) =>
			isOpen &&
			css`
				opacity: 1;
				transition: 0.25s opacity 0;
			`}
	}
`

const ContactModal = ({ isOpen, onClose }) => {
	return (
		<Portal>
			{isOpen && <ScrollLock />}
			<Wrapper isOpen={isOpen}>
				<Backdrop isOpen={isOpen} onClick={onClose} />
				<Container>
					<Grid.Row style={{ justifyContent: 'center' }}>
						<Grid.Column xs={16} sm={14} md={12} lg={10} xg={8}>
							<Inner isOpen={isOpen}>
								<Grid.Row style={{ justifyContent: 'center' }}>
									<Grid.Column
										xs={14}
										sm={(12 * 16) / 14}
										md={(10 * 16) / 12}
										lg={(8 * 16) / 10}
										xg={12}
									>
										<Spacer.V xs={1} sm={1.5} md={2} />
										<Text xs={1} md={2} weight={500}>
											Hey there 👋
										</Text>
										<Spacer.V xs={2} />
									</Grid.Column>
								</Grid.Row>
							</Inner>
						</Grid.Column>
					</Grid.Row>
				</Container>
			</Wrapper>
		</Portal>
	)
}

export default ContactModal
