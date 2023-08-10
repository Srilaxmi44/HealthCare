// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Image,
//   Modal,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import Available from '../../assets/Images/Available.png';
// import NotAvailable from '../../assets/Images/NotAvailable.png';
// import {useNavigation} from '@react-navigation/native';
// import {Styles} from 'Styles';

// export default CTListItems = props => {
//   const navigation = useNavigation();
//   const [contacts, setContacts] = useState([
//     {
//       id: 1,
//       name: 'John Doe',
//       phone: '555-555-5555',
//       speciality: 'Orthopedics',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
//       isAvailable: true,
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       phone: '444-444-4444',
//       speciality: 'Opthalmology',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
//       isAvailable: false,
//     },
//     {
//       id: 3,
//       name: 'Bobbie Doeman',
//       phone: '333-333-3333',
//       speciality: 'Dermatology',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
//       isAvailable: true,
//     },
//     {
//       id: 4,
//       name: 'Cabnth Johnson',
//       phone: '333-333-3333',
//       speciality: 'Pediatrics',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
//       isAvailable: false,
//     },
//     {
//       id: 5,
//       name: 'Krekvh Martin',
//       phone: '333-333-3333',
//       speciality: 'Radiology',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
//       isAvailable: true,
//     },
//     {
//       id: 6,
//       name: 'Jose Cassti',
//       phone: '333-333-3333',
//       speciality: 'General Surgery',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
//       isAvailable: true,
//     },
//     {
//       id: 7,
//       name: 'John Mrtiuhg',
//       phone: '333-333-3333',
//       speciality: 'General Surgery',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
//       isAvailable: false,
//     },
//     {
//       id: 8,
//       name: 'John Sena',
//       phone: '555-555-5555',
//       speciality: 'Radiology',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
//       isAvailable: false,
//     },
//     {
//       id: 9,
//       name: 'Smith',
//       phone: '444-444-4444',
//       speciality: 'Orthopedics',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
//       isAvailable: true,
//     },
//     {
//       id: 10,
//       name: 'Robert',
//       phone: '333-333-3333',
//       speciality: 'General Surgery',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
//       isAvailable: true,
//     },
//     {
//       id: 11,
//       name: 'Johnson',
//       phone: '333-333-3333',
//       speciality: 'Radiology',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
//       isAvailable: true,
//     },
//     {
//       id: 12,
//       name: 'Martin Kelvin',
//       phone: '333-333-3333',
//       speciality: 'Radiology',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
//       isAvailable: true,
//     },
//     {
//       id: 13,
//       name: 'Rose Cassti',
//       phone: '333-333-3333',
//       speciality: 'Opthalmology',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
//       isAvailable: false,
//     },
//     {
//       id: 14,
//       name: 'John Kane',
//       phone: '333-333-3333',
//       speciality: 'General Surgery',
//       image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
//       isAvailable: true,
//     },
//   ]);
//   const [filteredContacts, setFilteredContacts] = useState(contacts);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleDidSelect = item => {
//     if (!item.isAvailable) {
//       return; // Do not open the modal if the call button is red
//     }
//     setSelectedDoctor(item);
//     setIsModalVisible(true);
//   };

//   const handleAvailabilityResponse = isAvailable => {
//     if (selectedDoctor) {
//       if (isAvailable === true) {
//         // Handle the availability response here
//         navigation.navigate('VideoScreen');
//       } else {
//         // Handle the non-availability response here
//       }
//     }
//     setSelectedDoctor(null);
//     setIsModalVisible(false);
//   };

//   useEffect(() => {
//     if (props.id == 0 || props.id == undefined) {
//       setFilteredContacts(contacts);
//     } else {
//       const filtered = contacts.filter(contact => {
//         return contact.id == props.id;
//       });
//       setFilteredContacts(filtered);
//     }
//   }, [props.id]);

//   return (
//     <View style={Styles.containerList}>
//       <FlatList
//         data={filteredContacts}
//         renderItem={({item}) => (
//           <View style={Styles.itemContainerList}>
//             <Image style={Styles.imageList} source={{uri: item.image}} />
//             <View style={Styles.textContainerList}>
//               <Text style={Styles.nameTextList}>{item.name}</Text>
//               <Text style={Styles.phoneTextList}>{item.speciality}</Text>
//               <Text style={Styles.phoneTextList}>{item.phone}</Text>
//             </View>
//             <TouchableOpacity onPress={() => handleDidSelect(item)}>
//               <Image
//                 style={Styles.imageEndList}
//                 source={item.isAvailable ? Available : NotAvailable}
//               />
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={item => item.id.toString()}
//       />

