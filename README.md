# Renta de Motos

App móvil de renta de motos hecha con React Native y Expo. Permite explorar el catálogo, ver el detalle de cada moto y guardar las favoritas en una lista compartida entre pestañas.

## Dominio

Renta de motos: cada moto tiene nombre, descripción, imagen, cilindrada (cc), precio por día y disponibilidad.

## Funcionalidades

- Pestaña **Motos**: lista de motos con imagen, nombre, descripción, cilindrada y precio por día.
- Detalle de cada moto con botón **Guardar / Quitar**.
- Pestaña **Guardados**: motos guardadas, con opción de quitar una o limpiar todo.
- Badge en la pestaña **Guardados** con el conteo en tiempo real.

## Tecnologías

- React Native + Expo
- TypeScript (sin `any`)
- React Navigation (Bottom Tabs + Native Stack)
- Zustand para el estado global
- pnpm

## Estructura

    src/
    ├── data/mockData.ts          # Catálogo de motos
    ├── navigation/               # Tabs, stack y tipos de rutas
    ├── screens/                  # HomeScreen, DetailScreen, SavedScreen
    ├── stores/savedStore.ts      # Store de motos guardadas
    ├── theme/                    # Colores, espaciados y tipografía
    └── types/index.ts            # Interface Item

## Estado global

`savedStore.ts` expone:

- `items`: motos guardadas
- `addItem(item)`: agrega una moto (sin duplicados)
- `removeItem(id)`: quita una moto por id
- `clearAll()`: vacía los guardados
- `isItemSaved(id)`: indica si una moto está guardada

## Cómo ejecutar

    pnpm install
    pnpm start

Luego abre la app en un simulador iOS/Android o en Expo Go.

## Verificar tipos

    pnpm tsc --noEmit