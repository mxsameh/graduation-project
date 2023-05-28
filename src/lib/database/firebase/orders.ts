import { database } from './firebase';
import { push, ref, remove, set } from 'firebase/database';

interface Iaddress {
	country: string;
	city: string;
	location: string;
	zip_code: number;
}
interface Iorder {
	id: string;
	date: string;
	time: string;
	shipping: number;
	subtotal: number;
	total: number;
	payment: string;
	status: string;
	address: Iaddress;
	totalPrice: number;
	seller_id: number;
	buyer_id: number;
	delivery_id: number;
}
interface Irequest {
	deliveryId: number;
	price: number;
	status: string;
}

const addOrder = (order: Iorder) => {
	const orderRef = ref(database, 'orders');
	const newOrderRef = push(orderRef);
	const orderId = newOrderRef.key as string;
	order = { ...order, id: orderId };
	set(newOrderRef, order);

	return order;
};

const deleteOrder = (orderId: string) => {
	const orderRef = ref(database, `orders/${orderId}`);
	remove(orderRef);
};

const sendRequest = (orderId: string, request: Irequest) => {
	const requestsRef = ref(database, `orders/${orderId}/requests`);
	const newRequestRef = push(requestsRef);
	const newRequestId = newRequestRef.key as string;

	set(newRequestRef, { id: newRequestId, ...request });
};

const cancelRequest = (orderId: string, requestId: string) => {
	const requsetRef = ref(database, `orders/${orderId}/requests/${requestId}`);
	set(requsetRef, null);
};

export { addOrder, sendRequest, deleteOrder, cancelRequest };
