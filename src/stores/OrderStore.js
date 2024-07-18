import axios from '@/plugins/Axios.js';
import { defineStore } from 'pinia';


export const useOrderStore = defineStore({
    id: 'order',
    state: () => ({
        orders: []
    }),
    actions: {
        async fetchOrders() {
            try {
                const response = await axios.get('user/orders');
                this.orders = response.data;
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        }
    }
});