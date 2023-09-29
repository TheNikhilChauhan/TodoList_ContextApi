import { useContext, useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";

function App() {
  const [list, setList] = useState([]);
  return (
    <TodoContext.Provider value={{ list, setList }}>
      <div>
        <AddToDo
          updateList={(todo) =>
            setList([
              ...list,
              { id: list.length + 1, todoData: todo, finished: false },
            ])
          }
        />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
