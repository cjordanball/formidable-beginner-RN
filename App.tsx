import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import AlbumListScreen from '@screens/AlbumListScreen';
import InitScreen from '@screens/InitScreen';
import { formidableStore } from '@app/appState/stores';
import Styles from '@app/styling';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={formidableStore}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Init">
            <Stack.Screen name="Init" component={ InitScreen} />
            <Stack.Screen name="Albums" component={ AlbumListScreen } />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};
