import { CameraCapturedPicture } from "expo-camera";
import React from "react";
import { Alert, ImageStore } from "react-native";
import CreateRequirementComponent from "../components/CreateRequirementComponent";
import { Requirement as ReqType } from "../interfaces/Requirement";
import { baseService } from "../service/base-service";
export default function Requirement({ navigation }: any) {
  const handleCreate = (
    requirement: ReqType,
    pictures: CameraCapturedPicture[]
  ) => {
    let formData = new FormData();
    formData.append("requirement", JSON.stringify(requirement));
    console.log(requirement)
    pictures.forEach((picture) => {
      let uriParts = picture.uri.split(".");
      let fileType = uriParts[uriParts.length - 1];
      formData.append("images", {
        type: "multipart/form-data",
        uri: picture.uri,
        name: Date.now() + "_requirement." + fileType,
      });
    });

    fetch("http://192.168.15.14:3335/api/requirement", {
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    })
      .then((res) => {
        Alert.alert("Sucesso!", "O requiremento foi criado com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <CreateRequirementComponent handleSubmit={handleCreate} />;
}
