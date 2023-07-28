import React from "react";
import styles from "./Character.module.css"
import { useState } from "react"
import Modal from "./Modal"

const Character = (props) => {
  const [active, setActive] = useState(false)
  return (
    <div>
      <div className={styles.block} onClick={() => setActive(true)}>
        <div className={styles.info}>
          <img className={styles.img} src={props.data.image} alt="Avatar"></img>
          <div><h2 className={styles.name}>{props.data.name}</h2></div>
          <div className={styles.description}>
            <p className={styles.bold}>{props.data.status}</p>
            <p>{props.data.species} - {props.data.gender}</p>
          </div>
        </div>
      </div>
      <Modal active={active} setActive={setActive} data={props.data}/>
    </div>
    
  )
}

export default Character;
