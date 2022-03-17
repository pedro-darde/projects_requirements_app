import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import color from "../constants/color";
import { Project, RequiredFieldsProject } from "../interfaces/Project";
import { Requirement } from "../interfaces/Requirement";

type CreateProjectComponentProps = {
  handleSubmit: (project: Project, requirements: Number[]) => void;
};

export default function CreateProjectComponent({
  handleSubmit,
}: CreateProjectComponentProps) {
  const [project, setProject] = useState<Project>({
    name: "",
    release_date: "",
    start_date: "",
  });
  const [requirements, setRequirements] = useState<number[]>([]);
  const [fetchedRequirements, setFetchedRequirements] = useState<Requirement[]>(
    []
  );

  const handleChangeState = (field: RequiredFieldsProject, value: string) => {
    
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleView}>
        <Text style={styles.titleScreen}>Criar projeto</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            placeholder="Informe o nome"
            style={styles.input}
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Informe a data de entrega"
            style={styles.input}
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            placeholder="Informe a data de comeco"
            keyboardType="number-pad"
            style={styles.input}
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Selecione os requerimentos"
            keyboardType="number-pad"
            style={styles.input}
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
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
