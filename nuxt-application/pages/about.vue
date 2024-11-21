<template>
	<div>
		<h2>About</h2>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, alias.
		</p>
		<div>{{ data }}</div>
	</div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/ninja?name=Mario', {
	method: 'post',
	body: { age: 30 },
});
</script>

<style scoped></style>
