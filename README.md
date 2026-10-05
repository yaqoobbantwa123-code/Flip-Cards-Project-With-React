# 🃏 Flip Cards Project with React

A modern, professional, and responsive **Flip Cards application built with React.js**.

This project demonstrates how React state management, event handling, array methods, conditional rendering, JSX, and CSS 3D transformations can be combined to create an interactive flash-card style interface.

Users can click on any card to flip it and reveal the answer. Clicking the card again flips it back to the question side.

---

## 📌 Project Overview

The **Flip Cards Project** is a simple but practical React application designed to demonstrate interactive UI behavior.

Each card contains:

- A question on the front side
- An answer on the back side
- A smooth 3D flip animation
- Interactive click functionality

The application keeps track of which cards are currently flipped using React's `useState` Hook.

---

## ✨ Features

- 🃏 Interactive flip cards
- 🔄 Smooth 3D card flip animation
- ⚛️ Built with React.js
- 🧠 React `useState` Hook
- 🎯 Click-based card interaction
- 📦 Array of objects for card data
- 🔍 `map()` for rendering cards
- 🔎 `includes()` for checking flipped cards
- 🧹 `filter()` for removing a flipped card
- 📋 Spread operator for updating state arrays
- 🎨 Modern premium dark UI
- 🟢 Green question cards
- 🔴 Red answer cards
- ✨ Hover animations
- 📱 Fully responsive design
- 💻 Desktop, tablet, and mobile support
- 🎯 Clean component structure
- 🚀 Easy to extend with more cards

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- JSX

### React Concepts

- `useState`
- Functional Components
- JSX
- Props concepts
- Event Handling
- Conditional Rendering
- Array Rendering
- `map()`
- `includes()`
- `filter()`
- Spread Operator
- `key` prop

### CSS Concepts

- CSS Grid
- Flexbox
- CSS Transitions
- CSS Transforms
- 3D Transformations
- `perspective`
- `transform-style`
- `backface-visibility`
- Responsive Media Queries
- Hover Effects
- Gradients
- Box Shadows
- Border Radius

---

# 📂 Project Structure

