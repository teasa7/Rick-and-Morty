import React from "react"
import styles from "./Characters.module.css"
import Character from "./character/Character"
import useCharacters from "../../hooks/useCharacters"

const Characters = (props) => {
  const {characters, pages, currentPage, paginate} = useCharacters()

  const charactersElements = characters.map( character => <Character key={character.id} name={character.name} status={character.status} gender={character.gender} species={character.species} image={character.image}/>)

  return (
    <div className={styles.block_characters}>
      <div className={styles.characters}>
        {charactersElements}
      </div>
      <div className={styles.block_pagination}> 
      <ul className={styles.pagination}>
        {pages.map(page => {
          if (page === 1 || page === pages.length || (page >=currentPage - 2 && page <= currentPage + 2)) {
            return (
              <li
                key={page}
                className={currentPage === page ? styles.active : styles.page}
                onClick={() => paginate(page)}
              >{page}</li>
            );
          } else if (page === currentPage - 3 || page === currentPage + 3) {
            return <li key={page}></li>;
          } else return null;
        })}
      </ul>
    </div>
    </div>
  )
}

export default Characters
