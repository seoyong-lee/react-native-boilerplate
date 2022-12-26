import { COLOR } from "@/constants/colors";
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}: {
  onPress: () => void;
  text: string;
  type?: string;
  bgColor?: string;
  fgColor?: string;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}` as keyof typeof styles],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}` as keyof typeof styles],
          fgColor ? { color: fgColor } : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 16,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 12,
  },

  container_PRIMARY: {
    backgroundColor: COLOR.MAIN,
  },

  container_SECONDARY: {
    borderColor: "#bebebe",
    borderWidth: 2,
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 15,
  },

  text_SECONDARY: {
    color: "#7e7e7e",
  },

  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
