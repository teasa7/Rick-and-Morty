import React from "react";
import Characters from "./Characters";
// import {getAuthUserData} from "./../../redux/charactersReducer";
import { connect } from "react-redux";
import { useState, useEffect } from "react"
import { getCharacters } from "./../../api/api"

const CharactersContainer = () => {  
  const [characters, setCharacter] = useState([])

  useEffect(() => {
    getData()
  },[])
  
  const getData = async (word) => {
    const data = await getCharacters(word)
    setCharacter(data.data.results)
  }
  return (
    <div>
      <Characters characters={characters} />
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   characters: state.charactersReducer.characters,
// })

export default CharactersContainer;