import React from 'react';

import styles from './imageComposition.module.scss';

const ImageComposition = ({ composition }) => {
  return (
    <div className={styles.cta__composition}>
      {composition.map((image) => (
        <img
          key={image}
          src={image}
          alt="Famous Singer"
          className={`${styles.cta__image}`} />
      ))}
    </div>
  );
};

export { ImageComposition };