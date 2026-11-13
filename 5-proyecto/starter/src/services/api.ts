// src/services/api.ts
// Instancia Axios centralizada para el proyecto.
// TODO: configurar la baseURL de tu API real.


// ============================================================
// BASE URL
// ============================================================
// TODO: reemplaza esta URL por la de tu API del dominio.
// Opciones rápidas para practicar:
//   - JSONPlaceholder: https://jsonplaceholder.typicode.com  (solo /posts, /users, etc.)
//   - MockAPI: https://mockapi.io  (crea tu propio endpoint con los campos de tu dominio)
//   - json-server: instala localmente y corre con `pnpm dlx json-server db.json`

// Expo expone variables de entorno con prefijo EXPO_PUBLIC_
// ej. en .env.local: EXPO_PUBLIC_API_URL=https://tu-api.com
import axios from 'axios';
import type { CreateItemPayload, Item } from '../types';

export const api = axios.create({
  baseURL: 'https://6af74fbae844c7ff741c5dd8.mockapi.io',
  timeout: 10000,
});

export async function fetchItems(): Promise<Item[]> {
  const { data } = await api.get<Item[]>('/Catalogo');
  return data;
}

export async function fetchItemById(id: string | number): Promise<Item> {
  const { data } = await api.get<Item>(`/Catalogo/${id}`);
  return data;
}

export async function createItem(payload: CreateItemPayload): Promise<Item> {
  const { data } = await api.post<Item>('/Catalogo', payload);
  return data;
}

export async function deleteItem(id: string | number): Promise<void> {
  await api.delete(`/Catalogo/${id}`);
}
// ============================================================
// INTERCEPTOR DE RESPUESTA — manejo global de errores
// ============================================================
