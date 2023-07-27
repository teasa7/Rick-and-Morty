import React from "react";
import styles from "./Characters.module.css"
import Character from "./character/Character";

const Characters = (props) => {
  let charactersElements = props.characters.map( character => <Character key={character.id} name={character.name} status={character.status} gender={character.gender} species={character.species} image={character.image}/>)

  return (
    <div className={styles.block_characters}>
      <div className={styles.characters}>
        {charactersElements}
      </div>
    </div>
  )
}

export default Characters;
