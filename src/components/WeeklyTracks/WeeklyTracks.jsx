import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './weeklytracks.module.scss';

const WeeklyTracks = () => {
  const [weeklyTracks, setWeeklyTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET',
      url: 'http://localhost:1337/weekly-top-tracks'
    }).then(res => {
      setLoading(false);
      setError(false);
      setWeeklyTracks(res.data);
    }).catch(err => {
      setLoading(false);
      setError(true);
    });
  }, []);

  return (
    <div className={styles.weeklytracks}>
      {loading && <span>Loading...</span>}
      {error && <span>Error...</span>}
      <h1 className={styles.weeklytracks__heading}>
        Weekly Top Tracks
      </h1>
      <div className={styles.weeklytracks__container}>
        {weeklyTracks.map(({ artist, title, image }) => (
          <div
            key={title}
            className={styles.weeklytracks__details}>
            <figure>
              <img
                src={`http://localhost:1337${image.url}`}
                alt="Weekly Track"
                className={styles.weeklytracks__image}
              />
            </figure>
            <div className={styles.weeklytracks__title}>
              {title}
            </div>
            <div className={styles.weeklytracks__artist}>
              {artist}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WeeklyTracks };