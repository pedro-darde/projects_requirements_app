import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import {
  Requirement,
  RequirementAdd,
  RequirementFields,
  RequirementPictures,
} from "../interfaces/Requirement";
import color from "../constants/color";
import { ScrollView } from "react-native-gesture-handler";
import { baseService } from "../service/base-service";
type EditRequirementComponentProps = {
  handleSubmit: (requirement: Requirement, requirement_id: number) => void;
  navigation: any;
  route: any;
};
export default function EditRequirementComponent({
  handleSubmit,
  navigation,
  route,
}: EditRequirementComponentProps) {
  const [requirement, setRequirement] = useState<Requirement>({
    description: "",
    difficulty: "",
    estimated_time: "",
    importance: "",
    location: "",
  });
  const [pictures, setPictures] = useState<RequirementPictures[]>([]);

  const { requirement_id } = route.params;

  const handleChangeState = (field: RequirementFields, value: string) => {
    setRequirement((currentRequirement) => {
      let newRequirement = Object.assign({}, currentRequirement);
      newRequirement[field] = value;
      return newRequirement;
    });
  };

  const fetchRequirement = () => {
    if (requirement_id) {
      baseService
        .get<RequirementAdd>(`requirement/${requirement_id}`)
        .then((res) => {
          const {
            description,
            difficulty,
            estimated_time,
            importance,
            location,
            pictures,
          } = res.data;
          console.log(res.data);
          setRequirement({
            description,
            difficulty,
            estimated_time,
            importance,
            location,
          });
          setPictures(pictures);
        });
    }
  };

  const edit = () => {
    handleSubmit(requirement, requirement_id);
  };

  useEffect(() => {
    fetchRequirement();
  }, [requirement_id]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.titleScreen}>Editar requerimento</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <TextInput
              placeholder="Informe a descrição"
              style={styles.input}
              selectionColor="blue"
              value={requirement.description}
              onChangeText={(desc) => handleChangeState("description", desc)}
              underlineColorAndroid={color.primary_color}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              placeholder="Informe a dificuldade (0 a 5)"
              keyboardType="number-pad"
              style={styles.input}
              value={requirement.difficulty.toString()}
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
              value={requirement.importance.toString()}
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
              value={requirement.estimated_time.toString()}
              onChangeText={(estimated) =>
                handleChangeState("estimated_time", estimated)
              }
              selectionColor="blue"
              underlineColorAndroid={color.primary_color}
            />
          </View>

          <View style={styles.row}>
            <Text> Imagens: </Text>
          </View>
          <View style={styles.row}>
            {pictures?.map((picture) => {
              return (
                <View key={picture.id} style={{ margin: 5 }}>
                  <Image
                    style={{
                      width: 125,
                      height: 125,
                      resizeMode: "contain",
                    }}
                    source={{ uri: picture.path }}
                  />
                </View>
              );
            })}
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={edit}>
              <Text style={styles.text}> Criar </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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

  cameraButton: {
    marginBottom: 5,
    width: 70,
    padding: 20,
    backgroundColor: color.primary_color,
    color: "white",
    textAlign: "center",
    borderRadius: 50,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
