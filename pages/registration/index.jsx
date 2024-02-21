import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./styles.module.css";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();

  const checkUserToken = () => {
    setToken(cookie.get("jwt_token"));
  };

  const onClickButton = async () => {
    if (!email || !password || !name) {
      console.log("please fill all the fields");
      return;
    }

    try {
      const data = {
        email: email,
        name: name,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3001/users/register",
        data
      );

      if (response.status === 200) {
        cookie.set("jwt_token", response.data.jwt_token);
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
        <h1>Register</h1>
        <input
          placeholder="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <button onClick={onClickButton}>Register</button>
      </div>

      <Footer />
    </>
  );
};

export default Register;
