import React from "react";
import icons from "@/constants/icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  Alert,
} from "react-native";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import colors from "@/constants/Colors";
import { profiles } from "@/constants/data";
import { useGlobalContext } from "@/lib/global-provider";
import { logout } from "@/lib/appwrite";

interface ProfileItemsProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: object;
  showArrow?: boolean;
}

const ProfileItems = ({
  icon,
  title,
  onPress,
  textStyle = {},
  showArrow = true,
}: ProfileItemsProps) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 12,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
      <Image source={icon} style={{ width: 6, height: 6 }} />
      <Text
        style={[
          {
            fontSize: 18,
            fontFamily: "Rubik-Medium",
            color: colors.black300,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} style={{ width: 10, height: 10 }} />}
  </TouchableOpacity>
);

const Profile = () => {
  const { user, refetch } = useGlobalContext();

  const handleLogout = async () => {
    const result = await logout();
    if (result) {
      Alert.alert("Success", "Logged out successfully");
      refetch({});
    } else {
      Alert.alert("Error", "Failed to logout");
    }
  };
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

        <View
        style={{
          flexDirection: "column",
          marginTop: 20,
          borderTopWidth: 1,
          paddingTop: 20,
          borderColor: colors.primary200,
        }}
      >
        {profiles.slice(2).map((item, index) => (
          <ProfileItems key={index} {...item} />
        ))}
      </View>

      <View
        style={{
          flexDirection: "column",
          borderTopWidth: 1,
          marginTop: 20,
          paddingTop: 20,
          borderColor: colors.primary200,
        }}
      >
        <ProfileItems
          icon={icons.logout}
          title="Logout"
          textStyle={{ color: colors.danger }}
          showArrow={false}
          onPress={handleLogout}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
