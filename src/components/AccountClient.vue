<template>
  <div class="account-client">
    <h2 class="text-2xl font-semibold mb-4">Order List</h2>

    <!-- Display list of orders -->
    <div v-if="orders && orders.length > 0" class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
        <tr>
          <th class="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Order Number
          </th>
          <th class="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Creation Date
          </th>
          <th class="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
            Total
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="order in orders" :key="order.id" class="bg-white">
          <td class="px-4 py-2 border-b border-gray-200">
            {{ order.id }}
          </td>
          <td class="px-4 py-2 border-b border-gray-200">
            {{ formatDate(order.created_at) }}
          </td>
          <td class="px-4 py-2 border-b border-gray-200">
            ${{ order.total }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Display message if no orders -->
    <div v-else>
      <p class="text-center text-gray-500">No orders available.</p>
    </div>
  </div>
</template>

<script setup>
import { useOrderStore } from '../stores/OrderStore';
import { onMounted, computed } from 'vue';

const orderStore = useOrderStore();

// Use computed to access orders reactively
const orders = computed(() => orderStore.orders);

// Load orders when the component is mounted
onMounted(async () => {
  try {
    await orderStore.fetchOrders();
  } catch (error) {
    console.error('Error fetching orders:', error);
  }
});

// Function to format the date (optional, depending on desired format)
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>

<style scoped>
/* Styles for the AccountClient component */
</style>
