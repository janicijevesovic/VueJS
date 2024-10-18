<script setup lang="ts">
import CartActions from '@/components/CartActions.vue';
import PaymentInfo from '@/components/PaymentInfo.vue';
import { useCartStore } from '@/stores/CartStore';
const cartStore = useCartStore();
</script>

<template>
	<main class="mt-8">
		<h2 class="mb-8 text-xl font-bold">Tvoja korpa</h2>
		<div class="flex flex-col gap-16 md:flex-row">
			<div class="basis-3/5">
				<div
					v-for="item in cartStore.inCart"
					class="flex justify-between py-4 border-b-2 border-gray-300"
				>
					<div class="flex gap-4">
						<img class="max-h-36" :src="item.imageUrl" />
						<div class="flex flex-col justify-between">
							<span class="text-lg font-bold">{{ item.name }}</span>
							<span v-if="item.numInCart > 1" class="text-gray-600">
								{{ item.price - (item.discount ?? 0) }} RSD po kom.
							</span>
							<div class="flex items-center gap-4">
								<CartActions :item="item" />

								<button
									class="text-xl underline"
									@click="cartStore.deleteItemFromCart(item.id)"
								>
									Ukloni
								</button>
							</div>
						</div>
					</div>

					<div>
						<span v-if="item.discount" class="block text-2xl">
							{{ (item.price - item.discount) * item.numInCart }}
							<sup> RSD</sup>
						</span>
						<span
							class="block text-2xl"
							:class="{ 'text-orange-600': item.discount }"
						>
							<s v-if="item.discount">
								{{ item.price * item.numInCart }}
							</s>
							<span v-else>
								{{ item.price * item.numInCart }}
							</span>
							<sup> RSD</sup>
						</span>
					</div>
				</div>
			</div>
			<div class="p-4 bg-gray-200 h-min basis-2/5">
				<PaymentInfo />
			</div>
		</div>
	</main>
</template>
