import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity } from "react-native";

import { categories } from "@/constants/data";
import colors from "@/constants/Colors";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory("");
      router.setParams({ filter: "" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={{ marginTop: 12, marginBottom: 8 }} 
  >
    {categories.map((item, index) => (
      <TouchableOpacity
        onPress={() => handleCategoryPress(item.category)}
        key={index}
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginRight: 16, 
          paddingHorizontal: 16, 
          paddingVertical: 8, 
          borderRadius: 9999, 
          backgroundColor: selectedCategory === item.category ? colors.primary300 : colors.primary100,
          borderColor: selectedCategory === item.category ? 'transparent' : colors.primary200,
          borderWidth: selectedCategory === item.category ? 0 : 1,
        }}
      >
        <Text
          style={{
            fontSize: 14, 
            color: selectedCategory === item.category ? 'white' : colors.black300,
            fontFamily: selectedCategory === item.category ? 'Rubik-Bold' : 'Rubik',
            marginTop: selectedCategory === item.category ? 2 : 0, 
          }}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
  );
};

export default Filters;
