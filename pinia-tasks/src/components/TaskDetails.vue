<template>
	<div class="task">
		<h3>{{ task.title }}</h3>
		<div class="icons">
			<i class="material-icons">delete</i>
			<i class="material-icons">favorite</i>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	task: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
