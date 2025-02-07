import React from "react";
import icons from "@/constants/icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";

interface ProfileItemsProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const ProfileItems = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: ProfileItemsProps) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex flex-row items-center justify-between py-3"
  >
    <View className="flex flex-row items-center gap-3">
      <Image source={icon} className="size-6" />
      <Text className="text-lg font-rubik-medium text-black-300">{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className="size-5" />}
  </TouchableOpacity>
);

const Profile = () => {
  const handleLogout = async () => {};
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 8, paddingHorizontal: 28 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "Rubik-Bold" }}>
            Profile
          </Text>
          <Image source={icons.bell} style={{ width: 5, height: 5 }} />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              marginTop: 20,
            }}
          >
            <Image
              source={images.avatar}
              style={{ width: 176, height: 176, borderRadius: 88 }}
            />
            <TouchableOpacity
              style={{ position: "absolute", bottom: 44, right: 8 }}
            >
              <Image source={icons.edit} style={{ width: 36, height: 36 }} />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 24, fontFamily: "Rubik-Bold", marginTop: 8 }}
            >
              Paulo
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column", marginTop: 40 }}>
          <ProfileItems icon={icons.calendar} title="My Bookings" />
          <ProfileItems icon={icons.wallet} title="Payments" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
