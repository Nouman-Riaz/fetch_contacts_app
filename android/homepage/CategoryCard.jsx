import React from 'react';
import { View,Text,Image } from 'react-native';

const CategoryCard=({path,title,subTitle,price})=>{
    return(
        <View style={{flexDirection:"row"}}>
            <View style={styles.circleContainer}>
                <Image  style={{height:25,width:25}} source={path} />
            </View>
            <View style={{flexDirection:"row",marginTop:3,flex:2}}>
                <View>
                    <Text style={styles.categorCardTitle}>{title}</Text>
                    <Text style={styles.categorCardSubTile}>{subTitle}</Text>
                </View>
                
            </View>
            <View style={{flexDirection:"row-reverse",flex:1}}>
                    <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
};

export default CategoryCard;