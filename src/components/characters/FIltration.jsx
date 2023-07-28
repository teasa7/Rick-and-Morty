import React from "react"
import styles from "./Filtration.module.css"

const Filtration = (props) => {
  let filterName = React.createRef()
  let filterStatus = React.createRef()
  let filterGender = React.createRef()
  let filterType = React.createRef()
  let filterSpecies = React.createRef()

  const onFilter = () => {
    let name = filterName.current.value
    props.getName(name)
    let status = filterStatus.current.value
    props.getStatus(status)
    let gender = filterGender.current.value
    props.getGender(gender)
    let type = filterType.current.value
    props.getType(type) 
    let species = filterSpecies.current.value
    props.getSpecies(species)
  }
  const onReset = () => {
    filterName.current.value = ""
    filterStatus.current.value = ""
    filterGender.current.value = ""
    filterType.current.value = ""
    filterSpecies.current.value = ""
    props.reset()
  }
  return (
    <div className={styles.block_filter}>
      <div className={styles.filter}>
        <div className={styles.item}>
          <label for="name">Name</label>
          <input id="name" ref={filterName} className={styles.input} />
        </div>
        <div className={styles.item}>
          <label for="status">Status</label>
          <select id='status' ref={filterStatus} className={styles.select}>
            <option value=""></option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div className={styles.item}>
          <label for="type">Type</label>
          <input id="type" ref={filterType} className={styles.input} />
        </div>
        <div className={styles.item}>
          <label for="species">Species</label>
          <input id="species" ref={filterSpecies} className={styles.input} />
        </div>
        <div className={styles.item}>
          <label for="gender">Gender</label>
          <select id='gender' ref={filterGender} className={styles.select}>
            <option value=""></option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <button onClick={onFilter} className={styles.button}>Filter</button>
        <button onClick={onReset} className={styles.button}>Reset</button>
      </div>
    </div>
  )
}

export default Filtration
