import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import colors from "./component/colors";

const ProfileEdit = ({ route, navigation }) => {
  const { profileDetails, onUpdate } = route.params;

  const [formData, setFormData] = useState({
    name: profileDetails.name || "",
    email: profileDetails.email || "",
    mobile: profileDetails.mobile || "",
    description: profileDetails.description || "",
    address: profileDetails.address || "",
    state: profileDetails.state || "",
    city: profileDetails.city || "",
    postalCode: profileDetails.postalCode || "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveProfile = () => {
    if (!formData.name || !formData.email || !formData.mobile) {
      Alert.alert("Error", "Name, Email, and Mobile Number are required!");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }
    onUpdate(formData);
    navigation.goBack();
  };

  const handleSaveAddress = () => {
    if (
      !formData.address ||
      !formData.state ||
      !formData.city ||
      !formData.postalCode
    ) {
      Alert.alert("Error", "Please fill all the address details!");
      return;
    }
    onUpdate(formData);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
     

      {/* Basic Details Section */}
      <Text style={styles.sectionHeader}>Basic Details</Text>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleInputChange("email", text)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={formData.mobile}
        onChangeText={(text) => handleInputChange("mobile", text)}
        placeholder="Mobile Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={formData.description}
        onChangeText={(text) => handleInputChange("description", text)}
        placeholder="Store Description"
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      {/* Communication Details Section */}
      <Text style={styles.sectionHeader}>Communication Details</Text>
      <TextInput
        style={styles.input}
        value={formData.address}
        onChangeText={(text) => handleInputChange("address", text)}
        placeholder="Your Address"
      />
      <TextInput
        style={styles.input}
        value={formData.state}
        onChangeText={(text) => handleInputChange("state", text)}
        placeholder="Please Select State"
      />
      <TextInput
        style={styles.input}
        value={formData.city}
        onChangeText={(text) => handleInputChange("city", text)}
        placeholder="Please Select City"
      />
      <TextInput
        style={styles.input}
        value={formData.postalCode}
        onChangeText={(text) => handleInputChange("postalCode", text)}
        placeholder="Postal Code"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSaveAddress}>
        <Text style={styles.buttonText}>Update Address</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    // color: "#004664",
    textAlign: "center",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#004664",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    // borderColor: "#004664",
    borderRadius: 5,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
    // color: "#4d7e93",
    
  },
  button: {
    backgroundColor:colors.button,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ProfileEdit;
