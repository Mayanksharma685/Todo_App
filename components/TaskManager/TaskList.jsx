import { Text, View } from "react-native";
import { TaskCard } from "./TaskCard";

export const TaskList = ({ tasks, onDelete }) => {

    if(tasks.length === 0){
        return (
            <View style={{alignItems:"center", marginTop:40}}>
                <Text>No Tasks Added Yet</Text>
            </View>
        )
    }

    return (
        <View>
            {
                tasks.map((task) => (
                    <TaskCard 
                        key={task.taskId} 
                        task={task}
                        onDelete={onDelete}
                    />
                ))
            }
        </View>
    )
}