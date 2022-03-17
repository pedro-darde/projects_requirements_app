import React from "react";
import { Alert } from "react-native";
import CreateRequirementComponent from "../components/CreateRequirementComponent";
import { Requirement as ReqType } from "../interfaces/Requirement";
import { baseService } from "../service/base-service";
export default function Requirement({ navigation }: any) {
  const handleCreate = (requirement: ReqType) => {
    baseService
      .post<{ requirement: ReqType }, any>("requirement", { requirement })
      .then((res) => {
        Alert.alert("Sucesso!", "O requiremento foi criado com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <CreateRequirementComponent handleSubmit={handleCreate} />;
}
