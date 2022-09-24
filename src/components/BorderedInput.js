import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

function BorderedInput({hasMarginBottom, placeholder}) {
  return (
    <TextInput
      style={[styles.borderedInput, hasMarginBottom && styles.margin]}
      placeholder={placeholder}
      placeholderTextColor={'#C8CBCF'}
    />
  );
}

const styles = StyleSheet.create({
  borderdInput: {
    borderColor: '#F2F1F6',
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderRadius: 10,
    width: 312,
    height: 51,
    backgroundColor: '#F2F1F6',
    fontSize: 15,
  },
  margin: {
    marginBottom: 14,
  },
});

export default React.forwardRef(BorderedInput);
