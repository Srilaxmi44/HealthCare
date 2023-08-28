// import React, {useState} from 'react';
// import {View, TouchableOpacity, StyleSheet} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';
// import {useNavigation} from '@react-navigation/native';
// import {Styles} from 'Styles';

// function VideoScreen() {
//   const navigation = useNavigation();
//   const [flipped, setFlipped] = useState(false);
//   const [mute, setMute] = useState(false);
//   const [callEnded, setCallEnded] = useState(false);

//   const endCall = () => {
//     setCallEnded(true);
//     navigation.navigate('Dashboard');
//   };

//   const apiKey = '47763141';
//   const sessionId =
//     '1_MX40Nzc2MzE0MX5-MTY5MjAxNTczNTM3OH5LMC94VGo4a2hyYUFPQ280SXc2a3gxL05-fn4';
//   const token =
//     'T1==cGFydG5lcl9pZD00Nzc2MzE0MSZzaWc9ZDJhNTIwMGQ1NGRhYjBjODQ5N2Y3MTNmMjM2MGRhYmRlZGFlMTgzZjpzZXNzaW9uX2lkPTFfTVg0ME56YzJNekUwTVg1LU1UWTVNakF4TlRjek5UTTNPSDVMTUM5NFZHbzRhMmh5WVVGUFEyODBTWGMyYTNneEwwNS1mbjQmY3JlYXRlX3RpbWU9MTY5MjAxNTc1MCZub25jZT0wLjE5MzcwNjMzMzc4ODE0MzczJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2OTQ2MDc3NTAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

//     return (
//     <View style={{flex: 1}}>
//       <View style={Styles.VideoContainer}>
//         <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
//           <View style={Styles.VideoOTPublisherContainerView}>
//             <OTPublisher
//               style={Styles.VideoOTPublisher}
//               properties={{
//                 publishAudio: !mute,
//                 cameraPosition: flipped ? 'back' : 'front',
//               }}
//             />

//             <View styles={Styles.videoContainerElements}>
//               <TouchableOpacity
//                 style={Styles.VideoMicContainer}
//                 onPress={() => setMute(prevMute => !prevMute)}>
//                 {mute ? (
//                   <Feather name="mic-off" size={24} color="green" />
//                 ) : (
//                   <Feather name="mic" size={24} color="red" />
//                 )}
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={Styles.VideoCameraFlipContainer}
//                 onPress={() => setFlipped(prevFlipped => !prevFlipped)}>
//                 <Feather name="repeat" size={24} color="white" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           <OTSubscriber style={Styles.VideoOTPublisher} />
//           <TouchableOpacity
//             style={Styles.VideoButtonEndContainer}
//             onPress={endCall}>
//             <View style={Styles.VideoButtonEndContainerView}>
//               <Icon name="call-end" size={24} color="white" />
//             </View>
//           </TouchableOpacity>
//         </OTSession>
//       </View>
//     </View>
//   );
// }

// export default VideoScreen;

// import React, {useState} from 'react';
// import {View, TouchableOpacity, StyleSheet} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';
// import {useNavigation} from '@react-navigation/native';
// import {Styles} from 'Styles'; // Make sure to import your Styles file

// function VideoScreen() {
//   const navigation = useNavigation();
//   const [flipped, setFlipped] = useState(false);
//   const [mute, setMute] = useState(false);
//   const [callEnded, setCallEnded] = useState(false);

//   const endCall = () => {
//     setCallEnded(true);
//     navigation.navigate('Dashboard');
//   };

