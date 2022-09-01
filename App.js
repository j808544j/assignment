import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import OrderDetails from "./components/OrderDetails/OrderDetails"
import ItemDetails from "./components/ItemDetails/ItemDetails"
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View >
    <OrderDetails/>
    </View>
  );
}

