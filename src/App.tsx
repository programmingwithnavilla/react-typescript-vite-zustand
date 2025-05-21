import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Auth from "./components/Auth";

function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Zustand + Vite + TS Demo</h1>
      <Auth />
      <hr />
      <Counter />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
