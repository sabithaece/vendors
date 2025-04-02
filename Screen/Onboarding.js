import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "./component/colors";

const VendorOnboardingScreen = ({ route, navigation }) => {
  const { vendor } = route.params;
  const [entityType, setEntityType] = useState("");
  const [businessType, setBusinessType] = useState("Business");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [city, setCity] = useState("");
  const [certificates, setCertificates] = useState("Yes");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [category, setCategory] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // This state tracks which dropdown is open ("state", "city", "category", or "")
  const [openDropdown, setOpenDropdown] = useState("");

  // Toggle the dropdown. If the same dropdown is tapped again, close it.
  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? "" : dropdownName);
  };

  const handleFileUpload = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === "success") {
      setUploadedFiles((prev) => [...prev, result]);
    }
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log({
      businessType,
      name,
      businessName,
      email,
      selectedState,
      city,
      certificates,
      category,
      uploadedFiles,
    });
    navigation.navigate("LoginSuccessScreen");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Vendor Onboarding Details</Text>
      <Text style={styles.subTitle}>
        Enter your vendor details in below filed
      </Text>

      {/* Business / Individual toggle */}
      {/* Business Entity Type Dropdown */}
      <View>
        <TouchableOpacity
          style={styles.input}
          onPress={() => toggleDropdown("entityType")}
        >
          <Text style={styles.inputText}>
            {entityType || "Please Select Business Entity Type"}
          </Text>
        </TouchableOpacity>
        {openDropdown === "entityType" && (
          <View style={styles.pickerDropdown}>
            <TouchableOpacity
              onPress={() => {
                setEntityType("Private Limited Company");
                toggleDropdown("entityType");
              }}
            >
              <Text style={styles.pickerItem}>Private Limited Company</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setEntityType("Limited Liability Partnership");
                toggleDropdown("entityType");
              }}
            >
              <Text style={styles.pickerItem}>
                Limited Liability Partnership
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setEntityType("One Person Company");
                toggleDropdown("entityType");
              }}
            >
              <Text style={styles.pickerItem}>One Person Company</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setEntityType("Sole Proprietorship");
                toggleDropdown("entityType");
              }}
            >
              <Text style={styles.pickerItem}>Sole Proprietorship</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setEntityType("Partnership");
                toggleDropdown("entityType");
              }}
            >
              <Text style={styles.pickerItem}>Partnership</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Name, Business Name & Email */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Business Name"
        value={businessName}
        onChangeText={setBusinessName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* State Dropdown */}
      <View>
        <TouchableOpacity
          style={styles.input}
          onPress={() => toggleDropdown("state")}
        >
          <Text style={styles.inputText}>
            {selectedState || "Please Select State"}
          </Text>
        </TouchableOpacity>
        {openDropdown === "state" && (
          <View style={styles.pickerDropdown}>
            <TouchableOpacity
              onPress={() => {
                setSelectedState("Tamil Nadu");
                toggleDropdown("state");
              }}
            >
              <Text style={styles.pickerItem}>Tamil Nadu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedState("Kerala");
                toggleDropdown("state");
              }}
            >
              <Text style={styles.pickerItem}>Kerala</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* City Dropdown */}
      <View>
        <TouchableOpacity
          style={styles.input}
          onPress={() => toggleDropdown("city")}
        >
          <Text style={styles.inputText}>{city || "Please Select City"}</Text>
        </TouchableOpacity>
        {openDropdown === "city" && (
          <View style={styles.pickerDropdown}>
            <TouchableOpacity
              onPress={() => {
                setCity("Chennai");
                toggleDropdown("city");
              }}
            >
              <Text style={styles.pickerItem}>Chennai</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCity("Coimbatore");
                toggleDropdown("city");
              }}
            >
              <Text style={styles.pickerItem}>Coimbatore</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Certificates Toggle */}
      <Text style={styles.label}>
        Do you have relevant valid certificates and licenses?
      </Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => setCertificates("Yes")}
        >
          {certificates === "Yes" ? (
            <Icon name="check-circle" size={24} color="#248B6D" />
          ) : (
            <Icon name="radio-button-unchecked" size={24} />
          )}
          <Text style={styles.toggleText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toggleOption}
          onPress={() => setCertificates("No")}
        >
          {certificates === "No" ? (
            <Icon name="check-circle" size={24} color="#248B6D" />
          ) : (
            <Icon name="radio-button-unchecked" size={24} />
          )}
          <Text style={styles.toggleText}>I will upload later</Text>
        </TouchableOpacity>
      </View>

      {/* File Upload Section */}
      {certificates === "Yes" && (
        <>
          <View>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleFileUpload}
            >
              <Text style={styles.uploadText}>Upload File</Text>
              <Image
                source={require("../assets/arow.png")}
                style={styles.uploadIcon}
              />
            </TouchableOpacity>
            <View style={styles.fileListContainer}>
              {uploadedFiles.map((file, index) => (
                <View key={index} style={styles.uploadPreviewContainer}>
                  <Text style={styles.uploadedFileName}>{file.name}</Text>
                  <TouchableOpacity onPress={() => handleRemoveFile(index)}>
                    <Icon name="close" size={24} color="#d9534f" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        </>
      )}

      {/* Category Dropdown */}
      <View>
        <TouchableOpacity
          style={styles.input}
          onPress={() => toggleDropdown("category")}
        >
          <Text style={styles.inputText}>
            {category || "Please Select Category"}
          </Text>
        </TouchableOpacity>
        {openDropdown === "category" && (
          <View style={styles.pickerDropdown}>
            <TouchableOpacity
              onPress={() => {
                setCategory("Customer");
                toggleDropdown("category");
              }}
            >
              <Text style={styles.pickerItem}>Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCategory("Business");
                toggleDropdown("category");
              }}
            >
              <Text style={styles.pickerItem}>Business</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          onPress={() => setIsChecked(!isChecked)}
          style={styles.checkbox}
        >
          {isChecked ? (
            <Icon name="check-box" size={24} color="#248B6D" />
          ) : (
            <Icon name="check-box-outline-blank" size={24} />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxText}>
          I agree with the terms and policies of Cellula
        </Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: "#f7faff", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold" },
  subTitle: { fontSize: 16, marginVertical: 10 },
  toggleContainer: { flexDirection: "row", marginVertical: 20 },
  toggleOption: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  toggleText: { fontSize: 16, marginLeft: 10 },
  input: { borderWidth: 1, borderRadius: 5, padding: 15, marginBottom: 15 },
  inputText: { color: "#555" },
  pickerDropdown: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 5,
  },
  pickerItem: { padding: 10 },
  label: { marginBottom: 10 },
  uploadButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
  },
  uploadIcon: { width: 24, height: 24 },
  uploadText: {},
  fileListContainer: { marginTop: 10 },
  uploadPreviewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  uploadedFileName: { flex: 1, marginRight: 10 },
  submitButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.button,
    alignItems: "center",
    // top:50,
  },
  submitText: { color: "white", fontWeight: "bold" },
  checkboxContainer: { flexDirection: "row", marginBottom: 20 },
  checkbox: { marginRight: 10 },
  checkboxText: { fontSize: 14, color: "#555" },
});

export default VendorOnboardingScreen;
