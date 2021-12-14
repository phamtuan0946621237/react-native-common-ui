/*
 * Created by duydatpham@gmail.com on 29/6/2020
 * Copyright © 2020 duydatpham@gmail.com
 */
import React from 'react'
import HTMLView from 'react-native-htmlview'
import { View, StyleSheet, Dimensions ,Image} from 'react-native'
import WebView from 'react-native-webview';
// import FastImage from 'react-native-fast-image';
import Lightbox from 'react-native-lightbox'

const { width } = Dimensions.get('window')

const WIDTH_IMAGE = width - 24;
const HEIGHT_IMAGE = ((width - 24)) * 3 / 4;

const renderNode = (node, index, siblings, parent, defaultRenderer) => {
    if (node.name == 'iframe') {
        const a = node.attribs;
        let url = a.src//htmlVideo(a.src)

        return (
            <View key={index} style={{
                width: width - (Platform.OS == 'android' ? 28 : 24),
                height: (width) * 9 / 16, marginTop: 4
            }}>
                <WebView
                    ref={this.webviewRef}
                    style={styles.WebViewContainer}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: url }}
                    scrollEnabled={false}
                    startInLoadingState
                    cacheEnabled={false}
                    cookiesEnabled={false}
                    useWebKit={true}
                />
            </View>
        );
    }

    if (node.name == 'img') {
        const b = node.attribs;
        return (
            <Lightbox
                underlayColor='transparent'
                key={index}>
                <Image
                    style={{
                        width: WIDTH_IMAGE,
                        height: HEIGHT_IMAGE
                    }}
                    source={{ uri: b.src }}
                    resizeMode='contain'
                />
            </Lightbox>
        );
    }

}

export default props => {
    return (
        <HTMLView
            value={props.value || ''}
            renderNode={renderNode}
            stylesheet={styleHTML}
            paragraphBreak=''
            nameTagCustom={['iframe', 'img']}
            RootComponent={element => <View {...element} />}
        />
    )
}


const styleHTML = StyleSheet.create({
    p: {
        margin: 2,
        padding: 2,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        color: "#000000",
        // marginHorizontal: 12
    },
    ul: {
        margin: 2,
        padding: 2,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        color: "#000000",
        // marginHorizontal: 12
    },
    strong: {
        fontWeight: 'bold'
    },
    em: {
        textDecorationLine: 'underline'
    }
});