import React from "react"
import styles from "./Pagination.module.css"

const Pagination = (props) => {
  return (
    <div className={styles.block_pagination}> 
      <ul className={styles.pagination}>
        {props.pages.map(page => {
          if (page === 1 || page === props.pages.length || (page >=props.currentPage - 2 &&page <= props.currentPage + 2)) {
            return (
              <li
                key={page}
                className={props.currentPage === page ? styles.active : styles.page}
                onClick={() => props.paginate(page)}
              >{page}</li>
            );
          } else if (page === props.currentPage - 3 || page === props.currentPage + 3) {
            return <li key={page}></li>;
          } else return null;
        })}
      </ul>
    </div>
  )
}

export default Pagination
