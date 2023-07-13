import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import externalStyle from '../../pages/Styles/externalStyle';
import InputText from '../../components/common/InputText';


const RegisterPage1 = ({ navigation }) => {
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    EmailId: '',
    phoneNumber: '',
    gender: '',
    DateOfBirth: '',
  });

  return (
    <View style={externalStyle.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={externalStyle.header}>
        <Text style={externalStyle.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={externalStyle.footer}>
        <ScrollView>
          <InputText
            title="First Name"
            placeholder="Your FirstName"
            fontname="user"
          />

          <View style={externalStyle.viewContainer}>
            <InputText
              title="Last Name"
              placeholder="Your LastName"
              fontname="user"
            />
          </View>

          <View style={externalStyle.viewContainer}>
            <InputText
              title="Email Id"
              placeholder="Your  Email Id"
              fontname="mail"
            />
          </View>

          <View style={externalStyle.viewContainer}>
            <InputText
              title=" Phone Number"
              placeholder="Your   Phone Number"
              fontname="phone"
            />
          </View>

          <View style={externalStyle.viewContainer}>
            <InputText
              title="Gender"
              placeholder="Your  Gender"
            // fontname="user"
            />
          </View>

          <View style={externalStyle.viewContainer}>
            <InputText
              title="Date Of Birth"
              placeholder="Your DateOfBirth"
              fontname="calendar"
            />
          </View>

          <View style={externalStyle.textPrivate}>
            <Text style={externalStyle.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
              Privacy policy
            </Text>
          </View>
          <View style={externalStyle.button}>
            <TouchableOpacity style={externalStyle.signIn} onPress={() => { }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={externalStyle.signIn}>
                <Text style={externalStyle.textSignText}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={externalStyle.touchableView_login}>
              <Text style={externalStyle.textLoginText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default RegisterPage1;
