import React, {useState} from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDoList from './ToDoList';
import NoteTaker from './NoteTaker';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
     <View style={{ flexDirection:'column'}}>
            <View style={{flexDirection: 'row',
                          justifyContent:'space-evenly'}}>
              <Button
                title= "ToDoList"
                onPress = {()=>
                navigation.navigate('ToDoList')
                }
              />
              <Button
                title= "NoteTaker"
                onPress = {()=>
                navigation.navigate('NoteTaker')
                }
              />
            </View>
            <View style={{alignSelf: 'center',
                          flexDirection: 'row',
                          marginTop: 30}}>
              <Text style={{fontSize: 20,
                            marginTop: 20}} >
                  　／l、 <br/> 
                  （ﾟ､ 。 ７ <br/> 
                   　l、 ~ヽ <br/> 
                  　じしf_, )ノ<br/> 
              </Text>
              <CatFoodButton />
            </View>
      </View>
    );
  };

const CatFoodButton = () => {
  const [catFood, setCatFood] = useState(5);
  return (
    <View style={{alignContent: 'center',
                  margin: 20}}>
      <Text>
        {catFood} catfood left.
      </Text>
      <Button
        onPress={() => {
          setCatFood(catFood-1);
        }}
        disabled={catFood == 0}
        title={'Feed Me Mooooooore!!'}
        color='#BBBBF0'
      />
     </View>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{title: 'HAve a nice day :)'}}
        />
        <Stack.Screen name="ToDoList" component ={ToDoList} />
        <Stack.Screen name="NoteTaker" component ={NoteTaker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
