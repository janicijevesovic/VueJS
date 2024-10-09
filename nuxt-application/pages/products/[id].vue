<template>
	<div>
		<h2>Product details for {{ id }}</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
			dicta!
		</p>
	</div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

definePageMeta({
	layout: 'products',
});
</script>

<style scoped></style>
