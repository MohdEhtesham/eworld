// OTPScreen.js
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Buttoncomponent from '../../components/butoncomponents';

import { styles } from './style'; // Import the styles from styles.js

const { width, height } = Dimensions.get('window');

// ... rest of your OTPScreen component remains the same ...


const OTPScreen = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const otpInputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleOTPChange = (index, value) => {
    if (value.match(/[0-9]/)) {
      const updatedOTP = [...otp];
      updatedOTP[index] = value;
      setOTP(updatedOTP);

      if (index < 5 && value !== '') {
        otpInputRefs[index + 1].current.focus();
      }
    } else if (value === '') {
      // Allow backspacing to clear the digit
      const updatedOTP = [...otp];
      updatedOTP[index] = '';
      setOTP(updatedOTP);

      if (index > 0) {
        otpInputRefs[index - 1].current.focus();
      }
    } else {
      // If an invalid character is entered, clear the input
      const updatedOTP = [...otp];
      updatedOTP[index] = '';
      setOTP(updatedOTP);
    }
  };

  const handleVerifyOTP = () => {
    const enteredOTP = otp.join('');
    // Replace this with your OTP verification logic.
    // For this example, we are assuming the OTP is '123456'.
    if (enteredOTP === '123456') {
      alert('OTP is valid. You can proceed.');
    } else {
      alert('Invalid OTP. Please try again.');
      setOTP(['', '', '', '', '', '']);
      otpInputRefs[0].current.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Enter OTP</Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpDigit}
              value={digit}
              onChangeText={(text) => handleOTPChange(index, text)}
              keyboardType="numeric"
              maxLength={1}
              ref={otpInputRefs[index]}
            />
          ))}
        </View>

        <Buttoncomponent value={"Proceed"} onPress={handleVerifyOTP}/>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};



export default OTPScreen;
