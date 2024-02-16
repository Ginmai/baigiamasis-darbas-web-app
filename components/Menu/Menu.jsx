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
    <ul>
      <li>
        <a href="">All questions</a>
      </li>
      <li>
        <a href="">My questions</a>
      </li>
      <li>
        <a href="">Add new question</a>
      </li>
    </ul>
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
