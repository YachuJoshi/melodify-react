import React from 'react';
import Logo from '../img/melodify-logo.png';

import styles from '../sass/pages/webplayer.module.scss';

const WebPlayerPage = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}></header>
        <div className={styles.sidebar}>
          <figure
            className={styles.logo}
          >
            <img
              src={Logo}
              alt="Logo"
              className={styles.logo__image}
            />
            <figcaption
              className={styles.logo__name}>
              Melodify
            </figcaption>
          </figure>
          
        </div>
        <div className={styles.weeklytracks}>WeeklyTracks</div>
        <div className={styles.topcharts}>Top Charts</div>
        <div className={styles.topartists}>Top Artists</div>
        <div className={styles.genres}>Genres</div>
      </div>
      <div className={styles.player}>Player</div>
    </>
  );
};

export { WebPlayerPage };