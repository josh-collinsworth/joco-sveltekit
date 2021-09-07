<template>
	<ul class="tag-list">
		<slot />
	</ul>
</template>


<style lang="scss">
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: .9rem;
}
</style>
