import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import './App.css';
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
   
]);


  return (
    <div className="App">
      <Header />
      <main>  <AddTask  tasks={tasks}  setTasks={setTasks}></AddTask>
      <TaskList  tasks={tasks}  setTasks={setTasks}/></main>
      
      <Footer />
    </div>
  );
}

export default App;
