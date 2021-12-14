import React, { memo } from 'react'
import { Text,View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Screen1 () {
    const navigation : any= useNavigation()
    return (
        <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
        <Text onPress={() => navigation.navigate("Screen2")}>Go to Screen2</Text>
        </View>
    )
}

function Screen2 () {
    const navigation : any= useNavigation()
    return (
        <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
        <Text onPress={() => navigation.navigate("Screen1")}>go to screen1</Text>
        </View>
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
                    "Screen1"
                }>
                <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Intro' }} />
                <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Intro' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
})