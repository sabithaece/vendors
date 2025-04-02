import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const chatData = [
  {
    id: "1",
    name: "Sneha Shankar",
    // message: "Thank you",
    time: "3m ago",
    avatar: require("../assets/sam.png"),
    // unreadCount: 12,
    online: true,
  },
  {
    id: "2",
    name: "UX Team",
    // message: "How is it going?",
    time: "15m ago",
    avatar: require("../assets/chethan.png"),
    unreadCount: 0,
    online: false,
  },
  {
    id: "3",
    name: "Chethan TS",
    // message: "Aight, noted",
    time: "1h ago",
    avatar: require("../assets/sam.png"),
    unreadCount: 0,
    online: false,
  },
  {
    id: "4",
    name: "Aswathi Ravi",
    // message: "Good morning, did you sleep well?",
    time: "3m ago",
    avatar: require("../assets/chethan.png"),
    // unreadCount: 12,
    online: true,
  },
  {
    id: "5",
    name: "Sabitha G",
    // message: "Aight, noted",
    time: "1h ago",
    avatar: require("../assets/sam.png"),
    unreadCount: 0,
    online: false,
  },
  {
    id: "6",
    name: "Sam A",
    // message: "Aight, noted",
    time: "1h ago",
    avatar: require("../assets/chethan.png"),
    unreadCount: 0,
    online: false,
  },
];

const ChatItem = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Issue"); // Navigate to the Issue.js screen
  };

  return (
    <TouchableOpacity style={styles.chatItem} onPress={handlePress}>
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.online && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ChatItem item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#05445E",
  },
  backButton: {
    fontSize: 18,
    color: "#FFFFFF",
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4CAF50",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  messageContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
  message: {
    fontSize: 14,
    color: "#666666",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
  time: {
    fontSize: 12,
    color: "#999999",
  },
  unreadBadge: {
    backgroundColor: "#E74C3C",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop: 4,
  },
  unreadText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ChatScreen;
