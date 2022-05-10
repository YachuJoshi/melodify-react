import React, { useState } from "react";

import { TiHeartFullOutline } from "react-icons/ti";
import { FaPlus, FaCheck } from "react-icons/fa";

import styles from "./mainplayer.module.scss";

const SongWrapperBox = ({ song, index, handleMusicChange }) => {
  const [favourite, setFavourite] = useState(false);
  const [addedToList, setAddedToList] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.song__details}
        onClick={() => handleMusicChange(index)}
      >
        <div className={styles.song__name}>{song.title}</div>
        <div className={styles.song__artist}>{song.artist}</div>
      </div>
      <div className={styles.song__icons}>
        {favourite ? (
          <TiHeartFullOutline
            className={`${styles.icon__love} ${styles.icon__love__active}`}
            onClick={() => setFavourite(!favourite)}
          />
        ) : (
          <TiHeartFullOutline
            className={styles.icon__love}
            onClick={() => setFavourite(!favourite)}
          />
        )}

        {!addedToList ? (
          <FaPlus
            className={styles.icon__plus}
            onClick={() => setAddedToList(!addedToList)}
          />
        ) : (
          <FaCheck
            className={styles.icon__check}
            onClick={() => setAddedToList(!addedToList)}
          />
        )}
      </div>
    </div>
  );
};

export { SongWrapperBox };