//   const apiKey = '47745561';
//   const sessionId =
//     '2_MX40Nzc0NTU2MX5-MTY4OTIyNzIyMjczMn55WEw4T0FsRWZwZ29pSjEvQWtZZVZNS0N-fn4';
//   const token =
//     'T1==cGFydG5lcl9pZD00Nzc0NTU2MSZzaWc9MGUxY2Y1MTQwMjQyZjBmNjI1MmM3ZDQyMzZjNTRkZjc4NmFjNmUzNTpzZXNzaW9uX2lkPTJfTVg0ME56YzBOVFUyTVg1LU1UWTRPVEl5TnpJeU1qY3pNbjU1V0V3NFQwRnNSV1p3WjI5cFNqRXZRV3RaWlZaTlMwTi1mbjQmY3JlYXRlX3RpbWU9MTY4OTIyNzI1MiZub25jZT0wLjY4NDMyOTQyNTkyOTYzNjImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY5MTgxOTI1MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

//   return (
//     <View style={{flex: 1}}>
//       <View style={Styles.VideoContainer}>
//         <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
//           <View style={Styles.VideoOTPublisherContainerView}>
//             <OTPublisher
//               style={styles.publisherFullScreen}
//               properties={{
//                 publishAudio: !mute,
//                 cameraPosition: flipped ? 'back' : 'front',
//               }}
//             />

//             <View style={styles.subscriberContainer}>
//               <OTSubscriber style={styles.subscriber} />
//             </View>

//             <View style={styles.overlay}>
//               {/* Your overlay content */}
//               <TouchableOpacity
//                 style={Styles.VideoMicContainer}
//                 onPress={() => setMute(prevMute => !prevMute)}>
//                 {mute ? (
//                   <Feather name="mic-off" size={24} color="green" />
//                 ) : (
//                   <Feather name="mic" size={24} color="red" />
//                 )}
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={Styles.VideoCameraFlipContainer}
//                 onPress={() => setFlipped(prevFlipped => !prevFlipped)}>
//                 <Feather name="repeat" size={24} color="white" />
//               </TouchableOpacity>
//             </View>

