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
      <a href="" className={styles.nav}>
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
    <ul>
      <li>
        <a href="">All questions</a>
      </li>
      <li>
        <a href="">Register</a>
      </li>
      <li>
        <a href="login">Login</a>
      </li>
    </ul>
  );
};

export default Menu;
