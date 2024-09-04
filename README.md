# React Workshops 🚀

Welcome to my React Workshops Showcase! This repository includes four mini-projects that focus on core React concepts, implemented as part of a learning journey through different workshops.

---

## 🧑‍💻 Workshop 1: Pagination Component

**Goal:**  
Build a dynamic pagination component using React props and `useState`.

**Key Learnings:**
1. **Props vs. State:**
   - **Props** are passed from parent to child components and are read-only. They cannot be changed.
   - **State** is local to a component and can be updated dynamically.
2. **Child to Parent Communication:**
   - To pass data from a child component to a parent component, we can use a callback function passed as a prop.

---

## 📒 Workshop 2: Notes App

**Goal:**  
Create a notes app with the ability to add, save and delete notes using React hooks.

**Key Learnings:**
1. **Adding Notes using `useState` with Callbacks:**
   - When updating the state based on the previous state, use a callback function in `setState`. This function accepts the previous state as an argument and returns the new state.
2. **Deleting Notes:**
   - The `deleteNote` function filters out the note whose `id` doesn’t match the one being deleted, updating the list of notes.
3. **Using `useEffect` for Data Persistence:**
   - The `useEffect` hook was used to fetch data from `localStorage` and ensure that the notes were reloaded on component mount. This ensured that the app maintained state even after page reloads.
   - `useEffect` also allowed the app to re-render certain content when specific state or props (dependencies) were updated (e.g. setNotes when a new note has been added), enhancing the dynamic behavior of the app.

---

## 💰 Workshop 3: Cashflow Tracker

**Goal:**  
Build a simple cashflow tracker to monitor income and expenses and display a running balance.

**Key Learnings:**
1. **State Management Using `useReducer` and `useContext`:**
   - Implemented `useReducer` to manage more complex state logic, especially for handling transactions (income and expenses). It provided a more scalable structure compared to `useState` for managing multiple related state variables.
   - Used `useContext` to share the state and dispatch actions across multiple components, allowing for a cleaner and more centralized state management without prop drilling.
2. **Conditional Rendering:**
   - Implemented conditional rendering to dynamically update the balance based on user input, showing whether the balance is positive (net income) or negative (net expense).
3. **Optimized Performance:**
   - Improved performance by reducing re-renders, controlling state updates efficiently with `useReducer`, and ensuring that only relevant components re-rendered when necessary.

---

## 🔧 Technologies Used:

- **React**: For building the user interface.
- **Redux** (where applicable): For global state management.
- **React Hooks** (`useState`, `useEffect`): For managing state and side effects.
- **CSS** (Tailwind CSS): For styling components.
- **LocalStorage**: For data persistence across sessions.

---

## 🛠️ How to Run the Project

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/REACTWorkshops.git
2. **Navigate to a specific workshop**:
   ```bash
   cd react-workshop3-tracker #example of direct to workshop3
3. **Install dependencies**:
   ```bash
   npm install
4. **Start the project**:
   ```bash
   npm start
Now you can view the app in your browser at http://localhost:3000!

---

## 🌟 What I Gained From These Workshops:

These React workshops helped me deepen my understanding of fundamental concepts such as:

- **State management**: Using `useState` and `Redux` for effectively managing component and global states.
- **Component-based architecture**: Understanding prop drilling and child-to-parent communication to create well-structured React components.
- **React Hooks**: Leveraging `useEffect` for handling side effects and ensuring certain functionalities trigger upon state changes.
- **Optimizing performance**: Minimizing unnecessary re-renders and reducing the number of database or API calls to build more efficient and scalable applications.
