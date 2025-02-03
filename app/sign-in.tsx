import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated'

import images from "@/constants/images"

const SignIn = () => {

  const handleLogin = () =>{};

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to 1159</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>Where innovation meets expertise. {"\n"}</Text>
          <Text className='text-primary-300'>A step nearer to your dream home</Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to 1159 with ease</Text>
          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
            <View>
            {/* <Image src='' className='h-5 w-5' resizeMode='contain' /> */}
            <Text>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn