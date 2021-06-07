import {useState} from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
    <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <TodoList className="grid-container" />
    </div>
    </div>
  );
}

export default App;
