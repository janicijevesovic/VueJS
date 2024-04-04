<template>
	<h1 class="mb-4 text-xl font-bold text-center">Stats Info:</h1>
	<div class="mb-4 border-2 border-gray-300">
		<PriceChart />
	</div>

	<div class="border-2 border-gray-300">
		<ManufacturerChart />
	</div>
</template>

<script setup lang="ts">
import PriceChart from '../components/PriceChart.vue';
import ManufacturerChart from '../components/ManufacturerChart.vue';
</script>
