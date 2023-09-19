import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Logopath} from '../../assets/images';
import {ROBOTO_MEDIUM} from '../../assets/fonts';

export default function Homeindex() {
  return (
    <View>
      <Image source={Logopath.Homeimage} style={styles.img} />
      <TouchableOpacity>
        <Text style={styles.txt}>Search here to provide feedback</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    marginTop: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  txt: {
    justifyContent: 'center',
    fontFamily: ROBOTO_MEDIUM,
    fontSize: 16,
    alignSelf: 'center',
  },
});
