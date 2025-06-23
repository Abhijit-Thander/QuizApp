import { StyleSheet, Text, View } from "react-native";
import React from "react";

type CardProps = {
  title: string;
  children?: React.ReactNode;
};
const Card = ({ title, children }: CardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    minWidth: "85%",
    // height: "40%",
    // miHeight: "40%",
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});
