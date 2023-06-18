import React,{useState} from 'react';
import {View, Button, Text} from 'react-native';

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

export default TaskButton