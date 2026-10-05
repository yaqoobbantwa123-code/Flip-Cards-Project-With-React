import { useState } from "react";
import "./App.css";

const cards = [
  {
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    question: "What's the name of the syntax used to describe UI in React?",
    answer: "JSX",
  },
  {
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    question: "What is used to manage state in React?",
    answer: "useState Hook",
  },
  {
    question: "What do we call an input element synchronized with state?",
    answer: "Controlled Element",
  },
];

function App(){
  const [flippedCards, setFlippedCards] = useState([]);

  function handleFlip(index) {

    setFlippedCards((prev) => {
      if (prev.includes(index)) {
        return prev.filter((cardIndex) => cardIndex !== index);
      }

      return [...prev, index];

    });
  }

  return (
    <div className="container">
      <h1>Flip Cards Project With React:</h1>

      <div className="cards-container">
        
        {cards.map((card, index) => (
          <div
            className={`card ${flippedCards.includes(index) ? "flipped" : ""}`}
            onClick={() => handleFlip(index)}
            key={index}
          >
            <div className="card-inner">

              <div className="card-front">
                <p>{card.question}</p>
              </div>

              <div className="card-back">
                <p>{card.answer}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App;
