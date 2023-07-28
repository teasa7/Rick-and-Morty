import React from "react"
import styles from "./Characters.module.css"
import Character from "./character/Character"
import useCharacters from "../../hooks/useCharacters"

const Characters = (props) => {
  const {characters, pages, currentPage, paginate, getName, getStatus, getGender, getType, getSpecies} = useCharacters()
  
  let filterName = React.createRef()
  let filterStatus = React.createRef()
  let filterGender = React.createRef()
  let filterType = React.createRef()
  let filterSpecies = React.createRef()

  const onFilter = () => {
    let name = filterName.current.value
    getName(name)
    let status = filterStatus.current.value
    getStatus(status)
    let gender = filterGender.current.value
    getGender(gender)
    let type = filterType.current.value
    getType(type) 
    let species = filterSpecies.current.value
    getSpecies(species)
  }
  return (
    <div className={styles.block_characters}>
      <div className={styles.block_filter}>
        <label for="name">Name</label>
        <input id="name" ref={filterName} className={styles.input} />
        <label for="status">Status</label>
        <select id='status' ref={filterStatus} className={styles.select}>
          <option value="" active></option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
        <label for="type">Type</label>
        <input id="type" ref={filterType} className={styles.input} />
        <label for="species">Species</label>
        <input id="species" ref={filterSpecies} className={styles.input} />
        <label for="gender">Gender</label>
        <select id='gender' ref={filterGender} className={styles.select}>
          <option value="" active></option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button onClick={onFilter} className={styles.button}>Filter</button>
      </div>
      <div className={styles.characters}>
        { characters.map( character => <Character key={character.id} name={character.name} status={character.status} gender={character.gender} species={character.species} image={character.image}/>)
        } 
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
