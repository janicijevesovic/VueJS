<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';

import { useRouter } from 'vue-router';

const router = useRouter();

const cartStore = useCartStore();
</script>

<template>
	<div
		class="sticky top-0 z-10 flex justify-between p-4 border-2 border-solid bg-zinc-100"
	>
		<span>Logo Holder</span>
		<router-link to="/cart">Cart ({{ cartStore.inCartCounter }})</router-link>
	</div>
	<div class="container mx-auto">
		<RouterView />
	</div>
</template>

<style scoped></style>
