import React from 'react';
import { Navigate } from 'react-router';
import { useAuthStore } from '@/stores/authStore';

export const protectedRoute = (component: React.ReactNode): React.ReactNode => {
  const token = useAuthStore.getState().token;
  return token ? component : <Navigate to="/login" replace />;
};