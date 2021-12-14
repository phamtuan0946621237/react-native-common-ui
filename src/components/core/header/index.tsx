/**
 * Created by duydatpham@gmail.com on Tue Oct 23 2018
 * Copyright (c) 2018 duydatpham@gmail.com
 */
import React, { PureComponent } from 'react';
import { StatusBar, Dimensions,View, Text, ViewStyle, TextStyle,TouchableOpacity,Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { HeaderSize } from '../../../util';
const dimen = Dimensions.get('window');
export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926)
  );
}
export const HeaderSize = {
  height:
    Platform.OS === 'ios'
      ? isIphoneX()
        ? 94
        : 74
      : 54 + StatusBar.currentHeight || 0,
  paddingTop:
    (isIphoneX() ? 40 : Platform.OS === 'ios' ? 20 : StatusBar.currentHeight) ||
    0,
};

export const TabBarSize = {
  height: 60,
  paddingBottom: isIphoneX() ? 24 : 0,
};

interface ActionProps {
  title?: string;
  onPress?: () => void;
  titleStyle?: TextStyle;
  iconName?: string;
  style?: TextStyle;
  render?: () => {};
}

interface HeaderProps {
  hasShadow?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  renderLeft?: () => {};
  renderTitle?: () => {};
  renderRight?: () => {};
  left?: ActionProps;
  right?: ActionProps;
  title?: string;
}

export default (props: HeaderProps) => {
  const { hasShadow, style, left, right, titleStyle, title, renderTitle } = props;
  let header = (
    <>
      <StatusBar
        animated={true}
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor="transparent"
      />
      <View
        style={[
          {
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            alignItems: 'center',
            paddingTop: HeaderSize.paddingTop,
            height: HeaderSize.height,
            flexDirection: 'row',
            width: '100%',
          },
          style,
          hasShadow
            ? {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 9999,
              backgroundColor: 'white',
              shadowColor: 'rgba(0, 0, 0, 0.08)',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowRadius: 8,
              shadowOpacity: 1,
              elevation: 4,
            }
            : {},
        ]}>
        <View style={{ flex: 1 }}>
          {props.renderLeft ? (
            props.renderLeft()
          ) : !!left ? (
            <TouchableOpacity
              onPress={left.onPress}
              style={{
                height: '100%',
                paddingHorizontal: 16,
                justifyContent: 'center',
              }}>
              {!!left.title && (
                <Text style={left.titleStyle}>{left.title || ''}</Text>
              ) }
            </TouchableOpacity>
          ) : undefined}
        </View>
        {!!renderTitle && !!!title && (
          <View style={{ flex: 3, alignItems: 'center' }}>{renderTitle()}</View>
        )}
        {!!title && !!!renderTitle && (
          <View style={{ flex: 2, alignItems: 'center' }}>
            <Text
              style={[
                {
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  letterSpacing: 0,
                  textAlign: 'center',
                  color: '#34324c',
                  lineHeight: 22
                },
                titleStyle,
              ]}
              numberOfLines={1}>
              {title}
            </Text>
          </View>
        )}
        <View style={{ flex: 1 }}>
          {props.renderRight ? (
            props.renderRight()
          ) : !!right ? (
            <TouchableOpacity
              onPress={right.onPress}
              style={{
                height: '100%',
                paddingHorizontal: 16,
                justifyContent: 'center',
              }}>
              {!!right.render ? (
                right.render()
              ) : !!right.title && (
                <Text
                  style={
                    right.titleStyle || {
                      fontSize: 18,
                      fontWeight: '500',
                      fontStyle: 'normal',
                      letterSpacing: 0,
                      textAlign: 'center',
                      color: 'black',
                    }
                  }>
                  {right.title || ''}
                </Text>
              ) }
            </TouchableOpacity>
          ) : undefined}
        </View>
      </View>
    </>
  );
  return header;
};
