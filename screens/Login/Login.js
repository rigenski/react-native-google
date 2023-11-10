import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

export default function Login({ setIsLogin }) {
  const handleAuthLogin = async () => {
    setIsLogin(true);
  };

  return (
    <View style={styles.form}>
      <View style={styles.formHeader}>
        <Text style={styles.formHeaderTitle}>Login</Text>
        <Text style={styles.formHeaderSubtitle}>Signin to join app</Text>
      </View>
      <TouchableOpacity style={styles.formButton} onPress={handleAuthLogin}>
        <Image
          source={require("./../../assets/icons/google.png")}
          style={styles.formButtonIcon}
        />
        <Text style={styles.formButtonText}>Login With Google</Text>
      </TouchableOpacity>
    </View>
  );
}
