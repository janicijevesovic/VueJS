<template>
	<main>
		<header>
			<img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
			<h1>Pinia Tasks</h1>
		</header>

		<div class="task-list">
			<p>All Tasks</p>
			<div v-for="task in taskStore.tasks">
				<TaskDetails :task="task" />
			</div>
		</div>

		<div class="task-list">
			<p>Fav Tasks</p>
			<div v-for="task in taskStore.favs">
				<TaskDetails :task="task" />
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import TaskDetails from './components/TaskDetails.vue';
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();
</script>
