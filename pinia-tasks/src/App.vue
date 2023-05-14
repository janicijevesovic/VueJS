<template>
	<main>
		<header>
			<img src="./assets/pinia-logo.svg" alt="Pinia Logo" />
			<h1>Pinia Tasks</h1>
		</header>

		<div class="task-list"></div>
	</main>
</template>

<script setup lang="ts">
import { useTaskStore } from './stores/TaskStore';

const taskStore = useTaskStore();
</script>
