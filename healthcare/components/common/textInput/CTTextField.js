// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// // import {Styles} from 'Styles';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {create} from 'react-test-renderer';
// Feather.loadFont();

// const CTextBox = props => {
//   return (
//     <View>
//       <Text style={Styles.dr_text_footer}>{props.title}</Text>
//       <View style={Styles.action}>
//         {props.fontname != '' && (
//           <Feather name={props.fontname} color="#05375a" size={18} />
//         )}
//         <TextInput
//           inputMode={props.type || 'text'}
//           maxLength={props.max || 200}
//           placeholder={props.placeholder}
//           style={[props.borderStyle, Styles.TextInputContainer]}
//           autoCapitalize="none"
//           secureTextEntry={props.secureTextEntry}
//           keyboardType={props.keyboard}
//         />

//         {props.title === 'password' ? (
//           <TouchableOpacity onPress={props.onTogglePasswordVisibility}>
//             <Icon
//               name={props.secureTextEntry ? 'eye-slash' : 'eye'}
//               size={18}
//             />
//           </TouchableOpacity>
//         ) : null}
//       </View>
//     </View>
//   );
// };

// const Styles = StyleSheet.create({
//   dr_text_footer: {
//     color: '#05375a',
//     fontSize: 18,
//   },
// });

// export default CTextBox;

// import React from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Styles from './CTStyleTextInput';

// Feather.loadFont();

// const CTextBox = props => {
//   return (
//     <View>
//       <Text style={Styles.textTitle}>{props.title}</Text>
//       <View>
//         {props.fontname !== '' && (
//           <Feather name={props.fontname} color="#05375a" size={18} />
//         )}
//         <TextInput
//           inputMode={props.type || 'text'}
//           maxLength={props.max || 200}
//           placeholder={props.placeholder}
//           style={[Styles.inputContainer, props.borderStyle]}
//           autoCapitalize="none"
//           secureTextEntry={props.secureTextEntry}
//           keyboardType={props.keyboard}
//           onChangeText={props.onChangeText}
//         />

//         {props.title === 'password' ? (
//           <TouchableOpacity onPress={props.onTogglePasswordVisibility}>
//             <Icon
//               name={props.secureTextEntry ? 'eye-slash' : 'eye'}
//               size={18}
//             />
//           </TouchableOpacity>
//         ) : null}
//       </View>
//     </View>
//   );
// };

// export default CTextBox;

// CTextBox.js
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from './CTStyleTextInput';

Feather.loadFont();

const CTextBox = props => {
  return (
    <View>
      <Text style={Styles.textTitle}>{props.title}</Text>
      <View style={props.inputContainerStyle}>
        {props.fontname !== '' && (
          <Feather name={props.fontname} color="#05375a" size={18} />
        )}
        <TextInput
          inputMode={props.type || 'text'}
          maxLength={props.max || 200}
          placeholder={props.placeholder}
          style={[Styles.textInput, props.borderStyle]}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboard}
          onChangeText={props.onChangeText}
        />

        {props.title === 'password' ? (
          <TouchableOpacity onPress={props.onTogglePasswordVisibility}>
            <Icon
              name={props.secureTextEntry ? 'eye-slash' : 'eye'}
              size={18}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default CTextBox;
