<template>
	<ul class="tag-list">
		<slot />
	</ul>
</template>


<style lang="scss">
.tag-list {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin-top: 1rem;
  padding: 0;
  font-size: .9rem;
}
</style>
