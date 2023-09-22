import React, {useState, useRef} from 'react';
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
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttoncomponent from '../../components/butoncomponents';
import {Routes} from '../../navigation/Routes';
import styles from './style';
import {
  emailRegex,
  passwordRegex,
  MAX_EMAIL_DIGITS,
  MAX_PASSWORD_DIGITS,
  MIN_PASSWORD_LENGTH,
} from '../../components/regex';
import CustomTextInput from '../../components/textinputcomponent';

const {width, height} = Dimensions.get('window');

const isPad = Platform.OS === 'ios' && width >= 768;

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const isValidEmail = text => {
    if (text.length > MAX_EMAIL_DIGITS) {
      return false;
    }
    return emailRegex.test(text);
  };

  const isValidPassword = text => {
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
        `Invalid password. Password must contain at least ${MIN_PASSWORD_LENGTH} characters, including at least one uppercase letter, one lowercase letter, and one digit.`,
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
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Login</Text>
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
          onSubmitEditing={handleEmailSubmit}
          onPress={() => setEmail('')}
        />

        {/* <TextInput
          style={[styles.input, isPad && styles.inputPad]}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          onBlur={() => setEmailTouched(true)}
          onSubmitEditing={handleEmailSubmit}
          maxLength={MAX_EMAIL_DIGITS}
        />
        {emailTouched && (
          <Icon
            name={isValidEmail(email) ? 'check-circle' : 'times-circle-o'}
            size={isPad ? 30 : 24} // Adjust icon size for iPad
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
      <View style={styles.inputContainer}>
        <CustomTextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          maxLength={MAX_PASSWORD_DIGITS}
          onChangeText={text => setPassword(text)}
          onBlur={() => setPasswordTouched(true)}
          isValid={passwordTouched ? isValidPassword(password) : ''}
          errorMessage={
            passwordTouched
              ? ' Password must contain at least 6  characters, including at least one uppercase letter, one lowercase letter, and one digit.'
              : ''
          }
          inputRef={passwordInputRef}
          onPress={() => setPassword('')}
        />
        {/* <TextInput
          style={[styles.input, isPad && styles.inputPad]}
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
            size={isPad ? 30 : 24} // Adjust icon size for iPad
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
        )} */}
      </View>
      <Buttoncomponent onPress={handleLogin} value={'Login'} />
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.Forgetpassword)}
        style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.Signup)}
        style={styles.signup}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LoginScreen;
