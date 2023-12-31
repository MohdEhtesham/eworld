import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttoncomponent from '../../components/butoncomponents';
import CustomTextInput from '../../components/textinputcomponent';
import { Routes } from '../../navigation/Routes';
import styles from './style';
import {
  emailRegex,
  MAX_EMAIL_DIGITS,

} from '../../components/regex';

const { width, height } = Dimensions.get('window');

const isPad = Platform.OS === 'ios' && width >= 768;



const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);



  const isValidEmail = (text) => {
    if (text.length > MAX_EMAIL_DIGITS) {
      return false;
    }
    return emailRegex.test(text);
  };

  const handleResetPassword = () => {
    setEmailTouched(true);

    const isEmailValid = isValidEmail(email);

    if (!isEmailValid) {
      alert('Invalid email address');
    } else {
      navigation.navigate(Routes.Otpverification)
      alert('Password reset link sent to your email.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Forgot Password</Text>
      <View style={styles.inputContainer}>
      <CustomTextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          onBlur={() => setEmailTouched(true)}
          isValid={emailTouched ? isValidEmail(email) : ''}
          maxLength={MAX_EMAIL_DIGITS} // Set the maxLength
          errorMessage={
            !isValidEmail(email) && emailTouched ? 'Invalid email format' : null
          }
          onPress={() => setEmail('')}
        />
        {/* <TextInput
          style={[styles.input, isPad && styles.inputPad]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          onBlur={() => setEmailTouched(true)}
          maxLength={MAX_EMAIL_DIGITS}
        />
        {emailTouched && (
          <Icon
            name={isValidEmail(email) ? 'check-circle' : 'times-circle-o'}
            size={isPad ? 30 : 24}
            color={isValidEmail(email) ? 'green' : 'red'}
            style={styles.checkIcon}
          />
        )}
        {emailTouched && !isValidEmail(email) && (
          <Text style={styles.infoText}>Invalid email format</Text>
        )}
        {emailTouched && email.length >= MAX_EMAIL_DIGITS && (
          <Text style={styles.infoText}>Email exceeds maximum length</Text>
        )} */}
      </View>
      <Buttoncomponent onPress={handleResetPassword} value={"Proceed"} />
      <TouchableOpacity style={styles.signup}
      onPress={()=>{navigation.navigate(Routes.Login)}}
      >
        <Text style={styles.signupText}>Remember your password? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
