import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import CheckBox from 'react-native-checkbox';

const CTCheckBox = (props) => {



    return (

        <CheckBox
            style={{ width: 10 }}
            label='Remember me'
            onChange={(checked) => console.log('I am checked', checked)}
        />
    )
}

export default CTCheckBox;