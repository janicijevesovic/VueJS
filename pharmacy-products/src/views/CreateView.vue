<template>
	<h1 class="text-xl font-bold text-center">Fill product details:</h1>
	<Form
		:product-name="''"
		:manufacturer-name="''"
		:price="0"
		:expiry-date="new Date().toString()"
	/>
</template>

<script setup lang="ts">
import Form from '../components/Form.vue';
</script>
