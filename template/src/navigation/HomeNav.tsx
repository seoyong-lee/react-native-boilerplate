import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BottomTab from "@/components/BottomTab";
import HomeMenu1Screen from "@/screens/home/HomeMenu1Screen";
import HomeMenu2Screen from "@/screens/home/HomeMenu2Screen";
import HomeMenu3Screen from "@/screens/home/HomeMenu3Screen";
import HomeMenu4Screen from "@/screens/home/HomeMenu4Screen";
import HomeMenu5Screen from "@/screens/home/HomeMenu5Screen";

const Tab = createBottomTabNavigator();

const HomeNav = () => (
  <Tab.Navigator
    initialRouteName="Menu1"
    screenOptions={{ headerShown: false }}
    tabBar={props => <BottomTab {...props} />}>
    <Tab.Screen name={"Menu1"} component={HomeMenu1Screen} />
    <Tab.Screen name={"Menu2"} component={HomeMenu2Screen} />
    <Tab.Screen name={"Menu3"} component={HomeMenu3Screen} />
    <Tab.Screen name={"Menu4"} component={HomeMenu4Screen} />
    <Tab.Screen name={"Menu5"} component={HomeMenu5Screen} />
  </Tab.Navigator>
);

export default HomeNav;
