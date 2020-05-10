import React from 'react';

import styles from '../sass/layout/home.module.scss';

import { NavBar } from '../components/NavBar/NavBar';
import { Button } from '../components/Button/Button'
import { Features } from '../components/Features/Features';

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <NavBar />
        <div className={`${styles.mainWrapper}`}>
          <h1 className={styles.headerText}>
            Your Very Own <br />
            Personal Music Companion
          </h1>
          <Button
            type="FREE">
            Get Melodify Free
        </Button>
          <Button
            type="PREMIUM">
            Get Melodify Premium
        </Button>
        </div>
      </header>

      <section className={`${styles.sectionFeatures}`}>
        <Features />
      </section>
    </>
  );
};

export { Home };