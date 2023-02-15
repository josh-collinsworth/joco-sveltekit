<script lang="ts">
	import type Post from '$lib/types/post'
	import debounce from 'just-debounce'

	let searchString: string = ''
	let results: Post[] = []
	let isWorking: boolean = false

	const handleSearchInput = () => {
		isWorking = true
		results = []
		sendSearchRequest()
	}

	const sendSearchRequest = debounce(async () => {
		if (!searchString) {
			results = []
			isWorking = false
			return
		}

		const response = await fetch('/api/posts/all')
		const posts = await response.json()

		const filteredPosts = await posts.filter(post => {
			return post.title.toLowerCase().includes(searchString.toLowerCase())
		})

		isWorking = false
		results = filteredPosts.slice(0, 5)
	}, 500)
</script>

<div class="search-wrap">
	<label for="post-search" class="sr">Search post titles</label>
	<input
		bind:value={searchString}
		on:input={handleSearchInput}
		id="post-search"
		class="search"
		type="search"
		placeholder="Search post titles"
		title="Search post titles"
	/>

	{#if isWorking}
		<div class="loader">
			<div class="sr">Loading matching posts</div>
			<div class="dot" aria-hidden="true">•</div>
			<div class="dot" aria-hidden="true">•</div>
			<div class="dot" aria-hidden="true">•</div>
		</div>
	{/if}
	
	{#if results.length}
		<ul class="results">
			{#each results as result}
				<li>
					<a href="/blog/{result.slug}">
						{result.title}
					</a>
				</li>
			{/each}
		</ul>
	{:else if searchString && !isWorking}
		<ul class="results">
			<li>
				Sorry, no matching post titles. 
				{#if searchString.includes(' ')}
					Try fewer words and/or removing spaces.
				{/if}
			</li>
		</ul>
	{/if}
</div>


<style lang="scss">
	.search {
		font-size: 0.8em;
	}

	.search-wrap {
		position: relative;

		.loader {
			width: 1rem;
			height: 1rem;
			position: absolute;
			top: calc(50% - 0.5rem);
			right: 0.5rem;
			border-radius: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.dot {
				line-height: 1;
				animation: blink .6s ease-in-out infinite;

				+ .dot {
					animation-delay: .1s;

					+ .dot {
						animation-delay: .2s;
					}
				}
			}
		}
	}

	.results {
		list-style-type: none;
		position: absolute;
		margin: 0;
		padding: 1rem;
		border: 1px solid;
		background: var(--paper);
		z-index: 5;
		top: calc(100% - 1px);
		font-size: 0.85rem;
		line-height: 1.2;
		width: 100%;
	}

	@keyframes blink {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1);
		}
		100% {
			transform: scale(1);
		}
	}
</style>