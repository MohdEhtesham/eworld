import {StyleSheet, Dimensions} from 'react-native';
import {ROBOTO_BLACK, ROBOTO_LIGHT, ROBOTO_MEDIUM} from '../../assets/fonts';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { horizontalScale, moderateScale, verticalScale } from '../../components/responsive';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: responsiveHeight(22),
    width: responsiveWidth(100),
    backgroundColor: '#7E50EE',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(10),
    width: responsiveWidth(55),
    marginLeft:responsiveWidth(4)
  },
  heading: {
    fontSize: responsiveFontSize(3),
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  container: {
   top:verticalScale(-30),
    backgroundColor: 'white',
    width: '95%',
    alignSelf: 'center', 
    flexDirection: 'row',
    justifyContent: 'center',
     alignItems:'center', 
     shadowOffset: {width: -2, height: 4},
     shadowColor: '#171717',
     shadowOpacity: 0.2,
     shadowRadius: 3,
     flexDirection: 'row',
     justifyContent: 'center',
     borderRadius: 20,
     padding:verticalScale(16)
 
  
},

    subhead: {
      width: '90%',
      alignSelf: 'center',
      fontWeight: '600',
      fontSize: 16,
    
  },
  flat: {
    backgroundColor: 'white',
    padding: 16,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: 16,
    height:verticalScale(150)
   
  
  
},
 
  recently: {
    fontFamily: ROBOTO_LIGHT,
    fontSize:responsiveFontSize(2.5),
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  listitem:{
    flex: 1, 
    marginTop: responsiveHeight(2),
  },

  modalView: {
    marginTop:verticalScale(150),
    backgroundColor: 'white',
    borderRadius: 20,
    height:verticalScale(400),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(2),
    shadowOffset: {width: responsiveWidth(-2), height: responsiveHeight(5)},
    shadowColor: '#171717',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
   
  },
  modalText: {
    fontFamily: ROBOTO_MEDIUM,
    fontSize:responsiveFontSize(2.5),
    margin: responsiveHeight(2),
    alignSelf: 'center',
  },
  modalTex: {
    fontSize: ROBOTO_LIGHT,
    fontSize:responsiveFontSize(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  img: {
    height:responsiveHeight(10),
    width:responsiveHeight(10),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
