import React from "react";
import styles from "./Modal.module.css"

const Modal = ({active, setActive, data}) => {
  return (
    <div className={active ? styles.active_modal : styles.modal} onClick={() => setActive(false)}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <div>
        <img className={styles.img} src={data.image} alt="Avatar" />
        </div>
        <div className={styles.info}>
          <div><h2 className={styles.name}>{data.name}</h2></div>
            <div className={styles.description}>
              <p className={styles.bold}>Status: <b>{data.status}</b></p>
              <p>Species: <b>{data.species}</b></p>
              <p>Gender: <b>{data.gender}</b></p>
              <p>Type: <b>{data.type ? data.type : "-" }</b></p>
              <p>Origin: <b>{data.origin.name ? data.origin.name : "-" }</b></p>
              <p>Location: <b>{data.location.name ? data.location.name : "-" }</b></p>
            </div>
        </div> 
      </div>
    </div>
  )
}

export default Modal;
