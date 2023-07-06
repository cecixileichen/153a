import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TextInputer from './TextInputer';

const NoteTaker = () => {
    const [change,setChange] = useState(0)
    return (
      <View style={{flexDirection:'column',
                    padding: 30}}>
            <View>
            </View>
            <Text style = {{fontSize: 20,
                            alignSelf: 'center',}}>
                Feel free to write anything :)
            </Text>
            <View>
                <TextInputer />
            </View>
      </View>
    )
  }

export default NoteTaker;