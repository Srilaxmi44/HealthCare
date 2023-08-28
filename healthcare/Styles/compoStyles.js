import {StyleSheet} from 'react-native';

const externalStyle = StyleSheet.create({
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
});

export default externalStyle;
