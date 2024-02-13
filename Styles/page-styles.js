import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    page: {
       flex: 1,
        backgroundColor: '#a1adb0',
       alignItems: 'center',
       justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightgreen',
        borderRadius: 20,
        border: 20,
        borderWidth: 2,
        padding:5,
    },
    grid: {
        flex: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width:'80%',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        justifyContent: 'center',
    },
    box: {
        height: 70,
        width: 70,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        margin: 2,
        backgroundColor: 'green',
    },
    closed: {
        backgroundColor: 'grey',
    },
    open: {
        backgroundColor: 'blue',
    },
    bomb: {
        backgroundColor: 'red',
    },

})



export default styles;