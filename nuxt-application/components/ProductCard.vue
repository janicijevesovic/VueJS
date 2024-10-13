<template>
	<div class="card text-center">
		<img :src="product.image" alt="Product Thumb" class="thumb" />
		<p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
		<NuxtLink :to="`/products/${product.id}`">
			<button class="btn my-4">View Details</button>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/Product';

const { product } = defineProps<{
	product: Product;
}>();
</script>

<style scoped>
.thumb {
	max-height: 120px;
	max-width: 70%;
	margin: 0 auto;
}
</style>
