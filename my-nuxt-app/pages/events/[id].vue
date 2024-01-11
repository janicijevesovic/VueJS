<template>
	<div class="bg-amber-300">Event ID: {{ $route.params.id }}</div>
</template>

<script setup lang="ts">
const nuxt = useNuxtApp();
console.log(nuxt);
</script>
