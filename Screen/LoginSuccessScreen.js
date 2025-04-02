import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "./component/colors";

const LoginSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
        <Text style={styles.title}>Daily Drop</Text>
      </View>

      {/* Tick Image */}
      <Image style={styles.tickImage} source={require("../assets/tick.jpg")} />

      {/* Success Message */}
      <View style={styles.textContainer}>
        <Text style={styles.successMessage}>Thank You For</Text>
        <Text style={styles.successMessage}>Becoming a Daily Drop Vendor</Text>
      </View>
      <Text style={styles.subtitle}>
        We will shortly notify you in your mail about the approval of your
        profile.
      </Text>

      {/* Check Mail Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Dashboard"); // Navigate to DashboardScreen
        }}
      >
        <Text style={styles.buttonText}>Check Mail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: colors.button,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  tickImage: {
    width: 170,
    height: 170,
    marginVertical: 20,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#004664",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    // color: "#6690a2",
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: colors.button,
    width: 355,
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 50,
    top: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginSuccessScreen;
