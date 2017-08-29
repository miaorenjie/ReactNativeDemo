/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
} from 'react-native';

import {Navigator} from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator'
import Home from '../Js/home'
import Haitao from '../Js/haitao'
import Xiaoshi from '../Js/xiaoshi'
export default class setup extends Component {

    constructor(props){
        super(props);
        this.state={
           selectedTab:'home',
            tabBarHeight:55
        };
    }
    renderItem(title,selectedTab,imgUrl,selectedImgUrl,Component){
        console.log(imgUrl);
        return(
            <TabNavigator.Item
                style={{height:300}}
                selected={this.state.selectedTab === selectedTab}
                title={title}
                 renderIcon={() => <Image source={require('./Img/asd.png')} style={{height:30,width:30} } />}
                 renderSelectedIcon={() => <Image source={require('./Img/qwe.png')} style={{height:30,width:30}} />}
                badgeText="1"
                selectedTitleStyle={{color:'red'}}
                onPress={() => this.setState({ selectedTab: selectedTab})}>
                <Navigator
                     initialRoute={{
                         name:selectedTab,
                         component:Component
                     }}

                     renderScene={(route, navigator) => {
                         let Component = route.component;
                         return <Component {...route.params} navigator={navigator} />
                     }}
                 />
            </TabNavigator.Item>
        )
    }
    // renderItem(title, selectedTab, component) {
    //     return(
    //         <TabNavigator.Item
    //             selected={this.state.selectedTab === selectedTab}
    //             title={title}
    //             selectedTitleStyle={{color:'black'}}
    //             onPress={() => this.setState({ selectedTab: selectedTab })}>
    //             <Navigator
    //                 initialRoute={{
    //                     name:selectedTab,
    //                     component:component
    //                 }}
    //
    //                 renderScene={(route, navigator) => {
    //                     let Component = route.component;
    //                     return <Component {...route.params} navigator={navigator} />
    //                 }}
    //             />
    //         </TabNavigator.Item>
    //     );
    // }

    render() {
        return (
                <TabNavigator tabBarStyle={{height:this.state.tabBarHeight}} sceneStyle={{paddingBottom:this.state.tabBarHeight}}>
                    {this.renderItem("首页","home",'./Img/asd.png','./Img/asd.png',Home)}
                    {this.renderItem("海淘","haitao",'./Img/asd.png','./Img/asd.png',Haitao)}
                    {this.renderItem("小时","xiaoshi",'./Img/asd.png','./Img/asd.png',Xiaoshi)}



                    {/*{this.renderItem("首页","home",Home)}*/}
                    {/*{this.renderItem("海淘","haitao",Haitao)}*/}
                    {/*{this.renderItem("小时","xiaoshi",Xiaoshi)}*/}
                </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabbarIconStyle:{
        height:30,
        width:30
    }
});
