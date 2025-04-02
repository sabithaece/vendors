import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "./component/colors";
import registerData from "../Register.json"; // Import JSON data

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [data, setData] = useState(null);
  const [focusedField, setFocusedField] = useState(null); // Track focused field

  useEffect(() => {
    setData(registerData); // Load JSON data
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleRegister = () => {
    if (!agreeToTerms) {
      alert("You must agree to the terms and policies to register.");
      return;
    }
    navigation.navigate("Otp");
  };

  if (!data) return null; // Prevent rendering before data loads

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined} // Avoid screen jumping
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={{ uri: "https://via.placeholder.com/100" }}
            />
            <Text style={styles.subtitle}>{data.title}</Text>
          </View>

          {/* Form Fields from JSON */}
          <View style={styles.formContainer}>
            {data.fields.map((field) => (
              <View
                key={field.id}
                style={[
                  styles.inputContainer,
                  focusedField === field.id && styles.inputFocused, // Change background on focus
                ]}
              >
                <Icon name={field.icon} size={22} style={styles.icon} />
                <TextInput
                  style={[
                    styles.input,
                    field.id === "mobileNumber" && { color: "black" }, // Black text for mobile number
                  ]}
                  placeholder={field.placeholder}
                  keyboardType={field.keyboardType || "default"}
                  secureTextEntry={
                    field.secureTextEntry &&
                    (field.id === "password"
                      ? !passwordVisible
                      : !confirmPasswordVisible)
                  }
                  onChangeText={(value) => handleInputChange(field.id, value)}
                  onFocus={() => setFocusedField(field.id)}
                  onBlur={() => setFocusedField(null)}
                />
                {field.secureTextEntry && (
                  <TouchableOpacity
                    onPress={() =>
                      field.id === "password"
                        ? setPasswordVisible(!passwordVisible)
                        : setConfirmPasswordVisible(!confirmPasswordVisible)
                    }
                  >
                    <Icon
                      name={
                        (
                          field.id === "password"
                            ? passwordVisible
                            : confirmPasswordVisible
                        )
                          ? "eye-outline"
                          : "eye-off-outline"
                      }
                      size={22}
                      color="#248B6D"
                    />
                  </TouchableOpacity>
                )}
              </View>
            ))}

            {/* Agree to Terms */}
            <View style={styles.checkboxContainer}>
              <TouchableOpacity
                onPress={() => setAgreeToTerms(!agreeToTerms)}
                style={styles.checkbox}
              >
                <Icon
                  name={
                    agreeToTerms
                      ? "checkbox-marked-outline"
                      : "checkbox-blank-outline"
                  }
                  size={22}
                  color="#248B6D"
                />
              </TouchableOpacity>
              <Text style={styles.checkboxText}>
                I agree with{" "}
                <Text style={styles.linkText}>Terms and Policies</Text> of
                Cellula.
              </Text>
            </View>

            {/* Register Button */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >
              <Text style={styles.registerButtonText}>
                {data.registerButton}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#ccc",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  formContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: "#555",
  },
  linkText: {
    color: "#248B6D", // Terms and Policies in #248B6D
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: colors.button,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  registerButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterScreen;
