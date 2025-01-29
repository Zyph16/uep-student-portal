export const isAuthenticated = (): boolean => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token; // Return true if token exists
    }
    return false;
  };