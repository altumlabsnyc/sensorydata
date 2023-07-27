import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ProfileBtn = ({ handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image
        source={require("../assets/blank_profile.png")}
        resizeMode="contain"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileBtn;
