import React from 'react';

import styles from './ctaSideBar.module.scss';

const CTASideBar = () => {
  return (
    <div className={styles.cta__textWrapper}>
      <h2 className={styles.cta__heading}>
        Still Not On Melodify?
      </h2>
      <p className={styles.cta__paragraph}>
        Over 30 million tracks; thousands of curated playlists; Discover Weekly; Melodify Running;
        Radio; Chromecast, sound system, car, TV and PlayStation intregation; sharing and creating playlists
        with your friends... All of this is ready for you.
      </p>
      <button className={styles.cta__button}>
        Get Started
      </button>
    </div>
  );
};

export { CTASideBar };