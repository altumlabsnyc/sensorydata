import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ProfileBtn = () => {
  return (
    <TouchableOpacity style={styles.button}>
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
    width: 50,
    height: 50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ProfileBtn;
