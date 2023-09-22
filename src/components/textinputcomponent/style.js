
import {StyleSheet,Dimensions} from 'react-native';
import { ROBOTO_BOLDITALIC } from '../../assets/fonts';
const { width, height } = Dimensions.get('window');

const isPad = Platform.OS === 'ios' && width >= 768;


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: isPad ? height * 0.1 : height * 0.05, // Adjust padding for iPad
  },
  title: {
    fontSize: isPad ? width * 0.05 : width *0.05, // Adjust font size for iPad
    fontWeight: 'bold',
    marginBottom: isPad ? width * 0.06 : width * 0.04, // Adjust margin for iPad
  },
  inputContainer: {
    width: isPad ? width * 0.6 : width * 0.8, // Adjust width for iPad
    marginBottom: isPad ? width * 0.02 : width * 0.03, // Adjust margin for iPad
    position: 'relative',
  },
  input: {
    height: isPad? width*0.4:width*0.12,// Adjust height for iPad
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: isPad ? 12 : 8, // Adjust border radius for iPad
    paddingHorizontal: isPad ? 20 : 16, // Adjust padding for iPad
    marginBottom: isPad ?width*.002 :width*.002, // Adjust margin for iPad
    fontSize:isPad? width*0.03:width*0.04, // Adjust font size for iPad
  },
  inputPad: {
    height: 60,
  },
  checkIcon: {
    position: 'absolute',
    top: isPad ? 15 : 12, // Adjust position for iPad
    right: isPad ? 20 : 16, // Adjust position for iPad
  },
  infoText: {
    color: 'red',
    fontSize:isPad? width * 0.02:width*0.035,// Adjust font size for iPad
  },
  forgotPassword: {
    marginTop: isPad ? 12 : 10, // Adjust margin for iPad
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize:isPad? width * 0.02:width*0.035, // Adjust font size for iPad
  },
  signup: {
    marginTop: isPad ? 24 : 20, // Adjust margin for iPad
  },
  signupText: {
    color: 'blue',
    fontSize:isPad? width * 0.02:width*0.035,// Adjust font size for iPad
    fontWeight: 'bold',
  },
});