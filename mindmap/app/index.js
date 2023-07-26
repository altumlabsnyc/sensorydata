import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";

const Home = () => {
  // console.log(COLORS);
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <Stack.Screen
        options={{ headerStyle: { backgroundColor: COLORS.secondary } }}
      />
      <Text>moo</Text>
    </SafeAreaView>
  );
};
export default Home;
