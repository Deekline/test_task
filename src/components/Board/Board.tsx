import React, { FC } from 'react';
import { Tile } from '../../shared';

import './styles.scss';

type TProps = {
  matrix: string[][];
  triggerTile: (tileName: string) => void;
};

export const Board: FC<TProps> = ({ matrix, triggerTile }) => {
  return (
    <div className='board'>
      {matrix.map((array, index) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className='board__row' key={index}>
            {array.map(item => {
              return <Tile key={item} triggerTile={() => triggerTile(item)} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
