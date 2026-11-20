export interface Item {
  id: string;
  name: string;
  brand: string;
  pricePerDay: number;
  description?: string;
}

export interface CreateItemPayload {
  name: string;
  brand: string;
  pricePerDay: number;
  description: string;
}

export interface UpdateItemPayload extends CreateItemPayload {
  id: string;
}