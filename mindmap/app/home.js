import { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS } from "../constants";
import ProfileBtn from "../components/ProfileBtn";

const Home = () => {
  const router = useRouter();

  function handleProfilePress() {
    router.push("/profile");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerRight: () => <ProfileBtn handlePress={handleProfilePress} />,
          headerTitle: " ",
        }}
      />
      <Text>Welcome, AtomicAudit!</Text>
      <TouchableOpacity onPress={() => router.push("/onboardqstn")}>
        <Text>To get started, click to take our baseline questionnaire</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Home;
