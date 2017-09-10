import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    console.log(this.props.viewport);
  }

  render() {
    return(
      <div>
        <h1 style={{marginLeft: '5%'}} >UndocuBonds</h1>
        <hr width='90%'/>
      </div>
    )
  }
}

export default Home;