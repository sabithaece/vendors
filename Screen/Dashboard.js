import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import BottomNav from "./component/BottomNav";


const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Ankit</Text>
            <Text style={styles.date}>Dec 12, 2021</Text>
          </View>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
              <Image
                style={styles.icon}
                source={require("../assets/talk.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Image
                style={styles.icon}
                source={require("../assets/notification.png")}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Options Section */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionCard}>
            <Image
              style={styles.optionIcon}
              source={require("../assets/shopping.png")}
            />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Shopping</Text>
              <Text style={styles.optionSubtitle}>Switch Vendor Type</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionCard}>
            <Image
              style={styles.optionIcon}
              source={require("../assets/chat.png")}
            />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Chat</Text>
              <Text style={styles.optionSubtitle}>View Chat</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* This Month Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>This Month</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AllReport")}>
            <Text style={styles.allReport}>All Report</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statChange}>
              +10% <Image source={require("../assets/arrow.png")} />
            </Text>
            <Image
              style={styles.statIcon}
              source={require("../assets/gross-sales.png")}
            />
            <View style={styles.statContent}>
              <Text style={styles.statValue}>₹230.44</Text>
              <Text style={styles.statLabel}>Gross Sales</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statChange}>
              +5% <Image source={require("../assets/arrow.png")} />
            </Text>
            <Image
              style={styles.statIcon}
              source={require("../assets/earnings.png")}
            />
            <View style={styles.statContent}>
              <Text style={styles.statValue}>₹6002</Text>
              <Text style={styles.statLabel}>Earnings</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statChange}>
              +15% <Image source={require("../assets/arrow.png")} />
            </Text>
            <Image
              style={styles.statIcon}
              source={require("../assets/orders.png")}
            />
            <View style={styles.statContent}>
              <Text style={styles.statValue}>1043</Text>
              <Text style={styles.statLabel}>Total Orders</Text>
            </View>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statChange}>
              +5% <Image source={require("../assets/arrow.png")} />
            </Text>
            <Image
              style={styles.statIcon}
              source={require("../assets/products.png")}
            />
            <View style={styles.statContent}>
              <Text style={styles.statValue}>107</Text>
              <Text style={styles.statLabel}>Total Products</Text>
            </View>
          </View>
        </View>

        {/* New Order Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Order</Text>
          <TouchableOpacity onPress={() => navigation.navigate("order")}>
            <Text style={styles.allOrders}>See All Orders</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.orderCard}
          onPress={() => navigation.navigate("OrderDetails")}
        >
          <View style={styles.orderHeader}>
            <Text style={styles.orderId}>#20211028-07104354</Text>
            <Text style={styles.orderValue}>₹230.44 paid</Text>
          </View>
          <Text style={styles.orderDate}>2 Nov 2021 04:24 PM</Text>
          <Text style={styles.customerName}>Customer Name: Ankit Gajera</Text>
          <Text style={styles.deliveryStatus}>Delivery Status: Placed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.orderCard}
          onPress={() => navigation.navigate("OrderDetails")}
        >
          <View style={styles.orderHeader}>
            <Text style={styles.orderId}>#20211028-07104354</Text>
            <Text style={styles.orderValue}>₹230.44 paid</Text>
          </View>
          <Text style={styles.orderDate}>2 Nov 2021 04:24 PM</Text>
          <Text style={styles.customerName}>Customer Name: Ankit Gajera</Text>
          <Text style={styles.deliveryStatus}>Delivery Status: Placed</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom navigation bar */}
      <BottomNav navigation={navigation} activeTab="Dashboard" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#004664",
  },
  date: {
    fontSize: 14,
    // color: "#777",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 22,
    height: 24,
    marginHorizontal: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  optionCard: {
    // backgroundColor: "#FFFFFF",
    // borderRadius: 10,
    // width: "49%",
    // paddingVertical: 12,
    // flexDirection: "row",
    // alignItems: "center",
    // paddingHorizontal: 10,
    // elevation: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "45%",
    height: 110,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
    position: "relative",
  },
  optionIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  optionTextContainer: {
    flexDirection: "column",
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#004664",
  },
  optionSubtitle: {
    fontSize: 11,
    color: "#248B6D",
    marginTop: 6,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#004664",
  },
  allReport: {
    fontSize: 14,
    color: "#248B6D",
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: "45%",
    height: 120,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
    position: "relative",
  },
  statIcon: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  statChange: {
    fontSize: 12,
    color: "#248B6D",
    position: "absolute",
    top: 10,
    right: 10,
  },
  statContent: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "center",
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    // color: "#004664",
  },
  statLabel: {
    fontSize: 12,
    color: "#666666",
    marginTop: 5,
  },
  orderCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    elevation: 2,
  },
  orderHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderId: {
    fontSize: 14,
    fontWeight: "bold",
    // color: "#004664",
  },
  orderValue: {
    fontSize: 14,
    fontWeight: "bold",
    // color: "#004664",
    textTransform: "lowercase",
  },
  orderDate: {
    fontSize: 12,
    color: "#666666",
    marginVertical: 5,
  },
  customerName: {
    fontSize: 12,
    color: "#666666",
  },
  deliveryStatus: {
    fontSize: 12,
    color: "#666666",
    marginVertical: 5,
  },
  allOrders: {
    fontSize: 14,
    color: "#248B6D",
  },
});

export default Dashboard;
