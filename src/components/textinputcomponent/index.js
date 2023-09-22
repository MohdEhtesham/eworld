import React, { useRef } from 'react';
import { View, TextInput, Text, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { emailRegex, passwordRegex, MAX_EMAIL_DIGITS, MAX_PASSWORD_DIGITS, MIN_PASSWORD_LENGTH } from '../regex';
import styles from './style';

const { width, height } = Dimensions.get('window');

const isPad = Platform.OS === 'ios' && width >= 768;
const CustomTextInput = ({
  value,
  onChangeText,
  onBlur,
  maxLength,
  secureTextEntry,
  isValid,
  errorMessage,
  placeholder,
  keyboardType,
  returnKeyType,
  onSubmitEditing,
  onPress,
  inputRef
}) => {
  // const inputRef = useRef();

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, isPad && styles.inputPad]}
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
      />
      {isValid && (
        <Icon
          name="check-circle"
          size={24}
          color="green"
          style={styles.checkIcon}
        />
      )}
      {isValid === false && (

        


        <Icon
          name="times-circle-o"
          size={24}
          color="red"
          style={styles.checkIcon}
          onPress={onPress}
          />

      )}
      {isValid === false && errorMessage && (
        <Text style={styles.infoText}>{errorMessage}</Text>
      )}
      
    </View>
  );
};

export default CustomTextInput;
