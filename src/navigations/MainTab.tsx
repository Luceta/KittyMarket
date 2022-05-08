import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../theme/color";
import TabsOptions from "./TabOption";
import { Text, Image, View, TextBase } from "react-native";

import GobackButton from "../components/GobackButton";
import EtcHeader from "../components/EtcHeader";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitle: "",
        headerLeft: () => <GobackButton />,
        headerRight: () => <EtcHeader />,
      }}
    >
      {TabsOptions.map((tab) => {
        if (tab.name === "홈") {
          return (
            <Tab.Screen
              key={`screen-${tab.name}`}
              name={tab.name}
              component={tab.component}
              options={{
                headerTitle: "냥이마켓 피드",
                headerTitleAlign: "left",
                headerRight: () => <EtcHeader />, //TODO: make other component

                tabBarIcon: ({ focused }) => (
                  <Image
                    resizeMode="contain"
                    source={focused ? tab.activeIcon : tab.inactiveIcon}
                    style={{ width: 24, height: 24 }}
                  />
                ),
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      fontSize: 12,
                      color: focused ? colors.BROWN_COLOR : colors.DARK_GREY,
                    }}
                  >
                    {tab.name}
                  </Text>
                ),
              }}
            />
          );
        } else {
          return (
            <Tab.Screen
              key={`screen-${tab.name}`}
              name={tab.name}
              component={tab.component}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    resizeMode="contain"
                    source={focused ? tab.activeIcon : tab.inactiveIcon}
                    style={{ width: 24, height: 24 }}
                  />
                ),
                tabBarLabel: ({ focused }) => (
                  <Text
                    style={{
                      fontSize: 12,
                      color: focused ? colors.BROWN_COLOR : colors.DARK_GREY,
                    }}
                  >
                    {tab.name}
                  </Text>
                ),
              }}
            />
          );
        }
      })}
    </Tab.Navigator>
  );
}

/*

   <Tab.Screen
          key={`screen-${tab.name}`}
          name={tab.name}
          component={tab.component}
          options={{
            headerTitleAlign: "left",
            tabBarIcon: ({ focused }) => (
              <Image
                resizeMode="contain"
                source={focused ? tab.activeIcon : tab.inactiveIcon}
                style={{ width: 24, height: 24 }}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? colors.BROWN_COLOR : colors.DARK_GREY,
                }}
              >
                {tab.name}
              </Text>
            ),
          }}
        />
        */
