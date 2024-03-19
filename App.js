import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
} from "react-native";
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
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
        source={"./assets/images/background.webp"}
        resizeMode="cover"
      >
        <Text style={styles.text}>I am durbecelo!!!</Text>
        <Text>VERY BIG DURBECELO!!!!!</Text>
        <Text>But i'm do it....</Text>
        <StatusBar style="auto" />
        <RegistrationScreen />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontFamily: "Roboto-Black",
    fontSize: 30,
  },
});
