import React, { ReactText, useEffect, useState } from 'react';
import ReactSelect, { Props, OptionTypeBase } from 'react-select';

import { Option, MenuList } from './components';

export const CustomSelect: React.FunctionComponent<Readonly<
  Pick<Props<OptionTypeBase>, ReactText>
>> = ({ options, ...props }) => {
  const [noOptionsMessage, changeNoOptionsMessage] = useState('');

  useEffect(() => {
    !props.isDisabled && changeNoOptionsMessage('Custom no optionsMessage');
  });

  return (
    <div>
      <ReactSelect
        // defaultValue={options}
        hideSelectedOptions={false}
        getOptionLabel={option => option.customLabel}
        getOptionValue={option => option.customValue}
        noOptionsMessage={() => {
          return noOptionsMessage;
        }}
        theme={theme => ({
          ...theme,
        })}
        classNamePrefix={'custom-class'}
        styles={{
          valueContainer: (st, { isSelected }) => {
            return {
              ...st,
            };
          },
          container: st => {
            return { ...st, display: 'flex' };
          },
          input: st => {
            return { ...st, width: '100px' };
          },
          multiValueLabel: st => {
            return { ...st, background: 'red' };
          },
          menuList: st => {
            return { ...st };
          },
          option: (st, { isSelected }) => {
            const customStyle = isSelected
              ? {
                  color: 'red',
                  backgroundColor: 'transparent',
                  '::after': {
                    content: "'\\2713'",
                    display: 'inline-block',
                    position: 'absolute',
                    right: '10px',
                  },
                }
              : {};
            return {
              ...st,
              ...customStyle,
            };
          },
        }}
        options={options}
        {...props}
        components={{
          Option,
          MenuList,
        }}
        isMulti={true}
        onChange={() => console.log('selected')}
      />
    </div>
  );
};
