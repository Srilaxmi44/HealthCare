/* eslint-disable no-undef */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from './CTStyleDropDown';

const CTDropdown = props => {
  console.log('Hello drop', props.data.countries);
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
            props.onDropdownChange(selectedItem); // Call the provided callback
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

export default CTDropdown;
