import { useNavigation } from "@react-navigation/native"
import React, { useState, useCallback } from "react"
import { Text, View, TouchableOpacity, Image, Alert } from "react-native"
import { Header } from '../../../components/core'
import { createStyles } from './style'
import { qr, back_black_ic } from '../../../assets'
// import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default () => {
    const navigation: any = useNavigation()
    const style = createStyles()
    const [indexTab, setIndexTab] = useState<number>(0)
    const _selectTab = useCallback((index: number) => {
        setIndexTab(index)
    }, [])

    const onSuccess = (e: any) => {
        console.log('eee :', e)
        Alert.alert(
            'Thông báo',
            `${JSON.stringify(e)}`,
        )
    };
    return (
        <View style={{ flex: 1 }}>
            <Header
                renderTitle={() => {
                    return <Text style={{ fontWeight: 'bold', lineHeight: 20, textAlign: 'center', fontSize: 16 }}>{"QR"}</Text>
                }}
                style={style.header}
                renderLeft={() => {
                    return (
                        <TouchableOpacity style={{ padding: 16 }} onPress={navigation.goBack}>
                            <Image source={back_black_ic} style={style.icon24} />
                        </TouchableOpacity>
                    );
                }}
            />

            <View style={[{ backgroundColor: 'white', paddingVertical: 16, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center' }, style.header]}>
                {["Mã của tôi", "Quét mã"].map((item: string, index: number) => {
                    return (
                        <TouchableOpacity onPress={() => _selectTab(index)} key={index} style={{ flex: 1, height: 42, backgroundColor: indexTab === index ? '#8E94F2' : 'white', marginHorizontal: 4, justifyContent: 'center', alignItems: 'center', borderRadius: 12, borderWidth: indexTab !== index ? 1 : 0, borderColor: '#8E94F2' }}>
                            <Text style={{ fontSize: 16, color: index === indexTab ? 'white' : '#8E94F2' }}>{item}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>

            {indexTab === 0 ?
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 24, textAlign: 'center' }}>Dùng mã này để thanh toán</Text>
                    <Image source={qr} style={{ alignSelf: 'center', marginTop: 24 }} />
                </View>
                :
                <QRCodeScanner
                    onRead={onSuccess}
                    reactivate={true}
                    reactivateTimeout={8000}
                />
            }
        </View>
    )
}