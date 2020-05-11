import React from 'react';

import styles from './sideList.module.scss';

const SideList = () => {
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
    <div className={styles.list}>
      <h2 className={styles.list__heading}>
        What's on Melodify?
      </h2>
      {modernLisiting.map(({ title, description }) => (
        <div key={title}>
          <h3 className={styles.list__title}>
            {title}
          </h3>
          <p className={styles.list__description}>
            {description}
          </p>
        </div>
      ))}
    </div>
  );
};

export { SideList };