import React, { useState, useEffect } from "react";
import { cms } from "../../service";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

import styles from "./weeklytracks.module.scss";

const WeeklyTracks = () => {
  const [weeklyTracks, setWeeklyTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    cms
      .get("/api/weekly-top-tracks?populate=*")
      .then(({ data: responseData }) => {
        const { data } = responseData;
        setLoading(false);
        setError(false);
        setWeeklyTracks(
          data.map((d) => ({
            artist: d.attributes.artist,
            title: d.attributes.title,
            image: d.attributes.image,
          }))
        );
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className={styles.weeklytracks}>
      <h1 className={styles.weeklytracks__heading}>Weekly Top Tracks</h1>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      <div className={styles.weeklytracks__container}>
        {weeklyTracks.map(({ artist, title, image }) => (
          <div key={title} className={styles.weeklytracks__details}>
            <figure>
              <img
                src={image.data.attributes.url}
                alt="Weekly Track"
                className={styles.weeklytracks__image}
              />
            </figure>
            <div className={styles.weeklytracks__title}>{title}</div>
            <div className={styles.weeklytracks__artist}>{artist}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { WeeklyTracks };
