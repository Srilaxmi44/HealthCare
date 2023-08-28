// import React from 'react';
// import {
//   View,
//   Text,
//   Dimensions,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// import LinearGradient from 'react-native-linear-gradient';
// // import Input from '../components/Input';
// import {CTextBox} from 'components';
// import {Styles} from 'Styles';
// const RegisterPage2 = ({navigation}) => {

//   return (
//     <View>
//       <LinearGradient
//         colors={['#42a1f5', '#03bafc', '#42c5f5']}
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//         style={{
//           borderBottomLeftRadius: 15,
//           borderBottomRightRadius: 15,
//           height: Dimensions.get('window').height * 0.2,
//           width: '100%',
//           alignItems: 'center',
//           paddingTop: 40,
//         }}>
//         <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold'}}>
//           Health Care
//         </Text>
//       </LinearGradient>
//       <View style={Styles.container}>
//         <Text style={Styles.container_text}>REGISTER</Text>
//         <CTextBox
//           title="Firstname"
//           placeholder="Enter ur firstname "
//           keyboard="default"
//         />
//         <CTextBox
//           title="Lastname"
//           placeholder="Enter ur Lastname "
//           keyboard="default"
//         />
//         <CTextBox
//           title="Email"
//           placeholder="Enter ur email"
//           keyboard="email-address"
//         />
//         <CTextBox
//           title="Contact Number"
//           placeholder="Enter ur contact number"
//           keyboard="number-pad"
//         />
//         <CTextBox
//           title="Date Of Birth"
//           placeholder="Enter ur data of birth"
//           keyboard="default"
//           is_password={true}
//         />
//         <CTextBox
//           title="Gender"
//           placeholder="Enter ur Gender"
//           keyboard="default"
//           is_password={true}
//         />

//         <View>
//           <TouchableOpacity>
//             <LinearGradient
//               onPress={() => {}}
//               colors={['#42a1f5', '#03bafc', '#42c5f5']}
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={Styles.footer_container}>
//               <Text style={Styles.footer_container_signText}>SIGNUP</Text>
//             </LinearGradient>
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <Text style={Styles.footer_container_logContainer}>
//               Already have an account?{' '}
//               <Text onPress={() => navigation.navigate('Login')}>Login</Text>
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default RegisterPage2;

import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CTextBox} from 'components';
import {Styles} from 'Styles';
import axios from 'axios'; // Import Axios for making API requests
import * as Yup from 'yup'; // Import Yup for validation

const RegisterPage2 = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    dateOfBirth: Yup.string().required('Date of birth is required'),
    gender: Yup.string().required('Gender is required'),
  });

  const handleFormSubmit = () => {
    validationSchema
      .validate(
        {
          firstName,
          lastName,
          email,
          contactNumber,
          dateOfBirth,
          gender,
        },
        {abortEarly: false},
      )
      .then(() => {
        // Validation successful, make API call here
        const formData = {
          firstName,
          lastName,
          email,
          contactNumber,
          dateOfBirth,
          gender,
        };

        // Example API call using Axios
        axios
          .post('your_api_endpoint', formData)
          .then(response => {
            // Handle successful API response here
            console.log('API response:', response.data);
            // You can navigate the user to a success page or show a message
          })
          .catch(error => {
            // Handle API error here
            console.error('API error:', error);
            // Display an error message to the user
          });
      })
      .catch(errors => {
        // Validation failed, update validationErrors state
        const errorsObj = {};
        errors.inner.forEach(error => {
          errorsObj[error.path] = error.message;
        });
        setValidationErrors(errorsObj);
      });
  };

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
      <View style={Styles.container}>
        <Text style={Styles.container_text}>REGISTER</Text>
        <CTextBox
          title="Firstname"
          placeholder="Enter ur firstname "
          keyboard="default"
          onChangeText={text => setFirstName(text)}
          error={validationErrors.firstName}
        />
        <CTextBox
          title="Lastname"
          placeholder="Enter ur Lastname "
          keyboard="default"
          onChangeText={text => setLastName(text)}
          error={validationErrors.lastName}
        />
        <CTextBox
          title="Email"
          placeholder="Enter ur email"
          keyboard="default"
          onChangeText={text => setEmail(text)}
          error={validationErrors.email}
        />
        <CTextBox
          title="Contact Number"
          placeholder="Enter ur contact number"
          keyboard="default"
          onChangeText={text => setContactNumber(text)}
          error={validationErrors.contactNumber}
        />
        <CTextBox
          title="Date Of Birth"
          placeholder="Enter ur data of birth"
          keyboard="default"
          is_password={true}
          onChangeText={text => setDateOfBirth(text)}
          error={validationErrors.dateOfBirth}
        />
        <CTextBox
          title="Gender"
          placeholder="Enter ur Gender"
          keyboard="default"
          onChangeText={text => setGender(text)}
          error={validationErrors.gender}
        />

        {/* Repeat the above pattern for other input fields */}
        <View>
          <TouchableOpacity onPress={handleFormSubmit}>
            <LinearGradient
              colors={['#42a1f5', '#03bafc', '#42c5f5']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={Styles.footer_container}>
              <Text style={Styles.footer_container_signText}>SIGNUP</Text>
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
