import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "./component/colors"; // Ensure this file exists
import signupData from "../SignUp.json"; // Import the JSON file

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(signupData); // Load JSON data
  }, []);

  if (!data) return null; // Prevent errors if data isn't loaded yet

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <View style={styles.logo} />
        <Text style={styles.title}>{data.title}</Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: data.buttons[0].backgroundColor,
            borderColor: data.buttons[0].borderColor || "transparent",
          },
        ]}
        onPress={() =>
          data.buttons[0].navigateTo &&
          navigation.navigate(data.buttons[0].navigateTo)
        }
      >
        <View style={styles.buttonContent}>
          <Text
            style={[styles.buttonText, { color: data.buttons[0].textColor }]}
          >
            {data.buttons[0].text}
          </Text>
        </View>
      </TouchableOpacity>

      {/* OR Text */}
      <Text style={styles.orText}>{data.orText}</Text>

      {/* Other Buttons from JSON */}
      {data.buttons.slice(1).map((button) => (
        <TouchableOpacity
          key={button.id}
          style={[
            styles.button,
            {
              backgroundColor: button.backgroundColor,
              borderColor: button.borderColor || "transparent",
            },
          ]}
          onPress={() =>
            button.navigateTo && navigation.navigate(button.navigateTo)
          }
        >
          <View style={styles.buttonContent}>
            {button.icon && (
              <Image source={{ uri: button.icon }} style={styles.icon} />
            )}
            <Text style={[styles.buttonText, { color: button.textColor }]}>
              {button.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      {/* Login Link */}
      <TouchableOpacity>
        <Text style={styles.loginLink}>
          {data.loginText} <Text style={styles.login}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
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
  button: {
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
    borderWidth: 1,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    paddingTop: 15,
    color: "#202020",
  },
  loginLink: {
    color: "#272727",
    fontSize: 16,
    paddingTop: 90,
  },
  login: {
    color: colors.button,
    textDecorationLine: "underline",
    fontSize: 16,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default SignUpScreen;
