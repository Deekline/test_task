import React, { FC, memo } from 'react';

import './styles.scss';

type TProps = {
  setFieldSize: () => void;
  className: string;
};

export const Button: FC<TProps> = memo(
  ({ setFieldSize, className, children }) => {
    return (
      <button className={`button ${className}`} onClick={setFieldSize}>
        {children}
      </button>
    );
  },
);
