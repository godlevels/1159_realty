import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import React from "react";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
  const { refetch, loading, isLogged } = useGlobalContext();

  if(!loading && isLogged) return <Redirect href='/' />

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
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.container}
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
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View>
              {/* <Image src='' className='h-5 w-5' resizeMode='contain' /> */}
              <Text>Login With Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
