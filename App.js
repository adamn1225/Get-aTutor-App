import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 44, color: 'purple'}}>Get-a-Tutor</Text>
      <Text style={{fontSize: 24, textAlign: 'center'}}>Sign in and find a qualified tutor in your area!</Text>

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8ebe9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
