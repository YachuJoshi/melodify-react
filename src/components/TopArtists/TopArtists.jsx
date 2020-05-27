/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styles from './topartists.module.scss';

const TopArtists = ({ TopArtistsList }) => {
  return (
    <div className={styles.topartists}>
      <div className={styles.topartists__typo}>
        <h1 className={styles.topartists__heading}>
          Monthly Top Artists
        </h1>
        <a
          href="#"
          className={styles.topartists__seeall}
        >
          See All
        </a>
      </div>

      <div
        className={styles.topartists__imagecontainer}
      >
        {TopArtistsList.map(({ name, url }) => (
          <figure
            key={name}
          >
            <img
              src={url}
              alt="Top Artist"
              className={styles.topartists__image}
            />
            <figcaption className={styles.topartists__name}>
              {name}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export { TopArtists };