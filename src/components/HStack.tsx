import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface HStackProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function HStack({children, style}: HStackProps) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
