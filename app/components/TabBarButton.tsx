import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icon } from "@/constants/Icons";

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  label: string | any;
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, label, routeName } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarButton}
    >
      {/* Cart Badge is here */}
      {routeName === "cart" && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      )}
      {icon[routeName]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>{label}</Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  badgeWrapper: {
    position: "absolute",
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    backgroundColor: Colors.highlight,
    zIndex: 10,
  },
  badgeText: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: "bold",
  },
});
