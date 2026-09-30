import { useState, useEffect } from "react";


function App() {
  const [task, setTask] = useState("");
  const [tasks,  setTasks] = useState<
  { id: number; text: string; done: boolean }[]>(() => {
    const saved = 
    localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

useEffect(() => {
  localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks]
);  

function addTask(){
  if (task.trim() === "") return;
  setTasks([
    ...tasks,
    {id: Date.now(), text: task, done: false},
  ]);
  setTask("");
}
function deleteTask( id: number){
  setTasks(tasks.filter((t) => t.id !== id));
}
function toggleDone(id: number){
  setTasks(
    tasks.map((t) => t.id === id ? { ...t, done: ! t.done} : t
  )
  );
}

  return (
    <div>
      <h1>My to do list</h1>
     <input 
     value={task}
     onChange={(e) => setTask(e.target.value)}
     placeholder="What do you need to do" 
    />
    <button onClick={addTask}>Add</button>
    <ul>
      {tasks.map((t) =>  ( <li key={t.id}>
        <span
          style={{ textDecoration: t.done ? "line-through" : "none"}}
          onClick={() => toggleDone(t.id)}
          >
            {t.text}
            </span>
        <button onClick={() => deleteTask(t.id)}>Delete</button>
      </li>
      ))}
    </ul>
    <button onClick={() => setTasks([])}>Clear All</button>
    </div>
    
  );
}

export default App;