
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
        <View style={Styles.containerMainForgot} >

            
             <TouchableOpacity style={Styles.titleForgot} onPress={() => handleFinalSubmit()}>
             <Image
                style={Styles.titleForgot}
                source={require('../../assets/Images/back.png')}
            />
             </TouchableOpacity>
           

        <View style={Styles.containerForgot}>
            <Image
                style={Styles.iconHeader}
                source={require('../../assets/Images/Original.png')}
            />

            <View style={Styles.formForgot}>

                {(showEnterViewOTP && <>
                    <Text style={Styles.labelForgot}>Enter Email/Phone </Text>
                    <TextInput style={Styles.inputForgot} placeholder="Enter your Email/Phone" />

                    <TouchableOpacity onPress={() => setShowOTP(true)} >
                        <Text style={Styles.sendOTPButtonForgot}> Click here to sent OTP</Text>
                    </TouchableOpacity>

                    {(showOTP && <>
                        <Text style={Styles.labelEnterOTPForgot}>Enter OTP </Text>
                        <TextInput style={Styles.inputForgot} placeholder="Enter your OTP" />
                        <TouchableOpacity style={Styles.buttonForgot} onPress={() => handleSubmit()}>
                            <Text style={Styles.buttonTextForgot}>Submit</Text>
                        </TouchableOpacity>
                    </>
                    )}
                </>
                )}

{(!showEnterViewOTP && <>
                <Text style={Styles.labelForgot}>New password</Text>
        <TextInput
          style={Styles.inputForgot}
          placeholder="Enter a new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
        <Text style={Styles.labelForgot}>Repeat new password</Text>
        <TextInput
          style={Styles.inputForgot}
          placeholder="Repeat your new password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry={true}
        />
                <TouchableOpacity style={Styles.buttonForgot} onPress={() => handleFinalSubmit()}>
          <Text style={Styles.buttonTextForgot}>Submit</Text>
        </TouchableOpacity>
        </>
)}
            </View>

        </View>
        </View>
    );
};



export default ForgotPassword;
