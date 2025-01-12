import axios from '@/plugins/Axios.js';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        token: localStorage.getItem('token') || null,
        name: localStorage.getItem('name') || '',
        isLoading: false,
        isAuthenticated: false,
        error: null,
        roles: [],
    }),
    getters:{
        // isAuthenticated: (state) => !!state.token,
    },

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
                // Set token in headers
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
                localStorage.setItem('token', this.token);
                console.log('ok', response.data);
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        this.error = 'The email has already been taken.';
                        throw { message: this.error, status: 422 };
                    }
                }
                else if (error.request) {
                    this.error = 'Network error. Please check your internet connection and try again.';
                    throw { message: this.error, status: 0 };
                }
                else {
                    this.error = 'An unexpected error occurred. Please try again later.';
                    throw  { message: this.error, status: 0 };
                }
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


                this.name = response.data.name;
                localStorage.setItem('name', this.name);

                console.log('message:', response.data.message);
                console.log('token', response.data.token);
                console.log('name',response.data.name)

                // After login, fetch user roles
                 await this.fetchRoles();
                this.isAuthenticated = true;

            } catch (error) {
                if (error.response) {
                    if (error.response.status === 401) {
                        this.error = 'Invalid email or password.';
                        throw { message: this.error, status: 401 };
                    } else {
                        this.error = `Unexpected error: ${error.response.status}. Please try again later.`;
                        throw { message: this.error, status: error.response.status };
                    }
                }
                else if (error.request) {
                    this.error = 'Network error. Please check your internet connection and try again.';
                    throw { message: this.error, status: 0 };
                }
                else {
                    this.error = 'An unexpected error occurred. Please try again later.';
                    throw  { message: this.error, status: 0 };
                }
            } finally {
                this.isLoading = false;
            }
        },

        async logout() {
            try {
                // Logout API call
                const response = await axios.post('logout');
                this.isAuthenticated = false;
                localStorage.removeItem('token');
                localStorage.removeItem('username');
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
        // async fetchUser() {
        //     this.error = null;
        //     this.isLoading = true;
        //
        //     try {
        //         const response = await axios.get('/api/user');
        //         this.name = response.data.name;
        //         this.last_name = response.data.last_name || '';
        //         this.email = response.data.email;
        //
        //         console.log('User data:', response.data);
        //     } catch (error) {
        //         this.error = error.response?.data.message || 'Error fetching user data';
        //         console.error('Error fetching user data:', error);
        //     } finally {
        //         this.isLoading = false;
        //     }
        // },
        // async deleteAccount() {
        //     try {
        //         this.isLoading = true;
        //         this.error = null;
        //
        //         await axios.delete(`/api/users/${this.id}`);
        //         await this.logout();
        //         console.log('Account successfully deleted');
        //     } catch (error) {
        //         this.error = error.response?.data.message || 'Error deleting the account';
        //         console.error('Error deleting the account:', error);
        //         throw error;
        //     } finally {
        //         this.isLoading = false;
        //     }
        // },

    },

});








