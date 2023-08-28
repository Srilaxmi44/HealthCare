import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  dr_viewContainer: {flex: 1, width: '100%'},
  dr_scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },
  dr_dropdownBtnStyle: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    // marginLeft: 10,
    marginTop: -30,
    // marginBottom: 100,
  },
  dr_dropdownBtnTxtStyle: {color: '#444', textAlign: 'left'},
  dr_dropdownDropdownStyle: {backgroundColor: '#EFEFEF'},
  dr_dropdownRowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dr_dropdownRowTxtStyle: {color: '#444', textAlign: 'left'},
  dr_text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
});

export default Styles;
