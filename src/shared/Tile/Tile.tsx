import React, { FC } from 'react';

import './styles.scss';

type TProps = {
  triggerTile: () => void;
};

export const Tile: FC<TProps> = ({ triggerTile }) => {
  return <div onMouseEnter={triggerTile} className='tile' />;
};
