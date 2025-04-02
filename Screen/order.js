import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import BottomNav from "./component/BottomNav";

const orders = [
  {
    id: "1",
    orderNumber: "#20211028-07104354",
    date: "2 Nov 2021 04:24 PM",
    customerName: "Ankit Gajera",
    amount: "₹230.44",
    status: "Paid",
    deliveryStatus: "Placed",
  },
  {
    id: "2",
    orderNumber: "#20211028-07104355",
    date: "3 Nov 2021 12:10 PM",
    customerName: "John Doe",
    amount: "₹120.00",
    status: "Unpaid",
    deliveryStatus: "Shipped",
  },
  {
    id: "3",
    orderNumber: "#20211028-07104356",
    date: "4 Nov 2021 08:40 AM",
    customerName: "Jane Smith",
    amount: "₹340.78",
    status: "Paid",
    deliveryStatus: "Delivered",
  },
];

const Orders = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Total Orders");

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("OrderDetails", { order: item })}
    >
      <View style={styles.cardContent}>
        <View style={styles.orderInfo}>
          <Text style={styles.orderNumber}>{item.orderNumber}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.customerLabel}>Customer Name</Text>
          <Text style={styles.customerName}>{item.customerName}</Text>
          <Text style={styles.deliveryLabel}>Delivery Status</Text>
          <Text style={styles.deliveryStatus}>{item.deliveryStatus}</Text>
        </View>
        <View style={styles.amountInfo}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.status}>{item.status}</Text>
          <Image
            style={styles.invoiceIcon}
            source={require("../assets/Frame.png")}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
        <View style={styles.headerIcons}>
          <Image
            source={require("../assets/talk.png")}
            style={styles.icon}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
            <Image
              source={require("../assets/notification.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        {["Total Orders", "Pending Order", "Placed Order"].map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tabItem, activeTab === tab && styles.activeTabItem]}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />

      <BottomNav navigation={navigation} activeTab="order" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    // color: "#064663",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    width: 21,
    height: 24,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabText: {
    fontSize: 16,
    // color: "#004664",
  },
  activeTabText: {
    color: "#248B6D",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  orderInfo: {
    flex: 3,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#064663",
  },
  date: {
    fontSize: 14,
     color: "#666666",
    marginVertical: 4,
  },
  customerLabel: {
    fontSize: 12,
    color: "#666666",
    marginTop: 8,
  },
  customerName: {
    fontSize: 14,
    fontWeight: "bold",
    // color: "#064663",
  },
  deliveryLabel: {
    fontSize: 12,
    // color: "#6690a2",
    marginTop: 8,
  },
  deliveryStatus: {
    fontSize: 14,
    color: "#248B6D",
    fontWeight: "bold",
  },
  amountInfo: {
    flex: 1,
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#064663",
  },
  status: {
    fontSize: 14,
    // color: "#248B6D",
    fontWeight: "bold",
    marginVertical: 4,
  },
  invoiceIcon: {
    width: 26,
    height: 26,
  },
});

export default Orders;
