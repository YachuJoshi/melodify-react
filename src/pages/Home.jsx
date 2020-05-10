import React from 'react';

import Logo from '../img/melodify-logo.png';

import styles from '../sass/home.module.scss';

const Home = () => {
  return (
    <>
      <header className={styles.header}>

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

        <div className={`${styles.mainWrapper}`}>
          <h1 className={styles.headerText}>Your Very Own <br />Personal Music Companion</h1>
          <button className={styles.buttonFree}>Get Melodify Free</button>
          <button className={styles.buttonPremium}>Get Melodify Premium</button>
        </div>
      </header>
    </>
  );
};

export { Home };