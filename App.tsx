import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import QuizScreen from "./src/app/QuizScreen";
import Quizprovider from "./src/provider/Quizprovider";

export default function App() {
  return (
    <>
      <Quizprovider>
        <QuizScreen />
      </Quizprovider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
