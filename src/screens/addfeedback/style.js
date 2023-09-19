import {Dimensions, StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {ROBOTO_LIGHT, ROBOTO_MEDIUM} from '../../assets/fonts';
const {width, height} = Dimensions.get('window');
import {verticalScale} from '../../components/responsive';

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
    fontSize: 22,
    position: 'relative',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  txthead: {
    fontFamily: ROBOTO_MEDIUM,
    fontSize: 16,
    marginLeft: '10%',
    marginVertical: verticalScale(10),
  },
  txt: {
    marginLeft: '10%',
    fontFamily: ROBOTO_MEDIUM,
    opacity: 0.7,
    fontSize: 15,
  },

  imgdirection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: verticalScale(150),
    width: '100%',
  },
  input: {
    height: verticalScale(200),
    width: '90%',
    borderWidth: 1,
    // marginTop: '6%',
    borderRadius: 8,
    alignSelf: 'center',
    textAlignVertical: 'top',
    // padding: 10,
  },
  btn: {
    marginTop: verticalScale(25),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: verticalScale(400),
    width: '90%',
    borderRadius: 20,
    shadowOffset: {width: -2, height: 4},
    shadowColor: '#171717',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontFamily: ROBOTO_MEDIUM,
    fontSize: 25,
    margin: 10,
    alignSelf: 'center',
  },
  modalTex: {
    fontSize: ROBOTO_LIGHT,
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnhome: {
    position: 'absolute',
    top: 0,
  },
  img: {
    height: 200,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imgemoji: {
    height: 80,
    width: 80,
  },
  checkbox: {
    flexDirection: 'row',
    alignContent: 'center',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '5%',
  },
});
