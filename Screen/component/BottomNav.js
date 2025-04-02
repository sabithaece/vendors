import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNav = ({ navigation, activeTab }) => {
  return (
    <View style={styles.bottomNavigation}>
      {/* Navigation button for Dashboard */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Icon
          name="view-dashboard"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "Dashboard" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "Dashboard" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Dashboard
        </Text>
      </TouchableOpacity>

      {/* Navigation button for Orders */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("order")}
      >
        <Icon
          name="format-list-bulleted"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "order" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "order" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Orders
        </Text>
      </TouchableOpacity>

      {/* Navigation button for Products */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("products")}
      >
        <Icon
          name="archive-outline"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "products" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "products" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Products
        </Text>
      </TouchableOpacity>

      {/* Navigation button for Earnings */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Earning")}
      >
        <Icon
          name="credit-card"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "Earning" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "Earning" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Insights
        </Text>
      </TouchableOpacity>

      {/* Navigation button for Profile */}
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Icon
          name="account-outline"
          size={24}
          style={[
            styles.navIcon,
            activeTab === "Profile" ? styles.activeIcon : styles.inactiveIcon,
          ]}
        />
        <Text
          style={[
            styles.navText,
            activeTab === "Profile" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: {
    alignItems: "center",
    flex: 1,
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  activeIcon: {
    color: "#0BC184",
  },
  inactiveIcon: {
    // color: "#064663",
  },
  navText: {
    fontSize: 12,
    fontWeight: "500",
  },
  activeText: {
    color: "#0BC184",
    fontWeight: "700",
  },
  inactiveText: {
    // color: "#064663",
  },
});
