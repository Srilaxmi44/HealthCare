import { StyleSheet } from 'react-native';

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
  loginHeaderView: {
    paddingBottom: 10
  },
  textLoginText: {
    fontSize: 22,
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
  dr_viewContainer: { flex: 1, width: '100%', backgroundColor: '#FFF' },
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
  dr_dropdownBtnTxtStyle: { color: '#444', textAlign: 'left' },
  dr_dropdownDropdownStyle: { backgroundColor: '#EFEFEF' },
  dr_dropdownRowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dr_dropdownRowTxtStyle: { color: '#444', textAlign: 'left' },
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

  passwordView: {
    width: 300,
    marginTop: 35,
  },
  eyeIconView: {
    marginTop: -45,
    position: 'absolute',
    marginLeft: 270,
  },
  mailView: {
    width: 300,
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
    fontSize: 20,
    marginBottom: 10,
  },
  searchContainer: {
    backgroundColor: 'white',
    padding: 8,
    marginTop: 50,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    paddingTop: 10,
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
    paddingBottom: '100%',
  },
  itemContainerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  imageEndList: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  imageList: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainerList: {
    marginRight: 60,
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
});

export default externalStyle;
