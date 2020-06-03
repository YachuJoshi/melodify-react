import React from 'react';

import { Player } from './Player';

const CustomPlayerContainer = ({ handleMusicShuffle, url }) => {
  return (
    <Player
      src={url}
      handleMusicShuffle={handleMusicShuffle}
    />
  )
};

export { CustomPlayerContainer };