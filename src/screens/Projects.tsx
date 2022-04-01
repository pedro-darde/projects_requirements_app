import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import ListProjectComponent from "../components/ListProjectComponent";
import { ProjectAdded } from "../interfaces/Project";
import { baseService } from "../service/base-service";
import { useIsFocused } from "@react-navigation/native";
export default function ProjectsList({ navigation }: any) {
  const [projects, setProjects] = useState<ProjectAdded[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    baseService
      .get<ProjectAdded[]>("project")
      .then((res) => setProjects(res.data));
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListProjectComponent projects={projects} navigation={navigation} />
    </SafeAreaView>
  );
}
