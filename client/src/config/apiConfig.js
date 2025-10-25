// API Configuration
// This file centralizes all API endpoints and base URLs

// Get the API base URL from environment variables
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';
export const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

// API Endpoints
export const API_ENDPOINTS = {
  // User endpoints
  REGISTER: `${API_BASE_URL}/users/register`,
  LOGIN: `${API_BASE_URL}/users/login`,
  GET_CURRENT_USER: `${API_BASE_URL}/users/get-current-user`,

  // Movie endpoints
  GET_ALL_MOVIES: `${API_BASE_URL}/movies`,
  ADD_MOVIE: `${API_BASE_URL}/movies`,
  UPDATE_MOVIE: `${API_BASE_URL}/movies`,
  DELETE_MOVIE: `${API_BASE_URL}/movies`,

  // Theatre endpoints
  GET_ALL_THEATRES: `${API_BASE_URL}/theatres`,
  ADD_THEATRE: `${API_BASE_URL}/theatres`,
  UPDATE_THEATRE: `${API_BASE_URL}/theatres`,
  DELETE_THEATRE: `${API_BASE_URL}/theatres`,
  GET_THEATRES_BY_MOVIE: `${API_BASE_URL}/theatres/get-all-theatres-by-movie`,

  // Show endpoints
  ADD_SHOW: `${API_BASE_URL}/theatres/add-show`,
  GET_ALL_SHOWS_BY_THEATRE: `${API_BASE_URL}/theatres/get-all-shows-by-theatre`,
  DELETE_SHOW: `${API_BASE_URL}/theatres/delete-show`,
  GET_SHOW_BY_ID: `${API_BASE_URL}/theatres/get-show-by-id`,

  // TMDB endpoints (these might be direct to TMDB, but keeping consistent structure)
  TMDB_LATEST: `${API_BASE_URL}/movies/tmdb/latest`,
  TMDB_POPULAR: `${API_BASE_URL}/movies/tmdb/popular`,
  TMDB_UPCOMING: `${API_BASE_URL}/movies/tmdb/upcoming`,
  TMDB_TOP_RATED: `${API_BASE_URL}/movies/tmdb/top-rated`,
  TMDB_GENRES: `${API_BASE_URL}/movies/tmdb/genres`,
  TMDB_SEARCH: `${API_BASE_URL}/movies/tmdb/search`,
  TMDB_MOVIE_DETAILS: `${API_BASE_URL}/movies/tmdb/movie-details`
};

export default API_ENDPOINTS;