```text
flip-cards-react/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
🧩 Main Files
App.jsx

This is the main React component.

It contains:

Flash card data
React state
Flip logic
Event handling
Card rendering
JSX structure
App.css

This file contains the complete styling of the application.

It handles:

Dark background
Card layout
Green question cards
Red answer cards
3D flip animation
Hover effects
Shadows
Responsive design
Mobile layout
main.jsx

This file is responsible for mounting the React application into the DOM.

It connects the App component with the HTML root element.

index.css

This file can contain global styles that apply to the entire application.

📚 Card Data

The cards are stored inside an array of objects.

Example:

const cards = [
  {
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    question: "What's the name of the syntax used to describe UI in React?",
    answer: "JSX"
  }
];

Each object contains two properties:

question
answer

The question property is displayed on the front of the card.

The answer property is displayed on the back of the card.

⚛️ React State Management

The project uses the useState Hook to keep track of flipped cards.

const [flippedCards, setFlippedCards] = useState([]);

Initially:

flippedCards = []

This means that no card is flipped.

When a card is clicked, its index is added to the flippedCards array.

For example:

[1, 3]

means:

Card with index 1 is flipped
Card with index 3 is flipped

All other cards remain on their question side.

🔄 Card Flip Logic

The main flip functionality is handled by:

function handleFlip(index) {

  setFlippedCards((prev) => {

    if (prev.includes(index)) {
      return prev.filter((cardIndex) => cardIndex !== index);
    }

    return [...prev, index];

  });

}

Let's understand it step by step.

1. Click a Card

When a card is clicked:

onClick={() => handleFlip(index)}

The card's index is passed to:

handleFlip(index)

For example:

First card  → index 0
Second card → index 1
Third card  → index 2
2. React Gives Previous State

Inside:

setFlippedCards((prev) => {

prev represents the previous/current value of flippedCards.

For example:

prev = [1, 3]

This means cards 1 and 3 are currently flipped.

3. Check Whether Card Is Already Flipped

The code uses:

prev.includes(index)

This checks whether the clicked card's index already exists in the array.

Example:

prev = [1, 3]
index = 1

Then:

prev.includes(1)

returns:

true

because card 1 is already flipped.

🔙 Unflipping a Card

If the card is already flipped, this code runs:

return prev.filter((cardIndex) => cardIndex !== index);

For example:

prev = [1, 3]
index = 1

After filtering:

[3]

The card index 1 is removed from the flipped state.

This causes React to render the card without the flipped class, so the card rotates back to the question side.

➕ Flipping a New Card

If the clicked card is not already flipped:

return [...prev, index];

For example:

prev = [1, 3]
index = 4

The result becomes:

[1, 3, 4]

The previous flipped cards remain flipped, and the new card is also added.

🧠 Why Is the Spread Operator Used?

The spread operator:

...

is used to create a new array.

Example:

return [...prev, index];

If:

prev = [0, 2]

and:

index = 4

the result becomes:

[0, 2, 4]

This is important because React state should be updated without directly mutating the existing array.

🧹 Why Is filter() Used?

The filter() method is used when we want to remove a card index from the flipped cards array.

Example:

[0, 2, 4]

If card 2 is clicked again:

prev.filter((cardIndex) => cardIndex !== 2)

The result is:

[0, 4]

Only the clicked card's index is removed.

The actual card is not deleted.

🃏 Rendering Cards with map()

The cards are rendered using:

{cards.map((card, index) => (

The map() method goes through every object inside the cards array.

For example:

cards[0]
cards[1]
cards[2]
cards[3]
...

For every card, React creates a card element.

🔢 Understanding card and index

Inside:

cards.map((card, index) => ...)
card

Represents the current card object.

Example:

{
  question: "What language is React based on?",
  answer: "JavaScript"
}
index

Represents the position of that card.

Example:

First card  → 0
Second card → 1
Third card  → 2
Fourth card → 3
🎨 Conditional Class

The project uses:

className={`card ${
  flippedCards.includes(index) ? "flipped" : ""
}`}

This dynamically adds the flipped class.

If the card index exists inside flippedCards:

"flipped"

is added.

If it doesn't exist:

""

is added.

For example:

flippedCards = [1]

Then:

Card 0 → card
Card 1 → card flipped
Card 2 → card
Card 3 → card
🎯 Why Is the flipped Class Important?

React does not perform the actual 3D rotation.

React only controls whether the class:

flipped

is present.

CSS performs the actual animation:

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

So the responsibility is divided like this:

React
  ↓
Controls State
  ↓
Adds/Removes "flipped" Class
  ↓
CSS
  ↓
Performs 3D Rotation
🎨 CSS 3D Flip Animation

The card flip is created using CSS 3D transformations.

The important properties are:

perspective: 1000px;
transform-style: preserve-3d;
backface-visibility: hidden;
transform: rotateY(180deg);
🔭 perspective

The card uses:

perspective: 1000px;

This gives the 3D rotation a realistic depth effect.

Without perspective, the rotation would look much flatter.

🧊 transform-style

The card inner element uses:

transform-style: preserve-3d;

This allows its child elements to maintain their 3D positioning.

🙈 backface-visibility

The front and back sides use:

backface-visibility: hidden;

This prevents the back side of an element from being visible when it is facing away from the user.

🔄 rotateY()

The back side is rotated using:

transform: rotateY(180deg);

When the card receives the flipped class:

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

The complete inner card rotates 180 degrees around the Y-axis.

🟢 Question Card

The front side uses a professional green gradient:

.card-front {
  background: linear-gradient(135deg, #14532d, #166534);
}

This represents the question side of the card.

🔴 Answer Card

The back side uses a professional red gradient:

.card-back {
  background: linear-gradient(135deg, #7f1d1d, #991b1b);
}

This represents the answer side.

🖱️ Hover Effect

Cards have a hover effect:

.card:hover {
  transform: translateY(-6px);
}

When the user moves the mouse over a card, it slightly moves upward.

This gives the UI a more modern and interactive feel.

📱 Responsive Design

The project is responsive and works on different screen sizes.

Desktop

Three cards are displayed in one row:

grid-template-columns: repeat(3, 1fr);
Tablet

Two cards are displayed per row:

grid-template-columns: repeat(2, 1fr);
Mobile

Cards are displayed in a single column:

grid-template-columns: 1fr;

This makes the application comfortable to use on:

Desktop
Laptop
Tablet
Mobile
📐 CSS Grid

The cards are arranged using CSS Grid:

.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

The gap property creates spacing between the cards.

🔑 React key Prop

Each card contains:

key={index}

React uses the key prop to identify individual elements when rendering a list.

Example:

cards.map((card, index) => (
  <div key={index}>

For this small static practice project, using the index as a key is acceptable.

For larger applications with dynamic data, a unique ID is generally preferred.

🧱 JSX Structure

Each card has this structure:

<div className="card">

  <div className="card-inner">

    <div className="card-front">
      <p>{card.question}</p>
    </div>

    <div className="card-back">
      <p>{card.answer}</p>
    </div>

  </div>

</div>

The structure can be understood as:

card
 └── card-inner
      ├── card-front
      │     └── question
      │
      └── card-back
            └── answer
🚀 Getting Started

Follow these steps to run the project locally.

1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

Then move into the project directory:

cd flip-cards-react
2. Install Dependencies

Run:

npm install

This installs all dependencies listed inside:

package.json
3. Start the Development Server

Run:

npm run dev

Vite will provide a local development URL, usually similar to:

http://localhost:5173/

Open that URL in your browser.

🏗️ Build for Production

To create a production build:

npm run build

This generates an optimized production version of the application.

👀 Preview Production Build

After building the project, you can preview it using:

npm run preview
🔄 Application Flow

The overall application works like this:

User clicks a card
        ↓
onClick event runs
        ↓
handleFlip(index)
        ↓
setFlippedCards()
        ↓
React checks previous state
        ↓
Is index already present?
       / \
     Yes  No
      ↓    ↓
   filter  spread
      ↓    ↓
Remove    Add
index     index
      \    /
       ↓
State updates
       ↓
React re-renders
       ↓
"flipped" class added/removed
       ↓
CSS rotates the card
🧠 React Concepts Learned

This project is useful for practicing several important React concepts.

1. Components

The application is built using a React functional component:

function App() {
  ...
}
2. State

State is managed using:

useState()
3. Event Handling

Card clicks are handled using:

onClick
4. Array Rendering

Cards are rendered using:

map()
5. Conditional Rendering

The flipped class is conditionally applied using the ternary operator:

condition ? "flipped" : ""
6. Array Methods

The project uses:

includes()
filter()
map()
7. Spread Operator

The spread operator is used for creating an updated array:

[...prev, index]
8. Functional State Updates

The project uses:

setFlippedCards((prev) => ...)

This is useful when the new state depends on the previous state.

💡 What I Learned From This Project

While building this project, I practiced:

React state management
useState
Event handling
Rendering lists
Working with arrays of objects
map() method
filter() method
includes() method
Spread operator
Conditional classes
JSX
CSS Grid
Flexbox
CSS 3D transformations
Responsive design
Hover effects
Component-based development
Interactive UI development
🔮 Future Improvements

The project can be extended with additional features in the future.

Possible improvements include:

➡️ Next and Previous buttons
🔀 Random card functionality
📊 Quiz score tracking
⏱️ Timer
🔢 Card counter
🏆 Final score screen
🔄 Reset all cards button
🌙 Theme switching
🔊 Sound effects
✨ More advanced animations
💾 Saving progress with Local Storage
📚 Different flash-card categories
🧩 Dynamic card creation
🗃️ Backend/database integration
🎯 Purpose of the Project

This project was created as a React practice project to strengthen my understanding of state management, event handling, dynamic rendering, and interactive UI development.

The main goal was not only to create a flip-card interface, but also to understand how React state can control UI behavior.

📸 Project Preview

The application provides a modern dark interface with:

A professional heading
Green question cards
Red answer cards
Smooth 3D flip animation
Responsive card layout
Interactive hover effects.

🚀 Deployment:

This project can be deployed using platforms such as:

Netlify
Vercel
GitHub Pages
Other static hosting platforms

For a Vite React project, make sure to run:

npm run build

before deploying the production version.

🧑‍💻 Author

Shamir Yaqoob

MERN Stack Developer

Currently learning and building projects with:

React.js
JavaScript
Node.js
Express.js
MongoDB
Supabase
SQL
Git & GitHub.

📌 Project Status:

Status: Completed ✅

This project was created for learning, practice, and portfolio development.

⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

📄 License

This project is available for educational and personal use.

You are free to study, modify, and improve the code for your own learning purposes.

❤️ Final Note

This project represents another step in my journey toward becoming a professional MERN Stack Developer.

I am continuously learning React, JavaScript, Node.js, Express.js, MongoDB, and modern web development practices by building practical projects.

More projects and improvements will be added as I continue learning and growing as a developer.
