<template>
	<div class="task">
		<h3>{{ task.title }}</h3>
		<div class="icons">
			<i @click="taskStore.deleteTask(task.id)" class="material-icons"
				>delete</i
			>
			<i
				@click="taskStore.toggleFav(task.id)"
				class="material-icons"
				:class="{ active: task.isFav }"
				>favorite</i
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore';

const props = defineProps({
	task: {
		type: Object,
		required: true,
	},
});

const taskStore = useTaskStore();
</script>

<style lang="scss" scoped></style>
