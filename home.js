// app/home.js

import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Home() {
  const { name } = useLocalSearchParams();
  const router = useRouter();

  const floatAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -12,
          duration: 1500,
          useNativeDriver: true
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true
        })
      ])
    ).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.card,
          {
            opacity: fadeAnim,
            transform: [{ translateY: floatAnim }]
          }
        ]}
      >
        <View style={styles.topGlow}></View>

        <Animated.View
          style={[
            styles.avatar,
            {
              transform: [{ translateY: floatAnim }]
            }
          ]}
        >
          <Text style={styles.avatarText}>👑</Text>
        </Animated.View>

        <Text style={styles.title}>Welcome Back 💖</Text>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.sub}>
          Kamu berhasil login ke Arini Secure App 🌸
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.box}>
            <Text style={styles.boxNum}>24</Text>
            <Text style={styles.boxText}>Likes</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxNum}>18</Text>
            <Text style={styles.boxText}>Friends</Text>
          </View>

          <View style={styles.box}>
            <Text style={styles.boxNum}>99+</Text>
            <Text style={styles.boxText}>Charm</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.btnText}>Logout 💕</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd6eb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 35,
    padding: 28,
    alignItems: 'center',
    elevation: 10
  },

  topGlow: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 120,
    backgroundColor: '#ffe4f1',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 50,
    backgroundColor: '#ff69b4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
    elevation: 8
  },

  avatarText: {
    fontSize: 42
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff4fa3'
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333'
  },

  sub: {
    marginTop: 10,
    textAlign: 'center',
    color: '#777',
    paddingHorizontal: 15
  },

  statsRow: {
    flexDirection: 'row',
    marginTop: 28,
    justifyContent: 'space-between',
    width: '100%'
  },

  box: {
    backgroundColor: '#ffeaf4',
    width: '30%',
    padding: 15,
    borderRadius: 18,
    alignItems: 'center'
  },

  boxNum: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff4fa3'
  },

  boxText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4
  },

  button: {
    marginTop: 30,
    backgroundColor: '#ff69b4',
    width: '100%',
    padding: 16,
    borderRadius: 20
  },

  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});