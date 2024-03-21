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
import { styles } from "./RegistrationScreen.styles";
import { useState } from "react";

export const RegistrationScreen = ({ navigation }) => {
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
          <Text style={styles.text}>Реєстрація</Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              onChangeText={setLogin}
            />
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
            <Pressable onPress={() => navigation.navigate("SingIn")}>
              <Text style={styles.singInText}>
                <Text>Вже є акаунт? </Text>
                <Text style={{ borderBottomWidth: 1 }}>Увійти</Text>
              </Text>
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </ImageBackground>
  );
};
