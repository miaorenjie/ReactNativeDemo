import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ScrollableTabView , {DefaultTabBar,ScrollableTabBar } from 'react-native-scrollable-tab-view'
export default class Haitao extends Component {


    render() {
        return (
            <ScrollableTabView
                style={styles.container}
                renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
                tabBarPosition='overlayTop'
            >
                <ScrollView tabLabel='iOS'>
                    <Icon name='logo-apple' color='black' size={300} style={styles.icon} />
                    <Icon name='ios-phone-portrait' color='black' size={300} style={styles.icon} />
                    <Icon name='logo-apple' color='#DBDDDE' size={300} style={styles.icon} />
                    <Icon name='ios-phone-portrait' color='#DBDDDE' size={300} style={styles.icon} />
                </ScrollView>
                <ScrollView tabLabel='Android'>
                    <Icon name='logo-android' color='#A4C639' size={300} style={styles.icon} />
                    <Icon name='logo-android' color='black' size={300} style={styles.icon} />
                    <Icon name='logo-android' color='brown' size={300} style={styles.icon} />
                </ScrollView>
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingBottom:55
    },
    icon: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});