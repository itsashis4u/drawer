import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function ContactScreen() {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