//             <TouchableOpacity style={styles.endCallButton} onPress={endCall}>
//               <View style={styles.endCallButtonView}>
//                 <Icon name="call-end" size={24} color="white" />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </OTSession>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   publisherFullScreen: {
//     flex: 1,
//   },
//   subscriberContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '50%',
//     height: '25%',
//   },
//   subscriber: {
//     flex: 1,
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   endCallButton: {
//     position: 'absolute',
//     bottom: 40,
//     alignSelf: 'center',
//   },
//   endCallButtonView: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 50,
//   },
// });

// export default VideoScreen;

// import React, {useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   Text,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';
// import {useNavigation} from '@react-navigation/native';
// import {CTDropdown} from 'components';
// import dataJson from '../../assets/data/CTdropdownData.json';
// console.log('hello America', dataJson.BodyPart);

// function VideoScreen() {
//   const navigation = useNavigation();
//   const [flipped, setFlipped] = useState(false);
//   const [mute, setMute] = useState(false);
//   const [callEnded, setCallEnded] = useState(false);

//   const endCall = () => {
//     setCallEnded(true);
//     navigation.navigate('Dashboard');
//   };

//   const apiKey = '47763141';
//   const sessionId =
//     '1_MX40Nzc2MzE0MX5-MTY5MjAxNTczNTM3OH5LMC94VGo4a2hyYUFPQ280SXc2a3gxL05-fn4';
//   const token =
//     'T1==cGFydG5lcl9pZD00Nzc2MzE0MSZzaWc9ZDJhNTIwMGQ1NGRhYjBjODQ5N2Y3MTNmMjM2MGRhYmRlZGFlMTgzZjpzZXNzaW9uX2lkPTFfTVg0ME56YzJNekUwTVg1LU1UWTVNakF4TlRjek5UTTNPSDVMTUM5NFZHbzRhMmh5WVVGUFEyODBTWGMyYTNneEwwNS1mbjQmY3JlYXRlX3RpbWU9MTY5MjAxNTc1MCZub25jZT0wLjE5MzcwNjMzMzc4ODE0MzczJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2OTQ2MDc3NTAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

//   return (
//     <View style={styles.container}>
//       <View style={styles.videoContainer}>
//         <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
//           <View style={styles.publisherContainer}>
//             <OTSubscriber style={styles.subscriber} />
//             <OTPublisher
//               style={styles.publisher}
//               properties={{
//                 publishAudio: !mute,
//                 cameraPosition: flipped ? 'back' : 'front',
//               }}
//             />

//             <View style={styles.containerElements}>
//               <TouchableOpacity
//                 style={styles.micContainer}
//                 onPress={() => setMute(prevMute => !prevMute)}>
//                 {mute ? (
//                   <Feather name="mic-off" size={24} color="green" />
//                 ) : (
//                   <Feather name="mic" size={24} color="red" />
//                 )}
//               </TouchableOpacity>

//               <TouchableOpacity
//                 style={styles.cameraFlipContainer}
//                 onPress={() => setFlipped(prevFlipped => !prevFlipped)}>
//                 <Feather name="repeat" size={24} color="white" />
//               </TouchableOpacity>
//             </View>
//           </View>

//           <TouchableOpacity style={styles.buttonEndContainer} onPress={endCall}>
//             <View style={styles.buttonEndContainerView}>
//               <Icon name="call-end" size={24} color="white" />
//             </View>
//           </TouchableOpacity>
//         </OTSession>

//         <View>
//           <Text> Patient Name </Text>
//           <CTDropdown data={dataJson.BodyPart} />
//           <CTDropdown data={dataJson.Injury} />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   videoContainer: {
//     flex: 1,
//   },
//   publisherContainer: {
//     flex: 1,
//   },
//   subscriber: {
//     width: Dimensions.get('window').width * 0.5,
//     height: Dimensions.get('window').height * 0.5,
//     marginLeft: -100,
//     marginRight: -100,
//   },
//   publisher: {
//     width: Dimensions.get('window').width * 0.5,
//     height: Dimensions.get('window').height * 0.25,
//     marginLeft: 220,
//     marginTop: 300,
//   },
//   containerElements: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   micContainer: {
//     marginRight: 20,
//   },
//   cameraFlipContainer: {},
//   buttonEndContainer: {
//     position: 'absolute',
//     bottom: 20,
//     left: '50%',
//     transform: [{translateX: -25}],
//   },
//   buttonEndContainerView: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 50,
//   },
// });

// export default VideoScreen;

// import React, {useState} from 'react';
// import {
//   View,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions,
//   Text,
//   ScrollView,
//   Button,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';
// import {useNavigation} from '@react-navigation/native';
// import {CTDropdown, CTextBox, CTTextArea} from 'components';
// import dataJson from '../../assets/data/CTdropdownData.json';

// function VideoScreen() {
//   const navigation = useNavigation();
//   const [flipped, setFlipped] = useState(false);
//   const [mute, setMute] = useState(false);
//   const [callEnded, setCallEnded] = useState(false);

//   const endCall = () => {
//     setCallEnded(true);
//     navigation.navigate('Dashboard');
//   };

//   const apiKey = '47763141';
//   const sessionId =
//     '1_MX40Nzc2MzE0MX5-MTY5MjAxNTczNTM3OH5LMC94VGo4a2hyYUFPQ280SXc2a3gxL05-fn4';
//   const token =
//     'T1==cGFydG5lcl9pZD00Nzc2MzE0MSZzaWc9ZDJhNTIwMGQ1NGRhYjBjODQ5N2Y3MTNmMjM2MGRhYmRlZGFlMTgzZjpzZXNzaW9uX2lkPTFfTVg0ME56YzJNekUwTVg1LU1UWTVNakF4TlRjek5UTTNPSDVMTUM5NFZHbzRhMmh5WVVGUFEyODBTWGMyYTNneEwwNS1mbjQmY3JlYXRlX3RpbWU9MTY5MjAxNTc1MCZub25jZT0wLjE5MzcwNjMzMzc4ODE0MzczJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2OTQ2MDc3NTAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

//   return (
//     <View style={styles.container}>
//       <View style={styles.videoContainer}>
//         <View style={styles.videoColumn}>
//           <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
//             <View style={styles.publisherContainer}>
//               <OTSubscriber style={styles.subscriber} />
//               <OTPublisher
//                 style={styles.publisher}
//                 properties={{
//                   publishAudio: !mute,
//                   cameraPosition: flipped ? 'back' : 'front',
//                 }}
//               />

//               <View style={styles.containerElements}>
//                 <TouchableOpacity
//                   style={styles.micContainer}
//                   onPress={() => setMute(prevMute => !prevMute)}>
//                   {mute ? (
//                     <Feather name="mic-off" size={24} color="green" />
//                   ) : (
//                     <Feather name="mic" size={24} color="red" />
//                   )}
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles.cameraFlipContainer}
//                   onPress={() => setFlipped(prevFlipped => !prevFlipped)}>
//                   <Feather name="repeat" size={24} color="white" />
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <TouchableOpacity
//               style={styles.buttonEndContainer}
//               onPress={endCall}>
//               <View style={styles.buttonEndContainerView}>
//                 <Icon name="call-end" size={24} color="white" />
//               </View>
//             </TouchableOpacity>
//           </OTSession>
//         </View>

