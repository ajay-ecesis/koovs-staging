import React from "react";
import styles from "./fournotfour.module.css";
function FourNotFourBody() {
  return (
    <>
      <section className={`${styles.four_not_four} container-fluid`}>
        <div className={`row ${styles.padded_content}`}>
          <div className={styles.four_not_four_body}>
            404

          </div>
        </div>
      </section>
    </>
  );
}

export default FourNotFourBody;
