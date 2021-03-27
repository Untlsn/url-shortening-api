import React from 'react';
import { StateInputTextProps } from './types';

const StateInputText = ({ onChange, ...props }: StateInputTextProps) => {
  return (
    <input
      {...props}
      type='text'
      onChange={({ target }) => onChange(target.value)} />
  );
};

export default StateInputText;
