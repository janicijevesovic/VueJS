<template>
	<main>
		<header>
			<img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
			<h1>Pinia Tasks</h1>
		</header>

		<nav class="filter">
			<button @click="filter = 'all'">All Tasks</button>
			<button @click="filter = 'favs'">Fav Tasks</button>
		</nav>

		<div v-if="filter === 'all'" class="task-list">
			<p>You have {{ taskStore.totalCount }} tasks left</p>
			<div v-for="task in taskStore.tasks">
				<TaskDetails :task="task" />
			</div>
		</div>

		<div v-if="filter === 'favs'" class="task-list">
			<p>You have {{ taskStore.favCount }} favs left</p>
			<div v-for="task in taskStore.favs">
				<TaskDetails :task="task" />
			</div>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from './stores/TaskStore';
import TaskDetails from './components/TaskDetails.vue';

const taskStore = useTaskStore();

const filter = ref('all');
</script>
