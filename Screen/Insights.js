import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import BottomNav from "./component/BottomNav";

const InsightScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Stock");
  const [selectedCategory, setSelectedCategory] = useState("Grocery");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("In stock");
  const filters = ["In stock",  "Out of stock", "Low on stock"];
  const [activeTab, setActiveTab] = useState("Stock");
  const stockData = [
    {
      category: "Grocery",
      value: 0.36,
      color: "#003366",
      backgroundColor: "#003366",
    },
    {
      category: "pharmacy",
      value: 0.74,
      color: "#00A86B",
      backgroundColor: "#00A86B",
    },
    {
      category: "Water",
      value: 0.86,
      color: "#0096FF",
      backgroundColor: "#0096FF",
    },
  ];
  const handleTabPress = (tab) => {
    setActiveTab(tab);
    if (tab === "Sales") {
      navigation.navigate("Earning");
    }
  };

  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);

  const items = [
    {
      name: "Organic Tomato",
      price: "₹25 per kg",
      stock: 40,
      image: require("../assets/Tomato.png"),
      color: "#00A86B",
    },
    {
      name: "Banana",
      price: "₹50 per kg",
      stock: 22,
      image: require("../assets/Banana.png"),
      color: "#FFA500",
    },
    {
      name: "Coconut",
      price: "₹45 per piece",
      stock: 6,
      image: require("../assets/coconut.png"),
      color: "#FF0000",
    },
  ];

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Insights</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/talk.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/notification.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === "Sales" && styles.activeTab]}
            onPress={() => setSelectedTab("Sales")}
          >
            <Text style={styles.tabText}>Sales</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === "Stock" && styles.activeTab]}
            onPress={() => setSelectedTab("Stock")}
          >
            <Text style={styles.tabText}>Stock</Text>
          </TouchableOpacity>
        </View> */}

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Sales" && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress("Sales")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Sales" && styles.activeTabText,
              ]}
            >
              Sales
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === "Stock" && styles.activeTabButton,
            ]}
            onPress={() => handleTabPress("Stock")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "Stock" && styles.activeTabText,
              ]}
            >
              Stock
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionHeader}>Stock</Text>
          {stockData.map((item, index) => (
            <View key={index} style={styles.categoryContainer}>
              <Text style={styles.categoryText}>{item.category}</Text>
              <View style={styles.progressWrapper}>
                <View style={styles.progressBarBackground}>
                  <View
                    style={[
                      styles.progressBarFill,
                      {
                        width: `${item.value * 100}%`,
                        backgroundColor: item.color,
                      },
                    ]}
                  >
                    <Text style={styles.percentage}>{`%${Math.round(
                      item.value * 100
                    )}`}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.cardId}>
          <View style={styles.itemsHeader}>
            <Text style={styles.sectionHeader}>Items</Text>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => setDropdownVisible(!dropdownVisible)}
            >
              <Text style={styles.filterText}>{selectedFilter}</Text>
              <Ionicons name="chevron-down" size={18} color="black" />
            </TouchableOpacity>

            {dropdownVisible && (
              <View style={styles.dropdownMenu}>
                {filters.map((filter, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.dropdownItem}
                    onPress={() => {
                      setSelectedFilter(filter);
                      setDropdownVisible(false);
                    }}
                  >
                    <Text>{filter}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
          {/* Tabs Section */}
          <View style={styles.tabsContainer}>
            {["All", "Grocery", "pharmacy ", "Water"].map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.tabItem,
                  selectedTab === tab && styles.activeTab,
                ]}
                onPress={() => setSelectedTab(tab)}
              >
                <Text
                  style={[
                    styles.tabText,
                    selectedTab === tab && styles.activeTabTexts,
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setDropdownVisible(!dropdownVisible)}
          >
            <Text style={styles.filterText}>{selectedFilter}</Text>
            <Ionicons name="chevron-down" size={18} color="black" />
          </TouchableOpacity>

          {dropdownVisible && (
            <View style={styles.dropdownMenu}>
              {filters.map((filter, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setSelectedFilter(filter);
                    setDropdownVisible(false);
                  }}
                >
                  <Text>{filter}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )} */}

          {items.map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Price {item.price}</Text>
              </View>
              <View style={styles.stockStatus}>
                <Text style={styles.stockText}>Stock</Text>
                <ProgressBar
                  progress={item.stock / 50}
                  color={item.color}
                  style={styles.itemProgressBar}
                />
                <Text style={[styles.stockCount, { color: item.color }]}>
                  {item.stock}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav navigation={navigation} activeTab="Earning" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 15 },
  menuButton: {
    position: "absolute",
    top: -10,
    right: -10,
    zIndex: 1,
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 15 },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    marginBottom: 15,
  },
  tab: { flex: 1, padding: 10, alignItems: "center" },
  activeTab: { backgroundColor: "#003366", borderRadius: 10 },
  tabText: { fontSize: 16, color: "white" },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20,
  },
  sectionHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  categoryContainer: {
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  progressWrapper: {
    width: "100%",
  },
  progressBarBackground: {
    width: "100%",
    height: 20,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    position: "relative",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
  },
  itemsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // filterButton: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   paddingVertical: 5,
  //   paddingHorizontal: 0,
  //   borderRadius: 5,
  //   backgroundColor: "#EAEAEA",
  // },
  categoryTabs: { flexDirection: "row", marginVertical: 10 },
  categoryText: { marginRight: 15, fontSize: 16, color: "gray" },
  activeCategory: {
    color: "#00A86B",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  itemCard: {
    flexDirection: "row",
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: { width: 50, height: 50, borderRadius: 10, marginRight: 10 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: "bold" },
  itemPrice: { fontSize: 14, color: "gray" },
  stockStatus: { alignItems: "center" },
  itemProgressBar: {
    width: 50,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginVertical: 5,
  },
  stockCount: { fontSize: 16, fontWeight: "bold" },
  menuIconWrapper: {
    alignItems: "flex-end",
  },
  iconImage: {
    width: 20,
    height: 24,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
  },
  iconImage: {
    width: 20,
    height: 24,
  },
  dropdownWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#EAEAEA",
  },
  filterText: {
    fontSize: 16,
    marginRight: 5,
  },
  stockHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  progressWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  progressBar: {
    flex: 1,
    height: 10,
    borderRadius: 5,
  },
  percentage: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  stockHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  progressWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  progressBarBackground: {
    flex: 1,
    height: 10,
    borderRadius: 5,
  },
  progressBar: {
    flex: 1,
    height: 10,
    borderRadius: 5,
  },
  percentage: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#E6EEF8",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTabButton: {
    backgroundColor: "#004664",
  },
  tabText: {
    fontSize: 16,
  },
  activeTabText: {
    color: "#FFFFFF",
  },
  card: {
    backgroundColor: "#fff",
    padding:5,
    paddingRight:35,
    paddingLeft:30,
    paddingTop:10,
    paddingBottom:1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 10,
  },
  cardId:{
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    marginTop: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 1,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  stockText: {
    width: 80,
    fontSize: 14,
    fontWeight: "500",
  },
  progressWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  progressBarBackground: {
    flex: 1,
    height: 25,
    borderRadius: 5,
    backgroundColor: "#e0e0e0",
    overflow: "hidden",
    position: "relative",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    position: "absolute",
    alignSelf: "center",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#00B982",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabTexts: {
    color: "#00B982",
    fontWeight: "bold",
  },
});

export default InsightScreen;
