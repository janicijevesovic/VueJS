export interface Product {
	id: number;
	title: string;
	rating: Rating;
	price: number;
	image: string;
	description: string;
}

interface Rating {
	count: number;
	rate: number;
}
