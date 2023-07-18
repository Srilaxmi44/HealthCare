import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native';

import { Styles } from 'Styles';

import CTSearchList from 'components/common/CTSearchList';

const Dashboard = ({ navigation }) => {


    return (
        <View>
            <CTSearchList title={'Doctors List'} />
        </View>
    );
};

export default Dashboard;
