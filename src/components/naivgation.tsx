import React, { memo } from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ButtonView () {
    return (
        <Text>ButtonView</Text>
    )
}
const Stack = createStackNavigator<any>();
export default memo(() => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={
                    "ButtonView"
                }>
                <Stack.Screen name="ButtonView" component={ButtonView} options={{ title: 'Intro' }} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
})