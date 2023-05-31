import { defineStore } from 'pinia';

interface Task {
	id: number;
	title: string;
	isFav: boolean;
}

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		tasks: <Task[]>[],
		isLoading: false,
		name: 'Yoshi',
	}),
	getters: {
		favs: (state) => state.tasks.filter((task) => task.isFav),
		favCount: (state) =>
			state.tasks.reduce((prevValue, currentValue) => {
				return currentValue.isFav ? prevValue + 1 : prevValue;
			}, 0),
		totalCount: (state) => state.tasks.length,
	},
	actions: {
		async getTasks() {
			this.isLoading = true;
			const response = await fetch('http://localhost:3000/tasks');
			const data = await response.json();
			this.tasks = data;
			this.isLoading = false;
		},
		async addTask(task: Task) {
			this.tasks.push(task);
			const response = await fetch('http://localhost:3000/tasks', {
				method: 'POST',
				body: JSON.stringify(task),
				headers: { 'Content-Type': 'application/json' },
			});
		},
		async deleteTask(id: number) {
			this.tasks = this.tasks.filter((task) => task.id !== id);
			const response = await fetch(`http://localhost:3000/tasks/${id}`, {
				method: 'DELETE',
			});
		},
		async toggleFav(id: number) {
			const task = this.tasks.find((task) => task.id === id);
			if (!task) return;
			task.isFav = !task.isFav;

			const response = await fetch(`http://localhost:3000/tasks/${id}`, {
				method: 'PATCH',
				body: JSON.stringify({ isFav: task.isFav }),
				headers: { 'Content-Type': 'application/json' },
			});
		},
	},
});
