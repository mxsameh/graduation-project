import { writable } from 'svelte/store';

const data = [
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '40'
	},
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '100'
	},
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '10'
	},
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '80'
	},
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '40'
	},
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '100'
	},
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '10'
	},
	{
		image: '/groc.jpg',
		name: 'category',
		productsNumber: '80'
	}
];

const categories = writable(data);

export default categories;
