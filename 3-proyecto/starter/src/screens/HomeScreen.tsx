
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import ItemCard from '../components/ItemCard';
import { platillos } from '../data/mockData';
export default function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0d1117"
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>
            SABORES CON PERSONALIDAD
          </Text>

          <Text style={styles.title}>
            Sazón Urbano
          </Text>

          <Text style={styles.subtitle}>
            Descubre tu próximo platillo favorito.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Nuestro menú
          </Text>

          <Text style={styles.count}>
            {platillos.length} platillos
          </Text>
        </View>

        {platillos.map((platillo) => (
          <ItemCard
            key={platillo.id}
            platillo={platillo}
          />
        ))}

        <Text style={styles.footer}>
          Hecho con sabor ♥
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  scroll: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 36,
  },
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    color: '#fbbf24',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 15,
    lineHeight: 22,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  count: {
    color: '#9ca3af',
    fontSize: 13,
  },
  footer: {
    color: '#6b7280',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
});
