import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import colors from './component/colors';

const PaymentSettingScreen = () => {
  const [accountTransfer, setAccountTransfer] = useState(false);
  const [razorPay, setRazorPay] = useState(false);
  const [upiId, setUpiId] = useState(false);

  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [accountHolderName, setAccountHolderName] = useState('');
  const [razorKey, setRazorKey] = useState('');
  const [razorSecret, setRazorSecret] = useState('');
  const [upi, setUpi] = useState('');

  const handleUpdateSettings = () => {
    // Add functionality to handle form submission
    console.log({
      accountTransfer,
      razorPay,
      upiId,
      accountNumber,
      bankName,
      ifscCode,
      accountHolderName,
      razorKey,
      razorSecret,
      upi,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}></Text>

      <View style={styles.sectionContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Account Transfer</Text>
          <Switch
            value={accountTransfer}
            onValueChange={setAccountTransfer}
          />
        </View>
        {accountTransfer && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              value={accountNumber}
              onChangeText={setAccountNumber}
            />
            <TextInput
              style={styles.input}
              placeholder="Bank Name"
              value={bankName}
              onChangeText={setBankName}
            />
            <TextInput
              style={styles.input}
              placeholder="IFSC Code"
              value={ifscCode}
              onChangeText={setIfscCode}
            />
            <TextInput
              style={styles.input}
              placeholder="Account Holder Name"
              value={accountHolderName}
              onChangeText={setAccountHolderName}
            />
          </>
        )}
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>RazorPay</Text>
          <Switch value={razorPay} onValueChange={setRazorPay} />
        </View>
        {razorPay && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Razor Key"
              value={razorKey}
              onChangeText={setRazorKey}
            />
            <TextInput
              style={styles.input}
              placeholder="Razor Secret"
              value={razorSecret}
              onChangeText={setRazorSecret}
            />
          </>
        )}
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.switchContainer}>
          <Text style={styles.label}>UPI ID</Text>
          <Switch value={upiId} onValueChange={setUpiId} />
        </View>
        {upiId && (
          <TextInput
            style={styles.input}
            placeholder="UPI ID"
            value={upi}
            onChangeText={setUpi}
          />
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUpdateSettings}>
        <Text style={styles.buttonText}>Update Setting</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#004a6e',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor:colors.button,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PaymentSettingScreen;
