// import React, {useState} from 'react';
// import {View, Text, TextInput, Button} from 'react-native';
// import axios from 'axios';
// const Payment = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [otpSent, setOtpSent] = useState(false);

//   const handleSendOTP = () => {
//     console.log('hello');
//     const apiUrl = 'http://localhost:5000/sendOTP';
//     const requestBody = {phoneNumber}; // Assuming phoneNumber is defined somewhere

//     axios
//       .post(apiUrl, requestBody, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(response => {
//         setOtpSent(true);
//         console.log(response.data.message);
//       })
//       .catch(error => {
//         console.error('Error sending OTP:', error, error.message);
//         console.log('rooro');
//       });
//   };

//   const handleVerifyOTP = () => {
//     fetch('http://localhost:5000/verify-otp', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({otp}),
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.message);
//         // Handle OTP verification success, proceed with the payment process
//         // You can implement the payment process here
//       })
//       .catch(error => {
//         console.error('Error verifying OTP:', error);
//       });
//   };

//   return (
//     <View>
//       <Text>Enter your phone number:</Text>
//       <TextInput
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <Button title="Send OTP" onPress={handleSendOTP} />

//       {otpSent && (
//         <>
//           <Text>OTP sent successfully! Enter the OTP below:</Text>
//           <TextInput placeholder="OTP" value={otp} onChangeText={setOtp} />
//           <Button title="Verify OTP" onPress={handleVerifyOTP} />
//         </>
//       )}
//     </View>
//   );
// };

// export default Payment;

// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';

// const Payment = () => {
//   const [otp, setOTP] = useState('');

//   // Function to handle OTP submission
//   const handleSubmitOTP = () => {
//     // Here you can add the logic to verify the OTP
//     // For this example, we'll just print it to the console
//     console.log('OTP entered:', otp);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Enter OTP</Text>

//       <View style={styles.otpContainer}>
//         {/* Create 4 TextInput fields for the 4-digit OTP */}
//         {[...Array(4)].map((_, index) => (
//           <TextInput
//             key={index}
//             style={styles.input}
//             maxLength={1}
//             keyboardType="numeric"
//             onChangeText={text => {
//               // Automatically move to the next input field when 1 digit is entered
//               if (text && index < 3) {
//                 otpInputRefs[index + 1].focus();
//               }
//               // Update the OTP state when a digit is entered
//               setOTP(prevOTP => {
//                 const otpArray = prevOTP.split('');
//                 otpArray[index] = text;
//                 return otpArray.join('');
//               });
//             }}
//             ref={ref => (otpInputRefs[index] = ref)}
//           />
//         ))}
//       </View>

//       {/* Button to submit OTP */}
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmitOTP}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     fontSize: 24,
//     textAlign: 'center',
//     marginHorizontal: 5,
//   },
//   submitButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default Payment;

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
import {
  CTextBox,
  CSearch,
  CTDropdown,
  CTHeader,
  CTCheckBox,
  CTextInput,
} from 'components';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Logo} from 'assets';

const Payment = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  Icon.loadFont();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {/* <View>
        <CTHeader />
      </View> */}

      <View style={Styles.containerLogin}>
        <View
          style={{
            display: 'flex',
            paddingBottom: 10,
            justifyContent: 'center',
          }}>
          <View>
            <Image source={Logo} style={{height: 50, width: 50}} />
          </View>
          <View>
            <Text style={Styles.textLoginText}>OTP</Text>
          </View>
        </View>
        <View style={Styles.card}>
          <View style={Styles.mailView}>
            <CTextBox
              title="Mobile Number"
              placeholder="Enter Number"
              type="tel"
              max={10}
            />
          </View>
          <TouchableOpacity
            style={Styles.buttonLogin}
            onPress={() => navigation.navigate('PaySubmit')}>
            <Text style={Styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Payment;
