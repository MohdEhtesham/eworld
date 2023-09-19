import {Dimensions, StyleSheet} from 'react-native';
import {ROBOTO_MEDIUM} from '../../assets/fonts';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '10%',
    width: width * 0.74,
  },
  heading: {
    fontFamily: ROBOTO_MEDIUM,
    fontSize: 25,
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
