import React from 'react';
import { OptionProps, OptionTypeBase, components } from 'react-select';

import './option-style.css';

const { Option: ReactSelectOption } = components;

export const Option: React.FunctionComponent<OptionProps<OptionTypeBase>> = ({
  className,
  children,
  ...props
}) => {
  const optionClassName = props.isSelected
    ? className + ' ' + 'option--selected'
    : className;

  const { label } = props;

  return (
    <ReactSelectOption {...props} className={optionClassName}>
      <div className="foo" style={{ display: 'none' }}>
        {children}
      </div>
      {label.length > 30 ? `${label.slice(0, 5)}...${label.slice(-5)}` : label}
    </ReactSelectOption>
  );
};
