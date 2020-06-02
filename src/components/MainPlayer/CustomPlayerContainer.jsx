import React from 'react';

import { Player } from './Player';

const CustomPlayerContainer = ({ handleMusicShuffle, song }) => {
  return (
    <Player
      src={`https://melodify-music-app.herokuapp.com${song.Song[0].url}`}
      handleMusicShuffle={handleMusicShuffle}
    />
  )
};

export { CustomPlayerContainer };