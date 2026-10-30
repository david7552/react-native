// src/types/index.ts
// Interface principal del dominio.
// TODO: adaptar a tu dominio asignado.

export interface Item {
  id: string;
  name: string;
  description: string;
  engineDisplacement:number;
  pricePerDia:number;
  available:boolean;
}
