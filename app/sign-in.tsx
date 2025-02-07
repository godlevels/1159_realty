import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import images from "@/constants/images";
import colors from "@/constants/Colors";
// import icons from "@/constants/icons";

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/" />;

  const handleLogin = async () => {
    const result = await login();
    if (result) {
      refetch({});
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Image
            source={images.onboarding}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome to 1159</Text>
            <Text style={styles.innovationText}>
              Where innovation meets expertise. {"\n"}
            </Text>
            <Text style={styles.stepText}>
              A step nearer to your dream home
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.loginButton}
          >
            <View style={styles.loginButtonContent}>
              <Text style={styles.loginButtonText}>
                Login With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    height: "100%",
  },
  scrollView: {
    height: "100%",
  },
  image: {
    width: "100%",
    height: "66.67%",
  },
  textContainer: {
    paddingHorizontal: 40,
  },
  welcomeText: {
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Rubik",
    color: "#666876",
  },
  innovationText: {
    fontSize: 20,
    fontFamily: "Rubik-Bold",
    color: "#191D31",
    textAlign: "center",
    marginTop: 8,
  },
  stepText: {
    color: colors.black200,
    textAlign:'center',
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Rubik-Light',
  },
  loginButton: {
    backgroundColor: "white",
    shadowColor: "#d1d5db",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 9999,
    width: "60%",
    paddingVertical: 16,
    marginTop: 40,
    borderWidth: 1,
    alignSelf: "center",
  },
  loginButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    fontSize: 18,
    fontFamily: "Rubik-Medium",
    color: colors.black300,
    marginLeft: 8,
  },
});

export default SignIn;