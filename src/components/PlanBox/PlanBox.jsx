import React from 'react';
import { Link } from '@reach/router';

import styles from './planBox.module.scss';

import { IoMdCheckmark } from 'react-icons/io';
import { GiCrossMark } from 'react-icons/gi';

const PlanBox = ({ plans }) => {
  return (
    plans.map(({ title, price, features }) => (
      <div key={title} className={styles.plans__box}>
        <h3 className={styles.plans__title}>
          {title}
        </h3>
        <div className={styles.plans__price}>
          {price}
          <span>/month</span>
        </div>
        <ul className={styles.plans__features}>
          {features.map(({ name, granted }) => (
            <li
              className={styles.plans__featuresItem}
              key={name}
            >
              {granted ?
                <IoMdCheckmark className={styles.plans__iconCheck} /> :
                <GiCrossMark className={styles.plans__iconCross} />}
              <span className={styles.plans__feature__title}>
                {name}
              </span>
            </li>
          ))}
        </ul>
        {title === 'Free' ?
          <Link to="/webplayer">
            <button className={styles.plans__buttonFree}>
              Get Free
          </button>
          </Link> :
          <button className={styles.plans__buttonPremium}>
            Get Premium
          </button>}
      </div>
    ))
  );
};

export { PlanBox };