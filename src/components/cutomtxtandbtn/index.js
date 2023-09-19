import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  maxLength,
  touched,
  isValid,
  infoText,
  secureTextEntry,
  onSubmitEditing,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
      />
      {touched && (
        <Icon
          name={isValid ? 'check-circle' : 'times-circle-o'}
          size={24}
          color={isValid ? 'green' : 'red'}
          style={styles.checkIcon}
        />
      )}
      {touched && !isValid && <Text style={styles.infoText}>{infoText}</Text>}
    </View>
  );
};

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // ... Your existing styles ...

  inputContainer: {
    width: width * 0.8,
    marginBottom: width * 0.04,
    position: 'relative',
  },
  input: {
    height: width * 0.12,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.04,
    marginBottom: width * 0.02,
    fontSize: width * 0.04,
  },
  // ... Rest of your styles ...
});

export { CustomTextInput, CustomButton };
