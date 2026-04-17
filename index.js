// app/index.js

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
  Platform
} from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const emailPattern = /\S+@\S+\.\S+/;

    if (!email || !password) {
      Alert.alert('Oops 💕', 'Isi email dan password dulu ya');
      return;
    }

    if (!emailPattern.test(email)) {
      Alert.alert('Error 😢', 'Format email tidak valid');
      return;
    }

    router.replace('/home?name=Arini');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Arini Login 💖</Text>

          <TextInput
            placeholder="Masukkan Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Masukkan Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.btnText}>Login 💕</Text>
          </TouchableOpacity>

          <Link href="/register" style={styles.link}>
            Daftar Disini 🌸
          </Link>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'#ffd6eb',
    padding:25
  },
  card:{
    backgroundColor:'#fff',
    padding:25,
    borderRadius:25
  },
  title:{
    fontSize:28,
    textAlign:'center',
    color:'#ff4fa3',
    fontWeight:'bold',
    marginBottom:25
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
  },
  link:{
    textAlign:'center',
    marginTop:18,
    color:'#d63384'
  }
});