<template>
	<div>
		<div class="grid grid-cols-4 gap-4">
			<div v-for="product in products">
				<ProductCard :product="product" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/Product';

definePageMeta({
	layout: 'products',
});

const { data: products } = await useFetch<Product[]>(
	'https://fakestoreapi.com/products'
);

useHead({
	title: 'Nuxt Dojo Merch',
	meta: [{ name: 'description', content: 'Nuxt3 Merch' }],
});
console.log(products);
</script>

<style scoped></style>
