import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const _Layout = () => {
  const TabIcon = ({ focused, icons, title }: any) => {
    if (focused) {
      return (
        <ImageBackground
          source={images.highlight}
          className="flex flex-row w-full min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={icons} className="size-5" tintColor="#151312" />
          <Text className="text-secondary text-base font-semibold ml-2">
            {title}
          </Text>
        </ImageBackground>
      );
    } else {
      return (
        <View className="size-full justify-center mt-4 rounded-full items-center">
          <Image source={icons} className="size-5" tintColor="#A8B5DB" />
        </View>
      );
    }
  };
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 10,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icons={icons.home} title="Home" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icons={icons.save} title="Saved" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icons={icons.search} title="Search" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused} icons={icons.person} title="Profile" />
            );
          },
        }}
      />
    </Tabs>
  );
};

export default _Layout;
