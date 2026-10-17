import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Moto } from '../types/moto';

interface TarjetaMotoProps {
    moto: Moto;
    alReservar: (moto: Moto) => void;
}

export function TarjetaMoto({ moto, alReservar }: TarjetaMotoProps): React.JSX.Element {
    return (
    <View style={estilos.tarjeta}>
        <Image source={{ uri: moto.imagen }} style={estilos.imagen} resizeMode="cover" />
        <View style={estilos.cuerpo}>
        <Text style={estilos.nombre}>{moto.nombre}</Text>
        <Text style={estilos.subtitulo}>{moto.subtitulo}</Text>
        <View style={estilos.fila}>
            <Text style={estilos.detalle}>
            {moto.categoria} · {moto.cilindraje} cc
            </Text>
            <Text style={estilos.precio}>${moto.precioPorDia.toLocaleString('es-CO')}/día</Text>
        </View>
        <Pressable
            disabled={!moto.disponible}
            onPress={() => alReservar(moto)}
            style={({ pressed }) => [
            estilos.boton,
            !moto.disponible && estilos.botonDeshabilitado,
            pressed && estilos.botonPresionado,
            ]}
        >
            <Text style={estilos.textoBoton}>
            {moto.disponible ? 'Reservar' : 'No disponible'}
            </Text>
        </Pressable>
        </View>
    </View>
    );
}

const estilos = StyleSheet.create({
    tarjeta: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#30363d',
    },
    imagen: { width: '100%', height: 180 },
    cuerpo: { padding: 16 },
    nombre: { fontSize: 20, fontWeight: '700', color: '#f0f6fc' },
    subtitulo: { fontSize: 14, color: '#8b949e', marginTop: 4 },
    fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    },
    detalle: { fontSize: 13, color: '#8b949e' },
    precio: { fontSize: 16, fontWeight: '600', color: '#58a6ff' },
    boton: {
    backgroundColor: '#238636',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 14,
    },
    botonPresionado: { backgroundColor: '#1a6329', opacity: 0.85 },
    botonDeshabilitado: { backgroundColor: '#30363d' },
    textoBoton: { color: '#ffffff', fontWeight: '600', fontSize: 15 },
});