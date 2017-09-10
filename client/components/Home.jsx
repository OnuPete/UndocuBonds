import React, { Component } from 'react';
import './../styles/App.css'

class Home extends Component {
  componentDidMount() {
    console.log(this.props.viewport);
  }

  render() {
    return(
      <div id='home' style={{textAlign: 'center'}}>
        <div className='animated fadeInUp'>
        <img src="./../assets/undocubonds colors.png" alt=""/>
        <hr width='25%'/>
        <p style={{color: 'white', letterSpacing: '2px'}}>A resource center to help your loved ones</p>
        </div>
      </div>
    )
  }
}

export default Home;
