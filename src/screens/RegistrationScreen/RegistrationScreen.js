import { StatusBar } from "expo-status-bar";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  Pressable,
  ImageBackground,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { styles } from "./RegistrationScreen.styles";
import { useState } from "react";

export const RegistrationScreen = ({ navigation }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);

  const submit = () => {
    console.log(login, email, password);
  };

  return (
    <ImageBackground
      style={styles.imgBack}
      source={require("../../../assets/images/background.webp")}
      resizeMode="cover"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <KeyboardAvoidingView
                style={styles.inputContainer}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Логін"
                  onChangeText={setLogin}
                  placeholderTextColor="#BDBDBD"
                />
                <TextInput
                  inputMode="email"
                  style={styles.input}
                  placeholder="Адреса електронної пошти"
                  onChangeText={setEmail}
                  placeholderTextColor="#BDBDBD"
                />
                <View style={styles.passContainer}>
                  <TextInput
                    secureTextEntry={hidePass}
                    style={styles.input}
                    placeholder="Пароль"
                    onChangeText={setPassword}
                    placeholderTextColor="#BDBDBD"
                  />
                  <Pressable
                    style={styles.passBtn}
                    onPressIn={() => setHidePass(false)}
                    onPressOut={() => setHidePass(true)}
                  >
                    <Text>Показати</Text>
                  </Pressable>
                </View>
              </KeyboardAvoidingView>
              <Pressable style={styles.singUpBtn} onPress={submit}>
                <Text style={styles.singUpText}>Зареєстуватися</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("SingIn")}>
                <Text style={styles.singInText}>
                  <Text>Вже є акаунт? </Text>
                  <Text style={{ textDecorationLine: "underline" }}>
                    Увійти
                  </Text>
                </Text>
              </Pressable>
            </View>
          </View>
          <StatusBar style="auto" />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
