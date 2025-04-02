import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const SupportTicket = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Create Ticket Section */}
      <TouchableOpacity
        style={styles.createTicketCard}
        onPress={() => navigation.navigate("GenerateTicket")} // Navigate to GenerateTicket page
      >
        <Image
          source={require("../assets/SupportTicket.png")} // Updated to use local asset
          style={styles.ticketImage}
        />
        <Text style={styles.createTicketText}>Create A Ticket</Text>
      </TouchableOpacity>

      {/* Ticket Details Section */}
      <View style={styles.ticketDetailsCard}>
        <View style={styles.ticketRow}>
          <View style={styles.ticketColumn}>
            <Text style={styles.ticketLabel}>Ticket ID</Text>
            <Text style={styles.ticketValue}>#423415</Text>
          </View>
          <View style={styles.ticketColumn}>
            <Text style={styles.ticketLabel}>Subject</Text>
            <Text style={styles.ticketValue}>Order Placement issue</Text>
          </View>
        </View>
        <View style={styles.ticketRow}>
          <View style={styles.ticketColumn}>
            <Text style={styles.ticketLabel}>Status</Text>
            <Text style={[styles.ticketValue, styles.statusOpen]}>Open</Text>
          </View>
          <View style={styles.ticketColumn}>
            <Text style={styles.ticketLabel}>CreatedAt</Text>
            <Text style={styles.ticketValue}>7 Feb 2022 05:34 PM</Text>
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
  createTicketCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 30,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  ticketImage: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },
  createTicketText: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#004c66",
  },
  ticketDetailsCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  ticketRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  ticketColumn: {
    flex: 1,
    marginHorizontal: 8,
  },
  ticketLabel: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 5,
  },
  ticketValue: {
    fontSize: 14,
    // color: "#004c66",
    fontWeight: "bold",
  },
  statusOpen: {
    color: "#248B6D",
  },
});

export default SupportTicket;
