// ============================================
// TYPES — Semana 02
// Define aquí la interfaz de tu dominio
// ============================================
export type ItemCategoria='scooter'|'deportiva'|'naked'|'';

export interface Item {
  id: string;
  /** Nombre o título principal del elemento */
  name: string;
  nombre:string;
  marca:string;
  cilindraje:number;
  precioPorDia:number;
  disponible:boolean;
  categoria:ItemCategoria;
}