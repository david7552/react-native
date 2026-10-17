import { Moto } from '../types/moto';

export const motos: Moto[] = [
  {  
    id: '2',
    nombre: 'Yamaha NMAX',
    subtitulo: 'Scooter cómoda para el día a día',
    categoria: 'scooter',
    precioPorDia: 70000,
    cilindraje: 155,
    imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages5.1000ps.net%2Fimages_bikekat%2F2025%2F4-Yamaha%2F8313-NMAX_125%2F003-638665681353105462-yamaha-nmax-125.jpg&f=1&nofb=1&ipt=e7bd440ad03ac60ae7a13a2f804c08277e60aa0a06e89e75788729095bfac6f8&ipo=images',
    disponible: true,
  },
  {
    id: '3',
    nombre: 'Ducati Monster',
    subtitulo: 'Naked de carácter deportivo para no llegar tarde',
    categoria: 'ducati',
    precioPorDia: 250000,
    cilindraje: 937,
    imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.totalmotorcycle.com%2Fwp-content%2Fuploads%2F2023%2F02%2F2023-Ducati-Monster-Plus5.jpg&f=1&nofb=1&ipt=4db205007889ab25ac45e2af26098db87a1ab3dfb17c047894d64490d21442ec&ipo=images',
    disponible: false,
  },
  {
    id: '4',
    nombre: 'Kawasaki Ninja 400',
    subtitulo: 'Deportiva ligera para no ir en transmi',
    categoria: 'ninja',
    precioPorDia: 160000,
    cilindraje: 399,
    imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-0.totalmotorcycle.com%2Fwp-content%2Fuploads%2F2019%2F11%2F2020-Kawasaki-Ninja-400-ABS5.jpg&f=1&nofb=1&ipt=9c420cb36ba43c99ee5f3a83f0cee98c42d47fbcc8ceb908c435ec64aba6bb9d&ipo=images',
    disponible: true,
  },
];