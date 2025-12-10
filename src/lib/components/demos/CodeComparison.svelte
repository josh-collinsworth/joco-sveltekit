<script lang="ts">
	import { onMount } from 'svelte'
	import type { SvelteComponent } from 'svelte'

	interface Props {
		includeVue2and3?: boolean
		dir: string
	}

	let { includeVue2and3 = false, dir }: Props = $props()

	interface framework {
		title: string
		slug: string
		component: SvelteComponent
	}

	let React: SvelteComponent,
		Vue2: SvelteComponent,
		Vue3: SvelteComponent,
		Svelte: SvelteComponent,
		currentFramework: SvelteComponent = $state()

	let frameworks: framework[] = $state([])

	const changeFramework = (component: SvelteComponent): void => {
		currentFramework = component
	}

	onMount(async () => {
		Svelte = (await import(`./markdown/${dir}/svelte.md`)).default
		React = (await import(`./markdown/${dir}/react.md`)).default
		Vue2 = (await import(`./markdown/${dir}/vue2.md`)).default
		if (includeVue2and3) {
			Vue3 = (await import(`./markdown/${dir}/vue3.md`)).default
		}

		frameworks = [
			{
				title: 'Svelte',
				slug: 'code-svelte',
				component: Svelte
			},
			{
				title: 'React',
				slug: 'code-react',
				component: React
			},
			{
				title: includeVue2and3 ? 'Vue 2' : 'Vue',
				slug: 'code-vue2',
				component: Vue2
			}
		]

		if (includeVue2and3) {
			frameworks = [
				...frameworks,
				{
					title: 'Vue 3.2',
					slug: 'code-vue3',
					component: Vue3
				}
			]
		}

		currentFramework = Svelte
	})
</script>

<div class="svelte-code-comparison">
	<div
		class="svelte-code-comparison__button-bar"
		role="tablist"
		aria-label="Framework"
	>
		{#each frameworks as framework}
			<button
				onclick={() => changeFramework(framework.component)}
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
		<div id={framework.slug} hidden={currentFramework != framework.component}>
			<framework.component />
		</div>
	{/each}

	<noscript>
		{#each frameworks as framework}
			<framework.component />
		{/each}
	</noscript>
</div>

<style lang="scss">
	:global(.dark .svelte-code-comparison button) {
		border-color: var(--paper);
	}

	.svelte-code-comparison {
		margin: var(--half-note) 0;

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

			@media (min-width: 82rem) {
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
			border: 1px solid var(--neutral-black);
			color: #9580ff;
			font-weight: bold;
		}

		:global(pre[class*='language-']) {
			margin-top: 0 !important;
			padding-top: 1rem;

			&:before {
				display: none;
			}
		}
	}
</style>
