import React from "react";
import styles from "./Character.module.css"

const Character = (props) => {
  return (
    <div className={styles.block}>
      <div className={styles.info}>
        <img className={styles.img} src={props.image} alt="Avatar"></img>
        <div><h2 className={styles.name}>{props.name}</h2></div>
        <div className={styles.description}>
          <p className={styles.bold}>{props.status}</p>
          <p>{props.species} - {props.gender}</p>
        </div>
      </div>
    </div>
  )
}

export default Character;
