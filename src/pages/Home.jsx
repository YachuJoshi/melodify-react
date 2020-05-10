import React from 'react';

import styles from '../sass/layout/home.module.scss';

import ImageOne from '../img/gallery/image-1.jpg';
import ImageTwo from '../img/gallery/image-2.jpg';
import ImageThree from '../img/gallery/image-3.jpg';
import ImageFour from '../img/gallery/image-4.jpg';

import { NavBar } from '../components/NavBar/NavBar';
import { Button } from '../components/Button/Button'
import { Features } from '../components/Features/Features';

const Home = () => {
  const gallery = [ImageOne, ImageTwo, ImageThree, ImageFour];
  const modernLisiting = [
    {
      title: 'Music',
      description: `There are million of songs on Melodify. Play your favourites, discover new trends, and build
      the perfect collection.`
    },
    {
      title: 'Playlists',
      description: `You'll find readymade playlists to match your mood, put together by music fans and experts.`
    },
    {
      title: 'New Releases',
      description: `Hear this weeks' latest singles and albums, and check out what's hot in Top 50.`
    }
  ]
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
          <div className={styles.gallery}>
            {gallery.map(image => {
              return (
                <figure className={styles.gallery__imageWrapper}>
                  <img
                    key={image}
                    src={image}
                    alt="Solo/Group"
                    className={styles.gallery__image}
                  />
                </figure>
              );
            })}
          </div>
          <div className={styles.list}>
            <h2 className={styles.list__heading}>
              What's on Melodify?
            </h2>
            {modernLisiting.map(({ title, description }) => (
              <>
                <h3 className={styles.list__title}>
                  {title}
                </h3>
                <p className={styles.list__description}>
                  {description}
                </p>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { Home };