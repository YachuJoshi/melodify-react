import React from 'react';

import styles from './features.module.scss';

import { GoLocation, GoPlug, GoGlobe } from 'react-icons/go';
import { GiMusicalNotes } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Features = () => {
  return (
    <div className="row">
      <h2 className={styles.features__heading}>
        Features We Provide You
        </h2>
      <ul className={styles.features__list}>
        <li className={styles.features__item}>
          <GoLocation className={styles.features__icon} />
          <h3 className={styles.features__title}>
            Multiple locations
            </h3>
          <p className={styles.features__description}>
            Manage your music for all locations with ease, from the online app. Do you want the same
            atmosphere everywhere, or do you want to adapt the music to every zone or location? You have the right to choose!
            </p>
        </li>
        <li className={styles.features__item}>
          <GoPlug className={styles.features__icon} />
          <h3 className={styles.features__title}>
            Plug &amp; play
            </h3>
          <p className={styles.features__description}>
            Starting with Melodify is very easy. Our music service works on all popular platforms. Installation is child’s play.
            </p>
        </li>
        <li className={styles.features__item}>
          <GiMusicalNotes className={styles.features__icon} />
          <h3 className={styles.features__title}>
            Music tailored to your taste
            </h3>
          <p className={styles.features__description}>
            Our music consultants are happy to build a music experience tailored to your brand. Would you prefer to do this yourself?
            We make sure you have all the tools you need.
            </p>
        </li>
        <li className={styles.features__item}>
          <GoGlobe className={styles.features__icon} />
          <h3 className={styles.features__title}>
            Local &amp; global
            </h3>
          <p className={styles.features__description}>
            Create the same recognisable atmosphere in all your locations worldwide, but do it using music that is known locally.
            Say which theme you choose and Melodify will do the rest of the work.
            </p>
        </li>
        <li className={styles.features__item}>
          <FaStar className={styles.features__icon} />
          <h3 className={styles.features__title}>
            Varied and up to date
            </h3>
          <p className={styles.features__description}>
            Mainstream or alternative, commercial or royalty-free: you find everything in Melodify. We provide variation and daily
            updates of the music database.
            </p>
        </li>
        <li className={styles.features__item}>
          <MdDashboard className={styles.features__icon} />
          <h3 className={styles.features__title}>
            Different roles
            </h3>
          <p className={styles.features__description}>
            Administration, selecting music, planning commercial messages, and more ... Allocate specific roles to all
            users of Melodify In-Store.
            </p>
        </li>
      </ul>
    </div>
  );
};

export { Features };