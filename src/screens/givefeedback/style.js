import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../components/responsive'

export default StyleSheet.create({
  BannerImage: {
    height: verticalScale(200),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    margin: '2%',
    resizeMode: 'cover',
    width: '96%', 
    alignSelf: 'center',
  },
  formate: {
    height: verticalScale(200),
    width: '95%',
    alignSelf: 'flex-end',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: '6%',
    borderWidth: 0.3,
    justifyContent: 'center',
    borderColor: '#797979',
  },
   icons:{
    marginLeft:horizontalScale(15), 
    marginTop:verticalScale(10)
   }
});
