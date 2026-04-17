// app/register.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Register() {
  const router = useRouter();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = () => {
    const emailPattern = /\S+@\S+\.\S+/;
    const phonePattern = /^[0-9]{10,}$/;

    if (!nama || !email || !phone || !pass || !confirm) {
      Alert.alert('Oops 💕', 'Isi semua data ya');
      return;
    }

    if (!emailPattern.test(email)) {
      Alert.alert('Error 😢', 'Email tidak valid');
      return;
    }

    if (!phonePattern.test(phone)) {
      Alert.alert('Error 😢', 'Nomor HP minimal 10 digit & angka saja');
      return;
    }

    if (pass !== confirm) {
      Alert.alert('Error 😢', 'Password tidak sama');
      return;
    }

    router.replace('/home?name=' + nama);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex:1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Daftar Akun 💖</Text>

            <TextInput
              placeholder="Nama"
              style={styles.input}
              value={nama}
              onChangeText={setNama}
            />

            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              placeholder="Phone"
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="numeric"
            />

            <TextInput
              placeholder="Password"
              style={styles.input}
              value={pass}
              onChangeText={setPass}
              secureTextEntry
            />

            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.btnText}>Submit 💕</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffd6eb',
    padding:20
  },
  card:{
    backgroundColor:'#fff',
    padding:25,
    borderRadius:25,
    marginTop:30
  },
  title:{
    fontSize:28,
    color:'#ff4fa3',
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20
  },
  input:{
    backgroundColor:'#ffeaf4',
    padding:14,
    borderRadius:15,
    marginBottom:15
  },
  button:{
    backgroundColor:'#ff69b4',
    padding:15,
    borderRadius:20
  },
  btnText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold'
  }
});