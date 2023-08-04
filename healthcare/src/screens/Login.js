import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Styles} from 'Styles';
import {CTextBox, CSearch, CTDropdown, CTHeader, CTCheckBox} from 'components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Logo} from 'assets';
const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  Icon.loadFont();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {/* <View>
        <CTHeader />
      </View> */}

      <View style={Styles.containerLogin}>
        <View style={Styles.containerLoginImageView}>
          <View>
            <Image source={Logo} style={Styles.loginLgo} />
          </View>
          <View>
            <Text style={Styles.textLoginText}>Login</Text>
          </View>
        </View>
        <View style={Styles.card}>
          <View style={Styles.mailView}>
            <CTextBox
              title="Email"
              placeholder="Enter  Email"
              fontname="mail"
            />
          </View>

          <View style={Styles.passwordView}>
            <CTextBox
              title="Password"
              placeholder="Enter  Password"
              fontname="lock"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <View style={Styles.eyeIconView}>
                <Icon
                  name={isPasswordVisible ? 'eye' : 'eye-slash'}
                  size={22}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={Styles.checkBoxContainer}>
            <View style={Styles.checkBoxContainerView}>
              <CTCheckBox />
            </View>

            <View style={Styles.forgotView}>
              <TouchableOpacity
                style={Styles.forgotPasswordButton}
                onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={Styles.forgotPasswordButtonText}>Forgot?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={Styles.buttonLogin}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={Styles.createAccountButton}
            onPress={() => navigation.navigate('RegisterPage')}>
            <Text style={Styles.createAccountButtonText}>Register</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={Styles.buttonLogin}
            onPress={() => navigation.navigate('RegisterPage')}>
            <Text style={Styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
