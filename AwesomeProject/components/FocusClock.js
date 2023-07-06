import React, { useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput} from 'react-native';

import profileContext from './profileContext';
import Countdown from './Countdown';
import Cat2 from './Cat2';

export default function FocusClock({duration}) {
    const {profile} = useContext(profileContext);
    const [onCount, setOnCount] = useState(false);
    const [time, setTime] = useState(0);

  return (
    <View style={styles.maincontainor}>
        <View style={styles.header}>
            <Text style={styles.headerText}>It's time to study with {profile.name} (ﾟoﾟ;;</Text>
        </View>
        {onCount ? 
          <>
          <View style={styles.countdown}>
            <Text style={{marginLeft:40}}>You're doing very good job ∠( ᐛ 」∠)＿</Text>
            <Text></Text>
            <Cat2 />
          </View>
          <View style={styles.footer}>
            <Countdown second={time} />
          </View>
          </>
          :
          <>
          <View style={styles.container}>
          <Pressable onPress={() => setTime(3600)}>
            <View style={styles.textbox}>
                <Text>60 min</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setTime(2700)}>
            <View style={styles.textbox}>
                <Text>45 min</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setTime(900)}>
            <View style={styles.textbox}>
                <Text>15 min</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => setTime(1)}>
          <View style={styles.textbox}>
              <Text>test: 5 seconds</Text>
          </View>
          </Pressable>
          </View>
          <View style={styles.footer}>
            <Pressable disabled={time==0}
                      onPress={() => {setOnCount(true)}}
            >
                {time > 0 ?
                  <Text>{Math.floor(time / 60)} min start now!</Text>
                  :
                  <Text>Choose focus time ^o^</Text>}
            </Pressable>
          </View>
        </>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainor: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    justifyContent:'flex-end',
    paddingLeft: 40,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 16,
  },
  container: {
    flex: 6,
    alignItems: 'center',
    marginTop: 40
  },
  countdown: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textbox:{
    borderColor: 'black',
    borderRadius: 6,
    borderWidth: 1,
    width: 170,
    height: 100,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center'
  },
});