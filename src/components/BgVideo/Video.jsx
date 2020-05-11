import React from 'react';

import styles from './video.module.scss';

const Video = ({ VideoSource }) => {
  return (
    <div className={styles.background__video}>
      <video className={styles.background__video__content} autoPlay muted loop>
        <source src={VideoSource} type="video/mp4" />
      Your Browser Doesn't Support Video!
    </video>
    </div>
  );
};

export { Video };