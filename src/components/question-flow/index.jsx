import React from "react";
import { NewQuestion } from "../new-question";
import { Question } from "../question";

//Presentation layer

function QuestionFlow() {
  return (
    <div>
      <Question />
      <NewQuestion />
    </div>
  );
}

export default QuestionFlow;
