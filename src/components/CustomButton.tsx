import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PressableProps,
} from "react-native";
import React from "react";

type CustomButton = {
  title: string;
  Icon?: React.ReactNode;
} & PressableProps;

const CustomButton = ({ title, Icon, ...PressableProps }: CustomButton) => {
  return (
    <Pressable style={styles.btn} {...PressableProps}>
      <Text style={styles.btnText}>{title}</Text>
      <View style={styles.btnIcon}>{Icon}</View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "center",
    width: "75%",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#005055",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    letterSpacing: 1.5,
  },
  btnIcon: {
    justifyContent: "center",
    position: "absolute",
    right: 20,
  },
});
