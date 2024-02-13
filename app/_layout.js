import { Stack } from 'expo-router';
import { Button, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from "../Styles/page-styles";
export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "Assignment 2",
            headerStyle: { backgroundColor: 'lightblue', },
            headerTintColor: 'black',
            headerBackVisible: false,
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="game"
                options={{
                    //TESTING ONLY
                    headerShown: false,
                    headerTitle: "",
                    
                }}
            />
            <Stack.Screen
                name="help"
                options={{
                    headerTitle: "How to play",
                    headerShown: true,
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="difficulty"
                options={{
                    
                    headerShown: true,
                    headerTitle: "Difficulty Settings",
                    headerLeft: () => <Link
                        style={{ fontSize: 20 }}
                        href="/">Back</Link>
                }}
            />
            <Stack.Screen
                name="gameDone"
                options={{
                    //TESTING ONLY
                    headerShown: false,
                    headerTitle: "",

                }}
            />
        </Stack>
    );
}