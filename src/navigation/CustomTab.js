import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Logopath} from '../assets/images';
import { verticalScale } from '../components/responsive';

// const CustomTab = (props) => {
const   CustomTab = ({state, descriptors, navigation}) => {
  // console.log("hello  ==>", props)

  return (
    <View
      style={{
        flexDirection: 'row',
        height: verticalScale(70),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {
        // props.state.routes.map((item, i) => {
        state.routes.map((item, i) => {
          const {options} = descriptors[item.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : item.name;

          const isFocused = state.index === i;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: item.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: item.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: item.key,
            });
          };
          return (
          
              <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onLongPress={onLongPress}
              style={{
                width: '33%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.navigate(item.name);
              }}>
              {i == 0 ? (
                isFocused ? (
                  <Image source={Logopath.Homeactive} />
                ) : (
                  <Image source={Logopath.Homeicon} />
                )
              ) : i == 1 ? (
                isFocused ? (
                  <Image source={Logopath.Feedbackicon} />
                ) : (
                  <Image source={Logopath.Feedbackicons} />
                )
              ) : i == 2 ? (
                isFocused ? (
                  <FontAwesome name="gear" size={30} color="#7E50EE" />
                ) : (
                  <FontAwesome name="gear" size={30} />
                )
              ) : null}
              <Text style={{color: isFocused ? '#7E50EE' : '#222'}}>
                {item.name}
              </Text>
              {/* {
                        <FontAwesome name={i === 0 ? "home" : i === 1 ? "" : "home"} size={30} />

                        i === 0 ?
                            <FontAwesome name="home" size={30} />
                            : i === 1 ?
                            <FontAwesome name="rocket" size={30} />
                            :
                            <FontAwesome name="rocket" size={30} />
                        } */}
            </TouchableOpacity>
          
            
            
          );
        })
      }
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({});

