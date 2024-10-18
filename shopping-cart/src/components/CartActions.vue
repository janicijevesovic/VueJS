<script setup lang="ts">
import { useCartStore, type CartItem } from '@/stores/CartStore';
const cartStore = useCartStore();

const props = defineProps<{
	item: CartItem;
}>();
</script>

<template>
	<div class="flex items-center justify-center gap-4 px-2">
		<button class="text-3xl" @click="cartStore.removeItemFromCart(item.id)">
			-
		</button>
		<span class="text-xl">{{ item.numInCart }}</span>
		<button class="text-3xl" @click="cartStore.addItemToCart(item.id)">
			+
		</button>
	</div>
</template>
