/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';
export default class JumpPage extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>跳转页面</Text>
                <Image source={require('./Img/asd.png')} resizeMode="contain"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    }
});
