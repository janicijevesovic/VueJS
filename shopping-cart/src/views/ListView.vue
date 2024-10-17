<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';
const cartStore = useCartStore();
</script>

<template>
	<main class="mt-8">
		<div class="flex gap-4">
			<p>
				<span class="mr-4 text-xl font-bold">Svi proizvodi</span>
				<span>{{ cartStore.cart.length }} Proizvoda</span>
			</p>
		</div>
		<div
			class="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8"
		>
			<div class="flex flex-col justify-center" v-for="item in cartStore.cart">
				<img :src="item.imageUrl" />

				<div class="my-2">
					<span class="text-lg font-bold">{{ item.name }}</span>
				</div>

				<div>
					<span class="text-2xl">{{ item.price }} <sup>RSD</sup></span>
				</div>

				<div class="flex items-center justify-center gap-4">
					<button
						class="text-3xl"
						@click="cartStore.removeItemFromCart(item.id)"
					>
						-
					</button>
					<span class="text-xl">{{ item.numInCart }}</span>
					<button class="text-3xl" @click="cartStore.addItemToCart(item.id)">
						+
					</button>
				</div>
			</div>
		</div>
	</main>
</template>
