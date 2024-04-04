<template>
	<main class="">
		<h1 class="text-xl font-bold text-center">Product List:</h1>

		<div class="mb-2">
			<RouterLink :to="{ name: 'create' }">
				<button
					class="px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-800"
				>
					Add New Product
				</button>
			</RouterLink>
		</div>

		<div>
			<div class="flex items-center justify-around w-full gap-2 p-2">
				<span class="w-full font-bold">Name:</span>
				<span class="w-full font-bold">Price:</span>
				<span class="w-full font-bold">Expiry Date:</span>
				<span class="w-full">&nbsp;</span>
				<span class="w-full">&nbsp;</span>
			</div>
			<div
				class="flex items-center justify-around w-full gap-2 p-2 my-2 border-2 border-gray-300"
				v-for="product in productStore.products"
			>
				<span class="w-full">{{ product.name }}</span>
				<span class="w-full text-lg">{{ product.price.toFixed(2) }} Eur</span>
				<span class="w-full text-lg">{{
					product.expiryDate.toLocaleDateString('en-GB')
				}}</span>
				<button
					@click="editProduct(product.id)"
					class="w-full px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-800"
				>
					Edit Product
				</button>
				<button
					@click="productStore.deleteProduct(product.id)"
					class="w-full px-4 py-2 font-bold text-white bg-red-700 rounded hover:bg-red-800"
				>
					Delete Product
				</button>
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { useProductStore } from '../stores/ProductStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const productStore = useProductStore();

const editProduct = (productId: string) => {
	router.push({
		path: `/${productId}`,
	});
};
</script>
