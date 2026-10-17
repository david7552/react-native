import React from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { MotoCard } from '../components/MotoCard';
import { motos } from '../data/mockData';
import { Moto } from '../types/moto';

export function HomeScreen(): React.JSX.Element {
  const handleReserve = (moto: Moto): void => {
    Alert.alert('Reserva', `Reservaste la ${moto.name}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MotoRent</Text>
        <Text style={styles.headerSubtitle}>Alquiler de motos</Text>
      </View>
      <FlatList
        data={motos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <MotoCard moto={item} onReserve={handleReserve} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1117' },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  headerTitle: { fontSize: 28, fontWeight: '800', color: '#f0f6fc' },
  headerSubtitle: { fontSize: 14, color: '#8b949e', marginTop: 2 },
  list: { padding: 16 },
});