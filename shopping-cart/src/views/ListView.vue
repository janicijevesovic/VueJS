<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';
import CartActions from '@/components/CartActions.vue';
import { ref, type Ref } from 'vue';
const cartStore = useCartStore();
const hoveredImageIndex: Ref<number | null> = ref(null);
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
			<div
				@mouseenter="hoveredImageIndex = index"
				@mouseleave="hoveredImageIndex = null"
				class="flex flex-col justify-center cursor-pointer"
				v-for="(item, index) in cartStore.cart"
			>
				<img :src="item.imageUrl" />

				<div class="my-2">
					<span class="text-lg font-bold">{{ item.name }}</span>
				</div>

				<div>
					<span class="text-2xl">{{ item.price }} <sup>RSD</sup></span>
				</div>

				<CartActions
					:item="item"
					:class="[hoveredImageIndex === index ? 'visible' : 'invisible']"
				/>
			</div>
		</div>
	</main>
</template>
