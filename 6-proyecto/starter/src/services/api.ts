// src/services/api.ts — Instancia centralizada de Axios

import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL ?? 'https://6af74fbae844c7ff741c5dd8.mockapi.io',
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor global de errores
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (__DEV__) {
      console.error('[API error]', error.response?.status, error.config?.url);
    }
    return Promise.reject(error);
  },
);
