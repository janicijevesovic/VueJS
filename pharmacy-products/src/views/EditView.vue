<template>
	<div>
		<h1 class="text-xl font-bold text-center">Edit product details:</h1>
		<Form
			:product-name="formData.productName"
			:manufacturer-name="formData.manufacturerName"
			:price="formData.price"
			:expiry-date="formData.expiryDate"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useProductStore } from '../stores/ProductStore';
import { useRouter, useRoute } from 'vue-router';
import Form from '../components/Form.vue';

const router = useRouter();
const route = useRoute();
const productStore = useProductStore();

const id = route.params.id;

const formData = ref({
	productName: '',
	manufacturerName: '',
	price: 0,
	expiryDate: new Date().toDateString(),
});

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
</script>
