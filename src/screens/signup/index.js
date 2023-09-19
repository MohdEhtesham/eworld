import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttoncomponent from '../../components/butoncomponents';
import {launchCamera} from 'react-native-image-picker';
import { ROBOTO_BOLDITALIC } from '../../assets/fonts';


const { width, height } = Dimensions.get('window');

const MAX_EMAIL_DIGITS = 50;
const MIN_PASSWORD_LENGTH = 6;
const MAX_PASSWORD_DIGITS = 20;
const MAX_PHONE_DIGITS = 10;

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [addressTouched, setAddressTouched] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); 

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

  const isValidPhoneNumber = (text) => {
    if (text.length !== MAX_PHONE_DIGITS) {
      return false;
    }
    // Add your phone number validation logic here, if needed.
    return true;
  };
  

  const handleSignup = () => {
    setEmailTouched(true);
    setPasswordTouched(true);
    setConfirmPasswordTouched(true);
    setPhoneTouched(true);
    setAddressTouched(true);

    const isEmailValid = isValidEmail(email);
    const isPasswordValid = isValidPassword(password);
    const isPhoneNumberValid = isValidPhoneNumber(phone);

    if (!isEmailValid) {
      alert('Invalid email address');
    } else if (!isPasswordValid) {
      alert(
        `Invalid password. Password must contain at least ${MIN_PASSWORD_LENGTH} characters, including at least one uppercase letter, one lowercase letter, and one digit.`
      );
    } else if (password !== confirmPassword) {
      alert('Password and confirm password do not match');
    } else if (!isPhoneNumberValid) {
      alert('Invalid phone number');
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Phone:', phone);
      console.log('Address:', address);
      // You can add code here to send the signup data to your server or perform other actions.
    }
  };
 const  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
       <View style={styles.imagePickerContainer}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        )}
        <Button title="Pick an Image" onPress={handleCameraLaunch } />
      </View>
      <Text style={styles.title}>Signup</Text>
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          onBlur={() => setPasswordTouched(true)}
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          onBlur={() => setConfirmPasswordTouched(true)}
          maxLength={MAX_PASSWORD_DIGITS}
        />
        {confirmPasswordTouched && password !== confirmPassword && (
          <Text style={styles.infoText}>Passwords do not match</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          onChangeText={(text) => setPhone(text)}
          onBlur={() => setPhoneTouched(true)}
          maxLength={MAX_PHONE_DIGITS}
          keyboardType="phone-pad"
        />
        {phoneTouched && !isValidPhoneNumber(phone) && (
          <Text style={styles.infoText}>Invalid phone number format</Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Address"
          onChangeText={(text) => setAddress(text)}
          onBlur={() => setAddressTouched(true)}
          multiline
        />
      </View>
      <Buttoncomponent onPress={handleSignup} value={"Signup"} />
      <TouchableOpacity style={styles.signup}>
        <Text style={styles.signupText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: height * 0.1,
  },
  title: {

    fontSize: width * 0.08, // Responsive font size
    fontWeight: 'bold',
    marginBottom: width * 0.04, // Responsive margin
  },
  inputContainer: {
    width: width * 0.8,
    marginBottom: width * 0.04,
    position: 'relative',
  },
  input: {
    height: width * 0.12, // Responsive height
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: width * 0.02, // Responsive border radius
    paddingHorizontal: width * 0.04, // Responsive padding
    marginBottom: width * 0.02, // Responsive margin
    fontSize: width * 0.04, // Responsive font size
  },
  button: {
    backgroundColor: 'blue',
    padding: width * 0.04, // Responsive padding
    borderRadius: width * 0.02, // Responsive border radius
    width: width * 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: width * 0.05, // Responsive font size
    textAlign: 'center',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: width * 0.02, // Responsive margin
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: width * 0.04, // Responsive font size
  },
  signup: {
    marginTop: width * 0.04, // Responsive margin
  },
  signupText: {
    color: 'blue',
    fontSize: width * 0.04, // Responsive font size
    fontWeight: 'bold',
  },
  infoText: {
    color: 'red',
    fontSize: width * 0.035, // Responsive font size
  },
  checkIcon: {
    position: 'absolute',
    top: width * 0.045, // Responsive position
    right: width * 0.04, // Responsive position
  },
  imagePickerContainer: {
    alignItems: 'center',
    marginBottom: width * 0.04,
  },
  selectedImage: {
    width: width * 0.4,
    height: width * 0.4,
    resizeMode: 'contain',
    marginBottom: width * 0.02,
  },
});



export default SignupScreen;
