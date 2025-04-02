import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "./component/colors";
import otpData from "../Otp.json"; // Import the JSON file

const OTPScreen = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [data, setData] = useState(null);
  const inputRefs = useRef([]);
  const navigation = useNavigation();

  useEffect(() => {
    setData(otpData); // Load JSON data
  }, []);

  const handleInputChange = (value, index) => {
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);

    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    console.log("OTP Submitted:", otp.join(""));
    navigation.navigate("Onboarding", { vendor: "Vendor" });
  };

  if (!data) return null; // Prevent rendering before data loads

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo} />
        </View>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subTitle}>{data.subTitle}</Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(value) => handleInputChange(value, index)}
              ref={(ref) => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>

        <Text style={styles.infoText}>{data.infoText}</Text>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>{data.submitButton}</Text>
        </TouchableOpacity>

        <Text style={styles.info}>{data.info}</Text>

        <TouchableOpacity>
          <Text style={styles.link}>{data.resendText}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomLinkContainer}>
        <TouchableOpacity>
          <Text>
            <Text style={styles.clickHereText}>{data.loginText}</Text>
            <Text style={styles.link}> {data.loginLink}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: colors.button,
    marginBottom: 5,
    top: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  subTitle: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    paddingTop: 2,
  },
  infoText: {
    fontSize: 14,
    marginVertical: 10,
  },
  info: {
    fontSize: 14,
    color: "#000000",
    marginVertical: 10,
    paddingTop: 5,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 40,
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 18,
  },
  submitButton: {
    width: "80%",
    backgroundColor: colors.button,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginTop: 30,
  },
  submitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "#004664",
    fontSize: 14,
    textDecorationLine: "underline",
    paddingTop: 10,
  },
  clickHereText: {
    color: "#000",
    fontSize: 14,
  },
  bottomLinkContainer: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
});

export default OTPScreen;
