import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './Routes';
import * as Screens from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTab from './CustomTab';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Home} component={Screens.Home} />
    </Stack.Navigator>
  );
}

function Settingsstack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      
      >
      <Stack.Screen name={Routes.Settings} component={Screens.Settings} />
      <Stack.Screen name={Routes.Editprofile} component={Screens.Editprofile} />
      <Stack.Screen
        name={Routes.Createnewpassword}
        component={Screens.Createnewpassword}
      />
    </Stack.Navigator>
  );
}
function FeedbackStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}   
      >
      <Stack.Screen name={Routes.Feedback} component={Screens.Feedback} />
      
    </Stack.Navigator>
  );
}
function Tabavigators() {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTab {...props} 
      />
    
    } 
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true,}}>
      <Tab.Screen name={Routes.Home} component={HomeStack} />
      <Tab.Screen name={Routes.Feedback} component={FeedbackStack} />
      <Tab.Screen name={Routes.Settings} component={Settingsstack} />
    </Tab.Navigator>
  );
}
export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Splash} component={Screens.Splash} />
      <Stack.Screen name={Routes.Login} component={Screens.Login} />
      <Stack.Screen name={Routes.Signup} component={Screens.Signup} />
      <Stack.Screen
        name={Routes.Forgetpassword}
        component={Screens.Forgetpassword}
      />
      <Stack.Screen
        name={Routes.Otpverification}
        component={Screens.Otpverification}
      />
      <Stack.Screen
        name={Routes.Resetpassword}
        component={Screens.Resetpassword}
      />
      <Stack.Screen name={Routes.Addfeedback} component={Screens.Addfeedback} />
     

      <Stack.Screen
        name={Routes.GiveFeedback}
        component={Screens.GiveFeedback}
      />
      <Stack.Screen name={Routes.Editprofile} component={Screens.Editprofile} />

      <Stack.Screen name={Routes.Home} component={Tabavigators} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
