import {StyleSheet} from 'react-native';

const externalStyle = StyleSheet.create({
  ///styles for registerpage2
  container: {
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    marginTop: -20,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  container_text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#03bafc',
    textAlign: 'center',
  },
  footer_container: {
    borderRadius: 100,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    marginTop: 50,
    marginBottom: 10,
  },
  footer_container_signText: {
    color: 'white',
    fontSize: 19,
  },
  footer_container_logContainer: {
    color: '#03bafc',
    fontSize: 16,
    textAlign: 'center',
  },

  ///dummy
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  touchableView_login: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  textSignText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  textLoginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009387',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 20,
    marginBottom: 10,
  },
  color_textPrivate: {
    color: 'grey',
  },
  viewContainer: {
    marginTop: 35,
  },
  containerImage: {
    width: '60%',
    height: '40%',
    // borderRadius: 20,
    marginTop: 10,
    backgroundColor: 'red',
  },

  //dropdown
  dr_viewContainer: {flex: 1, width: '100%', backgroundColor: '#FFF'},
  dr_scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },
  dr_dropdownBtnStyle: {
    width: '100%',
    height: 50,
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
  containerLogin: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
  iconHeader: {
    width: '90%',
   height: 100,
 },
 card: {
  backgroundColor: '#fff',
  borderRadius: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
  padding: 20,
  width: '90%',
  alignItems: 'center',
},
forgotPasswordButton: {
  width:'100%',
  textAlign:'flex-end',
},
forgotPasswordButtonText: {
  color: '#20B2AA',
  fontSize: 12,
  fontWeight: 'bold',
  textAlign:'right'
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  padding: 10,
  marginVertical: 10,
  width: '100%',
},
buttonLogin: {
  backgroundColor: '#20B2AA',
  borderRadius: 5,
  padding: 10,
  marginTop: 10,
  width: '100%',
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
},
createAccountButton: {
  marginTop: 20,
},
createAccountButtonText: {
  color: '#20B2AA',
  fontSize: 12,
  fontWeight: 'bold',
},
});

export default externalStyle;