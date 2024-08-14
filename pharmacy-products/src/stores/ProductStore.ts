import { defineStore } from 'pinia';

export interface IProduct {
	id: string;
	name: string;
	manufacturer: IManufacturer;
	price: number;
	expiryDate: Date;
}

export interface IManufacturer {
	id: string;
	name: string;
}

export const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [
			{
				id: '1',
				name: 'Ibuprofen Tablets',
				manufacturer: {
					id: '1',
					name: 'Johnson & Johnson',
				},
				price: 5.99,
				expiryDate: new Date('2024-06-01'),
			},
			{
				id: '2',
				name: 'Cough Syrup',
				manufacturer: {
					id: '2',
					name: 'Pfizer',
				},
				price: 7.49,
				expiryDate: new Date('2024-04-30'),
			},
			{
				id: '3',
				name: 'Antibacterial Hand Gel',
				manufacturer: {
					id: '3',
					name: 'Procter & Gamble',
				},
				price: 3.99,
				expiryDate: new Date('2024-05-15'),
			},
			{
				id: '4',
				name: 'Aspirin',
				manufacturer: {
					id: '1',
					name: 'Bayer',
				},
				price: 5.99,
				expiryDate: new Date('2025-04-01'),
			},
			{
				id: '5',
				name: 'Paracetamol',
				manufacturer: {
					id: '2',
					name: 'Johnson & Johnson',
				},
				price: 3.49,
				expiryDate: new Date('2024-12-31'),
			},
			{
				id: '6',
				name: 'Ibuprofen',
				manufacturer: {
					id: '3',
					name: 'Pfizer',
				},
				price: 7.25,
				expiryDate: new Date('2025-06-15'),
			},
			{
				id: '7',
				name: 'Loratadine',
				manufacturer: {
					id: '4',
					name: 'GlaxoSmithKline',
				},
				price: 9.99,
				expiryDate: new Date('2025-03-20'),
			},
			{
				id: '8',
				name: 'Omeprazole',
				manufacturer: {
					id: '5',
					name: 'AstraZeneca',
				},
				price: 12.75,
				expiryDate: new Date('2024-11-10'),
			},
			{
				id: '9',
				name: 'Metformin',
				manufacturer: {
					id: '6',
					name: 'Johnson & Johnson',
				},
				price: 8.99,
				expiryDate: new Date('2025-05-30'),
			},
			{
				id: '10',
				name: 'Simvastatin',
				manufacturer: {
					id: '7',
					name: 'Novartis',
				},
				price: 14.49,
				expiryDate: new Date('2024-10-05'),
			},
			{
				id: '11',
				name: 'Amoxicillin',
				manufacturer: {
					id: '8',
					name: 'Roche',
				},
				price: 6.75,
				expiryDate: new Date('2024-09-15'),
			},
			{
				id: '12',
				name: 'Cetirizine',
				manufacturer: {
					id: '9',
					name: 'Sanofi',
				},
				price: 11.99,
				expiryDate: new Date('2025-07-22'),
			},
			{
				id: '13',
				name: 'Atorvastatin',
				manufacturer: {
					id: '10',
					name: 'AbbVie',
				},
				price: 15.99,
				expiryDate: new Date('2025-02-28'),
			},
			{
				id: '14',
				name: 'Lisinopril',
				manufacturer: {
					id: '11',
					name: 'AbbVie',
				},
				price: 13.25,
				expiryDate: new Date('2024-08-10'),
			},
		] as IProduct[],
	}),
	getters: {
		findManufacturerByName: (state) => {
			return (manuName: string) =>
				state.products.find(
					(product) => product.manufacturer.name === manuName
				);
		},
		findProductById: (state) => {
			return (productId: string) =>
				state.products.find((product) => product.id === productId);
		},
		getProductsForPriceChart: (state) => {
			if (state.products.length <= 10) return state.products;

			const sortedProducts = state.products.sort((a, b) => {
				return a.price - b.price;
			});

			return [...sortedProducts.slice(0, 5), ...sortedProducts.slice(-5)];
		},
		getProductsForManufacturerChart: (state) => {
			const nameCountMap = new Map();
			state.products.forEach((product) => {
				if (nameCountMap.has(product.manufacturer.name)) {
					nameCountMap.set(
						product.manufacturer.name,
						nameCountMap.get(product.manufacturer.name) + 1
					);
				} else {
					nameCountMap.set(product.manufacturer.name, 1);
				}
			});
			return nameCountMap;
		},
	},
	actions: {
		addProduct(product: IProduct) {
			this.products.push(product);
		},
		deleteProduct(id: string) {
			this.products = this.products.filter((product) => product.id !== id);
		},
		updateProduct(product: IProduct) {
			let foundProduct = this.products.find((p) => p.id === product.id);
			if (!foundProduct) return;
			foundProduct.name = product.name;
			foundProduct.manufacturer = product.manufacturer;
			foundProduct.price = product.price;
			foundProduct.expiryDate = product.expiryDate;
		},
	},
});
