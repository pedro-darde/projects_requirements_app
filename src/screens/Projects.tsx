import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import ListProjectComponent from "../components/ListProjectComponent";
import { ProjectAdded } from "../interfaces/Project";
import { baseService } from "../service/base-service";

export default function ProjectsList({ navigation }: any) {
  const [projects, setProjects] = useState<ProjectAdded[]>([]);

  useEffect(() => {
    baseService
      .get<ProjectAdded[]>("project")
      .then((res) => setProjects(res.data));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListProjectComponent projects={projects} navigation={navigation} />
    </SafeAreaView>
  );
}
