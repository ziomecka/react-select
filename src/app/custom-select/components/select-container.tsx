import React from 'react';
import { components, OptionTypeBase } from 'react-select/';
import { ContainerProps } from 'react-select/src/components/containers';

const { SelectContainer: ReactSelectContainer } = components;

export const SelectContainer: React.FunctionComponent<ContainerProps<
  OptionTypeBase
>> = ({ children, ...props }) => {
  return <ReactSelectContainer {...props}>{children}</ReactSelectContainer>;
};
