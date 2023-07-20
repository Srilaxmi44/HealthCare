import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Styles} from 'Styles';
import {CTextBox, CSearch, CTDropdown, CTHeader, CTFooter} from 'components';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgotPassword = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  /*password ret */
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const [showOTP, setShowOTP] = useState(false);
  const [showEnterViewOTP, setShowEnterVieOTP] = useState(true);

  const handleSubmit = () => {
    setShowEnterVieOTP(false);
  };

  const handleFinalSubmit = () => {
    navigation.navigate('Login');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {/* <View>
        <CTHeader />
      </View> */}

      <View style={Styles.containerMainForgot}>
        <View style={Styles.iconView_dd_backward}>
          <TouchableOpacity
            style={Styles.titleForgot}
            onPress={() => handleFinalSubmit()}>
            <Image
              style={Styles.titleForgot}
              source={require('../../assets/Images/back.png')}
            />
          </TouchableOpacity>
        </View>

        {/* <View style={Styles.iconView_dd_forward}>
          <TouchableOpacity
            style={Styles.titleForgot}
            onPress={() => handleFinalSubmit()}>
            {/* <Image
              style={Styles.titleForgot}
              source={require('../../assets/Images/forward.png')}
            /> 
          </TouchableOpacity>
        </View> */}

        <View style={Styles.containerForgot}>
          <View style={Styles.formForgot}>
            {showEnterViewOTP && (
              <>
                <CTextBox
                  title="Enter Email/Phone "
                  placeholder="Enter your Email/Phone"
                />

                <TouchableOpacity onPress={() => setShowOTP(true)}>
                  <Text style={Styles.sendOTPButtonForgot}>
                    {' '}
                    Click here to sent OTP
                  </Text>
                </TouchableOpacity>

                {showOTP && (
                  <>
                    <CTextBox
                      title="Enter OTP  "
                      placeholder="Enter your OTP"
                    />
                    <TouchableOpacity
                      style={Styles.buttonForgot}
                      onPress={() => handleSubmit()}>
                      <Text style={Styles.buttonTextForgot}>Submit</Text>
                    </TouchableOpacity>
                  </>
                )}
              </>
            )}

            {!showEnterViewOTP && (
              <>
                <CTextBox
                  title="New password"
                  placeholder="Enter a new password"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <View style={Styles.eyeIconView}>
                    <Icon
                      name={isPasswordVisible ? 'eye' : 'eye-slash'}
                      size={24}
                    />
                  </View>
                </TouchableOpacity>

                <CTextBox
                  title="Repeat new password"
                  placeholder="Repeat your new password"
                  value={repeatPassword}
                  onChangeText={setRepeatPassword}
                  secureTextEntry={!isPasswordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <View style={Styles.eyeIconView}>
                    <Icon
                      name={isPasswordVisible ? 'eye' : 'eye-slash'}
                      size={24}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={Styles.buttonForgot}
                  onPress={() => handleFinalSubmit()}>
                  <Text style={Styles.buttonTextForgot}>Submit</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>

      <CTFooter />
    </>
  );
};

export default ForgotPassword;
