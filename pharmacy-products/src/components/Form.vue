<template>
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
				@click="submitProduct"
				class="w-full px-4 py-2 my-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-800"
			>
				<span v-if="id">Edit</span>
				<span v-else>Add</span>
				<span> Product</span>
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps<{
	productName: string;
	manufacturerName: string;
	price: number;
	expiryDate: string;
}>();

const router = useRouter();
const route = useRoute();
const id = route.params.id;

const formData = ref({
	productName: props.productName,
	manufacturerName: props.manufacturerName,
	price: props.price,
	expiryDate: props.expiryDate.toString(),
});

const productStore = useProductStore();

if (typeof id === 'string') {
	const foundProduct = productStore.findProductById(id);

	if (typeof foundProduct?.name === 'string')
		formData.value.productName = foundProduct.name;

	if (typeof foundProduct?.manufacturer.name === 'string')
		formData.value.manufacturerName = foundProduct.manufacturer.name;

	if (typeof foundProduct?.price === 'number')
		formData.value.price = foundProduct.price;

	if (typeof foundProduct?.expiryDate === 'object') {
		const year = foundProduct.expiryDate.getFullYear();
		const month = String(foundProduct.expiryDate.getMonth() + 1).padStart(
			2,
			'0'
		);
		const day = String(foundProduct.expiryDate.getDate()).padStart(2, '0');
		const dateStringValue = `${year}-${month}-${day}`;

		formData.value.expiryDate = dateStringValue;
	}
}

const submitProduct = () => {
	const foundProduct = productStore.findManufacturerByName(
		formData.value.manufacturerName
	);
	if (typeof id === 'string') {
		productStore.updateProduct({
			id: id,
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
	} else {
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
	}
};
</script>
