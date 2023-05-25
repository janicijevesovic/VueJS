import { defineStore } from 'pinia';

interface Task {
	id: number;
	title: string;
	isFav: boolean;
}

export const useTaskStore = defineStore('taskStore', {
	state: () => ({
		tasks: <Task[]>[
			{ id: 1, title: 'Buy some milk', isFav: false },
			{ id: 2, title: 'Play Warcraft', isFav: true },
			{ id: 3, title: 'Cook', isFav: false },
			{ id: 4, title: 'Gym', isFav: true },
		],
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
		addTask(task: Task) {
			this.tasks.push(task);
		},
		deleteTask(id: number) {
			this.tasks = this.tasks.filter((task) => task.id !== id);
		},
		toggleFav(id: number) {
			const task = this.tasks.find((task) => task.id === id);
			if (!task) return;
			task.isFav = !task.isFav;
		},
	},
});
