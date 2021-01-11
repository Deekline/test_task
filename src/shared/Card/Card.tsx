import React, { FC } from 'react';

import './styles.scss';

export const Card: FC = ({ children }) => {
  return <div className='card__container'>{children}</div>;
};
