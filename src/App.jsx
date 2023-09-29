import { useContext, useReducer, useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import TodoDispatchContext from "./context/todoDispatchContext";

function App() {
  const [list, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <div>
          <AddToDo />
          <TodoList />
        </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
