import React from 'react';

import styles from '../sass/layout/home.module.scss';

import ImageOne from '../img/gallery/image-1.jpg';
import ImageTwo from '../img/gallery/image-2.jpg';
import ImageThree from '../img/gallery/image-3.jpg';
import ImageFour from '../img/gallery/image-4.jpg';

import { NavBar } from '../components/NavBar/NavBar';
import { Button } from '../components/Button/Button'
import { Features } from '../components/Features/Features';
import { Gallery } from '../components/Gallery/Gallery';
import { SideList } from '../components/SideList/SideList';

const Home = () => {
  const gallery = [ImageOne, ImageTwo, ImageThree, ImageFour];
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

      <section className={styles.sectionFeatures}>
        <Features />
      </section>

      <section className={styles.sectionNew}>
        <div className="row">
          <Gallery
            gallery={gallery}
          />
          <SideList />
        </div>
      </section>
    </>
  );
};

export { Home };