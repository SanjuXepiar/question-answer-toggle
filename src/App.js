import React, { useState } from "react";
import "./App.css";
import data from "./Data";
// The Question component has been called as SingleQuestion as it has been exported as default.
import SingleQuestions from "./Questions";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <div className="main">
      <h2>Question and Answers!</h2>
      <section>
        {questions.map((question) => {
          return <SingleQuestions key={question.id} {...question} />;
        })}
      </section>
    </div>
  );
}

export default App;
