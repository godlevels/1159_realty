import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
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
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }
    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategory(item.category)}
            style={[
              styles.categoryButton,
              {
                backgroundColor: selectedCategory === item.category ? colors.black300 : colors.black200,
                borderColor: selectedCategory === item.category ? 'transparent' : colors.black300,
              }
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                {
                  color: selectedCategory === item.category ? 'white' : colors.black300,
                  fontFamily: selectedCategory === item.category ? 'Rubik-Bold' : 'Rubik',
                }
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryScroll: {
    marginBottom: 5,
  },
  categoryButton: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginRight: 16,
    paddingHorizontal: 26,
    paddingVertical: 8,
    borderRadius: 9999,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 14,
  },
  recommendationsContainer: {
    marginTop: 16,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Filter;