import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';

const NoteTaker = () => {
    const [change,setChange] = useState(0)
    return (
      <View style={{flexDirection:'column',
                    padding: 50,}}>
            <View>
            </View>
            <Text style = {{fontSize: 20,
                            alignSelf: 'center',
                            padding: 20}}>
                Write anything if you have any thoughts... 🤔
            </Text>
            <View>
              <InputArea />
            </View>
      </View>
      
    )
  }

  function InputArea() {
  return (
    <textarea
        name="InputArea"
        rows={40}
        cols={40}
        padding={20}
    />
  );
}

export default NoteTaker;