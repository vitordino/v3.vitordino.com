import React from 'react'
import Img from 'gatsby-image'

const get = img => img?.localFile?.childImageSharp?.fluid || img?.src || img

const Image = ({ src, alt, ...props }) =>
	typeof get(src) === 'object' ? (
		<Img fluid={get(src)} alt={alt} {...props} />
	) : (
		<img src={get(src)} alt={alt} {...props} />
	)

export default Image
