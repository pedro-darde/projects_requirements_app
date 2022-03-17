import { StyleSheet, Text, View } from "react-native";
import { ProjectAdded } from "../interfaces/Project";
import { formatWithMask, Masks } from "react-native-mask-input";
import moment from "moment";
import { ScrollView } from "react-native-gesture-handler";
type ListProjectProps = {
  projects: Array<ProjectAdded>;
  navigation: any;
};
export default function ListProjectComponent({ projects }: ListProjectProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Projetos </Text>
      <ScrollView style={{ width: "100%" }}>
        {projects.map((project, key) => {
          return (
            <View key={key} style={styles.card}>
              <Text style={styles.projectTitle}>{project.name}</Text>
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
