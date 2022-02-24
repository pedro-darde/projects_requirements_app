import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Requirement, RequirementFields } from "../interfaces/Requirement";
import colors from "../constants/color";
type CreateRequirementComponentProps = {
  handleSubmit: (requirement: Requirement) => void;
};
export default function CreateRequirementComponent({
  handleSubmit,
}: CreateRequirementComponentProps) {
  const [requirement, setRequirement] = useState<Requirement>({
    description: "",
    difficulty: "",
    estimated_time: "",
    importance: "",
  });

  const handleChangeState = (field: RequirementFields, value: string) => {
    setRequirement((currentRequirement) => {
      let newRequirement = Object.assign({}, currentRequirement);
      newRequirement[field] = value;
      return newRequirement;
    });
  };

  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: colors.primary_color,
    padding: 10,
  },
  row: {
    flexDirection: "row",
  },
});
