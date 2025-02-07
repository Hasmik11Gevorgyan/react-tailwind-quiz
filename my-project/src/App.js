
import './App.css';
import React, { useState } from "react";

export default function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      questionText: "What is the capital of America?",
      answerOptions: [
        { answerText: "New York City", isCorrect: false },
        { answerText: "Boston", isCorrect: false },
        { answerText: "Santa Fe", isCorrect: false },
        { answerText: "Washington DC", isCorrect: true },
      ],
    },
    {
      questionText: "What year was the Constitution of America written?",
      answerOptions: [
        { answerText: "1787", isCorrect: true },
        { answerText: "1776", isCorrect: false },
        { answerText: "1774", isCorrect: false },
        { answerText: "1826", isCorrect: false },
      ],
    },
    {
      questionText: "Who was the second president of the US?",
      answerOptions: [
        { answerText: "John Adams", isCorrect: true },
        { answerText: "Paul Revere", isCorrect: false },
        { answerText: "Thomas Jefferson", isCorrect: false },
        { answerText: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      questionText: "What is the largest state in the US?",
      answerOptions: [
        { answerText: "California", isCorrect: false },
        { answerText: "Alaska", isCorrect: true },
        { answerText: "Texas", isCorrect: false },
        { answerText: "Montana", isCorrect: false },
      ],
    },
    {
      questionText: "Which of the following countries DO NOT border the US?",
      answerOptions: [
        { answerText: "Canada", isCorrect: false },
        { answerText: "Russia", isCorrect: true },
        { answerText: "Cuba", isCorrect: false },
        { answerText: "Mexico", isCorrect: false },
      ],
    },
  ];

  const handleAnswerQuestion = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {showScore ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-lg">Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">React Quiz</h2>
          <h3 className="text-lg mb-4">{questions[currentQuestion].questionText}</h3>
          <div className="space-y-2">
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerQuestion(index, option.isCorrect)}
                className={`w-full p-2 rounded-md text-left transition-all duration-200 
                  ${answered ? option.isCorrect ? "bg-green-300" : selectedAnswer === index ? "bg-red-300" : "bg-gray-100" 
                  : "bg-gray-100 hover:bg-gray-200"}`}
              >
                {option.answerText}
              </button>
            ))}
          </div>
          <button
            className={`w-full mt-4 p-2 rounded-md text-white font-bold transition-all duration-200 ${answered ? "bg-green-500 hover:bg-green-600" : "bg-green-300 cursor-not-allowed"}`}
            disabled={!answered}
            onClick={nextQuestion}
          >
            Next Question
          </button>
          <p className="text-center text-gray-500 mt-2">Question {currentQuestion + 1} of {questions.length}</p>
        </div>
      )}
    </div>
  );
}
