<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" placeholder="I need to..." v-model="newTask" />
		<button>Add</button>
	</form>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';

const taskStore = useTaskStore();
const newTask = ref('');

const handleSubmit = () => {
	if (!newTask.value.trim()) return;
	taskStore.addTask({
		title: newTask.value,
		isFav: false,
		id: new Date().valueOf(),
	});
	newTask.value = '';
};
</script>

<style scoped></style>
