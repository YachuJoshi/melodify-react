import React, { useState } from 'react';
import { Link } from '@reach/router';

import styles from './ctaSideBar.module.scss';
import { Waypoint } from 'react-waypoint';

const CTASideBar = () => {
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  return (
    <Waypoint onEnter={() => setIsCtaVisible(true)}>
      <div className={styles.cta__textWrapper}>
        <h2 className={isCtaVisible ?
          `${styles.cta__heading} ${styles.cta__heading__animated}` :
          `${styles.cta__heading}`}>
          Still Not On Melodify?
      </h2>
        <p className={isCtaVisible ?
          `${styles.cta__paragraph} ${styles.cta__paragraph__animated}` :
          `${styles.cta__paragraph}`}>
          Over 30 million tracks; thousands of curated playlists; Discover Weekly; Melodify Running;
          Radio; Chromecast, sound system, car, TV and PlayStation intregation; sharing and creating playlists
          with your friends... All of this is ready for you.
        </p>
        <Link to="/webplayer">
          <button className={isCtaVisible ?
            `${styles.cta__button} ${styles.cta__button__animated}` :
            `${styles.cta__button}`}>
            Get Started
        </button>
        </Link>
      </div>
    </Waypoint>
  );
};

export { CTASideBar };