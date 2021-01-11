import React, { forwardRef } from 'react';
import Select from 'react-select';
import { TNormalizeData } from '../../entities/general';

import './styles.scss';

type TProps = {
  modes: TNormalizeData[];
};

export const Picker = forwardRef<any, TProps>(({ modes }, ref) => {
  return (
    <Select
      ref={ref}
      className='select'
      name='Pick Mode'
      options={modes}
      placeholder={'Pick mode'}
    />
  );
});