//         {/* <View style={styles.textColumn}>
//           <CTextBox title="First Name" />
//           <CTTextArea title="Prescription" placeholder="Prescription" />
//           <CTDropdown data={dataJson.BodyPart} title="Type of Injury " />
//           <CTDropdown data={dataJson.Injury} title="Body Part " />
//         </View> */}

//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           <View style={styles.textColumn}>
//             <ScrollView>
//               <CTextBox title="First Name" />
//               <CTTextArea title="Prescription" />
//               <CTDropdown data={dataJson.BodyPart} title="Type of Injury" />
//               <CTDropdown data={dataJson.Injury} title="Body Part" />

//               {/* Submit button */}
//               <View style={styles.submitButtonContainer}>
//                 <Button title="Submit" />
//               </View>
//             </ScrollView>
//           </View>
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   videoContainer: {
//     flex: 1,
//     flexDirection: 'column',
//   },
//   videoColumn: {
//     flex: 1,
//     backgroundColor: '#000', // Adjust the background color for video
//   },
//   textColumn: {
//     flex: 1,
//     backgroundColor: '#f0f0f0', // Adjust the background color for text
//     padding: 50,
//   },
//   publisherContainer: {
//     flex: 1,
//   },
//   subscriber: {
//     width: Dimensions.get('window').width * 0.5,
//     height: Dimensions.get('window').height * 0.5,
//     // marginLeft: -100,
//     marginRight: -100,
//   },
//   publisher: {
//     width: Dimensions.get('window').width * 0.5,
//     height: Dimensions.get('window').height * 0.25,
//     marginLeft: 220,
//     marginTop: 210,
//   },
//   containerElements: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   micContainer: {
//     marginRight: 20,
//     marginTop: -30,
//   },
//   cameraFlipContainer: {
//     marginTop: -220,
//     marginLeft: 340,
//     color: 'red',
//   },
//   buttonEndContainer: {
//     position: 'absolute',
//     bottom: 3,
//     left: '50%',
//     transform: [{translateX: -25}],
//   },
//   buttonEndContainerView: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 50,
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },

//   submitButtonContainer: {
//     marginTop: 20,
//     alignSelf: 'center',
//   },
// });

// export default VideoScreen;

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  Button,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';
import {useNavigation} from '@react-navigation/native';
import {CTDropdown, CTextBox, CTTextArea, CTDatePicker} from 'components';
import dataJson from '../../assets/data/CTdropdownData.json';

