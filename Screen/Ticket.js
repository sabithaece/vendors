import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "./component/colors";

const Ticket = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Icon
          name="arrow-left"
          size={20}
          color="#fff"
          onPress={() => navigation.goBack()}
        />
      </View>

      {/* Ticket Content */}
      <View style={styles.contentContainer}>
        <View style={styles.card}>
          {/* Ticket Icon */}
          <View style={styles.iconContainer}>
            <Icon name="ticket" size={60} color="#248B6D" />
          </View>

          {/* Message */}
          <Text style={styles.title}>Your Ticket Has been Generated!</Text>
          <Text style={styles.subtitle}>
            Our representative will contact you in 48 hours!
          </Text>

          {/* Notification Info */}
          <View style={styles.notificationContainer}>
            <Icon name="bell" size={20} color="#248B6D" />
            <Text style={styles.notificationText}>
              We will keep you posted about the status of Your Ticket via
              Notifications
            </Text>
          </View>
        </View>
      </View>

      {/* View Ticket Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TicketList")}
      >
        <Text style={styles.buttonText}>View Your Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  // headerContainer: {
  //   backgroundColor: "#005580",
  //   paddingVertical: 15,
  //   paddingHorizontal: 16,
  //   flexDirection: "row",
  //   alignItems: "center",
  // },
  contentContainer: {
    flex: 1,
    // justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 140, // Adjust to fine-tune spacing from bottom
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "85%", // Optional to ensure consistency across devices
  },
  iconContainer: {
    backgroundColor: "#E9F5F9",
    padding: 20,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 16,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  notificationText: {
    fontSize: 12,
    color: "#555",
    marginLeft: 8,
    textAlign: "center",
    flex: 1,
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

export default Ticket;
