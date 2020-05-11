import React from 'react';

import styles from './testimonialBox.module.scss';

const TestimonialBox = ({ customers }) => {
  return (
    customers.map(({ name, image, heading, description }) => (
      <div key={name} className="row">
        <div className={styles.story}>
          <figure className={styles.story__shape}>
            <img src={image} alt="Person" className={styles.story__image} />
            <figcaption className={styles.story__caption}>
              {name}
            </figcaption>
          </figure>
          <div className={styles.story__text}>
            <h3 className={styles.story__heading}>
              {heading}
            </h3>
            <p className={styles.story__description}>
              {description}
            </p>
          </div>
        </div>
      </div>
    ))
  );
};

export { TestimonialBox };