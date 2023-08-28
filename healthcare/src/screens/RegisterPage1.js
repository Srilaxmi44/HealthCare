import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {CTextBox, CSearch, CTDropdown, CTDatePicker} from 'components';
import {Styles} from 'Styles';
import Icon from '../../assets/Images/Original.png';
import jsonData from '../../assets/data/CTdropdownData.json';
import axios from 'axios';
import {headerWhiteBG} from 'assets';
import {date} from 'yup';
console.log('jsonData', jsonData);

const RegisterPage1 = ({navigation}) => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    EmailId: '',
    phoneNumber: '',
    gender: '',
    password: '',
    DateOfBirth: '',
    country: '',
  });

  console.log('hello data', data);
  const handleRegister = () => {
    console.log(
      'hello sager',
      data.firstName,
      data.lastName,
      data.EmailId,
      data.password,
      data.phoneNumber,
      data.country,
    );
    if (
      !data.firstName ||
      !data.lastName ||
      !data.EmailId ||
      !data.password ||
      !data.phoneNumber ||
      !data.country
    ) {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }

    const postData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.EmailId,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      password: data.password,
      dateOfBirth: data.DateOfBirth,
      country: data.country,
    };
    console.log('hello kalanjer', postData);

    // Replace 'API_ENDPOINT' with your actual API endpoint
    const apiEndpoint = 'http://192.168.1.5:8080/users/register';

    //   axios
    //     .post(apiEndpoint, postData)
    //     .then(response => {
    //       console.log('API Response:', response.data);
    //       Alert.alert('Success', 'Registration successful!');
    //     })
    //     .catch(error => {
    //       console.error('API Error:', error);
    //       Alert.alert('Error', 'Registration failed. Please try again.');
    //     });
    // };

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);

        Alert.alert('Success', 'Registration successful!');
      })
      .catch(error => {
        console.error('API Error:', error);
        Alert.alert('Error', 'Registration failed. Please try again.');
      });
  };

  return (
    <View style={Styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={Styles.header}>
        <Image source={headerWhiteBG} style={Styles.containerImage} />
        <Text style={Styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={Styles.footer}>
        <ScrollView>
          <CTextBox
            title="First Name"
            placeholder="Your FirstName"
            fontname="user"
            onChangeText={text => setData({...data, firstName: text})}
            inputContainerStyle={Styles.customInputContainer}
            // onChangeText={text => console.log('hell0damu', text)}
          />

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Last Name"
              placeholder="Your LastName"
              fontname="user"
              onChangeText={text => setData({...data, lastName: text})}
              inputContainerStyle={Styles.customInputContainer}
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Email Id"
              placeholder="Your Email Id"
              fontname="mail"
              onChangeText={text => setData({...data, EmailId: text})}
              inputContainerStyle={Styles.customInputContainer}
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Phone Number"
              placeholder="Your Phone Number"
              fontname="phone"
              onChangeText={text => setData({...data, phoneNumber: text})}
              inputContainerStyle={Styles.customInputContainer}
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Gender"
              placeholder="Your Gender"
              onChangeText={text => setData({...data, gender: text})}
              inputContainerStyle={Styles.customInputContainer}
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTextBox
              title="Password"
              placeholder="Your password"
              fontname="lock"
              onChangeText={text => setData({...data, password: text})}
              inputContainerStyle={Styles.customInputContainer}
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTDatePicker
              title="Date Of Birth"
              placeholder="Your DateOfBirth"
              fontname="calendar"
              // onChangeText={date => console.log('==========', date)}
              onChangeText={date => setData({...data, DateOfBirth: date})}
            />
          </View>

          <View style={Styles.viewContainer}>
            <CTDropdown
              style={{marginTop: 50}}
              defaultButtonText="Select"
              title="Country"
              dropdownIconPosition="right"
              data={jsonData}
              onDropdownChange={country => setData({...data, country: country})}
            />
          </View>

          <View style={{marginTop: -60}}>
            <View style={Styles.textPrivate}>
              <Text>
                By signing up you agree to our{' '}
                <Text style={Styles.privateTextView}>Terms of service</Text> and{' '}
                <Text style={Styles.privateTextView}>Privacy policy</Text>
              </Text>
            </View>

            <View style={Styles.button}>
              <TouchableOpacity style={Styles.signIn} onPress={handleRegister}>
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
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default RegisterPage1;
