import React,{useState} from 'react';
import {View, Button, Text, TextInput} from 'react-native';

const ToDoList = () => {
    return (
      <View style={{flexDirection:'column',
                    padding: 50,}}>
            <Text style = {{fontSize: 20,
                            alignSelf: 'center',
                            padding: 20}}>
                Unfortunately you've got these to do...
            </Text>
            <View style={{flexDirection: 'column'}} >
                <TaskButton taskname="Call James tmr"/>
                <TaskButton taskname="Go to tim's office hour"/>
                <TaskButton taskname="153 Creative project demo"/>
            </View>
      </View>
    );
  };

const TaskButton = ({taskname}) => {
  const [finish, setFinish] = useState(false);
  return (
    <View>
      <Button
        onPress={() => {
          setFinish(!finish);
        }}
        disabled={finish}
        title={finish ? 'Well Done!' : taskname}
        color='#BBBBF0'
      />
    </View>
  );
};

export default ToDoList;
