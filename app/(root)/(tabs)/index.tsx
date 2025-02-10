import { SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import colors from "@/constants/Colors";

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={images.avatar} style={{ width: 24, height: 24, borderRadius: 12 }} />
            <View style={{ flexDirection: "column", alignItems: "center", marginLeft: 8, justifyContent: "center" }}>
              <Text style={{ fontSize: 12, fontFamily: "Rubik", color: colors.black100 }}>
                Good day
              </Text>
              <Text style={{ fontSize: 16, fontFamily: "Rubik-Medium", color: colors.black300 }}>
                thEgod
              </Text>
            </View>
          </View>
          <Image source={icons.bell} style={{ width: 24, height: 24 }} />
        </View>

        <Search />

        <View style={{ marginVertical: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, fontFamily: "Rubik-Bold", color: colors.black300 }}>
              Popular Properties
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, fontFamily: "Rubik-Bold", color: colors.black300 }}>
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}