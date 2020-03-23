import React from 'react';
import { PlaceholderProps, OptionTypeBase, components } from 'react-select';

const { Placeholder: ReactSelect } = components;
export const Placeholder: React.FunctionComponent<PlaceholderProps<
  OptionTypeBase
>> = props => {
  return <ReactSelect {...props}>Custom placeholder</ReactSelect>;
};
