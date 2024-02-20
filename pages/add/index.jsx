import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Add = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [token, setToken] = useState();

  const checkUserToken = () => {
    setToken(cookie.get("jwt_token"));
  };

  const onClickButton = async () => {
    if (!text) {
      console.log("please fill text field");
      return;
    }

    try {
      const data = {
        question_text: text,
      };
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      const response = await axios.post(
        "http://localhost:3001/questions",
        data,
        {
          headers: headers,
        }
      );

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, []);

  return (
    <>
      <Header token={token} />

      <div className={styles.form}>
        <h1>Create new question</h1>
        <textarea
          placeholder="write your question"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        ></textarea>

        <button onClick={onClickButton}>Create</button>
      </div>

      <Footer />
    </>
  );
};

export default Add;
