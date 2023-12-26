import React from "react";
import { View,Text, StyleSheet } from "react-native";

const ReminderScreen = ({naigation}) => {
    return(
        <View style={styles.container}>
            <Text>Reminder Screen!!</Text>
        </View>
    );
}

styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
});
export default ReminderScreen;