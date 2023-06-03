<template>
	<main>
		<header>
			<img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
			<h1>Pinia Tasks</h1>
		</header>

		<div class="new-task-form">
			<TaskForm />
		</div>

		<nav class="filter">
			<button @click="filter = 'all'">All Tasks</button>
			<button @click="filter = 'favs'">Fav Tasks</button>
		</nav>

		<div v-if="isLoading" class="loading">Loading tasks...</div>

		<div v-if="filter === 'all'" class="task-list">
			<p>You have {{ totalCount }} tasks left</p>
			<div v-for="task in tasks">
				<TaskDetails :task="task" />
			</div>
		</div>

		<div v-if="filter === 'favs'" class="task-list">
			<p>You have {{ favCount }} favs left</p>
			<div v-for="task in favs">
				<TaskDetails :task="task" />
			</div>
		</div>

		<button @click="taskStore.$reset">Reset</button>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from './components/TaskDetails.vue';
import TaskForm from './components/TaskForm.vue';
import { storeToRefs } from 'pinia';

const taskStore = useTaskStore();
const { tasks, isLoading, favs, totalCount, favCount } = storeToRefs(taskStore);

taskStore.getTasks();

const filter = ref('all');
</script>
