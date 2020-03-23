import { OptionTypeBase, components } from 'react-select';
import React from 'react';
import { ControlProps } from 'react-select/src/components/Control';

const { Control: ReactSelectControl } = components;

export const Control: React.FunctionComponent<ControlProps<OptionTypeBase>> = ({
  children,
  ...props
}) => {
  return (
    <div id="foo-control">
      <ReactSelectControl {...props}>{children}</ReactSelectControl>
    </div>
  );
};
