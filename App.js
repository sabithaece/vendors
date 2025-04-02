import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./Screen/SignUpScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import OtpScreen from "./Screen/OtpScreen";
import Onboarding from "./Screen/Onboarding";
import LoginSuccessScreen from "./Screen/LoginSuccessScreen";
import Dashboard from "./Screen/Dashboard";
import orderscreen from "./Screen/order";
import ProductScreen from "./Screen/Product";
import products from "./Screen/products";
import Earning from "./Screen/Earning";
import ProfileScreen from "./Screen/Profile";
import AllReportScreen from "./Screen/AllReport";
import NotificationScreen from "./Screen/Notification";
import UploadScreen from "./Screen/Upload";
import ProfileEdit from "./Screen/ProfileEdit";
import Ticket from "./Screen/Ticket";
import TicketList from "./Screen/TicketList";
import GenerateTicket from "./Screen/GenerateTicket";
import SupportTicket from "./Screen/SupportTicket";
import PaymentHistory from "./Screen/PaymentHistory";
import Payment from "./Screen/Payment";
import AddProduct from "./Screen/AddProduct";
import Chat from "./Screen/Chat";
import Issue from "./Screen/Issue";
import OrderDetails from "./Screen/OrderDetails";
import Insights from "./Screen/Insights";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignUp"
          screenOptions={{
            headerBackTitleVisible: false,
            headerBackTitle: "",
          }}
        >
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Otp" component={OtpScreen} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen
            name="LoginSuccessScreen"
            component={LoginSuccessScreen}
          />

          {/* Screens without App Bar */}
          <Stack.Screen
            name="Insights"
            component={Insights}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="order"
            component={orderscreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="products"
            component={products}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Earning"
            component={Earning}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />

          {/* Other Screens with headers */}
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "black",
            }}
          />
          <Stack.Screen
            name="ProfileEdit"
            component={ProfileEdit}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="OrderDetails"
            component={OrderDetails}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Issue"
            component={Issue}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="SupportTicket"
            component={SupportTicket}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="PaymentHistory"
            component={PaymentHistory}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="GenerateTicket"
            component={GenerateTicket}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="TicketList"
            component={TicketList}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Ticket"
            component={Ticket}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Notification"
            component={NotificationScreen}
            options={{
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{
              title: "Upload Files",
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="AllReport"
            component={AllReportScreen}
            options={{
              title: "All Reports",
              headerStyle: { backgroundColor: "#1F5C4A" },
              headerTintColor: "white",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
