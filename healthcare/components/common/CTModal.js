import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Styles} from 'Styles';

const CTModal = props => (
  <Modal
    visible={props.isModalVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={() => props.handleAvailabilityResponse(false)}>
    <View style={Styles.Modal_modalContainer}>
      <View style={Styles.Modal_modalContent}>
        <Text style={Styles.Modal_modalContentText}>
          Are you want to connect with the doctor?
        </Text>
        <View style={Styles.Modal_buttonContainer}>
          <TouchableOpacity
            style={Styles.Modal_button}
            onPress={() => props.handleAvailabilityResponse(true)}>
            <Text style={Styles.Modal_buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.Modal_button}
            onPress={() => props.handleAvailabilityResponse(false)}>
            <Text style={Styles.Modal_buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </Modal>
);

export default CTModal;
