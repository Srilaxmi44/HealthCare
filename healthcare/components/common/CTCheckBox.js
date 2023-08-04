// import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import CheckBox from 'react-native-checkbox';

// const CTCheckBox = props => {
//   return (
//     <CheckBox
//       style={{width: 10}}
//       label="Remember me"
//       onChange={checked => console.log('I am checked', checked)}
//     />
//   );
// };

// export default CTCheckBox;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Styles} from 'Styles';

function CTCheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  Icon.loadFont();
  const handleCheckboxToggle = () => {
    console.log('hello America');
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      onPress={handleCheckboxToggle}
      style={Styles.containerCheckBox}>
      <View style={Styles.containerCheckBoxView}>
        {isChecked ? (
          <Icon name="check-box" size={22} />
        ) : (
          <Icon name="check-box-outline-blank" size={22} color="gray" />
        )}
      </View>
      <Text style={Styles.containerCheckBoxLabel}>Remember me</Text>
    </TouchableOpacity>
  );
}

export default CTCheckBox;
