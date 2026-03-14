import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        height: 120,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 20,
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: 10,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: '500'
    },
    taskDesc: {
        fontSize: 14,
        color: "#666",
        marginTop: 5
    },
    deleteText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    backgroundColor: "#FF4D4D",
    width: 100,
    textAlign: "center",
    padding: 7,
    borderRadius: 8,
    alignSelf: "flex-end"
    }
});