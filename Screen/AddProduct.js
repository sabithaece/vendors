import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import colors from "./component/colors";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [origin, setOrigin] = useState("");
  const [branch, setBranch] = useState("");

  const dropdownData = {
    category: ["Category 1", "Category 2"],
    brand: ["Brand 1", "Brand 2"],
    origin: ["Origin 1", "Origin 2"],
    branch: ["Branch 1", "Branch 2"],
  };

  const renderDropdown = (data, selectedValue, setValue, placeholder) => (
    <View style={styles.dropdownContainer}>
      <ModalDropdown
        options={data}
        onSelect={(index, value) => setValue(value)}
        defaultValue={placeholder}
        textStyle={styles.dropdownText}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={styles.dropdownItemText}
        dropdownTextHighlightStyle={styles.dropdownItemHighlight}
      />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Product Name */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter product name *"
        />
      </View>

      {/* Product Category */}
      <View style={styles.inputContainer}>
        {renderDropdown(
          dropdownData.category,
          category,
          setCategory,
          "Select Product Category *"
        )}
      </View>

      {/* Product Brand */}
      <View style={styles.inputContainer}>
        {renderDropdown(dropdownData.brand, brand, setBrand, "Select Product Brand *")}
      </View>

      {/* Product Length */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter product length *"
        />
      </View>

      {/* Product Breadth */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter product breadth *"
        />
      </View>

      {/* Product Height */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter product height *"
        />
      </View>

      {/* Product Weight */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter product weight *"
        />
      </View>

      {/* Origin */}
      <View style={styles.inputContainer}>
        {renderDropdown(dropdownData.origin, origin, setOrigin, "Select Origin *")}
      </View>

      {/* Shop/Branch */}
      <View style={styles.inputContainer}>
        {renderDropdown(
          dropdownData.branch,
          branch,
          setBranch,
          "Select Shop/Branch *"
        )}
      </View>

      {/* Add Product Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 20,
    fontSize: 14,
    backgroundColor: "#fff",
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    padding: 20,
  },
  dropdownText: {
    fontSize: 14,
    color: "#333",
  },
  dropdown: {
    width: "90%",
    borderRadius: 8,
    marginTop: 8,
    padding: 8,
  },
  dropdownItemText: {
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  dropdownItemHighlight: {
    color: "#007AFF",
  },
  addButton: {
    backgroundColor: colors.button,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
    width: "100%",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddProduct;
