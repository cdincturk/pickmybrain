import { createContext } from "react";

const QuestionContext = createContext();

function QuestionContextProvider({ children, data }) {
  return (
    <QuestionContext.Provider value={data}>{children}</QuestionContext.Provider>
  );
}

function useQuestion() {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error(
      "useQuestion must be used within a QuestionContextProvider"
    );
  }

  return context;
}

export { QuestionContextProvider, useQuestion };
