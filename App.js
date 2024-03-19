import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { RegistrationScreen } from "./src/screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>I am durbecelo!!!</Text>
      <Text>VERY BIG DURBECELO!!!!!</Text>
      <Text>But i'm do it....</Text>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
  },
});
