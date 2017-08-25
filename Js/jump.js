import React, { Component } from 'react';

import {Navigator} from 'react-native-deprecated-custom-components'
import Setup from '../Js/setup'
export default class Jump extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{
                    name:'Setup',
                    component:Setup
                }}

                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );
    }
}