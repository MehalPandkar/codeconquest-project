import { useReducer } from "react";
import StartScreen from "./StartScreen";
import Categories from "./Categories";
import Question from "./Question";
import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import NextButton from "./NextButton";
import ProgressBar from "./ProgressBar";
import FinishScreen from "./FinishScreen";
import { Typography } from "@material-tailwind/react";

const initialState = {
  questions: [],
  status: "begin",
  category: "",
  index: 0,
  answer: null,
  correctAnswer: null,
  points: 0,
  highscore: { code: 0, sql: 0, linux: 0, bash: 0, devops: 0, docker: 0 },
};

function reducer(state, action) {
  switch (action.type) {
    case "startscreen":
      return { ...state, status: "begin", questions: [], category: "" };
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "chooseCategory":
      return { ...state, category: action.payload };
    case "isFetching":
      return { ...state, status: "loading", questions: [] };
    case "newAnswer":
      const question = state.questions.at(state.index);
      const correctAnswerKey = Object.entries(question.correct_answers).find(
        ([key, value]) => value === "true"
      )[0];
      const correctAnswer = correctAnswerKey?.slice(0, 8);
      return {
        ...state,
        answer: action.payload,
        correctAnswer: correctAnswer,
        points:
          correctAnswer === action.payload ? state.points + 10 : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
        correctAnswer: null,
      };
    case "finish":
      const category = state.category;
      const updatedHighscore = { ...state.highscore };
      updatedHighscore[category] =
        state.points > state.highscore[category]
          ? state.points
          : state.highscore[category];
      return {
        ...state,
        status: "finished",
        highscore: updatedHighscore,
      };
    case "restart":
      return {
        ...state,
        status: "begin",
        answer: null,
        correctAnswer: null,
        points: 0,
        questions: [],
        category: "",
        index: 0,
      };
    default:
      throw new Error("Unknown Action");
  }
}

function App() {
  const [
    {
      questions,
      status,
      category,
      index,
      answer,
      correctAnswer,
      points,
      highscore,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  return (
    <div className="flex flex-col min-h-screen">
      <Header>
        <Nav dispatch={dispatch} />
      </Header>
      <div>
        {status === "begin" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <Categories dispatch={dispatch} category={category} />
        )}
        {status === "loading" && <Loader />}
        {status === "error" && <Error dispatch={dispatch} />}
        {status === "ready" && (
          <div className="px-5 md:px-32 pt-20">
            <ProgressBar
              index={index}
              numQuestions={numQuestions}
              answer={answer}
              points={points}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              index={index}
              answer={answer}
              correctAnswer={correctAnswer}
            />
            <Footer>
              <NextButton
                dispatch={dispatch}
                index={index}
                numQuestions={numQuestions}
                answer={answer}
              />
            </Footer>
          </div>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            numQuestions={numQuestions}
            highscore={highscore}
            dispatch={dispatch}
            category={category}
          />
        )}
      </div>
    </div>
  );
}

export default App;
