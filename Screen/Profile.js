import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import profileImage from "../assets/ProfilePhoto.png";
import BottomNav from "./component/BottomNav";
const Profile = ({ navigation }) => {
  // State to hold profile details
  const [profileDetails, setProfileDetails] = useState({
    name: "Mythreya K",
    email: "mythreya@gmail.com",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    address: "301B, Sector C, Gandhinagar",
    state: "Tamil Nadu",
    city: "Chennai",
    postalCode: "600001",
  });

  // Function to handle updating profile details from ProfileEdit
  const handleProfileUpdate = (updatedDetails) => {
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      ...updatedDetails,
    }));
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Profile</Text>
          <TouchableOpacity
            style={styles.icon}
            onPress={() =>
              navigation.navigate("ProfileEdit", {
                profileDetails,
                onUpdate: handleProfileUpdate,
              })
            }
          >
            <Icon name="account-edit-outline" size={25} />
          </TouchableOpacity>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>{profileDetails.name}</Text>
            <Text style={styles.profileEmail}>{profileDetails.email}</Text>
            <Text style={styles.profileDescription}>
              {profileDetails.description}
            </Text>
          </View>
        </View>

        {/* Communication Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Communication Address</Text>
          <Text style={styles.sectionText}>
            Address: {profileDetails.address}
          </Text>
          <Text style={styles.sectionText}>State: {profileDetails.state}</Text>
          <Text style={styles.sectionText}>City: {profileDetails.city}</Text>
          <Text style={styles.sectionText}>
            Postal Code: {profileDetails.postalCode}
          </Text>
        </View>

        {/* Options */}
        <TouchableOpacity style={styles.optionContainer}>
          <Icon
            name="lock"
            size={20}
            // color="#004664"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate("SupportTicket")}
        >
          <Icon
            name="ticket-confirmation-outline"
            size={20}
            // color="#004664"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Tickets</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => navigation.navigate("Chat")}
        >
          <Icon
            name="message-text-outline"
            size={20}
            // color="#004664"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Chat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <Icon
            name="wallet-outline"
            size={20}
            // color="#004664"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Insights</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionContainer}>
          <Icon
            name="help-circle-outline"
            size={20}
            // color="#004664"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>FAQs</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}

      <BottomNav navigation={navigation} activeTab="Profile" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 16,
  },
  icon: {
    marginTop: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    // color: "#004664",
    marginTop: 5,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    // color: "#004664",
  },
  profileEmail: {
    fontSize: 14,
    color: "#666666",
    marginVertical: 5,
  },
  profileDescription: {
    fontSize: 12,
    color: "#666666",
  },
  section: {
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    // color: "#004664",
  },
  sectionText: {
    fontSize: 14,
    color: "#666666",
    marginVertical: 2,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 1,
    marginBottom: 15,
  },
  optionIcon: {
    marginRight: 16,
  },
  optionText: {
    fontSize: 16,
    // color: "#666666",
  },
  logoutButton: {
    backgroundColor: "#ff4d4d",
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 16,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
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
  navText: {
    fontSize: 12,
    color: "#064663",
  },
  navActive: {
    color: "#0BC184",
    fontWeight: "700",
  },
});

export default Profile;
