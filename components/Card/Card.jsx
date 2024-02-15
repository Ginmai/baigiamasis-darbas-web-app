import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

const Card = ({ _id, question_text, date, user, likes, dislikes }) => {
  return (
    <Link href={`/resource/${_id}`}>
      <div key={_id} className={styles.wrapper}>
        <h3>
          {user}, {date}
        </h3>
        <p>{question_text}</p>
        <h5>
          {likes} / {dislikes}
        </h5>
      </div>
    </Link>
  );
};

export default Card;
