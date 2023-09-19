// styles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.1,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginBottom: height * 0.05,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: width * 0.08,
  },
  otpDigit: {
    width: width * 0.1,
    height: width * 0.1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: width * 0.02,
    borderRadius: width * 0.01,
    fontSize: width * 0.06,
    textAlign: 'center',
    marginHorizontal: width * 0.02,
  },
});
