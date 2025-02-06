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
// import { login } from "@/lib/appwrite";
// import { useGlobalContext } from "@/lib/global-provider";
// import { Redirect } from "expo-router";
import images from "@/constants/images";
// import icons from "@/constants/icons";

const SignIn = () => {
  const handleLogin = () => {};
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <View>
          <Image
            source={images.onboarding}
            className="w-full h-4/6"
            resizeMode="contain"
          />
          <View className="px-10">
            <Text className="text-base text-center uppercase font-rubik text-black-200">
              Welcome to 1159
            </Text>
            <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
              Where innovation meets expertise. {"\n"}
            </Text>
            <Text className="text-primary-300">
              A step nearer to your dream home
            </Text>
            <Text className="text-lg font-rubik text-black-200 text-center mt-12">
              Login to 1159 with ease
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              {/* <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              /> */}
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Login With Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
