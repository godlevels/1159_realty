import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import icons from "@/constants/icons";
// import "nativewind/tailwind.css";

const TabIcon = ({
  focused,
  icon,
  title,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => (
  <View className="flex-1 mt-3 flex-col items-center">
    <Image
      source={icon}
      className="w-6 h-6"
      style={{ tintColor: focused ? "#0061FF" : "#666876" }}
      resizeMode="contain"
    />
    <Text
      className={`text-xs w-full text-center mt-1 ${
        focused ? "text-[#0061FF] font-medium" : "text-[#666876] font-normal"
      }`}
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
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#f4a803",
          borderTopWidth: 1,
          minHeight: 70,
        },
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