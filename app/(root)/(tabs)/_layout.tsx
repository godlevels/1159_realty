import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View, StyleSheet } from "react-native";

import icons from "@/constants/icons";

const styles = StyleSheet.create({
  tabIconContainer: {
    flex: 1,
    marginTop: 12,
    flexDirection: "column",
    alignItems: "center",
  },
  tabIconImage: {
    width: 24,
    height: 24,
  },
  tabIconText: {
    fontSize: 10,
    width: "100%",
    textAlign: "center",
    marginTop: 4,
  },
  tabIconTextFocused: {
    color: "#0061FF",
    fontFamily: "Rubik-Medium",
  },
  tabIconTextUnfocused: {
    color: "#666876",
    fontFamily: "Rubik",
  },
  tabBarStyle: {
    backgroundColor: "white",
    position: "absolute",
    borderTopColor: "#f4a803",
    borderTopWidth: 1,
    minHeight: 70,
  },
});

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => (
  <View style={styles.tabIconContainer}>
    <Image
      source={icon}
      style={[
        styles.tabIconImage,
        { tintColor: focused ? "#0061FF" : "#666876" },
      ]}
      resizeMode="contain"
    />
    <Text
      style={[
        styles.tabIconText,
        focused ? styles.tabIconTextFocused : styles.tabIconTextUnfocused,
      ]}
    >
      {title}
    </Text>
  </View>
);

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;