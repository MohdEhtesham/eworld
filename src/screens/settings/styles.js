import {StyleSheet} from 'react-native';
import {ROBOTO_REGULAR} from '../../assets/fonts';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(8),
    alignItems: 'center',
    marginBottom: responsiveHeight(6),
    justifyContent:'space-evenly', 
  },
  profileLogo: {
    height: responsiveWidth(22),
    width: responsiveWidth(22),
    borderWidth: 1,
    borderRadius: responsiveWidth(11),
   marginLeft:responsiveWidth(4)
  },
  name: {
    fontSize: responsiveFontSize(2.4),
    fontFamily: ROBOTO_REGULAR,
    color: '#000000',
    fontWeight: '600',
    marginBottom:responsiveHeight(0.5)
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: responsiveWidth(.1),
    height: responsiveHeight(8),
    alignItems: 'center',
  },
  icon: {
    height: responsiveWidth(6),
    width:responsiveWidth(6),
    marginHorizontal: responsiveWidth(5),
  },
 pen:{
  height: responsiveWidth(8),
    width:responsiveWidth(8),
   marginRight:responsiveWidth(4)
 }, 
 info:{
  flexDirection: 'row', 
  flexWrap: 'wrap'
 }, 
 namecontainer:{
  width: responsiveWidth(60),
   marginLeft: responsiveWidth(5)
 }
});
