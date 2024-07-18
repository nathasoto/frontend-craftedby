import axios from '@/plugins/Axios.js';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        isLoading: false,
        error: null,
        roles: [],
    }),

    actions: {
        async register(name, last_name, email, password, selectedRole) {
            this.isLoading = true;
            this.error = null;
            try {
                // Create user
                const response = await axios.post('/register', {
                    name,
                    last_name,
                    email,
                    password,
                    role: selectedRole || 'authenticated_client', // Default to authenticated_client if role is empty
                });

                // Save token
                this.token = response.data.token;
                this.responseCode = response.status;
                this.responseMessage = response.data.message;

                // Set token in headers
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

                console.log('ok', response.data);
            } catch (error) {
                console.error('Error', error);
                this.error = error.response.data.message || 'Error ';
            } finally {
                this.isLoading = false;
            }
        },

        async login(email, password) {
            this.error = null;
            this.isLoading = true;

            try {
                // Perform login request
                const response = await axios.post('/login', {
                    email,
                    password
                });

                // Save token
                this.token = response.data.token;
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

                localStorage.setItem('token', this.token);

                console.log('message:', response.data.message);
                console.log('token', response.data.token);

                // After login, fetch user roles
                 await this.fetchRoles();
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.error(error.response.data.message || 'The credentials provided are incorrect.');
                    this.error = error.response.data.message || 'The credentials provided are incorrect.';
                } else {
                    console.error('Error login', error);
                    this.error = 'Error logging in';
                }
            } finally {
                this.isLoading = false;
            }
        },

        async logout() {
            try {
                // Logout API call
                const response = await axios.post('logout');
                localStorage.removeItem('token');
                console.log('message:', response.data.message);
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.error(error.response.data.message || 'The credentials provided are incorrect.');
                } else {
                    console.error('Error logout', error);
                }
                this.error = error.response ? error.response.data.message : 'Error logging out';
            } finally {
                this.isLoading = false;
            }
        },

        async fetchRoles() {
            try {
                const response = await axios.post('/get_role');
                this.roles = response.data.roles;
                console.log('User roles:', this.roles);
            } catch (error) {
                console.error('Error fetching user roles:', error);
                this.error = 'Error fetching user roles';
            }
        },
    },

});




// //  token CSRF
// axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
//     // Luego, hacer la solicitud de login
//     axios.post('http://127.0.0.1:8000/api/login', {
//         email: 'admin@gmail.com',
//         password: '12345678'
//     }).then(response => {
//         console.log('Login exitoso', response.data);
//     }).catch(error => {
//         console.error('Error al iniciar sesión', error);
//     });
// });




