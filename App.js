import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListaItens from './src/components/ListaItens';

export default function App() {
  return (
    <View style={styles.container}>
      <ListaItens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
