import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
// import Input from '../components/Input';
import { CTextBox } from 'components';
import { style } from '@/style';
const RegisterPage2 = ({ navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{ color: 'white', fontSize: 31, fontWeight: 'bold' }}>
          Health Care
        </Text>
      </LinearGradient>
      <View style={Styles.container}>
        <Text style={Styles.container_text}>REGISTER</Text>
        <CTextBox
          title="Firstname"
          placeholder="Enter ur firstname "
          keyboard="default"
        />
        <CTextBox
          title="Lastname"
          placeholder="Enter ur Lastname "
          keyboard="default"
        />
        <CTextBox
          title="Email"
          placeholder="Enter ur email"
          keyboard="email-address"
        />
        <CTextBox
          title="Contact Number"
          placeholder="Enter ur contact number"
          keyboard="number-pad"
        />
        <CTextBox
          title="Date Of Birth"
          placeholder="Enter ur data of birth"
          keyboard="default"
          is_password={true}
        />
        <CTextBox
          title="Gender"
          placeholder="Enter ur Gender"
          keyboard="default"
          is_password={true}
        />

        <View>
          <TouchableOpacity>
            <LinearGradient
              onPress={() => { }}
              colors={['#42a1f5', '#03bafc', '#42c5f5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={Styles.footer_container}>
              <Text style={Styles.footer_container_signText}>
                SIGNUP
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={Styles.footer_container_logContainer}>
              Already have an account?{' '}
              <Text onPress={() => navigation.navigate('Login')}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage2;
