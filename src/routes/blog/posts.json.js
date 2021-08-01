export const get = async () => {
	let posts = await Promise.all(
		Object.entries(import.meta.glob('./*.md')).map(async ([path, page]) => {
			const { metadata } = await page()
			const slug = path.split('/').pop().split('.').shift()
			return { ...metadata, slug }
		})
	)

	return {
		status: 200,
		body: { posts },
	}
}
