import React from 'react';
import { OptionTypeBase, components } from 'react-select';
import { ContainerProps } from 'react-select/src/components/containers';

import './container.css';

const { SelectContainer } = components;

export const Container: React.FunctionComponent<ContainerProps<
  OptionTypeBase
>> = ({ children, ...props }) => {
  return (
    <div id="foo-container" data-react-id="data-select">
      <SelectContainer {...props}>{children}</SelectContainer>
    </div>
  );
};
