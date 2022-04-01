import { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import color from "../constants/color";
import {
  Project,
  ProjectAdded,
  RequiredFieldsProject,
} from "../interfaces/Project";
import { RequirementAdd } from "../interfaces/Requirement";
import { baseService } from "../service/base-service";
import { MaterialIcons } from "@expo/vector-icons";
import { Masks, useMaskedInputProps } from "react-native-mask-input";
import moment from "moment";
type EditProjectComponentProps = {
  handleSubmit: (
    project: Project,
    requirements: Number[],
    project_id: number
  ) => void;
  navigation: any;
  route: any;
};

type RequirementDTO = {
  name: string;
  id: number;
};

export default function EditProjectComponent({
  handleSubmit,
  navigation,
  route,
}: EditProjectComponentProps) {
  const [requirements, setRequirements] = useState<number[]>([]);
  const [releaseDate, setReleaseDate] = useState("");
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [fetchedRequirements, setFetchedRequirements] = useState<
    RequirementDTO[]
  >([]);

  const { project_id } = route.params;

  const fetchRequirements = () => {
    baseService
      .get<RequirementAdd[]>("requirement")
      .then((res) => {
        const requirementDTO = res.data.map((requirement) => {
          return { id: requirement.id, name: requirement.description };
        });
        setFetchedRequirements(requirementDTO);
      })
      .catch((err) => {});
  };

  const fetchProject = () => {
    if (project_id) {
      baseService
        .get<ProjectAdded>(`project/${project_id}`)
        .then((res) => {
          const project = res.data;
          setProjectName(res.data.name);
          setReleaseDate(moment(res.data.release_date).format("DD/MM/YYYY"));
          setStartDate(moment(res.data.start_date).format("DD/MM/YYYY"));
          setRequirements(
            project.projectRequirements.map((pJ) => pJ.requirement.id)
          );
        })
        .catch((err) => {});
    }
  };

  useEffect(() => {
    fetchRequirements();
    fetchProject();
  }, [project_id]);

  const releaseDateProps = useMaskedInputProps({
    value: releaseDate,
    onChangeText: setReleaseDate,
    mask: Masks.DATE_DDMMYYYY,
  });

  const startDateProps = useMaskedInputProps({
    value: startDate,
    onChangeText: setStartDate,
    mask: Masks.DATE_DDMMYYYY,
  });

  const edit = () => {
    handleSubmit(
      { name: projectName, release_date: releaseDate, start_date: startDate },
      requirements,
      project_id
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.titleView}>
        <Text style={styles.titleScreen}>Criar projeto</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            placeholder="Informe o nome"
            style={styles.input}
            value={projectName}
            onChangeText={(name) => setProjectName(name)}
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            {...releaseDateProps}
            placeholder="Informe a data de entrega"
            style={styles.input}
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            {...startDateProps}
            placeholder="Informe a data de comeco"
            keyboardType="number-pad"
            style={styles.input}
            selectionColor="blue"
            underlineColorAndroid={color.primary_color}
          />
        </View>

        <View style={styles.row}>
          <Text> Escolha os requerimentos </Text>
          <SectionedMultiSelect
            IconRenderer={MaterialIcons}
            items={fetchedRequirements}
            uniqueKey="id"
            showDropDowns={true}
            selectedItems={requirements}
            selectedText="Selecione"
            confirmText="Confirmar"
            alwaysShowSelectText={true}
            onSelectedItemsChange={(items) => {
              setRequirements(items);
            }}
            selectText="Escolha um requerimento"
          />
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={edit}>
            <Text style={styles.text}> Salvar </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  titleView: {
    borderRadius: 5,
    top: 10,
    alignSelf: "center",
    width: "70%",
    backgroundColor: "#fff7e0",
    padding: 10,
  },
  titleScreen: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    padding: 10,
  },
  button: {
    marginBottom: 5,
    width: 200,
    padding: 20,
    backgroundColor: color.primary_color,
    color: "white",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
