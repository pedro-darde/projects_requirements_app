import { CameraCapturedPicture } from "expo-camera";
import React from "react";
import { Alert } from "react-native";
import EditRequirementComponent from "../components/EditRequirementComponent";
import { Requirement as ReqType } from "../interfaces/Requirement";
import { baseService } from "../service/base-service";
export default function ShowRequirement({ navigation, route }: any) {
  const handleSubmit = (requirement: ReqType, requirement_id: number) => {
    baseService
      .patch(`requirement/${requirement_id}`, { requirement })
      .then((res) => {
        Alert.alert("Sucesso", "O requerimento foi editado com sucesso");
      });
  };
  return (
    <EditRequirementComponent
      handleSubmit={handleSubmit}
      navigation={navigation}
      route={route}
    />
  );
}
