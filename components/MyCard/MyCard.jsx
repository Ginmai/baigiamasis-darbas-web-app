import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const MyCard = ({ _id, question_text, date }) => {
  return (
    <div key={_id} className={styles.wrapper}>
      <p>{question_text}</p>
      <h5>{date}</h5>
      <Link className={styles.button} href={`/delete/${_id}`}>
        Delete
      </Link>
    </div>
  );
};

export default MyCard;
