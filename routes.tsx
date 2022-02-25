import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./src/screens/Home";
import Project from "./src/screens/Project";
import Requirement from "./src/screens/Requirement";
export default function Routes() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Requirement" component={Requirement} />
        <Stack.Screen name="Project" component={Project} />
      </Stack.Navigator>
  );
}
