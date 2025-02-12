import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import colors from "@/constants/Colors";
import { Card, PopularCards } from "@/components/Cards";
import Filter from "@/components/Filter";
import { useGlobalContext } from "@/lib/global-provider";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Card />}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.userInfo}>
                <Image
                   source={{ uri: user?.avatar }}
                  style={styles.avatar}
                />
                <View style={styles.userText}>
                  <Text style={styles.greeting}>Good day</Text>
                  <Text style={styles.username}>{user?.name}</Text>
                </View>
              </View>
              <Image source={icons.bell} style={styles.bellIcon} />
            </View>

            <Search />

            <View style={styles.popularSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Popular Properties</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.popularCards}>
                <PopularCards />
                <PopularCards />
                <PopularCards />
              </View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Our Recommendations</Text>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>

            <Filter />

            <View style={styles.recommendations}>
              <Card />
              <Card />
            </View>
          </View>
        }
        ListFooterComponent={<View style={styles.footer} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 32,
  },
  columnWrapper: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  userText: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 6,
    justifyContent: "center",
  },
  greeting: {
    fontSize: 10,
    fontFamily: "Rubik",
    color: colors.black100,
  },
  username: {
    fontSize: 10,
    fontFamily: "Rubik-Medium",
    color: colors.black300,
  },
  bellIcon: {
    width: 20,
    height: 20,
  },
  popularSection: {
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily: "Rubik-Bold",
    color: colors.black300,
  },
  seeAll: {
    fontSize: 12,
    fontFamily: "Rubik-Medium",
    color: colors.black100,
  },
  popularCards: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  recommendations: {
    flexDirection: "row",
    gap: 20,
    marginTop: 20,
  },
  footer: {
    height: 50,
  },
});