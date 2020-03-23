import React from 'react';
import { CommonProps, OptionTypeBase } from 'react-select';

export const ClearIndicator: React.FunctionComponent<CommonProps<
  OptionTypeBase
>> = props => {
  return (
    <p id="foo-clear-indicator" onClick={() => props.clearValue()}>
      Custom clear indicator
    </p>
  );
};
