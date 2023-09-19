import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default function Home({navigation})  {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    navigation.navigate('Details', {
                        userId: 1,
                        userName: 'Awesome User',
                    });
                }
                }
            />
        </View>
    );
}