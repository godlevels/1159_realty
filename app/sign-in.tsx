import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet
} from "react-native";
import React from "react";
// import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "white",
    height: "100%",
  },
  scrollViewContent: {
    height: "100%",
  },
  container: {
    paddingHorizontal: 40,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Rubik",
    color: "#666876",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Rubik-Bold",
    color: "#333",
    textAlign: "center",
    marginTop: 8,
  },
  subtitleText: {
    color: "#0061FF", 
  },
  loginText: {
    fontSize: 18,
    fontFamily: "Rubik",
    color: "#666876", 
    textAlign: "center",
    marginTop: 48,
  },
  loginButton: {
    backgroundColor: "white",
    shadowColor: "#d4d4d8", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 9999,
    width: "100%",
    paddingVertical: 16,
    marginTop: 20,
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 16,
  },
});

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href='/' />

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      // console.log("User logged in successfully");
      refetch({});
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <Text style={styles.welcomeText}>
            Welcome to 1159
          </Text>
          <Text style={styles.titleText}>
            Where innovation meets expertise. {"\n"}
          </Text>
          <Text style={styles.subtitleText}>
            A step nearer to your dream home
          </Text>
          <Text style={styles.loginText}>
            Login to 1159 with ease
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.loginButton}
          >
            <View>
              {/* <Image src='' style={{ height: 20, width: 20 }} resizeMode='contain' /> */}
              <Text style={styles.loginButtonText}>Login With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;