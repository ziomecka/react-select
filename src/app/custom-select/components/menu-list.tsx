import { OptionTypeBase, components } from 'react-select';
import React, { useState } from 'react';
import { MenuListComponentProps } from 'react-select/src/components/Menu';

const { MenuList: ReactSelectMenuList } = components;

export const MenuList: React.FunctionComponent<MenuListComponentProps<
  OptionTypeBase
>> = ({ children, ...props }) => {
  const [selectedOption, changeSelectedOption] = useState('');
  return (
    <div
      onPointerMove={() => {
        changeSelectedOption(
          document.querySelector('.custom-class__option--is-focused .foo')
            .textContent,
        );
      }}
      onPointerLeave={() => changeSelectedOption('')}
    >
      <ReactSelectMenuList {...props}>
        {children}
        <div
          style={{
            display: 'inline-flex',
            borderTop: '1px solid bold',
            padding: '10px',
            marginTop: '10px',
          }}
        >
          {selectedOption}
        </div>
      </ReactSelectMenuList>
    </div>
  );
};
