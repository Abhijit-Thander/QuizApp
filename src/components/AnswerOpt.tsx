import { StyleSheet, Text, Pressable, View } from "react-native";
import React from "react";
import { useQuizContext } from "../provider/Quizprovider";

type AnswerOptProps = {
  option: string;
};

const AnswerOpt: React.FC<AnswerOptProps> = ({ option }) => {
  const { selectedOption, setSelectedOption } = useQuizContext();

  const isSelected = option === selectedOption;  

  return (
    <Pressable
      onPress={() => setSelectedOption(option)}
      style={({ pressed }) => [
        styles.container,
        isSelected && styles.selected,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {option}
      </Text>
    </Pressable>
  );
};

export default AnswerOpt;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#f7f7f7",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 0.8,
    borderColor: "#ccc",
    marginVertical: 6,
  },
  selected: {
    backgroundColor: "#14CF93",
    borderColor: "#14CF93",
  },
  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.85,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  selectedText: {
    color: "white",
    fontWeight: "600",
  },
});
