<script lang="ts">
	import { run } from 'svelte/legacy'

	import PageTransition from '$lib/components/transitions/PageTransition.svelte'

	interface Props {
		title: string
		isSinglePost?: boolean
	}

	let { title = $bindable(), isSinglePost = false }: Props = $props()

	let computedTitle: string = $state('')
	let isWorking: boolean = $state(false)

	run(() => {
		if (title) {
			if (title === '/') {
				title = `welcome`
			} else if (title[0] === '/') {
				title = title.slice(1)
			}

			title = title.split('/').join(' / ').replace(/-/g, ' ')

			isWorking = false

			setTimeout(() => {
				isWorking = true
				computedTitle = title
			}, 420)
		}
	})
</script>

<PageTransition refresh={isSinglePost} span={true}>
	<div class="page-head">
		{#if !isSinglePost}
			<div class="heading-wrapper" class:in={isWorking}>
				<span class="brace" aria-hidden="true">[</span>
				<h1>
					<div class="title-wrap">
						{computedTitle}
						<noscript>{title}</noscript>
					</div>
				</h1>
				<span class="brace closing-brace" aria-hidden="true">]</span>

				<noscript>
					<!-- Just here to allow the heading to show when JS is disabled. -->
					<style>
						.closing-brace {
							transform: none !important;
						}
					</style>
				</noscript>
			</div>
		{/if}
	</div>
</PageTransition>

<style lang="scss">
	.page-head {
		--transition: transform 0.24s cubic-bezier(0.165, 0.84, 0.44, 1);

		margin-bottom: var(--half-note);
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		contain: layout;
		overflow: hidden;
		position: relative;
		z-index: 0;
		font-size: 1.1rem;
		min-height: 2.2rem;

		.heading-wrapper {
			display: flex;
			position: relative;
			width: auto;

			.brace {
				font-family: var(--heading-font);
				font-weight: normal;
				font-size: 1.25em;
				color: var(--neutral-light);
				margin: 0 0.1em 0 0;
				z-index: 2;
				position: relative;
				left: -1px;

				&.closing-brace {
					color: var(--yellow);
					margin: 0;
					transition: var(--transition);
					transform: translateX(calc(-100% + 0.3em));
					position: absolute;
					left: 100%;
					width: 100%;
					background: var(--paper);
					box-shadow: 3rem 0 0 1rem var(--paper);
					overflow: visible;
				}
			}

			&.in .closing-brace {
				transform: translateX(0);
			}

			@media (prefers-reduced-motion: reduce) {
				.closing-brace {
					transform: translateX(0);
				}
			}
		}

		h1 {
			font-size: inherit;
			margin: 0 0.25rem 0 0;
			padding: 0;
			width: max-content;
			font-weight: normal;
			display: flex;
			align-items: center;

			.title-wrap {
				position: relative;
				z-index: 1;
				background: linear-gradient(
					90deg,
					#a7a8aa,
					#92abb2,
					#5eca78,
					#b6ec1f,
					#ffd100
				);
				-webkit-text-fill-color: transparent;
				-webkit-background-clip: text;
				background-clip: text;
				@supports (background: linear-gradient(in oklch, white, black)) {
					background: linear-gradient(90deg, var(--blue-light), var(--yellow));
					-webkit-text-fill-color: transparent;
					-webkit-background-clip: text;
					background-clip: text;
				}
				font-family: var(--heading-font);
				text-transform: lowercase;
				flex: 0 1 auto;
				white-space: nowrap;
				line-height: 1.2;
			}
		}
	}
</style>
