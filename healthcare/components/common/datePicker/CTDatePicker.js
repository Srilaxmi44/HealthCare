// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import Feather from 'react-native-vector-icons/Feather';
// import Styles from './CTStyleDatePicker';

// Feather.loadFont();

// const CTDatePicker = props => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleDateChange = (event, date) => {
//     if (date !== undefined) {
//       setSelectedDate(date);
//       // You can also pass this selectedDate value to the parent component if needed
//     }
//     setShowDatePicker(false);
//   };

//   const showDatePickerModal = () => {
//     setShowDatePicker(true);
//   };

//   return (
//     <View style={Styles.container}>
//       <Text style={Styles.title}>{props.title}</Text>
//       <View style={Styles.dateContainer}>
//         <Text style={Styles.dateText}>
//           {selectedDate.toISOString().split('T')[0]}
//         </Text>
//         <TouchableOpacity onPress={showDatePickerModal}>
//           <Feather name="calendar" size={20} color="#000" />
//         </TouchableOpacity>
//       </View>
//       {showDatePicker && (
//         <DateTimePicker
//           value={selectedDate}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )}
//     </View>
//   );
// };

// export default CTDatePicker;

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './CTStyleDatePicker';

Feather.loadFont();

const CTDatePicker = props => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [manualDateInput, setManualDateInput] = useState('');

  const handleDateChange = (event, date) => {
    console.log('hellohead', date);

    if (date !== undefined) {
      props.onChangeText(date);
      setSelectedDate(date);
      setManualDateInput(date.toISOString().split('T')[0]);
    }
    setShowDatePicker(false);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const handleManualDateChange = text => {
    props.onChangeText(text);
    setManualDateInput(text);
  };

  const handleManualDateSubmit = () => {
    const parsedDate = new Date(manualDateInput);
    if (!isNaN(parsedDate)) {
      setSelectedDate(parsedDate);
      setShowDatePicker(false);
    }
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>{props.title}</Text>
      <View style={Styles.dateContainer}>
        <TextInput
          style={Styles.dateText}
          value={manualDateInput}
          onChangeText={handleManualDateChange}
          placeholder="YYYY-MM-DD"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={showDatePickerModal}>
          <Feather name="calendar" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default CTDatePicker;
