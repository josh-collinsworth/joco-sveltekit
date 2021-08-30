export const get = async () => {
	try {
		let posts = await Promise.all(
			Object.entries(import.meta.glob('./posts/*.md')).map(async ([path, page]) => {
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

	catch {
		return {
			status: 500,
			body: {
				error: 'Could not fetch posts.'
			}
		}
	}
}
