/**
 * file mineBox.js
 * author Auron Emard
 * date 2024-02-02
 * breif a box for mind is wept
 */
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import styles from "../Styles/page-styles";

export const MineBox = ({isBomb, style, callback }) => {
    //const bomb = props.isBomb;
    //const pressMe = props.onPress;
   const defaultMine = style;
    const [state, setState] = useState(defaultMine)
    const [disable, setDisable] = useState(false);
    
    useEffect(() => {
        if (state != defaultMine) {
            setDisable(true);
        }
    }, [state])

    return (
        <Pressable
            style={state}
            onPress={() => { callback(isBomb) }}
            onPressIn={() => { setState([styles.box, isBomb ? styles.bomb : styles.open]) }}
            disabled={ disable}
        />
        
        
    );

}

