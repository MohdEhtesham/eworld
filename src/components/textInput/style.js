import {StyleSheet,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
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
});
