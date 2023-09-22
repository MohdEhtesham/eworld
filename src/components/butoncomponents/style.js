import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const isPad = Platform.OS === 'ios' && (width >= 768 || height >= 768);

export default StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    paddingVertical: isPad ? height * 0.015 : height * 0.02, // Adjust vertical padding
    paddingHorizontal: isPad ? width * 0.04 : width * 0.03, // Adjust horizontal padding
    borderRadius: isPad ? width * 0.015 : width * 0.015, // Adjust border radius
    width: isPad ? width * 0.6 : width * 0.8, // Adjust width
    justifyContent: 'center', // Center the button content vertically
  },
  txt: {
    color: 'white',
    fontSize: isPad ? width * 0.035 : width * 0.045, // Adjust font size
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
