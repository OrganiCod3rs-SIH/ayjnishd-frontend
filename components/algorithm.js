import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "Do you have a problem hearing over the telephone?",
      answerOptions: [
        { option: "Yes", score: 80 },
        { option: "No", score: 0 },
      ],
    },
    {
      questionText:
        "Do you hear better in one ear than the other when you are on the phone?",
      answerOptions: [
        { option: "Yes", score: 100 },
        { option: "No", score: 0 },
      ],
    },
    {
      questionText:
        "Do you have trouble understanding when two or more people talk at the same time?",
      answerOptions: [
        { option: "Yes", score: 60 },
        { option: "No", score: 0 },
      ],
    },
    {
      questionText:
        "Are you able to hear soft sounds such as a ticking clock or dripping faucets?",
      answerOptions: [
        { option: "Yes", score: 0 },
        { option: "No", score: 60 },
      ],
    },
    {
      questionText: "Do you have trouble hearing in a noisy place?",
      answerOptions: [
        { option: "Yes", score: 40 },
        { option: "No", score: 0 },
      ],
    },
    {
      questionText: "Do you have dizziness, pain, or ringing in your ears?",
      answerOptions: [
        { option: "Yes", score: 100 },
        { option: "No", score: 0 },
      ],
    },
    {
      questionText:
        "Are you able to hear loud sounds like door bell rings or alarm clocks?",
      answerOptions: [
        { option: "Yes", score: 0 },
        { option: "No", score: 100 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("");

  const createResult = () => {
    if (score >= 480) {
      setResult("profound");
    } else if (score >= 300 && score < 480) {
      setResult("severe");
    } else if (score >= 200 && score < 300) {
      setResult("moderate");
    } else {
      setResult("mild");
    }
  };

  const handleAnswerOptionClick = (currentScore) => {
    setScore(score + currentScore);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      createResult();
      setShowResult(true);
    }
  };
  return (
    <div className="app">
      {showResult ? (
        <div className="result">
          You might have a {result} symptom of hearing loss. Please consult an
          audiologist.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section" key="">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                key=""
                onClick={() => handleAnswerOptionClick(answerOption.score)}
              >
                {answerOption.option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
