import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import TextArea from 'react-textarea-autosize'

import Text from '~/components/Text'

const Wrapper = styled.div`
	position: relative;
	display: block;
	margin: 2.5rem 0 0.5rem;
	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.44;
			cursor: not-allowed;
		`}
`

const Field = styled.input`
	position: relative;
	appearence: none;
	border-radius: 0;
	resize: vertical;
	min-height: 2.75em;
	background-color: transparent;
	padding: 10px 8px 6px 0;
	display: inline-block;
	width: 100%;
	max-width: 100%;
	border: none;
	border-bottom: 1px solid currentColor;
	transition: 0.3s ease border;
	color: currentColor;
	&:focus,
	&:active,
	&:valid {
		outline: none;
		border-color: var(--color-base66);
	}
	&:invalid {
		border-color: #d0011b;
	}
	&:placeholder-shown {
		border-color: var(--color-base11);
	}
	& + label {
		left: 0;
		display: block;
		width: 100%;
		position: absolute;
		pointer-events: none;
		transition: 0.2s ease all;
		color: var(--color-base66);
		top: -1em;
		font-size: 14px;
		font-weight: 400;
	}
	&[required] + label:after {
		content: '*';
		position: absolute;
		right: 0;
		top: 0;
		font-family: sans-serif;
		font-weight: 100;
		font-size: 1.5em;
		line-height: 1.5em;
		color: transparent;
	}
	&:placeholder-shown + label,
	&.placeholder-shown + label {
		top: 14px;
		font-size: 1rem;
		&:after {
			color: var(--color-base44);
		}
	}
	&:disabled {
		pointer-events: none;
	}
`

const Input = ({
	name,
	label,
	type = 'text',
	textarea = false,
	required,
	disabled,
	...props
}) => (
	<Wrapper disabled={disabled}>
		<Field
			name={name}
			type={type}
			placeholder=' '
			as={textarea ? TextArea : 'input'}
			required={required}
			disabled={disabled}
			{...props}
		/>
		<label for={name}>{label || name}</label>
	</Wrapper>
)

export default Input
