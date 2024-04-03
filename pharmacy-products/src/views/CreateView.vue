<template>
	<h1 class="text-xl font-bold text-center">Fill product details:</h1>
	<form @submit.prevent="submitProduct">
		<div>
			<label class="block" for="name">Name:</label>
			<input
				class="w-full p-2 my-1 border border-gray-500 border-solid rounded"
				id="name"
				name="name"
				type="text"
				v-model="formData.productName"
				required
			/>
		</div>

		<div>
			<label class="block" for="manu-name">Manufacturer Name:</label>
			<input
				class="w-full p-2 my-1 border border-gray-500 border-solid rounded"
				id="manu-name"
				name="manu-name"
				type="text"
				v-model="formData.manufacturerName"
				required
			/>
		</div>

		<div>
			<label class="block" for="price">Price:</label>
			<input
				class="w-full p-2 my-1 border border-gray-500 border-solid rounded"
				id="price"
				name="price"
				type="number"
				required
				step="0.01"
				v-model.number="formData.price"
				min="0"
			/>
		</div>

		<div>
			<label class="block" for="expiry-date">Expiry Date:</label>
			<input
				class="w-full p-2 my-1 border border-gray-500 border-solid rounded"
				id="expiry-date"
				name="expiry-date"
				type="date"
				required
				v-model="formData.expiryDate"
			/>
		</div>

		<div>
			<button
				class="w-full px-4 py-2 my-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-800"
			>
				Add Product
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = ref({
	productName: '',
	manufacturerName: '',
	price: 0,
	expiryDate: new Date(),
});

const productStore = useProductStore();

const submitProduct = () => {
	const foundProduct = productStore.findManufacturerByName(
		formData.value.manufacturerName
	);
	productStore.addProduct({
		id: Math.floor(Math.random() * 10000).toString(),
		name: formData.value.productName,
		manufacturer: {
			id: foundProduct
				? foundProduct.manufacturer.id
				: Math.floor(Math.random() * 10000).toString(),
			name: formData.value.manufacturerName,
		},
		price: formData.value.price,
		expiryDate: new Date(formData.value.expiryDate),
	});

	router.push('/');
};
</script>
