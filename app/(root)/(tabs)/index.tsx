import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={{
      display:'flex',
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
    }}>
      <Text className='font-bold my-10 font-rubik text-3xl'>Welcome  to 1159</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/profile">Profile</Link>
      {/* <Link href="/properties/[id]">Property</Link> */}
    </View>
  )
}