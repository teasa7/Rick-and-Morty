import React from "react"
import styles from "./Characters.module.css"
import Character from "./character/Character"

const Characters = (props) => {
  let charactersElements

  if(!props.error) {
    charactersElements = props.characters.map( character => <Character key={character.id} data={character}/>)
  }
  else {
    charactersElements = "Not found"
    
  }
  return (
    <div className={styles.block_characters}>
      <div className={styles.characters}>
        {charactersElements} 
      </div>
    </div>
  )
}

export default Characters
