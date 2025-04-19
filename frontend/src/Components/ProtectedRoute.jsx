// src/components/ProtectedRoute.jsx
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { checkAuth } from '../Utils/authService';

export default function ProtectedRoute({ children }) {
  const [authState, setAuthState] = useState({
    isAuthenticated: null,
    isLoading: true
  });
  const location = useLocation();

  useEffect(() => {
    const verifyAuth = async () => {
      const result = await checkAuth();
      setAuthState({
        isAuthenticated: result.isAuthenticated,
        isLoading: false
      });
    };
    verifyAuth();
  }, []);

  if (authState.isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}