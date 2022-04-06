import { useEffect, useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import color from "../constants/color";

type LoginComponentProps = {
  handleLogin: (email: string, password: string) => void;
  navigation: any;
  route: any;
};
export default function LoginComponent({
  handleLogin,
  navigation,
  route,
}: LoginComponentProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (route.params && route.params.currentEmail) {
      setEmail(route.params.currentEmail);
    }
    if (route.params && route.params.currentPassword) {
      setPassword(route.params.currentPassword);
    }
  }, [route.params]);

  const login = () => {
    if (!email) {
      Alert.alert("Oops", "Voce precisa informar seu email");
      return;
    }
    if (!password) {
      Alert.alert("Oops", "Voce precisa informar sua senha");
      return;
    }

    handleLogin(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleScreen}> Login </Text>
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Informe seu e-mail"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            placeholder="Informe sua senha"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.signIn}> Entrar </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CreateAccount");
            }}>
            <Text style={styles.link}>
              {" "}
              Ainda nao possui uma conta ? Registre-se{" "}
            </Text>
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
    textAlign: "center",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  link: {
    fontSize: 15,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  },
  signIn: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
