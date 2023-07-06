import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import profileContext from './profileContext';
import AddTodo from './AddToDo';

export default function TodoListScreen({route}) {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const {profile, setProfile} = useContext(profileContext);

  const getTodos = async () => {
    try{
        const jsonValue = await AsyncStorage.getItem('Todos')
        if (jsonValue==null){
            setTodos([])
        } else {
            const data = JSON.parse(jsonValue);
            setTodos(data)
        }
    } catch (e) {
        console.log('error in getData ')
        console.dir(e)
    }
}

  const storeTodos = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('Todos', jsonValue)
    } catch (e) {
      console.log("error in storeData ")
      console.dir(e)
    }
  }

  const handleAddTodo = () => {
    if (todo.length > 0) {
      const newTodo = {
        id: Date.now().toString(),
        todo: todo,
      };
      setTodos([...todos, newTodo]);
      storeTodos([...todos, newTodo])
      setTodo('');
    }
  };

  const handleDeleteTodo = id => {
    setProfile({catFood: profile.catFood + 1,
                name: 'James',
                age: 235})
    const filteredTodos = todos.filter(item => item.id !== id);
    setTodos(filteredTodos);
    storeTodos(filteredTodos)
  };

  useEffect(() => {getTodos()}, [])

  return (
    <View style={styles.maincontainor}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{profile.name} wants to remind u ≧ᴗ≦✧</Text>
      </View>
      <View style={styles.toDoList}>
        <FlatList
          style={styles.list}
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.todo}>
              <Pressable
                onPress={() => {Alert.alert('', 'yayyyy! u earn 1 catfood', 'ok')
                                handleDeleteTodo(item.id)
                                route.params.updateCatFood(1)
                              }}
                style={styles.finishButton}
              >
                <Text>❛‿˂̵</Text>
              </Pressable>
              <Text style={styles.todoText}>{item.todo}</Text>        
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <AddTodo setTodo={setTodo} handleAddTodo={handleAddTodo}/>
      </View>
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
  toDoList: {
    alignItems: 'center',
    flex: 6,
  },
  footer: {
    flex: 1,
    paddingLeft: 40
  },
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  list: {
    width: '80%',
  },
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    marginLeft: 20,
  },
  finishButton: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});