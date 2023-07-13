import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Styles } from '@/Styles';
import Feather from 'react-native-vector-icons/Feather';

const cTextField = ({ props }) => {
  return (
    <View>
      <Text style={Styles.text_footer}>{props.title}</Text>
      <View style={Styles.action}>
        {(props.isIcon &&
          <Feather name={props.fontname} color="#05375a" size={20} />
        )}
        <TextInput
          placeholder={props.placeholder}
          style={Styles.textInput}
          autoCapitalize="none"
          secureTextEntry={props.is_password}
          keyboardType={props.keyboard}
        />
      </View>
    </View>
  );
};

export default cTextField;
