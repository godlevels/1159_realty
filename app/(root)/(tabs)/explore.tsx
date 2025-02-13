import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";

import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card } from "@/components/Cards";

import NoResults from "@/components/NoResults";

import { getProperties } from "@/lib/appwrite";
import { useAppwrite } from "@/lib/useAppwrite";
import Filters from "@/components/Filters";
import colors from "@/constants/Colors";

const Explore = () => {
  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  const {
    data: properties,
    refetch,
    loading,
  } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter!,
      query: params.query!,
    },
    skip: true,
  });

  useEffect(() => {
    refetch({
      filter: params.filter!,
      query: params.query!,
    });
  }, [params.filter, params.query]);

  const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fff" }}>
      <FlatList
        data={properties}
        numColumns={2}
        renderItem={({ item }) => (
          <Card item={item} onPress={() => handleCardPress(item.$id)} />
        )}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={{ paddingBottom: 30 }}
        columnWrapperStyle={{ display: "flex", gap: 5, paddingVertical: 5 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          loading ? (
            <ActivityIndicator size="large" color={colors.black200} />
          ) : (
            <NoResults />
          )
        }
        ListHeaderComponent={() => (
          <View style={{ paddingVertical: 5 }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                onPress={() => router.back()}
                style={{
                  flexDirection: "row",
                  backgroundColor: colors.primary200,
                  borderRadius: 9999,
                  width: 44,
                  height: 44,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.backArrow}
                  style={{ width: 20, height: 20 }}
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 16,
                  marginRight: 8,
                  textAlign: "center",
                  fontFamily: "Rubik-Medium",
                  color: colors.black300,
                }}
              >
                Search for Your Ideal Home
              </Text>
              <Image source={icons.bell} style={{ width: 24, height: 24 }} />
            </View>

            <Search />

            <View style={{ marginTop: 20 }}>
              <Filters />

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Rubik-Bold", 
                  color: colors.black300, 
                  marginTop: 20,
                }}
              >
                Found {properties?.length} Properties
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Explore;
