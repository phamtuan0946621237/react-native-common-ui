import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, View } from "react-native"
import { Header } from '../../../components/core'
import { createStyles } from './style'
export default () => {
    const navigation : any= useNavigation()
    const style = createStyles()
    
    return (
        <View style={{ flex: 1 }}>
            <Header
                renderTitle={() => {
                    return <Text style={{ fontWeight: 'bold', lineHeight: 20, textAlign: 'center', fontSize: 16 }}>{"QR"}</Text>
                }}
                style={style.header}
            />

                <View style={{flex : 1,justifyContent : 'center',alignItems : 'center'}}>
                    <Text onPress={()=> navigation.navigate("QRDetail")}>Go to Detail</Text>
                </View>
            
        </View>
    )
}