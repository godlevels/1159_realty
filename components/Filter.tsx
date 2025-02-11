import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { categories } from "@/constants/data";
import colors from "@/constants/Colors";

const Filter = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategory = (category: string) => {
    if (selectedCategory == category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filter: category });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 3, marginBottom: 2 }}
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategory(item.category)}
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            marginRight: 16,
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 9999,
            backgroundColor:
              selectedCategory == item.category
                ? colors.black300
                : colors.black200,
            borderColor:
              selectedCategory == item.category
                ? "transparent"
                : colors.black300,
            borderWidth: selectedCategory == item.category ? 0 : 1,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color:
                selectedCategory == item.category ? "white" : colors.black300,
              fontFamily:
                selectedCategory == item.category ? "Rubik-Bold" : "Rubik",
              marginTop: selectedCategory == item.category ? 2 : 0,
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filter;
