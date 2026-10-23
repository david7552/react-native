// src/data/mockData.ts
// Datos de prueba genéricos para la app.
// TODO: reemplazar con datos de tu dominio asignado.

import type { Item } from '../types';

// ============================================
// LISTA PRINCIPAL DE ELEMENTOS
// ============================================
// Estos son datos genéricos de placeholder.
// Debes reemplazarlos con datos coherentes a tu dominio.
//
// Ejemplos:
//   Biblioteca  → libros con autor, ISBN, páginas
//   Farmacia    → medicamentos con precio, stock, dosis
//   Gimnasio    → rutinas con duración, grupos musculares
//   Restaurante → platillos con precio, ingredientes
//   Cine        → películas con director, año, género

export const ITEMS: Item[] = [
  {
    id: '1',
    name: 'Honda CBR19R',
    description: 'Narajanja, idela para la ciudad.',
    engineDisplacement:184,
    pricePerDia:25000,
    available:true
    // TODO: agregar campos específicos de tu dominio
  },
  {
    id: '2',
    name: 'Yamaha MT-03',
    description: 'Comoda para las carreteras.',
    // TODO: agregar campos específicos de tu dominio
    engineDisplacement:321,
    pricePerDia:40000,
    available:true
  },
  {
    id: '3',
    name: 'Suzuki V-Strom 2520',
    description: 'Ideal para viajes cortos y largos.',
    // TODO: agregar campos específicos de tu dominio
    engineDisplacement:248,
    pricePerDia:35000,
    available:true
  },
  {
    id: '4',
    name: 'Kawasaki Ninja 400',
    description: 'Deportiva con alta agilidad.',
    // TODO: agregar campos específicos de tu dominio
    engineDisplacement:399,
    pricePerDia:45000,
    available:true
  },
  {
    id: '5',
    name: 'Vespa Primavera 150',
    description: 'Scooter clasico para ciudad.',
    // TODO: agregar campos específicos de tu dominio
    engineDisplacement:155,
    pricePerDia:30000,
    available:true
  },
  {
    id: '6',
    name: 'Royal Enfrield Himalayan',
    description: 'perfecta para un dia de aventura y ligera.',
    // TODO: agregar campos específicos de tu dominio
    engineDisplacement:411,
    pricePerDia:50000,
    available:true
  },
  {
    id: '7',
    name: 'KTM Duke 200',
    description: 'Naked ligera y nerviosa.',
    // TODO: agregar campos específicos de tu dominio
    engineDisplacement:199,
    pricePerDia:32000,
    available:true
  },
  {
    id: '8',
    name: 'Bajaj Pulsar NS200',
    description: 'Economica y confiable.',
    // TODO: agregar campos específicos de tu dominio
    engineDisplacement:199,
    pricePerDia:22000,
    available:true
  },
];

// ============================================
// LISTA DE FAVORITOS
// ============================================
// Subconjunto de elementos para la pestaña Favorites.
// TODO: seleccionar elementos coherentes con tu dominio.

export const FAVORITES: Item[] = [
  ITEMS[6],
  ITEMS[2],
  ITEMS[4],
];
