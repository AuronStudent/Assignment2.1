//splash screen
import { useState } from 'react';
import { Button, Text, View, StyleSheet, Pressable} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import  styles  from "../Styles/page-styles";
export default function Page() {

    const params = useLocalSearchParams();
    const { difficultyNum } = params;
    const { sel1 } = params;
    const { sel2 } = params;
    const { sel3 } = params;
    const { hscore } = params;

    const [score, setScore] = useState(0);
    
    return (
        <View style={styles.page} >
            <Text style={{ fontSize: 40 }} >Mind Is Wept</Text>
            <Text>{"\n "}</Text>
            
            <Text>{"\n "}</Text>
            <Link href={{
                pathname: "/game",
                params: { difficultyNum, sel1, sel2, sel3 }
            }} asChild>
                <Pressable style={styles.button}>
                    <Text style={{fontSize:30} }>Play Game</Text>
                </Pressable>
            </Link>

            <Text>{"\n"}</Text>
            <Link href={{
                pathname: "/difficulty",
                params: { difficultyNum, sel1, sel2, sel3 }
            }} asChild>
                <Pressable style={styles.button}>
                    <Text style={{ fontSize: 30 }}>Change Difficulty</Text>
                </Pressable>
            </Link>

            <Text>{"\n"}</Text>
            <Link href={{
                pathname: "/help"
            }} asChild>
                <Pressable style={styles.button}>
                    <Text style={{ fontSize: 30 }}>How To Play</Text>
                </Pressable>
            </Link>
             
            

        </View>
    )
}

