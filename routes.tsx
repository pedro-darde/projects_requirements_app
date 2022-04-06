import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import WebViewDocumentation from "./src/screens/WebViewDocumentation";
import Home from "./src/screens/Home";
import Project from "./src/screens/Project";
import ProjectsList from "./src/screens/Projects";
import Requirement from "./src/screens/Requirement";
import RequirementList from "./src/screens/Requirements";
import ShowProject from "./src/screens/ShowProject";
import ShowRequirement from "./src/screens/ShowRequirement";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import OpenScreen from "./src/screens/OpenScreen";
export default function Routes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="OpenScreen">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Requirement"
        component={Requirement}
        options={{ title: "Criar requerimento" }}
      />
      <Stack.Screen
        name="Project"
        component={Project}
        options={{ title: "Criar projeto" }}
      />
      <Stack.Screen
        name="ListProject"
        component={ProjectsList}
        options={{ title: "Projetos" }}
      />
      <Stack.Screen
        name="ShowProject"
        component={ShowProject}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowRequirement"
        component={ShowRequirement}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListRequirement"
        component={RequirementList}
        options={{ title: "Requerimentos" }}
      />
      <Stack.Screen
        name="WebView"
        component={WebViewDocumentation}
        options={{ title: "" }}
      />

      <Stack.Screen name="OpenScreen" component={OpenScreen} options={{ title: 'Seja bem vindo'}} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{ title: 'Criar conta'}}/>
    </Stack.Navigator>
  );
}
