import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Requirement, RequirementFields } from "../interfaces/Requirement";
import colors from "../constants/color";
import color from "../constants/color";
type CreateRequirementComponentProps = {
  handleSubmit: (requirement: Requirement) => void;
};
export default function CreateRequirementComponent({
  handleSubmit,
}: CreateRequirementComponentProps) {
  const [requirement, setRequirement] = useState<Requirement>({
    description: "",
    difficulty: "",
    estimated_time: "",
    importance: "",
  });

  const handleChangeState = (field: RequirementFields, value: string) => {
    setRequirement((currentRequirement) => {
      let newRequirement = Object.assign({}, currentRequirement);
      newRequirement[field] = value;
      return newRequirement;
    });
  };

  const create = () => {
    handleSubmit(requirement);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleView}>
        <Text style={styles.titleScreen}>Criar requerimento</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            placeholder="Informe a descrição"
            style={styles.input}
            selectionColor="blue"
            onChangeText={(desc) => handleChangeState("description", desc)}
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Informe a dificuldade (0 a 5)"
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(difficulty) =>
              handleChangeState("difficulty", difficulty)
            }
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Importância (0 a 3)"
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(importance) =>
              handleChangeState("importance", importance)
            }
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Tempo estimado (horas)"
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(estimated) =>
              handleChangeState("estimated_time", estimated)
            }
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={create}>
            <Text style={styles.text}> Criar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  titleView: {
    borderRadius: 5,
    top: 10,
    alignSelf: "center",
    width: "70%",
    backgroundColor: "#fff7e0",
    padding: 10,
  },
  titleScreen: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    padding: 10,
  },
  button: {
    marginBottom: 5,
    width: 200,
    padding: 20,
    backgroundColor: color.primary_color,
    color: "white",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
