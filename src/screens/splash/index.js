import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { Logopath } from '../../assets/images';
import { Routes } from '../../navigation/Routes';


const {height,width}=Dimensions.get("window")
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Routes.Login);
    }, 4000);
  }, []);

  return (
    <View >
      <Image
        source={Logopath.LOGO} // Replace with the path to your splash screen image
        style={styles.image}
        // resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  
  image: {
    width: width*1, // Adjust the width as needed
    height: height*1, // Adjust the height as needed
  },
});

export default Splash;
