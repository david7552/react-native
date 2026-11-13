// src/stores/savedStore.ts
// store zustand es para gestionar las motos guardadas.

import { create } from 'zustand';
import type { Item } from '../types';

interface SavedStore {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  clearAll: () => void;
  isItemSaved: (id: string) => boolean;
}

export const useSavedStore = create<SavedStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    if (get().items.some((i) => i.id === item.id)) return;
    set((state) => ({ items: [...state.items, item] }));
  },

  removeItem: (id) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },

  clearAll: () => {
    set({ items: [] });
  },

  isItemSaved: (id) => get().items.some((i) => i.id === id),
}));