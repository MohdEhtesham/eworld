import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const CustomHeader = ({children}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>{children}</View>
    </View>
  );
};
export default CustomHeader;
