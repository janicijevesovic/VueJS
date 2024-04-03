import { createRouter, createWebHistory } from 'vue-router';
import ProductView from '../views/ProductView.vue';
import AboutView from '../views/AboutView.vue';
import CreateView from '../views/CreateView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ProductView,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
		{
			path: '/create',
			name: 'create',
			component: CreateView,
		},
	],
});

export default router;
