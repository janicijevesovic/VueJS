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
			{ id: 3, title: 'Cook', isFav: true },
			{ id: 4, title: 'Gym', isFav: true },
		],
		name: 'Yoshi',
	}),
	getters: {
		favs: (state) => state.tasks.filter((task) => task.isFav),
	},
});
