import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, Pressable, View} from 'react-native';

const AddTodo = ({updateTodo}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState('');
  return (
    <View>
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
            <TextInput
                style={styles.input}
                placeholder="Type new task~"
                onChangeText={text => setTodo(text)}
            />
            <Text>     </Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {updateTodo(todo),
                              setModalVisible(!modalVisible)
              }}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.buttonOpen}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>✌︎︎• ◡•𝕪𝕖𝕖𝕖     Add Todo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  buttonOpen: {
    height: 30,
    width: 150,
  },
  input: {
    height: 30,
  },
  buttonClose: {
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14
  },
});

export default AddTodo;