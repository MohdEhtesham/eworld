import {StyleSheet} from 'react-native';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import {ROBOTO_MEDIUM, ROBOTO_REGULAR} from '../../assets/fonts';

export default StyleSheet.create({
  title: {
    fontSize: responsiveFontSize(3),
    color: '#000000',
    fontFamily: ROBOTO_MEDIUM,
    textAlign: 'center',
  },
  contentTxt: {
    fontSize:responsiveFontSize(2),
    color: '#797979',
    fontFamily: ROBOTO_REGULAR,
    textAlign: 'center',
    marginHorizontal: responsiveWidth(15),
    marginVertical: responsiveWidth(5),
  },
});
