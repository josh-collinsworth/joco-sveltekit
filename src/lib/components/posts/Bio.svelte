<script lang="ts">
	interface Props {
		currentPage: string
	}

	let { currentPage }: Props = $props()
</script>

<div class="bio-wrapper">
	<div class="bio">
		<div>
			<p class="about">
				I'm Josh Collinsworth, a frontend developer, designer, teacher, and
				writer. I currently live in Kansas City, and work for <a
					href="https://deno.land">Deno</a
				> as a design engineer.
			</p>
			<ul class="link-list">
				<li class="link-list__kofi">
					<a href="https://ko-fi.com/collinsworth" rel="external">
						Buy me a coffee
					</a>
				</li>
				<li class="link-list__contact">
					<a href="/contact?from_page={currentPage}">
						Send me a note about this post
					</a>
				</li>
				<li class="link-list__more">
					<a href="/">More about me</a>
				</li>
			</ul>
		</div>
		<img
			src="/images/bio-photo.jpg"
			alt=""
			class="thumbnail"
			width="1"
			height="1"
		/>
	</div>
</div>

<style lang="scss">
	.bio {
		font-size: 0.85rem;
		overflow: auto;
		display: flex;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
		padding-block: var(--quarter-note);
		border-block: 1px solid currentColor;
		margin-block: var(--quarter-note);

		@media (min-width: vars.$xxs) {
			flex-wrap: nowrap;
		}

		.about {
			font-style: italic;
			font-family: var(--body-font);
			line-height: 1.6;
		}

		.link-list {
			font-family: var(--heading-font);
			margin: var(--quarter-note) 0 0;
			padding-left: 1.1rem;

			li {
				margin: 0 0 0.25rem;

				a {
					text-decoration-color: var(--neutral-light);
				}
			}

			&__kofi::marker {
				content: '☕ ';
			}

			&__contact::marker {
				content: '📩 ';
			}

			&__more::marker {
				content: '💁🏼‍♂️ ';
			}
		}

		.thumbnail {
			width: 6rem;
			border-radius: 3rem;
			margin: var(--quarter-note) auto 0;

			@media (min-width: vars.$xxs) {
				margin: 0 0 0 var(--quarter-note);
			}
		}

		p {
			margin: 0;
		}
	}
</style>
