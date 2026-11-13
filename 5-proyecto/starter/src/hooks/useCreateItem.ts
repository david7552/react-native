import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createItem } from '../services/api';
import { ITEMS_QUERY_KEY } from './useItems';
import type { CreateItemPayload, Item } from '../types';

export function useCreateItem() {
  const queryClient = useQueryClient();

  return useMutation<Item, Error, CreateItemPayload>({
    mutationFn: createItem,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ITEMS_QUERY_KEY }),
  });
}