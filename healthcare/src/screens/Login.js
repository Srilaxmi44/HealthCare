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
import {CTextBox, CSearch, CTDropdown, CTHeader} from 'components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <View>
        <CTHeader />
      </View>

      <View style={Styles.containerLogin}>
        <View style={Styles.card}>
          <View style={Styles.mailView}>
            <CTextBox
              title="Login"
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
                  size={24}
                />
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={Styles.forgotPasswordButton}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={Styles.forgotPasswordButtonText}>Forgot?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.buttonLogin}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={Styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.createAccountButton}
            onPress={() => navigation.navigate('RegisterPage')}>
            <Text style={Styles.createAccountButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;

// import React, {useState} from 'react';
// import {View, TextInput, TouchableOpacity} from 'react-native';
// import {CTextBox, CSearch, CTDropdown, CT} from 'components';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Login = () => {
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };
//   return (
//     <View>
//       <CTextBox
//         placeholder="Enter Password"
//         secureTextEntry={!passwordVisible}
//         onTogglePasswordVisibility={togglePasswordVisibility}
//         title="Password"
//         fontname="lock"
//         value={password}
//         onChangeText={setPassword}
//       />
//     </View>
//   );
// };

// export default Login;
