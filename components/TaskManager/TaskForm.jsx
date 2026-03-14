import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./TaskForm.style"
import { useState } from "react";

export const TaskInput = ({ addTask }) => {

    const [taskObj, setTaskObj] = useState({
        taskId: 0,
        taskText: "",
        taskDescription: "",
        completed: false
    });

    const handleTextChange = (key, value) => {
        setTaskObj({
            ...taskObj,
            [key]: value,
            taskId: Math.random().toString()
        });
    }

    const submitHandler = () => {

        if(taskObj.taskText.trim() === ""){
            return;
        }

        addTask(taskObj);

        setTaskObj({
            taskId: 0,
            taskText: "",
            taskDescription: "",
            completed: false
        });
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Enter your task"
                value={taskObj.taskText}
                onChangeText={(text) => handleTextChange("taskText", text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter description"
                value={taskObj.taskDescription}
                onChangeText={(text) => handleTextChange("taskDescription", text)}
            />

            <TouchableOpacity 
                style={styles.btn}
                onPress={submitHandler}
            >
                <Text style={styles.btnText}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}