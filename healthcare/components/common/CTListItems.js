import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import Available from '../../assets/Images/Available.png'
import NotAvailable from '../../assets/Images/NotAvailable.png'
import { Styles } from 'Styles';


export default CTListItems = (props) => {

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
    ])

    const [filteredContacts, setFilteredContacts] = useState(contacts)
    const handleDidSelect = item => {
        console.log(item.isAvailable)
        if (item.isAvailable == false) {
            Alert.alert('Doctor not available')
        }
    }
    useEffect(() => {
        console.log(props.id)
        console.log(props.contacts)
        if (props.id == 0 || props.id == undefined) {
            setFilteredContacts(contacts)
        } else {
            const filtered = contacts.filter(contact => {
                return contact.id == props.id
            })
            setFilteredContacts(filtered)
        }

    }, [props.id]);
    return (
        <View style={Styles.containerList}>

            <FlatList
                data={filteredContacts}
                renderItem={({ item }) => (

                    <View style={Styles.itemContainerList}>
                        <View>
                            <Image style={Styles.imageList} source={{ uri: item.image }} />
                        </View>

                        <View style={Styles.textContainerList}>
                            <Text style={Styles.nameTextList}>{item.name}</Text>
                            <Text style={Styles.phoneTextList}>{item.speciality}</Text>
                            <Text style={Styles.phoneTextList}>{item.phone}</Text>
                            {/* <Text style={styles.phoneText}>{item.phone}</Text> */}
                        </View>
                        <View style={Styles.imgEndIconsView}>
                            <TouchableOpacity
                                onPress={() => handleDidSelect(item)}>
                                <Image style={Styles.imageEndList} source={item.isAvailable ? Available : NotAvailable} />
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />

        </View>

    )
}

