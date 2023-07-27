import React from 'react';
import "./App.css"
import Characters from "./components/characters/Characters";

function App(props) {
  return (
    <div className="app">
      <h1 className="title">Rick and Morty</h1>
      <Characters />
    </div>
  );
}

export default App;
