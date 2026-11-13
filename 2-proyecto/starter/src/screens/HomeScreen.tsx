import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ListRenderItem,
} from 'react-native';
import { Item } from '../types';
import { ITEMS } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

/** Línea divisora entre tarjetas de los items*/
function Separator(): React.JSX.Element {
  return <View style={styles.separator} />;
}

/** buscador + lista de motos de renta.*/
export function HomeScreen(): React.JSX.Element {
  // Texto que el usuario escribe en el buscador.
  const [query, setQuery] = useState<string>('');

  // Filtro de la nusqueda
  const filteredItems = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (text === '') return ITEMS;
    return ITEMS.filter((item) => item.name.toLowerCase().includes(text));
  }, [query]);

  // se muestra vacío cuando la búsqueda no encuentra resultados.
  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Sin resultados para "{query}"</Text>
        <Text style={styles.emptySubText}>
          Prueba con otro nombre de moto,ejemplo "Yamaha" o "Honda".
        </Text>
      </View>
    ),
    [query],
  );

  // Renderiza cada moto como una tarjeta.
  const renderItem: ListRenderItem<Item> = useCallback(
    ({ item }) => <ItemCard item={item} onPress={() => {}} />,
    [],
  );

  return (
    // Evita que el teclado tape el contenido en los celulares.
    <KeyboardAvoidingView
      style={styles.kvContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Al tocar fuera del input se cierra el teclado.Se desactiva en web. */}
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
        disabled={Platform.OS === 'web'}
      >
        <View style={styles.inner}>
          {/* Buscador: cada letra actualiza query y filtra la lista */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar moto..."
              placeholderTextColor={COLORS.textSecondary}
              value={query}
              onChangeText={setQuery}
              keyboardType="default"
              returnKeyType="search"
              clearButtonMode="while-editing"
            />
          </View>

          {/* Lista: usa el `id` como clave (nunca el índice) */}
          <FlatList
            data={filteredItems}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={renderEmpty}
            ItemSeparatorComponent={Separator}
            keyboardShouldPersistTaps="handled" // permite tocar las tarjetas con el teclado abierto
            contentContainerStyle={styles.listContent}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  // Contenedor con el fondo de la app
  kvContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  // Ocupa todo el espacio disponible
  inner: {
    flex: 1,
  },
  // Franja del buscador
  searchContainer: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderLight,
  },
  // Campo de texto
  searchInput: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: SPACING.base,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
    color: COLORS.textPrimary,
    fontSize: TYPOGRAPHY.size.base,
  },
  // Espaciado interno de la lista; flexGrow permite centrar el estado vacío
  listContent: {
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.xl,
    flexGrow: 1,
  },
  // Línea entre tarjetas
  separator: {
    height: 1,
    marginHorizontal: SPACING.base,
    backgroundColor: COLORS.borderLight,
  },
  // Estado vacío: centrado en pantalla
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingHorizontal: SPACING.xxl,
  },
  // Mensaje principal del estado vacío
  emptyText: {
    fontSize: TYPOGRAPHY.size.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: SPACING.sm,
  },
  // Mensaje secundario del estado vacío
  emptySubText: {
    fontSize: TYPOGRAPHY.size.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});