import React from "react";
import { View, Text, Image } from "react-native";
import images from "@/constants/images";
import colors from "@/constants/Colors";


const NoResults = () => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center", marginVertical: 20 }}>
      <Image
        source={images.noResult}
        style={{ width: "91.666667%", height: 320 }} 
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 24, 
          fontFamily: "Rubik-Bold", 
          color: colors.black300, 
          marginTop: 20, 
        }}
      >
        No Result
      </Text>
      <Text
        style={{
          fontSize: 16, 
          color: colors.black100, 
          marginTop: 8,
        }}
      >
        We could not find any result
      </Text>
    </View>
  );
};

export default NoResults;