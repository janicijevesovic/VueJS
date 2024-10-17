import { createRouter, createWebHistory } from 'vue-router';
import ListView from '../views/ListView.vue';
import CartView from '@/views/CartView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'list',
			component: ListView,
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView,
		},
	],
});

export default router;
