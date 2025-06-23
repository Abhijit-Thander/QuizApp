import { StyleSheet, Text, Alert, Pressable } from "react-native";
import React, { useContext } from "react";
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
      style={[styles.container, isSelected && { borderColor: "green" }]}
    >
      <Text style={styles.text}>{option}</Text>
    </Pressable>
  );
};

export default AnswerOpt;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    // backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 5,
  },
  text: {
    fontSize: 14,
    // fontWeight: "400",
  },
});
