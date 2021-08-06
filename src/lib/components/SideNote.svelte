<div class="side-note">
	<p>
		<slot />
	</p>
</div>


<style>
.side-note {
  padding: .5rem 1.5rem;
  position: relative;
  margin: 3rem 1rem;
  max-width: calc(100% - 2rem);
  font-size: .9rem;
  font-style: italic;
  border: 1px solid var(--lightBlue);
}

.side-note:before {
	content: 'Side Note';
	position: absolute;
	top: -.5em;
	left: .5rem;
	background: var(--paper);
	padding: 0 1rem;
	line-height: 1;
	font-weight: bold;
	text-transform: uppercase;
	font-size: .7rem;
	color: var(--lightBlue);
}

@media (min-width: 1024px) {
	.side-note {
			margin: 3rem 2rem;
			max-width: calc(100% - 4rem);
	}
}
</style>
