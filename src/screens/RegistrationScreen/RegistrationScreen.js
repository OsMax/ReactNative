import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { styles } from "./RegistrationScreen.styles";

export const RegistrationScreen = () => {
  console.log(styles.text);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Test registration screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};
