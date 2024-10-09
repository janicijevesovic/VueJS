<template>
	<div>
		<div class="grid grid-cols-4 gap-4">
			<div v-for="product in products">
				<NuxtLink :to="`/products/${product.id}`"
					>{{ product.title }} {{ product.rating.rate }}</NuxtLink
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Product {
	id: number;
	title: string;
	rating: Rating;
}

interface Rating {
	count: number;
	rate: number;
}

definePageMeta({
	layout: 'products',
});

const { data: products } = await useFetch<Product[]>(
	'https://fakestoreapi.com/products'
);
console.log(products);
</script>

<style scoped></style>
