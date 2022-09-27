import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  const [sampleItem, setSampleItem] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:3333/users")
        .then(response => response.json())
        .then(item => {
          return JSON.stringify(item.users[0]);
        });
      setSampleItem(data);
    }
    if (!sampleItem) {
      getData();
    }
  }, [sampleItem])

  return (
    <div className="App">
      <h1>CivicActions React Take-Home Proof of Concept</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Sample item from the database:
        </p>
        <p>{sampleItem}</p>

      </div>
      <p className="read-the-docs">
        Hello World!
      </p>
    </div>
  )
}

export default App
