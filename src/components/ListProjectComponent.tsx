import { StyleSheet, Text, View } from "react-native";
import { ProjectAdded } from "../interfaces/Project";
import moment from "moment";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'
type ListProjectProps = {
  projects: Array<ProjectAdded>;
  navigation: any;
};
export default function ListProjectComponent({ projects, navigation }: ListProjectProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Projetos </Text>
      <ScrollView style={{ width: "100%" }}>
        {projects.map((project, key) => {
          return (
            <View key={key} style={styles.card}>
              <View style={[styles.row, { justifyContent: "space-between" }]}>
                <Text style={styles.projectTitle}>{project.name}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('ShowProject', { project_id: project.id})}}> 
                  <FontAwesome name="hand-o-right" size={20}/>
                </TouchableOpacity>
              </View>
              <Text>
                Data de inicio:{" "}
                {moment(project.start_date).format("DD/MM/YYYY")}
              </Text>
              <Text>
                Data de lancamento:{" "}
                {moment(project.release_date).format("DD/MM/YYYY")}
              </Text>

              <Text>
                Requerimentos:
                {project.projectRequirements.map((projectRequirement) => {
                  return (
                    <Text> {projectRequirement.requirement.description},</Text>
                  );
                })}
              </Text>
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
    height: 150,
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
