<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';
const cartStore = useCartStore();
</script>

<template>
	<h3 class="text-lg font-bold">Tvoja narudzbina</h3>
	<div class="py-4 border-b border-gray-300">
		<div class="flex justify-between gap-4">
			<span>Ukupno:</span>
			<span>{{ cartStore.inCartValue }} <sup>RSD</sup></span>
		</div>

		<div class="flex justify-between gap-4">
			<span>Popust:</span>
			<span>
				-{{ cartStore.inCartValue - cartStore.inCartDiscount }}
				<sup>RSD</sup>
			</span>
		</div>

		<div class="flex justify-between gap-4">
			<span>Isporuka Daily Express:</span>
			<span> Besplatna </span>
		</div>
	</div>

	<div class="flex justify-between gap-4 my-2">
		<span>Ukupno za uplatu:</span>
		<span>
			{{ cartStore.inCartDiscount }}
			<sup>RSD</sup>
		</span>
	</div>

	<div>
		<span class="text-sm">Cena je sa ukljucenim PDV-om</span>
	</div>

	<router-link to="/login"
		><button class="w-full p-2 my-2 text-white bg-black rounded-full">
			Prijavi se za brze placanje
		</button>
	</router-link>
</template>
