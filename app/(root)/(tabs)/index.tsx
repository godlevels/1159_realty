import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import '../../globals.css';

export default function Index() {
  return (
    <View className="container">
      <Text className="welcomeText">Welcome to 1159</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
    </View>
  );
}