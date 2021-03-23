import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SignUpScreen } from './screens/AuthScreens/SignUpScreen';
import { LoginScreen } from './screens/AuthScreens/LoginScreen';
import { Navigation } from './navigations';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
