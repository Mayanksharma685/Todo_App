import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./TaskList.style";

export const TaskCard = ({ task, onDelete }) => {

    const confirmDelete = () => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", onPress: () => onDelete(task.taskId) }
            ]
        );
    }

    return (
        <View style={styles.card}>

            <TouchableOpacity>
                <Text 
                    style={[
                        styles.taskTitle,
                        task.completed && { textDecorationLine: "line-through" }
                    ]}
                >
                    {task.taskText}
                </Text>

                <Text style={styles.taskDesc}>
                    {task.taskDescription}
                </Text>
            </TouchableOpacity>

            <Pressable onPress={confirmDelete}>
                <Text style={styles.deleteText}>Delete</Text>
            </Pressable>

        </View>
    )
}