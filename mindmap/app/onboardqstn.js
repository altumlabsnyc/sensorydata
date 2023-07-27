import React from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS } from "../constants";

function OnboardQstn() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTitle: "Baseline Questionnaire",
        }}
      />
      <Text>This is a questionnaire</Text>
    </SafeAreaView>
  );
}

export default OnboardQstn;
