import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import colors from "@/constants/Colors";
import { Card, PopularCards } from "@/components/Cards";
import Filter from "@/components/Filter";

export default function Index() {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={images.avatar}
              style={{ width: 24, height: 24, borderRadius: 12 }}
            />
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginLeft: 6,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Rubik",
                  color: colors.black100,
                }}
              >
                Good day
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Rubik-Medium",
                  color: colors.black300,
                }}
              >
                thEgod
              </Text>
            </View>
          </View>
          <Image source={icons.bell} style={{ width: 20, height: 20 }} />
        </View>

        <Search />

        <View style={{ marginVertical: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Rubik-Bold",
                color: colors.black300,
              }}
            >
              Popular Properties
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Rubik-Medium",
                  color: colors.black100,
                }}
              >
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
            <PopularCards />
            <PopularCards />
            <PopularCards />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Rubik-Bold",
              color: colors.black300,
            }}
          >
            Our Recommendations
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Rubik-Medium",
                color: colors.black100,
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>

        <Filter />
        
        <View style={{ flexDirection: "row", gap: 20, marginTop: 20 }}>
          <Card />
          <Card />
        </View>
      </View>
    </SafeAreaView>
  );
}
