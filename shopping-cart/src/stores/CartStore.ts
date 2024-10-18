import { defineStore } from 'pinia';

export interface CartItem {
	id: number;
	name: string;
	price: number;
	discount: number | null;
	imageUrl: string;
	numInCart: number;
}

export const useCartStore = defineStore('cartStore', {
	state: () => ({
		cart: [
			{
				id: 1,
				name: 'Whey Protein - Vanilla',
				price: 1500,
				discount: 300,
				imageUrl: '/item1.jpg',
				numInCart: 0,
			},
			{
				id: 2,
				name: 'Whey Protein - Chocolate',
				price: 1600,
				discount: null,
				imageUrl: '/item2.jpg',
				numInCart: 0,
			},
			{
				id: 3,
				name: 'Vegan Protein - Chocolate',
				price: 1800,
				discount: 500,
				imageUrl: '/item3.jpg',
				numInCart: 0,
			},
			{
				id: 4,
				name: 'Pea Protein - Vanilla',
				price: 1200,
				discount: 200,
				imageUrl: '/item1.jpg',
				numInCart: 0,
			},
			{
				id: 5,
				name: 'Protein Bar - Peanut Butter',
				price: 700,
				discount: 100,
				imageUrl: '/item2.jpg',
				numInCart: 0,
			},
			{
				id: 6,
				name: 'Protein Bar - Chocolate Fudge',
				price: 900,
				discount: 150,
				imageUrl: '/item3.jpg',
				numInCart: 0,
			},
			{
				id: 7,
				name: 'Whey Protein Isolate - Strawberry',
				price: 2000,
				discount: null,
				imageUrl: '/item1.jpg',
				numInCart: 0,
			},
			{
				id: 8,
				name: 'Casein Protein - Chocolate',
				price: 1750,
				discount: 400,
				imageUrl: '/item2.jpg',
				numInCart: 0,
			},
			{
				id: 9,
				name: 'Protein Bar - Almond Crunch',
				price: 800,
				discount: 100,
				imageUrl: '/item3.jpg',
				numInCart: 0,
			},
			{
				id: 10,
				name: 'Whey Protein - Cookies & Cream',
				price: 1550,
				discount: 250,
				imageUrl: '/item1.jpg',
				numInCart: 0,
			},
			{
				id: 11,
				name: 'Vegan Protein - Vanilla',
				price: 1300,
				discount: null,
				imageUrl: '/item2.jpg',
				numInCart: 0,
			},
			{
				id: 12,
				name: 'Protein Bar - Caramel Chocolate',
				price: 750,
				discount: 200,
				imageUrl: '/item3.jpg',
				numInCart: 0,
			},
			{
				id: 13,
				name: 'Hydrolyzed Whey Protein - Berry',
				price: 1900,
				discount: 600,
				imageUrl: '/item1.jpg',
				numInCart: 0,
			},
		] as CartItem[],
		loginCredentials: {
			email: 'admin@cart.com',
			password: 'adminP@ss',
		},
	}),
	getters: {
		inCart: (state) => state.cart.filter((item) => item.numInCart),
		inCartCounter: (state) =>
			state.cart.reduce((total, item) => total + item.numInCart, 0),
		inCartValue: (state) =>
			state.cart.reduce(
				(total, item) => total + item.numInCart * item.price,
				0
			),
		inCartDiscount: (state) => {
			let total = 0;
			state.cart.forEach((item) => {
				const calculatedPrice = item.discount
					? item.price - item.discount
					: item.price;
				total += calculatedPrice * item.numInCart;
			});
			return total;
		},
	},
	actions: {
		addItemToCart(id: number) {
			const item = this.cart.find((item) => item.id === id);
			if (item) item.numInCart++;
		},
		removeItemFromCart(id: number) {
			const item = this.cart.find((item) => item.id === id);
			if (item) {
				if (item.numInCart === 0) return;
				item.numInCart--;
			}
		},
		deleteItemFromCart(id: number) {
			const item = this.cart.find((item) => item.id === id);
			if (item) item.numInCart = 0;
		},
	},
});
