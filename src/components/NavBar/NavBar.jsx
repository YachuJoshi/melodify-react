import React, { useState } from 'react';

import Logo from '../../img/melodify-logo.png';

import styles from './navBar.module.scss';

const NavBar = () => {
  const scrollToTop = () => {
    let element = document.querySelector('#header');
    element.scrollIntoView();
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={styles.navigation__toggle}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        {isMenuOpen ?
          <span className={styles.navigation__icon_close}>&nbsp;</span> :
          <span className={styles.navigation__icon_menu}>&nbsp;</span>
        }
      </div>

      <div className={isMenuOpen ? `${styles.navigation__bar__active} ${styles.navigation__bar}` : styles.navigation__bar}>
        <figure
          onClick={() => scrollToTop()}
          className={styles.logo}>
          <img src={Logo} alt="Logo" className={styles.logo__image} />
          <figcaption className={styles.logo__name}>Melodify</figcaption>
        </figure>
        <nav className={styles.navigation}>
          <ul className={styles.navigation__list}>
            <li className={styles.navigation__item}>Premium</li>
            <li className={styles.navigation__item}>Help</li>
            <li className={styles.navigation__item}>Download</li>
            <li className={styles.navigation__item}>Sign Up</li>
            <li className={styles.navigation__item}>Login</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export { NavBar };