import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import COLORS from '../constants/colors';

export default function CustomButton({
  title,
  onPress,
  color,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: color || COLORS.primary},
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },

  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});