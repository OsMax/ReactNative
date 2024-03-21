import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  Pressable,
  ImageBackground,
  TextInput,
} from "react-native";
import { styles } from "./LoginScreen.styles";
import { useState } from "react";

export const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarImg}></View>
            <Image
              style={styles.avatarBtn}
              source={require("../../../assets/images/add.png")}
            />
          </View>
          <Text style={styles.text}>Увійти</Text>
          <View style={styles.form}>
            <TextInput
              inputMode="email"
              style={styles.input}
              placeholder="Адреса електронної пошти"
              onChangeText={setEmail}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.input}
              placeholder="Пароль"
              onChangeText={setPassword}
            />
            <Pressable
              style={styles.singUpBtn}
              onPress={() => console.log(login, email, password)}
            >
              <Text style={styles.singUpText}>Зареєстуватися</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("SingUp")}>
              <Text style={styles.singInText}>
                <Text>Немає акаунту? </Text>
                <Text style={{ borderBottomWidth: 1 }}>Зареєструватися</Text>
              </Text>
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
};
