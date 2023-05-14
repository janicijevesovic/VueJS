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
		],
		name: 'Yoshi',
	}),
});
