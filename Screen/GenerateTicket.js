import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "./component/colors";

const GenerateTicket = () => {
  const [module, setModule] = useState(""); // Selected module
  const [question, setQuestion] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [isModuleDropdownOpen, setIsModuleDropdownOpen] = useState(false); // To toggle the dropdown

  const navigation = useNavigation();

  const handleCreateTicket = () => {
    console.log({ module, question, subject, description });
    navigation.navigate("Ticket");
  };

  const moduleOptions = ["Module 1", "Module 2", "Module 3"]; // List of modules

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.wrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.contentContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/GenerateTicket.jpg")}
                style={styles.icon}
              />
            </View>

            <Text style={styles.title}>Generate New Ticket</Text>
            <Text style={styles.subtitle}>
              Define your problem here to generate
            </Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Module <Text style={styles.required}>*</Text>
              </Text>

              {/* Collapsible Module Dropdown */}
              <TouchableOpacity
                style={styles.dropdownButton}
                onPress={() => setIsModuleDropdownOpen(!isModuleDropdownOpen)}
              >
                <Text style={styles.dropdownButtonText}>
                  {module || "Select Module"}
                </Text>
              </TouchableOpacity>
              {isModuleDropdownOpen && (
                <View style={styles.dropdownOptions}>
                  {moduleOptions.map((option, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownOption}
                      onPress={() => {
                        setModule(option);
                        setIsModuleDropdownOpen(false); // Close dropdown after selection
                      }}
                    >
                      <Text style={styles.dropdownOptionText}>{option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              <TextInput
                style={styles.input}
                placeholder="Questions"
                value={question}
                onChangeText={setQuestion}
              />

              <TextInput
                style={styles.input}
                placeholder="Subject"
                value={subject}
                onChangeText={setSubject}
              />

              <TextInput
                style={styles.textarea}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                multiline
                numberOfLines={4}
              />
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity style={styles.button} onPress={handleCreateTicket}>
          <Text style={styles.buttonText}>Created Ticket</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f8fb",
  },
  wrapper: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16, // Extra padding for scroll content
  },
  contentContainer: {
    backgroundColor: "#f6f8fb",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  icon: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginVertical: 8,
  },
  inputContainer: {
    marginVertical: 16,
    backgroundColor: "#f6f8fb",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  required: {
    color: "red",
  },
  dropdownButton: {
    borderWidth: 1,
    // borderColor: "#004664",
    borderRadius: 5,
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#fff",
  },
  dropdownButtonText: {
    fontSize: 14,
    color: "#333",
  },
  dropdownOptions: {
    borderWidth: 1,
    // borderColor: "#004664",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  dropdownOption: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownOptionText: {
    fontSize: 14,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
  textarea: {
    borderWidth: 1,
    // borderColor: "#004664",
    borderRadius: 5,
    padding: 12,
    textAlignVertical: "top",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: colors.button,
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    position: "absolute",
    bottom: 26,
    left: 16,
    right: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GenerateTicket;
