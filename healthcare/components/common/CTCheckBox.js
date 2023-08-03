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

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CTCheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  Icon.loadFont();
  const handleCheckboxToggle = () => {
    console.log('hello America');
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxToggle} style={styles.container}>
      <View style={styles.checkboxContainer}>
        {isChecked ? (
          <Icon name="check-box" size={22} />
        ) : (
          <Icon name="check-box-outline-blank" size={22} color="gray" />
        )}
      </View>
      <Text style={styles.label}>Remember me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 5,
    fontSize: 16,
    color: 'gray'
  },
});

export default CTCheckBox;
