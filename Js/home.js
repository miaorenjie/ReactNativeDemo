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

import JumpPage from '../Js/JumpPage'
export default class Home extends Component {


    _pressButtoon(){
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'JumpPage',
                component:JumpPage,
            })
        }
    }
    render() {
        return (
         <View style={styles.container}>
             <Text onPress={()=>{
                 const { navigator} = this.props;
                 if (navigator) {
                     navigator.push({
                         name:'JumpPage',
                         component:JumpPage,
                     })
                 }
             }}>asd</Text>
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
