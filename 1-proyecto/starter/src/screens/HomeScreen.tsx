import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TarjetaMoto } from '../components/TarjetaMoto';
import { motos } from '../data/mockData';
import { Moto } from '../types/moto';

export function PantallaInicio(): React.JSX.Element {
  const manejarReserva = (moto: Moto): void => {
    Alert.alert('Reserva', `Reservaste la ${moto.nombre}`);
  };

  return (
    <SafeAreaView style={estilos.contenedor}>
      <View style={estilos.encabezado}>
        <Text style={estilos.tituloEncabezado}>MotoRenta</Text>
        <Text style={estilos.subtituloEncabezado}>Alquiler de motos</Text>
      </View>
      <FlatList
        data={motos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={estilos.lista}
        renderItem={({ item }) => <TarjetaMoto moto={item} alReservar={manejarReserva} />}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: '#0d1117' },
  encabezado: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  tituloEncabezado: { fontSize: 28, fontWeight: '800', color: '#f0f6fc' },
  subtituloEncabezado: { fontSize: 14, color: '#8b949e', marginTop: 2 },
  lista: { padding: 16 },
});