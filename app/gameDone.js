//the help screen
import { useState } from 'react';
import { Button, Text, View, StyleSheet, Pressable } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import styles  from "../Styles/page-styles";
export default function Page() {

    params = useLocalSearchParams();

    const { score } = params;

    
    const [hscore, setHScore] = useState(0);

    const checkHighScore = () => {
        if (score === "") {
            score  = 0;
        }
        if(score > hscore){
            setHScore(score)
        }
    }
    checkHighScore();
    const storedScore = hscore;
    return (


        <View style={styles.page} >
            <Text style={{
                fontSize: 25,
                borderWidth: 3,
                padding: 2,
            }}>Highscore: {hscore}</Text>

            <Text>{"\n "}</Text><Text>{"\n "}</Text>
                <Text style={{
                    fontSize: 25,
                    borderWidth: 3,
                    padding: 2,
                }}>Your Score: {score}</Text>
            <Text>{"\n "}</Text>
            <Link href={{
                pathname: "/",
                params: {hscore}
            }} asChild>
                <Pressable title="Play Again" style={styles.button} >
                    <Text style={{fontSize:30} }>Back to title</Text>
                </Pressable>
            </Link>



        </View>


    )
}

