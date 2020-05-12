import React from 'react';

import styles from './video.module.scss';

const Video = ({ VideoSourceMp4, VideoSourceWebm }) => {
  return (
    <div className={styles.background__video}>
      <video className={styles.background__video__content} autoPlay muted loop>
        <source src={VideoSourceMp4} type="video/mp4" />
        <source src={VideoSourceWebm} type="video/webm" />
      Your Browser Doesn't Support Video!
    </video>
    </div>
  );
};

export { Video };