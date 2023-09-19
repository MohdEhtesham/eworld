import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const TextInputComponent = ({
  placeholder,
  value,
  onChangeText,
  onBlur,
  maxLength,
  isValid,
  errorMessage,
  isSecure,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        maxLength={maxLength}
        secureTextEntry={isSecure}
      />
      {isValid && (
        <Icon
          name="check-circle"
          size={24}
          color="green"
          style={{ /* Add your custom styles for the check icon here */ }}
        />
      )}
      {isValid === false && (
        <Icon
          name="times-circle-o"
          size={24}
          color="red"
          style={{ /* Add your custom styles for the error icon here */ }}
        />
      )}
      {isValid === false && errorMessage && (
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
      )}
      {isValid === false && !errorMessage && maxLength && (
        <Text style={{ color: 'red' }}>Input exceeds maximum length</Text>
      )}
    </View>
  );
};

export default TextInputComponent;
