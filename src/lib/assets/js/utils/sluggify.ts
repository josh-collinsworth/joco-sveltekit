const sluggify = (str: string): string => {
	return str
	.toLowerCase()
	.replace(/\s/g, '_')
	.replace(/[^A-z0-9_-]/g, '')
}

export default sluggify
