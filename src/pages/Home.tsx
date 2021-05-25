import React, { useState } from 'react';
import { Alert, Keyboard, View } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

import { theme } from '../Themes/Themas';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [temaDark, setAtemaDark] = useState(false);

  const { dark, light } = theme;

  function toggleSwitch(temaActive: boolean){
    setAtemaDark(temaActive);
  }
 
  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle !== '') {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      setTasks(oldState  => [...oldState, data]);
      Alert.alert('Tarefa adcionada com sucesso!');
    } else {
      Alert.alert('A tarefa não pode ser vazia');
    }
    Keyboard.dismiss();
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    let alter = [...tasks];

    tasks.map((alterTask, index) => {
      if(alterTask.id === id) {
        alter[index].done = !alterTask.done;
      }
    })

    
    setTasks(alter);
    alter = [];
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: `${temaDark ? dark.backgroundContainer : light.backgroundContainer}`}}
    >
      
      <Header toggleTema={toggleSwitch}  Theme={temaDark ? theme.dark : theme.light} />

      <TodoInput addTask={handleAddTask} Theme={temaDark ? theme.dark : theme.light}/>

      <MyTasksList 
        Theme={temaDark ? theme.dark : theme.light}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </View>
  )
}