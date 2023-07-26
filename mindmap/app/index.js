import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";
import ProfileBtn from "../components/ProfileBtn";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerRight: () => <ProfileBtn />,
          headerTitle: " ",
        }}
      />
      <Text>Welcome, AtomicAudit!</Text>
    </SafeAreaView>
  );
};
export default Home;
