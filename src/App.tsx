import { useState, useEffect } from "react";
import QouteCard from "./qoutecard";
import "./App.css";

function App() {
  const [qoute, setQoute] = useState("");
  const [qoutes, setQoutes] = useState<{
    id: number; text: string}[]>(() => {
    const saved = 
    localStorage.getItem("qoutes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("quotes",JSON.stringify("quotes"));
  }, [qoutes]);

  function addQoute(){
   if (qoute.trim() === "") return;
    setQoutes([ 
      ...qoutes, { id: Date.now(), text: qoute}]);
  setQoute("");
  }

  function deleteQoute(id: number) {
    setQoutes(qoutes.filter((q) => q.id !==id));
  }

  return ( 
    <div className="qoute-app">
      <h1>My Qoute Keeper</h1>
     <div className="input-row"> <input
      value={qoute}
      onChange={(e) => setQoute(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          addQoute();
        }
      }}
      placeholder="Type Qoute"/> 
      <button onClick={addQoute}>Add</button>
      </div>
      <ul>
      {qoutes.map((q) => (
        <QouteCard key={q.id}text={q.text} onDelete={() =>deleteQoute(q.id)}/>
      ))}
      </ul>
      </div>
  );
}
export default App;