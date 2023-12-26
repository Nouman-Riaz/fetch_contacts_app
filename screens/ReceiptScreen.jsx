import React from "react";
import { View,Text, StyleSheet } from "react-native";

const ReceiptScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Receipt Screen!!</Text>
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
export default ReceiptScreen;