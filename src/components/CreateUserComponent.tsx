import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import color from "../constants/color";
import { User } from "../interfaces/User";
type CreateUserComponentProps = {
  handleSubmit: (user: User) => void;
};
export default function CreateUserComponent({
  handleSubmit,
}: CreateUserComponentProps) {
  const [user, setUser] = useState<User>({
    password: "",
    email: "",
    name: "",
  });

  return (
    <>
      <View style={styles.view}>
        <TextInput
          style={[styles.inputStyled, { marginBottom: 5 }]}
          placeholder="Nome"
          keyboardAppearance="dark"
          value={user.name}
          onChangeText={(value) => {
            setUser((currentUser) => {
              let newUser = Object.assign({}, currentUser);
              newUser.name = value;
              return newUser;
            });
          }}
        />

        <TextInput
          style={[styles.inputStyled, { marginBottom: 5 }]}
          placeholder="Email"
          keyboardAppearance="dark"
          value={user.email}
          onChangeText={(value) => {
            setUser((currentUser) => {
              let newUser = Object.assign({}, currentUser);
              newUser.email = value;
              return newUser;
            });
          }}
        />
        <TextInput
          style={styles.inputStyled}
          value={user.password}
          secureTextEntry={true}
          placeholder="Senha"
          keyboardAppearance="dark"
          onChangeText={(value) => {
            setUser((currentUser) => {
              let newUser = Object.assign({}, currentUser);
              newUser.password = value;
              return newUser;
            });
          }}
        />
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonStyled}
            onPress={() => {
              handleSubmit(user);
            }}>
            <Text style={styles.styledText}> Criar conta </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4.0,
    elevation: 5,
    width: "100%",
  },
  buttonStyled: {
    marginTop: 10,
    backgroundColor: color.primary_color,
    borderRadius: 5,
    width: "100%",
    padding: 15,
  },
  styledText: {
    color: "white",
    textAlign: "center",
  },
  inputStyled: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#b0b4b5",
    borderRadius: 5,
    padding: 5,
  },
});
