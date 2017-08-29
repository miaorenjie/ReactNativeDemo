import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    ListView,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

// export default class Xiaoshi extends Component {
//     // 初始化模拟数据
//     constructor(props) {
//         super(props);
//         const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//         this.state = {
//             dataSource: ds.cloneWithRows([
//                 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//             ])
//         };
//     }
//     render() {
//         return (
//             <View style={{paddingTop: 22}}>
//                 <ListView
//                     dataSource={this.state.dataSource}
//                     renderRow={(rowData) => <Text>{rowData}</Text>}
//                 />
//             </View>
//         );
//     }
// }
export default class Xiaoshi extends Component {
    constructor(props) {
        super(props);
        var list=new Array();
        for(var i=0;i<10;i++)
        {
            person=new Object();
            person.name="asd";
            person.age=i*100;
            list.push(person);
        }
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: dataSource.cloneWithRows(list),

        }
    }

    _renderSeperator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (

            <View
                style={{
                    height: 4,
                    backgroundColor: 'red',
                }}
            />
        );
    }
    _renderRow(rowData,sectionId,rowID){
        return(
            <TouchableOpacity>
                <Text style={{fontSize:60,borderWidth:1,borderColor:'black'}}>
                    {rowData.age}
                </Text>
            </TouchableOpacity>

        )
    }

    changeListViewData(){
        var list=new Array();
        for(var i=0;i<10;i++)
        {
            person=new Object();
            person.name="asd";
            person.age=i*10;
            list.push(person);
        }
        console.log(this);
        this.setState({
           dataSource:this.state.dataSource.cloneWithRows(list)
       })
    }
    render() {
        return (

            <View style={{paddingBottom:55}}>
                <Text onPress={this.changeListViewData.bind(this)} style={{fontSize:50}}> asd </Text>

                <ListView dataSource={this.state.dataSource}
                          renderRow={this._renderRow}
                          renderSeparator={this._renderSeperator}
                          horizontal={false}
                >
                </ListView>
            </View>




        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    }
});