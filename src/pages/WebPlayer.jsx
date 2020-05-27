import React from 'react';

import styles from '../sass/pages/webplayer.module.scss';

import { SideBar } from '../components/SideBar/SideBar';
import { WeeklyTracks } from '../components/WeeklyTracks/WeeklyTracks';
import { TopArtists } from '../components/TopArtists/TopArtists';
import { Genres } from '../components/Genres/Genres';

import { MainPlayer } from '../components/MainPlayer/MainPlayer';

import { TOP_ARTISTS } from '../Data';
import { GENRES } from '../Data';

const WebPlayerPage = () => {
  return (
    <>
      <div className={styles.container}>
        <SideBar />
        <header className={styles.header}></header>
        <WeeklyTracks />
        <TopArtists
          TopArtistsList={TOP_ARTISTS}
        />
        <Genres
          GenresList={GENRES}
        />
        <MainPlayer />
      </div>
    </>
  );
};

export { WebPlayerPage };