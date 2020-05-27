/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styles from './genres.module.scss';

const Genres = ({ GenresList }) => {
  return (
    <div className={styles.genres}>
      <div className={styles.genres__typo}>
        <h1 className={styles.genres__heading}>
          Discover Genres
        </h1>
        <a
          href="#"
          className={styles.genres__seeall}
        >
          See All
        </a>
      </div>

      <div className={styles.genres__container}>
        {GenresList.map(({ type, url }) => (
          <figure key={type}>
            <img
              src={url}
              alt="Genre"
              className={styles.genres__image}
            />
            <div className={styles.genres__typeholder}>
              <p className={styles.genres__type}>
                {type}
              </p>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};

export { Genres };