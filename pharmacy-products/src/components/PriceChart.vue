<template>
	<div>
		<Bar id="price-chart" :options="chartOptions" :data="chartData" />
	</div>
</template>

<script setup lang="ts">
import { useProductStore } from '../stores/ProductStore';
import { Bar } from 'vue-chartjs';

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	Colors,
} from 'chart.js';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	Colors
);

const productStore = useProductStore();
const nameArray = productStore.getProductsForPriceChart.map(
	(product) => product.name
);
const priceArray = productStore.getProductsForPriceChart.map(
	(product) => product.price
);

const chartData = {
	labels: nameArray,
	datasets: [{ label: 'Product Price', data: priceArray }],
};

const chartOptions = {
	responsive: true,
	plugins: {
		legend: {
			display: true,
		},
	},
};
</script>
