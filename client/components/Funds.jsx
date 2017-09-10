import React, { Component } from 'react';
import * as text from './../assets/fundsInfo.json';

class Funds extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        {text.headInfo}
      </div>
    );
  }
}

export default Funds;
