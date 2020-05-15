import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import styles from './sideList.module.scss';

const SideList = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <Waypoint onEnter={() => setIsVisible(true)}>
      <div className={styles.list}>
        <h2 className={isVisible ?
          `${styles.list__heading} ${styles.list__heading__animated}` :
          `${styles.list__heading}`}
        >
          What's on Melodify?
      </h2>
        {modernLisiting.map(({ title, description }) => (
          <div key={title}>
            <h3 className={isVisible ?
              `${styles.list__title} ${styles.list__title__animated}` :
              `${styles.list__title}`}
            >
              {title}
            </h3>
            <p className={isVisible ?
              `${styles.list__description} ${styles.list__description__animated}` :
              `${styles.list__description}`}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </Waypoint >
  );
};

export { SideList };