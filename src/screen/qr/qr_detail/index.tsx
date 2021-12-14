import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { back_black_ic } from '../../../assets'
import { Header } from '../../../components/core'
import { createStyles } from './style'
export default () => {
    const navigation : any= useNavigation()
    const style = createStyles()
    
    return (
        <View style={{ flex: 1 }}>
            <Header
                renderLeft={() => {
                    return (
                        <TouchableOpacity style={{ padding: 16 }} onPress={navigation.goBack}>
                            <Image source={back_black_ic} style={style.icon24} />
                        </TouchableOpacity>
                    );
                }}
                renderTitle={() => {
                    return <Text style={{ fontWeight: 'bold', lineHeight: 20, textAlign: 'center', fontSize: 16 }}>{"Nhập số tiền thanh toán"}</Text>
                }}
                style={style.header}
            />
            <ScrollView>
            
            </ScrollView>
        </View>
    )
}