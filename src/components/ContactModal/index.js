import React, { useState, useEffect, useCallback } from 'react'
import styled, { css } from 'styled-components'

import useNetlifyForm, { STATUS } from '~/hooks/useNetlifyForm'
import Portal from '~/components/Portal'
import ScrollLock from '~/components/ScrollLock'
import Container from '~/components/Container'
import Grid from '~/components/Grid'
import Spacer from '~/components/Spacer'
import Text from '~/components/Text'
import Input from '~/components/Input'
import Button from '~/components/Button'

const Wrapper = styled.form`
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

const Scroll = styled.div`
	overflow-y: auto;
	overflow-x: visible;
	max-height: 100vh;
	padding: 0px 60px 60px;
	margin: -0px -60px -60px;
`

const Inner = styled.div`
	position: relative;
	background: var(--color-base00);
	border-radius: 0 0 0.5rem 0.5rem;
	transform: translateY(-100%);
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

const Form = styled.form`
	position: relative;
	font-family: ${p => p.theme.type.fonts.sans} ;
`

const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const getButtonBackground = status => {
	if (status === STATUS.SUCCESS) return 'success'
	if (status === STATUS.ERROR) return 'error'
	return 'base'
}

const getButtonColor = status => {
	if (status === STATUS.SUCCESS) return 'white'
	if (status === STATUS.ERROR) return 'white'
	return 'base22'
}

const getButtonContent = status => {
	if (status === STATUS.SUCCESS) return 'success'
	if (status === STATUS.ERROR) return 'error'
	if (status === STATUS.LOADING) return 'loading'
	return 'submit'
}

const initialValues = {
	name: '',
	email: '',
	message: '',
}

const ContactModal = ({ isOpen, onClose }) => {
	const [state, setState] = useState(() => initialValues)
	const [handleSubmit, status, reset] = useNetlifyForm({
		name: 'contact',
		state,
	})

	// eslint-ignore-next-line
	const esc = useCallback(e => e.keyCode === 27 && onClose(), [onClose])

	useEffect(() => {
		document.addEventListener('keydown', esc, false)

		return () => {
			document.removeEventListener('keydown', esc, false)
		}
	}, [esc])

	const handleChange = e =>
		setState({ ...state, [e.target.name]: e.target.value })

	const initial = status === STATUS.INITIAL
	const loading = status === STATUS.LOADING
	const success = status === STATUS.SUCCESS
	const error = status === STATUS.ERROR
	const disabled = loading || success

	const getButtonAction = status => e => {
		if (status === STATUS.SUCCESS) {
			onClose()
			reset()
			setState(initialValues)
		}
		if (status === STATUS.ERROR) return reset()
		if (status === STATUS.LOADING) return null
		return null
	}

	return (
		<Portal>
			{isOpen && <ScrollLock />}
			<Wrapper isOpen={isOpen}>
				<Backdrop isOpen={isOpen} onClick={onClose} />
				<Container>
					<Grid.Row style={{ justifyContent: 'center' }}>
						<Grid.Column xs={16} sm={14} md={12} lg={10} xg={8}>
							<Scroll>
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
											<Text xs={1.5} md={2} weight={500}>
												Hey there 👋
											</Text>
											<Form name='contact' handleSubmit={handleSubmit} netlify>
												<Input
													name='name'
													value={state.name}
													onChange={handleChange}
													disabled={disabled}
												/>
												<Input
													name='email'
													type='email'
													value={state.email}
													onChange={handleChange}
													disabled={disabled}
													required
												/>
												<Input
													textarea
													name='message'
													type='message'
													value={state.message}
													onChange={handleChange}
													disabled={disabled}
													required
												/>
												<Spacer.V xs={2} md={3} />
												<Flex>
													<Button
														disabled={loading}
														background='base03'
														onClick={onClose}
													>
														close
													</Button>
													<Button
														disabled={loading}
														type={initial ? 'submit' : 'button'}
														background={getButtonBackground(status)}
														color={getButtonColor(status)}
														weight={500}
														onClick={getButtonAction(status)}
													>
														{getButtonContent(status)}
													</Button>
												</Flex>
											</Form>
											<Spacer.V xs={2} md={3} />
										</Grid.Column>
									</Grid.Row>
								</Inner>
							</Scroll>
						</Grid.Column>
					</Grid.Row>
				</Container>
			</Wrapper>
		</Portal>
	)
}

export default ContactModal
