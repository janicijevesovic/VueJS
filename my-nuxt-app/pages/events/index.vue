<template>
	<div class="font-bold">This is my Events Page!</div>
	<div>Test: {{ $writeHello('Test') }}</div>
</template>

<script lang="ts" setup>
const { sayHello } = useUtils();
const { $sayHello, $writeHello } = useNuxtApp();
sayHello('EventsPage');
$sayHello('Janicije');
</script>
