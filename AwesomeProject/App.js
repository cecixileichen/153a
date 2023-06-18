import React from 'react';
import {View,Text} from 'react-native';
import MyStack from './components/StackDemo';

const App = () => {
    return (
        <View style={{flex:1}}>
            <Text style={{textAlign:'center',
                         fontSize:30,
                         marginTop:50}}>
                cat simulater ^^ Meow~
            </Text>
            <MyStack/>
        </View>

    )
}
export default App
