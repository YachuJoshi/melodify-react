import React from 'react';
import { Link } from '@reach/router';

import Logo from '../../img/melodify-logo.png';

import { MdExplore } from 'react-icons/md';
import {
  IoMdVolumeHigh,
  IoMdRadio,
  IoMdMic,
  IoIosMusicalNote,
  IoMdAlbums,
  IoMdHeart
} from 'react-icons/io';
import { GiCompactDisc } from 'react-icons/gi';
import { FaFile } from 'react-icons/fa';

import styles from './sidebar.module.scss';

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <figure
        className={styles.logo}
      >
        <img
          src={Logo}
          alt="Logo"
          className={styles.logo__image}
        />
        <figcaption
          className={styles.logo__name}>
          <Link 
            to="/"
            className={styles.logo__link}>
            Melodify
          </Link>
        </figcaption>
      </figure>

      <div className={styles.recommend}>

        <h3 className={styles.recommend__heading}>
          Recommend
      </h3>
        <ul
          className={styles.recommend__list}>

          <li className={`${styles.recommend__item} ${styles.recommend__item__active}`}>
            <MdExplore className={styles.recommend__icon} />
            <p className={styles.recommend__text}>Explore</p>
          </li>

          <li className={styles.recommend__item}>
            <IoMdVolumeHigh className={styles.recommend__icon} />
            <p className={styles.recommend__text}>Genres</p>
          </li>

          <li className={styles.recommend__item}>
            <IoMdRadio className={styles.recommend__icon} />
            <p className={styles.recommend__text}>Radio</p>
          </li>

          <li className={styles.recommend__item}>
            <IoMdMic className={styles.recommend__icon} />
            <p className={styles.recommend__text}>Artists</p>
          </li>

          <li className={styles.recommend__item}>
            <GiCompactDisc className={styles.recommend__icon} />
            <p className={styles.recommend__text}>Albums</p>
          </li>

        </ul>
      </div>

      <div className={styles.library}>

        <h3 className={styles.library__heading}>
          My Library
      </h3>
        <ul
          className={styles.library__list}>

          <li className={styles.library__item}>
            <IoIosMusicalNote className={styles.library__icon} />
            <p className={styles.library__text}>Recently Played</p>
          </li>

          <li className={styles.library__item}>
            <IoMdAlbums className={styles.library__icon} />
            <p className={styles.library__text}>Albums</p>
          </li>

          <li className={styles.library__item}>
            <IoMdHeart className={styles.library__icon} />
            <p className={styles.library__text}>Favourite Songs</p>
          </li>

          <li className={styles.library__item}>
            <FaFile className={styles.library__icon} />
            <p className={styles.library__text}>Local Files</p>
          </li>

        </ul>
      </div>

    </div>
  );
};

export { SideBar }; 