import Header from "./components/Header";
import Tareas from "./components/Tareas";
import './App.css';
import "./assets/styles.css";
import { useState } from "react";
import React, { useEffect } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tareas, setTareas] = useState([{jornadas:[{}]}]);

  useEffect(() => {
    const apiUrl = `http://localhost:9000/api/tareas/obtenerTareas`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setTareas(result);
        },
       
        (error) => {
          console.log(error);
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Tareas tareas={tareas}></Tareas>
      </div>
    </div>
  );
}

export default App;
