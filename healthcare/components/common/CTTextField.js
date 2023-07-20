import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Styles} from 'Styles';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
Feather.loadFont();

const cTextField = props => {
  return (
    <View>
      <Text style={Styles.text_footer}>{props.title}</Text>
      <View style={Styles.action}>
        {props.fontname != '' && (
          <Feather name={props.fontname} color="#05375a" size={20} />
        )}
        <TextInput
          placeholder={props.placeholder}
          style={Styles.textInput}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboard}
        />

        {props.title === 'password' ? (
          <TouchableOpacity onPress={props.onTogglePasswordVisibility}>
            <Icon
              name={props.secureTextEntry ? 'eye-slash' : 'eye'}
              size={20}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default cTextField;
