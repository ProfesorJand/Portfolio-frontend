import React from "react";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>


    <div className={styles.sidenav}>
      {/* <div className={styles.sidenavFixed}> */}
        <a href="#aboutMe">About</a>
        <a href="#skills">Skills</a>
        <a href="#proyects">Proyects</a>
        <a href="#contact">Contact</a>
      {/* </div> */}
    </div>
    </div>
  );
}
