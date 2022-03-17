import moment from "moment";
import React from "react";
import { Alert } from "react-native";
import CreateProjectComponent from "../components/CreateProjectComponent";
import { Project as propProject } from "../interfaces/Project";
import { baseService } from "../service/base-service";
export default function Project({ navigation }: any) {
  const createProject = (project: propProject, requirements: Number[]) => {
    project.release_date = moment(project.release_date, "DD/MM/YYYY").format("YYYY-MM-DD")
    project.start_date = moment(project.start_date, "DD/MM/YYYY").format("YYYY-MM-DD")
    console.log(project)
    baseService.post("project", { project, requirements }).then((res) => {
      Alert.alert("Sucesso", "O projeto foi criado com sucesso");
    });
  };
  return (
    <CreateProjectComponent handleSubmit={createProject} />
  );
}
