import React from "react";
import cookie from "js-cookie";
import axios from "axios";
import styles from "./styles.module.css";

import { useRouter } from "next/router";

const MyCard = ({ _id, question_text, date }) => {
  const router = useRouter();

  const onClickButton = async (event) => {
    console.log(event);
    try {
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      const response = await axios.delete(
        `http://localhost:3001/questions/${router.query.id}`,
        {},
        { headers: headers }
      );

      console.log(response);

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
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
