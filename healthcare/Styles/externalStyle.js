import {StyleSheet} from 'react-native';

const externalStyle = StyleSheet.create({
  ///styles for registerpage2
  containerTop: {
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
  TextInputContainer: {
    marginBottom: 30,
    marginTop: 2,
    marginBottom: -30,
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
  customInputContainer: {
    // Define your custom input container styles here
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'grey', // Black bottom border
    alignItems: 'center',
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
    paddingBottom: 10,
    // backgroundColor: '#009387',
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
    fontSize: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    // paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  touchableView_login: {
    // width: '100%',
    // height: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 10,
    // // borderColor: '#009387',
    // borderWidth: 1,
    marginTop: 15,
  },
  textSignText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginHeaderView: {
    paddingBottom: 10,
  },
  textLoginText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#009387',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  color_textPrivate: {
    color: 'grey',
    marginTop: -60,
  },
  viewContainer: {
    marginTop: 25,
  },
  containerImage: {
    width: '30%',
    height: '65%',
    // borderRadius: 20,
    marginTop: 10,
    resizeMode: 'fill',
    marginLeft: 13,
  },
  loginLgo: {
    width: 75,
    height: 70,
    marginLeft: -10,
    resizeMode: 'fill',
  },
  privateTextView: {
    color: '#0078D4',
    fontWeight: 'bold',
  },

  //dropdown
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

  // login page
  containerLogin: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  containerLoginImageView: {
    display: 'flex',
    paddingBottom: 10,
    justifyContent: 'center',
  },
  iconHeader: {
    width: '80%',
    height: 50,
    marginLeft: 43,
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
    width: '100%',
    textAlign: 'flex-end',
  },
  forgotPasswordButtonText: {
    color: '#20B2AA',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 20,
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
  buttonLogin_ContainerRegister: {
    // backgroundColor: '#20B2AA',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonLogin_ContainerRegisterText: {
    color: '#20B2AA',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonLink: {
    backgroundColor: '#20B2AA',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    width: '25%',
    alignItems: 'flex-end',
    marginLeft: 250,
    justifyContent: 'flex-end',
  },
  createAccountButton: {
    marginTop: 20,
  },
  createAccountButtonText: {
    color: '#20B2AA',
    fontSize: 14,
    fontWeight: 'bold',
  },

  passwordView: {
    width: 300,
    marginTop: 20,
  },
  eyeIconView: {
    marginTop: -45,
    position: 'absolute',
    marginLeft: 270,
  },
  mailView: {
    width: 300,
  },
  checkBoxContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  checkBoxContainerView: {
    alignSelf: 'flex-start',
    paddingTop: 7,
    paddingBottom: 7,
  },
  forgotView: {
    justifyContent: 'center',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    flex: 1,
  },

  //forgot Page
  containerMainForgot: {
    flex: 1,
    padding: 10,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  sendOTPButtonForgot: {
    color: '#20B2AA',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 10,
  },
  sendOTPButtonViewForgot: {
    width: '100%',
    textAlign: 'flex-end',
  },
  titleForgot: {
    fontSize: 20,
    marginBottom: 10,
    justifyContent: 'center',
    width: 45,
    height: 45,
    // marginTop: 30,
  },
  containerForgot: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formForgot: {
    width: '80%',
  },
  labelEnterOTPForgot: {
    marginTop: 10,
    marginBottom: 5,
  },
  labelForgot: {
    marginTop: 20,
    marginBottom: 5,
  },
  inputForgot: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  buttonForgot: {
    marginTop: 20,
    backgroundColor: '#20B2AA',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonTextForgot: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  iconView_dd_forward: {
    marginLeft: 350,
    backgroundColor: 'aqua',
    position: 'absolute',
    marginTop: -10,
  },
  iconView_dd_backward: {
    marginTop: -100,
    marginLeft: -10,
  },

  //CTSearchList
  containerSearch: {
    backgroundColor: 'white',
  },
  text_headerSearch: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 8,
    marginTop: 10,
  },
  searchInput: {
    height: 35,
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: 8,
    paddingTop: 10,
    borderRadius: 7,
  },
  itemContainerSearch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  textContainerSearch: {
    marginLeft: 16,
  },
  nameTextSearch: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  //CTListItems
  containerList: {
    backgroundColor: '#fff',
    paddingBottom: '70%',
  },
  itemContainerList: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  imageEndList: {
    width: 30,
    height: 30,
  },
  imageList: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  imgEndIconsView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  textContainerList: {
    marginLeft: 20,
  },
  nameTextList: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phoneTextList: {
    fontSize: 16,
    color: '#999',
    marginBottom: 5,
  },

  //Header
  headerViewContainer: {
    backgroundColor: 'aqua',
    padding: 10,
  },

  //footerHeader
  footHeaderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footerHeaderGradient: {
    padding: 10,
    alignItems: 'center',
  },
  fontText: {
    fontFamily: 'yarofont',
    fontSize: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  todayStyle: {
    width: 100,
    height: 100,
  },
  //checkBox
  containerCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerCheckBoxView: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCheckBoxLabel: {
    marginLeft: 5,
    fontSize: 16,
    color: 'gray',
  },

  //modal popup
  Modal_modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  Modal_modalContent: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    width: '80%',
  },
  Modal_modalContentText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },

  Modal_buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  Modal_button: {
    marginHorizontal: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#20B2AA',
    borderRadius: 25,
    width: 100,
  },
  Modal_buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },

  //video call
  VideoContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 100,
    paddingVertical: 50,
  },
  VideoOTPublisherContainerView: {
    marginTop: -40,
  },
  VideoOTPublisher: {
    width: '200%',
    height: 300,
    marginLeft: -95,
    marginBottom: 200,
  },
  VideoMicContainer: {
    position: 'absolute',
    bottom: 10,
    right: -90,
  },
  VideoCameraFlipContainer: {
    position: 'absolute',
    bottom: 10,
    right: -60,
    color: 'blue',
  },
  VideoOTPublisher: {
    width: '200%',
    height: '100%',
    marginLeft: -95,
    marginTop: -200,
  },
  VideoButtonEndContainer: {
    position: 'absolute',
    bottom: 20,
    right: 100,
  },
  VideoButtonEndContainerView: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    left: 20,
  },
  videoContainerElements: {
    marginBottom: 500,
  },
});

export default externalStyle;
