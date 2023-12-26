import React from "react";
import { View,Text, StyleSheet } from "react-native";

const StatisticScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Statistic Screen!!</Text>
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
export default StatisticScreen;