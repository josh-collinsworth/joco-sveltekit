<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
	$: ({ Resume } = data)

	import Main from '$lib/components/Main.svelte'
</script>


<svelte:head>
	<title>Josh Collinsworth | Résumé</title>
	<meta data-key="description" name="description" content="My professional resume">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
	<meta name="robots" content="noindex,nofollow">
</svelte:head>


<Main>
	<div class="resume compressed-content">
		<svelte:component this={Resume} />
	</div>
</Main>


<style lang="scss" global>
.resume {
	.resume-logo {
		display: none;
	}

	h3 {
		margin-bottom: calc(var(--quarterNote) / 2);

		~ p {
			margin: 0;
		}

		a {
			text-decoration: underline;
			text-decoration-thickness: 1px;
			text-decoration-color: var(--yellow);
		}
	}

	hr {
		display: none;
	}

	@media (min-width: vars.$lg) {
		display: grid;
		grid-template-columns: 12rem 1fr;
		gap: 0 var(--halfNote);

		&.compressed-content {
			max-width: 52rem;
		}

		hr {
			display: block;
			opacity: 0;
			margin: var(--halfNote) 0;
		}

		* {
			grid-column: 2 / -1;
		}

		h2 {
			grid-column: 1 / 2;
			margin: 0;
			padding-top: 0;
			position: sticky;
			top: var(--halfNote);
			background: var(--paper);
			text-align: right;

			+ h3 {
				margin-top: 0;
			}

			&::before {
				top: calc(var(--wholeNote) * -1);
				position: absolute;
				width: 100%;
				background: linear-gradient(to top, var(--paper), hsla(var(--paperHSL), 0));
				height: var(--wholeNote);
				z-index: 1;
			}
		}

		ul {
			margin: 0;
		}

		p + ul {
			margin-top: var(--quarterNote);
		}
	}
}

@media print {
	.page-head {
		display: none !important;
	}

	li {
		break-inside: avoid;
	}

	.resume {
		break-inside: avoid;
		display: block;
		margin: 0 auto;
		width: 100%;
		max-width: 6in;

		.resume-logo {
			display: block;
			margin: 0;
			max-width: 2in;
		}

		h2 {
			font-size: 23pt;
			position: static;
			margin: 0.5in 0 0.125in;
			border-bottom: 1px solid;
			padding-bottom: 0.05in;

			&:first-child {
				margin-top: 0;
			}
		}

		h3 {
			font-size: 17pt;
			margin: 0.5in 0 0.125in;
		}

		h2 + h3 {
			margin-top: 0.25in;
		}

		ul li {
			margin: 0 0 0.1in;
		}

		hr {
			display: none;
		}

		h2:before {
			display: none;
		}
	}
}
</style>