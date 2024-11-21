<template>
	<Head v-if="product">
		<Title>Nuxt Dojo | {{ product.title }}</Title>
		<Meta name="description" :content="product.description"></Meta>
	</Head>
	<div v-if="product">
		<ProductDetails :product="product" />
	</div>
</template>

<script setup lang="ts">
import type { Product } from '~/interfaces/Product';

const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch<Product>(uri);

if (!product.value) {
	throw createError({
		statusCode: 404,
		message: 'Product not found',
		fatal: true,
	});
}

definePageMeta({
	layout: 'products',
});
</script>

<style scoped></style>
