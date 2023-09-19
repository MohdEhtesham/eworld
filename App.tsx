import {View, Text} from 'react-native';
import React from 'react';
import StackNavigator from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (

      <NavigationContainer>
        <View style={{flex: 1}}>
          <StackNavigator />
        </View>
      </NavigationContainer>

  );
};

export default App;