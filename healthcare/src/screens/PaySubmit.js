import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
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

const PaySubmit = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  let otpInputRefs = [];
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  Icon.loadFont();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Function to handle OTP submission
  const handleSubmitOTP = () => {
    // Here you can add the logic to verify the OTP
    // For this example, we'll just print it to the console
    alert('OTP entered:', otp);
    // Clear OTP input after submission
    setOtp('');
  };

  // Function to handle individual OTP input change
  const handleOtpInputChange = value => {
    setOtp(value);
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
          {/* <View style={Styles.mailView}>
            <CTextBox
              title="Enter OTP"
              placeholder="Enter OTP"
              type="tel"
              max={6}
            />
          </View> */}
          <View style={Styles.otpContainer}>
            {[...Array(6)].map((_, index) => (
              <TextInput
                key={index}
                style={Styles.otpInput}
                maxLength={1}
                keyboardType="numeric"
                onChangeText={text => {
                  // Update the OTP state when a digit is entered
                  handleOtpInputChange(prevOtp => {
                    const otpArray = prevOtp.split('');
                    otpArray[index] = text;
                    return otpArray.join('');
                  });

                  // Automatically move to the next input field when 1 digit is entered
                  if (text && index < 5) {
                    otpInputRefs[index + 1].focus();
                  }

                  // If the last input field is filled, dismiss the keyboard
                  if (index === 5 && text) {
                    Keyboard.dismiss();
                  }
                }}
                ref={ref => (otpInputRefs[index] = ref)}
                value={otp[index] || ''}
              />
            ))}
          </View>

          <TouchableOpacity
            style={Styles.buttonLogin}
            // onPress={() => navigation.navigate('Dashboard')}
            onPress={handleSubmitOTP}>
            <Text style={Styles.buttonText}>Submit OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PaySubmit;

// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';

// const PaySubmit = () => {
//   const [otp, setOTP] = useState('');

//   // Function to handle OTP submission
//   const handleSubmitOTP = () => {
//     // Replace 'expectedOTP' with the actual expected OTP you're validating against.
//     const expectedOTP = '1234'; // Example OTP, replace this with your actual OTP.

//     if (otp === expectedOTP) {
//       // OTP is valid, do something (e.g., navigate to the next screen).
//       console.log('OTP is valid:', otp);
//       Alert.alert('Success', 'OTP is valid.');
//     } else {
//       // Invalid OTP, show an error message.
//       Alert.alert('Invalid OTP', 'Please enter a valid OTP.');
//     }
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
//               // Update the OTP state when a digit is entered
//               setOTP(prevOTP => {
//                 const otpArray = prevOTP.split('');
//                 otpArray[index] = text;
//                 return otpArray.join('');
//               });
//             }}
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

// export default PaySubmit;
