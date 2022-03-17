import React from "react";
import CreateRequirementComponent from "../components/CreateRequirementComponent";
import { Requirement } from "../interfaces/Requirement";
import { baseService } from "../service/base-service";
export default function Requirement({ navigation }: any) {
  const handleCreate = (requirement: Requirement) => {
    baseService
      .post<{ requirement: Requirement }, any>("requirement", { requirement })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <CreateRequirementComponent handleSubmit={(requirement) => {}} />;
}
