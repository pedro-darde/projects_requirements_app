import { Alert } from "react-native";
import LoginComponent from "../components/LoginComponent";
import { baseService } from "../service/base-service";

export default function OpenScreen({ navigation, route }: any) {
  const handleLogin = (email: string, password: string) => {
    baseService
      .post<{ email: string; password: string }, string>("/login", {
        email,
        password,
      })
      .then((res) => {
        navigation.navigate("Home", { token: res.data });
      })
      .catch((err) => {
        Alert.alert('Oops, ocorreu um erro', 'Valide seu e-mail e (ou) sua senha')
      });
  };

  return (
    <LoginComponent
      handleLogin={handleLogin}
      navigation={navigation}
      route={route}
    />
  );
}
