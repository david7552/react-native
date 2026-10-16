// ============================================================
// COMPONENT: ItemCard
// ============================================================
// Tarjeta reutilizable para mostrar un elemento del dominio.
// Este componente se renderiza por cada item en HomeScreen.
// ============================================================


import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import type { platillo } from '../types';

interface ItemCardProps {
  platillo: platillo;
}

export default function ItemCard({
  platillo,
}: ItemCardProps): React.JSX.Element {
  const [agregado, setAgregado] = useState(false);

  const precioFormateado = `$${platillo.precio.toLocaleString('es-CO')}`;

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: platillo.imagen }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.category}>{platillo.categoria}</Text>

        <Text style={styles.name}>{platillo.nombre}</Text>

        <Text style={styles.description}>
          {platillo.descripcion}
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>{precioFormateado}</Text>

          <Pressable
            onPress={() => setAgregado(!agregado)}
            style={({ pressed }) => [
              styles.button,
              agregado && styles.buttonAdded,
              pressed && styles.buttonPressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Agregar ${platillo.nombre}`}
          >
            <Text
              style={[
                styles.buttonText,
                agregado && styles.buttonTextAdded,
              ]}
            >
              {agregado ? 'Agregado' : '+ Agregar'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161b22',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#30363d',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 190,
    backgroundColor: '#21262d',
  },
  content: {
    padding: 16,
  },
  category: {
    color: '#fbbf24',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  name: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    color: '#9ca3af',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  price: {
    color: '#fbbf24',
    fontSize: 19,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  button: {
    backgroundColor: '#f59e0b',
    paddingHorizontal: 16,
    paddingVertical: 11,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonAdded: {
    backgroundColor: '#24352c',
    borderWidth: 1,
    borderColor: '#4ade80',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#111827',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonTextAdded: {
    color: '#4ade80',
  },
});
