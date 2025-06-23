import { StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Quizdata from "../Data/Quizdata";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";

import { useQuizContext } from "../provider/Quizprovider";

const QuizScreen = () => {
  const {
    question,
    questionIndex,
    onNext,
    score,
    restart,
    bestScore,
    secondsLeft,
  } = useQuizContext();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Text>
          Question: {questionIndex + 1 && questionIndex}/{Quizdata.length}
        </Text>
      </View>

      {/* Question Card */}
      {question ? (
        <View>
          <QuestionCard question={question} />
          <Text
            style={{
              color: "#005055",
              fontWeight: "600",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Times left:{secondsLeft}s
          </Text>
        </View>
      ) : (
        <Card title="Well Done">
          <Text>Congratulations! You've completed the quiz🎉🎉.</Text>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <Text style={styles.scoreText}>Best Score: {bestScore}</Text>
        </Card>
      )}
      {/* Footer */}

      {question ? (
        <CustomButton
          onPress={onNext}
          title="Next"
          Icon={<FontAwesome6 name="chevron-right" size={20} color="#fff" />}
        ></CustomButton>
      ) : (
        <CustomButton title="Restart" onPress={restart} />
      )}
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#e7e8d9eb",
  },
  scoreText: {
    color: "#005055",
    fontWeight: "600",
    fontSize: 15,
    marginTop: 5,
  },
});
