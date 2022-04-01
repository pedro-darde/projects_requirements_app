import { useEffect, useState } from "react";
import { RequirementAdd } from "../interfaces/Requirement";
import { baseService } from "../service/base-service";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import ListRequirementComponent from "../components/ListRequirementComponent";
export default function RequirementList({ navigation }: any) {
  const [requirements, setRequirements] = useState<RequirementAdd[]>([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    baseService.get<RequirementAdd[]>("requirement").then((res) => {
      setRequirements(res.data);
    });
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListRequirementComponent
        requirements={requirements}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
