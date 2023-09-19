import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Logopath } from '../../assets/images';
import { Routes } from '../../navigation/Routes';

const { width, height } = Dimensions.get('window');

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
  profileImage: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    marginBottom: height * 0.02,
  },
  saveButton: {
    backgroundColor: 'blue',
    paddingVertical: height * 0.02,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: width * 0.04,
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

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [profileImage, setProfileImage] = useState(null);

  const handleSaveProfile = () => {
    // Implement your logic to save the profile changes
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Profile Image:', profileImage);
    // You can make an API request here to update the user's profile on the server
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TouchableOpacity
        onPress={() => {
          // Implement image picker logic to allow the user to select a profile picture
        }}
      >
        <Image
          source={profileImage ? { uri: profileImage } : Logopath.LOGO}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveProfile}
      >
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack(); // Navigate back to the previous screen
        }}
        style={styles.goBack}
      >
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;
