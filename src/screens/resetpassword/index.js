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
import Buttoncomponent from '../../components/butoncomponents';
import { Routes } from '../../navigation/Routes';

const { width, height } = Dimensions.get('window');

const MIN_PASSWORD_LENGTH = 6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.1,
    justifyContent: 'center',
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginBottom: height * 0.03,
  },
  inputContainer: {
    marginBottom: height * 0.02,
  },
  input: {
    height: height * 0.06,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: width * 0.03,
    fontSize: width * 0.04,
    marginBottom: height * 0.01,
  },
  infoText: {
    color: 'red',
    fontSize: width * 0.035,
  },
  goBack: {
    marginTop: height * 0.03,
  },
  goBackText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: width * 0.04,
  },
});

const ResetPasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordTouched, setNewPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const handleResetPassword = () => {
    setNewPasswordTouched(true);
    setConfirmPasswordTouched(true);

    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
    } else if (newPassword.length < MIN_PASSWORD_LENGTH) {
      alert(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`);
    } else {
      // Implement your reset password logic here
      console.log('Old Password:', oldPassword);
      console.log('New Password:', newPassword);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Old Password"
          secureTextEntry={true}
          onChangeText={(text) => setOldPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry={true}
          onChangeText={(text) => setNewPassword(text)}
          onBlur={() => setNewPasswordTouched(true)}
        />
        {newPasswordTouched && newPassword.length < MIN_PASSWORD_LENGTH && (
          <Text style={styles.infoText}>
            Password must be at least {MIN_PASSWORD_LENGTH} characters long
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          onBlur={() => setConfirmPasswordTouched(true)}
        />
        {confirmPasswordTouched && newPassword !== confirmPassword && (
          <Text style={styles.infoText}>Passwords do not match</Text>
        )}
      </View>
      <Buttoncomponent onPress={handleResetPassword} value="Reset Password" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Routes.Login); // Navigate to the login screen
        }}
        style={styles.goBack}
      >
        <Text style={styles.goBackText}>Go back to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
