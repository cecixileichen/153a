import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Pressable} from 'react-native';

import profileContext from './profileContext';
import AddTodo from './AddToDo';

export default function TodoListScreen({route, navigation}) {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [finishTodos, setFinishTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const {profile} = useContext(profileContext);

  const test = () => {
    setTodo('test')
    console.log(todo)
    handleAddTodo()
  }

  const handleAddTodo = () => {
    console.log("handle")
    if (todo.length > 0) {
      console.log('1')
      const newTodo = {
        id: Date.now().toString(),
        todo: todo,
      };
      setTodos([...todos, newTodo]);
      setTodo('');
    }
  };

  const handleDeleteTodo = id => {
    const finishedItem = {
    };
    const filteredTodos = todos.filter(item => item.id !== id);
    setFinishTodos([...finishTodos, finishedItem]);
    // setTodos(filteredTodos);
  };

  const updateTodo = (text) => {
    setTodo(text);
    console.log(todo);
    handleAddTodo();
  }

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
              <Text style={styles.todoText}>{item.todo}</Text>
              <Pressable
                onPress={() => {handleDeleteTodo(item.id)
                                route.params.updateCatFood(1)
                              }}
                style={styles.finishButton}
              >
                <Text>❛‿˂̵</Text>
              </Pressable>

            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <AddTodo updateTodo={updateTodo}/>
        <Text>{todo}</Text>
        <Text>todos={JSON.stringify(todos)}</Text>
        <Text>finishTodos={JSON.stringify(finishTodos)}</Text>

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
    flex: 1.3,
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
    marginRight: 10,
  },
  finishButton: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
});