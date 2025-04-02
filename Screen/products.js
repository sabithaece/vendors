import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import BottomNav from "./component/BottomNav";

const Products = ({ navigation }) => {
  const [isPublished, setIsPublished] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [tempPublishState, setTempPublishState] = useState(null);

  const togglePublished = () => {
    setModalVisible(true);
    setTempPublishState(!isPublished);
  };

  const confirmToggle = () => {
    setIsPublished(tempPublishState);
    setModalVisible(false);
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Products</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.iconButton}
            >
              <Image
                source={require("../assets/talk.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
              style={styles.iconButton}
            >
              <Image
                source={require("../assets/notification.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("AddProduct")}
          >
            <Image
              source={require("../assets/add-product.png")}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Add New Products</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => navigation.navigate("Upload")}
          >
            <Image
              source={require("../assets/bulk-upload.png")}
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>Bulk Upload Products</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonWide}>
            <Image
              source={require("../assets/demo-sheet.png")}
              style={styles.actionIconLarge}
            />
            <Text style={styles.actionText}>Download Demo Sheet</Text>
          </TouchableOpacity>
        </View>

        {/* Product List */}
        <View style={styles.productListHeader}>
          <Text style={styles.subHeader}>Products List</Text>
          <TouchableOpacity>
            <Text
              style={styles.seeAllText}
              onPress={() => navigation.navigate("Product")}
            >
              See All Products
            </Text>
          </TouchableOpacity>
        </View>

        {/* Product Card */}
        <View style={styles.productCard}>
          <View style={styles.productCardHeader}>
            <Text style={styles.productIndex}>1</Text>
            <Image
              source={require("../assets/water_bottle.png")}
              style={styles.productImage}
            />
          </View>
          <View style={styles.productDetails}>
            <Text style={styles.productName}>Water Bottle</Text>
            <Text style={styles.productCategory}>
              Kitchen & Dining ➔ Bottles
            </Text>
            <View style={styles.priceDetails}>
              <Text style={styles.priceText}>Unit Price: ₹100.00</Text>
              <Text style={styles.priceText}>Purchase Price: ₹150.00</Text>
              <Text style={styles.priceText}>GST: ✅</Text>
            </View>
            <Text style={styles.createdAt}>
              Created At: 8 Sep 2021 08:44 PM
            </Text>
          </View>
          <View style={styles.productActions}>
            <View style={styles.switchContainer}>
              <Switch
                value={isPublished}
                onValueChange={togglePublished}
                thumbColor={isPublished ? "#2CBF6D" : "#ccc"}
                trackColor={{ false: "#ddd", true: "#c8f7d3" }}
              />
              <Text style={styles.statusText}>
                {isPublished ? "Published" : "Unpublished"}
              </Text>
            </View>
            <View style={styles.actionIcons}>
              <TouchableOpacity>
                <AntDesign name="edit" size={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="delete" size={20} color="#FF6347" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Confirmation Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Are you sure you want to{" "}
              {tempPublishState ? "publish" : "unpublish"} this product?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmToggle}
              >
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeTab="products" />
    </>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingVertical: 30,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    // color: "#00478F",
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 15,
    top: -10,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  actionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    paddingBottom: 30,
  },
  actionButtonWide: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    paddingBottom: 30,
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  actionIconLarge: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "600",
    // color: "#00478F",
    textAlign: "center",
  },
  productListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 0,
    marginTop: 0,
    // color: "#00478F",
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#248B6D",
    top: 1,
  },
  productCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  productIndex: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#00478F",
    marginRight: 10,
    marginBottom: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  productDetails: {
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#00478F",
  },
  productCategory: {
    fontSize: 12,
    color: "#555555",
    marginBottom: 10,
  },
  priceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 12,
    color: "#555555",
  },
  createdAt: {
    fontSize: 12,
    color: "#555555",
  },
  productActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
    // color: "#2CBF6D",
  },
  actionIcons: {
    flexDirection: "row",
    gap: 15,
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#ccc",
  },
  confirmButton: {
    backgroundColor: "#2CBF6D",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Products;
