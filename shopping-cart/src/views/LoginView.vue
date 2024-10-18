<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/CartStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const cartStore = useCartStore();

const email = ref('');
const password = ref('');
const loginError = ref(false);

const login = () => {
	if (
		email.value !== cartStore.loginCredentials.email ||
		password.value !== cartStore.loginCredentials.password
	) {
		loginError.value = true;
		return;
	}
	router.push({ path: '/' });
};
</script>

<template>
	<div class="max-w-md mx-auto">
		<h2 class="mb-8 text-xl font-bold mt-36">Prijavi se na svoj nalog</h2>
		<div>
			<form @submit.prevent="login">
				<div class="flex flex-col gap-4 mb-8">
					<label class="text-xs" for="email">Email adresa</label>
					<input
						v-model="email"
						type="email"
						name="email"
						placeholder="Unesite email"
						class="py-2 border-b-2 border-black"
					/>
				</div>

				<div class="flex flex-col gap-4 mb-12">
					<label class="text-xs" for="password">Sifra</label>
					<input
						v-model="password"
						type="password"
						name="password"
						placeholder="Unesite sifru"
						class="py-2 border-b-2 border-black"
					/>
				</div>

				<button class="w-full p-2 mb-4 text-white bg-black rounded-full">
					Prijavi se na nalog
				</button>

				<div v-if="loginError" class="p-2 bg-red-400 rounded">
					<span class="text-lg font-bold">Wrong Email or Password</span>
				</div>
			</form>
		</div>
	</div>
</template>
