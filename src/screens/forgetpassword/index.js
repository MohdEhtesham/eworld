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
import { Routes } from '../../navigation/Routes';
import styles from './style';

const { width, height } = Dimensions.get('window');

const MAX_EMAIL_DIGITS = 50;

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

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
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          onBlur={() => setEmailTouched(true)}
          maxLength={MAX_EMAIL_DIGITS}
        />
        {emailTouched && (
          <Icon
            name={isValidEmail(email) ? 'check-circle' : 'times-circle-o'}
            size={24}
            color={isValidEmail(email) ? 'green' : 'red'}
            style={styles.checkIcon}
          />
        )}
        {emailTouched && !isValidEmail(email) && (
          <Text style={styles.infoText}>Invalid email format</Text>
        )}
        {emailTouched && email.length >= MAX_EMAIL_DIGITS && (
          <Text style={styles.infoText}>Email exceeds maximum length</Text>
        )}
      </View>
      <Buttoncomponent onPress={handleResetPassword} value={"Reset Password"} />
      <TouchableOpacity style={styles.signup}>
        <Text style={styles.signupText}>Remember your password? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
