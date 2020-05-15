import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';

import styles from './gallery.module.scss';

const Gallery = ({ gallery }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Waypoint onEnter={() => setIsVisible(true)}>
      <div className={isVisible ?
        `${styles.gallery} ${styles.gallery__animated}` :
        `${styles.gallery}`}>
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
    </Waypoint>
  );
};

export { Gallery };