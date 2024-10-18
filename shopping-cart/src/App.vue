<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';

const cartStore = useCartStore();
</script>

<template>
	<div
		v-if="$route.meta.showHeader"
		class="sticky top-0 z-10 flex justify-between p-4 border-2 border-solid bg-zinc-100"
	>
		<router-link to="/"><span>Logo Holder</span></router-link>
		<router-link to="/cart">Cart ({{ cartStore.inCartCounter }})</router-link>
	</div>
	<div class="container mx-auto">
		<RouterView />
	</div>
</template>
