// Importing the axios library, which simplifies making HTTP requests.
import axios from 'axios';

// Get the base URL from environment variables
const BASE_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

// Creating a customized instance of axios with default settings.
// This instance will be used for making HTTP requests throughout the application.
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  // Setting the headers property to include additional metadata in the request.
  headers: {
    // Setting the 'Content-Type' header to 'application/json'.
    // Indicates that the data being sent in the request body is in JSON format.
    'Content-Type': 'application/json',
  }
});

// Request interceptor to add token to each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle 401 errors automatically
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Check if the error is 401 (Unauthorized)
    if (error.response?.status === 401) {
      // Clear the invalid token
      localStorage.removeItem('token');

      // Redirect to login page
      window.location.href = '/login';

      // Return a rejected promise with a user-friendly message
      return Promise.reject({
        ...error,
        message: 'Session expired. Please login again.'
      });
    }

    return Promise.reject(error);
  }
);