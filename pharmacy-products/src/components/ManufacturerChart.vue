<template>
	<div>
		<Pie id="manufacturer-chart" :data="data" :options="options" />
	</div>
</template>

<script setup lang="ts">
import { useProductStore } from '../stores/ProductStore';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const productStore = useProductStore();
const manufacturerChartDataMap = productStore.getProductsForManufacturerChart;

const data = {
	labels: [...manufacturerChartDataMap.keys()],
	datasets: [
		{
			data: [...manufacturerChartDataMap.values()],
		},
	],
};

const options = {
	responsive: true,
	maintainAspectRatio: false,
};
</script>
