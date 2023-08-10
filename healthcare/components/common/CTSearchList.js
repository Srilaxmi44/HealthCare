import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CTListItems from './CTListItems';
import {Styles} from 'Styles';

export default CTSearchList = props => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: 'John Doe',
    },
    {
      id: 2,
      name: 'Jane Smith',
    },
    {
      id: 3,
      name: 'Bobbie Doeman',
    },
    {
      id: 4,
      name: 'Cabnth Johnson',
    },
    {
      id: 5,
      name: 'Krekvh Martin',
    },
    {
      id: 6,
      name: 'Jose Cassti',
    },
    {
      id: 7,
      name: 'John Mrtiuhg',
    },
    {
      id: 8,
      name: 'John Sena',
    },
    {
      id: 9,
      name: 'UnderTaker Smith',
    },
    {
      id: 10,
      name: 'Robert',
    },
    {
      id: 11,
      name: 'Johnson',
    },
    {
      id: 12,
      name: 'Martin Kelvin',
    },
    {
      id: 13,
      name: 'Rose Cassti',
    },
    {
      id: 14,
      name: 'John Kane',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [didSelect, setDidSelect] = useState(true);
  const [selectedItemID, setSelectedItemID] = useState(0);
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleSearch = text => {
    setSearchText(text);
    const filtered = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(text.toLowerCase());
    });
    if (text !== '') {
      setFilteredContacts(filtered);
      setDidSelect(false);
    } else {
      setDidSelect(true);
      setFilteredContacts([]);
    }
    setSelectedItemID(0);
  };

  const handleDidSelect = item => {
    setSearchText(item.name);
    setSelectedItemID(item.id);
    setFilteredContacts([]);
    setDidSelect(true);
  };

  return (
    <View style={Styles.containerSearch}>
      <View style={Styles.searchContainer}>
        <Text style={Styles.text_headerSearch}>{props.title}</Text>

        <TextInput
          style={Styles.searchInput}
          placeholder="Search Doctor"
          value={searchText}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredContacts}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleDidSelect(item)}>
            <View style={Styles.itemContainerSearch}>
              <Text style={Styles.nameTextSearch}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />

      {didSelect && <CTListItems id={selectedItemID} contacts={contacts} />}
    </View>
  );
};
