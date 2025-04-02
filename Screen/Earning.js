import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import BottomNav from "./component/BottomNav";

const screenWidth = Dimensions.get("window").width;

const Earning = ({ navigation }) => {
  const [selectedMetric, setSelectedMetric] = useState("Last 7 Days");
  const [activeGraph, setActiveGraph] = useState("salesCount"); // State to track active graph
  const [activeCategory, setActiveCategory] = useState("All"); // State to track active tab

  const salesData = {
    labels: {
      "Last 7 Days": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      Today: ["9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
      Monthly: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    Grocery: {
      "Last 7 Days": [110, 150, 120, 140, 180, 160, 200],
      Today: [20, 30, 25, 35, 40],
      Monthly: [400, 450, 420, 480],
    },
    Pharma: {
      "Last 7 Days": [90, 120, 100, 130, 170, 150, 190],
      Today: [15, 25, 20, 30, 35],
      Monthly: [350, 400, 380, 420],
    },
    Water: {
      "Last 7 Days": [70, 100, 80, 110, 150, 130, 170],
      Today: [10, 20, 15, 25, 30],
      Monthly: [300, 350, 320, 370],
    },
  };

  const totalSalesData = {
    labels: {
      "Last 7 Days": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      Today: ["9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
      Monthly: ["Week 1", "Week 2", "Week 3", "Week 4"],
    },
    Grocery: {
      "Last 7 Days": [2200, 3000, 2400, 2800, 3600, 3200, 4000], // Total sales in ₹
      Today: [400, 600, 500, 700, 800],
      Monthly: [8000, 9000, 8400, 9600],
    },
    Pharma: {
      "Last 7 Days": [1800, 2400, 2000, 2600, 3400, 3000, 3800],
      Today: [300, 500, 400, 600, 700],
      Monthly: [7200, 8000, 7600, 8800],
    },
    Water: {
      "Last 7 Days": [1400, 2000, 1600, 2200, 3000, 2600, 3400],
      Today: [200, 400, 300, 500, 600],
      Monthly: [6400, 7200, 6800, 8000],
    },
  };

  const getGraphData = () => {
    if (activeGraph === "salesCount") {
      return [
        {
          data: salesData.Grocery[selectedMetric],
          color: () => "#004664", // Red for Grocery
          strokeWidth: 2,
        },
        {
          data: salesData.Pharma[selectedMetric],
          color: () => "#00B982", // Blue for Pharma
          strokeWidth: 2,
        },
        {
          data: salesData.Water[selectedMetric],
          color: () => "#24C0FF", // Green for Water
          strokeWidth: 2,
        },
      ];
    } else if (activeGraph === "totalSales") {
      return [
        {
          data: totalSalesData.Grocery[selectedMetric],
          color: () => "#004664", // Red for Grocery
          strokeWidth: 2,
        },
        {
          data: totalSalesData.Pharma[selectedMetric],
          color: () => "#00B982", // Blue for Pharma
          strokeWidth: 2,
        },
        {
          data: totalSalesData.Water[selectedMetric],
          color: () => "#24C0FF", // Green for Water
          strokeWidth: 2,
        },
      ];
    }
  };
const getButtonValue = (type) => {
  let total = 0;
  let previousTotal = 0;

  if (type === "salesCount") {
    total = ["Grocery", "Pharma", "Water"].reduce(
      (sum, category) =>
        sum + salesData[category][selectedMetric].reduce((a, b) => a + b, 0),
      0
    );
    previousTotal = ["Grocery", "Pharma", "Water"].reduce(
      (sum, category) =>
        sum + salesData[category]["Last 7 Days"].reduce((a, b) => a + b, 0), // Example: Compare with "Last 7 Days"
      0
    );
  } else if (type === "totalSales") {
    total = ["Grocery", "Pharma", "Water"].reduce(
      (sum, category) =>
        sum +
        totalSalesData[category][selectedMetric].reduce((a, b) => a + b, 0),
      0
    );
    previousTotal = ["Grocery", "Pharma", "Water"].reduce(
      (sum, category) =>
        sum +
        totalSalesData[category]["Last 7 Days"].reduce((a, b) => a + b, 0), // Example: Compare with "Last 7 Days"
      0
    );
  }

  const change = total - previousTotal;
  const percentageChange = ((change / previousTotal) * 100).toFixed(1);

  return {
    value: type === "salesCount" ? total : `₹${total}`,
    change:
      change > 0
        ? `+${change} (${percentageChange}%)`
        : `${change} (${percentageChange}%)`,
  };
};
  const getYAxisLabel = () => {
    return activeGraph === "salesCount" ? "" : "₹";
  };
  // const getButtonValue = (type) => {
  //   let total = 0;

  //   if (type === "salesCount") {
  //     total = ["Grocery", "Pharma", "Water"].reduce(
  //       (sum, category) =>
  //         sum + salesData[category][selectedMetric].reduce((a, b) => a + b, 0),
  //       0
  //     );
  //     return total; // Return total sales count
  //   } else if (type === "totalSales") {
  //     total = ["Grocery", "Pharma", "Water"].reduce(
  //       (sum, category) =>
  //         sum +
  //         totalSalesData[category][selectedMetric].reduce((a, b) => a + b, 0),
  //       0
  //     );
  //     return `₹${total}`; // Return total sales in ₹
  //   }
  // };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Insights</Text>
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/talk.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Image
                source={require("../assets/notification.png")}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.activeTab}>
            <Text style={styles.activeTabText}>Sales</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inactiveTab}
            onPress={() => navigation.navigate("Insights")}
          >
            <Text style={styles.inactiveTabText}>Stock</Text>
          </TouchableOpacity>
        </View>

        {/* Analytics Section */}
        <View style={styles.analyticsContainer}>
          <View style={styles.analyticsHeader}>
            <Text style={styles.analyticsTitle}>Analytics</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={selectedMetric}
                style={styles.picker}
                onValueChange={setSelectedMetric}
              >
                <Picker.Item label="Last 7 Days" value="Last 7 Days" />
                <Picker.Item label="Today" value="Today" />
                <Picker.Item label="Monthly" value="Monthly" />
              </Picker>
            </View>
          </View>
          <LineChart
            data={{
              labels: salesData.labels[selectedMetric],
              datasets: getGraphData(),
            }}
            width={screenWidth - 32}
            height={250}
            yAxisLabel={getYAxisLabel()}
            chartConfig={{
              backgroundGradientFrom: "#ffffff",
              backgroundGradientTo: "#ffffff",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            bezier
            style={styles.chartStyle}
          />
          <View style={styles.indicatorContainer}>
            <View style={styles.indicator}>
              <View
                style={[styles.indicatorBox, { backgroundColor: "#004664" }]}
              />
              <Text style={styles.indicatorText}>Grocery</Text>
            </View>
            <View style={styles.indicator}>
              <View
                style={[styles.indicatorBox, { backgroundColor: "#24C0FF" }]}
              />
              <Text style={styles.indicatorText}>pharmacy</Text>
            </View>
            <View style={styles.indicator}>
              <View
                style={[styles.indicatorBox, { backgroundColor: "#00B982" }]}
              />
              <Text style={styles.indicatorText}>Water</Text>
            </View>
          </View>
        </View>

        <View style={styles.salesSummary}>
          <TouchableOpacity
            style={[
              styles.salesCard,
              activeGraph === "salesCount" && styles.activeCard,
            ]}
            onPress={() => setActiveGraph("salesCount")}
          >
            <View style={styles.cardChangeContainer}>
              <Text style={styles.cardChange}>
                {getButtonValue("salesCount").change}
              </Text>
            </View>
            <Text style={styles.cardTitle}>Number of Sales</Text>
            <Text style={styles.cardValue}>
              {getButtonValue("salesCount").value}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.salesCard,
              styles.negativeCard,
              activeGraph === "totalSales" && styles.activeCard,
            ]}
            onPress={() => setActiveGraph("totalSales")}
          >
            <View style={styles.cardChangeContainer}>
              <Text style={styles.cardChange}>
                {getButtonValue("totalSales").change}
              </Text>
            </View>
            <Text style={styles.cardTitle}>Total Sales</Text>
            <Text style={styles.cardValue}>
              {getButtonValue("totalSales").value}
            </Text>
          </TouchableOpacity>
        </View>
        {/* Items Section */}
        <View style={styles.itemContainer}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemsTitle}>Items</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue="Bestseller"
                style={styles.itemPicker}
                onValueChange={(value) => console.log(value)}
              >
                <Picker.Item label="Bestseller" value="Bestseller" />
                <Picker.Item label="Slowseller" value="Slowseller" />
              </Picker>
            </View>
          </View>

          <View style={styles.categoryTabs}>
            {["All", "Grocery", "Pharmacy", "Water"].map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryTab,
                  activeCategory === category && styles.activeCategoryTab, // Apply active style
                ]}
                onPress={() => setActiveCategory(category)} // Set active tab
              >
                <Text
                  style={[
                    styles.categoryText,
                    activeCategory === category && styles.activeCategoryText, // Apply active text style
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Item Cards */}
          {[
            {
              name: "Organic Tomato",
              price: "₹25 per kg",
              qty: "10kg",
              total: "₹250",
              image: require("../assets/Tomato.png"),
            },
            {
              name: "Banana",
              price: "₹50 per kg",
              qty: "4kg",
              total: "₹200",
              image: require("../assets/Banana.png"),
            },
            {
              name: "Coconut",
              price: "₹45 per kg",
              qty: "2kg",
              total: "₹90",
              image: require("../assets/coconut.png"),
            },
          ].map((item, index) => (
            <View key={index} style={styles.itemCard}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemDetailsContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
                <Text style={styles.itemDetails}>
                  {item.qty} Sold - {item.total}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} activeTab="Earning" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  container: { paddingHorizontal: 16, backgroundColor: "#F8F9FA" },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  header: { fontSize: 24, fontWeight: "bold" },
  iconContainer: { flexDirection: "row", gap: 15 },
  iconImage: { width: 24, height: 24 },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    marginVertical: 10,
  },
  activeTab: {
    flex: 1,
    backgroundColor: "#004664", // Updated color for active tab
    padding: 10,
    borderRadius: 10,
  },
  // Sales Summary
  salesSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  salesCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 3,
    position: "relative",
    minHeight: 70,
  },
  // negativeCard: {
  //   backgroundColor: "#fff",
  //   borderColor: "#FF0000",
  //   borderWidth: 1,
  // },
  cardTitle: { 
    fontSize: 14, 
    fontWeight: "500", 
    color: "#333",
    marginTop: 5,
    marginBottom: 5 
  },
  cardValue: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#000",
    marginTop: 5 
  },
  cardChangeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 5,
  },
  cardChange: {
    fontSize: 14,
    fontWeight: "600",
    color: "#008000",
  },
  negativeCardChange: { color: "#FF0000" },
  inactiveTab: { flex: 1, padding: 10 },
  activeTabText: { color: "#fff", textAlign: "center" },
  inactiveTabText: { color: "#000", textAlign: "center" },
  analyticsContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
  },
  analyticsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  pickerWrapper: {
    borderWidth: 1, // Add a border
    borderColor: "#000", // Black border color
    borderRadius: 7, // Optional: Add rounded corners
    right: -7, // Align to the right
    // overflow: "hidden", // Ensure the picker fits within the border
  },
  picker: {
    width: 170, // Adjust width as needed
    height: 50, // Adjust height as needed
  },
  analyticsTitle: {
    fontSize: 20, // Increase the font size
    fontWeight: "bold", // Make the text bold
    color: "#333", // Optional: Adjust the color if needed
  },
  itemsTitle: {
    fontSize: 20, // Increase the font size
    fontWeight: "bold", // Make the text bold
    color: "#333", // Optional: Adjust the color if needed
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    position: "relative", // Ensure relative positioning for the container
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pickerContainer: {
    position: "absolute", // Position the picker absolutely
    top: -13, // Align to the top
    right: -7, // Align to the right
    borderWidth: 1, // Add a border
    borderColor: "#000", // Black border color
    borderRadius: 7, // Optional: Add rounded corners
  },
  itemPicker: {
    width: 170, // Adjust width as needed
    height: 50,
  },
  itemCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#EAEAEA",
    borderRadius: 10,
    marginVertical: 10,
  },
  activeTab: {
    flex: 1,
    backgroundColor: "#004664", // Updated color for active tab
    padding: 10,
    borderRadius: 10,
  },
  inactiveTab: { flex: 1, padding: 10 },
  activeTabText: { color: "#fff", textAlign: "center" },
  inactiveTabText: { color: "#000", textAlign: "center" },
  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  categoryTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  categoryTab: {
    paddingVertical: 4,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent", // Default border color
  },
  activeCategoryTab: {
    borderBottomColor: "#00B982", // Highlight active tab
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  activeCategoryText: {
    color: "#00B982", // Highlight active tab text
  },
  salesCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 3,
    position: "relative",
    minHeight: 70,
  },
  cardTitle: { 
    fontSize: 14, 
    fontWeight: "500", 
    color: "#333",
    marginTop: 5,
    marginBottom: 5 
  },
  cardValue: { 
    fontSize: 22, 
    fontWeight: "bold", 
    color: "#000",
    // marginTop: 5 
  },
  cardChangeContainer: {
    paddingHorizontal: 0,
    paddingVertical: 1,
    // marginBottom: 5,
  },
  cardChange: {
    fontSize: 14,
    fontWeight: "600",
    color: "#008000",
  },
  negativeCardChange: {
    color: "#FF0000", // Red for negative change
  },
  indicatorContainer: {
    flexDirection: "row", // Arrange indicators horizontally
    justifyContent: "space-around", // Space them evenly
    marginTop: 10, // Add some spacing above the indicators
  },
  indicator: {
    flexDirection: "row", // Arrange the box and text horizontally
    alignItems: "center", // Align items vertically in the center
  },
  indicatorBox: {
    width: 12, // Width of the color box
    height: 12, // Height of the color box
    borderRadius: 8, // Optional: Add rounded corners
    marginRight: 8, // Add spacing between the box and the text
  },
  indicatorText: {
    fontSize: 14, // Font size for the label
    color: "#333", // Text color
    fontWeight: "bold", // Make the text bold
  },
  categoryText: { fontSize: 16, fontWeight: "bold", color: "#333" },
  itemName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  itemPrice: { fontSize: 14, color: "#555" },
  itemDetails: { fontSize: 12, color: "#777" },
});

export default Earning;
