import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const Input = ({title, placeholder, keyboard, is_password}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.container_text}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.container_textInput}
        secureTextEntry={is_password}
        keyboardType={keyboard}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  container_text: {
    fontSize: 16,
    color: '#03bafc',
  },
  container_textInput: {
    borderBottomColor: '#03bafc',
    borderBottomWidth: 1,
    paddingVertical: 0,
    marginTop: 5,
  },
});
