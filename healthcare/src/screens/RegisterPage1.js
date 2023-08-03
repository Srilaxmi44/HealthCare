import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { CTextBox, CSearch, CTDropdown } from 'components';
import { Styles } from 'Styles';
import Icon from '../../assets/Images/Original.png';
import jsonData from '../../assets/data/CTdropdownData.json';
import { Logo } from 'assets';
console.log('jsonData', jsonData);

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
    <View style={Styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={Styles.header}>
        <Image
          // source={{uri: Icon}}
          source={Logo}
          style={Styles.containerImage}

        />
        <Text style={Styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={Styles.footer}>
        <ScrollView>
          <CTextBox
            title="First Name"
            placeholder="Your FirstName"
            fontname="user"
          />

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Last Name"
              placeholder="Your LastName"
              fontname="user"
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Email Id"
              placeholder="Your  Email Id"
              fontname="mail"
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title=" Phone Number"
              placeholder="Your   Phone Number"
              fontname="phone"
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Gender"
              placeholder="Your  Gender"
            // fontname="user"
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Date Of Birth"
              placeholder="Your DateOfBirth"
              fontname="calendar"
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTDropdown
              defaultButtonText="Select"
              title="Country"
              dropdownIconPosition="right"
              data={jsonData}
            />
          </View>

          <View style={Styles.textPrivate}>
            <Text style={Styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[Styles.color_textPrivate, { fontWeight: 'bold' }]}>
              Terms of service
            </Text>
            <Text style={Styles.color_textPrivate}> and</Text>
            <Text style={[Styles.color_textPrivate, { fontWeight: 'bold' }]}>
              Privacy policy
            </Text>
          </View>
          <View style={Styles.button}>
            <TouchableOpacity style={Styles.signIn} onPress={() => { }}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={Styles.signIn}>
                <Text style={Styles.textSignText}>Register</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={Styles.touchableView_login}>
              <Text style={Styles.textLoginText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default RegisterPage1;
