export const get = async () => {
	try {
		let posts = await Promise.all(
			Object.entries(import.meta.glob('./posts/*.md')).map(async ([path, page]) => {
				const { metadata } = await page()
				console.log(metadata)
				const slug = path.split('/').pop().split('.').shift()
				return { ...metadata, slug }
			})
		).then(posts => posts.sort((a, b) => new Date(b.date) - new Date(a.date)))
			
		return {
			status: 200,
			body: { posts },
		}
	}

	catch {
		return {
			status: 500,
			body: {
				error: 'Could not fetch posts.'
			}
		}
	}
}
