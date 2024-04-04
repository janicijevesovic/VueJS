<template>
	<nav class="flex flex-col gap-4">
		<RouterLink :to="{ name: 'home' }">
			<button
				class="w-full px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-800"
			>
				Products
			</button>
		</RouterLink>

		<RouterLink :to="{ name: 'about' }"
			><button
				class="w-full px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-900"
			>
				About
			</button>
		</RouterLink>

		<RouterLink :to="{ name: 'stats' }"
			><button
				class="w-full px-4 py-2 font-bold text-white bg-blue-700 rounded hover:bg-blue-900"
			>
				Statistics
			</button>
		</RouterLink>
	</nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
