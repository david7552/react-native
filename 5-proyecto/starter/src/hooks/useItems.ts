import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createItem, deleteItem, fetchItemById, fetchItems } from '../services/api';
import type { CreateItemPayload, Item } from '../types';

export const ITEMS_QUERY_KEY = ['items', 'list'] as const;

export function useItems() {
  return useQuery<Item[], Error>({
    queryKey: ITEMS_QUERY_KEY,
    queryFn: fetchItems,
  });
}

export function useItemById(id: string | number) {
  return useQuery<Item, Error>({
    queryKey: [...ITEMS_QUERY_KEY, id],
    queryFn: () => fetchItemById(id),
    enabled: !!id,
  });
}

export function useCreateItem() {
  const queryClient = useQueryClient();
  return useMutation<Item, Error, CreateItemPayload>({
    mutationFn: createItem,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY }),
  });
}

export function useDeleteItem() {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string | number>({
    mutationFn: deleteItem,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY }),
  });
}