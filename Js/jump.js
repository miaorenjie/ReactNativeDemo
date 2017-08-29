import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components'
import Setup from '../Js/setup'
export default class Jump extends Component {
    render() {
        return (
           <View>
               <Setup/>
           </View>
        );
    }
}