import React from "react";
import { View,Text, StyleSheet } from "react-native";

const PostScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Post Screen!!</Text>
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
export default PostScreen;