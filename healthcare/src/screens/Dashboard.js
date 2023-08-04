import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Styles} from 'Styles';

import CTSearchList from 'components/common/CTSearchList';

const Dashboard = ({navigation}) => {
  return (
    <View>
      {/* <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          // marginBottom: -10,
          position: 'relative',
        }}>
        <Icon name="sign-out" size={30} color="black" />
      </View> */}

      <CTSearchList title={'Search Available Doctors'} />
    </View>
  );
};

export default Dashboard;
