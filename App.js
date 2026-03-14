import { ScrollView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.styles';
import { Header } from './components/Header/Header';
import { TaskList } from './components/TaskManager/TaskList';
import { useState } from 'react';
import { TaskInput } from './components/TaskManager/TaskForm';

export default function App() {

  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  }

  // DELETE LOGIC
  const deleteTask = (id) => {
    const updatedList = taskList.filter((task) => task.taskId !== id);
    setTaskList(updatedList);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <View style={styles.headerWrapper}>
          <Header />
        </View>

        <View style={styles.taskInputWrapper}>
          <TaskInput addTask={addTask} />
        </View>

        <View style={styles.taskWrapper}>
          <ScrollView>
            <TaskList 
              tasks={taskList}
              onDelete={deleteTask}
            />
          </ScrollView>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}