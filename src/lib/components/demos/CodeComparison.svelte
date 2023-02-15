<script lang="ts">
	import { onMount } from 'svelte'
	import type { SvelteComponentTyped } from 'svelte'

	export let includeBothVues: boolean = false
	export let dir: string

	interface framework {
		title: string;
		slug: string;
		component: SvelteComponentTyped;
	}

	let React: SvelteComponentTyped,
			Vue2: SvelteComponentTyped,
			Vue3: SvelteComponentTyped,
			Svelte: SvelteComponentTyped,
			currentFramework: SvelteComponentTyped
	
	let frameworks: framework[] = []

	const changeFramework = (component: SvelteComponentTyped): void => {
		currentFramework = component
	}

	onMount(async () => {
		Svelte = (await import(`./markdown/${dir}/svelte.md`)).default
		React = (await import(`./markdown/${dir}/react.md`)).default
		Vue2 = (await import(`./markdown/${dir}/vue2.md`)).default
		if (includeBothVues) {
			Vue3 = (await import(`./markdown/${dir}/vue3.md`)).default
		}

		frameworks = [
			{
				title: 'Svelte',
				slug: 'code-svelte',
				component: Svelte,
			}, {
				title: 'React',
				slug: 'code-react',
				component: React,
			}, {
				title: includeBothVues ? 'Vue 2' : 'Vue',
				slug: 'code-vue2',
				component: Vue2,
			}
		]

		if (includeBothVues) {
			frameworks = [...frameworks, {
				title: 'Vue 3.2',
				slug: 'code-vue3',
				component: Vue3,
			}]
		}

		currentFramework = Svelte
	})
</script>

<div class="svelte-code-comparison">
	<div class="svelte-code-comparison__button-bar" role="tablist" aria-label="Framework">
		{#each frameworks as framework}
			<button 
				on:click={() => changeFramework(framework.component)}
				role="tab"
				aria-controls={framework.slug}
				aria-selected={currentFramework == framework.component}
				class:current={currentFramework == framework.component}
			>
				{framework.title}
			</button>
		{/each}
	</div>

	{#each frameworks as framework}
		<div
			id={framework.slug}
			tabindex={currentFramework == framework.component ? 0 : -1}
			hidden={currentFramework != framework.component}
		>
			<svelte:component this={framework.component} />
		</div>
	{/each}

	<noscript>
		{#each frameworks as framework}
			<svelte:component this={framework.component} />
		{/each}
	</noscript>
</div>


<style lang="scss">
	.svelte-code-comparison {
		margin: var(--halfNote) 0;

		&__button-bar {
			display: flex;
			justify-content: flex-start;
		}

		button {
			padding-left: 2vw;
			padding-right: 2vw;
			border-color: var(--ink);
			border-bottom: 0 !important; // Overrides .current block below
			border-width: 1px;

			.dark & {
				border-color: var(--paper);
			}

			@media (min-width: vars.$lg) {
				padding-left: 1em;
				padding-right: 1em;
			}

			+ button {
				border-left: 0;
			}
		}

		.current {
			// These colors taken from _code.scss
			background: #1d1e26;
			border: 1px solid var(--black);
			color: #9580ff;
			font-weight: bold;
		}

		:global(pre[class*="language-"]) {
			margin-top: 0 !important;
			padding-top: 1rem;

			&:before {
				display: none;
			}
		}
	}
</style>