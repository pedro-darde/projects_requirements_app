import { Image, StyleSheet, Text, View } from "react-native";
import { ProjectAdded } from "../interfaces/Project";
import moment from "moment";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { RequirementAdd } from "../interfaces/Requirement";
type ListProjectProps = {
  requirements: Array<RequirementAdd>;
  navigation: any;
};
export default function ListRequirementComponent({
  requirements,
  navigation,
}: ListProjectProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Requerimentos </Text>
      <ScrollView style={{ width: "100%" }}>
        {requirements.map((requirement, key) => {
          return (
            <View key={key} style={styles.card}>
              <View style={[styles.row, { justifyContent: "space-between" }]}>
                <Text style={styles.projectTitle}>
                  {requirement.description}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ShowRequirement", {
                      requirement_id: requirement.id,
                    });
                  }}>
                  <FontAwesome name="hand-o-right" size={20} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  width: "100%",
                }}>
                <View style={{ width: "40%" }}>
                  <Text>
                    Importancia:
                    {requirement.importance}
                  </Text>
                  <Text>
                    Tempo estimado:
                    {requirement.estimated_time}
                  </Text>
                  <Text>
                    Dificuldade:
                    {requirement.difficulty}
                  </Text>
                  <Text>
                    Localizacao:
                    {requirement.location &&
                      JSON.parse(requirement.location)[0].city +
                        " " +
                        JSON.parse(requirement.location)[0].region}
                  </Text>
                </View>
                <View style={{ width: "60%" }}>
                  <View style={styles.row}>
                    {requirement.pictures.map((picture) => {
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
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  card: {
    height: 200,
    padding: 10,
    borderRadius: 15,
    width: "100%",
    backgroundColor: "yellow",
    marginBottom: 5,
  },
  container: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  projectTitle: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
