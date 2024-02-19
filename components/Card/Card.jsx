import React from "react";
import styles from "./styles.module.css";

const Card = ({
  _id,
  question_text,
  date,
  likes,
  dislikes,
  clickLike,
  clickDislike,
}) => {
  const clickLikeBtn = async () => {
    clickLike(_id);
  };
  const clickDislikeBtn = async () => {
    clickDislike(_id);
  };

  return (
    <div key={_id} className={styles.wrapper}>
      <p>{question_text}</p>
      <h5>{date}</h5>
      <div>
        <button className={styles.button} onClick={clickLikeBtn}>
          &#9786;
        </button>
        <i className="amount">{likes}</i>
        <button className={styles.button} onClick={clickDislikeBtn}>
          &#9785;
        </button>
        <i className="amount">{dislikes}</i>
      </div>
    </div>
  );
};

export default Card;
