import fs from 'fs'
import React from 'react'
import GatsbyLayout from '@/components/Layout/Gatsby'

const noflash = fs.readFileSync('./noflash.js')

export const wrapPageElement = ({ element, props }) => (
	<GatsbyLayout {...props}>{element}</GatsbyLayout>
)

export const onRenderBody = ({ setPreBodyComponents }) =>
	setPreBodyComponents([
		<script key='noflash.js' dangerouslySetInnerHTML={{ __html: noflash }} />,
	])
