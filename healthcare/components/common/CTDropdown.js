/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
const {width} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import {Styles} from 'Styles';

export default CTDropdown = props => {
  console.log('propsData', props.data.countries);
  return (
    <View style={Styles.dr_viewContainer}>
      <Text style={Styles.dr_text_footer}>{props.title}</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        contentContainerStyle={Styles.dr_scrollViewContainer}>
        <SelectDropdown
          data={props.data.countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={props.defaultButtonText}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={Styles.dr_dropdownBtnStyle}
          buttonTextStyle={Styles.dr_dropdownBtnTxtStyle}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesome
                name={isOpened ? 'chevron-up' : 'chevron-down'}
                color={'#444'}
                size={18}
              />
            );
          }}
          dropdownIconPosition={props.dropdownIconPosition}
          dropdownStyle={Styles.dr_dropdownDropdownStyle}
          rowStyle={Styles.dr_dropdownRowStyle}
          rowTextStyle={Styles.dr_dropdownRowTxtStyle}
        />
      </ScrollView>
    </View>
  );
};
