import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Logo} from 'assets';
import {
  CTextBox,
  CSearch,
  CTDropdown,
  CTDatePicker,
  CTCheckBox,
} from 'components';
import {Styles} from 'Styles';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({
    Email: '',
    Password: '',
  });

  Icon.loadFont();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  console.log('Current state of data:', data);

  const handleLogin = () => {
    if (!data.Email || !data.Password) {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }

    const postData = {
      email: data.Email,
      password: data.Password,
    };
    console.log('console', postData);

    const apiEndpoint = 'http://192.168.1.5:8080/users/auth'; // Replace with your actual API endpoint

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.text())
      .then(data => {
        console.log('API Response:', data);
        navigation.navigate('RegisterPage1'); // Navigate to Home or any other page after successful login
        Alert.alert('Success', 'Login successful!');
      })
      .catch(error => {
        console.error('API Error:', error);
        Alert.alert('Error', 'Login failed. Please try again.');
      });
  };

  return (
    <>
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
              onChangeText={text => setData({...data, Email: text})}
              inputContainerStyle={Styles.customInputContainer}
            />
          </View>

          <View style={Styles.passwordView}>
            <CTextBox
              title="Password"
              placeholder="Enter  Password"
              fontname="lock"
              secureTextEntry={!isPasswordVisible}
              onChangeText={text => setData({...data, Password: text})}
              inputContainerStyle={Styles.customInputContainer}
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

          <TouchableOpacity style={Styles.buttonLogin} onPress={handleLogin}>
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
                style={Styles.createAccountButton}
                onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={Styles.createAccountButtonText}>Register</Text>
              </TouchableOpacity> */}

          <TouchableOpacity style={Styles.buttonLogin_ContainerRegister}>
            <Text style={Styles.buttonLogin_ContainerRegisterText}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
