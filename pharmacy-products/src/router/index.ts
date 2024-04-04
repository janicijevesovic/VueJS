import { createRouter, createWebHistory } from 'vue-router';
import ProductView from '../views/ProductView.vue';
import AboutView from '../views/AboutView.vue';
import CreateView from '../views/CreateView.vue';
import EditView from '../views/EditView.vue';
import StatsView from '../views/StatsView.vue';

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
		{
			path: '/:id',
			name: 'edit',
			component: EditView,
		},
		{
			path: '/stats',
			name: 'stats',
			component: StatsView,
		},
	],
});

export default router;
