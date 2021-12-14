import React from "react"
import { Text, View, TouchableOpacity, Image, useWindowDimensions, ScrollView } from "react-native"
import { Header } from '../../../components/core'
import { useNavigation } from "@react-navigation/native"
import { createStyles } from './style'
// import { back_black_ic } from '../../../assets'
export default () => {
    const navigation : any= useNavigation()
    const style = createStyles()
    const { width } = useWindowDimensions()
    const info = [
        { title: 'Tổng dư nợ', value: '128,000,000 VND' },
        { title: 'Dư nợ cần thanh toán', value: '500,000 VND' },
        { title: 'Thanh toán tối thiểu', value: '8,000,000 VND' },
        { title: 'Hạn thanh toán ', value: '20/02/2020' },
        { title: 'Đã trả', value: '690,000 VND' },
    ]
    return (
        <View style={{ flex: 1 }}>
            <Header
                // renderLeft={() => {
                //     return (
                //         <TouchableOpacity style={{ padding: 16 }} onPress={navigation.goBack}>
                //             <Image source={back_black_ic} style={style.icon24} />
                //         </TouchableOpacity>
                //     );
                // }}
                renderTitle={() => {
                    return <Text style={{ fontWeight: 'bold', lineHeight: 20, textAlign: 'center', fontSize: 16 }}>{"Ứng tiền tiêu dùng"}</Text>
                }}
                style={style.header}
            />
            <ScrollView>
            <View style={{ marginHorizontal: 16, borderRadius: 16, width: (width - 32), height: 200, marginTop: 16 }}>
                <Image source={{ uri: 'https://hinhgaixinh.com/wp-content/uploads/2021/03/hinh-gai-xinh-835x436.jpg' }}
                    // resizeMode="contain"
                    style={{ width: (width - 32), height: 200, borderRadius: 16, backgroundColor: 'red', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                />
            </View>

            <View style={{ margin: 16, flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderRadius: 16 }}>
                {["Quét Mã", "QR Của Tôi", "Sao Kê"].map((item: string, index: number) => {
                    return (
                        <TouchableOpacity key={index} style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Image source={{ uri: 'http://static.sangtacviet.com/img/useravatar/user23690.jpeg' }} style={{ width: 48, height: 48, borderRadius: 8 }} />
                            <Text style={{ textAlign: 'center', fontSize: 12, marginTop: 8 }}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>

            <View style={{ backgroundColor: 'white' }}>
                {info.map((item, index: number) => {
                    return (
                        <View key={index} style={{ paddingVertical: 16, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, marginHorizontal: 16, borderColor: "#DEE2E6" }}>
                            <Text>{item?.title}</Text>
                            <Text style={{ flex: 1, textAlign: 'right', fontWeight: '600' }}>{item?.value}</Text>
                        </View>
                    )
                })}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("ListRepayment")} style={{ height: 48, backgroundColor: '#8E94F2', width: width - 32, justifyContent: 'center', flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', borderRadius: 16, marginTop: 16 }}>
                <Text style={{ color: 'white', fontSize: 16, lineHeight: 20, fontWeight: '600' }}>Trả nợ tiêu dùng</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}