function VideoScreen() {
  const navigation = useNavigation();
  const [flipped, setFlipped] = useState(false);
  const [mute, setMute] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const endCall = () => {
    setCallEnded(true);
    navigation.navigate('Dashboard');
  };

  const apiKey = '47763141';
  const sessionId =
    '1_MX40Nzc2MzE0MX5-MTY5MjAxNTczNTM3OH5LMC94VGo4a2hyYUFPQ280SXc2a3gxL05-fn4';
  const token =
    'T1==cGFydG5lcl9pZD00Nzc2MzE0MSZzaWc9ZDJhNTIwMGQ1NGRhYjBjODQ5N2Y3MTNmMjM2MGRhYmRlZGFlMTgzZjpzZXNzaW9uX2lkPTFfTVg0ME56YzJNekUwTVg1LU1UWTVNakF4TlRjek5UTTNPSDVMTUM5NFZHbzRhMmh5WVVGUFEyODBTWGMyYTNneEwwNS1mbjQmY3JlYXRlX3RpbWU9MTY5MjAxNTc1MCZub25jZT0wLjE5MzcwNjMzMzc4ODE0MzczJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2OTQ2MDc3NTAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0=';

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <View style={styles.videoColumn}>
          <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
            <View style={styles.publisherContainer}>
              <OTSubscriber style={styles.subscriber} />
              <OTPublisher
                style={styles.publisher}
                properties={{
                  publishAudio: !mute,
                  cameraPosition: flipped ? 'back' : 'front',
                }}
              />

              <View style={styles.containerElements}>
                <TouchableOpacity
                  style={styles.micContainer}
                  onPress={() => setMute(prevMute => !prevMute)}>
                  {mute ? (
                    <Feather name="mic-off" size={24} color="green" />
                  ) : (
                    <Feather name="mic" size={24} color="red" />
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.cameraFlipContainer}
                  onPress={() => setFlipped(prevFlipped => !prevFlipped)}>
                  <Feather name="repeat" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonEndContainer}
              onPress={endCall}>
              <View style={styles.buttonEndContainerView}>
                <Icon name="call-end" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </OTSession>
        </View>

        <View style={styles.textColumn}>
          <ScrollView>
            <CTextBox
              title="First Name"
              borderStyle={{
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                borderRadius: 50,
                borderRadius: 10,
              }}
            />

            <View style={{marginTop: 10}}>
              <CTTextArea title="Prescription" />
            </View>

            <View style={{marginBottom: -35}}>
              {/* <CTDropdown data={dataJson.BodyPart} title="Type of Injury" /> */}
              <CTDropdown
                style={{marginTop: 50}}
                defaultButtonText="Select"
                title="Type of Injury"
                dropdownIconPosition="right"
                data={dataJson.BodyPart}
                // onDropdownChange={country => setData({...data, country: country})}
              />
            </View>

            <View style={{marginBottom: -50}}>
              <CTDropdown
                style={{marginTop: 50}}
                data={dataJson.Injury}
                defaultButtonText="Select"
                dropdownIconPosition="right"
                title="Body Part"
              />
            </View>

            <CTDatePicker title="Next visit" />

            <View style={styles.submitButtonContainer}>
              <Button title="Submit" />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    flexDirection: 'column', // Changed flexDirection to 'row'
  },
  videoColumn: {
    flex: 1,
    backgroundColor: '#000', // Adjust the background color for video
  },
  textColumn: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Adjust the background color for text
    padding: 50,
  },
  publisherContainer: {
    // flex: 1,
    position: 'relative',
  },
  subscriber: {
    width: Dimensions.get('window').width * 0.25,
    height: Dimensions.get('window').height * 0.5,
    position: 'relative',
    elevation: 2,
    zIndex: -10,
  },
  publisher: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').height * 0.25,
    top: '80%',
    left: '50%',
  },
  containerElements: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  micContainer: {
    position: 'absolute',
    top: 150,
    left: 5,
  },
  cameraFlipContainer: {
    marginTop: -50,
    marginLeft: 400,
  },
  buttonEndContainer: {
    position: 'absolute',
    bottom: 3,
    left: '50%',
    transform: [{translateX: -25}],
  },
  buttonEndContainerView: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 50,
  },
  submitButtonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: '10%',
    width: '50%',
  },
});

export default VideoScreen;
