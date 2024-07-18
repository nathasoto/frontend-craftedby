import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api', // Base URL of your Laravel API
    withCredentials: true, // Allow sending cookies along with the request (necessary for CSRF cookie)
});

// Request CSRF cookie at the beginning of client connection
axiosInstance.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
    // Successfully obtained CSRF cookie
    console.log('CSRF cookie obtained:', response.status);
}).catch(error => {
    // Handle errors when obtaining CSRF cookie
    console.error('Error obtaining CSRF cookie:', error);
});

// Interceptor to add Authorization header
axiosInstance.interceptors.request.use(config => {
    // Retrieve the auth token from local storage
    const token = localStorage.getItem('auth_token');

    // If a token is found, set the Authorization header
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    // Return the config to proceed with the request
    return config;

}, error => {
    console.error('Error:', error);
    return Promise.reject(error);
});

export default axiosInstance;
