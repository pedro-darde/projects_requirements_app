import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import color from "../constants/color";
export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.text}
              onPress={() => {
                navigation.navigate("Requirement");
              }}
            >
              Criar requirimento
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Project");
            }}
          >
            <Text style={styles.text}> Criar projeto </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("ListProject");
            }}
          >
            <Text style={styles.text}> Listagem de projetos </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    marginBottom: 5,
    width: 200,
    padding: 20,
    backgroundColor: color.primary_color,
    color: "white",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
