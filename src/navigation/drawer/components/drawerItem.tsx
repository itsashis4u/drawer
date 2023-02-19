import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface DrawerItemProps {
  label: string;
  isFocused: boolean;
  onPress: (label: string) => void;
}

export function DrawerItem({label, isFocused, onPress}: DrawerItemProps) {
  function handlePress() {
    onPress(label);
  }
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.drawerItemButton,
        isFocused ? styles.focusedDrawerItemButton : null,
      ]}>
      <Text
        style={[
          styles.drawerItemText,
          isFocused ? styles.focusedDrawerItemText : null,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  focusedDrawerItemText: {
    color: 'tomato',
  },
  focusedDrawerItemButton: {
    backgroundColor: 'rgb(53,39,41)',
    width: '50%',
  },
  drawerItemButton: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  drawerItemText: {
    fontSize: 22,
    color: 'white',
  },
});
