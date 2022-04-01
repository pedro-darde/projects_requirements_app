import moment from "moment";
import React from "react";
import { Alert } from "react-native";
import EditProjectComponent from "../components/EditProjectComponent";
import { Project } from "../interfaces/Project";
import { baseService } from "../service/base-service";
export default function ShowProject({ navigation, route }: any) {
  const editProject = (
    project: Project,
    requirements: Number[],
    project_id: number
  ) => {
    project.release_date = moment(project.release_date, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );
    project.start_date = moment(project.start_date, "DD/MM/YYYY").format(
      "YYYY-MM-DD"
    );
    baseService
      .patch(`project/${project_id}`, { project, requirements })
      .then((res) => {
        Alert.alert("Sucesso", "O projeto foi editado com sucesso");
      });
  };
  return (
    <EditProjectComponent
      handleSubmit={editProject}
      navigation={navigation}
      route={route}
    />
  );
}
