import React from 'react';
import "./App.css"
import CharactersContainer from "./components/characters/CharactersContainer";
import { useState, useEffect } from "react"
import { getCharacters } from "./api/api"

function App(props) {
  return (
    <div className="app">
      <h1 className="title">Rick and Morty</h1>
      <CharactersContainer />
    </div>
  );
}

export default App;
