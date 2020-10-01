import React, { useState, useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signOut } from "../../services";
import { UserContext } from "../../providers";

import Logo from "../../img/melodify-logo.png";

import styles from "./navBar.module.scss";

const NavBar = () => {
  const scrollToTop = useCallback(() => {
    let element = document.querySelector("#header");
    element.scrollIntoView();
  }, []);

  const { user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={styles.navigation__toggle}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ? (
          <span className={styles.navigation__icon_close}>&nbsp;</span>
        ) : (
          <span className={styles.navigation__icon_menu}>&nbsp;</span>
        )}
      </div>

      <div
        className={
          isMenuOpen
            ? `${styles.navigation__bar__active} ${styles.navigation__bar}`
            : styles.navigation__bar
        }
      >
        <figure onClick={() => scrollToTop()} className={styles.logo}>
          <img src={Logo} alt="Logo" className={styles.logo__image} />
          <figcaption className={styles.logo__name}>Melodify</figcaption>
        </figure>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>
              <Link to="/webplayer" className={styles.navigation__link}>
                Web Player
              </Link>
            </li>
            <li className={styles.navigation__item}>Premium</li>
            <li className={styles.navigation__item}>Download</li>
            <li className={styles.navigation__item}>Sign Up</li>
            <li className={styles.navigation__item}>
              {Object.keys(user).length ? (
                <span onClick={signOut}>Log Out</span>
              ) : (
                <span onClick={signInWithGoogle}>Log In</span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export { NavBar };
