// Token cleanup utility
// This function clears invalid tokens and redirects to login

export const clearInvalidToken = () => {
  try {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    
    // If we're not already on the login page, redirect there
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
    
    console.log('✅ Invalid token cleared successfully');
    return true;
  } catch (error) {
    console.error('❌ Error clearing token:', error);
    return false;
  }
};

// Auto-cleanup function that runs when the module is imported
const autoCleanup = () => {
  const token = localStorage.getItem('token');
  
  // If there's a token, we'll let the normal authentication flow handle it
  // The axios interceptor and ProtectedRoute will catch any 401 errors
  
  if (!token && window.location.pathname !== '/login' && window.location.pathname !== '/register') {
    // No token and not on login/register page - redirect to login
    window.location.href = '/login';
  }
};

// Run auto-cleanup when this module is imported
autoCleanup();