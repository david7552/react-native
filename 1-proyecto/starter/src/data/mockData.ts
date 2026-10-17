import { Moto } from '../types/moto';

export const motos: Moto[] = [
  {
    id: '1',
    nombre: 'Honda CB500F',
    subtitulo: 'Naked ideal para ciudad y carretera',
    categoria: 'Naked',
    precioPorDia: 120000,
    cilindraje: 471,
    imagenUrl: 'https://placehold.co/600x400/png?text=Honda+CB500F',
    disponible: true,
  },
  {
    id: '2',
    nombre: 'Yamaha NMAX',
    subtitulo: 'Scooter cómoda para el día a día',
    categoria: 'Scooter',
    precioPorDia: 70000,
    cilindraje: 155,
    imagenUrl: 'https://placehold.co/600x400/png?text=Yamaha+NMAX',
    disponible: true,
  },
  {
    id: '3',
    nombre: 'BMW R 1250 GS',
    subtitulo: 'Touring para viajes largos',
    categoria: 'Touring',
    precioPorDia: 280000,
    cilindraje: 1254,
    imagenUrl: 'https://placehold.co/600x400/png?text=BMW+R1250GS',
    disponible: false,
  },
  {
    id: '4',
    nombre: 'Suzuki DR 650',
    subtitulo: 'Enduro para caminos destapados',
    categoria: 'Enduro',
    precioPorDia: 150000,
    cilindraje: 644,
    imagenUrl: 'https://placehold.co/600x400/png?text=Suzuki+DR650',
    disponible: true,
  },
];