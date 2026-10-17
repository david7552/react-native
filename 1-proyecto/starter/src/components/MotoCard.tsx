import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Moto } from '../types/moto';

interface MotoCardProps {
  moto: Moto;
  onReserve: (moto: Moto) => void;
}

export function MotoCard({ moto, onReserve }: MotoCardProps): React.JSX.Element {
  return (
    <View style={styles.card}>
      <Image source={{ uri: moto.imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.name}>{moto.name}</Text>
        <Text style={styles.subtitle}>{moto.subtitle}</Text>
        <View style={styles.row}>
          <Text style={styles.meta}>
            {moto.category} · {moto.engineCc} cc
          </Text>
          <Text style={styles.price}>${moto.pricePerDay.toLocaleString('es-CO')}/día</Text>
        </View>
        <Pressable
          disabled={!moto.available}
          onPress={() => onReserve(moto)}
          style={({ pressed }) => [
            styles.button,
            !moto.available && styles.buttonDisabled,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>
            {moto.available ? 'Reservar' : 'No disponible'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#30363d',
  },
  image: { width: '100%', height: 180 },
  body: { padding: 16 },
  name: { fontSize: 20, fontWeight: '700', color: '#f0f6fc' },
  subtitle: { fontSize: 14, color: '#8b949e', marginTop: 4 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  meta: { fontSize: 13, color: '#8b949e' },
  price: { fontSize: 16, fontWeight: '600', color: '#58a6ff' },
  button: {
    backgroundColor: '#238636',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
  },
  buttonPressed: { backgroundColor: '#1a6329', opacity: 0.85 },
  buttonDisabled: { backgroundColor: '#30363d' },
  buttonText: { color: '#ffffff', fontWeight: '600', fontSize: 15 },
});