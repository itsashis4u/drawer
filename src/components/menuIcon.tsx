import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export function MenuIcon({onPress}: {onPress: () => void}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.menuIcon} source={require('../assets/menu.png')} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
});
