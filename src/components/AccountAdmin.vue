<script setup>
import { ref, onMounted } from 'vue';
import axios from '@/plugins/Axios'; // Import configured Axios instance
import { useUserStore } from '../stores/UserStore.js';

const { isLoading, token } = useUserStore();
const users = ref([]);
const showAddModal = ref(false);
const newUser = ref({
  name: '',
  email: '',
  password: '',
  role: 'authClient', // Default value for new user role
});

// Fetch list of users on component mount
onMounted(async () => {
  try {
    const response = await axios.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    users.value = response.data.data;
    console.log(users.value); // Logging fetched users
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});

// Function to add a new user
const addUser = async () => {
  try {
    const response = await axios.post('/register', newUser.value, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    users.value.push(response.data); // Add new user to local list
    // Reset form values after successful addition
    newUser.value = {
      name: '',
      email: '',
      password: '',
      role: 'authClient',
    };
    showAddModal.value = false; // Hide modal after adding user
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// Function to edit an existing user
const editUser = async (user) => {
  // Implement logic to edit a user
};

// Function to delete a user
const deleteUser = async (userId) => {
  try {
    await axios.delete(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    users.value = users.value.filter(user => user.id !== userId); // Remove user from local list
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Account Admin Dashboard</h1>

    <div v-if="isLoading" class="mb-4">
      <p>Loading...</p>
    </div>

    <div v-else>
      <!-- Button to add a new user -->
      <button @click="showAddModal = true"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
        Add User
      </button>

      <!-- Table to display list of users -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Role</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users" :key="user.id" class="text-center">
            <td class="border px-4 py-2">{{ user.id }}</td>
            <td class="border px-4 py-2">{{ user.name }}</td>
            <td class="border px-4 py-2">{{ user.email }}</td>
            <td class="border px-4 py-2">{{ user.role }}</td>
            <td class="border px-4 py-2">
              <button @click="editUser(user)"
                      class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">
                Edit
              </button>
              <button @click="deleteUser(user.id)"
                      class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <!-- Modal to add new user -->
      <div v-if="showAddModal" class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
        <div class="bg-white p-4 rounded shadow-lg w-1/2">
          <h2 class="text-2xl font-bold mb-4">Add New User</h2>
          <form @submit.prevent="addUser" class="mb-4">
            <div class="mb-4">
              <input type="text" v-model="newUser.name" placeholder="Name" required
                     class="border border-gray-300 px-3 py-2 w-full rounded">
            </div>
            <div class="mb-4">
              <input type="email" v-model="newUser.email" placeholder="Email" required
                     class="border border-gray-300 px-3 py-2 w-full rounded">
            </div>
            <div class="mb-4">
              <input type="password" v-model="newUser.password" placeholder="Password" required
                     class="border border-gray-300 px-3 py-2 w-full rounded">
            </div>
            <div class="mb-4">
              <select v-model="newUser.role" required
                      class="border border-gray-300 px-3 py-2 w-full rounded">
                <option value="admin">Admin</option>
                <option value="authClient">Authenticated Client</option>
                <!-- Other role options -->
              </select>
            </div>
            <div class="flex justify-end">
              <button type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add
              </button>
              <button type="button" @click="showAddModal = false"
                      class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles can be added here if needed */
</style>
