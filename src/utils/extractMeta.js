const extractMeta = ({
	title,
	meta_title,
	description,
	meta_description,
	image,
	meta_image,
	tags,
	meta_tags,
}) => ({
	title: title || meta_title,
	description: description || meta_description,
	image: image || meta_image,
	tags: tags || meta_tags,
})

export default extractMeta
