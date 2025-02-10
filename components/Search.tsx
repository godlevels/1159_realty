import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useLocalSearchParams, router } from "expo-router";
import icons from "@/constants/icons";
import colors from "@/constants/Colors";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query || "");

  const wait = 500;
  const debouncedSearch = useDebouncedCallback((text: string) => router.setParams({ query: text }), wait);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: colors.accent100,
        borderColor: colors.primary100,
        borderWidth: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          zIndex: 50,
        }}
      >
        <Image
          source={icons.search}
          style={{ width: 20, height: 20 }}
        />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search"
          style={{
            fontSize: 14,
            fontFamily: "Rubik",
            color: colors.black300,
            marginLeft: 8,
            flex: 1,
          }}
        />
      </View>

      <TouchableOpacity>
        <Image
          source={icons.filter}
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;