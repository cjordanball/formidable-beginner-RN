import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import InitScreen from '@screens/InitScreen';
import { formidableStore } from '@app/appState/stores';

export default function App() {
  return (
    <Provider store={formidableStore}>
      <InitScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
