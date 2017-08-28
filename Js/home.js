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
    Navigator,
    Dimensions
} from 'react-native';

import JumpPage from '../Js/JumpPage'
import ViewPager from 'react-native-viewpager'

var {width,height} = Dimensions.get('window');


export default class Home extends Component {
    constructor(props)
    {
        super(props);
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        const IMPS = [
            'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
            'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
            'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
            'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
            'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
            'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
            'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
        ];
        this.state={
            dataSource:dataSource.cloneWithPages(IMPS)
        };
    }
    _renderPage(data, pageID) {
        console.log("huizhi");
        return (
            <Image source={{uri:data}} style={{width:width}}/>
        );
    }

    _renderPageIndicator(){
        return (<Text>asd</Text>);
    }


    _pressButtoon(){
        const { navigator} = this.props;

            navigator.push({
                name:'JumpPage',
                component:JumpPage,

            })
    }
    render() {
        return (
            <ViewPager
                style={{height:500}}
                dataSource={this.state.dataSource}
                renderPage={this._renderPage}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    }
});
