import React from "react"
import styles from "./Characters.module.css"
import Character from "./character/Character"

const Characters = (props) => {
  return (
    <div className={styles.block_characters}>
      <div className={styles.characters}>
        { props.characters.map( character => <Character key={character.id} data={character}/>)
        } 
      </div>
    </div>
  )
}

export default Characters
