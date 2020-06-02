import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CustomPlayerContainer } from './CustomPlayerContainer';
import { SongWrapperBox } from './SongWrapperBox';

import styles from './mainplayer.module.scss';

const MainPlayer = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [songsList, setSongsList] = useState([]);
  const [filteredSongList, setFilteredSongList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://melodify-music-app.herokuapp.com/music-lists"
    }).then(res => {
      setLoading(false);
      setSongsList(res.data);
    }).catch(err => {
      setLoading(false);
      setError(true);
      console.error(err);
    });
  }, []);

  useEffect(() => {
    if (!songsList[currentIndex]) return;
    setFilteredSongList([songsList[currentIndex]]);
  }, [songsList, currentIndex]);

  const handleMusicShuffle = (status) => {
    if (status === 'PREVIOUS') {
      setCurrentIndex(index => {
        if (index <= 0) {
          return 0;
        }
        return index - 1;
      });
    }

    if (status === 'NEXT') {
      setCurrentIndex(index => {
        if (index >= songsList.length) {
          return songsList.length;
        }
        return index + 1;
      });
    }
  }

  const handleMusicChange = (index) => {
    setCurrentIndex(index);
  }

  return (
    <>
      <div className={styles.topcharts}>
        <h1 className={styles.topcharts__heading}>
          Billborad Top Charts
      </h1>
        {loading && <span>Loading... <span role="img" aria-label="Haha">🥳</span> </span>}
        {error && <span>Oops.. Something Went Wrong...</span>}
        <div className={styles.songs__collection}>
          {songsList.map((song, index) => (
            <SongWrapperBox
              key={song.Title}
              song={song}
              index={index}
              handleMusicChange={handleMusicChange}
            />
          ))}
        </div>
      </div>
      <div className={styles.musicplayer}>
        {filteredSongList.map(song => (
          <div key={song} className={styles.sPlayer}>
            <div className={styles.sDetails}>
              <div className={styles.sName}>{song.Title}</div>
              <div className={styles.sArtist}>{song.Artist}</div>
            </div>
            <CustomPlayerContainer
              handleMusicShuffle={handleMusicShuffle}
              key={song.Title}
              song={song}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export { MainPlayer };