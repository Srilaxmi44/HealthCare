
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import {Styles} from 'Styles';
import {CTextBox, CSearch, CTDropdown} from 'components';


const Login = ({navigation}) => {
  return (
    <View style={Styles.containerLogin}>
       <Image
        source={require('../../assets/Images/Original.png')}
        style={Styles.iconHeader}>
      </Image>
      <View style={Styles.card}>
        <TextInput style={Styles.input} placeholder="Email" />
        <TextInput style={Styles.input} placeholder="Password" secureTextEntry={true} />

        <TouchableOpacity style={Styles.forgotPasswordButton} onPress={() => navigation.navigate('ForgotPassword') }>
          <Text style={Styles.forgotPasswordButtonText}>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.buttonLogin}>
          <Text style={Styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.createAccountButton} onPress={() => navigation.navigate('RegisterPage') }>
          <Text style={Styles.createAccountButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;