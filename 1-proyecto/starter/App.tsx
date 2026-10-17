import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { PantallaInicio } from './src/screens/HomeScreen';

export default function App(): React.JSX.Element {
  return (
    <>
      <StatusBar style="light" />
      <PantallaInicio />
    </>
  );
}