import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "./component/colors";

const TicketList = ({ navigation }) => {
  const tickets = [
    {
      id: "1",
      ticketNumber: "#23423432432",
      title: "Having issue in Shopping",
      date: "8 Sep 2021 08:44 PM",
      status: "Pending",
    },
    {
      id: "2",
      ticketNumber: "#23423432432",
      title: "My Order is not placed",
      date: "8 Sep 2021 08:44 PM",
      status: "Closed",
    },
    {
      id: "3",
      ticketNumber: "#23423432432",
      title: "I am not able to logout",
      date: "8 Sep 2021 08:44 PM",
      status: "Open",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "#F7B731"; // Yellow
      case "Closed":
        return "#2ECC71"; // Green
      case "Open":
        return "#34495E"; // Blue
      default:
        return "#000000";
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.ticketItem}>
      {/* Ticket Icon */}
      <View style={styles.ticketIconContainer}>
        <Image
          source={require("../assets/ChatTicket.png")}
          style={styles.ticketIcon}
        />
      </View>

      {/* Ticket Details */}
      <View style={styles.ticketDetails}>
        <Text style={styles.ticketNumber}>{item.ticketNumber}</Text>
        <Text style={styles.ticketTitle}>{item.title}</Text>
        <Text style={styles.ticketDate}>{item.date}</Text>
      </View>

      {/* Ticket Status */}
      <View style={styles.ticketStatus}>
        <Text
          style={[
            styles.statusText,
            { backgroundColor: getStatusColor(item.status) },
          ]}
        >
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Ticket List */}
      <FlatList
        data={tickets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Generate New Ticket Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GenerateTicket")}
      >
        <Text style={styles.buttonText}>Generate New Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  headerContainer: {
    backgroundColor: "#005580",
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 46,
  },
  ticketItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    position: "relative",
  },
  ticketIconContainer: {
    marginRight: 12,
  },
  ticketIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  ticketDetails: {
    flex: 1,
  },
  ticketNumber: {
    fontSize: 14,
    color: "#555",
    fontWeight: "bold",
  },
  ticketTitle: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "bold",
    marginVertical: 2,
  },
  ticketDate: {
    fontSize: 12,
    color: "#777",
  },
  ticketStatus: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
    overflow: "hidden",
    fontWeight: "bold",
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

export default TicketList;
