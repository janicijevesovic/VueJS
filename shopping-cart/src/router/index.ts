import { createRouter, createWebHistory } from 'vue-router';
import ListView from '../views/ListView.vue';
import CartView from '@/views/CartView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'list',
			component: ListView,
			meta: { showHeader: true },
		},
		{
			path: '/cart',
			name: 'cart',
			component: CartView,
			meta: { showHeader: true },
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
			meta: { showHeader: false },
		},
	],
});

export default router;
