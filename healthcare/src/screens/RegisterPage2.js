import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../components/Input';

const RegisterPage2 = ({navigation}) => {
  return (
    <View>
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold'}}>
          Health Care
        </Text>
      </LinearGradient>
      <View style={styles.container}>
        <Text style={styles.container_text}>REGISTER</Text>
        <Input
          title="Firstname"
          placeholder="Enter ur firstname "
          keyboard="default"
        />
        <Input
          title="Lastname"
          placeholder="Enter ur Lastname "
          keyboard="default"
        />
        <Input
          title="Email"
          placeholder="Enter ur email"
          keyboard="email-address"
        />
        <Input
          title="Contact Number"
          placeholder="Enter ur contact number"
          keyboard="number-pad"
        />
        <Input
          title="Date Of Birth"
          placeholder="Enter ur data of birth"
          keyboard="default"
          is_password={true}
        />
        <Input
          title="Gender"
          placeholder="Enter ur Gender"
          keyboard="default"
          is_password={true}
        />

        <View>
          <TouchableOpacity>
            <LinearGradient
              onPress={() => {}}
              colors={['#42a1f5', '#03bafc', '#42c5f5']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.footer_container}>
              <Text style={styles.footer_container_signText}>SIGNUP</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.footer_container_logContainer}>
              Already have an account?{' '}
              <Text onPress={() => navigation.navigate('Login')}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default RegisterPage2;
