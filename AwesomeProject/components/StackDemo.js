import React, {useEffect, useState} from 'react';
import {Button,Text,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ToDoList from './ToDoList';
import NoteTaker from './NoteTaker';
import CatFoodButton from './CatFoodButton';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    const [catFood, setCatFood] = useState(4);
    const updateCatFood = (val) => {
      setCatFood(val)
    }

    const getCount = async () => {
      try{
          const jsonValue = await AsyncStorage.getItem('counter')
          if (jsonValue==null){
              setCatFood(4)
          } else {
              const num = JSON.parse(jsonValue);
              setCatFood(num);
          }
      } catch (e) {
          console.log('error in getData ')
          console.dir(e)
      }
    }

    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('counter', jsonValue)
      } catch (e) {
        console.log("error in storeData ")
        console.dir(e)
      }
    }

    useEffect(() => {getCount()}, [])

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
              <View style={{fontSize: 20,
                            marginTop: 20}} >
                  <Text>   ／l、</Text>
                  <Text>（ﾟ､ 。 ７</Text> 
                  <Text>   l、 ~ヽ</Text>
                  <Text>   じしf_, )ノ</Text>
              </View>
              <CatFoodButton catFood={catFood}
                             updateCatFood={updateCatFood}
                             storeData={storeData}/>
            </View>
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
