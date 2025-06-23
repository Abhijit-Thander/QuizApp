import { View } from "react-native";
import React from "react";
import AnswerOpt from "./AnswerOpt";
import Card from "./Card";

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  // Initialize with the second option

  return (
    <Card title={question.question}>
      <View style={{ marginTop: 10 }}>
        {question.options.map((option, index) => (
          <AnswerOpt key={index} option={option} />
        ))}
      </View>
    </Card>
  );
};

export default QuestionCard;
