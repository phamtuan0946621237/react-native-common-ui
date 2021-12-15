import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { back_black_ic } from '../../../assets'
import { Header } from '../../../components/core'
import { createStyles } from './style'
export default () => {
    const navigation: any = useNavigation()
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
                <View style={[{ alignItems: 'center', padding: 16, marginTop: 16 }, style.header]}>
                    <Text style={{ color: 'rgba(74, 74, 74, 1)', fontSize: 16, fontWeight: '400' }}>Ngừoi nhận</Text>
                    <Image source={{ uri: "https://assets-global.website-files.com/5db63dc519de55e028ef4816/5e786f450014e62b221e31d3_Eimi%20Fukada%20-%201.jpg" }} style={{ width: 64, height: 64, borderRadius: 32, marginTop: 16, marginBottom: 12 }} />
                    <Text style={{ fontSize: 24, lineHeight: 28, fontWeight: 'bold' }}>7 eleven</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', marginTop: 5 }}>7 eleven - Trần Duy Hưng</Text>
                </View>
            </ScrollView>
        </View>
    )
}