import React from 'react';

import styles from '../sass/pages/webplayer.module.scss';

import { SideBar } from '../components/SideBar/SideBar';
import { WeeklyTracks } from '../components/WeeklyTracks/WeeklyTracks';
import { TopArtists } from '../components/TopArtists/TopArtists';

import { TOP_ARTISTS } from '../Data';

const WebPlayerPage = () => {
  return (
    <>
      <div className={styles.container}>
        <SideBar />
        <header className={styles.header}></header>
        <WeeklyTracks />
        <div className={styles.topcharts}>Top Charts</div>
        <TopArtists
          TopArtistsList={TOP_ARTISTS}
        />
        <div className={styles.genres}>Genres</div>
      </div>
      <div className={styles.player}>Player</div>
    </>
  );
};

export { WebPlayerPage };