import React from 'react';

import Logo from '../../img/melodify-logo.png';

import styles from './navBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navigation__bar}>
      <figure className={styles.logo}>
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
  );
};

export { NavBar };