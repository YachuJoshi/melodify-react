import React from 'react';

import styles from './gallery.module.scss';

const Gallery = ({ gallery }) => {
  return (
    <div className={styles.gallery}>
      {gallery.map((image, index) => {
        return (
          <figure
            key={`${image}${index}`} className={styles.gallery__imageWrapper}>
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
  );
};

export { Gallery };