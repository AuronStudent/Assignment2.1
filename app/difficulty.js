//the difficulty screen
import React from 'react';
import { Button, Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { Link } from 'expo-router';
import styles from "../Styles/page-styles";

export default function Page() {

    const [difficultyNum, changeNum] = React.useState(15);


    const [sel1, changeSel1] = React.useState("Selected");
    const [sel2, changeSel2] = React.useState("");
    const [sel3, changeSel3] = React.useState("");

    const [selected, changeSelected] = React.useState(1);

    const changeSel = (id) => {
        if (id === 1) {
            changeSel1("Selected");
            changeSel2("");
            changeSel3("");
            changeNum(15);
        } else if (id === 2) {
            changeSel2("Selected");
            changeSel1("");
            changeSel3("");
            changeNum(25);
        } else if (id === 3) {
            changeSel3("Selected");
            changeSel2("");
            changeSel1("");
            changeNum(35);
        } else {
            console.log("Somthing is not right");
        }
    }

    
    return (
        <View style={styles.page} >
            <Text style={{ fontSize: 20 }}>Select Your Difficulty</Text>
            <Text>{"\n "}</Text>
            <Pressable style={styles.button} onPress={() => {changeSel(1) }}>
                <Text style={{ fontSize: 30 }}>Easy (5x3)</Text>
            </Pressable>

            <Text>{sel1}</Text>

            <Text>{"\n "}</Text>
            <Pressable style={styles.button} onPress={() => { changeSel(2)} }>
                <Text style={{ fontSize: 30 }}>Medium (5x5)</Text>
            </Pressable>

            <Text>{sel2}</Text>

            <Text>{"\n "}</Text>
            <Pressable style={styles.button} onPress={() => {changeSel(3) }}>
                <Text style={{ fontSize: 30 }}>Hard (5x7)</Text>
            </Pressable>

            <Text>{sel3 }</Text>

            <Text>{"\n"}</Text>
            <Link href={{
                pathname: "/",
                params: { difficultyNum , sel1 ,  sel2 , sel3}
            }} asChild>
                <Pressable style={styles.button}>
                    <Text style={{ fontSize: 30 }}>Save Changes</Text>
                </Pressable>
            </Link>
            
        </View>
    )
}