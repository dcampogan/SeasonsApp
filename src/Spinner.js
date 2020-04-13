import React from 'react';
import { getDefaultNormalizer } from '@testing-library/react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};

// if no message prop passed to Spinner component
// below sets up a default message
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;