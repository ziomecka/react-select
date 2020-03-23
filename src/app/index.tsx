import React, { Fragment } from 'react';

import { CustomSelect } from './custom-select';
import { singleReactSelect } from './consts';

export const App: React.FunctionComponent = () => {
  return (
    <Fragment>
      <h1 style={{ margin: '10px auto', textAlign: 'center' }}>react-select</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CustomSelect {...singleReactSelect} />
      </div>
    </Fragment>
  );
};
