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
      url: 'https://melodify-audio.herokuapp.com/weekly-top-tracks'
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
        {weeklyTracks.map(({ Artist, Title, Image }) => (
          <div
            key={Title}
            className={styles.weeklytracks__details}>
            <figure>
              <img
                src={Image[0].url}
                alt="Weekly Track"
                className={styles.weeklytracks__image}
              />
            </figure>
            <div className={styles.weeklytracks__title}>
              {Title}
            </div>
            <div className={styles.weeklytracks__artist}>
              {Artist}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WeeklyTracks };