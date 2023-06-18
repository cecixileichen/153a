import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const TextInputer = () => {
    const [text, setText] = useState('');
    return (
      <View style={{marginTop: 20}}>
        <TextInput
          editable
          multiline
          style={{height: 1000}}
          placeholder="If you have any thoughts...🤔"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
      </View>
    );
  };

export default TextInputer;