<template>
	<div class="bg-amber-400">Index Page!</div>
	<Alert />
</template>

<script setup>
const { sayHello } = useUtils();
sayHello('IndexPage');
</script>
