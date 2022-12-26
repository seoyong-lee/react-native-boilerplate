import React from "react";
import { Text, StyleSheet, Image, Pressable } from "react-native";

const SocailLoginButton = ({
  onPress,
  text,
  logo,
  border,
  bgColor,
  fgColor,
}: {
  onPress: () => void;
  text: string;
  logo?: any;
  border?: boolean;
  bgColor?: string;
  fgColor?: string;
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        bgColor
          ? { backgroundColor: bgColor }
          : border
          ? { borderColor: "#bebebe", borderWidth: 1 }
          : {},
      ]}>
      <Image style={styles.logo} source={logo} />
      <Text style={[styles.text, fgColor ? { color: fgColor } : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    marginVertical: 8,

    alignItems: "center",
    borderRadius: 12,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontWeight: "600",
    color: "white",
    fontSize: 16,
  },
});

export default SocailLoginButton;
