import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import StatisticScreen from './screens/StatisticScreen';
import ReminderScreen from './screens/ReminderScreen';
import ReceiptScreen from './screens/ReceiptScreen';


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator>

            <Tab.Screen name="Reminders" component={ReminderScreen} />
            <Tab.Screen name="Receipt" component={ReceiptScreen} />
            <Tab.Screen name="Post" component={PostScreen} />
            <Tab.Screen name="Statistics" component={StatisticScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
    );
};
export default Tabs;