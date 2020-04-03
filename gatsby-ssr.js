import fs from 'fs'
import Terser from 'terser'
import React from 'react'
import GatsbyLayout from '@/components/Layout/Gatsby'

const { code: noflash } = Terser.minify(fs.readFileSync('./noflash.js', 'utf8'))

export const wrapPageElement = ({ element, props }) => (
	<GatsbyLayout {...props}>{element}</GatsbyLayout>
)

export const onRenderBody = ({ setPreBodyComponents, setPostBodyComponents }) => {
	setPreBodyComponents([
		<script key='noflash.js' dangerouslySetInnerHTML={{ __html: noflash }} />,
	])
	setPostBodyComponents([
		<div id='portal-root' key='portal-root'/>
	])
}
