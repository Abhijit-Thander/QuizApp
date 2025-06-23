import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { createContext } from "react";
import Quizdata from "../Data/Quizdata";
import { Question } from "../types";

type QuizContext = {
  question?: Question;
  questionIndex: number;
  onNext: () => void;
  selectedOption?: string | null;
  setSelectedOption: (newoption: string) => void;
  score: number;
  bestScore: number;
  restart: () => void;
  secondsLeft: number;
};

const QuizContext = createContext<QuizContext>({
  questionIndex: 0,
  onNext: () => {},
  setSelectedOption: () => {},
  score: 0,
  bestScore: 0,
  restart: () => {},
  secondsLeft: 0,
});

const Quizprovider = ({ children }: PropsWithChildren) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = Quizdata[questionIndex];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(20);

  const isFinished = questionIndex >= Quizdata.length; // Initialize with the second option
  const restart = () => {
    setQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
  };

  useEffect(() => {
    if (isFinished && score > bestScore) {
      setBestScore(score);
    }
  }, [isFinished, score]);

  // this useeffect for auto timer
  useEffect(() => {
    if (isFinished) return;

    setSecondsLeft(20);
    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      onNext();
    }, 20000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [questionIndex, selectedOption]);

  const onNext = () => {
    if (isFinished) {
      restart();
      return;
    }
    // check is ans is correct
    if (selectedOption === question.answer) {
      setScore((prev) => prev + 1);
    }
    setQuestionIndex((prev) => prev + 1);
  };

  return (
    <QuizContext.Provider
      value={{
        question,
        questionIndex,
        onNext,
        selectedOption,
        setSelectedOption,
        score,
        restart,
        bestScore,
        secondsLeft,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default Quizprovider;

export const useQuizContext = () => useContext(QuizContext);