//       <Modal
//         visible={isModalVisible}
//         animationType="slide"
//         transparent={true}
//         onRequestClose={() => setIsModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text>Are you want to connect with doctor?</Text>
//             <View style={styles.buttonContainer}>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => handleAvailabilityResponse(true)}>
//                 <Text style={styles.buttonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => handleAvailabilityResponse(false)}>
//                 <Text style={styles.buttonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',

//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   button: {
//     marginHorizontal: 50,
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     backgroundColor: 'lightblue',
//     borderRadius: 5,
//     width: 100,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
// });

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Available from '../../assets/Images/Available.png';
import NotAvailable from '../../assets/Images/NotAvailable.png';
import {useNavigation} from '@react-navigation/native';
import {Styles} from 'Styles';
import CTModal from './CTModal'; // Import the DoctorModal component

const CTListItems = props => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
      phone: '555-555-5555',
      speciality: 'Orthopedics',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      isAvailable: true,
    },
    {
      id: 2,
      name: 'Jane Smith',
      phone: '444-444-4444',
      speciality: 'Opthalmology',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
      isAvailable: false,
    },
    {
      id: 3,
      name: 'Bobbie Doeman',
      phone: '333-333-3333',
      speciality: 'Dermatology',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
      isAvailable: true,
    },
    {
      id: 4,
      name: 'Cabnth Johnson',
      phone: '333-333-3333',
      speciality: 'Pediatrics',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
      isAvailable: false,
    },
    {
      id: 5,
      name: 'Krekvh Martin',
      phone: '333-333-3333',
      speciality: 'Radiology',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
      isAvailable: true,
    },
    {
      id: 6,
      name: 'Jose Cassti',
      phone: '333-333-3333',
      speciality: 'General Surgery',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
      isAvailable: true,
    },
    {
      id: 7,
      name: 'John Mrtiuhg',
      phone: '333-333-3333',
      speciality: 'General Surgery',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
      isAvailable: false,
    },
    {
      id: 8,
      name: 'John Sena',
      phone: '555-555-5555',
      speciality: 'Radiology',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar1.png',
      isAvailable: false,
    },
    {
      id: 9,
      name: 'Smith',
      phone: '444-444-4444',
      speciality: 'Orthopedics',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar2.png',
      isAvailable: true,
    },
    {
      id: 10,
      name: 'Robert',
      phone: '333-333-3333',
      speciality: 'General Surgery',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar3.png',
      isAvailable: true,
    },
    {
      id: 11,
      name: 'Johnson',
      phone: '333-333-3333',
      speciality: 'Radiology',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar4.png',
      isAvailable: true,
    },
    {
      id: 12,
      name: 'Martin Kelvin',
      phone: '333-333-3333',
      speciality: 'Radiology',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar5.png',
      isAvailable: true,
    },
    {
      id: 13,
      name: 'Rose Cassti',
      phone: '333-333-3333',
      speciality: 'Opthalmology',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar6.png',
      isAvailable: false,
    },
    {
      id: 14,
      name: 'John Kane',
      phone: '333-333-3333',
      speciality: 'General Surgery',
      image: 'https://www.bootdey.com/img/Content/avatar/avatar7.png',
      isAvailable: true,
    },
  ]);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDidSelect = item => {
    if (!item.isAvailable) {
      return;
    }
    setSelectedDoctor(item);
    setIsModalVisible(true);
  };

  const handleAvailabilityResponse = isAvailable => {
    if (selectedDoctor) {
      if (isAvailable) {
        navigation.navigate('VideoScreen');
      } else {
        // Handle non-availability response here
      }
    }
    setSelectedDoctor(null);
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (props.id == 0 || props.id == undefined) {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter(contact => {
        return contact.id == props.id;
      });
      setFilteredContacts(filtered);
    }
  }, [props.id]);

  return (
    <View style={Styles.containerList}>
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <View style={Styles.itemContainerList}>
            <Image style={Styles.imageList} source={{uri: item.image}} />
            <View style={Styles.textContainerList}>
              <Text style={Styles.nameTextList}>{item.name}</Text>
              <Text style={Styles.phoneTextList}>{item.speciality}</Text>
              <Text style={Styles.phoneTextList}>{item.phone}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDidSelect(item)}>
              <Image
                style={Styles.imageEndList}
                source={item.isAvailable ? Available : NotAvailable}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />

      <CTModal
        isModalVisible={isModalVisible}
        handleAvailabilityResponse={handleAvailabilityResponse}
      />
    </View>
  );
};

export default CTListItems;
