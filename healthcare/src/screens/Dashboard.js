import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/FontAwesome';

import {Styles} from 'Styles';

import CTSearchList from 'components/common/CTSearchList';

const Dashboard = ({navigation}) => {
  return (
    <View>
      {/* <Icon name="log-out" /> */}
      <CTSearchList title={'Search Available Doctors'} />
    </View>
  );
};

export default Dashboard;
