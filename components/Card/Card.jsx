import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Card = ({ _id, question_text, date, likes, dislikes }) => {
  return (
    <div key={_id} className={styles.wrapper}>
      <p>{question_text}</p>
      <h5>{date}</h5>
      <h5>
        {likes} / {dislikes}
      </h5>
    </div>
  );
};

export default Card;
