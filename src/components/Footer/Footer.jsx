import React from 'react';

import styles from './footer.module.scss';

import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const footerItemList = [
    'About Us',
    'Web Player',
    'Stories',
    'News',
    'Brands'
  ]
  return (
    <footer className={styles.footer}>
      <div className={`row ${styles.footer__row}`}>
        <ul className={styles.footer__aboutUsList}>
          {footerItemList.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
          }
        </ul>

        <ul className={styles.footer__socialIconsList}>
          <li> <FaFacebookF className={styles.footer__socialIcon} /> </li>
          <li> <FaTwitter className={styles.footer__socialIcon} /> </li>
          <li> <FaGooglePlusG className={styles.footer__socialIcon} /> </li>
          <li> <FaInstagram className={styles.footer__socialIcon} /> </li>
          <li> <FaGithub className={styles.footer__socialIcon} /> </li>
        </ul>

      </div>
      <div className="row">
        <p className={styles.footer__text}>
          Copyright {<> &copy; </>} 2020 by Yachu Joshi. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
}

export { Footer };