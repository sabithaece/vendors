import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PaymentHistory = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>Bank Transfer</Text>
        <Text style={styles.tabText}>UPI Payment</Text>
        <Text style={styles.tabText}>Credit Card Payment</Text>
      </View>

      {/* Payment Details Card */}
      <View style={styles.paymentCard}>
        {/* Top Row */}
        <View style={styles.topRow}>
          <View style={styles.accountInfo}>
            <Text style={styles.label}>Account Number</Text>
            <Text style={styles.value}>3484345334432321</Text>
          </View>
          <Text style={styles.amount}>₹ 230.44</Text>
        </View>
        {/* Bank Name and Date Row */}
        <View style={styles.bankDateRow}>
          {/* Bank Name */}
          <View style={styles.paymentRow}>
            <Text style={styles.label}>Bank Name</Text>
            <Text style={styles.value}>Kotak Mahindra Bank</Text>
          </View>
          {/* Date */}
          <View style={styles.dateRow}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.date}>7 Feb 2022 11:33 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    marginBottom: -15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004c66",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tabText: {
    fontSize: 14,
    color: "#7a7a7a",
    fontWeight: "bold",
  },
  activeTab: {
    color: "#248B6D",
  },
  paymentCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  accountInfo: {
    flex: 1,
  },
  bankDateRow: {
    flexDirection: "row",
    justifyContent: "space-between",  // Ensures Bank Name and Date are spaced apart
  },
  paymentRow: {
    flexDirection: "column",
    marginBottom: 5,  // Adjusted to reduce space between rows
  },
  dateRow: {
    flexDirection: "column",
    alignItems: "flex-end",  // Aligns the Date label and value to the right
  },
  label: {
    fontSize: 14,
    color: "#7a7a7a",
    paddingRight: "85",
  },
  value: {
    fontSize: 14,
    color: "#004c66",
    fontWeight: "bold",
    marginTop: 5,
  },
  amount: {
    fontSize: 18,
    color: "#004c66",
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "#7a7a7a",
    marginTop: 5,
  },
});

export default PaymentHistory;
