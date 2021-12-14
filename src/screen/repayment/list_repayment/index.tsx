/*
 * Created by duydatpham@gmail.com on 19/07/2021
 * Copyright (c) 2021 duydatpham@gmail.com
 */

import React from 'react';
import { Text, View, Image, useWindowDimensions, ScrollView ,TouchableOpacity} from 'react-native'
import { Header } from '../../../components/core';
import { back_black_ic } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { createStyles } from './style'
declare const window: { confirm: (p1: any) => void | null };
export default () => {
  const navigation = useNavigation()
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
    <View style={{
      flex: 1
    }} >
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
      <ScrollView>
        <View style={{ backgroundColor: 'white', marginTop: 12 }}>
          {info.map((item, index: number) => {
            return (
              <View key={index} style={{ paddingVertical: 16, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, marginHorizontal: 16, borderColor: "#DEE2E6" }}>
                <Text>{item?.title}</Text>
                <Text style={{ flex: 1, textAlign: 'right', fontWeight: '600' }}>{item?.value}</Text>
              </View>
            )
          })}
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginHorizontal: 16, marginTop: 32 }}>Danh sách TD (12)</Text>
        {[1, 2, 3].map((item : any,index : number) => {
          return (
            <View key={index} style={{ flexDirection: 'row', flex: 1, padding: 16, marginHorizontal: 16, backgroundColor: 'white', marginTop: 16, borderRadius: 16 }}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHtXJryG4rPY3zYTbflDjg6JlFaFgzr9AZA&usqp=CAU' }} style={{ width: 48, height: 48, resizeMode: 'cover', borderRadius: 24 }} />
              <View style={{ marginLeft: 16, justifyContent: 'space-around', flex: 1 }}>
                <Text style={{ fontSize: 16 }}>Tiêu dùng tại Tiki</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: 'rgba(171, 164, 172, 1)' }}>20/02/2020</Text>
                  <Text style={{ color: 'rgba(235, 87, 87, 1)', fontSize: 16, fontWeight: '500' }}>986,000 VND</Text>
                </View>
              </View>
            </View>
          )
        })}

        <TouchableOpacity style={{ height: 48, backgroundColor: '#8E94F2', width: width - 32, justifyContent: 'center', flexDirection: 'row', marginHorizontal: 16, alignItems: 'center', borderRadius: 16, marginTop: 16 }}>
          <Text style={{ color: 'white', fontSize: 16, lineHeight: 20, fontWeight: '600' }}>Trả nợ tiêu dùng</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
