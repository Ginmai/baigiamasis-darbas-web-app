import React, { useState } from "react";
import styles from "./styles.module.css";

const Menu = ({ token }) => {
  if (token) {
    return MenuAuthenticated();
  } else {
    return MenuPublic();
  }
};

const MenuAuthenticated = () => {
  return (
    <>
      <a href="/" className={styles.nav}>
        All questions
      </a>
      <a href="my-questions" className={styles.nav}>
        My questions
      </a>
      <a href="add" className={styles.nav + " " + styles.button}>
        Add new question
      </a>
    </>
  );
};

const MenuPublic = () => {
  return (
    <>
      <a href="/" className={styles.nav}>
        All questions
      </a>
      <a href="register" className={styles.nav}>
        Register
      </a>
      <a href="login" className={styles.nav}>
        Login
      </a>
    </>
  );
};

export default Menu;
