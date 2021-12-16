import React, { useCallback, useEffect } from "react"
import { Text, View, TouchableOpacity, Image, useWindowDimensions, ScrollView } from "react-native"
import { Header } from '../../../components/core'
import { useNavigation, useRoute } from "@react-navigation/native"
import { createStyles } from './style'
import { backgroud } from '../../../assets'
export default () => {
    const navigation : any= useNavigation()
    const style = createStyles()
    const { width } = useWindowDimensions()
    const parrams = (useRoute() || {}).params as {token : string}

    console.log("parrams_common_ui :::",parrams)
    const info = [
        { title: 'Tổng dư nợ', value: '128,000,000 VND' },
        { title: 'Dư nợ cần thanh toán', value: '500,000 VND' },
        { title: 'Thanh toán tối thiểu', value: '8,000,000 VND' },
        { title: 'Hạn thanh toán ', value: '20/02/2020' },
        { title: 'Đã trả', value: '690,000 VND' },
    ]
    const _onClickFeature = useCallback((index : number) => {
        if (index ===0) {
            navigation.navigate("QR")
            return 
        }
        if (index ===2) {
            navigation.navigate("ListRepayment")
        }
    },[])

    useEffect(() => {
        console.log("helooo")
        fetch('https://staging-service-customer.fiin.vn/api/v1/user/info', {
          method: 'GET',
          headers: {
            "Accept": 'application/json',
            'Content-Type': 'application/json',
            "platform-type": 'app',
            'Authorization': `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc3RhZ2luZy1zZXJ2aWNlLWN1c3RvbWVyLmZpaW4udm5cL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2Mzk1NTIzODcsImV4cCI6MTY0MDE1NzE4NywibmJmIjoxNjM5NTUyMzg3LCJqdGkiOiJuWWhTS3Q3WVZYTHdmeGN4Iiwic3ViIjo1LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIiwiZGV2aWNlX2lkIjoiNEE1OTYwRjgtQTNFMi00NjlFLTk0NjUtNzIwMTA5NTE0RTY4IiwicGxhdGZvcm1fdHlwZSI6ImFwcCIsInVzZXJfaWQiOjUsImNvZGUiOiJGaWluWF8wMDAwMDUiLCJwaG9uZSI6Iis4NDk3MzEzODA3MiIsIm5hbWUiOiJOZ3V5XHUxZWM1biB0aFx1MWVjYiBsXHUwMGZkIDcyIiwidHlwZSI6ImxvZ2luIn0.1eu8bIJBoPRHY8T6cy5PWn7qxkV8liX_R-7mOGl4pzQ"}`,
            'device-id': "4A5960F8-A3E2-469E-9465-720109514E68"
          },
          mode: 'cors',
        })
          .then(function (response) {
            return response.json();
          })
          .then(function (res) {
            console.log("res :::",res)
          });
      }, [])
      
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
                <Image source={backgroud}
                    // resizeMode="contain"
                    style={{ width: (width - 32), height: 200, borderRadius: 16, backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                />
            </View>

            <View style={{ margin: 16, flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: 'white', borderRadius: 16 }}>
                {["Quét Mã", "QR Của Tôi", "Sao Kê"].map((item: string, index: number) => {
                    return (
                        <TouchableOpacity onPress={() => _onClickFeature(index)} key={index} style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
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

            <TouchableOpacity  style={{ height: 48, backgroundColor: '#8E94F2', width: width - 32, justifyContent: 'center', flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', borderRadius: 16, marginTop: 16 }}>
                <Text style={{ color: 'white', fontSize: 16, lineHeight: 20, fontWeight: '600' }}>Trả nợ tiêu dùng</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}