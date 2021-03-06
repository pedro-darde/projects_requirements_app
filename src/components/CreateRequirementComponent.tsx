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
import { Requirement, RequirementFields } from "../interfaces/Requirement";
import color from "../constants/color";
import { Camera, CameraCapturedPicture } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
type CreateRequirementComponentProps = {
  handleSubmit: (
    requirement: Requirement,
    pictures: CameraCapturedPicture[]
  ) => void;
};
export default function CreateRequirementComponent({
  handleSubmit,
}: CreateRequirementComponentProps) {
  const [requirement, setRequirement] = useState<Requirement>({
    description: "",
    difficulty: "",
    estimated_time: "",
    importance: "",
    location: "",
  });

  const [hasPermissionToCamera, setHasPermissonToCamera] = useState(false);
  const [hasPermissionToLocation, setHasPermissionToLocation] = useState(false);
  const [pictures, setPictures] = useState<CameraCapturedPicture[]>([]);
  const handleChangeState = (field: RequirementFields, value: string) => {
    setRequirement((currentRequirement) => {
      let newRequirement = Object.assign({}, currentRequirement);
      newRequirement[field] = value;
      return newRequirement;
    });
  };

  const create = () => {
    handleSubmit(requirement, pictures);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermissonToCamera(status === "granted");

      const { status: locationStatus } =
        await Location.requestForegroundPermissionsAsync();
      setHasPermissionToLocation(locationStatus === "granted");
      const location = await Location.getCurrentPositionAsync();
      const address = await Location.reverseGeocodeAsync(location.coords);
      handleChangeState("location", JSON.stringify(address));
    })();
  }, []);

  const showImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });
    // Explore the result

    if (!result.cancelled) {
      setPictures((currentPictures) => [...currentPictures, result]);
      console.log(pictures.length);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.titleScreen}>Criar requerimento</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <TextInput
              placeholder="Informe a descri????o"
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
              placeholder="Import??ncia (0 a 3)"
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

          {hasPermissionToCamera && pictures.length <= 1 && (
            <View>
              <View style={styles.row}>
                <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={showImagePicker}>
                  <FontAwesome name="camera-retro" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={styles.row}>
            <Text> Imagens: </Text>
          </View>
          <View style={styles.row}>
            {pictures.map((picture) => {
              return (
                <View key={picture.base64} style={{ margin: 5 }}>
                  <Image
                    style={{
                      width: 125,
                      height: 125,
                      resizeMode: "contain",
                    }}
                    source={{ uri: picture.uri }}
                  />
                </View>
              );
            })}
          </View>

          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={create}>
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
