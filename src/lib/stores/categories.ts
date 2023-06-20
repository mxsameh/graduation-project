import { writable } from 'svelte/store';

const data = [
	{
		image: '/groc.jpg',
		name: 'fruits',
		productsNumber: '40'
	},
	{
		image: '/groc.jpg',
		name: 'vegetables',
		productsNumber: '100'
	},
	{
		image: '/groc.jpg',
		name: 'herbs & spices',
		productsNumber: '10'
	},
	{
		image: '/groc.jpg',
		name: 'prepared',
		productsNumber: '80'
	},
	{
		image: '/groc.jpg',
		name: 'frozen',
		productsNumber: '40'
	},
	{
		image: '/groc.jpg',
		name: 'canned',
		productsNumber: '100'
	},
	{
		image: '/groc.jpg',
		name: 'sweets',
		productsNumber: '100'
	}
];

const categories = writable(data);

export default categories;
