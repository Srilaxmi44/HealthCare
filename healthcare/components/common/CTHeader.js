import {View, Text, Image} from 'react-native';
import React from 'react';
import {Styles} from 'Styles';

export default function CTHeader() {
  return (
    <View style={Styles.headerViewContainer}>
      <Image
        source={require('../../assets/Images/Original.png')}
        style={Styles.iconHeader}></Image>
    </View>
  );
}
