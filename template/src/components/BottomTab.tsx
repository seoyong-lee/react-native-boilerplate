import React, { ReactNode } from "react";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import IconPlus from "react-native-vector-icons/AntDesign";

import { COLOR } from "@/constants/colors";

const BottomTab: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  if (state.index === 2) {
    return <></>;
  }

  return (
    <View
      style={{
        ...styles.body,
        paddingBottom: insets.bottom,
        height: 64 + insets.bottom,
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const tabColor = isFocused ? COLOR.MAIN : COLOR.BLACK_80;

        if (label === "Menu3") {
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.middleMenu}>
              <IconPlus name="pluscircle" size={48} color={COLOR.MAIN} />
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.menu}>
            {index === 0 ? (
              <Icon name="radio-outline" size={26} color={tabColor} />
            ) : index === 1 ? (
              <Icon name="game-controller-outline" size={26} color={tabColor} />
            ) : index === 3 ? (
              <Icon
                name="chatbubble-ellipses-outline"
                size={24}
                color={tabColor}
              />
            ) : index === 4 ? (
              <Icon name="person-outline" size={24} color={tabColor} />
            ) : (
              <></>
            )}
            <Text style={{ ...styles.menuText, color: tabColor }}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  body: {
    width: "100%",
    paddingHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.WHITE,
  },
  menu: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middleMenu: {
    justifyContent: "center",
    alignItems: "center",
    width: 62,
    height: 62,
    borderRadius: 62,
    marginBottom: 22,
    backgroundColor: COLOR.WHITE,
  },
  menuText: {
    paddingTop: 7,
    fontSize: 10,
    fontWeight: "600",
  },
});
