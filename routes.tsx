import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "./src/screens/Home";
import Project from "./src/screens/Project";
import ProjectsList from "./src/screens/Projects";
import Requirement from "./src/screens/Requirement";
import RequirementList from "./src/screens/Requirements";
import ShowProject from "./src/screens/ShowProject";
import ShowRequirement from "./src/screens/ShowRequirement";
export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Requirement" component={Requirement} />
      <Stack.Screen name="Project" component={Project} />
      <Stack.Screen name="ListProject" component={ProjectsList} />
      <Stack.Screen name="ShowProject" component={ShowProject} />
      <Stack.Screen name="ShowRequirement" component={ShowRequirement} />
      <Stack.Screen name="ListRequirement" component={RequirementList} />
    </Stack.Navigator>
  );
}
