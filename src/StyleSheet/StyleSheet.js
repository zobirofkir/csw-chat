import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'flex-end',
        flexWrap:'wrap',
        padding: 10,
        backgroundColor: "#f5f5f5f5"
    },
    TextInput: {
        marginLeft: 10,
        width: '80%',
        fontWeight: 'bold',
    }, 
    TouchableOpacity: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    TouchableOpacityText: {
        color: 'white',
        fontWeight: 'bold'
    },
    rowInBu: {
        flexDirection: 'row',
    },
    UserQuestion: {
        margin: 10,
    },
    UserQuestionText: {
        fontWeight: 'bold',
        fontSize: 15,        
    },
    UserResponse: {
        
    },
    UserResponseText: {
        textAlign: 'right',
        margin: 25,
        fontWeight: 'bold',
        fontSize: 15,        
    },
    endTab: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    endTabText: {
        fontWeight: 'bold',
        marginTop: 5
    }
})