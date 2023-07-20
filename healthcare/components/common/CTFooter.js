import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from 'Styles';

const CTFooter = () => {
  return (
    <LinearGradient
      colors={['#051937', '#004d7a', '#008793']}
      style={Styles.footerHeaderGradient}>
      <Text style={Styles.footHeaderText}>CommerzTech</Text>
    </LinearGradient>
  );
};

export default CTFooter;
