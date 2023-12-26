import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, ScrollViewComponent } from 'react-native';
import Tabs from './Tabs';
import CategoryCard from './android/homepage/CategoryCard';


const App = () => {
    return (
        <NavigationContainer>
        <View style={styles.container}>
            <ScrollView>

                <View >
                    <View>
                        <Text style={styles.textStyle1}>Balance</Text>
                        <Text style={styles.textStyle2}>$12,560.00</Text>
                    </View>
                    <View style={styles.cardView}>
                        <View style={{ alignItems: "center", marginBottom: 5 }}>
                            <Text style={styles.textStyle3}>August</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 35 }}>
                            <Text style={styles.textStyle4}>Exp</Text>
                            <Text style={styles.textStyle4}>Bal</Text>
                            <Text style={styles.textStyle4}>Inc</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 22 }}>
                            <Text style={styles.numbers}>25000</Text>
                            <Text style={styles.numbers}>+5000</Text>
                            <Text style={styles.numbers}>300000</Text>
                        </View>
                        <View style={{ marginHorizontal: 20, marginTop: 95 }}>
                            <Text style={styles.monthNames}>JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <View style={[{ backgroundColor: "#CFBBD4" }, styles.tabSytle]}>
                            <Text style={styles.tabTextStyle}>Today</Text>
                        </View>
                        <View style={[{ backgroundColor: "#EEEFEF" }, styles.tabSytle]}>
                            <Text style={styles.tabTextStyle}>Weekly</Text>
                        </View>
                        <View style={[{ backgroundColor: "#EEEFEF" }, styles.tabSytle]}>
                            <Text style={styles.tabTextStyle}>Monthly</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={styles.todayTextStyle}>Today</Text>
                        </View>
                        <CategoryCard path={require("./assets/Buying.png")} title={"Shopping"} subTitle={"Clothes and watch"} price={"1101.00"} />
                        <View style={{ marginLeft: 55, height: 1, width: "85%", backgroundColor: "#E2E1E1" }}></View>
                        <View>
                            <Text style={styles.dateStyle}>18Aug</Text>
                        </View>
                        <CategoryCard path={require("./assets/Buying.png")} title={"Shopping"} subTitle={"Clothes and watch"} price={"18025.00"} />
                        <CategoryCard path={require("./assets/BookAndPencil.png")} title={"Education"} subTitle={"Books and Stationary"} price={"5024.00"} />
                        <CategoryCard path={require("./assets/Food.png")} title={"Food"} subTitle={"Kirana and Ration"} price={"11021.00"} />
                        <View style={{ marginLeft: 55, height: 1, width: "85%", backgroundColor: "#E2E1E1" }}></View>
                        <View>
                            <Text style={styles.dateStyle}>17Aug</Text>
                        </View>
                        <CategoryCard path={require("./assets/Buying.png")} title={"Shopping"} subTitle={"Clothes and watch"} price={"18025.00"} />
                        <CategoryCard path={require("./assets/Food.png")} title={"Food"} subTitle={"Kirana and Ration"} price={"11021.00"} />
                        <CategoryCard path={require("./assets/Food.png")} title={"Food"} subTitle={"Kirana and Ration"} price={"11021.00"} />
                    </View>
                </View>
                    
            </ScrollView>
            <Tabs />
            </View>
            
        </NavigationContainer>
    );
};

styles = StyleSheet.create({
    container: {
        padding: 18,
        flex: 1,
        flexDirection: "column",
    },
    textStyle1: {
        color: "#000000",
        fontSize: 16
    },
    textStyle2: {
        color: "#000000",
        fontSize: 36,
        fontWeight: "800",
    },
    textStyle3: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "500",
    },
    textStyle4: {
        color: "#EF8767",
        fontSize: 12,
        fontWeight: "500",
    },
    numbers: {
        color: "#B6B5B7",
        fontSize: 14,
        fontWeight: "500",
    },
    monthNames: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "500",
    },
    tabSytle: {
        borderRadius: 15,
        width: 101,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    tabTextStyle: {
        color: "#1E1E1E",
    },
    todayTextStyle: {
        color: "#000000",
        fontSize: 16,
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 10,
        fontWeight: "400",
    },
    circleContainer: {
        backgroundColor: "#CFBBD4",
        borderRadius: 30,
        height: 47,
        width: 47,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    cardView: {
        height: 189,
        width: "100%",
        marginTop: "99px",
        backgroundColor: "#42224A",
        marginBottom: 10,
        borderRadius: 10,
    },
    categorCardTitle: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "400",
    },
    categorCardTitle: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "400",
    }, categorCardSubTile: {
        color: "#AEABAB",
        fontSize: 12,
        fontWeight: "600",
    },
    price: {
        color: "#000000",
        fontWeight: "600",
        fontSize: 16,
    },
    dateStyle: {
        fontSize: 12,
        fontWeight: "500",
        marginBottom: 10,
        color: "#AEABAB",
    },
});
export default App;