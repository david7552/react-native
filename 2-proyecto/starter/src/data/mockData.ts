import { Item } from '../types';

// ============================================
// MOCK DATA — Semana 02
// Reemplaza estos items genéricos con datos
// reales de tu dominio asignado.
//
// REQUISITO: mínimo 10 items
// ============================================

// TODO: Renombra ITEMS a algo descriptivo de tu dominio
//       Ejemplo: BOOKS, MEDICINES, MEMBERS, DISHES...
// TODO: Actualiza el tipo Item con los campos de tu dominio
// TODO: Rellena con datos reales y variados de tu dominio

export const ITEMS: Item[] = [
  { id: '1', name: 'Yamaha MT-07', nombre: 'Yamaha MT-07', marca: 'Yamaha', cilindraje: 689, precioPorDia: 65000, disponible: true, categoria: 'naked' },
  { id: '2', name: 'Honda PCX 160', nombre: 'Honda PCX 160', marca: 'Honda', cilindraje: 157, precioPorDia: 25000, disponible: true, categoria: 'scooter' },
  { id: '3', name: 'Kawasaki Ninja 400', nombre: 'Kawasaki Ninja 400', marca: 'Kawasaki', cilindraje: 390, precioPorDia: 55000, disponible: false, categoria: 'deportiva' },
  { id: '4', name: 'Yamaha R3', nombre: 'Yamaha R3', marca: 'Yamaha', cilindraje: 321, precioPorDia: 52000, disponible: true, categoria: 'deportiva' },
  { id: '5', name: 'Suzuki GSX-S750', nombre: 'Suzuki GSX-S750', marca: 'Suzuki', cilindraje: 749, precioPorDia: 70000, disponible: true, categoria: 'naked' },
  { id: '6', name: 'Yamaha NMAX 155', nombre: 'Yamaha NMAX 155', marca: 'Yamaha', cilindraje: 155, precioPorDia: 28000, disponible: false, categoria: 'scooter' },
  { id: '7', name: 'Honda CB500F', nombre: 'Honda CB500F', marca: 'Honda', cilindraje: 471, precioPorDia: 50000, disponible: true, categoria: 'naked' },
  { id: '8', name: 'KTM Duke 390', nombre: 'KTM Duke 390', marca: 'KTM', cilindraje: 373, precioPorDia: 48000, disponible: true, categoria: 'naked' },
  { id: '9', name: 'Honda CBR500R', nombre: 'Honda CBR500R', marca: 'Honda', cilindraje: 471, precioPorDia: 58000, disponible: true, categoria: 'deportiva' },
  { id: '10', name: 'Ducati Panigale V2', nombre: 'Ducati Panigale V2', marca: 'Ducati', cilindraje: 955, precioPorDia: 15000, disponible: false, categoria: 'deportiva' },
  { id: '11', name: 'Kawasaki Z650', nombre: 'Kawasaki Z650', marca: 'Kawasaki', cilindraje: 649, precioPorDia: 62000, disponible: true, categoria: 'naked' },
  { id: '12', name: 'Vespa Primavera 150', nombre: 'Vespa Primavera 150', marca: 'Vespa', cilindraje: 155, precioPorDia: 35000, disponible: true, categoria: 'scooter' },
];