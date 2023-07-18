
import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Styles } from 'Styles';

const ForgotPassword = ({navigation}) => {

    const [currentPassword, setCurrentPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

    const [showOTP, setShowOTP] = useState(false);

    const [showEnterViewOTP, setShowEnterVieOTP] = useState(true);

    const handleSubmit = () => {
        setShowEnterVieOTP(false)
    }

    const handleFinalSubmit = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.containerMain} >

            
             <TouchableOpacity style={styles.title} onPress={() => handleFinalSubmit()}>
             <Image
                style={styles.title}
                source={require('../../assets/Images/back.png')}
            />
             </TouchableOpacity>
           

        <View style={styles.container}>
            <Image
                style={Styles.iconHeader}
                source={require('../../assets/Images/Original.png')}
            />

            <View style={styles.form}>

                {(showEnterViewOTP && <>
                    <Text style={styles.label}>Enter Email/Phone </Text>
                    <TextInput style={styles.input} placeholder="Enter your Email/Phone" />

                    <TouchableOpacity onPress={() => setShowOTP(true)} >
                        <Text style={styles.sendOTPButtonText}> Click here to sent OTP</Text>
                    </TouchableOpacity>

                    {(showOTP && <>
                        <Text style={styles.labelEnterOTP}>Enter OTP </Text>
                        <TextInput style={styles.input} placeholder="Enter your OTP" />
                        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </>
                    )}
                </>
                )}

{(!showEnterViewOTP && <>
                <Text style={styles.label}>New password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Repeat new password</Text>
        <TextInput
          style={styles.input}
          placeholder="Repeat your new password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry={true}
        />
                <TouchableOpacity style={styles.button} onPress={() => handleFinalSubmit()}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </>
)}
            </View>

        </View>
        </View>
    );
};

const styles = StyleSheet.create({


    containerMain: {
        flex: 1,
        padding: 10,
        paddingTop:60,
        backgroundColor: '#fff'
      },
    sendOTPButtonText: {
        color: '#20B2AA',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 10
    },
    sendOTPButtonView: {
        width: "100%",
        textAlign: "flex-end",
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        justifyContent: 'center',
        width:45,
        height:45,
      },
    container: {
        flex: 1,
         alignItems: 'center',
        backgroundColor: '#fff'
    },
    form: {
        width: '80%',
    },
    labelEnterOTP: {
        marginTop: 10,
        marginBottom: 5
    },
    label: {
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        fontSize: 18,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#20B2AA',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ForgotPassword;
