import React, { useState, useEffect, useContext } from "react";
import {View, StyleSheet, Text, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NameTag from "./NameTag";
import Bubble from "./DialogBubble";
import Cat from "./Cat";
import CatFoodBowl from "./CatFoodBowl";
import NavigateButton from "./NavigateButton";
import DeadCat from "./DeadCat";
import profileContext from "./profileContext";
import TodoListScreen from "./ToDoList";
import FocusClock from "./FocusClock";

const Stack = createNativeStackNavigator();

const CatSimulator = ({navigation}) => {
    const [hungry, setHungry] = useState(3);
    const [debugging] = useState(false);
    const [alive, setAlive] = useState(true);
    const {profile, setProfile} = useContext(profileContext);

    const updateCatFood = (val) => {
        setProfile({catFood: profile.catFood+val})
        storeCatFood(profile.catFood + val)
    }

    const getCatFood = async () => {
        try{
            const jsonValue = await AsyncStorage.getItem('CatFood')
            if (jsonValue==null){
                setProfile({catFood: 5,
                            name: 'James',
                            age: 235})
            } else {
                const num = JSON.parse(jsonValue);
                setProfile({catFood: num,
                            name: 'James',
                            age: 235})
            }
        } catch (e) {
            console.log('error in getData ')
            console.dir(e)
        }
    }

    const storeCatFood = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('CatFood', jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
    }

    const resetCatFood = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
          const jsonValue = JSON.stringify(5)
          await AsyncStorage.setItem('CatFood', jsonValue)
          setProfile({catFood: jsonValue})
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
        }
  }

    useEffect(() => {getCatFood()}, [])


  return (
        <View style={styles.maincontainor} >
            <View style={styles.header}>
                <Text>Happy Thursday :)</Text>
                <NameTag/>
            </View>
            <View style={styles.containor}>
                {alive ? 
                    <>
                    <View style={styles.catDialog}>
                        <Bubble hungry={hungry} />
                    </View>
                    <View style={styles.cat}>
                        <Cat />
                    </View>
                    </>
                :
                    <>
                    <View style={styles.catDialog}>
                    </View>
                    <View style={styles.cat}>
                        <DeadCat name={profile.name} />
                    </View>
                    </>
                }
            </View>
            <View style={styles.catfood}>
                {debugging ?
                <Button title='reset' onPress={() => {resetCatFood()}} />
                :
                <></>}
                <CatFoodBowl onPress={() => {setProfile({catFood: profile.catFood - 1,
                                                        name: 'James',
                                                        age: 235});
                                             storeCatFood(profile.catFood -1);}}/>
                {/* add function: update status of cat(how hungry), update cat dialog(appear for 2 seconds) */}
            </View>
            <View style={styles.footer}>
                <NavigateButton type={false} onPress={() => navigation.navigate('TodoList', {updateCatFood})} />
                <NavigateButton type={true} onPress={() => navigation.navigate('FocusClock')} />
            </View>
        </View>
  )
}

const MyStack = () => {
    const [profile, setProfile] = useState({name: 'James',
                                            age: 235,
                                            catFood: 5
                                            });

    const value = {profile, setProfile}
    return (
    <profileContext.Provider value={value}>
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                name="CatSimulator"
                component={CatSimulator}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="TodoList"
                component={TodoListScreen}
                options={{headerShown: false}}
                />
            <Stack.Screen 
                name="FocusClock"
                component={FocusClock}
                options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
      </profileContext.Provider>
    );
  };

const styles = StyleSheet.create({
    maincontainor: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containor: {
        flex: 10,
        flexDirection: 'column',
    },
    catDialog: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'center',
        marginLeft: 70,
    },
    cat: {
        flex: 3,
        alignItems: 'center',
    },
    catfood: {
        flex: 2,
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})


export default MyStack