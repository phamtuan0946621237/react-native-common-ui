import React, { memo } from 'react'
import { Text,View } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InfoRepayment from '../screen/repayment/info_repayment'
import ListRepayment from '../screen/repayment/list_repayment'
const Stack = createStackNavigator<any>();
export default memo(() => {
    return (
        <NavigationContainer>   
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={
                    "InfoRepayment"
                }>
                <Stack.Screen name="InfoRepayment" component={InfoRepayment} options={{ title: 'Intro' }} />
                <Stack.Screen name="ListRepayment" component={ListRepayment} options={{ title: 'Intro' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
})