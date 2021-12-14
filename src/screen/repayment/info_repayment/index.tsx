import React from "react"
import { Text, View, TouchableOpacity, Image } from "react-native"
import { Header } from '../../../components/core'
import { useNavigation } from "@react-navigation/native"
import { createStyles } from './style'
import { back_black_ic } from '../../../assets'
export default () => {
    const navigation = useNavigation()
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
                    return <Text style={{ fontWeight: 'bold', lineHeight: 20, textAlign: 'center', fontSize: 16 }}>{"Ứng tiền tiêu dùng"}</Text>
                }}
                style={style.header}
            />
        </View>
    )
}