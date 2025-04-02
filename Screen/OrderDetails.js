import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import colors from "./component/colors";

const OrderDetailsPage = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Order id: 20211028-04431133</Text>
      </View>

      {/* Order Status Section */}
      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Order Status</Text>
        <TouchableOpacity
          onPress={() => setIsCollapsed(!isCollapsed)}
          style={styles.collapsibleHeader}
        >
          <Text style={styles.collapsibleTitle}>Placed</Text>
        </TouchableOpacity>
        {isCollapsed && (
          <View style={styles.collapsibleContent}>
            <Text style={styles.collapsibleItem}>Unplaced</Text>
            <Text style={styles.collapsibleItem}>Pending</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.trackButton}>
        <Text style={styles.trackButtonText}>Track Order</Text>
      </TouchableOpacity>

      {/* Shipment Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipment Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Courier Name:</Text>
          <Text style={[styles.value, styles.underlinedGreen]}>
            Ecom Express
          </Text>
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Order Code:</Text>
          <Text style={styles.value}>20211028-04431133</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Customer:</Text>
          <Text style={[styles.value, styles.underlinedGreen]}>
            MOHIN SANDHI
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={[styles.value, styles.underlinedGreen]}>
            sandhimohin786@gmail.com
          </Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Shipping Address:</Text>
          <Text style={styles.value}>b , Ahmedabad , Gujarat</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Order date:</Text>
          <Text style={styles.value}>28-10-2021 16:10 PM</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Order status:</Text>
          <Text style={styles.value}>Placed</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Total Earning:</Text>
          <Text style={styles.value}>₹104.00</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Payment method:</Text>
          <Text style={styles.value}>Razorpay</Text>
        </View>
      </View>

      {/* Order Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Details</Text>
        <View style={styles.card}>
          <Image
            source={require("../assets/water_bottle.png")}
            style={styles.productImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.productTitle}>Water Bottle</Text>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Variation</Text>
              <Text style={styles.value}>106142</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Quantity</Text>
              <Text style={styles.value}>2</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.label}>Price</Text>
              <Text style={styles.value}>104</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    left: 110,
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  collapsibleHeader: {
    padding:10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    top:15,
  },
  collapsibleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  collapsibleContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#fafafa",
    borderRadius: 5,
  },
  collapsibleItem: {
    fontSize: 14,
    marginBottom: 5,
  },
  trackButton: {
    backgroundColor: colors.button,
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    width: "90%",
    right:-20,
  },
  trackButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: "#666666",
  },
  value: {
    fontSize: 14,
    color: "#333333",
    textAlign: "right",
    flex: 1,
    marginLeft: 20,
  },
  underlinedGreen: {
    textDecorationLine: "underline",
    color: "#248B6D",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default OrderDetailsPage;
