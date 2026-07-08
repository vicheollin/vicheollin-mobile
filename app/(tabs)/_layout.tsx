import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import { colors, fonts } from "@/constants/theme";

const TABS = [
  { name: "index", title: "홈", icon: "home" },
  { name: "experience", title: "체험", icon: "compass" },
  { name: "community", title: "소식", icon: "bell" },
  { name: "menu", title: "메뉴", icon: "menu" },
] as const;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.dim,
        tabBarStyle: {
          backgroundColor: colors.paper,
          borderTopColor: colors.lineSoft,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.sansMedium,
          fontSize: 10,
        },
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => (
              <Feather name={tab.icon} size={size - 4} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
