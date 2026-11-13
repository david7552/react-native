// src/types/index.ts
// Define los tipos de datos del dominio.
// Adapta la interfaz Item a tu dominio asignado.
// ============================================
// INTERFACE PRINCIPAL DEL DOMINIO
// ============================================

export interface Item {
  id: string;
  // Nombre del elemento (libro, medicamento, película, rutina, etc.)
  name: string;
  // Descripción general del elemento
  description: string;
  engineDisplacement:number;
  pricePerDia:number;
  available:boolean;
}
