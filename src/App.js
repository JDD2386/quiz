import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What was Batman's true identity?",
      options: [
        { id: 0, text: "Bruce Banner", isCorrect: false },
        { id: 1, text: "Clark Kent", isCorrect: false },
        { id: 2, text: "Bruce Wayne", isCorrect: true },
        { id: 3, text: "Peter Parker", isCorrect: false },
      ],
    },
    {
      text: "Did Captain America fight in World War 2?",
      options: [
        { id: 0, text: "A trick! He fought only in WW1", isCorrect: false },
        { id: 1, text: "Yes", isCorrect: true },
        { id: 2, text: "Who is Captain America?", isCorrect: false },
        { id: 3, text: "No", isCorrect: false },
      ],
    },
    {
      text: "Did Peter Parker make it into college after No Way Home?",
      options: [
        { id: 0, text: "No.", isCorrect: true },
        { id: 1, text: "Who is Peter Parker?", isCorrect: true },
        { id: 2, text: "Yes", isCorrect: false },
        { id: 3, text: "He already graduated college", isCorrect: false },
      ],
    },
    {
      text: "Who did Thanos NOT snap away?",
      options: [
        { id: 0, text: "Iron Man", isCorrect: true },
        { id: 1, text: "Spider-Man", isCorrect: false },
        { id: 2, text: "Black Panther", isCorrect: false },
        { id: 3, text: "Falcon (2019)", isCorrect: false },
      ],
    },
  ];


  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1> Marvel Quiz </h1>

      {/* 2. Current Score  */}
      <h2> Score: {score} </h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
