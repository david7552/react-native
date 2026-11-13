// src/screens/DetailScreen.tsx
// Pantalla de detalle: muestra la información completa de una moto
// y permite guardarla / quitarla usando el store de Zustand.

import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useRoute, type RouteProp } from '@react-navigation/native';

import { COLORS, RADIUS, SPACING, TYPOGRAPHY } from '../theme';
import type { HomeStackParamList } from '../navigation/types';
import { ITEMS } from '../data/mockData';
import { useSavedStore } from '../stores/savedStore';
import type { Item } from '../types';

type DetailRouteProp = RouteProp<HomeStackParamList, 'HomeDetail'>;

export function DetailScreen(): React.JSX.Element {
  const route = useRoute<DetailRouteProp>();
  const { id, name } = route.params;

  const item: Item | undefined = ITEMS.find((i) => i.id === id);

  // El selector llama al helper del store: devuelve un boolean y el
  // componente se re-renderiza solo cuando ese valor cambia.
  const isSaved = useSavedStore((state) => state.isItemSaved(id));
  const addItem = useSavedStore((state) => state.addItem);
  const removeItem = useSavedStore((state) => state.removeItem);

  const handleToggleSave = (): void => {
    if (isSaved) {
      removeItem(id);
    } else if (item) {
      addItem(item);
    }
  };

  return (
    <View style={styles.container}>
      {item ? (
        <Image
          source={{ uri: item.imageURL }}
          style={styles.hero}
          resizeMode="cover"
        />
      ) : null}

      <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.id}>ID: {id}</Text>

        <Text style={styles.description}>{item?.description}</Text>
        <Text style={styles.description}>
          Cilindrada: {item?.engineDisplacement} cc
        </Text>
        <Text style={styles.description}>
          Precio: ${item?.pricePerDia} / día
        </Text>
        <Text style={styles.description}>
          {item?.available ? 'Disponible' : 'No disponible'}
        </Text>
      </View>

      {/* Al guardar aquí, el badge del tab "Guardados" se actualiza
          solo, porque ambos leen el mismo store. */}
      <Pressable
        style={({ pressed }) => [
          styles.saveButton,
          isSaved && styles.saveButtonActive,
          pressed && styles.saveButtonPressed,
        ]}
        onPress={handleToggleSave}
        testID="save-button"
      >
        <Text style={[styles.saveButtonText, isSaved && styles.saveButtonTextActive]}>
          {isSaved ? '★  Guardado' : '☆  Guardar'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: SPACING.lg,
    gap: SPACING.lg,
  },
  hero: {
    width: '100%',
    height: 200,
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.card,
  },
  info: {
    gap: SPACING.sm,
  },
  title: {
    ...TYPOGRAPHY.h2,
  },
  id: {
    ...TYPOGRAPHY.label,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  description: {
    ...TYPOGRAPHY.body,
    color: COLORS.textSecondary,
    lineHeight: 24,
    marginTop: SPACING.sm,
  },
  saveButton: {
    backgroundColor: COLORS.card,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    marginTop: 'auto',
  },
  saveButtonActive: {
    backgroundColor: COLORS.accent,
    borderColor: COLORS.accent,
  },
  saveButtonPressed: {
    opacity: 0.7,
  },
  saveButtonText: {
    ...TYPOGRAPHY.body,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  saveButtonTextActive: {
    color: COLORS.background,
  },
});