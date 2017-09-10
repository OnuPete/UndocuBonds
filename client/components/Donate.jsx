import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Donate = () => {
  return (
    <FlatButton
      backgroundColor='lightgreen'
      labelStyle={{color: '#222', letterSpacing: '4px', fontSize: '1em'}}
      style={{position: 'fixed', bottom: '0', width: '100%', height: '50px'}}
      label='Donate' />
  );
};

export default Donate;
