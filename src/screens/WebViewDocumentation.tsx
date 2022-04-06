import { useEffect } from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

type ModalWebViewProps = {
  navigation: any;
  route: any;
};
export default function WebViewDocumentation({ navigation, route }: ModalWebViewProps) {
  const { webViewSource } = route.params;
  return (
    <View style={styles.modalContainer}>
      <WebView
        source={{ uri: webViewSource, method: "GET" }}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  modalContainer: {
    backgroundColor: "white",
    width: "90%",
    height: "90%",
  },
});
