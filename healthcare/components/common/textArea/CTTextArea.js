import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Styles from './CTStyleTextArea';

const CTTextArea = props => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.dr_text_footer}>{props.title}</Text>
      <TextInput
        multiline
        numberOfLines={4} // Set the number of visible lines
        placeholder={props.placeholder}
        style={Styles.textArea}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};

export default CTTextArea;
