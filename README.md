# DevStack

DevStack is a responsive React web application that helps users explore different development technologies and build their own technology stack. Users can browse technologies, add them to their stack, remove individual technologies, and clear the entire stack.

## Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React-Toastify
* JSON
* JavaScript/HTML/CSS

## Features

1. **Explore Technologies**
   Browse different frontend, backend, database, and development tools with their descriptions, categories, ratings, and difficulty levels.

2. **Build Your Own Stack**
   Add technologies to your personal stack and remove them whenever you want. Duplicate technologies cannot be added.

3. **Responsive Design & Notifications**
   The website works on mobile, tablet, and desktop screens and uses toast notifications to show actions such as adding and removing technologies.

---

# React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the user interface should look like.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. **State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets a component store and update data. I used it to store the technology list, loading status, and the technologies selected in the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to load the technology JSON data when the Technologies component first loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to know which item changed, was added, or was removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. I used it to show **"Your stack is empty"** when the stack has no selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**. The parent can also pass a function as a prop, and the child can call that function to send information or trigger an action in the parent.
