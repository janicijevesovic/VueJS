import { defineStore } from 'pinia';

interface IProduct {
	id: string;
	name: string;
	manufacturer: IManufacturer;
	price: number;
	expiryDate: Date;
}

interface IManufacturer {
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
		] as IProduct[],
	}),
	getters: {
		findManufacturerByName: (state) => {
			return (manuName: string) =>
				state.products.find(
					(product) => product.manufacturer.name === manuName
				);
		},
	},
	actions: {
		addProduct(product: IProduct) {
			this.products.push(product);
		},
		deleteProduct(id: string) {
			this.products = this.products.filter((product) => product.id !== id);
		},
	},
});
