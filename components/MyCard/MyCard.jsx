import React from "react";
import styles from "./styles.module.css";

const MyCard = ({ _id, question_text, date, clickDelete }) => {
  const onClickButton = async () => {
    clickDelete(_id);
  };

  return (
    <div key={_id} className={styles.wrapper}>
      <p>{question_text}</p>
      <h5>{date}</h5>
      <button className={styles.button} onClick={onClickButton}>
        Delete
      </button>
    </div>
  );
};

export default MyCard;
