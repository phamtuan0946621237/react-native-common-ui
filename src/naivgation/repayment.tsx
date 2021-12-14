import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { memo } from 'react';
import InfoRepayment from '../screen/repayment/info_repayment';
import ListRepayment from '../screen/repayment/list_repayment';

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
                <Stack.Screen name="InfoRepayment" component={InfoRepayment} options={{ title: 'InfoRepayment' }} />
                <Stack.Screen name="ListRepayment" component={ListRepayment} options={{ title: 'ListRepayment' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
})