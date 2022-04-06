import { Alert } from "react-native";
import CreateUserComponent from "../components/CreateUserComponent";
import { User, UserAdd } from "../interfaces/User";
import { baseService } from "../service/base-service";

export default function CreateAccountScreen({ navigation }: any) {
  const handleCreate = (user: User) => {
    baseService
      .post<{ user: User }, UserAdd>("user", { user })
      .then((res) => {
        Alert.alert("Sucesso", "Usuário criado com sucesso");
        navigation.navigate("OpenScreen", {
          currentEmail: user.email,
          currentPassword: user.password,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <CreateUserComponent handleSubmit={handleCreate} />;
}
