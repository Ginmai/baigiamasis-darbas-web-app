import React from "react";
import Menu from "../Menu/Menu";
import styles from "./styles.module.css";

const Header = ({ token }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>Q</div>
      <div className={styles.menu}>
        <Menu token={token} />
      </div>
    </div>
  );
};

export default Header;
