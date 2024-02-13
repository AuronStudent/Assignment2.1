import { StatusBar } from 'expo-status-bar';
import { Link, useLocalSearchParams, router } from 'expo-router';
import { Button, StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import { MineBox } from '../components/mineBox';
import styles from "../Styles/page-styles";
import { useState, useEffect } from 'react'
    ;
export default function App() {
    //difficulty settings from the other screen
    const params = useLocalSearchParams();
    const { difficultyNum } = params;
    const [difficulty, setDifficulty] = useState(difficultyNum);


    

    //change the color depending on if mine or not
    const [color, setColor] = useState(styles.closed);

    //choose whether a bomb or not
    const bomb = () => {
        if (Math.random() < 0.7) { // this is the propobility of mines. change this to increase or decrease chance of a mine appearing
            return false;
        } else {
            return true;
        }
    }

    const [score, setScore] = useState(0);
    const [scoreMulti, setScoreMulti] = useState(1);
    //check if a box is clicked and change score
    
    const gotClick = (bomb) => {
        if (bomb) {
            setScore(0); 
            Alert.alert("Oh No!", "You hit a bomb and lost all your points!");
            router.replace('gameDone');
        } else {
            setScore(score + 100 * scoreMulti);
            setScoreMulti(scoreMulti+1)
        }
    }

    const grid = []; //the array for the mines

    //makes a grid of boxes
    const setMines = () => {
        if (!difficulty) {
            setDifficulty(15)
        }
        for (let i = 0; i < difficulty; i++) {//change this to increase number of squares
            grid.push(
                <View key={i}>
                    <MineBox isBomb={bomb()} style={[styles.box, color]} callback={gotClick} />
                </View>
            )
        }
        
    }
    setMines(); //make the mines

    const [timer, setTimer] = useState(100);

    useEffect(() => {
        if (!timer) { router.replace('gameDone'); Alert.alert("You ran out of time!"); return; }
        const interval = setInterval(() => {
            
            setTimer(c => c - 1);
            
        }, 1000);

        return () => clearInterval(interval);
        
    },[timer])


    return (

        
        <View style={styles.page}>

            <View style={styles.page }>
            <Text style={{
                fontSize: 25,
                borderWidth: 3,
                padding: 2,
                }}>Timer: {timer}</Text>

                <Text style={{
                fontSize: 25,
                borderWidth: 3,
                padding: 2,
            }}>Score: {score}</Text>
                

                </View>
               
            <View style={styles.grid}>

                {grid}
                
               
                <StatusBar style="auto" />

                <Link href={{
                    pathname: "/gameDone", 
                    params: { score }
                } }asChild>
                
                <Pressable style={styles.button} title={"I'm Done"} onPress={() => { Alert.alert("You gave up!", "You walked away and kept your points")} }>
                    <Text style={{fontSize:20} }>I'm Done</Text>
                    </Pressable>
                </Link>
            </View>
            
        </View>
            

       
    );
}

