import React, { FC } from 'react';

import './styles.scss';
import { Card } from '../../shared';

type TProps = {
  triggeredHistory: string[];
};

export const HistoryCards: FC<TProps> = ({ triggeredHistory }) => {
  return (
    <div className='history'>
      <h2 className='history__title'>History</h2>
      <div className='history__container'>
        {triggeredHistory &&
          (triggeredHistory as string[]).map(tile => {
            return (
              <div key={tile + Math.random()}>
                <Card>{tile}</Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};
