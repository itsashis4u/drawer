import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './homestack';
import {ContactScreen} from './contact';

type TabStackParamsList = {
  Home: undefined;
  Contact: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamsList>();

export function TabStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => null,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}
