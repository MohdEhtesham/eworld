import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttoncomponent from '../../components/butoncomponents';
import { Routes } from '../../navigation/Routes';
import styles from './style';

const { width, height } = Dimensions.get('window');

const MAX_EMAIL_DIGITS = 50;
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_DIGITS = 20;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const passwordRegex = `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{${MIN_PASSWORD_LENGTH},}$`;

  const isValidEmail = (text) => {
    if (text.length > MAX_EMAIL_DIGITS) {
      return false;
    }
    return emailRegex.test(text);
  };

  const isValidPassword = (text) => {
    if (text.length > MAX_PASSWORD_DIGITS) {
      return false;
    }
    return new RegExp(passwordRegex).test(text);
  };

  const passwordInputRef = useRef();

  const handleLogin = () => {
    setEmailTouched(true);
    setPasswordTouched(true);

    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(password);

    if (!isEmailValid) {
      alert('Invalid email address');
    } else if (!isPasswordValid) {
      alert(
        `Invalid password. Password must contain at least ${MIN_PASSWORD_LENGTH} characters, including at least one uppercase letter, one lowercase letter, and one digit.`
      );
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  const handleEmailSubmit = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          onBlur={() => setEmailTouched(true)}
          onSubmitEditing={handleEmailSubmit}
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onBlur={() => setPasswordTouched(true)}
          ref={passwordInputRef}
          maxLength={MAX_PASSWORD_DIGITS}
        />
        {passwordTouched && (
          <Icon
            name={isValidPassword(password) ? 'check-circle' : 'times-circle-o'}
            size={24}
            color={isValidPassword(password) ? 'green' : 'red'}
            style={styles.checkIcon}
          />
        )}
        {passwordTouched && !isValidPassword(password) && (
          <Text style={styles.infoText}>
            Password must contain at least {MIN_PASSWORD_LENGTH} characters, including at least
            one uppercase letter, one lowercase letter, and one digit.
          </Text>
        )}
        {passwordTouched && password.length >= MAX_PASSWORD_DIGITS && (
          <Text style={styles.infoText}>Password exceeds maximum length</Text>
        )}
      </View>
      <Buttoncomponent onPress={handleLogin} value={"Login"} />
      <TouchableOpacity onPress={()=>{
        navigation.navigate(Routes.Forgetpassword)
      }} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate(Routes.Signup)
      }} style={styles.signup} >
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default LoginScreen;