import {View, Text, TextInput} from 'react-native';
import React from 'react';
import externalStyle from '../../src/Styles/externalStyle';
import Feather from 'react-native-vector-icons/Feather';

const InputText = ({title, placeholder, keyboard, is_password, fontname}) => {
  return (
    <View>
      <Text style={externalStyle.text_footer}>{title}</Text>
      <View style={externalStyle.action}>
        <Feather name={fontname} color="#05375a" size={20} />
        <TextInput
          placeholder={placeholder}
          style={externalStyle.textInput}
          autoCapitalize="none"
          secureTextEntry={is_password}
          keyboardType={keyboard}
        />
      </View>
    </View>
  );
};

export default InputText;
