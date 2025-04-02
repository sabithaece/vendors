import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

const IssueScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "received",
      text: "Hi there! How can I assist you with your issue?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const [inputText, setInputText] = useState("");
  
  const botResponse = (userMessage) => {
    if (userMessage.toLowerCase().includes("defective")) {
      return "I understand your bottle is defective. Can you provide more details ?";
    } else if (userMessage.toLowerCase().includes("refund")) {
      return "We have initiated your refund. It should reflect in your account within 3-5 business days.";
    }
    return "I'm here to help!For More details Contact Us 8790065543";
  };

  const sendMessage = () => {
    if (inputText.trim() === "") return;

    const userMessage = {
      id: (messages.length + 1).toString(),
      type: "sent",
      text: inputText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputText("");

    // Simulate bot response
    setTimeout(() => {
      const botReply = {
        id: (messages.length + 2).toString(),
        type: "received",
        text: botResponse(inputText),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 1000);
  };

  const MessageItem = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === "sent" ? styles.sent : styles.received,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <Text style={styles.messageTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageItem item={item} />}
        contentContainerStyle={styles.chatContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  chatContainer: {
    padding: 16,
  },
  messageContainer: {
    maxWidth: "80%",
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#FFFFFF",
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#D4EDDA",
  },
  messageText: {
    fontSize: 14,
    color: "#333333",
  },
  messageTime: {
    fontSize: 10,
    color: "#999999",
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 16,
    fontSize: 14,
    color: "#333333",
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#05445E",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default IssueScreen;
