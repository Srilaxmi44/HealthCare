import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage1 from '../screens/RegisterPage1';
import RegisterPage2 from '../screens/RegisterPage2';
import Login from 'src/screens/Login';
import ForgotPassword from 'src/screens/ForgotPassword';
import Dashboard from 'src/screens/Dashboard';
import Payment from 'src/screens/Payment';
import { Image, StyleSheet, ImageBackground, View } from 'react-native-animatable';
import { Logo, headerBG } from 'assets';
import LinearGradient from 'react-native-linear-gradient';
const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (

    <Image
      style={{ flex: 1, width: undefined, height: undefined }}
      resizeMode='fill'
      source={headerBG}
    />

  );
}
function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: "Health Care",

            headerTitleStyle: {
              backgroundColor: 'red',
              color: "#000"
            },
            headerBackground: (props) => <LogoTitle {...props} />

          }}

        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage1}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="RegisterPage2"
          component={RegisterPage2}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
