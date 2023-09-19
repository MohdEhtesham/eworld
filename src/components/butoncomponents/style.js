import {StyleSheet, Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
 
  btn: {
    backgroundColor: 'blue',
    padding: width * 0.04,
    borderRadius: width * 0.02,
    width: width * 0.8,
  },
  txt: {
    color: 'white',
    fontSize: width * 0.05,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
