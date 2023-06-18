import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';
import TaskButton from './TaskButton';

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

export default ToDoList;
