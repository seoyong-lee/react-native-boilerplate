import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeNav from "@/navigation/HomeNav";
import SignInScreen from "@/screens/SignInScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeNav} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default Navigation;
