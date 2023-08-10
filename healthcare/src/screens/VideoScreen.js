// import React, {useEffect, useState} from 'react';
// import {View} from 'react-native';
// import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';

// const apiKey = '47745561';
// const sessionId =
//   '2_MX40Nzc0NTU2MX5-MTY4OTIyNzIyMjczMn55WEw4T0FsRWZwZ29pSjEvQWtZZVZNS0N-fn4';
// const token =
//   'T1==cGFydG5lcl9pZD00Nzc0NTU2MSZzaWc9MGUxY2Y1MTQwMjQyZjBmNjI1MmM3ZDQyMzZjNTRkZjc4NmFjNmUzNTpzZXNzaW9uX2lkPTJfTVg0ME56YzBOVFUyTVg1LU1UWTRPVEl5TnpJeU1qY3pNbjU1V0V3NFQwRnNSV1p3WjI5cFNqRXZRV3RaWlZaTlMwTi1mbjQmY3JlYXRlX3RpbWU9MTY4OTIyNzI1MiZub25jZT0wLjY4NDMyOTQyNTkyOTYzNjImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY5MTgxOTI1MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

// const VideoCall = () => {
//   const [session, setSession] = useState(null);
//   const [publisher, setPublisher] = useState(null);
//   const [subscriber, setSubscriber] = useState(null);

//   useEffect(() => {
//     initializeSession();
//   }, []);

//   const initializeSession = () => {
//     setSession({apiKey, sessionId, token});
//   };

//   const onSessionConnect = () => {
//     // Handle session connection
//   };

//   const onPublish = () => {
//     // Handle publishing the local stream
//   };

//   const onSubscribe = () => {
//     // Handle subscribing to remote streams
//   };

//   return (
//     <View style={{flex: 1}}>
//       {session && (
//         <OTSession session={session} onSessionConnect={onSessionConnect}>
//           <OTPublisher
//             style={{width: 100, height: 100}}
//             onPublish={onPublish}
//           />
//           <OTSubscriber style={{flex: 1}} onSubscribe={onSubscribe} />
//         </OTSession>
//       )}
//     </View>
//   );
// };

// export default VideoCall;

import React, {useState} from 'react';
import {View, Button, TouchableOpacity, Text} from 'react-native';
import {OTSession, OTPublisher, OTSubscriber} from 'opentok-react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';

function VideoScreen() {
  const [callStarted, setCallStarted] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [mute, setMute] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const endCall = () => {
    setCallEnded(true);
  };

  const apiKey = '47745561';
  const sessionId =
    '2_MX40Nzc0NTU2MX5-MTY4OTIyNzIyMjczMn55WEw4T0FsRWZwZ29pSjEvQWtZZVZNS0N-fn4';
  const token =
    'T1==cGFydG5lcl9pZD00Nzc0NTU2MSZzaWc9MGUxY2Y1MTQwMjQyZjBmNjI1MmM3ZDQyMzZjNTRkZjc4NmFjNmUzNTpzZXNzaW9uX2lkPTJfTVg0ME56YzBOVFUyTVg1LU1UWTRPVEl5TnpJeU1qY3pNbjU1V0V3NFQwRnNSV1p3WjI5cFNqRXZRV3RaWlZaTlMwTi1mbjQmY3JlYXRlX3RpbWU9MTY4OTIyNzI1MiZub25jZT0wLjY4NDMyOTQyNTkyOTYzNjImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTY5MTgxOTI1MSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==';

  return (
    <View style={{flex: 1}}>
      {!callEnded ? (
        <View style={{flex: 1}}>
          {!callStarted ? (
            <Button title="Join Call" onPress={() => setCallStarted(true)} />
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                paddingHorizontal: 100,
                paddingVertical: 50,
              }}>
              <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
                <View style={{marginTop: -40}}>
                  <OTPublisher
                    style={{
                      width: '200%',
                      height: 300,
                      marginLeft: -95,
                      marginBottom: 200,
                    }}
                    properties={{
                      publishAudio: !mute,
                      cameraPosition: flipped ? 'back' : 'front',
                    }}
                  />

                  <View>
                    <TouchableOpacity
                      style={{position: 'absolute', bottom: 200, right: -90}}
                      onPress={() => setMute(prevMute => !prevMute)}>
                      {mute ? (
                        <Feather name="mic" size={24} color="red" />
                      ) : (
                        <Feather name="mic-off" size={24} color="green" />
                      )}
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{position: 'absolute', bottom: 200, right: -60}}
                      onPress={() => setFlipped(prevFlipped => !prevFlipped)}>
                      <Feather name="repeat" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
                <OTSubscriber
                  style={{
                    width: '200%',
                    height: '100%',
                    marginLeft: -95,
                    marginTop: -200,
                  }}
                />
                <TouchableOpacity
                  style={{position: 'absolute', bottom: 20, right: 100}}
                  onPress={endCall}>
                  {/* <Feather name="phone-off" size={24} color="red" /> */}
                  {/* <Icon name="mobile" size={24} color="red" /> */}
                  <View
                    style={{
                      backgroundColor: 'red',
                      width: '100%',
                      borderRadius: 10,
                      padding: 10,
                    }}>
                    <Icon name="call-end" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              </OTSession>
            </View>
          )}
        </View>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: '80%',
            backgroundColor: 'aqua',
            padding: 10,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>
            Thank You!.For ur consultation
          </Text>
        </View>
      )}
    </View>
  );
}

export default VideoScreen;
