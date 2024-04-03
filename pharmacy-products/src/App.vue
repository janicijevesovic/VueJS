<template>
	<div class="container flex flex-col gap-4 mx-auto my-4 md:flex-row">
		<div class="basis-1/4">
			<SideNavigation />
		</div>

		<div class="p-4 border border-gray-300 border-solid rounded basis-3/4">
			<RouterView />
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideNavigation from './components/SideNavigation.vue';
</script>
