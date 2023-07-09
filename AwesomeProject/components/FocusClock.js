import React, { useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Modal} from 'react-native';

import profileContext from './profileContext';
import Countdown from './Countdown';
import Cat2 from './Cat2';

export default function FocusClock({route}) {
    const {profile} = useContext(profileContext);
    const [onCount, setOnCount] = useState(false);
    const [time, setTime] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.maincontainor}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>yayyyy! u earn 1 catfood</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {route.params.updateCatFood(1),
                              setModalVisible(false),
                              setOnCount(false)
              }}>
              <Text></Text>
              <Text></Text>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
            <Countdown second={time} setModalVisible={setModalVisible}/>
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
          <Pressable onPress={() => setTime(5)}>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },buttonClose: {
    height: 30,
    width: 30,
    alignItems: 'center',
  },
});