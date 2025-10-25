// Import the 'axiosInstance' object from the current module (assuming it's defined in the imported module).
import { axiosInstance } from ".";

// Add a new movie function (admin only)
export const AddMovie = async (payload) => {
  try {
    // Send a POST request to the "/api/movies/add-movie" endpoint with the provided payload.
    const response = await axiosInstance.post("/api/movies/add-movie", payload);
    // If the request is successful (status code 2xx), return the data from the response.
    return response.data;
  } catch (error) {
    // If an error occurs during the request, return the response from the error object.
    // This may include the status code, headers, and possibly an error message from the server.
    return error.response;
  }
};

// get all movies function with local storage caching for mobile devices
export const GetAllMovies = async () => {
  const STORAGE_KEY = 'bookMyMovie_movies';
  const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes in milliseconds
  
  try {
    // Check if we have cached movies in localStorage
    const cachedData = localStorage.getItem(STORAGE_KEY);
    if (cachedData) {
      const parsedCache = JSON.parse(cachedData);
      const now = new Date().getTime();
      
      // If cache is still valid (within 30 minutes), return cached data
      if (now - parsedCache.timestamp < CACHE_DURATION) {
        console.log('Loading movies from cache for better mobile performance');
        return {
          success: true,
          data: parsedCache.movies,
          fromCache: true
        };
      }
    }

    // Send a GET request to the "/api/movies/get-all-movies" endpoint.
    const response = await axiosInstance.get("/api/movies/get-all-movies");
    
    // If the request is successful, cache the data for mobile devices
    if (response.data.success) {
      const cacheData = {
        movies: response.data.data,
        timestamp: new Date().getTime()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cacheData));
      console.log('Movies cached for mobile performance');
    }
    
    // Return the data from the response.
    return response.data;
  } catch (error) {
    // If API fails, try to return cached data as fallback for mobile
    const cachedData = localStorage.getItem(STORAGE_KEY);
    if (cachedData) {
      const parsedCache = JSON.parse(cachedData);
      console.log('API failed, loading movies from cache as fallback');
      return {
        success: true,
        data: parsedCache.movies,
        fromCache: true,
        fallback: true
      };
    }
    
    // If no cache available, return the error response
    return error.response;
  }
};

// Clear movies cache - useful for admin operations or manual refresh
export const ClearMoviesCache = () => {
  const STORAGE_KEY = 'bookMyMovie_movies';
  localStorage.removeItem(STORAGE_KEY);
  console.log('Movies cache cleared');
};

// Check if movies are loaded from cache
export const IsMoviesCached = () => {
  const STORAGE_KEY = 'bookMyMovie_movies';
  return localStorage.getItem(STORAGE_KEY) !== null;
};

// update movie function (admin only)
export const UpdateMovie = async (payload) => {
  try {
    // Send a POST request to the "/api/movies/update-movie" endpoint with the provided payload.
    const response = await axiosInstance.post(
      "/api/movies/update-movie",
      payload
    );
    // If the request is successful (status code 2xx), return the data from the response.
    return response.data;
  } catch (error) {
    // If an error occurs during the request, return the response from the error object.
    // This may include the status code, headers, and possibly an error message from the server.
    return error.response;
  }
};

// delete movie function (admin only)
export const DeleteMovie = async (payload) => {
  try {
    // Send a POST request to the "/api/movies/delete-movie" endpoint with the provided payload.
    const response = await axiosInstance.post(
      "/api/movies/delete-movie",
      payload
    );
    // If the request is successful (status code 2xx), return the data from the response.
    return response.data;
  } catch (error) {
    // If an error occurs during the request, return the response from the error object.
    // This may include the status code, headers, and possibly an error message from the server.
    return error.response;
  }
};

// get movie by id function (admin and user)
export const GetMovieById = async (id) => {
  try {
    // Send a GET request to the "/api/movies/get-movie-by-id" endpoint with the provided id.
    const response = await axiosInstance.get(
      `/api/movies/get-movie-by-id/${id}`
    );
    // If the request is successful (status code 2xx), return the data from the response.
    return response.data;
  } catch (error) {
    // If an error occurs during the request, return the response from the error object.
    // This may include the status code, headers, and possibly an error message from the server.
    return error.response;
  }
}

// TMDB API Integration Functions
const TMDB_API_KEY = '8265bd1679663a7ea12ac168da84d2e8'; // Free API key for demo
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Get latest movies from TMDB
export const GetLatestMoviesFromTMDB = async () => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return { success: true, data: data.results };
  } catch (error) {
    console.error('Error fetching latest movies from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Get popular movies from TMDB
export const GetPopularMoviesFromTMDB = async () => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return { success: true, data: data.results };
  } catch (error) {
    console.error('Error fetching popular movies from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Get upcoming movies from TMDB
export const GetUpcomingMoviesFromTMDB = async () => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return { success: true, data: data.results };
  } catch (error) {
    console.error('Error fetching upcoming movies from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Get top rated movies from TMDB
export const GetTopRatedMoviesFromTMDB = async () => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return { success: true, data: data.results };
  } catch (error) {
    console.error('Error fetching top rated movies from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Get movies by genre from TMDB
export const GetMoviesByGenreFromTMDB = async (genreId) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&language=en-US&page=1`);
    const data = await response.json();
    return { success: true, data: data.results };
  } catch (error) {
    console.error('Error fetching movies by genre from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Get movie genres from TMDB
export const GetMovieGenresFromTMDB = async () => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`);
    const data = await response.json();
    return { success: true, data: data.genres };
  } catch (error) {
    console.error('Error fetching movie genres from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Get movie details from TMDB
export const GetMovieDetailsFromTMDB = async (movieId) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`);
    const data = await response.json();
    return { success: true, data: data };
  } catch (error) {
    console.error('Error fetching movie details from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Search movies from TMDB
export const SearchMoviesFromTMDB = async (query) => {
  try {
    const response = await fetch(`${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`);
    const data = await response.json();
    return { success: true, data: data.results };
  } catch (error) {
    console.error('Error searching movies from TMDB:', error);
    return { success: false, message: error.message };
  }
};

// Import movie from TMDB to local database
export const ImportMovieFromTMDB = async (tmdbMovie) => {
  try {
    const response = await axiosInstance.post("/api/movies/import-from-tmdb", { tmdbMovie });
    return response.data;
  } catch (error) {
    return error.response;
  }
};

// Get trending movies for booking (local + imported)
export const GetTrendingMoviesForBooking = async () => {
  try {
    const response = await axiosInstance.get("/api/movies/trending-for-booking");
    return response.data;
  } catch (error) {
    return error.response;
  }
};
