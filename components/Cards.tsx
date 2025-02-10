import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
  onPress?: () => void;
}

export const PopularCards = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        width: 240,
        height: 320,
        position: "relative",
      }}
    >
      <Image
        source={images.japan}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 16,
        }}
      />
      <Image
        source={images.cardGradient}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 16,
          position: "absolute",
          bottom: 0,
        }}
      />

        <View style={{ position: 'absolute', top: 20, right: 20 }}>
            <Image source={icons.heart} style={{ width: 20, height: 20 }} />
        </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20, 
            fontFamily: 'Rubik-ExtraBold',
            color: 'white', 
          }}
          numberOfLines={1}
        >
          Kings Court
        </Text>
        <Text
          style={{
            fontSize: 16, 
            fontFamily: 'Rubik', 
            color: 'white', 
          }}
        >
          GRA ILR, NG
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <Text
            style={{
              fontSize: 20, 
              fontFamily: 'Rubik-ExtraBold', 
              color: 'white', 
            }}
          >
            $1,500
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "column",
        alignItems: "flex-start",
        width: 240,
        height: 320,
        position: "relative",
      }}
    >
      <Image
        source={images.japan}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 16,
        }}
      />
      <Image
        source={images.cardGradient}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 16,
          position: "absolute",
          bottom: 0,
        }}
      />

        <View style={{ position: 'absolute', top: 20, right: 20 }}>
            <Image source={icons.heart} style={{ width: 20, height: 20 }} />
        </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20, 
            fontFamily: 'Rubik-ExtraBold',
            color: 'white', 
          }}
          numberOfLines={1}
        >
          Kings Court
        </Text>
        <Text
          style={{
            fontSize: 16, 
            fontFamily: 'Rubik', 
            color: 'white', 
          }}
        >
          GRA ILR, NG
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <Text
            style={{
              fontSize: 20, 
              fontFamily: 'Rubik-ExtraBold', 
              color: 'white', 
            }}
          >
            $1,500
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
