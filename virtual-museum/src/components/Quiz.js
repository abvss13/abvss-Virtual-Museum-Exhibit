import React, { useState } from 'react';


const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (answerIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answerIndex;
    setUserAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="quiz">
      {showResults ? (
        <div className="quiz-results">
          <h4>Quiz Results:</h4>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                <strong>{question.question}</strong>
                <p>Your Answer: {question.answers[userAnswers[index]]}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="quiz-question">
          <h4>Question {currentQuestion + 1}:</h4>
          <p>{questions[currentQuestion].question}</p>
          <ul className="quiz-answers">
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index} onClick={() => handleAnswerClick(index)}>
                {answer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;
