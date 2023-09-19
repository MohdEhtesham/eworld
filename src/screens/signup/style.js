
import {StyleSheet,Dimensions} from 'react-native';
import { ROBOTO_BOLDITALIC } from '../../assets/fonts';
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: height * 0.1,
  },
  title: {
    fontFamily:ROBOTO_BOLDITALIC,
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
});


