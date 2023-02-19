import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
  StyleSheet,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  titleStyle?: TextStyle;
}

export function Button({title, titleStyle, ...props}: ButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#007aff',
    textAlign: 'center',
    padding: 8,
  },
});
